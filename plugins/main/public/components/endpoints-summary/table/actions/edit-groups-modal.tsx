import React, { useState, useEffect } from 'react';
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
  EuiComboBox,
  EuiFlexGroup,
  EuiFlexItem,
  EuiDescriptionList,
  EuiDescriptionListTitle,
  EuiDescriptionListDescription,
  EuiCallOut,
} from '@elastic/eui';
import { compose } from 'redux';
import { withErrorBoundary } from '../../../common/hocs';
import { UI_LOGGER_LEVELS } from '../../../../../common/constants';
import { UI_ERROR_SEVERITIES } from '../../../../react-services/error-orchestrator/types';
import { getErrorOrchestrator } from '../../../../react-services/common-services';
import { useGetGroups } from '../../hooks';
import {
  addAgentToGroupService,
  removeAgentFromGroupsService,
} from '../../services';
import { Agent } from '../../types';
import { getToasts } from '../../../../kibana-services';

interface EditAgentGroupsModalProps {
  agent: Agent;
  onClose: () => void;
  reloadAgents: () => void;
}

export const EditAgentGroupsModal = compose(withErrorBoundary)(
  ({ agent, onClose, reloadAgents }: EditAgentGroupsModalProps) => {
    const [selectedGroups, setSelectedGroups] = useState(
      agent.group?.map(group => ({ label: group })) || [],
    );
    const [isSaving, setIsSaving] = useState(false);

    const {
      groups,
      isLoading: isGroupsLoading,
      error: errorGroups,
    } = useGetGroups();

    if (errorGroups) {
      const options = {
        context: `EditAgentGroupsModal.useGetGroups`,
        level: UI_LOGGER_LEVELS.ERROR,
        severity: UI_ERROR_SEVERITIES.BUSINESS,
        store: true,
        error: {
          error: errorGroups,
          message: errorGroups.message || errorGroups,
          title: `Could not get groups`,
        },
      };
      getErrorOrchestrator().handleError(options);
    }

    const showToast = (
      color: string,
      title: string = '',
      text: string = '',
      time: number = 3000,
    ) => {
      getToasts().add({
        color: color,
        title: title,
        text: text,
        toastLifeTimeMs: time,
      });
    };

    const getEditGroupsErrorMessage = (error: any) => {
      const apiMessage = error?.response?.data?.message;
      // GS 인증용: 에러 메시지 한글화
      const message = apiMessage || error?.message || '알 수 없는 오류입니다';

      if (/permission denied/i.test(message)) {
        return `이 에이전트의 그룹을 편집할 권한이 없습니다. ${message}`;
      }

      return message;
    };

    const handleOnSave = async () => {
      setIsSaving(true);

      const flatSelectedGroups = selectedGroups.map(group => group.label);
      const addedGroups =
        flatSelectedGroups.filter(group => !agent.group?.includes(group)) || [];
      const removedGroups =
        agent.group?.filter(group => !flatSelectedGroups.includes(group)) || [];

      if (!removedGroups.length && !addedGroups.length) {
        setIsSaving(false);
        onClose();
        return;
      }

      try {
        addedGroups.length &&
          (await Promise.all(
            addedGroups?.map(groupId =>
              addAgentToGroupService({ agentId: agent.id, groupId }),
            ),
          ));
        removedGroups.length &&
          (await removeAgentFromGroupsService({
            agentId: agent.id,
            groupIds: removedGroups,
          }));
        // GS 인증용: 토스트 문구 한글화
        showToast('success', '에이전트 그룹 편집', '그룹이 저장되었습니다');
        reloadAgents();
      } catch (error: any) {
        const errorMessage = getEditGroupsErrorMessage(error);
        const options = {
          context: `EditAgentGroupsModal.handleOnSave`,
          level: UI_LOGGER_LEVELS.ERROR,
          severity: UI_ERROR_SEVERITIES.BUSINESS,
          store: true,
          error: {
            error,
            message: errorMessage,
            title: `에이전트 그룹을 저장할 수 없습니다`,
          },
        };
        getErrorOrchestrator().handleError(options);
      } finally {
        setIsSaving(false);
        onClose();
      }
    };

    const form = (
      <EuiForm component='form'>
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
                  <EuiDescriptionListTitle>에이전트 이름</EuiDescriptionListTitle>
                  <EuiDescriptionListDescription>
                    {agent.name}
                  </EuiDescriptionListDescription>
                </EuiDescriptionList>
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiFormRow
              label='그룹'
              isInvalid={!selectedGroups?.length}
              error={['그룹을 하나 이상 추가해야 합니다']}
            >
              <EuiComboBox
                placeholder='그룹 선택'
                options={groups?.map(group => ({ label: group })) || []}
                selectedOptions={selectedGroups}
                onChange={selectedGroups => setSelectedGroups(selectedGroups)}
                isLoading={isGroupsLoading}
                clearOnBlur
              />
            </EuiFormRow>
            {errorGroups ? (
              <EuiCallOut
                color='danger'
                iconType='alert'
                title='그룹을 불러올 수 없습니다. 권한을 확인하세요.'
              />
            ) : !isGroupsLoading && !groups?.length ? (
              <EuiCallOut
                color='warning'
                iconType='iInCircle'
                title='사용 가능한 그룹이 없습니다.'
              />
            ) : null}
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiForm>
    );

    return (
      <EuiModal
        onClose={onClose}
        onClick={ev => {
          ev.stopPropagation();
        }}
      >
        <EuiModalHeader>
          <EuiModalHeaderTitle>에이전트 그룹 편집</EuiModalHeaderTitle>
        </EuiModalHeader>

        <EuiModalBody>{form}</EuiModalBody>

        <EuiModalFooter>
          <EuiButtonEmpty onClick={onClose}>취소</EuiButtonEmpty>
          <EuiButton
            onClick={handleOnSave}
            fill
            isLoading={isSaving}
            disabled={isGroupsLoading || !selectedGroups?.length}
          >
            저장
          </EuiButton>
        </EuiModalFooter>
      </EuiModal>
    );
  },
);
