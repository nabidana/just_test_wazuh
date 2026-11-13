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

import { EuiFlexGroup, EuiFlexItem, EuiProgress, EuiSpacer, EuiText } from '@elastic/eui';
import React from 'react';
import zxcvbn from 'zxcvbn';

interface PasswordStrengthBarProps {
  password: string;
}

export const PasswordStrengthBar = (props: PasswordStrengthBarProps) => {
  const { password } = props;
  const passwordStrength = zxcvbn(password);
  const strength = passwordStrength.score;
  let message;
  let color;
  switch (strength) {
    case 0:
      message = '매우 약함';
      color = 'danger';
      break;
    case 1:
      message = '약함';
      color = 'danger';
      break;
    case 2:
      message = '보통';
      color = 'warning';
      break;
    case 3:
      message = '강함';
      color = 'success';
      break;
    case 4:
      message = '매우 강함';
      color = 'success';
      break;
  }
  // [추가] 비밀번호 개선 제안 한글화
  const suggestions = passwordStrength.feedback.suggestions.map((suggestion) =>
    suggestion === 'Add another word or two. Uncommon words are better.'
      ? '단어를 한두 개 더 추가하세요. 흔하지 않은 단어일수록 좋습니다.'
      : suggestion
  );

  return (
    password && (
      <EuiFlexGroup direction="column" gutterSize="xs">
        <EuiFlexItem>
          <EuiProgress
            value={strength}
            max={4}
            size="m"
            color={color}
            valueText={message}
            label={'비밀번호 강도'}
            data-test-subj="password-strength-progress"
          />
        </EuiFlexItem>
        {passwordStrength.feedback.suggestions && (
          <EuiFlexItem>
            <EuiText size="xs" data-test-subj="password-strength-feedback-suggestions">
              {/* {passwordStrength.feedback.suggestions} */}
              {suggestions}
            </EuiText>
          </EuiFlexItem>
        )}
        <EuiSpacer size="s" />
      </EuiFlexGroup>
    )
  );
};
