/*
 * Wazuh app - Module for Wazuh-Elastic routes
 * Copyright (C) 2015-2022 Wazuh, Inc.
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * Find more information about this on the LICENSE file.
 */
import { WazuhElasticCtrl } from '../controllers';
import { IRouter } from 'opensearch_dashboards/server';
import { schema } from '@osd/config-schema';
import {
  WAZUH_SAMPLE_ALERTS_CATEGORY_SECURITY,
  WAZUH_SAMPLE_ALERTS_CATEGORY_AUDITING_POLICY_MONITORING,
  WAZUH_SAMPLE_ALERTS_CATEGORY_THREAT_DETECTION,
  WAZUH_SAMPLE_FILE_INTEGRITY_MONITORING,
  WAZUH_SAMPLE_INVENTORY_AGENT,
  WAZUH_SAMPLE_VULNERABILITIES,
} from '../../common/constants';

export function WazuhElasticRoutes(router: IRouter) {
  const ctrl = new WazuhElasticCtrl();
  const schemaSampleAlertsCategories = schema.oneOf(
    [
      WAZUH_SAMPLE_ALERTS_CATEGORY_SECURITY,
      WAZUH_SAMPLE_ALERTS_CATEGORY_AUDITING_POLICY_MONITORING,
      WAZUH_SAMPLE_ALERTS_CATEGORY_THREAT_DETECTION,
      // WAZUH_SAMPLE_FILE_INTEGRITY_MONITORING, // Disabled due to revert feature
      WAZUH_SAMPLE_INVENTORY_AGENT,
      WAZUH_SAMPLE_VULNERABILITIES,
    ].map(category => schema.literal(category)),
  );

  // Endpoints
  router.get(
    {
      path: '/elastic/security/current-platform',
      validate: false,
    },
    async (context, request, response) =>
      ctrl.getCurrentPlatform(context, request, response),
  );

  router.get(
    {
      path: '/elastic/template/{pattern}',
      validate: {
        params: schema.object({
          pattern: schema.string(),
        }),
      },
    },
    async (context, request, response) =>
      ctrl.getTemplate(context, request, response),
  );

  // TODO: this seems to be deprecated in 4.9 so it could be removed
  router.get(
    {
      path: '/elastic/top/{mode}/{cluster}/{field}/{pattern}',
      validate: {
        params: schema.object({
          mode: schema.string(),
          cluster: schema.string(),
          field: schema.string(),
          pattern: schema.string(),
        }),
        query: schema.object({
          agentsList: schema.string(),
        }),
      },
    },
    async (context, request, response) =>
      ctrl.getFieldTop(context, request, response),
  );

  router.get(
    {
      path: '/indexer/sampledata/{category}',
      validate: {
        params: schema.object({
          category: schemaSampleAlertsCategories,
        }),
      },
    },
    async (context, request, response) =>
      ctrl.haveSampleDataOfCategory(context, request, response),
  );

  router.post(
    {
      path: '/indexer/sampledata/{category}',
      validate: {
        params: schema.object({
          category: schemaSampleAlertsCategories,
        }),
        body: schema.any(),
      },
    },
    async (context, request, response) =>
      ctrl.createSampleData(context, request, response),
  );

  router.delete(
    {
      path: '/indexer/sampledata/{category}',
      validate: {
        params: schema.object({
          category: schemaSampleAlertsCategories,
        }),
      },
    },
    async (context, request, response) =>
      ctrl.deleteSampleData(context, request, response),
  );

  router.post(
    {
      path: '/elastic/alerts',
      validate: {
        body: schema.any(),
      },
    },
    async (context, request, response) =>
      ctrl.alerts(context, request, response),
  );

  // GS 인증용: 대시보드(plugins-main)에서 발생하는 이벤트(관리자 계정 생성/수정/삭제 등)를
  // 보안로그 인덱스에 기록. "시도한 아이디"로 남는 행위자는 이 요청의 인증 헤더에서
  // 서버가 직접 추출하고(컨트롤러 참고), 여기서는 대상 계정명만 클라이언트에서 받는다.
  router.post(
    {
      path: '/elastic/security-log-event',
      validate: {
        body: schema.object({
          target_username: schema.string(),
          event_type: schema.string(),
        }),
      },
    },
    async (context, request, response) =>
      ctrl.securityLogEvent(context, request, response),
  );
}
