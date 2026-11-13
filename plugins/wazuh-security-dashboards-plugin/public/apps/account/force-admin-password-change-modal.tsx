/*
 *   Copyright OpenSearch Contributors
 *
 *   Licensed under the Apache License, Version 2.0 (the "License").
 *   You may not use this file except in compliance with the License.
 *   A copy of the License is located at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 *   or in the "license" file accompanying this file. This file is distributed
 *   on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 *   express or implied. See the License for the specific language governing
 *   permissions and limitations under the License.
 */

// GS 인증용: admin 계정이 최초 비밀번호를 아직 변경하지 않았을 때, 로그인 직후 이 모달을
// 닫을 수 없는 형태로 띄워 비밀번호 변경을 강제한다. 기존 PasswordResetPanel(선택적,
// 취소 가능)을 기반으로 하되 취소 버튼을 없애고 onClose를 no-op으로 만들어 Escape/바깥
// 클릭으로 닫히지 않도록 했다. 변경 성공 시 admin_password_status에 완료 표시를 남긴 뒤
// 재로그인하도록 로그아웃시킨다(다음 로그인부터는 새 비밀번호로 로그인하며 모달이 다시
// 뜨지 않음).

import React from 'react';
import {
  EuiSmallButton,
  EuiCallOut,
  EuiCompressedFieldPassword,
  EuiFlexGroup,
  EuiFlexItem,
  EuiCompressedFormRow,
  EuiModal,
  EuiModalBody,
  EuiModalFooter,
  EuiOverlayMask,
  EuiSpacer,
  EuiText,
} from '@elastic/eui';
import { CoreStart } from 'opensearch-dashboards/public';
import { FormRow } from '../configuration/utils/form-row';
import { logout, updateNewPassword } from './utils';
import { PASSWORD_INSTRUCTION, PASSWORD_VALIDATION_DEFAULT_MESSAGE_EN } from '../apps-constants';
import { constructErrorMessageAndLog } from '../error-utils';
import { validateCurrentPassword } from '../../utils/login-utils';
import { getDashboardsInfo } from '../../utils/dashboards-info-utils';
import { PasswordStrengthBar } from '../configuration/utils/password-strength-bar';

interface ForceAdminPasswordChangeModalProps {
  coreStart: CoreStart;
  username: string;
  logoutUrl?: string;
}

