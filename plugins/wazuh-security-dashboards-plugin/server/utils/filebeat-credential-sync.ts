/*
 *   Copyright OpenSearch Contributors
 *
 *   Licensed under the Apache License, Version 2.0 (the "License").
 *   You may not use this file except in compliance with the License.
 *   A copy of the License is located at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 *   or in the "license" file accompanying this file. This file is distributed
 *   on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 *   express or implied. See the License for the specific language governing
 *   permissions and limitations under the License.
 */

// GS 인증용: Filebeat는 매니저→인덱서 알림 적재(에이전트 정보/SCA/각종 이벤트 전부
// 포함)를 위해 admin 계정 자격증명을 자기 키스토어에 별도로 저장해서 쓴다
// (`filebeat keystore`, zero-install.sh 설치 시 admin 비밀번호로 초기화됨). 이 프로젝트에서
// admin 비밀번호를 바꿀 수 있는 경로가 두 곳 생겼다(최초 로그인 강제 변경 모달 /
// 내부사용자 편집 화면) — 대시보드 쪽 OpenSearch Security 비밀번호만 바뀌고 Filebeat
// 키스토어는 그대로 남으면, Filebeat가 인덱서에 401 Unauthorized로 인증 실패하면서
// 알림 적재 파이프라인 전체가 조용히 끊긴다(2026-09-04 실제 발생 확인 — 에이전트는
// Active로 정상 연결되지만 정보/SCA/이벤트가 전혀 인덱서에 안 들어가는 증상으로 나타남).
//
// 이 헬퍼는 admin 비밀번호 변경이 성공한 직후, 서버가 직접 Filebeat 키스토어를 새
// 비밀번호로 갱신하고 Filebeat를 재시작해서 이 괴리가 생기지 않도록 한다.
//
// 전제 조건(이 저장소 범위 밖, 서버에 직접 설정 필요): wazuh-dashboard 서비스 계정이
// 아래 두 명령을 비밀번호 없이 실행할 수 있어야 한다(sudoers, 예:
// /etc/sudoers.d/wazuh-dashboard-filebeat-sync):
//   wazuh-dashboard ALL=(root) NOPASSWD: /usr/share/filebeat/bin/filebeat keystore *
//   wazuh-dashboard ALL=(root) NOPASSWD: /usr/bin/systemctl restart filebeat
// 권한이 없으면 아래 실행은 실패하고 에러만 로그로 남는다 — admin 비밀번호 변경 자체는
// 이미 끝난 뒤이므로 막지 않는다(fail-open). 로그가 남으면 반드시 수동으로
// `filebeat keystore add password --force --stdin` 후 재시작해야 한다.

import { spawn } from 'child_process';
import { Logger } from 'opensearch-dashboards/server';

const FILEBEAT_BIN = '/usr/share/filebeat/bin/filebeat';
const SYSTEMCTL_BIN = '/usr/bin/systemctl';

function runCommand(command: string, args: string[], stdinInput?: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      stdio: [stdinInput !== undefined ? 'pipe' : 'ignore', 'pipe', 'pipe'],
    });
    let stderr = '';
    child.stderr.on('data', (chunk: Buffer) => {
      stderr += chunk.toString();
    });
    child.on('error', (error) => reject(error));
    child.on('close', (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(
          new Error(`"${command} ${args.join(' ')}" exited with code ${code}: ${stderr.trim()}`)
        );
      }
    });
    if (stdinInput !== undefined && child.stdin) {
      child.stdin.write(stdinInput);
      child.stdin.end();
    }
  });
}

export async function syncFilebeatAdminPassword(
  newPassword: string,
  logger: Logger
): Promise<void> {
  try {
    // GS 인증용: -n(non-interactive) — sudoers 미설정 시 비밀번호 프롬프트를 기다리며
    // 요청이 무한 대기하지 않고 즉시 실패하도록 함.
    await runCommand(
      'sudo',
      ['-n', FILEBEAT_BIN, 'keystore', 'add', 'password', '--force', '--stdin'],
      newPassword
    );
    await runCommand('sudo', ['-n', SYSTEMCTL_BIN, 'restart', 'filebeat']);
    logger.info(
      'GS 인증용: admin 비밀번호 변경에 따라 Filebeat 키스토어 갱신 및 재시작 완료'
    );
  } catch (error: any) {
    // GS 인증용: 실패해도 admin 비밀번호 변경 자체는 이미 성공했으므로 상위로 에러를
    // 던지지 않는다 — 다만 이 로그가 남으면 Filebeat가 옛 비밀번호로 인증 실패 중일
    // 가능성이 높으므로(401 Unauthorized) 반드시 수동 조치가 필요하다.
    logger.error(
      `GS 인증용: admin 비밀번호 변경 후 Filebeat 키스토어 자동 갱신 실패 — 수동으로 ` +
        `"filebeat keystore add password --force --stdin" 실행 후 filebeat를 재시작해야 ` +
        `합니다(sudoers 설정 확인 필요). 원인: ${error.message || error}`
    );
  }
}
