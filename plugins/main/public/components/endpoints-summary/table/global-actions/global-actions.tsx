import React, { useState } from 'react';
import {
  EuiPopover,
  EuiButtonEmpty,
  EuiContextMenuPanel,
  EuiContextMenuItem,
  EuiHorizontalRule,
  EuiToolTip,
} from '@elastic/eui';
import { WzElementPermissions } from '../../../common/permissions/element';
import { Agent } from '../../types';
import { EditAgentsGroupsModal } from './edit-groups/edit-groups-modal';
import { UpgradeAgentsModal } from './upgrade/upgrade-modal';
import { RestartAgentsModal } from './restart/restart-modal';
import { RemoveAgentsModal } from './remove/remove-modal';

export interface AgentsTableGlobalActionsProps {
  selectedAgents: Agent[];
  allAgentsSelected: boolean;
  allAgentsCount: number;
  filters: unknown;
  reloadAgents: () => void;
  setIsUpgradeTasksModalVisible: (isModalVisible: boolean) => void;
  setIsUpgradePanelClosed: (isUpgradePanelClosed: boolean) => void;
}

export const AgentsTableGlobalActions = ({
  selectedAgents,
  allAgentsSelected,
  allAgentsCount,
  filters,
  reloadAgents,
  setIsUpgradeTasksModalVisible,
  setIsUpgradePanelClosed,
}: AgentsTableGlobalActionsProps) => {
  const [isPopoverOpen, setPopover] = useState(false);
  const [isEditGroupsVisible, setIsEditGroupsVisible] = useState(false);
  const [addOrRemoveGroups, setAddOrRemoveGroups] = useState<
    'add' | 'remove'
  >();
  const [isUpgradeAgentsVisible, setIsUpgradeAgentsVisible] = useState(false);
  const [isRestartAgentsVisible, setIsRestartAgentsVisible] = useState(false);
  const [isRemoveAgentsModalVisible, setIsRemoveAgentsModalVisible] =
    useState(false);

  const onButtonClick = () => {
    setPopover(!isPopoverOpen);
  };

  const closePopover = () => {
    setPopover(false);
  };

  const button = (
    <EuiButtonEmpty
      iconType='arrowDown'
      iconSide='right'
      onClick={onButtonClick}
    >
      더보기
    </EuiButtonEmpty>
  );

  const totalAgents = allAgentsSelected
    ? allAgentsCount
    : selectedAgents.length;

  const selectAgentsTooltip = (content: React.ReactNode) => (
    <EuiToolTip content='작업을 수행할 에이전트를 선택하세요'>
      <span>{content}</span>
    </EuiToolTip>
  );

  const actions = {
    addGroups: '에이전트에 그룹 추가',
    removeGroups: '에이전트에서 그룹 제거',
    upgrade: '에이전트 업그레이드',
    restart: '에이전트 재시작',
    remove: '에이전트 제거',
  };

  return (
    <>
      <EuiPopover
        id='agentsTableGlobalActions'
        button={button}
        isOpen={isPopoverOpen}
        closePopover={closePopover}
        panelPaddingSize='none'
        anchorPosition='downLeft'
        panelStyle={{ overflowY: 'unset' }}
      >
        <EuiContextMenuPanel>
          <EuiContextMenuItem
            icon='plusInCircle'
            disabled={!totalAgents}
            onClick={() => {
              setAddOrRemoveGroups('add');
              closePopover();
              setIsEditGroupsVisible(true);
            }}
          >
            {!totalAgents ? (
              selectAgentsTooltip(actions.addGroups)
            ) : (
              <span>
                {actions.addGroups}
                {totalAgents ? ` (${totalAgents})` : ''}
              </span>
            )}
          </EuiContextMenuItem>
          <EuiContextMenuItem
            icon='trash'
            disabled={!totalAgents}
            onClick={() => {
              setAddOrRemoveGroups('remove');
              closePopover();
              setIsEditGroupsVisible(true);
            }}
          >
            {!totalAgents ? (
              selectAgentsTooltip(actions.removeGroups)
            ) : (
              <span>
                {actions.removeGroups}
                {totalAgents ? ` (${totalAgents})` : ''}
              </span>
            )}
          </EuiContextMenuItem>
          <EuiHorizontalRule margin='xs' />
          {/* GS 인증용: 오프라인 배포 환경에서는 Wazuh 코어 버전 업그레이드 기능 불필요 - "에이전트 업그레이드", "업그레이드 작업 상세" 메뉴 삭제
          <EuiContextMenuItem
            icon='package'
            disabled={!totalAgents}
            onClick={() => {
              closePopover();
              setIsUpgradeAgentsVisible(true);
            }}
          >
            {!totalAgents ? (
              selectAgentsTooltip(actions.upgrade)
            ) : (
              <span>
                {actions.upgrade}
                {totalAgents ? ` (${totalAgents})` : ''}
              </span>
            )}
          </EuiContextMenuItem>
          <EuiContextMenuItem
            icon='eye'
            disabled={!totalAgents}
            onClick={() => {
              closePopover();
              setIsUpgradeTasksModalVisible(true);
            }}
          >
            <span>업그레이드 작업 상세</span>
          </EuiContextMenuItem>
          */}
          <EuiContextMenuItem
            icon='refresh'
            disabled={!totalAgents}
            onClick={() => {
              closePopover();
              setIsRestartAgentsVisible(true);
            }}
          >
            {!totalAgents ? (
              selectAgentsTooltip(actions.restart)
            ) : (
              <span>
                {actions.restart}
                {totalAgents ? ` (${totalAgents})` : ''}
              </span>
            )}
          </EuiContextMenuItem>
          <EuiHorizontalRule margin='xs' />
          <EuiContextMenuItem
            icon='trash'
            disabled={!totalAgents}
            onClick={() => {
              closePopover();
              setIsRemoveAgentsModalVisible(true);
            }}
          >
            {!totalAgents ? (
              selectAgentsTooltip(actions.remove)
            ) : (
              <span>
                {actions.remove}
                {totalAgents ? ` (${totalAgents})` : ''}
              </span>
            )}
          </EuiContextMenuItem>
        </EuiContextMenuPanel>
      </EuiPopover>
      {isEditGroupsVisible ? (
        <EditAgentsGroupsModal
          selectedAgents={selectedAgents}
          allAgentsSelected={allAgentsSelected}
          filters={filters}
          reloadAgents={() => reloadAgents()}
          onClose={() => {
            setIsEditGroupsVisible(false);
          }}
          addOrRemove={addOrRemoveGroups}
        />
      ) : null}
      {isUpgradeAgentsVisible ? (
        <UpgradeAgentsModal
          selectedAgents={selectedAgents}
          allAgentsSelected={allAgentsSelected}
          filters={filters}
          reloadAgents={() => reloadAgents()}
          onClose={() => {
            setIsUpgradeAgentsVisible(false);
          }}
          setIsUpgradePanelClosed={setIsUpgradePanelClosed}
        />
      ) : null}
      {isRestartAgentsVisible ? (
        <RestartAgentsModal
          selectedAgents={selectedAgents}
          allAgentsSelected={allAgentsSelected}
          filters={filters}
          reloadAgents={() => reloadAgents()}
          onClose={() => {
            setIsRestartAgentsVisible(false);
          }}
        />
      ) : null}
      {isRemoveAgentsModalVisible && (
        <RemoveAgentsModal
          selectedAgents={selectedAgents}
          allAgentsSelected={allAgentsSelected}
          filters={filters}
          reloadAgents={() => reloadAgents()}
          onClose={() => {
            setIsRemoveAgentsModalVisible(false);
          }}
        />
      )}
    </>
  );
};
