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

import React, { useState, useEffect, useContext } from 'react';
import {
  EuiFlexGroup,
  EuiText,
  EuiPageHeader,
  EuiTitle,
  EuiPageContent,
  EuiPageContentHeader,
  EuiPageContentHeaderSection,
  EuiFlexItem,
  EuiSmallButton,
  EuiPageBody,
  EuiInMemoryTable,
  EuiBasicTableColumn,
  EuiSmallButtonEmpty,
  EuiSearchBarProps,
  Query,
  EuiLoadingContent,
} from '@elastic/eui';
import { difference } from 'lodash';
import { AppDependencies } from '../../types';
import {
  transformRoleData,
  requestDeleteRoles,
  RoleListing,
  fetchRole,
  fetchRoleMapping,
  buildSearchFilterOptions,
} from '../utils/role-list-utils';
import { Action } from '../types';
import { ResourceType } from '../../../../common';
import { buildHashUrl } from '../utils/url-builder';
import {
  renderCustomization,
  truncatedListView,
  tableItemsUIProps,
} from '../utils/display-utils';
import { showTableStatusMessage } from '../utils/loading-spinner-utils';
import { useDeleteConfirmState } from '../utils/delete-confirm-modal-utils';
import { useContextMenuState } from '../utils/context-menu';
import { DataSourceContext } from '../app-router';
import { SecurityPluginTopNavMenu } from '../top-nav-menu';
import { AccessErrorComponent } from '../access-error-component';
import { PageHeader } from '../header/header-components';

const columns: Array<EuiBasicTableColumn<RoleListing>> = [
  {
    field: 'roleName',
    name: '역할',
    render: (text: string) => (
      <a href={buildHashUrl(ResourceType.roles, Action.view, text)}>{text}</a>
    ),
    sortable: true,
  },
  {
    field: 'clusterPermissions',
    name: '클러스터 권한',
    render: truncatedListView(tableItemsUIProps),
    truncateText: true,
  },
  {
    field: 'indexPermissions',
    name: '인덱스 권한',
    render: truncatedListView(tableItemsUIProps),
    truncateText: true,
  },
  {
    field: 'internalUsers',
    name: '내부 사용자',
    render: truncatedListView(tableItemsUIProps),
  },
  {
    field: 'backendRoles',
    name: '백엔드 역할',
    render: truncatedListView(tableItemsUIProps),
  },
  {
    field: 'tenantPermissions',
    name: '테넌트',
    render: truncatedListView(tableItemsUIProps),
  },
  {
    field: 'reserved',
    name: '사용자 지정',
    render: (reserved: boolean) => {
      return renderCustomization(reserved, tableItemsUIProps);
    },
  },
];

