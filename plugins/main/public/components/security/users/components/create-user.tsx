import React, { useEffect, useRef, useState } from 'react';
import {
  EuiTitle,
  EuiFlyoutHeader,
  EuiFlyoutBody,
  EuiForm,
  EuiFlexGroup,
  EuiFlexItem,
  EuiFormRow,
  EuiSpacer,
  EuiComboBox,
  EuiFieldPassword,
  EuiFieldText,
  EuiOverlayMask,
  EuiPanel,
  EuiConfirmModal,
} from '@elastic/eui';

import { useApiService } from '../../../common/hooks/useApiService';
import { Role } from '../../roles/types/role.type';
import { CreateUser as TCreateUser } from '../types/user.type';
import UsersServices from '../services';
import RolesServices from '../../roles/services';
import { WzButtonPermissions } from '../../../common/permissions/button';
import { ErrorHandler } from '../../../../react-services/error-handler';
import { useDebouncedEffect } from '../../../common/hooks/useDebouncedEffect';
import { UI_LOGGER_LEVELS } from '../../../../../common/constants';
import { UI_ERROR_SEVERITIES } from '../../../../react-services/error-orchestrator/types';
import { getErrorOrchestrator } from '../../../../react-services/common-services';
import { WzFlyout } from '../../../common/flyouts';

