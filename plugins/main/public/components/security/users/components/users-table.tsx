import React, { useState, useEffect } from 'react';
import {
  EuiBasicTable,
  EuiBadge,
  EuiFlexGroup,
  EuiLoadingSpinner,
  EuiFlexItem,
  EuiBasicTableColumn,
  SortDirection,
} from '@elastic/eui';
import { WzButtonPermissionsModalConfirm } from '../../../common/buttons';
import UsersServices from '../services';
import { ErrorHandler } from '../../../../react-services/error-handler';
import { WzAPIUtils } from '../../../../react-services/wz-api-utils';
import { UI_LOGGER_LEVELS } from '../../../../../common/constants';
import { UI_ERROR_SEVERITIES } from '../../../../react-services/error-orchestrator/types';
import { getErrorOrchestrator } from '../../../../react-services/common-services';

export const UsersTable = ({
  users,
  editUserFlyover,
  rolesLoading,
  roles,
  loading,
  pageIndex,
  pageSize,
  totalItems,
  onTableChange,
  onSave,
}) => {
  const [userState, setUserState] = useState([]);
  const getRowProps = item => {
    const { id } = item;
    return {
      'data-test-subj': `row-${id}`,
      onClick: () => editUserFlyover(item),
    };
  };

  useEffect(() => {
    setUserState(users);
  }, [users]);

  const onConfirmDeleteUser = item => {
    return async () => {
      try {
        await UsersServices.DeleteUsers([item.id]);
        // Workaround for tooltip problem does not disappear
        // when deleting a user if the following user is a reserved user
        setUserState([]);
        ErrorHandler.info('사용자가 성공적으로 삭제되었습니다');
        onSave();
      } catch (error) {
        const options = {
          context: `${UsersTable.name}.onConfirmDeleteUser`,
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

  const columns: EuiBasicTableColumn<any>[] = [
    {
      field: 'username',
      name: '사용자',
      sortable: true,
      truncateText: true,
      render: (username: string) => (username === 'wazuh' ? 'zero' : username),
    },
    {
      field: 'allow_run_as',
      name: 'Run as 허용 ',
      sortable: true,
      truncateText: true,
    },
    {
      field: 'roles',
      name: '역할',
      dataType: 'boolean',
      render: userRoles => {
        if (rolesLoading) {
          return <EuiLoadingSpinner size='m' />;
        }
        if (!userRoles || !userRoles.length) return <></>;
        const tmpRoles = userRoles.map((userRole, idx) => {
          return (
            <EuiFlexItem grow={false} key={idx}>
              <EuiBadge color='secondary'>{roles[userRole]}</EuiBadge>
            </EuiFlexItem>
          );
        });
        return (
          <EuiFlexGroup wrap responsive={false} gutterSize='xs'>
            {tmpRoles}
          </EuiFlexGroup>
        );
      },
      sortable: true,
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
              { action: 'security:delete', resource: `user:id:${item.id}` },
            ]}
            tooltip={{
              content: WzAPIUtils.isReservedID(item.id)
                ? '예약된 사용자는 삭제할 수 없습니다'
                : '사용자 삭제',
              position: 'left',
            }}
            isDisabled={WzAPIUtils.isReservedID(item.id)}
            modalTitle={`${
              item.username === 'wazuh' ? 'zero' : item.username
            } 사용자를 삭제하시겠습니까?`}
            onConfirm={onConfirmDeleteUser(item)}
            modalProps={{ buttonColor: 'danger' }}
            iconType='trash'
            color='danger'
            aria-label='사용자 삭제'
            modalCancelText='취소'
            modalConfirmText='확인'
          />
        </div>
      ),
    },
  ];

  const sorting = {
    sort: {
      field: 'username',
      direction: SortDirection.ASC,
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
      items={userState}
      columns={columns}
      pagination={pagination}
      onChange={onTableChange}
      rowProps={getRowProps}
      loading={loading}
      sorting={sorting}
    />
  );
};
