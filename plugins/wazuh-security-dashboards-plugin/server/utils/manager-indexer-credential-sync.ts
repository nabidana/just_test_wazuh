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

// GS 인증용: Wazuh 매니저 자신도 인덱서 접속용 자격증명을 별도 키스토어에 보관한다
// (`/var/ossec/bin/wazuh-keystore -f indexer -k username/password`, zero-install.sh
// 설치 시 admin/admin으로 최초 설정). 이건 Filebeat 키스토어(filebeat-credential-sync.ts)와
// 완전히 별개의 저장소로, 매니저의 "indexer-connector"(Wazuh 4.8+에서 도입된 매니저→인덱서
// 직접 연동 — syscollector/SCA/취약점 등 wazuh-states-* 인덱스에 직접 문서를 씀, Filebeat가
// 담당하는 wazuh-alerts-* 경로와는 무관)가 이 값으로 인증한다.
//
// 2026-09-04 실제 장애로 확인: admin 비밀번호를 변경해도 이 키스토어 값은 그대로 남아서,
// 이후 매니저의 인덱서 접속이 401로 계속 실패 → 에이전트 연결은 정상인데 syscollector/SCA/
// 각종 인벤토리 정보가 전혀 인덱서에 안 들어가는 증상으로 나타남(Filebeat를 고쳐도 별도로
// 이 문제가 남아있었음 — 실제로 재현·검증 완료).
//
// 이 헬퍼는 admin 비밀번호 변경이 성공한 직후, 서버가 직접 이 키스토어를 새 비밀번호로
// 갱신하고 wazuh-manager를 재시작해서 이 괴리가 생기지 않도록 한다.
//
// 전제 조건(이 저장소 범위 밖, 서버에 직접 설정 필요): wazuh-dashboard 서비스 계정이
// 아래 두 명령을 비밀번호 없이 실행할 수 있어야 한다(sudoers, 예:
// /etc/sudoers.d/wazuh-dashboard-manager-indexer-sync):
//   wazuh-dashboard ALL=(root) NOPASSWD: /var/ossec/bin/wazuh-keystore -f indexer -k password -v *
//   wazuh-dashboard ALL=(root) NOPASSWD: /usr/bin/systemctl restart wazuh-manager
// 권한이 없으면 아래 실행은 실패하고 에러만 로그로 남는다 — admin 비밀번호 변경 자체는
// 이미 끝난 뒤이므로 막지 않는다(fail-open, filebeat-credential-sync.ts와 동일한 설계).
//
// 참고: 매니저 재시작만으로는 "재시작 전부터 연결돼 있던" 에이전트의 states 재동기화가
// 자동으로 재개되지 않는 것이 실제로 확인됨(에이전트 로컬 서비스 자체 재시작이 필요) —
// 이건 agents-restart.ts에서 별도로 처리한다.

import { spawn } from 'child_process';
import { Logger } from 'opensearch-dashboards/server';

const WAZUH_KEYSTORE_BIN = '/var/ossec/bin/wazuh-keystore';
const SYSTEMCTL_BIN = '/usr/bin/systemctl';

function runCommand(command: string, args: string[]): Promise<void> {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, { stdio: ['ignore', 'pipe', 'pipe'] });
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
  });
}

export async function syncManagerIndexerPassword(
  newPassword: string,
  logger: Logger
): Promise<void> {
  try {
    // GS 인증용: -n(non-interactive) — sudoers 미설정 시 비밀번호 프롬프트를 기다리며
    // 요청이 무한 대기하지 않고 즉시 실패하도록 함. 비밀번호는 CLI 인자로 넘어가서
    // ps aux에 노출될 수 있으나, wazuh-keystore 자체가 stdin 입력을 지원하지 않고
    // -v 인자만 지원함(filebeat keystore와 달리 stdin 옵션이 없음) — 이 프로세스는
    // 매우 짧게 실행되고 즉시 종료되므로 노출 위험은 낮지만, 향후 wazuh-keystore가
    // stdin 입력을 지원하게 되면 그쪽으로 전환할 것.
    await runCommand('sudo', [
      '-n',
      WAZUH_KEYSTORE_BIN,
      '-f',
      'indexer',
      '-k',
      'password',
      '-v',
      newPassword,
    ]);
    await runCommand('sudo', ['-n', SYSTEMCTL_BIN, 'restart', 'wazuh-manager']);
    logger.info(
      'GS 인증용: admin 비밀번호 변경에 따라 매니저의 인덱서 접속 키스토어 갱신 및 wazuh-manager 재시작 완료'
    );
  } catch (error: any) {
    // GS 인증용: 실패해도 admin 비밀번호 변경 자체는 이미 성공했으므로 상위로 에러를
    // 던지지 않는다 — 다만 이 로그가 남으면 매니저가 옛 비밀번호로 인덱서 인증 실패
    // 중일 가능성이 높으므로(에이전트 정보/SCA/이벤트가 안 올라옴) 반드시 수동 조치가
    // 필요하다: `/var/ossec/bin/wazuh-keystore -f indexer -k password -v '<새 비밀번호>'`
    // 후 `systemctl restart wazuh-manager`.
    logger.error(
      `GS 인증용: admin 비밀번호 변경 후 매니저 인덱서 키스토어 자동 갱신 실패 — 수동으로 ` +
        `"wazuh-keystore -f indexer -k password -v '<새 비밀번호>'" 실행 후 wazuh-manager를 ` +
        `재시작해야 합니다(sudoers 설정 확인 필요). 원인: ${error.message || error}`
    );
  }
}