export function ForceAdminPasswordChangeModal(props: ForceAdminPasswordChangeModalProps) {
  const [currentPassword, setCurrentPassword] = React.useState<string>('');
  const [isCurrentPasswordInvalid, setIsCurrentPasswordInvalid] = React.useState<boolean>(false);
  const [currentPasswordError, setCurrentPasswordError] = React.useState<string[]>([]);

  const [newPassword, setNewPassword] = React.useState<string>('');
  const [isNewPasswordInvalid, setIsNewPasswordInvalid] = React.useState<boolean>(false);

  const [repeatNewPassword, setRepeatNewPassword] = React.useState<string>('');
  const [isRepeatNewPasswordInvalid, setIsRepeatNewPasswordInvalid] = React.useState<boolean>(
    false
  );

  const [errorCallOut, setErrorCallOut] = React.useState<string>('');

  const [passwordHelpText, setPasswordHelpText] = React.useState<string>(PASSWORD_INSTRUCTION);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const message = (await getDashboardsInfo(props.coreStart.http))
          .password_validation_error_message;
        setPasswordHelpText(
          message === PASSWORD_VALIDATION_DEFAULT_MESSAGE_EN ? PASSWORD_INSTRUCTION : message
        );
      } catch (e) {
        console.error(e);
      }
    };

    fetchData();
  }, [props.coreStart.http]);

  const handleReset = async () => {
    const http = props.coreStart.http;
    try {
      await validateCurrentPassword(http, props.username, currentPassword);
    } catch (e) {
      setIsCurrentPasswordInvalid(true);
      setCurrentPasswordError([
        constructErrorMessageAndLog(e, '현재 비밀번호가 올바르지 않습니다.'),
      ]);
      return;
    }

    try {
      // GS 인증용: 완료 상태 기록은 서버가 이 요청(configuration/account POST) 안에서
      // 같이 처리한다 — 별도 후속 요청으로 분리하면 방금 바뀐 비밀번호로 인해 세션의
      // 기존 자격증명이 무효화된 뒤라 인증 실패(500)가 남.
      await updateNewPassword(http, newPassword, currentPassword);
      await logout(http, props.logoutUrl);
    } catch (e) {
      setErrorCallOut(constructErrorMessageAndLog(e, '비밀번호 재설정에 실패했습니다.'));
    }
  };

  return (
    <EuiOverlayMask>
      {/* GS 인증용: onClose를 no-op으로 두어 Escape/바깥 클릭으로 닫히지 않도록 함 */}
      <EuiModal data-test-subj="force-admin-password-change-modal" onClose={() => {}}>
        <EuiSpacer />
        <EuiModalBody>
          <EuiText size="s">
            <h2>초기 비밀번호 변경이 필요합니다</h2>
          </EuiText>
          <EuiSpacer size="s" />
          <EuiText size="s" color="subdued">
            <p>
              보안을 위해 기본(admin) 계정의 비밀번호를 최초 1회 변경해야 합니다. 변경을
              완료해야 대시보드를 계속 이용할 수 있습니다.
            </p>
          </EuiText>

          <EuiSpacer />

          <FormRow
            headerText="현재 비밀번호"
            helpText="현재 비밀번호를 입력하여 계정을 확인하세요."
            isInvalid={isCurrentPasswordInvalid}
            error={currentPasswordError}
          >
            <EuiCompressedFieldPassword
              data-test-subj="current-password"
              onChange={function (e: React.ChangeEvent<HTMLInputElement>) {
                setCurrentPassword(e.target.value);
                setIsCurrentPasswordInvalid(false);
              }}
              isInvalid={isCurrentPasswordInvalid}
              type="dual"
            />
          </FormRow>
          <EuiSpacer />

          <EuiFlexGroup direction="row">
            <EuiFlexItem grow={false}>
              <FormRow
                headerText="새 비밀번호"
                helpText={passwordHelpText}
                isInvalid={isNewPasswordInvalid}
              >
                <EuiCompressedFieldPassword
                  data-test-subj="new-password"
                  onChange={function (e: React.ChangeEvent<HTMLInputElement>) {
                    setNewPassword(e.target.value);
                    setIsNewPasswordInvalid(false);
                    setIsRepeatNewPasswordInvalid(repeatNewPassword !== newPassword);
                  }}
                  type="dual"
                  isInvalid={isNewPasswordInvalid}
                />
              </FormRow>
              <EuiCompressedFormRow>
                <PasswordStrengthBar password={newPassword} />
              </EuiCompressedFormRow>
            </EuiFlexItem>
          </EuiFlexGroup>

          <FormRow
            headerText="새 비밀번호 재입력"
            helpText="위에서 입력한 비밀번호와 동일해야 합니다."
          >
            <EuiCompressedFieldPassword
              data-test-subj="reenter-new-password"
              isInvalid={isRepeatNewPasswordInvalid}
              onChange={function (e: React.ChangeEvent<HTMLInputElement>) {
                const value = e.target.value;
                setRepeatNewPassword(value);
                setIsRepeatNewPasswordInvalid(value !== newPassword);
              }}
              type="dual"
            />
          </FormRow>

          <EuiSpacer />

          {errorCallOut && (
            <EuiCallOut color="danger" iconType="alert">
              {errorCallOut}
            </EuiCallOut>
          )}
        </EuiModalBody>
        <EuiModalFooter>
          <EuiSmallButton
            data-test-subj="reset"
            fill
            disabled={
              isRepeatNewPasswordInvalid || !currentPassword || !newPassword || !repeatNewPassword
            }
            onClick={handleReset}
          >
            비밀번호 변경
          </EuiSmallButton>
        </EuiModalFooter>
      </EuiModal>
    </EuiOverlayMask>
  );
}
