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

import React, { useState } from 'react';
import { EuiInMemoryTable, EuiSearchBarProps, Query } from '@elastic/eui';
import { keys, map, get } from 'lodash';
import { PanelWithHeader } from '../../utils/panel-with-header';
import { renderExpression } from '../../utils/display-utils';
import { showTableStatusMessage } from '../../utils/loading-spinner-utils';

const columns = [
  {
    field: 'order',
    name: '실행 순서',
    sortable: true,
  },
  {
    field: 'domain_name',
    name: '도메인 이름',
  },
  {
    field: 'http_enabled',
    name: 'HTTP',
  },
  {
    field: 'transport_enabled',
    name: 'TRANSPORT',
  },
  {
    field: 'http_type',
    name: 'HTTP 유형',
  },
  {
    field: 'http_challenge',
    name: 'HTTP 챌린지',
  },
  {
    field: 'http_configuration',
    name: 'HTTP 설정',
    render: (config: object) => renderExpression('HTTP 설정', config),
  },
  {
    field: 'backend_type',
    name: '백엔드 유형',
  },
  {
    field: 'backend_configuration',
    name: '백엔드 설정',
    render: (config: object) => renderExpression('백엔드 설정', config),
  },
];

const ENABLED_STRING = '활성화';
const DISABLED_STRING = '비활성화';
const TRUE_STRING = '참';
const FALSE_STRING = '거짓';

export function AuthenticationSequencePanel(props: { authc: []; loading: boolean }) {
  const [query, setQuery] = useState<Query | null>(null);
  const domains = keys(props.authc);

  const items = map(domains, function (domain: string) {
    const data = get(props.authc, domain);
    // @ts-ignore
    const httpAuthenticator = data.http_authenticator;
    // @ts-ignore
    const backend = data.authentication_backend;
    return {
      // @ts-ignore
      order: data.order,
      domain_name: domain,
      // @ts-ignore
      http_enabled: data.http_enabled ? ENABLED_STRING : DISABLED_STRING,
      // @ts-ignore
      transport_enabled: data.transport_enabled ? ENABLED_STRING : DISABLED_STRING,
      http_type: httpAuthenticator.type,
      http_challenge: httpAuthenticator.challenge ? TRUE_STRING : FALSE_STRING,
      http_configuration: httpAuthenticator.config,
      backend_type: backend.type,
      backend_configuration: backend.config,
    };
  });

  const search: EuiSearchBarProps = {
    box: {
      placeholder: '인증 도메인 검색',
    },
    onChange: (arg) => {
      setQuery(arg.query);
      return true;
    },
  };

  const headerText = '인증 시퀀스';

  return (
    <PanelWithHeader
      headerText={headerText}
      // Wazuh: description text and "Learn more" link hidden per request.
      count={Query.execute(query || '', items).length}
    >
      <EuiInMemoryTable
        tableLayout={'auto'}
        columns={columns}
        items={items}
        itemId={'domain_name'}
        pagination={true}
        sorting={{ sort: { field: 'order', direction: 'desc' } }}
        search={search}
        message={showTableStatusMessage(props.loading, items)}
      />
    </PanelWithHeader>
  );
}
