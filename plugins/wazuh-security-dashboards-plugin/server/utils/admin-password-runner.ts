/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

// [추가] reserved:true admin 전용 비밀번호 변경 SH 실행 래퍼.
// 비밀번호는 argv, 환경변수, 로그가 아닌 stdin으로만 전달한다.
// 호출자는 반드시 Dashboard 로그인 세션의 admin 여부를 먼저 검증해야 한다.

import { spawn } from 'child_process';

// [추가] SH가 명시적으로 현재 비밀번호 불일치를 보고할 때만 쓰는 오류 타입.
export class InvalidCurrentAdminPasswordError extends Error {
  constructor() {
    super('현재 비밀번호가 일치하지 않습니다.');
    this.name = 'InvalidCurrentAdminPasswordError';
  }
}

const SUDO_BIN = '/usr/bin/sudo';
const HELPER_BIN = '/usr/local/libexec/guardxai/guardxai-admin-password-helper.sh';

function validLineInput(value: unknown): value is string {
  return (
    typeof value === 'string' &&
    value.length > 0 &&
    value.length <= 256 &&
    !value.includes('\n') &&
    !value.includes('\r') &&
    !value.includes('\0')
  );
}

// [추가] 서버에서만 호출할 함수. 호출 계정/권한 검증은 API 라우터의 책임.
export async function rotateReservedAdminPassword(
  currentPassword: string,
  newPassword: string
): Promise<void> {
  if (!validLineInput(currentPassword) || !validLineInput(newPassword)) {
    throw new Error('비밀번호 입력 형식이 올바르지 않습니다.');
  }
  if (newPassword.length < 8 || newPassword.length > 64) {
    throw new Error('새 비밀번호는 8~64자여야 합니다.');
  }

  await new Promise<void>((resolve, reject) => {
    let settled = false;
    let output = '';
    // [추가] SH 오류 원문은 외부에 노출하지 않고 지정된 신호 판단에만 사용.
    let stderrText = '';
    const succeed = () => {
      if (!settled) {
        settled = true;
        resolve();
      }
    };
    // [수정] 원래 문자열 오류를 생성하던 방식은 typed 오류 전달을 위해 대체.
    /*
    const fail = (message: string) => {
      if (!settled) {
        settled = true;
        reject(new Error(message));
      }
    };
    */
    const fail = (error: Error) => {
      if (!settled) {
        settled = true;
        reject(error);
      }
    };

    // [추가] sudoers에 등록된 고정 명령과 인수만 사용.
    // 비밀번호를 인수로 넘기지 않음.
    const child = spawn(SUDO_BIN, ['-n', HELPER_BIN, '--apply'], {
      stdio: ['pipe', 'pipe', 'pipe'],
      shell: false,
    });

    // [추가] stdout은 성공 신호 'OK'만 확인하고 1KB 이상은 수집하지 않음.
    // stderr 원문은 비밀번호 노출 가능성을 줄이기 위해 수집/반환/로그하지 않음.
    child.stdout.on('data', (data: Buffer) => {
      if (output.length < 1024) output += data.toString('utf8').slice(0, 1024 - output.length);
    });
    // [기존] child.stderr.resume();
    // [수정] 8KB 이내에서 고정된 실패 문구만 판별한다. 원문을 로그나 HTTP에 노출하지 않는다.
    child.stderr.on('data', (data: Buffer) => {
      if (stderrText.length < 8192) {
        stderrText += data.toString('utf8').slice(0, 8192 - stderrText.length);
      }
    });

    // [추가] sudo 실패 시 EPIPE가 발생할 수 있으므로 프로세스 예외 방지.
    child.stdin.on('error', () => {});
    child.on('error', () => fail(new Error('비밀번호 변경 프로그램 실행에 실패했습니다.')));
    child.on('close', (code) => {
      if (code === 0 && output.trim() === 'OK') {
        succeed();
      } else {
        // [추가] 실제 SH의 고정 오류 문자열에만 반응한다. 다른 오류는 절대로 401로 처리하지 않는다.
        if (/^\[ERROR\] 현재 admin 비밀번호 인증에 실패했습니다\.\r?$/m.test(stderrText)) {
          fail(new InvalidCurrentAdminPasswordError());
          return;
        }
        // [기존 유지] 부분 적용 가능성을 배제할 수 없는 그 밖의 오류.
        fail(new Error('비밀번호 변경 또는 동기화가 완료되지 않았습니다. 관리자 로그를 확인하세요.'));
      }
    });

    // [추가] SH 입력 규약: 현재 비밀번호 한 줄 + 새 비밀번호 한 줄.
    child.stdin.end(`${currentPassword}\n${newPassword}\n`);
  });
}