export const CreateUser = ({ closeFlyout }) => {
  const [selectedRoles, setSelectedRole] = useState<any>([]);
  const [rolesLoading, roles, rolesError] = useApiService<Role[]>(
    RolesServices.GetRoles,
    {},
  );
  const rolesOptions: any = roles
    ? roles.map(item => {
        return { label: item.name, id: item.id };
      })
    : [];

  const [isLoading, setIsLoading] = useState(false);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [initialSelectedRoles] = useState<any[]>([]);
  const [initialUserName] = useState('');
  const [initialPassword] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [allowRunAs, setAllowRunAs] = useState<boolean>(false);
  const [formErrors, setFormErrors] = useState<any>({
    userName: '',
    password: '',
    confirmPassword: '',
  });
  const [showApply, setShowApply] = useState(false);

  const userNameRef = useRef(false);
  useDebouncedEffect(
    () => {
      if (userNameRef.current) validateFields(['userName']);
      else userNameRef.current = true;
    },
    300,
    [userName],
  );

  const passwordRef = useRef(false);
  useDebouncedEffect(
    () => {
      if (passwordRef.current) validateFields(['password', 'confirmPassword']);
      else passwordRef.current = true;
    },
    300,
    [password],
  );

  const confirmPasswordRef = useRef(false);
  useDebouncedEffect(
    () => {
      if (confirmPasswordRef.current) validateFields(['confirmPassword']);
      else confirmPasswordRef.current = true;
    },
    300,
    [confirmPassword],
  );

  useDebouncedEffect(
    () => {
      setShowApply(isValidForm(false));
    },
    300,
    [userName, password, confirmPassword],
  );

  const validations = {
    userName: [
      { fn: () => (userName.trim() === '' ? '사용자 이름은 필수입니다' : '') },
      {
        fn: () =>
          userName.trim().includes(' ')
            ? '사용자 이름에는 공백을 포함할 수 없습니다'
            : '',
      },
      {
        fn: () =>
          !userName.match(/^.{4,20}$/)
            ? '사용자 이름은 4자에서 20자 사이여야 합니다.'
            : '',
      },
    ],
    password: [
      { fn: () => (password === '' ? '비밀번호는 필수입니다' : '') },
      {
        fn: () =>
          !password.match(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,64}$/,
          )
            ? '비밀번호는 8자에서 64자 사이여야 하며, 대문자, 소문자, 숫자, 특수문자를 각각 최소 1개 이상 포함해야 합니다.'
            : '',
      },
    ],
    confirmPassword: [
      {
        fn: () =>
          confirmPassword === '' ? '비밀번호 확인은 필수입니다' : '',
      },
      {
        fn: () =>
          confirmPassword !== password ? `비밀번호가 일치하지 않습니다.` : '',
      },
    ],
  };

  const validateFields = (fields, showErrors = true) => {
    const _formErrors = { ...formErrors };
    let isValid = true;
    fields.forEach(field => {
      const error = validations[field].reduce((currentError, validation) => {
        return !!currentError ? currentError : validation.fn();
      }, '');
      _formErrors[field] = error;
      isValid = isValid && !!!error;
    });
    if (showErrors) setFormErrors(_formErrors);
    return isValid;
  };

  const isValidForm = (showErrors = true) => {
    return validateFields(Object.keys(validations), showErrors);
  };

  const editUser = async () => {
    if (!isValidForm()) {
      ErrorHandler.warning('잘못된 입력 항목을 수정해주세요.');
      return;
    }

    setIsLoading(true);

    const allowRunAsData: boolean = allowRunAs;
    const userData: TCreateUser = {
      username: userName,
      password: password,
    };

    try {
      const user = await UsersServices.CreateUser(userData);
      await addRoles(user.id);
      if (allowRunAsData)
        await UsersServices.UpdateAllowRunAs(user.id, allowRunAsData);

      ErrorHandler.info('사용자가 성공적으로 생성되었습니다');
      closeFlyout(true);
    } catch (error) {
      const options = {
        context: `${CreateUser.name}.editUser`,
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
      setIsLoading(false);
    }
  };

  const addRoles = async userId => {
    const formattedRoles = selectedRoles.map(item => {
      return item.id;
    });
    if (formattedRoles.length > 0)
      await UsersServices.AddUserRoles(userId, formattedRoles);
  };

  const onChangeRoles = selectedRoles => {
    setSelectedRole(selectedRoles);
  };

  const onChangeUserName = e => {
    setUserName(e.target.value);
  };

  const onChangePassword = e => {
    setPassword(e.target.value);
  };

  const onChangeConfirmPassword = e => {
    setConfirmPassword(e.target.value);
  };

  const onChangeAllowRunAs = e => {
    setAllowRunAs(e.target.checked);
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
      initialPassword != password ||
      initialPassword != confirmPassword ||
      initialUserName != userName ||
      allowRunAs
    ) {
      setHasChanges(true);
    } else {
      setHasChanges(false);
    }
  }, [selectedRoles, userName, password, confirmPassword, allowRunAs]);

  const onClose = () => {
    hasChanges ? setIsModalVisible(true) : closeFlyout(false);
  };

  return (
    <>
      <WzFlyout onClose={onClose} flyoutProps={{ className: 'wzApp' }}>
        <EuiFlyoutHeader hasBorder={false}>
          <EuiTitle size='m'>
            <h2>새 사용자 생성</h2>
          </EuiTitle>
        </EuiFlyoutHeader>
        <EuiFlyoutBody>
          <EuiForm component='form' style={{ padding: 24 }}>
            <EuiPanel>
              <EuiTitle size='s'>
                <h2>사용자 데이터</h2>
              </EuiTitle>
              <EuiSpacer />
              <EuiFormRow
                label='사용자 이름'
                isInvalid={!!formErrors.userName}
                error={formErrors.userName}
                helpText='사용자의 이름을 입력하세요.'
              >
                <EuiFieldText
                  placeholder='사용자 이름'
                  value={userName}
                  onChange={e => onChangeUserName(e)}
                  aria-label=''
                  isInvalid={!!formErrors.userName}
                />
              </EuiFormRow>
              <EuiFormRow
                label='비밀번호'
                isInvalid={!!formErrors.password}
                error={formErrors.password}
                helpText='사용자의 새 비밀번호를 입력하세요.'
              >
                <EuiFieldPassword
                  placeholder='비밀번호'
                  value={password}
                  onChange={e => onChangePassword(e)}
                  aria-label=''
                  isInvalid={!!formErrors.password}
                />
              </EuiFormRow>
              <EuiFormRow
                label='비밀번호 확인'
                isInvalid={!!formErrors.confirmPassword}
                error={formErrors.confirmPassword}
                helpText='새 비밀번호를 확인하세요.'
              >
                <EuiFieldPassword
                  placeholder='비밀번호 확인'
                  value={confirmPassword}
                  onChange={e => onChangeConfirmPassword(e)}
                  aria-label=''
                  isInvalid={!!formErrors.confirmPassword}
                />
              </EuiFormRow>
              <EuiFormRow
                label='Run as 허용'
                helpText='사용자가 run as를 사용할 수 있는지 설정합니다'
              >
                <WzButtonPermissions
                  buttonType='switch'
                  label='Run as 허용'
                  showLabel={false}
                  checked={allowRunAs}
                  permissions={[
                    { action: 'security:edit_run_as', resource: '*:*:*' },
                  ]}
                  onChange={e => onChangeAllowRunAs(e)}
                  aria-label=''
                />
              </EuiFormRow>
            </EuiPanel>
            <EuiSpacer />
            <EuiPanel>
              <EuiTitle size='s'>
                <h2>사용자 역할</h2>
              </EuiTitle>
              <EuiFormRow label='' helpText='선택한 사용자에게 역할 할당'>
                <EuiComboBox
                  placeholder='역할 선택'
                  options={rolesOptions}
                  selectedOptions={selectedRoles}
                  isLoading={rolesLoading || isLoading}
                  onChange={onChangeRoles}
                  isClearable={true}
                  data-test-subj='demoComboBox'
                />
              </EuiFormRow>
            </EuiPanel>
            <EuiSpacer />
            <EuiFlexGroup>
              <EuiFlexItem grow={false}>
                <WzButtonPermissions
                  buttonType='default'
                  fill
                  permissions={[
                    { action: 'security:create_user', resource: '*:*:*' },
                    ...(selectedRoles.length
                      ? [{ action: 'security:update', resource: 'user:id:*' }]
                      : []),
                    ...(allowRunAs
                      ? [{ action: 'security:edit_run_as', resource: '*:*:*' }]
                      : []),
                  ]}
                  isLoading={isLoading}
                  onClick={editUser}
                  isDisabled={!showApply}
                >
                  적용
                </WzButtonPermissions>
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiForm>
        </EuiFlyoutBody>
      </WzFlyout>
      {modal}
    </>
  );
};
