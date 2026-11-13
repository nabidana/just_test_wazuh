/*
 * Wazuh app - Class for Wazuh-Elastic functions
 * Copyright (C) 2015-2022 Wazuh, Inc.
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * Find more information about this on the LICENSE file.
 */
import { ErrorResponse, WAZUH_STATUS_CODES } from '../lib/error-response';
import {
  WAZUH_SAMPLE_ALERTS_INDEX_SHARDS,
  WAZUH_SAMPLE_ALERTS_INDEX_REPLICAS,
  WAZUH_ALERTS_PREFIX,
  WAZUH_SAMPLE_DATA_CATEGORIES_TYPE_DATA,
  WAZUH_SAMPLE_ALERTS_DEFAULT_NUMBER_DOCUMENTS,
  WAZUH_INDEXER_NAME,
  HTTP_STATUS_CODES,
} from '../../common/constants';
import {
  OpenSearchDashboardsRequest,
  RequestHandlerContext,
  OpenSearchDashboardsResponseFactory,
} from 'src/core/server';
import { routeDecoratorProtectedAdministrator } from './decorators';
import { generateSampleData } from '../lib/generate-sample-data';
// GS 인증용: 보안로그에 실제 접속 IP를 남기기 위해 공개 요청 래퍼가 노출하지 않는
// 원본 Hapi request(raw.req.socket / info.remoteAddress)에 접근한다. 다른 플러그인
// (wazuh-security-dashboards-plugin)의 로그인 라우트에서 쓰는 것과 동일한 방식이며,
// 이 파일 기준 경로 깊이(server/controllers/ → 4단계 위 src/)는 이 플러그인의 다른
// 테스트 파일들(mocks/platform-server.mock.ts 등)의 기존 import와 동일하게 맞춘 것.
import { ensureRawRequest } from '../../../../src/core/server/http/router';

// GS 인증용: 보안로그의 "결과" 컬럼에 대상 계정명 + 처리 결과를 함께 표시하기 위한
// 행위별 설명 텍스트. 신규 event_type을 추가할 때 여기에도 추가할 것.
const SECURITY_LOG_ACTION_LABEL: Record<string, string> = {
  user_created: '아이디 생성 성공',
  user_updated: '아이디 정보 수정 성공',
  user_deleted: '아이디 삭제 성공',
};

function buildSecurityLogResultDetail(eventType: string, targetUsername: string): string {
  const actionLabel = SECURITY_LOG_ACTION_LABEL[eventType];
  if (!actionLabel || !targetUsername) {
    return '';
  }
  return `${targetUsername} ${actionLabel}`;
}

// GS 인증용: 이 요청을 실제로 보낸(=계정을 생성/수정/삭제한) 행위자의 아이디.
// basic auth 세션은 매 요청마다 Authorization: Basic base64(username:password) 헤더를
// 실어 보내므로(다른 플러그인의 basic auth 세션 처리와 동일한 방식), 이를 그대로
// 디코딩해서 얻는다. 대상 계정(target_username)과는 별개의 값이다.
function getActorUsernameFromAuthHeader(request: OpenSearchDashboardsRequest): string {
  try {
    const authHeader = (request.headers || {}).authorization as string | undefined;
    if (!authHeader || !authHeader.toLowerCase().startsWith('basic ')) {
      return '-';
    }
    const decoded = Buffer.from(authHeader.slice(6), 'base64').toString('utf-8');
    const separatorIndex = decoded.indexOf(':');
    if (separatorIndex === -1) {
      return '-';
    }
    return decoded.slice(0, separatorIndex) || '-';
  } catch (error) {
    return '-';
  }
}

