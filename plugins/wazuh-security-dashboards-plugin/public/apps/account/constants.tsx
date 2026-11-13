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

import { API_PREFIX } from '../../../common/index';

// Don't merge to configuration app since configuration app is for admin user and this one is for all user
export const API_ENDPOINT_ACCOUNT_INFO = API_PREFIX + '/configuration/account';

// GS 인증용: admin 계정 최초 비밀번호 변경 강제 기능의 상태 조회/기록 엔드포인트
export const API_ENDPOINT_ADMIN_PASSWORD_STATUS = API_PREFIX + '/admin_password_status';
