import React from 'react';
import { TableWzAPI } from '../../common/tables';
import { formatUIDate } from '../../../react-services/time-service';
import {
  API_NAME_TASK_STATUS,
  SEARCH_BAR_WQL_VALUE_SUGGESTIONS_COUNT,
  UI_TASK_STATUS,
  UI_TASK_STATUS_COLORS,
} from '../../../../common/constants';
import { WzRequest } from '../../../react-services/wz-request';
import { get as getLodash, uniqBy as uniqByLodash } from 'lodash';
import {
  EuiModal,
  EuiModalHeader,
  EuiModalBody,
  EuiModalFooter,
  EuiButton,
  EuiFlexGroup,
  EuiFlexItem,
  EuiHealth,
  EuiIconTip,
} from '@elastic/eui';

interface AgentUpgradesTaskDetailsModalProps {
  onClose: () => void;
}

export const AgentUpgradesTaskDetailsModal = ({
  onClose,
}: AgentUpgradesTaskDetailsModalProps) => {
  const datetime = new Date();
  datetime.setMinutes(datetime.getMinutes() - 60);
  const formattedDate = datetime.toISOString();

  const defaultFilters = {
    q: `last_update_time>${formattedDate}`,
  };

  const handleOnCloseModal = () => onClose();

  return (
    <EuiModal onClose={handleOnCloseModal} maxWidth={false}>
      <EuiModalHeader />
      <EuiModalBody>
        <TableWzAPI
          title='에이전트 업그레이드 작업'
          endpoint='/tasks/status'
          tableColumns={[
            {
              field: 'task_id',
              name: '작업 ID',
              sortable: true,
              searchable: true,
              show: true,
              width: '100px',
            },
            {
              field: 'agent_id',
              name: '에이전트 ID',
              sortable: true,
              searchable: true,
              show: true,
              width: '100px',
            },
            {
              field: 'create_time',
              name: (
                <span>
                  생성{' '}
                  <EuiIconTip
                    content='검색어로는 검색할 수 없습니다.'
                    size='s'
                    color='subdued'
                    type='alert'
                  />
                </span>
              ),
              width: '230px',
              sortable: true,
              searchable: false,
              show: true,
              render: value => formatUIDate(value),
            },
            {
              field: 'last_update_time',
              name: (
                <span>
                  마지막 업데이트{' '}
                  <EuiIconTip
                    content='검색어로는 검색할 수 없습니다.'
                    size='s'
                    color='subdued'
                    type='alert'
                  />
                </span>
              ),
              width: '230px',
              sortable: true,
              searchable: false,
              show: true,
              render: value => formatUIDate(value),
            },
            {
              field: 'status',
              name: '상태',
              width: '130px',
              sortable: true,
              searchable: true,
              show: true,
              render: value => (
                <EuiFlexGroup
                  alignItems='center'
                  gutterSize='xs'
                  responsive={false}
                >
                  <EuiFlexItem grow={false}>
                    <EuiHealth color={UI_TASK_STATUS_COLORS[value]}>
                      {value}
                    </EuiHealth>
                  </EuiFlexItem>
                  {value === API_NAME_TASK_STATUS.TIMEOUT ? (
                    <EuiFlexItem grow={false}>
                      <EuiIconTip
                        content='업그레이드 작업이 완료된 것으로 보이나 알림이 매니저에 도달하지 않았습니다'
                        color='primary'
                      />
                    </EuiFlexItem>
                  ) : null}
                </EuiFlexGroup>
              ),
            },
            {
              field: 'error_message',
              name: '오류',
              show: true,
              searchable: true,
              width: '250px',
            },
          ]}
          tableInitialSortingField='last_update_time'
          tableInitialSortingDirection='desc'
          tablePageSizeOptions={[10, 25, 50, 100]}
          filters={defaultFilters}
          downloadCsv
          showReload
          showFieldSelector
          searchTable
          searchBarWQL={{
            suggestions: {
              field(currentValue) {
                return [
                  {
                    label: 'agent_id',
                    description: 'filter by agent ID',
                  },
                  { label: 'status', description: 'filter by status' },
                  {
                    label: 'create_time',
                    description: 'filter by creation date',
                  },
                  {
                    label: 'last_update_time',
                    description: 'filter by last update date',
                  },
                  { label: 'task_id', description: 'filter by task ID' },
                ];
              },
              value: async (currentValue, { field }) => {
                try {
                  switch (field) {
                    case 'status':
                      return UI_TASK_STATUS.map(status => ({
                        label: status,
                      }));
                    default: {
                      const response = await WzRequest.apiReq(
                        'GET',
                        '/tasks/status',
                        {
                          params: {
                            limit: SEARCH_BAR_WQL_VALUE_SUGGESTIONS_COUNT,
                            select: field,
                            sort: `+${field}`,
                            ...(currentValue
                              ? {
                                  q: `${field}~${currentValue}`,
                                }
                              : {}),
                          },
                        },
                      );
                      const suggestionValues =
                        response?.data?.data.affected_items.map(item => ({
                          label: getLodash(item, field),
                        }));
                      return uniqByLodash(suggestionValues, 'label');
                    }
                  }
                } catch (error) {
                  return [];
                }
              },
            },
            validate: {
              value: ({ formattedValue, value: rawValue }, { field }) => {
                const value = formattedValue ?? rawValue;
                if (value) {
                  if (['create_time', 'last_update_time'].includes(field)) {
                    const isCorrectDate =
                      /^\d{4}-\d{2}-\d{2}([ T]\d{2}:\d{2}:\d{2}(.\d{1,6})?Z?)?$/.test(
                        value,
                      );
                    return isCorrectDate
                      ? undefined
                      : `"${value}" is not a expected format. Valid formats: YYYY-MM-DD, YYYY-MM-DD HH:mm:ss, YYYY-MM-DDTHH:mm:ss, YYYY-MM-DDTHH:mm:ssZ.`;
                  }
                }
              },
            },
          }}
          tableProps={{ tableLayout: 'auto' }}
        />
      </EuiModalBody>
      <EuiModalFooter>
        <EuiButton onClick={handleOnCloseModal} fill>
          Close
        </EuiButton>
      </EuiModalFooter>
    </EuiModal>
  );
};
