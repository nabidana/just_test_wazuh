import React, { useState, useEffect } from 'react';
import {
  EuiTitle,
  EuiFlyoutHeader,
  EuiFlyoutBody,
  EuiForm,
  EuiFieldText,
  EuiOverlayMask,
  EuiFormRow,
  EuiSpacer,
  EuiComboBox,
  EuiConfirmModal,
} from '@elastic/eui';

import { WzRequest } from '../../../react-services/wz-request';
import { ErrorHandler } from '../../../react-services/error-handler';
import { WzFlyout } from '../../common/flyouts';
import { WzButtonPermissions } from '../../common/permissions/button';

export const CreateRole = ({ closeFlyout }) => {
  const [policies, setPolicies] = useState([]);
  const [roleName, setRoleName] = useState('');
  const [roleNameError, setRoleNameError] = useState(false);
  const [selectedPolicies, setSelectedPolicies] = useState([]);
  const [selectedPoliciesError, setSelectedPoliciesError] = useState(false);
  const [initialSelectedPolies] = useState<any[]>([]);
  const [initialRoleName] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);

  async function getData() {
    const policies_request = await WzRequest.apiReq(
      'GET',
      '/security/policies',
      {},
    );
    const policies = (
      (((policies_request || {}).data || {}).data || {}).affected_items || []
    ).map(x => {
      return { label: x.name, id: x.id };
    });
    setPolicies(policies);
  }

  useEffect(() => {
    getData();
  }, []);

  const createUser = async () => {
    if (!roleName) {
      setRoleNameError(true);
      return;
    } else if (roleNameError) {
      setRoleNameError(false);
    }
    if (!selectedPolicies.length) {
      setSelectedPoliciesError(true);
      return;
    } else if (selectedPoliciesError) {
      setSelectedPoliciesError(false);
    }

    try {
      const result = await WzRequest.apiReq('POST', '/security/roles', {
        name: roleName,
      });
      const data = result?.data?.data;
      if (data?.failed_items && data?.failed_items?.length) {
        return;
      }
      let roleId = '';
      if (data?.affected_items) {
        roleId = data.affected_items?.[0]?.id;
      }
      const policiesId = selectedPolicies.map(policy => {
        return policy.id;
      });
      const policyResult = await WzRequest.apiReq(
        'POST',
        `/security/roles/${roleId}/policies`,
        {
          params: {
            policy_ids: policiesId.toString(),
          },
        },
      );

      const policiesData = policyResult?.data?.data;
      if (policiesData?.failed_items && policiesData?.failed_items?.length) {
        return;
      }
      ErrorHandler.info(
        '선택한 정책으로 역할이 성공적으로 생성되었습니다',
      );
    } catch (error) {
      ErrorHandler.handle(error, '오류가 발생했습니다');
    }
    closeFlyout(true);
  };

  const onChangeRoleName = e => {
    setRoleName(e.target.value);
  };

  const onChangePolicies = selectedPolicies => {
    setSelectedPolicies(selectedPolicies);
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
      initialSelectedPolies.length != selectedPolicies.length ||
      initialRoleName != roleName
    ) {
      setHasChanges(true);
    } else {
      setHasChanges(false);
    }
  }, [selectedPolicies, roleName]);

  const onClose = () => {
    hasChanges ? setIsModalVisible(true) : closeFlyout(false);
  };

  return (
    <>
      <WzFlyout flyoutProps={{ className: 'wzApp' }} onClose={onClose}>
        <EuiFlyoutHeader hasBorder={false}>
          <EuiTitle size='m'>
            <h2>새 역할</h2>
          </EuiTitle>
        </EuiFlyoutHeader>
        <EuiFlyoutBody>
          <EuiForm component='form' style={{ padding: 24 }}>
            <EuiFormRow
              label='역할 이름'
              isInvalid={roleNameError}
              error={'역할 이름을 입력해주세요'}
              helpText='이 새 역할의 이름을 입력하세요.'
            >
              <EuiFieldText
                placeholder=''
                value={roleName}
                onChange={e => onChangeRoleName(e)}
                aria-label=''
              />
            </EuiFormRow>
            <EuiFormRow
              label='정책'
              isInvalid={selectedPoliciesError}
              error={'하나 이상의 정책을 선택해야 합니다.'}
              helpText='역할에 정책을 할당하세요.'
            >
              <EuiComboBox
                placeholder='정책 선택'
                options={policies}
                selectedOptions={selectedPolicies}
                onChange={onChangePolicies}
                isClearable={true}
                data-test-subj='demoComboBox'
              />
            </EuiFormRow>
            <EuiSpacer />
            <WzButtonPermissions
              buttonType='default'
              permissions={[
                { action: 'security:create', resource: '*:*:*' },
                { action: 'security:update', resource: '*:*:*' },
              ]}
              fill
              onClick={createUser}
            >
              역할 생성
            </WzButtonPermissions>
          </EuiForm>
        </EuiFlyoutBody>
      </WzFlyout>
      {modal}
    </>
  );
};
