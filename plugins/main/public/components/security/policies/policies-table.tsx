import React, { useState, useEffect } from 'react';
import { EuiBasicTable, EuiBadge } from '@elastic/eui';
import { WzRequest } from '../../../react-services/wz-request';
import { ErrorHandler } from '../../../react-services/error-handler';
import { WzAPIUtils } from '../../../react-services/wz-api-utils';
import { WzButtonPermissionsModalConfirm } from '../../common/buttons';
import { UI_LOGGER_LEVELS } from '../../../../common/constants';
import { UI_ERROR_SEVERITIES } from '../../../react-services/error-orchestrator/types';
import { getErrorOrchestrator } from '../../../react-services/common-services';

export const PoliciesTable = ({
  policies,
  loading,
  editPolicy,
  updatePolicies,
  pageIndex,
  pageSize,
  totalItems,
  onTableChange,
}) => {
  const [policiesState, setPoliciesState] = useState([]);

  useEffect(() => {
    setPoliciesState(policies);
  }, [policies]);

  const getRowProps = item => {
    const { id } = item;
    return {
      'data-test-subj': `row-${id}`,
      onClick: () => {
        editPolicy(item);
      },
    };
  };

  const confirmDeletePolicy = item => {
    return async () => {
      try {
        const response = await WzRequest.apiReq(
          'DELETE',
          `/security/policies/`,
          {
            params: {
              policy_ids: item.id,
            },
          },
        );
        const data = response?.data?.data;
        if (data?.failed_items && data?.failed_items?.length) {
          return;
        }
        // Workaround for tooltip problem does not disappear
        // when deleting a policy if the following policy is a reserved policy
        setPoliciesState([]);
        ErrorHandler.info('정책이 성공적으로 삭제되었습니다');
        await updatePolicies();
      } catch (error) {
        const options = {
          context: `${PoliciesTable.name}.confirmDeletePolicy`,
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
      sortable: true,
      truncateText: true,
    },
    {
      field: 'policy.actions',
      name: '작업',
      sortable: true,
      render: actions => {
        return (actions || []).sort((a, b) => a.localeCompare(b)).join(', ');
      },
      truncateText: true,
    },
    {
      field: 'policy.resources',
      name: '리소스',
      sortable: true,
      truncateText: true,
    },
    {
      field: 'policy.effect',
      name: '효과',
      sortable: true,
      truncateText: true,
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
              { action: 'security:delete', resource: `policy:id:${item.id}` },
            ]}
            tooltip={{
              content: WzAPIUtils.isReservedID(item.id)
                ? '예약된 정책은 삭제할 수 없습니다'
                : '정책 삭제',
              position: 'left',
            }}
            isDisabled={WzAPIUtils.isReservedID(item.id)}
            modalTitle={`${item.name} 정책을 삭제하시겠습니까?`}
            onConfirm={confirmDeletePolicy(item)}
            modalProps={{ buttonColor: 'danger' }}
            iconType='trash'
            color='danger'
            aria-label='정책 삭제'
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
      items={policiesState}
      columns={columns}
      pagination={pagination}
      onChange={onTableChange}
      rowProps={getRowProps}
      loading={loading}
      sorting={sorting}
    />
  );
};
