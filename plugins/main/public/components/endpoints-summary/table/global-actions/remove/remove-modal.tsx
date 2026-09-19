import React, { useState } from 'react';
import {
  EuiModal,
  EuiModalHeader,
  EuiModalHeaderTitle,
  EuiModalBody,
  EuiModalFooter,
  EuiButtonEmpty,
  EuiButton,
  EuiForm,
  EuiFormRow,
  EuiText,
  EuiCallOut,
  EuiSpacer,
} from '@elastic/eui';
import { compose } from 'redux';
import { withErrorBoundary } from '../../../../common/hocs';
import { UI_LOGGER_LEVELS } from '../../../../../../common/constants';
import { UI_ERROR_SEVERITIES } from '../../../../../react-services/error-orchestrator/types';
import { getErrorOrchestrator } from '../../../../../react-services/common-services';
import { getAgentsService } from '../../../services';
import { Agent, ResponseUpgradeAgents } from '../../../types';
import { RemoveAgentsModalResult } from './result';
import { ErrorAgent } from '../../../services/paginated-agents-request';
import { removeAgentsService } from '../../../services/remove-agents';

export type Result = {
  successAgents?: { id: string; name: string }[];
  errorMessage?: string;
  totalErrorAgents?: number;
  errorAgents?: ErrorAgent[];
};

interface RemoveAgentsModalProps {
  selectedAgents: Agent[];
  allAgentsSelected: boolean;
  filters: any;
  onClose: () => void;
  reloadAgents: () => void;
  setIsUpgradePanelClosed: (isUpgradePanelClosed: boolean) => void;
}

export const RemoveAgentsModal = compose(withErrorBoundary)(
  ({
    selectedAgents,
    allAgentsSelected,
    filters,
    onClose,
    reloadAgents,
    setIsUpgradePanelClosed,
  }: RemoveAgentsModalProps) => {
    const getDeleteErrorMessage = (error: any) => {
      const apiMessage = error?.response?.data?.message;
      const message = apiMessage || error?.message || 'Unknown error';

      if (/permission denied/i.test(message)) {
        return `선택한 에이전트 중 하나 이상을 제거할 권한이 없습니다. ${message}`;
      }

      return message;
    };

    const [finalAgents, setFinalAgents] = useState<Agent[]>([]);
    const [getAgentsStatus, setGetAgentsStatus] = useState('disabled');
    const [getAgentsError, setGetAgentsError] = useState();
    const [saveChangesStatus, setSaveChangesStatus] = useState('disabled');
    const [isResultVisible, setIsResultVisible] = useState(false);
    const [result, setResult] = useState<Result>();

    const getAgents = async () => {
      if (!allAgentsSelected) {
        setGetAgentsStatus('complete');
        return selectedAgents;
      }
      try {
        const { affected_items } = await getAgentsService({ filters });
        setGetAgentsStatus('complete');
        return affected_items;
      } catch (error: any) {
        setGetAgentsStatus('danger');
        setGetAgentsError(error);

        const options = {
          context: `RemoveAgentsModal.handleOnSave`,
          level: UI_LOGGER_LEVELS.ERROR,
          severity: UI_ERROR_SEVERITIES.BUSINESS,
          store: true,
          error: {
            error,
            message: error.message || error,
            title: `에이전트 데이터를 가져올 수 없습니다`,
          },
        };
        getErrorOrchestrator().handleError(options);
      }
    };

    const getArrayByProperty = (
      array: Agent[],
      propertyName: string,
    ): string[] => {
      return array.map(element => element[propertyName]);
    };

    const handleOnSave = async () => {
      setGetAgentsStatus('loading');
      setIsResultVisible(true);

      const agents = await getAgents();

      if (!agents?.length) {
        return;
      }

      setFinalAgents(agents);

      setSaveChangesStatus('loading');

      const agentIds = getArrayByProperty(agents, 'id');

      try {
        const response = await removeAgentsService({ agentIds });

        const { data, message } = response.data;
        const { affected_items, failed_items, total_failed_items } = data;
        setResult({
          successAgents: affected_items.map((id: any) => ({
            id: id as string,
            name: agents.find(agent => agent.id === id)?.name || '',
          })),
          errorAgents: failed_items,
          errorMessage: message,
          totalErrorAgents: total_failed_items,
        });

        setSaveChangesStatus('complete');
      } catch (error: any) {
        const errorMessage = getDeleteErrorMessage(error);

        setResult({
          errorMessage,
          errorAgents: [
            {
              error: { message: errorMessage },
              id: agentIds,
            },
          ],
        });
        setSaveChangesStatus('danger');
        const options = {
          context: `RemoveAgentsModal.handleOnSave`,
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
        reloadAgents();
      }
    };

    const form = (
      <EuiForm component='form'>
        {allAgentsSelected ? (
          <EuiFormRow>
            <EuiCallOut
              color='warning'
              iconType='alert'
              title='변경 사항은 목록에 설정된 필터와 일치하는 모든 에이전트에 적용됩니다'
            />
          </EuiFormRow>
        ) : (
          <>
            <EuiFormRow label='선택한 에이전트'>
              <EuiText>{selectedAgents.length}</EuiText>
            </EuiFormRow>
            <EuiSpacer />
            <EuiCallOut color='warning'>
              선택한 에이전트 중 아직 활성 상태이며 자동 등록이 활성화된
              에이전트가 있으면 삭제 후 자동으로 다시 등록됩니다.
            </EuiCallOut>
          </>
        )}
      </EuiForm>
    );

    return (
      <EuiModal onClose={onClose}>
        <EuiModalHeader>
          <EuiModalHeaderTitle>에이전트 제거</EuiModalHeaderTitle>
        </EuiModalHeader>
        <EuiModalBody>
          {!isResultVisible ? (
            form
          ) : (
            <RemoveAgentsModalResult
              finalAgents={finalAgents}
              getAgentsStatus={getAgentsStatus}
              getAgentsError={getAgentsError}
              saveChangesStatus={saveChangesStatus}
              result={result}
            />
          )}
        </EuiModalBody>
        <EuiModalFooter>
          {!isResultVisible ? (
            <>
              <EuiButtonEmpty onClick={onClose}>취소</EuiButtonEmpty>
              <EuiButton onClick={handleOnSave} fill color='danger'>
                제거
              </EuiButton>
            </>
          ) : (
            <EuiButton
              onClick={onClose}
              fill
              disabled={
                getAgentsStatus === 'loading' || saveChangesStatus === 'loading'
              }
            >
              닫기
            </EuiButton>
          )}
        </EuiModalFooter>
      </EuiModal>
    );
  },
);
