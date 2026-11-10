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
import { CoreStart } from 'opensearch-dashboards/public';
import {
  EuiCompressedFieldPassword,
  EuiFlexGroup,
  EuiFlexItem,
  EuiCompressedFormRow,
} from '@elastic/eui';
import { FormRow } from './form-row';
import { PASSWORD_INSTRUCTION, PASSWORD_VALIDATION_DEFAULT_MESSAGE_EN } from '../../apps-constants';
import { getDashboardsInfo } from '../../../utils/dashboards-info-utils';
import { PasswordStrengthBar } from './password-strength-bar';

export function PasswordEditPanel(props: {
  coreStart: CoreStart;
  updatePassword: (p: string) => void;
  updateIsInvalid: (v: boolean) => void;
}) {
  const [password, setPassword] = React.useState<string>('');
  const [repeatPassword, setRepeatPassword] = React.useState<string>('');
  const [isRepeatPasswordInvalid, setIsRepeatPasswordInvalid] = React.useState<boolean>(false);
  const [passwordHelpText, setPasswordHelpText] = React.useState<string>(PASSWORD_INSTRUCTION);

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

  React.useEffect(() => {
    props.updatePassword(password);
    const isInvalid = repeatPassword !== password;
    setIsRepeatPasswordInvalid(isInvalid);
    props.updateIsInvalid(isInvalid);
  }, [password, props, repeatPassword]);

  const passwordChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const repeatPasswordChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRepeatPassword(e.target.value);
  };

  return (
    <>
      <EuiFlexGroup direction="row">
        <EuiFlexItem grow={false}>
          <FormRow headerText="비밀번호" helpText={passwordHelpText}>
            <EuiCompressedFieldPassword
              data-test-subj="password"
              type="dual"
              onChange={passwordChangeHandler}
            />
          </FormRow>
          <EuiCompressedFormRow>
            <PasswordStrengthBar password={password} />
          </EuiCompressedFormRow>
        </EuiFlexItem>
      </EuiFlexGroup>

      <FormRow
        headerText="비밀번호 재입력"
        helpText="위에서 입력한 비밀번호와 동일해야 합니다."
      >
        <EuiCompressedFieldPassword
          data-test-subj="re-enter-password"
          type="dual"
          isInvalid={isRepeatPasswordInvalid}
          onChange={repeatPasswordChangeHandler}
        />
      </FormRow>
    </>
  );
}
