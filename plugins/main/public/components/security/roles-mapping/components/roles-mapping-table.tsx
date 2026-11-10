import React, { useState, useEffect } from 'react';
import {
  EuiToolTip,
  EuiBasicTable,
  EuiBadge,
  EuiFlexItem,
  EuiFlexGroup,
  EuiBasicTableColumn,
  SortDirection,
} from '@elastic/eui';
import { ErrorHandler } from '../../../../react-services/error-handler';
import { WzButtonPermissionsModalConfirm } from '../../../common/buttons';
import { WzAPIUtils } from '../../../../react-services/wz-api-utils';
import RulesServices from '../../rules/services';
import {
  UI_LOGGER_LEVELS,
  WAZUH_API_RESERVED_WUI_SECURITY_RULES,
} from '../../../../../common/constants';
import { UI_ERROR_SEVERITIES } from '../../../../react-services/error-orchestrator/types';
import { getErrorOrchestrator } from '../../../../react-services/common-services';

export const RolesMappingTable = ({
  rolesEquivalences,
  rules,
  loading,
  editRule,
  updateRules,
  pageIndex,
  pageSize,
  totalItems,
  onTableChange,
}) => {
  const [rulesState, setRulesState] = useState([]);

  useEffect(() => {
    setRulesState(rules);
  }, [rules]);

  const getRowProps = item => {
    const { id } = item;
    return {
      'data-test-subj': `row-${id}`,
      onClick: () => editRule(item),
    };
  };

  const onDeleteRoleMapping = item => {
    return async () => {
      try {
        await RulesServices.DeleteRules([item.id]);
        ErrorHandler.info('역할 매핑이 성공적으로 삭제되었습니다');
        updateRules();
        // Workaround for tooltip problem does not disappear
        // when deleting a rule if the following rule is a reserved rule
        setRulesState([]);
      } catch (error) {
        const options = {
          context: `${RolesMappingTable.name}.onDeleteRoleMapping`,
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
      field: 'roles',
      name: '역할',
      sortable: true,
      render: item => {
        const tmpRoles = item.map((role, idx) => {
          return (
            <EuiFlexItem key={`role_${idx}`} grow={false}>
              <EuiBadge color='secondary'>{rolesEquivalences[role]}</EuiBadge>
            </EuiFlexItem>
          );
        });
        return (
          <EuiFlexGroup wrap responsive={false} gutterSize='xs'>
            {tmpRoles}
          </EuiFlexGroup>
        );
      },
      truncateText: true,
    },
    {
      field: 'id',
      name: '상태',
      render(item, obj) {
        if (WzAPIUtils.isReservedID(item)) {
          if (WAZUH_API_RESERVED_WUI_SECURITY_RULES.includes(obj.id)) {
            return (
              <EuiFlexGroup>
                <EuiBadge color='primary'>예약됨</EuiBadge>
                <EuiToolTip
                  position='top'
                  content='wui_ 규칙은 wazuh-wui API 사용자에 속합니다'
                >
                  <EuiBadge color='accent' title='' style={{ marginLeft: 10 }}>
                    wazuh-wui
                  </EuiBadge>
                </EuiToolTip>
              </EuiFlexGroup>
            );
          } else return <EuiBadge color='primary'>예약됨</EuiBadge>;
        }
      },
      width: '300',
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
              { action: 'security:delete', resource: `rule:id:${item.id}` },
            ]}
            tooltip={{
              content: WzAPIUtils.isReservedID(item.id)
                ? '예약된 역할 매핑은 삭제할 수 없습니다'
                : '역할 매핑 삭제',
              position: 'left',
            }}
            isDisabled={WzAPIUtils.isReservedID(item.id)}
            modalTitle={`${item.name} 역할 매핑을 삭제하시겠습니까?`}
            onConfirm={onDeleteRoleMapping(item)}
            modalProps={{ buttonColor: 'danger' }}
            iconType='trash'
            color='danger'
            aria-label='역할 매핑 삭제'
            modalCancelText='취소'
            modalConfirmText='확인'
          />
        </div>
      ),
    },
  ];

  const sorting = {
    sort: {
      field: 'id',
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
      items={rulesState || []}
      columns={columns}
      pagination={pagination}
      onChange={onTableChange}
      rowProps={getRowProps}
      loading={loading}
      sorting={sorting}
    />
  );
};
