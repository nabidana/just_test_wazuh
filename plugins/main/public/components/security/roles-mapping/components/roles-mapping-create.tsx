import React, { useEffect, useState, useRef } from 'react';
import {
  EuiTitle,
  EuiFlyout,
  EuiFlyoutHeader,
  EuiFlyoutBody,
  EuiForm,
  EuiFormRow,
  EuiSpacer,
  EuiFlexGroup,
  EuiFlexItem,
  EuiComboBox,
  EuiFieldText,
  EuiOverlayMask,
  EuiOutsideClickDetector,
  EuiConfirmModal,
} from '@elastic/eui';
import { ErrorHandler } from '../../../../react-services/error-handler';
import { RuleEditor } from './rule-editor';
import RulesServices from '../../rules/services';
import RolesServices from '../../roles/services';
import { UI_LOGGER_LEVELS } from '../../../../../common/constants';
import { UI_ERROR_SEVERITIES } from '../../../../react-services/error-orchestrator/types';
import { getErrorOrchestrator } from '../../../../react-services/common-services';
import { WzFlyout } from '../../../common/flyouts';

export const RolesMappingCreate = ({
  closeFlyout,
  rolesEquivalences,
  roles,
  internalUsers,
  onSave,
  currentPlatform,
}) => {
  const [selectedRoles, setSelectedRoles] = useState<any[]>([]);
  const [ruleName, setRuleName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasChangeMappingRules, setHasChangeMappingRules] = useState(false);
  const [initialSelectedRoles] = useState<any[]>([]);
  const [initialRuleName] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);
  const getRolesList = () => {
    const list = roles.map(item => {
      return { label: rolesEquivalences[item.id], id: item.id };
    });
    return list;
  };

  const createRule = async toSaveRule => {
    try {
      setIsLoading(true);
      const formattedRoles = selectedRoles.map(item => {
        return item.id;
      });
      const newRule = await RulesServices.CreateRule({
        name: ruleName,
        rule: toSaveRule,
      });
      await Promise.all(
        formattedRoles.map(
          async role => await RolesServices.AddRoleRules(role, [newRule.id]),
        ),
      );
      ErrorHandler.info('역할 매핑이 성공적으로 생성되었습니다');
    } catch (error) {
      const options = {
        context: `${RolesMappingCreate.name}.createRule`,
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
    onSave();
    closeFlyout(false);
  };

  let modal;
  if (isModalVisible) {
    modal = (
      <EuiOverlayMask>
        <EuiConfirmModal
          title='제출되지 않은 변경사항'
          onConfirm={() => {
            setIsModalVisible(false);
            closeFlyout(false);
            setHasChanges(false);
          }}
          onCancel={() => setIsModalVisible(false)}
          cancelButtonText="아니요"
          confirmButtonText='예'
        >
          <p style={{ textAlign: 'center' }}>
            저장되지 않은 변경사항이 있습니다. 계속하시겠습니까?
          </p>
        </EuiConfirmModal>
      </EuiOverlayMask>
    );
  }

  useEffect(() => {
    if (
      initialSelectedRoles.length != selectedRoles.length ||
      initialRuleName != ruleName ||
      hasChangeMappingRules
    ) {
      setHasChanges(true);
    } else {
      setHasChanges(false);
    }
  }, [selectedRoles, ruleName, hasChangeMappingRules]);

  const onClose = () => {
    hasChanges ? setIsModalVisible(true) : closeFlyout(false);
  };

  return (
    <>
      <WzFlyout flyoutProps={{ className: 'wzApp' }} onClose={onClose}>
        <EuiFlyoutHeader hasBorder={false}>
          <EuiTitle size='m'>
            <h2>새 역할 매핑 생성 &nbsp;</h2>
          </EuiTitle>
        </EuiFlyoutHeader>
        <EuiFlyoutBody>
          <EuiForm component='form' style={{ padding: 24 }}>
            <EuiFormRow
              label='역할 매핑 이름'
              isInvalid={false}
              error={'역할 매핑 이름을 입력해주세요'}
              helpText='이 역할 매핑의 이름을 입력하세요.'
            >
              <EuiFieldText
                placeholder='역할 이름'
                value={ruleName}
                onChange={e => setRuleName(e.target.value)}
              />
            </EuiFormRow>
            <EuiFormRow
              label='역할'
              isInvalid={false}
              error={'하나 이상의 역할을 선택해야 합니다.'}
              helpText='사용자에게 역할을 할당하세요.'
            >
              <EuiComboBox
                placeholder='역할 선택'
                options={getRolesList()}
                isDisabled={false}
                selectedOptions={selectedRoles}
                onChange={roles => {
                  setSelectedRoles(roles);
                }}
                isClearable={true}
                data-test-subj='demoComboBox'
              />
            </EuiFormRow>
            <EuiSpacer />
          </EuiForm>
          <EuiFlexGroup style={{ padding: '0px 24px 24px 24px' }}>
            <EuiFlexItem>
              <RuleEditor
                save={rule => createRule(rule)}
                saveButtonPermissions={[
                  { action: 'security:create', resource: '*:*:*' },
                  ...(selectedRoles.length > 0
                    ? [
                        {
                          action: 'security:update',
                          resource: 'rule:id:*',
                        },
                      ]
                    : []),
                ]}
                initialRule={false}
                isReserved={false}
                isLoading={isLoading}
                internalUsers={internalUsers}
                currentPlatform={currentPlatform}
                onFormChange={hasChange => {
                  setHasChangeMappingRules(hasChange);
                }}
              ></RuleEditor>
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiFlyoutBody>
      </WzFlyout>
      {modal}
    </>
  );
};
