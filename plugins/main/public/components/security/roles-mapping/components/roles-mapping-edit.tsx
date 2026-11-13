import React, { useEffect, useState } from 'react';
import {
  EuiTitle,
  EuiFlyoutHeader,
  EuiFlyoutBody,
  EuiForm,
  EuiFormRow,
  EuiSpacer,
  EuiFlexGroup,
  EuiFlexItem,
  EuiBadge,
  EuiComboBox,
  EuiOverlayMask,
  EuiConfirmModal,
  EuiFieldText,
} from '@elastic/eui';
import { ErrorHandler } from '../../../../react-services/error-handler';
import { RuleEditor } from './rule-editor';
import RulesServices from '../../rules/services';
import RolesServices from '../../roles/services';
import { WzAPIUtils } from '../../../../react-services/wz-api-utils';
import _ from 'lodash';
import { UI_LOGGER_LEVELS } from '../../../../../common/constants';
import { UI_ERROR_SEVERITIES } from '../../../../react-services/error-orchestrator/types';
import { getErrorOrchestrator } from '../../../../react-services/common-services';
import { WzFlyout } from '../../../common/flyouts';

export const RolesMappingEdit = ({
  rule,
  closeFlyout,
  rolesEquivalences,
  roles,
  internalUsers,
  onSave,
  currentPlatform,
}) => {
  const getEquivalences = roles => {
    const list = roles.map(item => {
      return { label: rolesEquivalences[item], id: item };
    });
    return list;
  };

  const [selectedRoles, setSelectedRoles] = useState<any[]>(
    getEquivalences(rule.roles),
  );
  const [ruleName, setRuleName] = useState<string>(rule.name);
  const [isLoading, setIsLoading] = useState(false);
  const [hasChangeMappingRules, setHasChangeMappingRules] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);

  const getRolesList = roles => {
    const list = roles.map(item => {
      return { label: rolesEquivalences[item.id], id: item.id };
    });
    return list;
  };

  const editRule = async toSaveRule => {
    try {
      setIsLoading(true);
      const formattedRoles = selectedRoles.map(item => {
        return item.id;
      });

      await RulesServices.UpdateRule(rule.id, {
        name: ruleName,
        rule: toSaveRule,
      });

      const toAdd = formattedRoles.filter(value => !rule.roles.includes(value));
      const toRemove = rule.roles.filter(
        value => !formattedRoles.includes(value),
      );
      await Promise.all(
        toAdd.map(async role => {
          return RolesServices.AddRoleRules(role, [rule.id]);
        }),
      );

      await Promise.all(
        toRemove.map(async role => {
          return RolesServices.RemoveRoleRules(role, [rule.id]);
        }),
      );

      ErrorHandler.info('역할 매핑이 성공적으로 업데이트되었습니다');
    } catch (error) {
      const options = {
        context: `${RolesMappingEdit.name}.editRule`,
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
    setIsLoading(false);
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
          defaultFocusedButton='confirm'
        >
          <p style={{ textAlign: 'center' }}>
            저장되지 않은 변경사항이 있습니다. 계속하시겠습니까?
          </p>
        </EuiConfirmModal>
      </EuiOverlayMask>
    );
  }

  useEffect(() => {
    const initialRoles = getEquivalences(rule.roles);
    if (
      rule.name != ruleName ||
      !_.isEqual(initialRoles, selectedRoles) ||
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
            <h2>
              <strong>{rule.name}</strong> 편집&nbsp;&nbsp;
              {WzAPIUtils.isReservedID(rule.id) && (
                <EuiBadge color='primary'>예약됨</EuiBadge>
              )}
            </h2>
          </EuiTitle>
        </EuiFlyoutHeader>
        <EuiFlyoutBody>
          <EuiForm component='form' style={{ padding: 24 }}>
            <EuiFormRow
              label='역할 이름'
              isInvalid={false}
              error={'역할 이름을 입력해주세요'}
              helpText='이 역할 매핑의 이름을 입력하세요.'
            >
              <EuiFieldText
                placeholder=''
                disabled={WzAPIUtils.isReservedID(rule.id)}
                value={ruleName}
                onChange={e => setRuleName(e.target.value)}
                aria-label=''
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
                options={getRolesList(roles)}
                isDisabled={WzAPIUtils.isReservedID(rule.id)}
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
                save={rule => editRule(rule)}
                saveButtonPermissions={[
                  // Require security:update:{rule_id} if some roles were added
                  ...(selectedRoles
                    .map(item => item.id)
                    .filter(value => !rule.roles.includes(value)).length > 0
                    ? [
                        {
                          action: 'security:update',
                          resource: `rule:id:${rule.id}`,
                        },
                      ]
                    : []),
                  // Require security:delete:{rule_id} if some roles were removed
                  ...(rule.roles.filter(
                    value =>
                      !selectedRoles.map(item => item.id).includes(value),
                  ) > 0
                    ? [
                        {
                          action: 'security:delete',
                          resource: `rule:id:${rule.id}`,
                        },
                      ]
                    : []),
                ]}
                initialRule={rule.rule}
                isLoading={isLoading}
                isReserved={WzAPIUtils.isReservedID(rule.id)}
                internalUsers={internalUsers}
                currentPlatform={currentPlatform}
                onFormChange={hasChange => setHasChangeMappingRules(hasChange)}
              ></RuleEditor>
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiFlyoutBody>
      </WzFlyout>
      {modal}
    </>
  );
};
