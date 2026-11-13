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

import { schema } from '@osd/config-schema';
import { IRouter, SessionStorageFactory, CoreSetup } from 'opensearch-dashboards/server';
import {
  SecuritySessionCookie,
  clearOldVersionCookieValue,
} from '../../../session/security_cookie';
import { SecurityPluginConfigType } from '../../..';
import { User } from '../../user';
import { SecurityClient } from '../../../backend/opensearch_security_client';
import {
  ANONYMOUS_AUTH_LOGIN,
  API_AUTH_LOGIN,
  API_AUTH_LOGOUT,
  LOGIN_PAGE_URI,
} from '../../../../common';
import { resolveTenant } from '../../../multitenancy/tenant_resolver';
import { encodeUriQuery } from '../../../../../../src/plugins/opensearch_dashboards_utils/common/url/encode_uri_query';
import { AuthType } from '../../../../common';
import { validateNextUrl } from '../../../utils/next_url';
// GS 인증용: 공개 라우터 핸들러의 request(OpenSearchDashboardsRequest)는 소스 IP를 노출하지
// 않아서, 내부(@internal) 헬퍼로 원본 Hapi request(raw.req.socket / info.remoteAddress)에 접근한다.
import { ensureRawRequest } from '../../../../../../src/core/server/http/router';
// GS 인증용: 접속 허용 IP 제한 + 동일 계정 중복 로그인 차단
import {
  isIpAllowed,
  getClientIp,
  getActiveSession,
  setActiveSession,
  clearActiveSession,
} from '../../../utils/login-security';

// GS 인증용: 대시보드 로그인 성공/실패, 로그아웃 이벤트를 날짜별 전용 인덱스에 기록해서
// "Zero 서버 관리 > Zero 서버 설정 > 보안로그" 화면에서 조회할 수 있게 함.
// (시도한 아이디는 실패한 로그인이라도 request.body.username 그대로 기록됨)
async function logSecurityEvent(
  context: any,
  request: any,
  event: {
    username: string;
    eventType: 'login_success' | 'login_failure' | 'logout' | 'ip_blocked' | 'duplicate_session_blocked';
  },
) {
  try {
    const now = new Date();
    const dateSuffix = now.toISOString().slice(0, 10).replace(/-/g, '.');
    const indexName = `wazuh-dashboard-security-log-${dateSuffix}`;
    // GS 인증용: request.headers/request.raw는 공개 래퍼(OpenSearchDashboardsRequest)에는
    // 없어서 항상 '-'로 빠지던 문제 수정. ensureRawRequest로 원본 Hapi request를 얻어와야 함.
    const ip = getClientIp(request, ensureRawRequest);

    const exists = await context.core.opensearch.client.asInternalUser.indices.exists({
      index: indexName,
    });
    if (!exists.body) {
      await context.core.opensearch.client.asInternalUser.indices.create({
        index: indexName,
        body: {
          mappings: {
            properties: {
              '@timestamp': { type: 'date' },
              username: { type: 'keyword' },
              event_type: { type: 'keyword' },
              ip: { type: 'keyword' },
            },
          },
        },
      });
    }

    await context.core.opensearch.client.asInternalUser.index({
      index: indexName,
      body: {
        '@timestamp': now.toISOString(),
        username: event.username || '-',
        event_type: event.eventType,
        ip,
      },
    });
  } catch (error: any) {
    context.security_plugin.logger.error(
      `Failed to log security event (${event.eventType}) for ${event.username}: ${
        error.message || error
      }`,
    );
  }
}

export class BasicAuthRoutes {
  constructor(
    private readonly router: IRouter,
    private readonly config: SecurityPluginConfigType,
    private readonly sessionStorageFactory: SessionStorageFactory<SecuritySessionCookie>,
    private readonly securityClient: SecurityClient,
    private readonly coreSetup: CoreSetup
  ) {}

