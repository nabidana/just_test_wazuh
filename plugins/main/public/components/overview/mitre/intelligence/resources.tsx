/*
 * Wazuh app - Mitre Att&ck resources.
 *
 * Copyright (C) 2015-2022 Wazuh, Inc.
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * Find more information about this on the LICENSE file.
 */

import { WzRequest } from '../../../../react-services';
import { Markdown } from '../../../common/util';
import { formatUIDate } from '../../../../react-services';
import React from 'react';
import {
  SEARCH_BAR_WQL_VALUE_SUGGESTIONS_COUNT,
  UI_LOGGER_LEVELS,
} from '../../../../../common/constants';
import { UI_ERROR_SEVERITIES } from '../../../../react-services/error-orchestrator/types';
import { getErrorOrchestrator } from '../../../../react-services/common-services';
import { mitreAttack } from '../../../../utils/applications';
import { WzLink } from '../../../wz-link/wz-link';

const getMitreAttackIntelligenceSuggestions = async (
  endpoint: string,
  field: string,
  currentValue: string,
) => {
  try {
    const params = {
      distinct: true,
      limit: SEARCH_BAR_WQL_VALUE_SUGGESTIONS_COUNT,
      select: field,
      sort: `+${field}`,
      ...(currentValue ? { q: `${field}~${currentValue}` } : {}),
    };
    const response = await WzRequest.apiReq('GET', endpoint, { params });
    return response?.data?.data.affected_items.map(item => ({
      label: item[field],
    }));
  } catch (error) {
    const options = {
      context: `${ModuleMitreAttackIntelligenceResource.name}.getMitreItemToRedirect`,
      level: UI_LOGGER_LEVELS.ERROR,
      severity: UI_ERROR_SEVERITIES.BUSINESS,
      store: true,
      display: true,
      error: {
        error: error,
        message: error.message || error,
        title: `Error getting suggestions`,
      },
    };
    getErrorOrchestrator().handleError(options);
    return [];
  }
};

function buildResource(label: string, displayLabel: string = label) {
  const id = label.toLowerCase();
  const endpoint: string = `/mitre/${id}`;
  const fieldsMitreAttactResource = [
    { field: 'description', name: '설명' },
    { field: 'external_id', name: '외부 ID' },
    { field: 'name', name: '이름' },
  ];
  return {
    label: displayLabel,
    id,
    searchBar: {
      wql: {
        options: {
          searchTermFields: fieldsMitreAttactResource.map(({ field }) => field),
        },
        suggestions: {
          field(currentValue) {
            return fieldsMitreAttactResource.map(({ field, name }) => ({
              label: field,
              description: `${name}(으)로 필터`,
            }));
          },
          value: async (currentValue, { field }) => {
            try {
              return await getMitreAttackIntelligenceSuggestions(
                endpoint,
                field,
                currentValue,
              );
            } catch (error) {
              return [];
            }
          },
        },
      },
    },
    apiEndpoint: endpoint,
    fieldName: 'name',
    initialSortingField: 'name',
    tableColumnsCreator: () => [
      {
        field: 'external_id',
        name: 'ID',
        width: '12%',
        render: value => (
          <WzLink
            appId={mitreAttack.id}
            path={`/overview?tab=mitre&tabView=intelligence&tabRedirect=${id}&idToRedirect=${value}`}
          >
            {value}
          </WzLink>
        ),
      },
      {
        field: 'name',
        name: '이름',
        sortable: true,
        width: '30%',
        render: (value, item) => (
          <WzLink
            appId={mitreAttack.id}
            path={`/overview?tab=mitre&tabView=intelligence&tabRedirect=${id}&idToRedirect=${item.external_id}`}
          >
            {value}
          </WzLink>
        ),
      },
      {
        field: 'description',
        name: '설명',
        sortable: true,
        render: value => (value ? <Markdown markdown={value} /> : ''),
        truncateText: true,
      },
    ],
    mitreFlyoutHeaderProperties: [
      {
        label: 'ID',
        id: 'external_id',
      },
      {
        label: '이름',
        id: 'name',
      },
      {
        label: '생성 시각',
        id: 'created_time',
        render: value => (value ? formatUIDate(value) : ''),
      },
      {
        label: '수정 시각',
        id: 'modified_time',
        render: value => (value ? formatUIDate(value) : ''),
      },
      {
        label: '버전',
        id: 'mitre_version',
      },
    ],
  };
}

export const MitreAttackResources = [
  buildResource('Groups', '그룹'),
  buildResource('Mitigations', '완화'),
  buildResource('Software', '소프트웨어'),
  buildResource('Tactics', '전술'),
  buildResource('Techniques', '기법'),
];
