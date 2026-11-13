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

import { ILegacyClusterClient, OpenSearchDashboardsRequest } from '../../../../src/core/server';
import { User } from '../auth/user';
import { TenancyConfigSettings } from '../../public/apps/configuration/panels/tenancy-config/types';
import { AUTH_TYPE_PARAM, AuthType } from '../../common';

export class SecurityClient {
  constructor(private readonly esClient: ILegacyClusterClient) {}

  public async authenticate(request: OpenSearchDashboardsRequest, credentials: any): Promise<User> {
    const authHeader = Buffer.from(`${credentials.username}:${credentials.password}`).toString(
      'base64'
    );
    try {
      const esResponse = await this.esClient
        .asScoped(request)
        .callAsCurrentUser('opensearch_security.authinfo', {
          headers: {
            authorization: `Basic ${authHeader}`,
          },
        });
      return {
        username: credentials.username,
        roles: esResponse.roles,
        backendRoles: esResponse.backend_roles,
        tenants: esResponse.tenants,
        selectedTenant: esResponse.user_requested_tenant,
        credentials,
        proxyCredentials: credentials,
        tenancy_configs: esResponse.tenancy_configs,
      };
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  public async authenticateWithHeader(
    request: OpenSearchDashboardsRequest,
    headerName: string,
    headerValue: string,
    whitelistedHeadersAndValues: any = {},
    additionalAuthHeaders: any = {}
  ): Promise<User> {
    try {
      const credentials: any = {
        headerName,
        headerValue,
      };
      const headers: any = {};
      if (headerValue) {
        headers[headerName] = headerValue;
      }

      // cannot get config elasticsearch.requestHeadersWhitelist from kibana.yml file in new platfrom
      // meanwhile, do we really need to save all headers in cookie?
      const esResponse = await this.esClient
        .asScoped(request)
        .callAsCurrentUser('opensearch_security.authinfo', {
          headers,
        });
      return {
        username: esResponse.user_name,
        roles: esResponse.roles,
        backendRoles: esResponse.backend_roles,
        tenants: esResponse.tenants,
        selectedTenant: esResponse.user_requested_tenant,
        credentials,
      };
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  public async authenticateWithHeaders(
    request: OpenSearchDashboardsRequest,
    additionalAuthHeaders: any = {}
  ): Promise<User> {
    try {
      const esResponse = await this.esClient
        .asScoped(request)
        .callAsCurrentUser('opensearch_security.authinfo', {
          headers: additionalAuthHeaders,
        });
      return {
        username: esResponse.user_name,
        roles: esResponse.roles,
        backendRoles: esResponse.backend_roles,
        tenants: esResponse.tenants,
        selectedTenant: esResponse.user_requested_tenant,
      };
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  public async authinfo(request: OpenSearchDashboardsRequest, headers: any = {}) {
    try {
      return await this.esClient
        .asScoped(request)
        .callAsCurrentUser('opensearch_security.authinfo', {
          headers,
        });
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  public async dashboardsinfo(request: OpenSearchDashboardsRequest, headers: any = {}) {
    try {
      return await this.esClient
        .asScoped(request)
        .callAsCurrentUser('opensearch_security.dashboardsinfo', {
          headers,
        });
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  // Multi-tenancy APIs
  public async getMultitenancyInfo(request: OpenSearchDashboardsRequest) {
    try {
      return await this.esClient
        .asScoped(request)
        .callAsCurrentUser('opensearch_security.multitenancyinfo');
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  public async putMultitenancyConfigurations(
    request: OpenSearchDashboardsRequest,
    tenancyConfigSettings: TenancyConfigSettings
  ) {
    const body = {
      multitenancy_enabled: tenancyConfigSettings.multitenancy_enabled,
      private_tenant_enabled: tenancyConfigSettings.private_tenant_enabled,
      default_tenant: tenancyConfigSettings.default_tenant,
    };
    try {
      return await this.esClient
        .asScoped(request)
        .callAsCurrentUser('opensearch_security.tenancy_configs', {
          body,
        });
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  // GS 인증용: 로그인 시점에 접속 허용 IP 제한(attributes.allowed_ips)을 확인하기 위해
  // 내부 사용자 정보를 조회한다.
  //
  // 최초 구현은 callAsInternalUser(대시보드 내부 서비스 계정 kibanaserver)를 썼으나,
  // OpenSearch Security REST API(내부사용자 리소스)는 opensearch_security.yml의
  // plugins.security.restapi.roles_enabled(all_access, security_rest_api_access)에
  // 등록된 백엔드 롤만 호출 가능하고 kibanaserver는 여기 없어서 항상
  // "Authorization Exception"으로 실패했다(운영 로그로 확인됨 — 그 결과 IP 제한이
  // 사실상 전혀 동작하지 않았음).
  //
  // kibanaserver에 restapi 권한을 새로 부여하는 대신, 이미 authenticate()로 검증된
  // 로그인 계정 "본인" 자격증명으로 asScoped(request).callAsCurrentUser를 사용한다 —
  // 이 화면에서 생성하는 계정은 항상 backend_roles: ['admin']이라 admin과 동일하게
  // all_access 역할에 매핑돼 있어 호출이 허용된다. 인덱서 쪽 설정을 건드리지 않고
  // 최소 권한 원칙을 지키는 방식(authenticate()가 authinfo를 호출할 때 쓰는 것과
  // 동일한 패턴 — 헤더로 자격증명을 직접 실어 보낸다).
  public async getInternalUserWithCredentials(
    request: OpenSearchDashboardsRequest,
    username: string,
    authHeaderValue: string
  ): Promise<any> {
    const esResponse = await this.esClient
      .asScoped(request)
      .callAsCurrentUser('opensearch_security.getResource', {
        resourceName: 'internalusers',
        id: username,
        headers: {
          authorization: authHeaderValue,
        },
      });
    return esResponse ? esResponse[username] : undefined;
  }

  public async getTenantInfoWithInternalUser() {
    try {
      return this.esClient.callAsInternalUser('opensearch_security.tenantinfo');
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  public async getTenantInfo(request: OpenSearchDashboardsRequest) {
    try {
      return await this.esClient
        .asScoped(request)
        .callAsCurrentUser('opensearch_security.tenantinfo');
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  public async getSamlHeader(request: OpenSearchDashboardsRequest) {
    try {
      // response is expected to be an error
      await this.esClient.asScoped(request).callAsCurrentUser('opensearch_security.authinfo', {
        [AUTH_TYPE_PARAM]: AuthType.SAML,
      });
    } catch (error: any) {
      // the error looks like
      // wwwAuthenticateDirective:
      //   '
      //     X-Security-IdP realm="Open Distro Security"
      //     location="https://<your-auth-domain.com>/api/saml2/v1/sso?SAMLRequest=<some-encoded-string>"
      //     requestId="<request_id>"
      //   '

      if (!error.wwwAuthenticateDirective) {
        throw error;
      }

      try {
        const locationRegExp = /location="(.*?)"/;
        const requestIdRegExp = /requestId="(.*?)"/;

        const locationExecArray = locationRegExp.exec(error.wwwAuthenticateDirective);
        const requestExecArray = requestIdRegExp.exec(error.wwwAuthenticateDirective);
        if (locationExecArray && requestExecArray) {
          return {
            location: locationExecArray[1],
            requestId: requestExecArray[1],
          };
        }
        throw Error('failed parsing SAML config');
      } catch (parsingError: any) {
        console.log(parsingError);
        throw new Error(parsingError);
      }
    }
    throw new Error(`Invalid SAML configuration.`);
  }

  public async authToken({
    requestId,
    samlResponse,
    acsEndpoint = undefined,
    authRequestType,
  }: AuthTokenParams) {
    const body = {
      RequestId: requestId,
      SAMLResponse: samlResponse,
      acsEndpoint,
    };
    try {
      return await this.esClient.asScoped().callAsCurrentUser('opensearch_security.authtoken', {
        body,
        [AUTH_TYPE_PARAM]: authRequestType,
      });
    } catch (error: any) {
      console.log(error);
      throw new Error('failed to get token');
    }
  }
}

interface AuthTokenParams {
  requestId?: string;
  samlResponse: any;
  acsEndpoint?: any;
  authRequestType?: string;
}
