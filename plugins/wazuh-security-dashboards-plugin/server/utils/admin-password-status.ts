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

// GS 인증용: 기본(admin) 계정이 최초 설치 시 비밀번호를 아직 변경하지 않았을 수 있어,
// 로그인 시 강제로 비밀번호 변경 화면을 띄우기 위한 "변경 완료 여부" 상태를 별도 인덱스에 저장한다.
// OpenSearch Security 자체에는 "아직 기본 비밀번호인지" 판별/추적하는 기능이 없어서
// (reserved 플래그는 삭제/수정 방지용일 뿐 비밀번호 변경 이력과 무관) 이 프로젝트에서 직접 관리한다.

const ADMIN_PASSWORD_STATUS_INDEX = 'wazuh-dashboard-admin-password-status';
const ADMIN_PASSWORD_STATUS_DOC_ID = 'admin';

export async function getAdminPasswordChanged(context: any): Promise<boolean> {
  return true;
  // try {
  //   const result = await context.core.opensearch.client.asInternalUser.get({
  //     index: ADMIN_PASSWORD_STATUS_INDEX,
  //     id: ADMIN_PASSWORD_STATUS_DOC_ID,
  //   });
  //   return !!(result.body && result.body._source && result.body._source.password_changed);
  // } catch (error) {
  //   // 인덱스/문서가 아직 없으면(최초 설치 직후 등) 아직 변경하지 않은 것으로 간주
  //   return false;
  // }
}

export async function setAdminPasswordChanged(context: any): Promise<void> {
  const exists = await context.core.opensearch.client.asInternalUser.indices.exists({
    index: ADMIN_PASSWORD_STATUS_INDEX,
  });
  if (!exists.body) {
    await context.core.opensearch.client.asInternalUser.indices.create({
      index: ADMIN_PASSWORD_STATUS_INDEX,
      body: {
        mappings: {
          properties: {
            password_changed: { type: 'boolean' },
            updated_at: { type: 'date' },
          },
        },
      },
    });
  }

  await context.core.opensearch.client.asInternalUser.index({
    index: ADMIN_PASSWORD_STATUS_INDEX,
    id: ADMIN_PASSWORD_STATUS_DOC_ID,
    body: {
      password_changed: true,
      updated_at: new Date().toISOString(),
    },
    refresh: true,
  });
}
