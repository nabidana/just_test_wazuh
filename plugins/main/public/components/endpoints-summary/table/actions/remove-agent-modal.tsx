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
import { removeAgentService } from '../../services/remove-agent';
import { useAsyncAction } from '../../../common/hooks';

interface RemoveAgentModalProps {
  agent: Agent;
  onClose: () => void;
  reloadAgents: () => void;
}

export const RemoveAgentModal = compose(withErrorBoundary)(
  ({ agent, onClose, reloadAgents }: RemoveAgentModalProps) => {
    // GS 인증용: 에러/토스트 메시지 한글화
    const getDeleteErrorMessage = (error: any) => {
      const apiMessage = error?.response?.data?.message;
      const message = apiMessage || error?.message || '알 수 없는 오류입니다';

      if (/permission denied/i.test(message)) {
        return `이 에이전트를 제거할 권한이 없습니다. ${message}`;
      }

      return message;
    };

    const action = useAsyncAction(async agent => {
      try {
        const response = await removeAgentService(agent.id);
        // Ensure the agent was actually removed
        if (response?.data?.data?.affected_items.includes(agent.id)) {
          getToasts().add({
            color: 'success',
            title: '에이전트 제거',
            text: `에이전트 제거됨: ${agent.name} (${agent.id})`,
            toastLifeTimeMs: 3000,
          });
        }
        reloadAgents();
      } catch (error: any) {
        const errorMessage = getDeleteErrorMessage(error);

        const options = {
          context: `RemoveAgentModal.handleOnSave`,
          level: UI_LOGGER_LEVELS.ERROR,
          severity: UI_ERROR_SEVERITIES.BUSINESS,
          store: true,
          error: {
            error,
            message: errorMessage,
            title: `에이전트를 제거할 수 없습니다`,
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
          <EuiModalHeaderTitle>에이전트 제거</EuiModalHeaderTitle>
        </EuiModalHeader>

        <EuiModalBody>
          <EuiFlexGroup direction='column' gutterSize='m'>
            <EuiFlexItem>
              <EuiFlexGroup gutterSize='m'>
                <EuiFlexItem>
                  <EuiDescriptionList compressed>
                    <EuiDescriptionListTitle>에이전트 ID</EuiDescriptionListTitle>
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
            선택한 에이전트가 아직 활성 상태이고 자동 등록(auto-enrollment)이
            활성화되어 있으면, 삭제 후에도 자동으로 다시 등록됩니다.
          </EuiCallOut>
        </EuiModalBody>

        <EuiModalFooter>
          <EuiButtonEmpty onClick={onClose}>취소</EuiButtonEmpty>
          <EuiButton
            onClick={() => action.run(agent)}
            fill
            isLoading={action.running}
            color='danger'
          >
            제거
          </EuiButton>
        </EuiModalFooter>
      </EuiModal>
    );
  },
);
