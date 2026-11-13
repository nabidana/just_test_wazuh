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

// GS 인증용: 2026-09-04 장애 조사에서, 매니저의 인덱서 접속 자격증명(wazuh-keystore)을
// 고치고 wazuh-manager를 재시작해도 "재시작 전부터 연결돼 있던" 에이전트는 곧바로
// syscollector/SCA states 재동기화가 재개되지 않고, 해당 에이전트의 로컬 서비스를
// 직접 재시작해야만 (scan_on_start로 전체 재스캔이 트리거되어) 다시 정상적으로 정보가
// 올라오는 것이 실제로 재현·검증됨. 즉 admin 비밀번호 변경 후 자격증명만 동기화하는
// 것으로는 부족하고, 연결된 에이전트도 재시작시켜야 완전히 복구된다.
//
// 이 헬퍼는 Wazuh Manager REST API(PUT /agents/restart, 기본값 = 전체 에이전트)를 호출해
// 이 재시작을 자동으로 트리거한다.
//
// 자격증명 조달 방법: 이 플러그인(securityDashboards)은 매니저 API 클라이언트를 제공하는
// plugins-wazuh-core에 대한 플러그인 의존성이 없다(추가하면 wazuh-core가 이미
// securityDashboards를 optionalPlugins로 갖고 있어 상호 순환 의존이 생기는데, 이 배포
// 환경에서 실제로 안전한지 검증할 방법이 없어 위험을 피했다). 대신 대시보드 프로세스가
// 이미 자기 자신의 매니저 API 접속에 쓰는 것과 동일한 파일
// (/usr/share/wazuh-dashboard/data/wazuh/config/wazuh.yml, zero-install.sh가 wazuh-wui
// 비밀번호를 갱신할 때 쓰는 바로 그 파일)을 직접 읽어 첫 번째 호스트 항목의
// url/port/username/password를 얻는다. admin의 OpenSearch Security 비밀번호와는 완전히
// 무관한, 별도의 Wazuh Manager API 전용 계정(보통 wazuh-wui)이라 admin 비밀번호 변경
// 로직과 별개로 항상 최신 상태이다 — sudo 권한도 필요 없다(단순 로컬 파일 읽기 + localhost
// HTTPS 호출).

import fs from 'fs';
import https from 'https';
import { Logger } from 'opensearch-dashboards/server';

const WAZUH_YML_PATH = '/usr/share/wazuh-dashboard/data/wazuh/config/wazuh.yml';

interface ManagerApiHostCredentials {
  url: string;
  port: number;
  username: string;
  password: string;
}

// GS 인증용: 이 파일은 zero-install.sh가 `sed`로 password 필드만 치환하며 관리하는,
// 형식이 고정된 간단한 YAML이라(hosts 배열의 첫 항목만 사용하는 단일 매니저 구성) 별도
// YAML 파서 의존성을 추가하지 않고 필드별로 직접 추출한다.
function parseFirstHostCredentials(
  yamlContent: string
): ManagerApiHostCredentials | undefined {
  const urlMatch = yamlContent.match(/url:\s*"?(https?:\/\/[^"\s]+)"?/);
  const portMatch = yamlContent.match(/port:\s*"?(\d+)"?/);
  const usernameMatch = yamlContent.match(/username:\s*"?([^"\s]+)"?/);
  const passwordMatch = yamlContent.match(/password:\s*"([^"]*)"/);
  if (!urlMatch || !portMatch || !usernameMatch || !passwordMatch) {
    return undefined;
  }
  return {
    url: urlMatch[1],
    port: parseInt(portMatch[1], 10),
    username: usernameMatch[1],
    password: passwordMatch[1],
  };
}

const httpsAgent = new https.Agent({ rejectUnauthorized: false });

function requestJson(
  options: https.RequestOptions,
  body?: string
): Promise<{ status: number; data: any }> {
  return new Promise((resolve, reject) => {
    const req = https.request({ ...options, agent: httpsAgent }, (res) => {
      let raw = '';
      res.on('data', (chunk) => {
        raw += chunk;
      });
      res.on('end', () => {
        try {
          resolve({ status: res.statusCode || 0, data: raw ? JSON.parse(raw) : undefined });
        } catch (error) {
          resolve({ status: res.statusCode || 0, data: raw });
        }
      });
    });
    req.on('error', reject);
    if (body) {
      req.write(body);
    }
    req.end();
  });
}

export async function restartAllAgents(logger: Logger): Promise<void> {
  try {
    const yamlContent = fs.readFileSync(WAZUH_YML_PATH, 'utf8');
    const credentials = parseFirstHostCredentials(yamlContent);
    if (!credentials) {
      logger.error(
        `GS 인증용: ${WAZUH_YML_PATH}에서 매니저 API 자격증명을 읽지 못해 전체 에이전트 재시작을 건너뜁니다.`
      );
      return;
    }

    const { hostname } = new URL(credentials.url);

    const authResponse = await requestJson({
      hostname,
      port: credentials.port,
      path: '/security/user/authenticate',
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      auth: `${credentials.username}:${credentials.password}`,
    });
    const token = authResponse.data?.data?.token;
    if (!token) {
      throw new Error(
        `매니저 API 인증 실패 (status ${authResponse.status}): ${JSON.stringify(
          authResponse.data
        )}`
      );
    }

    const restartResponse = await requestJson({
      hostname,
      port: credentials.port,
      path: '/agents/restart',
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${token}`,
      },
    });
    if (restartResponse.status !== 200) {
      throw new Error(
        `전체 에이전트 재시작 요청 실패 (status ${restartResponse.status}): ${JSON.stringify(
          restartResponse.data
        )}`
      );
    }

    logger.info(
      'GS 인증용: admin 비밀번호 변경에 따라 연결된 전체 에이전트에 재시작을 요청했습니다 ' +
        '(자격증명 갱신만으로는 기존 연결 에이전트의 syscollector/SCA 재동기화가 재개되지 ' +
        '않는 것이 확인되어, 재동기화 강제를 위해 추가함).'
    );
  } catch (error: any) {
    // GS 인증용: 실패해도 admin 비밀번호 변경 자체는 이미 성공했으므로 상위로 에러를
    // 던지지 않는다 — 다만 이 로그가 남으면 관리자가 대시보드 "에이전트 관리" 화면에서
    // 수동으로 에이전트들을 재시작해야 정보/SCA가 다시 올라온다.
    logger.error(
      `GS 인증용: 전체 에이전트 재시작 자동 트리거 실패 — 필요 시 관리자가 "에이전트 관리" ` +
        `화면에서 연결된 에이전트를 수동으로 재시작해야 합니다. 원인: ${error.message || error}`
    );
  }
}
