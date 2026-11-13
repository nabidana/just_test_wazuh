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

// GS 인증용: (1) 내부 사용자별 접속 허용 IP 제한, (2) 동일 계정 중복 로그인 차단을 위한
// 서버측 헬퍼. 두 기능 모두 OpenSearch Security 자체에는 없는 기능이라 이 프로젝트에서
// 직접 구현한다.
//
// - IP 제한: 내부 사용자의 attributes.allowed_ips(콤마로 구분된 문자열, 최대 10개)에
//   저장되며, 값이 없으면 제한 없음으로 간주한다.
// - 중복 로그인 차단: 로그인 성공 시마다 전용 인덱스(wazuh-dashboard-active-sessions)에
//   "이 계정의 세션은 언제까지 유효하다"는 만료시각을 기록해두고, 다음 로그인 시도 때
//   그 만료시각이 아직 지나지 않았으면 거부한다. 로그아웃 시 즉시 삭제해서 바로 재로그인
//   가능하게 한다.

const ACTIVE_SESSION_INDEX = 'wazuh-dashboard-active-sessions';

export function isIpAllowed(attributes: any, ip: string): boolean {
  const allowedIpsRaw = attributes && attributes.allowed_ips;
  if (!allowedIpsRaw) {
    return true; // 허용 IP를 설정하지 않은 계정은 제한 없음
  }
  const allowedIps = String(allowedIpsRaw)
    .split(',')
    .map((v) => v.trim())
    .filter(Boolean);
  if (allowedIps.length === 0) {
    return true;
  }
  return allowedIps.includes(ip);
}

// GS 인증용: 공개 라우터 핸들러의 request(OpenSearchDashboardsRequest)는 소스 IP를
// 노출하지 않아서, 내부(@internal) 헬퍼로 원본 Hapi request(raw.req.socket /
// info.remoteAddress)에 접근한다. (보안로그 IP 기록과 동일한 방식 재사용)
export function getClientIp(request: any, ensureRawRequest: (request: any) => any): string {
  try {
    const rawRequest: any = ensureRawRequest(request);
    return (
      (rawRequest.headers && rawRequest.headers['x-forwarded-for']) ||
      rawRequest.info?.remoteAddress ||
      rawRequest.raw?.req?.socket?.remoteAddress ||
      '-'
    );
  } catch (error) {
    return '-';
  }
}

export async function getActiveSession(
  context: any,
  username: string
): Promise<{ expiryTime: number } | undefined> {
  try {
    const result = await context.core.opensearch.client.asInternalUser.get({
      index: ACTIVE_SESSION_INDEX,
      id: username,
    });
    const source = result.body && result.body._source;
    if (source && typeof source.expiryTime === 'number' && source.expiryTime > Date.now()) {
      return { expiryTime: source.expiryTime };
    }
    return undefined; // 기록이 없거나 이미 만료됨(스스로 정리되는 셈)
  } catch (error) {
    return undefined;
  }
}

export async function setActiveSession(
  context: any,
  username: string,
  expiryTime: number
): Promise<void> {
  try {
    const exists = await context.core.opensearch.client.asInternalUser.indices.exists({
      index: ACTIVE_SESSION_INDEX,
    });
    if (!exists.body) {
      await context.core.opensearch.client.asInternalUser.indices.create({
        index: ACTIVE_SESSION_INDEX,
        body: {
          mappings: {
            properties: {
              expiryTime: { type: 'long' },
              updated_at: { type: 'date' },
            },
          },
        },
      });
    }
    await context.core.opensearch.client.asInternalUser.index({
      index: ACTIVE_SESSION_INDEX,
      id: username,
      body: { expiryTime, updated_at: new Date().toISOString() },
      refresh: true,
    });
  } catch (error) {
    // 세션 추적 기록 실패는 로그인 자체를 막지 않는다.
  }
}

export async function clearActiveSession(context: any, username: string): Promise<void> {
  try {
    await context.core.opensearch.client.asInternalUser.delete({
      index: ACTIVE_SESSION_INDEX,
      id: username,
    });
  } catch (error) {
    // 문서가 없어도 무시(이미 만료돼서 지워졌거나, 애초에 없었던 경우)
  }
}
