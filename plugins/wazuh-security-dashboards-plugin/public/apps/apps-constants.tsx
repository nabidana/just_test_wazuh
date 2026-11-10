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

// TODO: use this constant for wherever the generic error instruction is used.
export const GENERIC_ERROR_INSTRUCTION =
  'You may refresh the page to retry or see browser console for more information.';

export const PASSWORD_INSTRUCTION =
  '비밀번호는 8자 이상이어야 하며, 대문자, 소문자, 숫자, 특수문자를 ' +
  '각각 하나 이상 포함해야 합니다.';

// The OpenSearch security plugin's built-in default password_validation_error_message
// (returned by /dashboardsinfo when config.yml has no custom override). When the backend
// returns exactly this string we substitute PASSWORD_INSTRUCTION instead; if an admin has
// configured a custom message in config.yml, that custom message is shown as-is.
export const PASSWORD_VALIDATION_DEFAULT_MESSAGE_EN =
  'Password should be at least 8 characters long and contain at least one uppercase ' +
  'letter, one lowercase letter, one digit, and one special character.';
