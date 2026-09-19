import React from 'react';
import { agentsTableActions } from './actions/actions';
import { AgentSynced } from '../../agents/agent-synced';
import { AgentStatus } from '../../agents/agent-status';
import { formatUIDate } from '../../../react-services/time-service';
import { GroupTruncate } from '../../common/util';
import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiIconTip,
  EuiHealth,
  EuiToolTip,
} from '@elastic/eui';
import { Agent } from '../types';
import WzIconSVG from '../../common/icons/wz-icon-svg';
import { getAgentOSType } from '../../../react-services';
import { isVersionLower } from './utils';

type SetModalIsVisible = (visible: boolean) => void;

// Columns with the property truncateText: true won't wrap the text
// This is added to prevent the wrap because of the table-layout: auto
export const agentsTableColumns = (
  setAgent: (agents: Agent) => void,
  setIsEditGroupsVisible: SetModalIsVisible,
  setIsUpgradeModalVisible: SetModalIsVisible,
  setFilters: (filters) => void,
  apiVersion: string,
  {
    // TODO: consider moving the positional arguments to this to avoid bug related to position and allow to extend easily.
    setIsRemoveModalVisible,
  }: { setIsRemoveModalVisible: SetModalIsVisible },
) => [
  {
    field: 'id',
    name: 'ID',
    sortable: true,
    show: true,
    searchable: true,
  },
  {
    field: 'name',
    name: '이름',
    sortable: true,
    show: true,
    searchable: true,
  },
  {
    field: 'ip',
    name: 'IP 주소',
    sortable: true,
    show: true,
    searchable: true,
  },
  {
    field: 'group',
    name: '그룹',
    sortable: true,
    show: true,
    render: groups => renderGroups(groups, setFilters),
    searchable: true,
  },
  {
    field: 'os.name,os.version',
    composeField: ['os.name', 'os.version'],
    name: '운영체제',
    sortable: true,
    show: true,
    render: (field: any, agentData: Agent) => addIconPlatformRender(agentData),
    searchable: true,
  },
  {
    field: 'node_name',
    name: '클러스터 노드',
    sortable: true,
    show: true,
    searchable: true,
  },
  {
    field: 'version',
    name: '버전',
    sortable: true,
    show: true,
    searchable: true,
    width: '100px',
    render: (version: string) => {
      const isOutdated = isVersionLower(version, apiVersion);
      return (
        <EuiFlexGroup
          wrap={false}
          responsive={false}
          gutterSize='xs'
          alignItems='center'
        >
          <EuiFlexItem grow={false}>{version}</EuiFlexItem>
          {isOutdated ? (
            <EuiFlexItem grow={false}>
              <EuiToolTip content={<p>Outdated</p>}>
                <EuiHealth className='wz-flex' color='danger'></EuiHealth>
              </EuiToolTip>
            </EuiFlexItem>
          ) : null}
        </EuiFlexGroup>
      );
    },
  },
  {
    field: 'dateAdd',
    name: (
      <span>
        등록일{' '}
        <EuiIconTip
          content='검색어로는 검색할 수 없습니다.'
          size='s'
          color='subdued'
          type='alert'
        />
      </span>
    ),
    render: dateAdd => formatUIDate(dateAdd),
    sortable: true,
    show: false,
    searchable: false,
  },
  {
    field: 'lastKeepAlive',
    name: (
      <span>
        마지막 응답{' '}
        <EuiIconTip
          content='검색어로는 검색할 수 없습니다.'
          size='s'
          color='subdued'
          type='alert'
        />
      </span>
    ),
    render: lastKeepAlive => formatUIDate(lastKeepAlive),
    sortable: true,
    show: false,
    searchable: false,
  },
  {
    field: 'status',
    name: '상태',
    truncateText: true,
    sortable: true,
    show: true,
    render: (status, agent) => <AgentStatus status={status} agent={agent} />,
  },
  {
    field: 'group_config_status',
    name: '동기화됨',
    sortable: true,
    show: false,
    render: synced => <AgentSynced synced={synced} />,
    searchable: true,
  },
  {
    field: 'actions',
    name: '작업',
    show: true,
    actions: agentsTableActions(
      setAgent,
      setIsEditGroupsVisible,
      setIsUpgradeModalVisible,
      apiVersion,
      { setIsRemoveModalVisible },
    ),
  },
];

const addIconPlatformRender = (agent: Agent) => {
  const osType = getAgentOSType(agent);
  const os_name = `${agent?.os?.name || ''} ${agent?.os?.version || ''}`;

  return (
    <EuiFlexGroup gutterSize='xs' alignItems='center' responsive={false}>
      <EuiFlexItem grow={false}>
        <WzIconSVG type={osType} style={{ paddingRight: '3px' }} />
      </EuiFlexItem>
      <EuiFlexItem>{os_name.trim() || '-'}</EuiFlexItem>
    </EuiFlexGroup>
  );
};

const filterGroupBadge = (group: string, setFilters: any) => {
  setFilters({
    default: { q: 'id!=000' },
    q: `id!=000;group=${group}`,
  });
};

const renderGroups = (groups: string[], setFilters: any) => {
  return groups?.length ? (
    <GroupTruncate
      groups={groups}
      length={25}
      label={'more'}
      action={'filter'}
      filterAction={group => filterGroupBadge(group, setFilters)}
    />
  ) : null;
};
