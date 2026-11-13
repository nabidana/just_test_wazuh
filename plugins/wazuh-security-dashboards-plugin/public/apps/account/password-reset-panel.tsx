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

import React from 'react';
import {
  EuiSmallButton,
  EuiSmallButtonEmpty,
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
  EuiLoadingSpinner, // [추가] 비밀번호 변경 진행 중 로딩 표시
} from '@elastic/eui';
import { CoreStart } from 'opensearch-dashboards/public';
import { FormRow } from '../configuration/utils/form-row';
import { logout, updateNewPassword } from './utils';
import { PASSWORD_INSTRUCTION, PASSWORD_VALIDATION_DEFAULT_MESSAGE_EN } from '../apps-constants';
import { constructErrorMessageAndLog } from '../error-utils';
// [삭제] 로그인 요청을 이용한 비밀번호 검증은 사용하지 않음
// import { validateCurrentPassword } from '../../utils/login-utils';
import { getDashboardsInfo } from '../../utils/dashboards-info-utils';
import { PasswordStrengthBar } from '../configuration/utils/password-strength-bar';

interface PasswordResetPanelProps {
  coreStart: CoreStart;
  username: string;
  handleClose: () => void;
  logoutUrl?: string;
}

export function PasswordResetPanel(props: PasswordResetPanelProps) {
  const [currentPassword, setCurrentPassword] = React.useState<string>('');
  // reply on backend response of login call to verify
  const [isCurrentPasswordInvalid, setIsCurrentPasswordInvalid] = React.useState<boolean>(false);
  const [currentPasswordError, setCurrentPasswordError] = React.useState<string[]>([]);

  const [newPassword, setNewPassword] = React.useState<string>('');
  // reply on backend response of user update call to verify
  const [isNewPasswordInvalid, setIsNewPasswordInvalid] = React.useState<boolean>(false);

  const [repeatNewPassword, setRepeatNewPassword] = React.useState<string>('');
  const [isRepeatNewPasswordInvalid, setIsRepeatNewPasswordInvalid] = React.useState<boolean>(
    false
  );

  const [errorCallOut, setErrorCallOut] = React.useState<string>('');
  const [passwordHelpText, setPasswordHelpText] = React.useState<string>(PASSWORD_INSTRUCTION);

  // [추가] 요청 진행 여부로 로딩 화면과 버튼 상태를 제어한다.
  const [isSubmitting, setIsSubmitting] = React.useState<boolean>(false);
  // [추가] React 리렌더 이전에 발생하는 빠른 중복 클릭도 차단한다.
  const isSubmittingRef = React.useRef(false);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const message = (await getDashboardsInfo(props.coreStart.http))
          .password_validation_error_message;
        // The security plugin's built-in default message is shown in our translated form;
        // an admin-customized message (in config.yml) is shown as-is.
        setPasswordHelpText(
          message === PASSWORD_VALIDATION_DEFAULT_MESSAGE_EN ? PASSWORD_INSTRUCTION : message
        );
      } catch (e) {
        console.error(e);
      }
    };

    fetchData();
  }, [props.coreStart.http]);

  // [추가] 요청 중 ESC/X 닫기로 변경 화면이 사라지지 않도록 한다.
  const handleClose = () => {
    if (isSubmittingRef.current) return;
    props.handleClose();
  };

  const handleReset = async () => {
    // [추가] 변경 요청이 진행 중이면 추가 요청을 보내지 않는다.
    if (isSubmittingRef.current) return;
    isSubmittingRef.current = true;
    setIsSubmitting(true);

    const http = props.coreStart.http;
    // validate the current password
    // [유지] 이전 오류 상태 초기화
    setIsCurrentPasswordInvalid(false);
    setCurrentPasswordError([]);
    setErrorCallOut('');

    // [기존 유지 / 삭제된 검증 로직]
    // try {
    //   await validateCurrentPassword(http, props.username, currentPassword);
    // } catch (e) {
    //   setIsCurrentPasswordInvalid(true);
    //   setCurrentPasswordError([constructErrorMessageAndLog(e, 'Invalid current password.')]);
    // }

    // update new password
    try {
      // [유지] 서버에서 기존 비밀번호 검증 및 변경/동기화를 처리한다.
      await updateNewPassword(http, newPassword, currentPassword);

      // [유지] 변경 성공 후 기존 로그인 세션 종료
      await logout(http, props.logoutUrl);
    } catch (e) {
      setErrorCallOut(constructErrorMessageAndLog(e, '비밀번호 재설정에 실패했습니다.'));
    } finally {
      // [추가] 요청 성공/실패와 관계없이 로딩 상태를 종료한다.
      isSubmittingRef.current = false;
      setIsSubmitting(false);
    }
  };

  // TODO: replace the instruction message for new password once UX provides it.
  return (
    <EuiOverlayMask>
      <EuiModal data-test-subj="reset-password-modal" onClose={handleClose}>
        <EuiSpacer />
        <EuiModalBody>
          {isSubmitting ? (
            // [추가] 기존 모달 안에서 비밀번호 변경/서비스 동기화 진행 상황 표시
            <EuiFlexGroup direction="column" alignItems="center" gutterSize="m">
              <EuiFlexItem grow={false}>
                <EuiLoadingSpinner size="xl" />
              </EuiFlexItem>
              <EuiFlexItem grow={false}>
                <EuiText size="s" textAlign="center">
                  <h3>비밀번호 변경 중</h3>
                  <p>
                    {props.username === 'admin'
                      ? '관리자 비밀번호 변경 및 서비스 동기화를 진행하고 있습니다.'
                      : '비밀번호 변경을 진행하고 있습니다.'}
                  </p>
                  <p>작업이 완료될 때까지 변경 요청을 다시 보내지 마세요.</p>
                </EuiText>
              </EuiFlexItem>
            </EuiFlexGroup>
          ) : (
            // [유지] 기존 비밀번호 입력 폼
            <>
              <EuiText size="s">
                <h2>&quot;{props.username}&quot;계정 패스워드를 변경합니다.</h2>
              </EuiText>

              <EuiSpacer />

              <FormRow
                headerText="현재 패스워드"
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
                    headerText="새 패스워드"
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
                headerText="새 패스워드 재입력"
                helpText="비밀번호는 위에서 입력한 것과 동일해야 합니다."
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
            </>
          )}
        </EuiModalBody>
        <EuiModalFooter>
          <EuiSmallButtonEmpty data-test-subj="cancel" onClick={handleClose} disabled={isSubmitting}>
            취소
          </EuiSmallButtonEmpty>

          <EuiSmallButton
            data-test-subj="reset"
            fill
            disabled={isRepeatNewPasswordInvalid || isSubmitting}
            isLoading={isSubmitting}
            onClick={handleReset}
          >
            {isSubmitting ? '변경 중...' : '변경'}
          </EuiSmallButton>
        </EuiModalFooter>
      </EuiModal>
    </EuiOverlayMask>
  );
}
