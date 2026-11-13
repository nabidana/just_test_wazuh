import React, { useState, useEffect } from 'react';
import {
  EuiBasicTable,
  EuiBadge,
  EuiFlexGroup,
  EuiFlexItem,
  EuiToolTip,
  EuiSpacer,
  EuiLoadingSpinner,
} from '@elastic/eui';
import { WzRequest } from '../../../react-services/wz-request';
import { ErrorHandler } from '../../../react-services/error-handler';
import { WzButtonPermissionsModalConfirm } from '../../common/buttons';
import { WzAPIUtils } from '../../../react-services/wz-api-utils';
import { UI_LOGGER_LEVELS } from '../../../../common/constants';
import { UI_ERROR_SEVERITIES } from '../../../react-services/error-orchestrator/types';
import { getErrorOrchestrator } from '../../../react-services/common-services';

export const RolesTable = ({
  roles,
  policiesData,
  loading,
  editRole,
  updateRoles,
  pageIndex,
  pageSize,
  totalItems,
  onTableChange,
}) => {
  const [rolesState, setRolesState] = useState([]);

  useEffect(() => {
    setRolesState(roles);
  }, [roles]);

  const getRowProps = item => {
    const { id } = item;
    return {
      'data-test-subj': `row-${id}`,
      onClick: () => editRole(item),
    };
  };

  const onConfirmDeleteRole = item => {
    return async () => {
      try {
        const response = await WzRequest.apiReq('DELETE', '/security/roles/', {
          params: {
            role_ids: item.id,
          },
        });
        const data = response?.data?.data;
        if (data?.failed_items && data?.failed_items?.length) {
          return;
        }
        // Workaround for tooltip problem does not disappear
        // when deleting a role if the following role is a reserved role
        setRolesState([]);
        ErrorHandler.info('역할이 성공적으로 삭제되었습니다');
        await updateRoles();
      } catch (error) {
        const options = {
          context: `${RolesTable.name}.onConfirmDeleteRole`,
          level: UI_LOGGER_LEVELS.ERROR,
          severity: UI_ERROR_SEVERITIES.BUSINESS,
          store: true,
          error: {
            error: error,
            message: error.message || error,
            title: error.name || error,
          },
        };
        getErrorOrchestrator().handleError(options);
      }
    };
  };

  const columns = [
    {
      field: 'id',
      name: 'ID',
      width: '75',
      sortable: true,
      truncateText: true,
    },
    {
      field: 'name',
      name: '이름',
      width: '200',
      sortable: true,
      truncateText: true,
    },
    {
      field: 'policies',
      name: '정책',
      render: policies => {
        return (
          (policiesData && (
            <EuiFlexGroup wrap responsive={false} gutterSize='xs'>
              {policies.map(policy => {
                const data =
                  (policiesData || []).find(x => x.id === policy) || {};
                return (
                  data.name && (
                    <EuiFlexItem grow={false} key={policy}>
                      <EuiToolTip
                        position='top'
                        content={
                          <div>
                            <b>작업</b>
                            <p>
                              {((data.policy || {}).actions || []).join(', ')}
                            </p>
                            <EuiSpacer size='s' />
                            <b>리소스</b>
                            <p>
                              {((data.policy || {}).resources || []).join(', ')}
                            </p>
                            <EuiSpacer size='s' />
                            <b>효과</b>
                            <p>{(data.policy || {}).effect}</p>
                          </div>
                        }
                      >
                        <EuiBadge
                          color='hollow'
                          onClick={() => {}}
                          onClickAriaLabel={`${data.name} policy`}
                          title={null}
                        >
                          {data.name}
                        </EuiBadge>
                      </EuiToolTip>
                    </EuiFlexItem>
                  )
                );
              })}
            </EuiFlexGroup>
          )) || <EuiLoadingSpinner size='m' />
        );
      },
      sortable: true,
    },
    {
      field: 'id',
      name: '상태',
      render: item => {
        return (
          WzAPIUtils.isReservedID(item) && (
            <EuiBadge color='primary'>예약됨</EuiBadge>
          )
        );
      },
      width: '150',
      sortable: false,
    },
    {
      align: 'right',
      width: '5%',
      name: '작업',
      render: item => (
        <div onClick={ev => ev.stopPropagation()}>
          <WzButtonPermissionsModalConfirm
            buttonType='icon'
            permissions={[
              { action: 'security:delete', resource: `role:id:${item.id}` },
            ]}
            tooltip={{
              content: WzAPIUtils.isReservedID(item.id)
                ? '예약된 역할은 삭제할 수 없습니다'
                : '역할 삭제',
              position: 'left',
            }}
            isDisabled={WzAPIUtils.isReservedID(item.id)}
            modalTitle={`${item.name} 역할을 삭제하시겠습니까?`}
            onConfirm={onConfirmDeleteRole(item)}
            modalProps={{ buttonColor: 'danger' }}
            iconType='trash'
            color='danger'
            aria-label='역할 삭제'
          />
        </div>
      ),
    },
  ];

  const sorting = {
    sort: {
      field: 'id',
      direction: 'asc',
    },
  };

  const pagination = {
    pageIndex,
    pageSize,
    totalItemCount: totalItems,
    pageSizeOptions: [5, 10, 25, 50],
    showPerPageOptions: true,
  };

  return (
    <EuiBasicTable
      items={rolesState}
      columns={columns}
      pagination={pagination}
      onChange={onTableChange}
      rowProps={getRowProps}
      loading={loading}
      sorting={sorting}
    />
  );
};
