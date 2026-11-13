import React from 'react';
import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiModal,
  EuiModalHeader,
  EuiModalHeaderTitle,
  EuiButton,
  EuiModalBody,
  EuiModalFooter,
  EuiButtonEmpty,
  EuiDescriptionList,
  EuiDescriptionListTitle,
  EuiDescriptionListDescription,
  EuiCallOut,
  EuiSpacer,
} from '@elastic/eui';
import { compose } from 'redux';
import { withErrorBoundary } from '../../../common/hocs';
import { UI_LOGGER_LEVELS } from '../../../../../common/constants';
import { UI_ERROR_SEVERITIES } from '../../../../react-services/error-orchestrator/types';
import { getErrorOrchestrator } from '../../../../react-services/common-services';
import { Agent } from '../../types';
import { getToasts } from '../../../../kibana-services';
import { restartAgentService } from '../../services/restart-agent';
import { useAsyncAction } from '../../../common/hooks';

interface RestartAgentModalProps {
  agent: Agent;
  onClose: () => void;
  reloadAgents: () => void;
}

export const RestartAgentModal = compose(withErrorBoundary)(
  ({ agent, onClose, reloadAgents }: RestartAgentModalProps) => {
    const getRestartErrorMessage = (error: any) => {
      const apiMessage = error?.response?.data?.message;
      const message = apiMessage || error?.message || 'Unknown error';

      if (/permission denied/i.test(message)) {
        return `이 에이전트를 재시작할 권한이 없습니다. ${message}`;
      }

      return message;
    };

    const action = useAsyncAction(async agent => {
      try {
        const response = await restartAgentService(agent.id);
        // Ensure the agent was actually included in the restart request
        if (response?.data?.data?.affected_items?.includes(agent.id)) {
          getToasts().add({
            color: 'success',
            title: '에이전트 재시작',
            text: `재시작 요청됨: ${agent.name} (${agent.id})`,
            toastLifeTimeMs: 3000,
          });
        }
        reloadAgents();
      } catch (error: any) {
        const errorMessage = getRestartErrorMessage(error);

        const options = {
          context: `RestartAgentModal.handleOnSave`,
          level: UI_LOGGER_LEVELS.ERROR,
          severity: UI_ERROR_SEVERITIES.BUSINESS,
          store: true,
          error: {
            error,
            message: errorMessage,
            title: `에이전트를 재시작할 수 없습니다`,
          },
        };
        getErrorOrchestrator().handleError(options);
      } finally {
        onClose();
      }
    }, []);

    return (
      <EuiModal
        onClose={onClose}
        onClick={ev => {
          ev.stopPropagation();
        }}
      >
        <EuiModalHeader>
          <EuiModalHeaderTitle>에이전트 재시작</EuiModalHeaderTitle>
        </EuiModalHeader>

        <EuiModalBody>
          <EuiFlexGroup direction='column' gutterSize='m'>
            <EuiFlexItem>
              <EuiFlexGroup gutterSize='m'>
                <EuiFlexItem>
                  <EuiDescriptionList compressed>
                    <EuiDescriptionListTitle>
                      에이전트 ID
                    </EuiDescriptionListTitle>
                    <EuiDescriptionListDescription>
                      {agent.id}
                    </EuiDescriptionListDescription>
                  </EuiDescriptionList>
                </EuiFlexItem>
                <EuiFlexItem>
                  <EuiDescriptionList compressed>
                    <EuiDescriptionListTitle>
                      에이전트 이름
                    </EuiDescriptionListTitle>
                    <EuiDescriptionListDescription>
                      {agent.name}
                    </EuiDescriptionListDescription>
                  </EuiDescriptionList>
                </EuiFlexItem>
              </EuiFlexGroup>
            </EuiFlexItem>
          </EuiFlexGroup>
          <EuiSpacer />
          <EuiCallOut color='warning'>
            에이전트가 재시작되는 동안 잠시 연결이 끊길 수 있습니다. 최근에
            변경한 구성(agent.conf 등)은 재시작 시점에 반영됩니다.
          </EuiCallOut>
        </EuiModalBody>

        <EuiModalFooter>
          <EuiButtonEmpty onClick={onClose}>취소</EuiButtonEmpty>
          <EuiButton
            onClick={() => action.run(agent)}
            fill
            isLoading={action.running}
          >
            재시작
          </EuiButton>
        </EuiModalFooter>
      </EuiModal>
    );
  },
);