// GS 인증용: 보안로그 IP 기록(다른 플러그인의 로그인 라우트 getClientIp와 동일한 방식)
function getClientIp(request: any): string {
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

/**
 * Get the an array of unique objects by settingIndexPattern-dataSet par
 * @param arr
 * @returns
 */
function getUniqueEntriesByIndiceDatasetPar(
  array: { settingIndexPattern: string; dataSet: string }[],
) {
  const seen = new Set();
  return array.filter(item => {
    // Create a unique key by combining the two property values.
    const key = `${item.settingIndexPattern}::${item.dataSet}`;
    if (seen.has(key)) {
      return false;
    }
    seen.add(key);
    return true;
  });
}

export class WazuhElasticCtrl {
  constructor() {}

  /**
   * This returns the index according the category
   * @param {string} category
   */
  async buildSampleIndexByCategory(
    context: RequestHandlerContext,
    category: string,
  ): Promise<{ indexName: string; dataSet: string }[]> {
    const indexNames = await Promise.all(
      WAZUH_SAMPLE_DATA_CATEGORIES_TYPE_DATA[category].map(async item => ({
        indexName: `${
          item.settingIndexPattern
            ? await context.wazuh_core.configuration.get(
                item.settingIndexPattern,
              )
            : item.indexPatternPrefix
        }sample-${category}`,
        dataSet: item?.dataSet,
      })),
    );
    return getUniqueEntriesByIndiceDatasetPar(indexNames);
  }

  /**
   * This retrieves a template from Elasticsearch
   * @param {Object} context
   * @param {Object} request
   * @param {Object} response
   * @returns {Object} template or ErrorResponse
   */
  async getTemplate(
    context: RequestHandlerContext,
    request: OpenSearchDashboardsRequest<{ pattern: string }>,
    response: OpenSearchDashboardsResponseFactory,
  ) {
    try {
      const data =
        await context.core.opensearch.client.asInternalUser.cat.templates();

      const templates = data.body;
      if (!templates || typeof templates !== 'string') {
        throw new Error(
          `An unknown error occurred when fetching templates from ${WAZUH_INDEXER_NAME}`,
        );
      }

      const lastChar =
        request.params.pattern[request.params.pattern.length - 1];

      // Split into separate patterns
      const tmpdata = templates.match(/\[.*\]/g);
      const tmparray = [];
      for (let item of tmpdata) {
        // A template might use more than one pattern
        if (item.includes(',')) {
          item = item.substr(1).slice(0, -1);
          const subItems = item.split(',');
          for (const subitem of subItems) {
            tmparray.push(`[${subitem.trim()}]`);
          }
        } else {
          tmparray.push(item);
        }
      }

      // Ensure we are handling just patterns
      const array = tmparray.filter(
        item => item.includes('[') && item.includes(']'),
      );

      const pattern =
        lastChar === '*'
          ? request.params.pattern.slice(0, -1)
          : request.params.pattern;
      const isIncluded = array.filter(item => {
        item = item.slice(1, -1);
        const lastChar = item[item.length - 1];
        item = lastChar === '*' ? item.slice(0, -1) : item;
        return item.includes(pattern) || pattern.includes(item);
      });
      context.wazuh.logger.debug(
        `Template is valid: ${
          isIncluded && Array.isArray(isIncluded) && isIncluded.length
            ? 'yes'
            : 'no'
        }`,
      );
      return isIncluded && Array.isArray(isIncluded) && isIncluded.length
        ? response.ok({
            body: {
              statusCode: 200,
              status: true,
              data: `Template found for ${request.params.pattern}`,
            },
          })
        : response.ok({
            body: {
              statusCode: 200,
              status: false,
              data: `No template found for ${request.params.pattern}`,
            },
          });
    } catch (error) {
      context.wazuh.logger.error(error.message || error);
      return ErrorResponse(
        `Could not retrieve templates from ${WAZUH_INDEXER_NAME} due to ${
          error.message || error
        }`,
        4002,
        500,
        response,
      );
    }
  }

  /**
   * This check index-pattern
   * @param {Object} context
   * @param {Object} request
   * @param {Object} response
   * @returns {Object} status obj or ErrorResponse
   */

  /**
   * This get the fields keys
   * @param {Object} context
   * @param {Object} request
   * @param {Object} response
   * @returns {Array<Object>} fields or ErrorResponse
   */
  async getFieldTop(
    context: RequestHandlerContext,
    request: OpenSearchDashboardsRequest<
      { mode: string; cluster: string; field: string; pattern: string },
      { agentsList: string }
    >,
    response: OpenSearchDashboardsResponseFactory,
  ) {
    try {
      // Top field payload
      let payload = {
        size: 1,
        query: {
          bool: {
            must: [],
            must_not: {
              term: {
                'agent.id': '000',
              },
            },
            filter: [
              {
                range: { timestamp: {} },
              },
            ],
          },
        },
        aggs: {
          '2': {
            terms: {
              field: '',
              size: 1,
              order: { _count: 'desc' },
            },
          },
        },
      };

      // Set up time interval, default to Last 24h
      const timeGTE = 'now-1d';
      const timeLT = 'now';
      payload.query.bool.filter[0].range['timestamp']['gte'] = timeGTE;
      payload.query.bool.filter[0].range['timestamp']['lt'] = timeLT;

      // Set up match for default cluster name
      payload.query.bool.must.push(
        request.params.mode === 'cluster'
          ? { match: { 'cluster.name': request.params.cluster } }
          : { match: { 'manager.name': request.params.cluster } },
      );

      if (request.query.agentsList)
        payload.query.bool.filter.push({
          terms: {
            'agent.id': request.query.agentsList.split(','),
          },
        });
      payload.aggs['2'].terms.field = request.params.field;

      const data = await context.core.opensearch.client.asCurrentUser.search({
        size: 1,
        index: request.params.pattern,
        body: payload,
      });

      return data.body.hits.total.value === 0 ||
        typeof data.body.aggregations['2'].buckets[0] === 'undefined'
        ? response.ok({
            body: { statusCode: 200, data: '' },
          })
        : response.ok({
            body: {
              statusCode: 200,
              data: data.body.aggregations['2'].buckets[0].key,
            },
          });
    } catch (error) {
      context.wazuh.logger.error(error.message || error);
      return ErrorResponse(error.message || error, 4004, 500, response);
    }
  }

  /**
   * Checks for minimum index pattern fields in a list of index patterns.
   * @param {Array<Object>} indexPatternList List of index patterns
   */
  validateIndexPattern(indexPatternList) {
    const minimum = ['timestamp', 'rule.groups', 'manager.name', 'agent.id'];
    let list = [];
    for (const index of indexPatternList) {
      let valid, parsed;
      try {
        parsed = JSON.parse(index.attributes.fields);
      } catch (error) {
        continue;
      }

      valid = parsed.filter(item => minimum.includes(item.name));
      if (valid.length === 4) {
        list.push({
          id: index.id,
          title: index.attributes.title,
        });
      }
    }
    return list;
  }

  /**
   * Returns current security platform
   * @param {Object} req
   * @param {Object} reply
   * @returns {String}
   */
  async getCurrentPlatform(
    context: RequestHandlerContext,
    request: OpenSearchDashboardsRequest<{ user: string }>,
    response: OpenSearchDashboardsResponseFactory,
  ) {
    try {
      return response.ok({
        body: {
          platform: context.wazuh.security.platform,
        },
      });
    } catch (error) {
      context.wazuh.logger.error(error.message || error);
      return ErrorResponse(error.message || error, 4011, 500, response);
    }
  }

  /**
   * This creates sample data in wazuh-sample-data
   * GET /indexer/sampledata/{category}
   * @param {*} context
   * @param {*} request
   * @param {*} response
   * {alerts: [...]} or ErrorResponse
   */
  async haveSampleDataOfCategory(
    context: RequestHandlerContext,
    request: OpenSearchDashboardsRequest<{ category: string }>,
    response: OpenSearchDashboardsResponseFactory,
  ) {
    try {
      const sampleDataIndex = await this.buildSampleIndexByCategory(
        context,
        request.params.category,
      );
      // Check if wazuh sample data index exists
      const existsSampleIndex = await Promise.all(
        sampleDataIndex.map(async ({ indexName }) => {
          return await context.core.opensearch.client.asCurrentUser.indices.exists(
            {
              index: indexName,
            },
          );
        }),
      );
      return response.ok({
        body: {
          index: sampleDataIndex,
          exists: existsSampleIndex.some(result => result.body),
        },
      });
    } catch (error) {
      context.wazuh.logger.error(
        `Error checking if there are sample data indices: ${
          error.message || error
        }`,
      );

      const [statusCode, errorMessage] = this.getErrorDetails(error);
      return ErrorResponse(
        `Error checking if there are sample data indices: ${
          errorMessage || error
        }`,
        1000,
        statusCode,
        response,
      );
    }
  }
  /**
   * This creates sample data in wazuh-sample-data
   * POST /indexer/sampledata/{category}
   * {
   *   "manager": {
   *      "name": "manager_name"
   *    },
   *    cluster: {
   *      name: "mycluster",
   *      node: "mynode"
   *    }
   * }
   * @param {*} context
   * @param {*} request
   * @param {*} response
   * {index: string, data: [...], count: number} or ErrorResponse
   */
  createSampleData = routeDecoratorProtectedAdministrator(1000)(
    async (
      context: RequestHandlerContext,
      request: OpenSearchDashboardsRequest<{ category: string }>,
      response: OpenSearchDashboardsResponseFactory,
    ) => {
      const sampleIndexNames = await this.buildSampleIndexByCategory(
        context,
        request.params.category,
      );

      const sampleDocumentsResponse: Array<{
        index: string;
        sampleDataCount: number;
      }> = [];

      try {
        await Promise.all(
          sampleIndexNames.map(async ({ indexName, dataSet }) => {
            try {
              const bulkPrefix = JSON.stringify({
                index: {
                  _index: indexName,
                },
              });
              const sampleDataGenerateParams =
                (request.body && request.body.params) || {};

              const mappedData = WAZUH_SAMPLE_DATA_CATEGORIES_TYPE_DATA[
                request.params.category
              ]
                .filter((item: { dataSet: string }) => item.dataSet === dataSet)
                .map((typeSample: { dataSet?: string; count?: number }) => {
                  return generateSampleData(
                    { ...typeSample, ...sampleDataGenerateParams },
                    request.body.count ||
                      typeSample.count ||
                      WAZUH_SAMPLE_ALERTS_DEFAULT_NUMBER_DOCUMENTS,
                    context,
                  );
                });

              let sampleDataAndTemplate: {
                sampleData: [];
                template?: {
                  index_patterns: string;
                  priority: number;
                  template: any;
                };
              } = { sampleData: [] };

              if (mappedData.length > 1) {
                mappedData.forEach((item: { sampleData: [] }) =>
                  sampleDataAndTemplate.sampleData.push(...item.sampleData),
                );
              }

              if (mappedData.length === 1 && mappedData[0].template) {
                sampleDataAndTemplate = mappedData[0];
              }

              const { sampleData } = sampleDataAndTemplate;

              const bulk = sampleData
                .map(document => `${bulkPrefix}\n${JSON.stringify(document)}\n`)
                .join('');

              // Index data

              // Check if wazuh sample data index exists
              const existsSampleIndex =
                await context.core.opensearch.client.asCurrentUser.indices.exists(
                  {
                    index: indexName,
                  },
                );
              if (existsSampleIndex.body === false) {
                // Create wazuh sample data index
                let configuration;

                if (sampleDataAndTemplate?.template) {
                  configuration = sampleDataAndTemplate.template.template;

                  delete configuration.index_patterns;
                  delete configuration.priority;

                  configuration.settings.index.number_of_shards =
                    WAZUH_SAMPLE_ALERTS_INDEX_SHARDS;
                  configuration.settings.index.number_of_replicas =
                    WAZUH_SAMPLE_ALERTS_INDEX_REPLICAS;
                } else {
                  configuration = {
                    settings: {
                      index: {
                        number_of_shards: WAZUH_SAMPLE_ALERTS_INDEX_SHARDS,
                        number_of_replicas: WAZUH_SAMPLE_ALERTS_INDEX_REPLICAS,
                      },
                    },
                  };
                }

                await context.core.opensearch.client.asCurrentUser.indices.create(
                  {
                    index: indexName,
                    body: configuration,
                  },
                );
                context.wazuh.logger.info(`Index ${indexName} created`);
              }

              await context.core.opensearch.client.asCurrentUser.bulk({
                index: indexName,
                body: bulk,
              });

              context.wazuh.logger.info(
                `Added sample data to ${indexName} index`,
              );

              sampleDocumentsResponse.push({
                index: indexName,
                sampleDataCount: sampleData.length,
              });
            } catch (error) {
              context.wazuh.logger.error(
                `Error adding sample data to ${indexName} index: ${
                  error.message || error
                }`,
              );

              const [statusCode, errorMessage] = this.getErrorDetails(error);
              throw { statusCode, errorMessage };
            }
          }),
        );

        // Only return response after all operations are complete
        return response.ok({
          body: { sampleDocumentsResponse },
        });
      } catch (error) {
        const statusCode =
          error?.statusCode || HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR;
        const errorMessage = error?.errorMessage || error.message || error;
        return ErrorResponse(
          errorMessage,
          WAZUH_STATUS_CODES.UNKNOWN,
          statusCode,
          response,
        );
      }
    },
  );
  /**
   * This deletes sample data
   * @param {*} context
   * @param {*} request
   * @param {*} response
   * {result: "deleted", index: string} or ErrorResponse
   */
  deleteSampleData = routeDecoratorProtectedAdministrator(
    WAZUH_STATUS_CODES.UNKNOWN,
  )(
    async (
      context: RequestHandlerContext,
      request: OpenSearchDashboardsRequest<{ category: string }>,
      response: OpenSearchDashboardsResponseFactory,
    ) => {
      try {
        // Get sample data indexes
        const sampleDataIndexAndDataSet = await this.buildSampleIndexByCategory(
          context,
          request.params.category,
        );

        // Get only index names
        const sampleDataIndex = sampleDataIndexAndDataSet.map(
          ({ indexName }) => indexName,
        );

        if (!sampleDataIndex.length) {
          return ErrorResponse(
            `No indices found for category ${request.params.category}`,
            1000,
            404,
            response,
          );
        }

        // Delete sample data indexes
        // return success or error for each index
        const results = await Promise.all(
          sampleDataIndex.map(async index => {
            try {
              // Check if Wazuh sample data index exists
              const existsSampleIndex =
                await context.core.opensearch.client.asCurrentUser.indices.exists(
                  {
                    index,
                  },
                );

              if (existsSampleIndex.body) {
                // Delete Wazuh sample data index
                await context.core.opensearch.client.asCurrentUser.indices.delete(
                  {
                    index: [index],
                  },
                );
                context.wazuh.logger.info(`Deleted ${index} index`);
                return { success: true, index, message: 'deleted' };
              } else {
                return {
                  success: false,
                  index,
                  message: `Index doesn't exist`,
                };
              }
            } catch (error) {
              context.wazuh.logger.error(
                `Error deleting sample data of ${index} index: ${
                  error.message || error
                }`,
              );
              const [statusCode, errorMessage] = this.getErrorDetails(error);
              return {
                success: false,
                index,
                message: errorMessage || error,
                statusCode,
              };
            }
          }),
        );

        // Check if all results are successful
        const successResults = results.filter(result => result.success);
        const failedResults = results.filter(result => !result.success);

        if (successResults.length > 0) {
          context.wazuh.logger.info(
            `Deleted ${successResults.length} indices: ${successResults
              .map(r => r.index)
              .join(', ')}`,
          );
          if (failedResults.length > 0) {
            context.wazuh.logger.error(
              `Failed to delete ${failedResults.length} indices: ${failedResults
                .map(r => r.index)
                .join(', ')}`,
            );
          }

          return response.ok({
            body: {
              result: 'deleted',
              successCount: successResults.length,
              failedCount: failedResults.length,
              indices: successResults.map(r => r.index),
              errors: failedResults.length ? failedResults : undefined,
            },
          });
        } else {
          const firstError = failedResults[0];
          return ErrorResponse(
            `Failed to delete indices: ${firstError.message}`,
            1000,
            firstError.statusCode || 500,
            response,
          );
        }
      } catch (error) {
        context.wazuh.logger.error(
          `Error deleting sample data: ${error.message || error}`,
        );
        const [statusCode, errorMessage] = this.getErrorDetails(error);
        return ErrorResponse(errorMessage || error, 1000, statusCode, response);
      }
    },
  );

  async alerts(
    context: RequestHandlerContext,
    request: OpenSearchDashboardsRequest,
    response: OpenSearchDashboardsResponseFactory,
  ) {
    try {
      const data = await context.core.opensearch.client.asCurrentUser.search(
        request.body,
      );
      return response.ok({
        body: data.body,
      });
    } catch (error) {
      context.wazuh.logger.error(error.message || error);
      return ErrorResponse(error.message || error, 4010, 500, response);
    }
  }

  // GS 인증용: 보안로그(wazuh-dashboard-security-log-YYYY.MM.DD)에 이벤트를 기록.
  // 로그인/로그아웃 이벤트는 plugins-wazuh-security-dashboards-plugin의
  // server/auth/types/basic/routes.ts(logSecurityEvent)가 기록하고, 이 엔드포인트는
  // 대시보드(plugins-main) 쪽에서 발생하는 이벤트(예: 관리자 계정 생성)를 같은 인덱스에
  // 같은 형식으로 기록하기 위한 것. 두 플러그인은 서로 다른 번들이라 서버 코드를
  // 직접 공유할 수 없어 동일한 인덱스/문서 형식으로 별도 구현.
  async securityLogEvent(
    context: RequestHandlerContext,
    request: OpenSearchDashboardsRequest,
    response: OpenSearchDashboardsResponseFactory,
  ) {
    try {
      const { target_username: targetUsername, event_type: eventType } = request.body as {
        target_username: string;
        event_type: string;
      };
      const now = new Date();
      const dateSuffix = now.toISOString().slice(0, 10).replace(/-/g, '.');
      const indexName = `wazuh-dashboard-security-log-${dateSuffix}`;

      // GS 인증용: "시도한 아이디"는 이 요청을 보낸(계정을 생성/수정/삭제한) 행위자여야
      // 한다. 이 요청은 basic auth 쿠키가 붙어있는 인증된 요청이라 매 요청마다
      // `Authorization: Basic base64(username:password)` 헤더가 실려 있음(다른
      // 플러그인의 basic auth 세션 처리 방식과 동일) — 이를 그대로 디코딩해서 행위자를
      // 얻는다. 대상 계정(targetUsername)과는 별개로 취급한다.
      const actorUsername = getActorUsernameFromAuthHeader(request);
      // GS 인증용: 실제 접속 IP. 공개 라우터 요청 래퍼는 소스 IP를 노출하지 않으므로
      // 로그인 라우트의 IP 추출 방식과 동일하게 ensureRawRequest로 원본 요청을 얻는다.
      const ip = getClientIp(request);
      const resultDetail = buildSecurityLogResultDetail(eventType, targetUsername);

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
                target_username: { type: 'keyword' },
                result_detail: { type: 'keyword' },
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
          username: actorUsername,
          event_type: eventType,
          target_username: targetUsername || '-',
          result_detail: resultDetail,
          ip,
        },
      });

      return response.ok({ body: { message: 'ok' } });
    } catch (error) {
      context.wazuh.logger.error(error.message || error);
      return ErrorResponse(error.message || error, 4011, 500, response);
    }
  }

  getErrorDetails(error) {
    const statusCode = error?.meta?.statusCode || 500;
    let errorMessage = error.message;

    if (statusCode === 403) {
      errorMessage = error?.meta?.body?.error?.reason || 'Permission denied';
    }

    return [statusCode, errorMessage];
  }
}