export function RoleList(props: AppDependencies) {
  const [roleData, setRoleData] = React.useState<RoleListing[]>([]);
  const [errorFlag, setErrorFlag] = React.useState(false);
  const [selection, setSelection] = React.useState<RoleListing[]>([]);
  const [loading, setLoading] = useState(false);
  const [accessErrorFlag, setAccessErrorFlag] = React.useState(false);
  const { dataSource, setDataSource } = useContext(DataSourceContext)!;

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const rawRoleData = await fetchRole(props.coreStart.http, dataSource.id);
        const rawRoleMappingData = await fetchRoleMapping(props.coreStart.http, dataSource.id);
        const processedData = transformRoleData(rawRoleData, rawRoleMappingData);
        setRoleData(processedData);
        setErrorFlag(false);
        setAccessErrorFlag(false);
      } catch (e) {
        console.log(e);
        // requests with existing credentials but insufficient permissions result in 403, remote data-source requests with non-existing credentials result in 400
        if (e.response && [400, 403].includes(e.response.status)) {
          setAccessErrorFlag(true);
        }
        setErrorFlag(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [props.coreStart.http, dataSource]);

  const handleDelete = async () => {
    const rolesToDelete: string[] = selection.map((r) => r.roleName);
    try {
      await requestDeleteRoles(props.coreStart.http, rolesToDelete, dataSource.id);
      // Refresh from server (calling fetchData) does not work here, the server still return the roles
      // that had been just deleted, probably because ES takes some time to sync to all nodes.
      // So here remove the selected roles from local memory directly.
      setRoleData(difference(roleData, selection));
      setSelection([]);
    } catch (e) {
      console.log(e);
    } finally {
      closeActionsMenu();
    }
  };

  const [showDeleteConfirmModal, deleteConfirmModal] = useDeleteConfirmState(
    handleDelete,
    '역할'
  );

  const actionsMenuItems = [
    <EuiSmallButtonEmpty
      data-test-subj="edit"
      key="edit"
      onClick={() => {
        window.location.href = buildHashUrl(ResourceType.roles, Action.edit, selection[0].roleName);
      }}
      disabled={selection.length !== 1 || selection[0].reserved}
    >
      편집
    </EuiSmallButtonEmpty>,
    // TODO: Change duplication to a popup window
    <EuiSmallButtonEmpty
      data-test-subj="duplicate"
      key="duplicate"
      onClick={() => {
        window.location.href = buildHashUrl(
          ResourceType.roles,
          Action.duplicate,
          selection[0].roleName
        );
      }}
      disabled={selection.length !== 1}
    >
      복제
    </EuiSmallButtonEmpty>,
    <EuiSmallButtonEmpty
      key="delete"
      color="danger"
      onClick={showDeleteConfirmModal}
      disabled={selection.length === 0 || selection.some((e) => e.reserved)}
    >
      삭제
    </EuiSmallButtonEmpty>,
  ];

  const [actionsMenu, closeActionsMenu] = useContextMenuState('작업', {}, actionsMenuItems);

  const [searchOptions, setSearchOptions] = useState<EuiSearchBarProps>({});
  const [query, setQuery] = useState<Query | null>(null);

  useEffect(() => {
    setSearchOptions({
      onChange: (arg) => {
        setQuery(arg.query);
        return true;
      },
      filters: [
        {
          type: 'field_value_selection',
          field: 'clusterPermissions',
          name: '클러스터 권한',
          multiSelect: 'or',
          options: buildSearchFilterOptions(roleData, 'clusterPermissions'),
        },
        {
          type: 'field_value_selection',
          field: 'indexPermissions',
          name: '인덱스 권한',
          multiSelect: 'or',
          options: buildSearchFilterOptions(roleData, 'indexPermissions'),
        },
        {
          type: 'field_value_selection',
          field: 'internalUsers',
          name: '내부 사용자',
          multiSelect: 'or',
          options: buildSearchFilterOptions(roleData, 'internalUsers'),
        },
        {
          type: 'field_value_selection',
          field: 'backendRoles',
          name: '백엔드 역할',
          multiSelect: 'or',
          options: buildSearchFilterOptions(roleData, 'backendRoles'),
        },
        {
          type: 'field_value_selection',
          field: 'tenantPermissions',
          name: '테넌트',
          multiSelect: 'or',
          options: buildSearchFilterOptions(roleData, 'tenantPermissions'),
        },
        {
          type: 'field_value_selection',
          field: 'reserved',
          name: '사용자 지정',
          multiSelect: false,
          options: [
            {
              value: true,
              view: renderCustomization(true, tableItemsUIProps),
            },
            {
              value: false,
              view: renderCustomization(false, tableItemsUIProps),
            },
          ],
        },
      ],
    });
  }, [roleData]);

  const useUpdatedUX = props.coreStart.uiSettings.get('home:useNewHomePage');
  const buttonData = [
    {
      label: '역할 생성',
      isLoading: false,
      href: buildHashUrl(ResourceType.roles, Action.create),
      fill: true,
      iconType: 'plus',
      iconSide: 'left',
      type: 'button',
      testId: 'create-role',
    },
  ];
  // Wazuh: description text and "Learn more" link hidden per request.
  const descriptionData: any[] = [];

  const roleLen = Query.execute(query || '', roleData).length;

  return (
    <>
      <SecurityPluginTopNavMenu
        {...props}
        dataSourcePickerReadOnly={false}
        setDataSource={setDataSource}
        selectedDataSource={dataSource}
      />
      <PageHeader
        navigation={props.depsStart.navigation}
        coreStart={props.coreStart}
        descriptionControls={descriptionData}
        appRightControls={buttonData}
        fallBackComponent={
          <EuiPageHeader>
            <EuiText size="s">
              <h1>역할</h1>
            </EuiText>
          </EuiPageHeader>
        }
        resourceType={ResourceType.roles}
        count={roleData.length}
      />
      {loading ? (
        <EuiLoadingContent />
      ) : accessErrorFlag ? (
        <AccessErrorComponent loading={loading} dataSourceLabel={dataSource && dataSource.label} />
      ) : (
        <EuiPageContent>
          {useUpdatedUX ? null : (
            <EuiPageContentHeader id="role-table-container">
              <EuiPageContentHeaderSection>
                <EuiTitle size="s">
                  <h3>
                    역할
                    <span className="panel-header-count"> ({roleLen})</span>
                  </h3>
                </EuiTitle>
                {/* Wazuh: description text and "Learn more" link hidden per request. */}
              </EuiPageContentHeaderSection>
              <EuiPageContentHeaderSection>
                <EuiFlexGroup>
                  <EuiFlexItem>{actionsMenu}</EuiFlexItem>
                  <EuiFlexItem>
                    <EuiSmallButton
                      fill
                      href={buildHashUrl(ResourceType.roles, Action.create)}
                      data-test-subj="create-role"
                    >
                      역할 생성
                    </EuiSmallButton>
                  </EuiFlexItem>
                </EuiFlexGroup>
              </EuiPageContentHeaderSection>
            </EuiPageContentHeader>
          )}
          <EuiPageBody>
            <EuiInMemoryTable
              data-test-subj="role-list"
              tableLayout={'auto'}
              loading={roleData === [] && !errorFlag}
              columns={columns}
              items={roleData}
              itemId={'roleName'}
              pagination={true}
              selection={{ onSelectionChange: setSelection }}
              sorting={true}
              search={{
                ...searchOptions,
                toolsRight: useUpdatedUX ? [<EuiFlexItem>{actionsMenu}</EuiFlexItem>] : undefined,
              }}
              error={errorFlag ? '데이터를 불러오지 못했습니다. 자세한 내용은 콘솔 로그를 확인하세요.' : ''}
              message={showTableStatusMessage(loading, roleData)}
            />
          </EuiPageBody>
          {deleteConfirmModal}
        </EuiPageContent>
      )}
    </>
  );
}