  public setupRoutes() {
    // bootstrap an empty page so that browser app can render the login page
    // using client side routing.
    this.coreSetup.http.resources.register(
      {
        path: LOGIN_PAGE_URI,
        validate: {
          query: schema.object({
            nextUrl: schema.maybe(
              schema.string({
                validate: (nexturl) => {
                  return validateNextUrl(nexturl, this.coreSetup.http.basePath.serverBasePath);
                },
              })
            ),
          }),
        },
        options: {
          authRequired: false,
        },
      },
      async (context, request, response) => {
        this.sessionStorageFactory.asScoped(request).clear();
        const clearOldVersionCookie = clearOldVersionCookieValue(this.config);
        return response.renderAnonymousCoreApp({
          headers: {
            'set-cookie': clearOldVersionCookie,
          },
        });
      }
    );

    // login using username and password
    this.router.post(
      {
        path: API_AUTH_LOGIN,
        validate: {
          body: schema.object({
            username: schema.string(),
            password: schema.string(),
          }),
        },
        options: {
          authRequired: false,
        },
      },
      async (context, request, response) => {
        const forbiddenUsernames: string[] = this.config.auth.forbidden_usernames;
        if (forbiddenUsernames.indexOf(request.body.username) > -1) {
          context.security_plugin.logger.error(
            `Denied login for forbidden username ${request.body.username}`
          );
          return response.badRequest({
            // Cannot login using forbidden user name.
            body: 'Invalid username or password',
          });
        }

        let user: User;
        try {
          user = await this.securityClient.authenticate(request, {
            username: request.body.username,
            password: request.body.password,
          });
        } catch (error: any) {
          context.security_plugin.logger.error(`Failed authentication: ${error}`);
          // GS 인증용: 로그인 실패 이벤트 기록 (시도한 아이디 포함)
          await logSecurityEvent(context, request, {
            username: request.body.username,
            eventType: 'login_failure',
          });
          return response.unauthorized({
            headers: {
              'www-authenticate': error.message,
            },
          });
        }

        // GS 인증용: 로그인 자격증명은 이미 authenticate()에서 검증됐으므로, 아래
        // IP 조회와 세션 쿠키 생성 양쪽에서 재사용한다.
        const encodedCredentials = Buffer.from(
          `${request.body.username}:${request.body.password}`
        ).toString('base64');

        // GS 인증용: 접속 허용 IP 제한 확인 (내부 사용자 생성 시 attributes.allowed_ips에
        // 설정된 계정만 대상 — 설정 안 된 계정은 제한 없음)
        const ip = getClientIp(request, ensureRawRequest);
        let userDetail: any;
        try {
          // GS 인증용: 최초 구현에서는 대시보드 내부 서비스 계정(kibanaserver)의
          // callAsInternalUser로 조회했으나, OpenSearch Security REST API(internalusers)는
          // opensearch_security.yml의 restapi.roles_enabled(all_access,
          // security_rest_api_access)에 등록된 백엔드 롤만 호출 가능해서 kibanaserver는
          // 항상 403(Authorization Exception)이었고, 그 에러가 조용히 삼켜져서 IP 제한이
          // 사실상 전혀 동작하지 않는 문제가 있었다(운영 로그로 확인). kibanaserver에
          // restapi 권한을 추가로 부여하는 대신, 방금 authenticate()로 검증된 로그인
          // 계정 "본인" 자격증명으로 asScoped(request).callAsCurrentUser를 사용한다 —
          // 이 화면에서 생성하는 계정은 항상 backend_roles: ['admin']이라 admin과 동일하게
          // all_access 역할에 매핑되어 있어 REST API 호출이 허용된다. 인덱서 쪽 설정을
          // 건드리지 않고 최소 권한 원칙을 지키는 방식.
          userDetail = await this.securityClient.getInternalUserWithCredentials(
            request,
            user.username,
            `Basic ${encodedCredentials}`
          );
        } catch (error: any) {
          // GS 인증용: 조회 자체가 실패하면 원인을 반드시 로그로 남긴다. 조회 실패
          // 시에는 로그인 자체를 막지 않는다(관리자 전원이 잠기는 것을 방지하기 위한
          // fail-open) — 다만 이 로그가 남으면 IP 제한이 사실상 동작하지 않고 있다는
          // 뜻이므로 원인(권한 등)을 확인해야 한다.
          context.security_plugin.logger.error(
            `Failed to fetch internal user detail for IP restriction check (${user.username}): ${
              error.message || error
            }`
          );
        }
        if (userDetail && !isIpAllowed(userDetail.attributes, ip)) {
          context.security_plugin.logger.error(
            `Denied login for ${user.username}: IP ${ip} is not in the allowed list`
          );
          await logSecurityEvent(context, request, {
            username: user.username,
            eventType: 'ip_blocked',
          });
          return response.unauthorized({
            body: { message: '허용되지 않은 IP에서의 접속입니다.' },
          });
        }

        // GS 인증용: 동일 계정 중복 로그인 차단 — 이미 유효한 세션이 있으면 이번 로그인을
        // 거부한다(팝업으로 이전 세션을 끊을지 선택하는 방식이 아니라 바로 차단).
        const existingSession = await getActiveSession(context, user.username);
        if (existingSession) {
          await logSecurityEvent(context, request, {
            username: user.username,
            eventType: 'duplicate_session_blocked',
          });
          return response.unauthorized({
            body: { message: '이미 다른 위치에서 로그인 중인 계정입니다.' },
          });
        }

        this.sessionStorageFactory.asScoped(request).clear();
        // GS 인증용: encodedCredentials는 위 IP 제한 확인 단계에서 이미 계산해뒀다(재사용).
        const sessionStorage: SecuritySessionCookie = {
          username: user.username,
          credentials: {
            authHeaderValue: `Basic ${encodedCredentials}`,
          },
          authType: AuthType.BASIC,
          isAnonymousAuth: false,
          expiryTime: Date.now() + this.config.session.ttl,
        };

        if (user.multitenancy_enabled) {
          const selectTenant = resolveTenant({
            request,
            username: user.username,
            roles: user.roles,
            availableTenants: user.tenants,
            config: this.config,
            cookie: sessionStorage,
            multitenancyEnabled: user.multitenancy_enabled,
            privateTenantEnabled: user.private_tenant_enabled,
            defaultTenant: user.default_tenant,
          });
          // const selectTenant = user.default_tenant;
          sessionStorage.tenant = selectTenant;
        }
        this.sessionStorageFactory.asScoped(request).set(sessionStorage);
        // GS 인증용: 중복 로그인 차단을 위한 활성 세션 기록
        await setActiveSession(context, user.username, sessionStorage.expiryTime);
        // GS 인증용: 로그인 성공 이벤트 기록
        await logSecurityEvent(context, request, {
          username: user.username,
          eventType: 'login_success',
        });
        return response.ok({
          body: {
            username: user.username,
            tenants: user.tenants,
            roles: user.roles,
            backendroles: user.backendRoles,
            selectedTenants: this.config.multitenancy?.enabled ? sessionStorage.tenant : undefined,
          },
        });
      }
    );

    // logout
    this.router.post(
      {
        path: API_AUTH_LOGOUT,
        validate: false,
        options: {
          authRequired: false,
        },
      },
      async (context, request, response) => {
        // GS 인증용: 로그아웃 이벤트 기록 (세션 clear 전에 아이디를 먼저 읽어둠)
        let loggedOutUsername = '-';
        try {
          const cookie = await this.sessionStorageFactory.asScoped(request).get();
          loggedOutUsername = (cookie && cookie.username) || '-';
        } catch (error) {}
        this.sessionStorageFactory.asScoped(request).clear();
        // GS 인증용: 중복 로그인 차단용 활성 세션 기록 해제(바로 재로그인 가능하게)
        if (loggedOutUsername && loggedOutUsername !== '-') {
          await clearActiveSession(context, loggedOutUsername);
        }
        await logSecurityEvent(context, request, {
          username: loggedOutUsername,
          eventType: 'logout',
        });
        return response.ok({
          body: {},
        });
      }
    );

    // anonymous auth
    this.router.get(
      {
        path: ANONYMOUS_AUTH_LOGIN,
        validate: false,
        options: {
          authRequired: false,
        },
      },
      async (context, request, response) => {
        if (this.config.auth.anonymous_auth_enabled) {
          let user: User;
          // If the request contains no redirect path, simply redirect to basepath.
          let redirectUrl: string = this.coreSetup.http.basePath.serverBasePath
            ? this.coreSetup.http.basePath.serverBasePath
            : '/';
          const requestQuery = request.url.searchParams;
          const nextUrl = requestQuery?.get('nextUrl');
          if (nextUrl) {
            redirectUrl = nextUrl;
          }
          context.security_plugin.logger.info('The Redirect Path is ' + redirectUrl);
          try {
            user = await this.securityClient.authenticateWithHeaders(request, {});
          } catch (error) {
            context.security_plugin.logger.error(
              `Failed authentication: ${error}. Redirecting to Login Page`
            );
            return response.redirected({
              headers: {
                location: `${this.coreSetup.http.basePath.serverBasePath}${LOGIN_PAGE_URI}${
                  nextUrl ? '?nextUrl=' + encodeUriQuery(redirectUrl) : ''
                }`,
              },
            });
          }

          this.sessionStorageFactory.asScoped(request).clear();
          const sessionStorage: SecuritySessionCookie = {
            username: user.username,
            authType: AuthType.BASIC,
            isAnonymousAuth: true,
            expiryTime: Date.now() + this.config.session.ttl,
          };

          if (user.multitenancy_enabled) {
            const selectTenant = resolveTenant({
              request,
              username: user.username,
              roles: user.roles,
              availableTenants: user.tenants,
              config: this.config,
              cookie: sessionStorage,
              multitenancyEnabled: user.multitenancy_enabled,
              privateTenantEnabled: user.private_tenant_enabled,
              defaultTenant: user.default_tenant,
            });
            sessionStorage.tenant = selectTenant;
          }
          this.sessionStorageFactory.asScoped(request).set(sessionStorage);

          return response.redirected({
            headers: {
              location: `${redirectUrl}`,
            },
          });
        } else {
          context.security_plugin.logger.error(
            'Anonymous auth is disabled. Redirecting to Login Page'
          );
          return response.redirected({
            headers: {
              location: `${this.coreSetup.http.basePath.serverBasePath}${LOGIN_PAGE_URI}`,
            },
          });
        }
      }
    );
  }
}
