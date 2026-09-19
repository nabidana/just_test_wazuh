import React from 'react';
import { EuiToolTip } from '@elastic/eui';
import { API_NAME_AGENT_STATUS } from '../../../../../common/constants';
import { Agent } from '../../types';
import NavigationService from '../../../../react-services/navigation-service';
import { isVersionLower } from '../utils';

type SetModalIsVisible = (visible: boolean) => void;

export const agentsTableActions = (
  setAgent: (agent: Agent) => void,
  setIsEditGroupsVisible: (visible: boolean) => void,
  setIsUpgradeModalVisible: (visible: boolean) => void,
  apiVersion: string,
  {
    // TODO: consider moving the positional arguments to this to avoid bug related to position and allow to extend easily.
    setIsRemoveModalVisible,
  }: { setIsRemoveModalVisible: SetModalIsVisible },
) => [
  {
    name: (agent: Agent) => {
      const name = '에이전트 상세 보기';

      if (agent.status !== API_NAME_AGENT_STATUS.NEVER_CONNECTED) {
        return name;
      }

      return (
        <EuiToolTip content='에이전트가 연결된 적이 없어 상세 정보에 접근할 수 없습니다'>
          <span>{name}</span>
        </EuiToolTip>
      );
    },
    description: '에이전트 상세 보기',
    icon: 'eye',
    type: 'icon',
    isPrimary: true,
    color: 'primary',
    enabled: (agent: Agent) =>
      agent.status !== API_NAME_AGENT_STATUS.NEVER_CONNECTED,
    onClick: (agent: Agent) =>
      NavigationService.getInstance().navigate(
        `/agents?tab=welcome&agent=${agent.id}`,
      ),
  },
  {
    name: (agent: Agent) => {
      const name = '에이전트 구성';

      if (agent.status !== API_NAME_AGENT_STATUS.NEVER_CONNECTED) {
        return name;
      }

      return (
        <EuiToolTip content='에이전트가 연결된 적이 없어 구성에 접근할 수 없습니다'>
          <span>{name}</span>
        </EuiToolTip>
      );
    },
    description: '에이전트 구성',
    icon: 'wrench',
    type: 'icon',
    onClick: (agent: Agent) =>
      NavigationService.getInstance().navigate(
        `/agents?tab=configuration&agent=${agent.id}`,
      ),
    enabled: (agent: Agent) =>
      agent.status !== API_NAME_AGENT_STATUS.NEVER_CONNECTED,
    'data-test-subj': 'action-configuration',
  },
  {
    name: '그룹 편집',
    description: '그룹 편집',
    icon: 'pencil',
    type: 'icon',
    onClick: (agent: Agent) => {
      setAgent(agent);
      setIsEditGroupsVisible(true);
    },
    'data-test-subj': 'action-groups',
    enabled: () => true,
  },
  {
    name: (agent: Agent) => {
      const isOutdated = isVersionLower(agent.version, apiVersion);

      if (agent.status === API_NAME_AGENT_STATUS.ACTIVE && isOutdated) {
        return '업그레이드';
      }

      return (
        <EuiToolTip
          content={
            agent.status !== API_NAME_AGENT_STATUS.ACTIVE
              ? '에이전트가 활성 상태가 아닙니다'
              : '에이전트가 최신 상태입니다'
          }
        >
          <span>업그레이드</span>
        </EuiToolTip>
      );
    },
    description: '업그레이드',
    icon: 'package',
    type: 'icon',
    onClick: (agent: Agent) => {
      setAgent(agent);
      setIsUpgradeModalVisible(true);
    },
    'data-test-subj': 'action-upgrade',
    enabled: (agent: Agent) => {
      const isOutdated = isVersionLower(agent.version, apiVersion);
      return agent.status === API_NAME_AGENT_STATUS.ACTIVE && isOutdated;
    },
  },
  {
    name: '제거',
    description: '제거',
    icon: 'trash',
    type: 'icon',
    onClick: (agent: Agent) => {
      setAgent(agent);
      setIsRemoveModalVisible(true);
    },
    'data-test-subj': 'action-remove',
    enabled: () => true,
  },
];
