/**
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
import {
  IRouter,
  ResponseError,
  IOpenSearchDashboardsResponse,
  OpenSearchDashboardsResponseFactory,
  RequestHandlerContext,
  OpenSearchDashboardsRequest,
  SessionStorageFactory,
} from 'opensearch-dashboards/server';
import { API_PREFIX, CONFIGURATION_API_PREFIX, isValidResourceName } from '../../common';
// GS 인증용: admin 계정 최초 비밀번호 변경 강제 기능의 상태 조회/기록
import { getAdminPasswordChanged, setAdminPasswordChanged } from '../utils/admin-password-status';
import { SecuritySessionCookie } from '../session/security_cookie';
// GS 인증용: admin 비밀번호가 바뀌면 Filebeat 키스토어도 함께 갱신(안 하면 인덱서
// 인증 실패로 알림 적재 파이프라인 전체가 끊김 — filebeat-credential-sync.ts 참고)
import { syncFilebeatAdminPassword } from '../utils/filebeat-credential-sync';
// GS 인증용: 매니저 자신의 인덱서 접속 키스토어도 별도로 갱신해야 함(Filebeat와는
// 별개의 저장소 — manager-indexer-credential-sync.ts 참고, 2026-09-04 장애로 확인)
import { syncManagerIndexerPassword } from '../utils/manager-indexer-credential-sync';
// GS 인증용: 자격증명 동기화만으론 기존 연결 에이전트의 재동기화가 재개되지 않아
// 전체 에이전트 재시작까지 자동 트리거함(agents-restart.ts 참고)
import { restartAllAgents } from '../utils/agents-restart';
// [추가] reserved:true admin 비밀번호 변경 전용 SH 실행 연결
// [수정] SH에서 확인된 비밀번호 불일치 오류만 401로 분류한다.
// [기존] import { rotateReservedAdminPassword } from '../utils/admin-password-runner';
import {
  rotateReservedAdminPassword,
  InvalidCurrentAdminPasswordError,
} from '../utils/admin-password-runner';

// TODO: consider to extract entity CRUD operations and put it into a client class
export function defineRoutes(
  router: IRouter,
  dataSourceEnabled: boolean,
  // GS 인증용: admin 계정 최초 비밀번호 변경 강제 기능 - 비밀번호 변경 성공 시 같은 요청
  // 안에서(세션 자격증명이 무효화되기 전에) 완료 상태를 기록하기 위해 필요
  sessionStorageFactory?: SessionStorageFactory<SecuritySessionCookie>
) {
  const internalUserSchema = schema.object({
    description: schema.maybe(schema.string()),
    password: schema.maybe(schema.string()),
    backend_roles: schema.arrayOf(schema.string(), { defaultValue: [] }),
    attributes: schema.any({ defaultValue: {} }),
  });

  const actionGroupSchema = schema.object({
    description: schema.maybe(schema.string()),
    allowed_actions: schema.arrayOf(schema.string()),
    // type field is not supported in legacy implementation, comment it out for now.
    // type: schema.oneOf([
    //   schema.literal('cluster'),
    //   schema.literal('index'),
    //   schema.literal('opensearch_dashboards'),
    // ]),
  });

  const roleMappingSchema = schema.object({
    description: schema.maybe(schema.string()),
    backend_roles: schema.arrayOf(schema.string(), { defaultValue: [] }),
    hosts: schema.arrayOf(schema.string(), { defaultValue: [] }),
    users: schema.arrayOf(schema.string(), { defaultValue: [] }),
  });

  const roleSchema = schema.object({
    description: schema.maybe(schema.string()),
    cluster_permissions: schema.arrayOf(schema.string(), { defaultValue: [] }),
    tenant_permissions: schema.arrayOf(schema.any(), { defaultValue: [] }),
    index_permissions: schema.arrayOf(schema.any(), { defaultValue: [] }),
  });

  const tenantSchema = schema.object({
    description: schema.string(),
  });

  const accountSchema = schema.object({
    password: schema.string(),
    current_password: schema.string(),
  });

  const schemaMap: any = {
    internalusers: internalUserSchema,
    actiongroups: actionGroupSchema,
    rolesmapping: roleMappingSchema,
    roles: roleSchema,
    tenants: tenantSchema,
    account: accountSchema,
  };
  function validateRequestBody(resourceName: string, requestBody: any): any {
    const inputSchema = schemaMap[resourceName];
    if (!inputSchema) {
      throw new Error(`Unknown resource ${resourceName}`);
    }
    inputSchema.validate(requestBody); // throws error if validation fail
  }
  function validateEntityId(resourceName: string) {
    if (!isValidResourceName(resourceName)) {
      return 'Invalid entity name or id.';
    }
  }

  /**
   * Lists resources by resource name.
   *
   * The response format is:
   * {
   *   "total": <total_entity_count>,
   *   "data": {
   *     "entity_id_1": { <entity_structure> },
   *     "entity_id_2": { <entity_structure> },
   *     ...
   *   }
   * }
   *
   * e.g. when listing internal users, response may look like:
   * {
   *   "total": 2,
   *   "data": {
   *     "api_test_user2": {
   *       "hash": "",
   *       "reserved": false,
   *       "hidden": false,
   *       "backend_roles": [],
   *       "attributes": {},
   *       "description": "",
   *       "static": false
   *     },
   *     "api_test_user1": {
   *       "hash": "",
   *       "reserved": false,
   *       "hidden": false,
   *       "backend_roles": [],
   *       "attributes": {},
   *       "static": false
   *     }
   * }
   *
   * when listing action groups, response will look like:
   * {
   *   "total": 2,
   *   "data": {
   *     "read": {
   *       "reserved": true,
   *       "hidden": false,
   *       "allowed_actions": ["indices:data/read*", "indices:admin/mappings/fields/get*"],
   *       "type": "index",
   *       "description": "Allow all read operations",
   *       "static": false
   *     },
   *     "cluster_all": {
   *       "reserved": true,
   *       "hidden": false,
   *       "allowed_actions": ["cluster:*"],
   *       "type": "cluster",
   *       "description": "Allow everything on cluster level",
   *       "static": false
   *     }
   * }
   *
   * role:
   * {
   *   "total": 2,
   *   "data": {
   *     "opensearch_dashboards_user": {
   *       "reserved": true,
   *       "hidden": false,
   *       "description": "Provide the minimum permissions for a opensearch_dashboards user",
   *       "cluster_permissions": ["cluster_composite_ops"],
   *       "index_permissions": [{
   *         "index_patterns": [".opensearch_dashboards", ".opensearch_dashboards-6", ".opensearch_dashboards_*"],
   *         "fls": [],
   *         "masked_fields": [],
   *         "allowed_actions": ["read", "delete", "manage", "index"]
   *       }, {
   *         "index_patterns": [".tasks", ".management-beats"],
   *         "fls": [],
   *         "masked_fields": [],
   *         "allowed_actions": ["indices_all"]
   *       }],
   *       "tenant_permissions": [],
   *       "static": false
   *     },
   *     "all_access": {
   *       "reserved": true,
   *       "hidden": false,
   *       "description": "Allow full access to all indices and all cluster APIs",
   *       "cluster_permissions": ["*"],
   *       "index_permissions": [{
   *         "index_patterns": ["*"],
   *         "fls": [],
   *         "masked_fields": [],
   *         "allowed_actions": ["*"]
   *       }],
   *       "tenant_permissions": [{
   *         "tenant_patterns": ["*"],
   *         "allowed_actions": ["opensearch_dashboards_all_write"]
   *       }],
   *       "static": false
   *     }
   *   }
   * }
   *
   * rolesmapping:
   * {
   *   "total": 2,
   *   "data": {
   *     "security_manager": {
   *       "reserved": false,
   *       "hidden": false,
   *       "backend_roles": [],
   *       "hosts": [],
   *       "users": ["zengyan", "admin"],
   *       "and_backend_roles": []
   *     },
   *     "all_access": {
   *       "reserved": false,
   *       "hidden": false,
   *       "backend_roles": [],
   *       "hosts": [],
   *       "users": ["zengyan", "admin", "indextest"],
   *       "and_backend_roles": []
   *     }
   *   }
   * }
   *
   * tenants:
   * {
   *   "total": 2,
   *   "data": {
   *     "global_tenant": {
   *       "reserved": true,
   *       "hidden": false,
   *       "description": "Global tenant",
   *       "static": false
   *     },
   *     "test tenant": {
   *       "reserved": false,
   *       "hidden": false,
   *       "description": "tenant description",
   *       "static": false
   *     }
   *   }
   * }
   */
  router.get(
    {
      path: `${API_PREFIX}/${CONFIGURATION_API_PREFIX}/{resourceName}`,
      validate: {
        params: schema.object({
          resourceName: schema.string(),
        }),
        query: schema.object({
          dataSourceId: schema.maybe(schema.string()),
        }),
      },
    },
    async (
      context,
      request,
      response
    ): Promise<IOpenSearchDashboardsResponse<any | ResponseError>> => {
      try {
        const esResp = await wrapRouteWithDataSource(
          dataSourceEnabled,
          context,
          request,
          'opensearch_security.listResource',
          { resourceName: request.params.resourceName }
        );
        return response.ok({
          body: {
            total: Object.keys(esResp).length,
            data: esResp,
          },
        });
      } catch (error) {
        console.log(JSON.stringify(error));
        return errorResponse(response, error);
      }
    }
  );

  /**
   * Gets entity by id.
   *
   * the response format differs from different resource types. e.g.
   *
   * for internal user, response will look like:
   * {
   *   "hash": "",
   *   "reserved": false,
   *   "hidden": false,
   *   "backend_roles": [],
   *   "attributes": {},
   *   "static": false
   * }
   *
   * for role, response will look like:
   * {
   *   "reserved": true,
   *   "hidden": false,
   *   "description": "Allow full access to all indices and all cluster APIs",
   *   "cluster_permissions": ["*"],
   *   "index_permissions": [{
   *     "index_patterns": ["*"],
   *     "fls": [],
   *     "masked_fields": [],
   *     "allowed_actions": ["*"]
   *   }],
   *   "tenant_permissions": [{
   *     "tenant_patterns": ["*"],
   *     "allowed_actions": ["opensearch_dashboards_all_write"]
   *   }],
   *   "static": false
   * }
   *
   * for roles mapping, response will look like:
   * {
   *   "reserved": true,
   *   "hidden": false,
   *   "description": "Allow full access to all indices and all cluster APIs",
   *   "cluster_permissions": ["*"],
   *   "index_permissions": [{
   *     "index_patterns": ["*"],
   *     "fls": [],
   *     "masked_fields": [],
   *     "allowed_actions": ["*"]
   *   }],
   *   "tenant_permissions": [{
   *     "tenant_patterns": ["*"],
   *     "allowed_actions": ["opensearch_dashboards_all_write"]
   *   }],
   *   "static": false
   * }
   *
   * for action groups, response will look like:
   * {
   *   "reserved": true,
   *   "hidden": false,
   *   "allowed_actions": ["indices:data/read*", "indices:admin/mappings/fields/get*"],
   *   "type": "index",
   *   "description": "Allow all read operations",
   *   "static": false
   * }
   *
   * for tenant, response will look like:
   * {
   *   "reserved": true,
   *   "hidden": false,
   *   "description": "Global tenant",
   *   "static": false
   * },
   */
  router.get(
    {
      path: `${API_PREFIX}/${CONFIGURATION_API_PREFIX}/{resourceName}/{id}`,
      validate: {
        params: schema.object({
          resourceName: schema.string(),
          id: schema.string(),
        }),
        query: schema.object({
          dataSourceId: schema.maybe(schema.string()),
        }),
      },
    },
    async (
      context,
      request,
      response
    ): Promise<IOpenSearchDashboardsResponse<any | ResponseError>> => {
      try {
        const esResp = await wrapRouteWithDataSource(
          dataSourceEnabled,
          context,
          request,
          'opensearch_security.getResource',
          {
            resourceName: request.params.resourceName,
            id: request.params.id,
          }
        );
        return response.ok({ body: esResp[request.params.id] });
      } catch (error) {
        return errorResponse(response, error);
      }
    }
  );

  /**
   * Deletes an entity by id.
   */
  router.delete(
    {
      path: `${API_PREFIX}/${CONFIGURATION_API_PREFIX}/{resourceName}/{id}`,
      validate: {
        params: schema.object({
          resourceName: schema.string(),
          id: schema.string({
            minLength: 1,
          }),
        }),
        query: schema.object({
          dataSourceId: schema.maybe(schema.string()),
        }),
      },
    },
    async (
      context,
      request,
      response
    ): Promise<IOpenSearchDashboardsResponse<any | ResponseError>> => {
      try {
        const esResp = await wrapRouteWithDataSource(
          dataSourceEnabled,
          context,
          request,
          'opensearch_security.deleteResource',
          {
            resourceName: request.params.resourceName,
            id: request.params.id,
          }
        );
        return response.ok({
          body: {
            message: esResp.message,
          },
        });
      } catch (error) {
        return errorResponse(response, error);
      }
    }
  );

  /**
   * Update object with out Id. Resource identification is expected to computed from headers. Eg: auth headers
   *
   * Request sample:
   * /configuration/account
   * {
   *   "password": "new-password",
   *   "current_password": "old-password"
   * }
   */
  router.post(
    {
      path: `${API_PREFIX}/${CONFIGURATION_API_PREFIX}/{resourceName}`,
      validate: {
        params: schema.object({
          resourceName: schema.string(),
        }),
        body: schema.any(),
        query: schema.object({
          dataSourceId: schema.maybe(schema.string()),
        }),
      },
    },
    async (
      context,
      request,
      response
    ): Promise<IOpenSearchDashboardsResponse<any | ResponseError>> => {
      try {
        validateRequestBody(request.params.resourceName, request.body);
      } catch (error) {
        return response.badRequest({ body: error });
      }

      // [추가] reserved:true admin 본인의 비밀번호 변경만 전용 처리.
      // 기존 다른 사용자의 /configuration/account 처리 로직은 아래에 그대로 유지한다.
      if (request.params.resourceName === 'account' && sessionStorageFactory) {
        let session: SecuritySessionCookie | undefined;
        try {
          session = (await sessionStorageFactory.asScoped(request).get()) || undefined;
        } catch (_error) {
          return response.custom({
            statusCode: 401,
            body: { message: '로그인 세션 확인에 실패했습니다.' },
          });
        }
        if (!session) {
          return response.custom({
            statusCode: 401,
            body: { message: '로그인 세션이 없습니다.' },
          });
        }
        if (session.username === 'admin') {
          // [추가] 로컬 시스템 관리자 스크립트가 원격 Data Source 계정을
          // 변경하는 데 사용되지 않도록 제한.
          if (request.query?.dataSourceId) {
            return response.badRequest({
              body: { message: '로컬 admin 비밀번호만 변경할 수 있습니다.' },
            });
          }
          // [수정] 사전 authinfo 호출은 제거하고 기존 SH의 비밀번호 검증을 신뢰한다.
          // SH의 verify_old_password가 변경 전에 Indexer에서 현재 비밀번호를 검증한다.
          // 이전 authinfo 사전검증은 일반 Error를 502로 분류했으므로 사용하지 않는다.
          /*
          // [삭제 - 기존 코드 보존: 이중 인증 검증]
          // [추가] 기존 비밀번호만 Indexer authinfo로 검증한다.
          // /auth/login을 사용하지 않으므로 중복 로그인 차단과 세션 생성에 영향이 없다.
          // 잘못된 비밀번호는 SH 호출 전에 401로 종료하여 시스템 변경을 막는다.
          try {
            const authHeader = Buffer.from(
              `admin:${request.body.current_password}`,
              'utf8'
            ).toString('base64');
            const authInfo = await context.security_plugin.esClient
              .asScoped(request)
              .callAsCurrentUser('opensearch_security.authinfo', {
                headers: { authorization: `Basic ${authHeader}` },
              });
            if (!authInfo || authInfo.user_name !== 'admin') {
              return response.custom({
                statusCode: 401,
                body: { message: '현재 비밀번호가 일치하지 않습니다.' },
              });
            }
          } catch (error: any) {
            const statusCode = error?.statusCode ?? error?.status ?? error?.response?.statusCode;
            if (Number(statusCode) === 401) {
              return response.custom({
                statusCode: 401,
                body: { message: '현재 비밀번호가 일치하지 않습니다.' },
              });
            }
            // [추가] Indexer 연결 장애 등을 비밀번호 불일치로 오인하지 않는다.
            // [기존 코드 보존 - 대체됨]
            // context.security_plugin.logger.error('GuardXAI admin current password verification failed.');
            // [수정] 비밀번호/인증 헤더/응답 본문은 기록하지 않고 안전한 오류 분류값만 남긴다.
            const errorName =
              typeof error?.name === 'string' && /^[A-Za-z0-9_]+$/.test(error.name)
                ? error.name
                : 'unknown';
            const errorCode =
              typeof error?.code === 'string' && /^[A-Z0-9_]+$/.test(error.code)
                ? error.code
                : 'unknown';
            const diagnosticStatus =
              Number.isInteger(Number(statusCode)) && Number(statusCode) >= 100
                ? String(Number(statusCode))
                : 'unknown';
            context.security_plugin.logger.error(
              `GuardXAI admin current password verification failed: status=${diagnosticStatus}, name=${errorName}, code=${errorCode}.`
            );
            return response.custom({
              statusCode: 502,
              body: { message: '현재 비밀번호 확인에 실패했습니다. 변경 작업을 시작하지 않았습니다.' },
            });
          }
          */

          try {
            // [기존 유지] SH에서 기존 비밀번호도 재검증하고 Indexer 변경,
            // Filebeat/Manager 키스토어 동기화까지 일괄 처리한다.
            // 기존 /auth/login을 호출하지 않아 중복 로그인 검사를 재실행하지 않는다.
            await rotateReservedAdminPassword(
              request.body.current_password,
              request.body.password
            );
          } catch (error) {
            // [수정] SH가 명시적으로 '현재 비밀번호 인증 실패'를 반환한 경우만 400 처리.
            // 비밀번호 본문이나 SH의 stderr 원문은 노출하지 않는다.
            if (error instanceof InvalidCurrentAdminPasswordError) {
              // [수정] 로그인 세션은 유효하므로 비밀번호 입력 오류를 401이 아닌 400으로 반환한다.
              // 공통 인증 처리기가 401을 세션 만료로 해석해 HOME으로 이동하는 부작용을 방지한다.
              return response.custom({
                statusCode: 400,
                body: { message: '현재 비밀번호가 일치하지 않습니다.' },
              });
            }
            // [기존 유지] 그 밖의 실패는 부분 변경 가능성이 있어 500 유지.
            context.security_plugin.logger.error(
              'GuardXAI admin password rotation failed; inspect privileged helper logs.'
            );
            return response.custom({
              statusCode: 500,
              body: {
                message: '관리자 비밀번호 변경 또는 동기화에 실패했습니다. 일부 작업이 적용되었을 수 있으므로 관리자 확인이 필요합니다.',
              },
            });
          }
          // [추가] SH 성공 후 최초 비밀번호 변경 완료 상태를 기록한다.
          let statusSaved = true;
          try {
            await setAdminPasswordChanged(context);
          } catch (_error) {
            statusSaved = false;
            context.security_plugin.logger.error(
              'GuardXAI admin password rotated but status persistence failed.'
            );
          }
          // [추가] 기존 에이전트 재동기화 구현을 변경 없이 재사용.
          // restartAllAgents()는 실패 시 내부 로그만 남긴다.
          await restartAllAgents(context.security_plugin.logger);
          if (!statusSaved) {
            return response.custom({
              statusCode: 500,
              body: {
                message: '비밀번호 변경과 서비스 동기화는 완료됐지만 변경 완료 상태 기록에 실패했습니다.',
              },
            });
          }
          return response.ok({
            body: {
              message: '관리자 비밀번호 변경과 서비스 동기화가 완료되었습니다. Agent 재시작 결과는 서버 로그를 확인하세요.',
            },
          });
        }
      }
      // [기존 유지] 일반 계정의 기존 OpenSearch Security REST API 처리.
      try {
        const esResp = await wrapRouteWithDataSource(
          dataSourceEnabled,
          context,
          request,
          'opensearch_security.saveResourceWithoutId',
          {
            resourceName: request.params.resourceName,
            body: request.body,
          }
        );
        // [수정] admin 본인의 비밀번호 변경은 위 reserved:true 전용 분기로 이동.
        // [기존 코드 주석처리 시작] 기존 REST API 성공 시 admin 후처리 로직 보존.
        /*
        // GS 인증용: admin 계정 최초 비밀번호 변경 강제 기능 - "내 비밀번호 변경" 요청이
        // 성공했고 요청자가 admin이면, 같은 요청 안에서(세션의 Basic Auth 자격증명이
        // 방금 바뀐 비밀번호로 인해 무효화되기 전에) 완료 상태를 기록한다. 이 처리를
        // 별도의 후속 인증 요청으로 분리하면, 그 요청은 이미 무효화된 옛 자격증명으로
        // 재인증을 시도하다 500(Authentication Exception)이 나므로 반드시 이 안에서 처리.
        if (request.params.resourceName === 'account' && sessionStorageFactory) {
          try {
            const cookie = await sessionStorageFactory.asScoped(request).get();
            if (cookie && cookie.username === 'admin') {
              await setAdminPasswordChanged(context);
              // GS 인증용: admin 본인이 자기 비밀번호를 바꾼 경우 Filebeat 키스토어 +
              // 매니저 인덱서 키스토어를 같은 요청 안에서 즉시 동기화하고, 기존 연결
              // 에이전트까지 재시작시켜 재동기화를 강제한다(베스트 에포트 — 실패해도
              // 비밀번호 변경 자체는 이미 성공 처리됨. 2026-09-04 장애 조사로 세 단계
              // 모두 필요함이 확인됨).
              if (request.body && request.body.password) {
                await syncFilebeatAdminPassword(
                  request.body.password,
                  context.security_plugin.logger
                );
                await syncManagerIndexerPassword(
                  request.body.password,
                  context.security_plugin.logger
                );
                await restartAllAgents(context.security_plugin.logger);
              }
            }
          } catch (error) {
            // 상태 기록 실패는 비밀번호 변경 자체의 성공 여부에 영향을 주지 않음
          }
        }
        */
        // [기존 코드 주석처리 끝]
        return response.ok({
          body: {
            message: esResp.message,
          },
        });
      } catch (error) {
        return errorResponse(response, error);
      }
    }
  );

  /**
   * Update entity by Id.
   */
  router.post(
    {
      path: `${API_PREFIX}/${CONFIGURATION_API_PREFIX}/{resourceName}/{id}`,
      validate: {
        params: schema.object({
          resourceName: schema.string(),
          id: schema.string({
            validate: validateEntityId,
          }),
        }),
        body: schema.any(),
        query: schema.object({
          dataSourceId: schema.maybe(schema.string()),
        }),
      },
    },
    async (
      context,
      request,
      response
    ): Promise<IOpenSearchDashboardsResponse<any | ResponseError>> => {
      try {
        validateRequestBody(request.params.resourceName, request.body);
      } catch (error) {
        return response.badRequest({ body: error });
      }
      try {
        const esResp = await wrapRouteWithDataSource(
          dataSourceEnabled,
          context,
          request,
          'opensearch_security.saveResource',
          {
            resourceName: request.params.resourceName,
            id: request.params.id,
            body: request.body,
          }
        );
        // GS 인증용: "Zero 서버 설정 > 보안 > 내부사용자" 축소 화면의 편집 모달에서
        // admin 계정 비밀번호를 바꾼 경우에도(자기 자신이 아니라 admin을 "관리"하는
        // 경로), 위 /configuration/account 라우트와 동일하게 Filebeat 키스토어 +
        // 매니저 인덱서 키스토어를 즉시 동기화하고 연결된 에이전트를 재시작시킨다 —
        // 안 하면 인덱서 인증 실패로 알림/인벤토리 적재 파이프라인 전체가 끊긴다
        // (2026-09-04 장애 조사로 세 단계 모두 필요함이 확인됨).
        if (
          request.params.resourceName === 'internalusers' &&
          request.params.id === 'admin' &&
          request.body &&
          (request.body as any).password
        ) {
          await syncFilebeatAdminPassword(
            (request.body as any).password,
            context.security_plugin.logger
          );
          await syncManagerIndexerPassword(
            (request.body as any).password,
            context.security_plugin.logger
          );
          await restartAllAgents(context.security_plugin.logger);
        }
        return response.ok({
          body: {
            message: esResp.message,
          },
        });
      } catch (error) {
        return errorResponse(response, error);
      }
    }
  );

  /**
   * Gets authentication info of the user.
   *
   * The response looks like:
   * {
   *   "user": "User [name=admin, roles=[], requestedTenant=__user__]",
   *   "user_name": "admin",
   *   "user_requested_tenant": "__user__",
   *   "remote_address": "127.0.0.1:35044",
   *   "backend_roles": [],
   *   "custom_attribute_names": [],
   *   "roles": ["all_access", "security_manager"],
   *   "tenants": {
   *     "another_tenant": true,
   *     "admin": true,
   *     "global_tenant": true,
   *     "aaaaa": true,
   *     "test tenant": true
   *   },
   *   "principal": null,
   *   "peer_certificates": "0",
   *   "sso_logout_url": null
   * }
   */
  router.get(
    {
      path: `${API_PREFIX}/auth/authinfo`,
      validate: false,
    },
    async (
      context,
      request,
      response
    ): Promise<IOpenSearchDashboardsResponse<any | ResponseError>> => {
      const client = context.security_plugin.esClient.asScoped(request);
      let esResp;
      try {
        esResp = await client.callAsCurrentUser('opensearch_security.authinfo');
        return response.ok({
          body: esResp,
        });
      } catch (error) {
        return errorResponse(response, error);
      }
    }
  );

  router.get(
    {
      path: `${API_PREFIX}/auth/dashboardsinfo`,
      validate: false,
    },
    async (
      context,
      request,
      response
    ): Promise<IOpenSearchDashboardsResponse<any | ResponseError>> => {
      const client = context.security_plugin.esClient.asScoped(request);
      let esResp;
      try {
        esResp = await client.callAsCurrentUser('opensearch_security.dashboardsinfo');
        return response.ok({
          body: esResp,
        });
      } catch (error) {
        return errorResponse(response, error);
      }
    }
  );

  /**
   * Gets audit log configuration。
   *
   * Sample payload:
   * {
   *   "enabled":true,
   *   "audit":{
   *     "enable_rest":false,
   *     "disabled_rest_categories":[
   *       "FAILED_LOGIN",
   *       "AUTHENTICATED"
   *     ],
   *     "enable_transport":true,
   *     "disabled_transport_categories":[
   *       "GRANTED_PRIVILEGES"
   *     ],
   *     "resolve_bulk_requests":true,
   *     "log_request_body":false,
   *     "resolve_indices":true,
   *     "exclude_sensitive_headers":true,
   *     "ignore_users":[
   *       "admin",
   *     ],
   *     "ignore_requests":[
   *       "SearchRequest",
   *       "indices:data/read/*"
   *     ]
   *   },
   *   "compliance":{
   *     "enabled":true,
   *     "internal_config":false,
   *     "external_config":false,
   *     "read_metadata_only":false,
   *     "read_watched_fields":{
   *       "indexName1":[
   *         "field1",
   *         "fields-*"
   *       ]
   *     },
   *     "read_ignore_users":[
   *       "opensearchdashboardsserver",
   *       "operator/*"
   *     ],
   *     "write_metadata_only":false,
   *     "write_log_diffs":false,
   *     "write_watched_indices":[
   *       "indexName2",
   *       "indexPatterns-*"
   *     ],
   *     "write_ignore_users":[
   *       "admin"
   *     ]
   *   }
   * }
   */
  router.get(
    {
      path: `${API_PREFIX}/configuration/audit`,
      validate: {
        query: schema.object({
          dataSourceId: schema.maybe(schema.string()),
        }),
      },
    },
    async (
      context,
      request,
      response
    ): Promise<IOpenSearchDashboardsResponse<any | ResponseError>> => {
      try {
        const esResp = await wrapRouteWithDataSource(
          dataSourceEnabled,
          context,
          request,
          'opensearch_security.getAudit'
        );
        return response.ok({
          body: esResp,
        });
      } catch (error) {
        return response.custom({
          statusCode: error.statusCode,
          body: parseEsErrorResponse(error),
        });
      }
    }
  );

  /**
   * Update audit log configuration。
   *
   * Sample payload:
   * {
   *   "enabled":true,
   *   "audit":{
   *     "enable_rest":false,
   *     "disabled_rest_categories":[
   *       "FAILED_LOGIN",
   *       "AUTHENTICATED"
   *     ],
   *     "enable_transport":true,
   *     "disabled_transport_categories":[
   *       "GRANTED_PRIVILEGES"
   *     ],
   *     "resolve_bulk_requests":true,
   *     "log_request_body":false,
   *     "resolve_indices":true,
   *     "exclude_sensitive_headers":true,
   *     "ignore_users":[
   *       "admin",
   *     ],
   *     "ignore_requests":[
   *       "SearchRequest",
   *       "indices:data/read/*"
   *     ]
   *   },
   *   "compliance":{
   *     "enabled":true,
   *     "internal_config":false,
   *     "external_config":false,
   *     "read_metadata_only":false,
   *     "read_watched_fields":{
   *       "indexName1":[
   *         "field1",
   *         "fields-*"
   *       ]
   *     },
   *     "read_ignore_users":[
   *       "kibanaserver",
   *       "operator/*"
   *     ],
   *     "write_metadata_only":false,
   *     "write_log_diffs":false,
   *     "write_watched_indices":[
   *       "indexName2",
   *       "indexPatterns-*"
   *     ],
   *     "write_ignore_users":[
   *       "admin"
   *     ]
   *   }
   * }
   */
  router.post(
    {
      path: `${API_PREFIX}/configuration/audit/config`,
      validate: {
        body: schema.any(),
        query: schema.object({
          dataSourceId: schema.maybe(schema.string()),
        }),
      },
    },
    async (context, request, response) => {
      try {
        const esResp = await wrapRouteWithDataSource(
          dataSourceEnabled,
          context,
          request,
          'opensearch_security.saveAudit',
          {
            body: request.body,
          }
        );
        return response.ok({
          body: {
            message: esResp.message,
          },
        });
      } catch (error) {
        return errorResponse(response, error);
      }
    }
  );

  /**
   * Deletes cache.
   *
   * Sample response: {"message":"Cache flushed successfully."}
   */
  router.delete(
    {
      path: `${API_PREFIX}/configuration/cache`,
      validate: {
        query: schema.object({
          dataSourceId: schema.maybe(schema.string()),
        }),
      },
    },
    async (context, request, response) => {
      try {
        const esResp = await wrapRouteWithDataSource(
          dataSourceEnabled,
          context,
          request,
          'opensearch_security.clearCache'
        );
        return response.ok({
          body: {
            message: esResp.message,
          },
        });
      } catch (error) {
        return errorResponse(response, error);
      }
    }
  );

  /**
   * Gets permission info of current user.
   *
   * Sample response:
   * {
   *   "user": "User [name=admin, roles=[], requestedTenant=__user__]",
   *   "user_name": "admin",
   *   "has_api_access": true,
   *   "disabled_endpoints": {}
   * }
   */
  router.get(
    {
      path: `${API_PREFIX}/restapiinfo`,
      validate: false,
    },
    async (context, request, response) => {
      const client = context.security_plugin.esClient.asScoped(request);
      try {
        const esResponse = await client.callAsCurrentUser('opensearch_security.restapiinfo');
        return response.ok({
          body: esResponse,
        });
      } catch (error) {
        return response.badRequest({
          body: error,
        });
      }
    }
  );

  /**
   * Validates DLS (document level security) query.
   *
   * Request payload is an ES query.
   */
  router.post(
    {
      path: `${API_PREFIX}/${CONFIGURATION_API_PREFIX}/validatedls/{indexName}`,
      validate: {
        params: schema.object({
          // in legacy plugin implmentation, indexName is not used when calling ES API.
          indexName: schema.maybe(schema.string()),
        }),
        body: schema.any(),
      },
    },
    async (context, request, response) => {
      const client = context.security_plugin.esClient.asScoped(request);
      try {
        const esResponse = await client.callAsCurrentUser('opensearch_security.validateDls', {
          body: request.body,
        });
        return response.ok({
          body: esResponse,
        });
      } catch (error) {
        return errorResponse(response, error);
      }
    }
  );

  /**
   * Gets index mapping.
   *
   * Calling ES _mapping API under the hood. see
   * https://www.elastic.co/guide/en/elasticsearch/reference/current/indices-get-mapping.html
   */
  router.post(
    {
      path: `${API_PREFIX}/${CONFIGURATION_API_PREFIX}/index_mappings`,
      validate: {
        body: schema.object({
          index: schema.arrayOf(schema.string()),
        }),
      },
    },
    async (context, request, response) => {
      const client = context.security_plugin.esClient.asScoped(request);
      try {
        const esResponse = await client.callAsCurrentUser('opensearch_security.getIndexMappings', {
          index: request.body.index.join(','),
          ignore_unavailable: true,
          allow_no_indices: true,
        });
        return response.ok({
          body: esResponse,
        });
      } catch (error) {
        return errorResponse(response, error);
      }
    }
  );

  /**
   * Gets all indices, and field mappings.
   *
   * Calls ES API '/_all/_mapping/field/*' under the hood. see
   * https://www.elastic.co/guide/en/elasticsearch/reference/current/indices-get-mapping.html
   */
  router.get(
    {
      path: `${API_PREFIX}/${CONFIGURATION_API_PREFIX}/indices`,
      validate: false,
    },
    async (context, request, response) => {
      const client = context.security_plugin.esClient.asScoped(request);
      try {
        const esResponse = await client.callAsCurrentUser('opensearch_security.indices');
        return response.ok({
          body: esResponse,
        });
      } catch (error) {
        return errorResponse(response, error);
      }
    }
  );

  /**
   * GS 인증용: admin 계정이 최초 비밀번호를 아직 변경하지 않았으면 로그인 직후
   * 강제 비밀번호 변경 화면을 띄우기 위한 상태 조회 API.
   * (완료 표시는 위 configuration/account POST 핸들러에서 같은 요청 안에 처리 —
   * 별도 후속 요청으로 분리하면 세션 자격증명이 무효화된 뒤라 인증 실패함)
   */
  router.get(
    {
      path: `${API_PREFIX}/admin_password_status`,
      validate: false,
    },
    async (
      context,
      request,
      response
    ): Promise<IOpenSearchDashboardsResponse<any | ResponseError>> => {
      try {
        const passwordChanged = await getAdminPasswordChanged(context);
        return response.ok({ body: { passwordChanged } });
      } catch (error) {
        return errorResponse(response, error);
      }
    }
  );
}
/**
 * A helper function to wrap API calls with the appropriate client. If the multiple datasources feature is disabled, it will use
 * the existing client provided by the security plugin. Otherwise, it will use the one provided by the datasource plugin based on the id
 * that we extract via the UI.
 */
const wrapRouteWithDataSource = async (
  dataSourceEnabled: boolean,
  context: RequestHandlerContext,
  request: OpenSearchDashboardsRequest<unknown, any, any>,
  endpoint: string,
  body?: Record<string, string>
) => {
  if (!dataSourceEnabled || !request.query?.dataSourceId) {
    const client = context.security_plugin.esClient.asScoped(request);
    return await client.callAsCurrentUser(endpoint, body);
  } else {
    const client = context.dataSource.opensearch.legacy.getClient(request.query?.dataSourceId);
    return await client.callAPI(endpoint, body);
  }
};
function parseEsErrorResponse(error: any) {
  if (error.response) {
    try {
      const esErrorResponse = JSON.parse(error.response);
      return esErrorResponse.reason || error.response;
    } catch (parsingError) {
      return error.response;
    }
  }
  return error.message;
}

function errorResponse(response: OpenSearchDashboardsResponseFactory, error: any) {
  return response.custom({
    statusCode: error.statusCode,
    body: parseEsErrorResponse(error),
  });
}
