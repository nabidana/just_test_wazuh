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
import { EuiInMemoryTable, EuiEmptyPrompt, EuiSearchBarProps, Query } from '@elastic/eui';
import { keys, map, get } from 'lodash';
import { ClientConfigType } from '../../../../types';
import { PanelWithHeader } from '../../utils/panel-with-header';
import { renderExpression, ExternalLinkButton } from '../../utils/display-utils';
import { showTableStatusMessage } from '../../utils/loading-spinner-utils';
import { DocLinks } from '../../constants';

const columns = [
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

export function AuthorizationPanel(props: {
  authz: [];
  loading: boolean;
  config: ClientConfigType;
}) {
  const [query, setQuery] = useState<Query | null>(null);
  const domains = keys(props.authz);

  const items = map(domains, function (domain: string) {
    const data = get(props.authz, domain);
    // @ts-ignore
    const backend = data.authorization_backend;
    return {
      domain_name: domain,
      // @ts-ignore
      http_enabled: data.http_enabled ? ENABLED_STRING : DISABLED_STRING,
      // @ts-ignore
      transport_enabled: data.transport_enabled ? ENABLED_STRING : DISABLED_STRING,
      backend_type: backend.type,
      backend_configuration: backend.config,
    };
  });

  const search: EuiSearchBarProps = {
    box: {
      placeholder: '권한 부여 도메인 검색',
    },
    onChange: (arg) => {
      setQuery(arg.query);
      return true;
    },
  };

  const headerText = '권한 부여';

  const emptyListMessage = (
    <EuiEmptyPrompt
      title={<h3>권한 부여 없음</h3>}
      titleSize="s"
      actions={
        props.config.ui.backend_configurable && (
          <ExternalLinkButton
            href={DocLinks.BackendConfigurationAuthorizationDoc}
            text="config.yml로 관리"
          />
        )
      }
    />
  );

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
        sorting={true}
        search={search}
        message={showTableStatusMessage(props.loading, items, emptyListMessage)}
      />
    </PanelWithHeader>
  );
}
