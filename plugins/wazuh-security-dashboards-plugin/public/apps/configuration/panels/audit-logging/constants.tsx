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
import { pullAll } from 'lodash';

export const CONFIG_LABELS = {
  AUDIT_LOGGING: '감사 로그',
  GENERAL_SETTINGS: '일반 설정',
  LAYER_SETTINGS: '레이어 설정',
  ATTRIBUTE_SETTINGS: '속성 설정',
  IGNORE_SETTINGS: '무시 설정',
  COMPLIANCE_SETTINGS: '규정 준수 설정',
  COMPLIANCE_MODE: '규정 준수 모드',
  COMPLIANCE_CONFIG_SETTINGS: '설정',
  COMPLIANCE_READ: '읽기',
  COMPLIANCE_WRITE: '쓰기',
};

export const RESPONSE_MESSAGES = {
  FETCH_ERROR_TITLE: '감사 설정을 가져오는 중 오류가 발생했습니다.',
  FETCH_ERROR_MESSAGE: '보안 플러그인에서 감사 설정의 핫 리로딩이 활성화되어 있는지 확인하세요.',
  UPDATE_SUCCESS: '감사 설정이 성공적으로 업데이트되었습니다.',
  UPDATE_FAILURE: '감사 설정을 업데이트하지 못했습니다. 설정을 확인하세요.',
};

export interface SettingMapItem {
  key: string;
  value: string[];
}

export interface SettingContent {
  title: string;
  path: string;
  description: string;
  type: string;
  options?: string[];
  placeHolder?: string;
  code?: string;
  error?: string;
}

const REST_LAYER: SettingContent = {
  title: 'REST 레이어',
  path: 'audit.enable_rest',
  description: 'REST 레이어에서 발생하는 이벤트의 감사 여부를 활성화 또는 비활성화합니다.',
  type: 'bool',
};

const REST_DISABLED_CATEGORIES: SettingContent = {
  title: 'REST 비활성화 카테고리',
  path: 'audit.disabled_rest_categories',
  description:
    'REST 레이어에서 무시해야 하는 감사 카테고리를 지정합니다. 이 값을 변경하면 ' +
    '상당한 오버헤드가 발생할 수 있습니다.',
  type: 'array',
  options: [
    'BAD_HEADERS',
    'FAILED_LOGIN',
    'MISSING_PRIVILEGES',
    'GRANTED_PRIVILEGES',
    'SSL_EXCEPTION',
    'AUTHENTICATED',
  ],
  placeHolder: '카테고리 선택',
};

export function excludeFromDisabledRestCategories(optionsToExclude: string[]) {
  pullAll(REST_DISABLED_CATEGORIES.options || [], optionsToExclude);
}

const TRANSPORT_LAYER: SettingContent = {
  title: 'Transport 레이어',
  path: 'audit.enable_transport',
  description: 'Transport 레이어에서 발생하는 이벤트의 감사 여부를 활성화 또는 비활성화합니다.',
  type: 'bool',
};

const TRANSPORT_DISABLED_CATEGORIES: SettingContent = {
  title: 'Transport 비활성화 카테고리',
  path: 'audit.disabled_transport_categories',
  description:
    'Transport 레이어에서 무시해야 하는 감사 카테고리를 지정합니다. 이 값을 변경하면 ' +
    '상당한 오버헤드가 발생할 수 있습니다.',
  type: 'array',
  options: [
    'BAD_HEADERS',
    'FAILED_LOGIN',
    'GRANTED_PRIVILEGES',
    'INDEX_EVENT',
    'MISSING_PRIVILEGES',
    'SSL_EXCEPTION',
    'OPENDISTRO_SECURITY_INDEX_ATTEMPT',
    'AUTHENTICATED',
  ],
  placeHolder: '카테고리 선택',
};

export function excludeFromDisabledTransportCategories(optionsToExclude: string[]) {
  pullAll(TRANSPORT_DISABLED_CATEGORIES.options || [], optionsToExclude);
}

const BULK_REQUESTS: SettingContent = {
  title: '벌크 요청',
  path: 'audit.resolve_bulk_requests',
  description:
    '요청을 감사할 때 벌크 요청을 확인합니다. 이 옵션을 활성화하면 각 문서 요청마다 로그가 생성되어 ' +
    '상당한 오버헤드가 발생할 수 있습니다.',
  type: 'bool',
};

const REQUEST_BODY: SettingContent = {
  title: '요청 본문',
  path: 'audit.log_request_body',
  description: '요청을 감사할 때 요청 본문을 포함합니다.',
  type: 'bool',
};

const RESOLVE_INDICES: SettingContent = {
  title: '인덱스 확인',
  path: 'audit.resolve_indices',
  description: '요청을 감사할 때 인덱스를 확인합니다.',
  type: 'bool',
};

const SENSITIVE_HEADERS: SettingContent = {
  title: '민감한 헤더',
  path: 'audit.exclude_sensitive_headers',
  description: '감사 시 민감한 헤더를 제외합니다. (예: authorization 헤더)',
  type: 'bool',
};

const IGNORED_USERS: SettingContent = {
  title: '무시할 사용자',
  path: 'audit.ignore_users',
  description: '감사 시 무시할 사용자입니다. 기본값을 변경하면 상당한 오버헤드가 발생할 수 있습니다.',
  type: 'array',
  placeHolder: '사용자 또는 사용자 패턴 추가',
};

const IGNORED_REQUESTS: SettingContent = {
  title: '무시할 요청',
  path: 'audit.ignore_requests',
  description: '감사 시 무시할 요청 패턴입니다.',
  type: 'array',
  placeHolder: '요청 패턴 추가',
};

const ENABLED: SettingContent = {
  title: '규정 준수 로깅',
  path: 'compliance.enabled',
  description: '규정 준수 로깅을 활성화 또는 비활성화합니다.',
  type: 'bool',
};

const INTERNAL_CONFIG: SettingContent = {
  title: '내부 설정 로깅',
  path: 'compliance.internal_config',
  description: '내부 보안 인덱스의 이벤트 로깅을 활성화 또는 비활성화합니다.',
  type: 'bool',
};

const EXTERNAL_CONFIG: SettingContent = {
  title: '외부 설정 로깅',
  path: 'compliance.external_config',
  description: '외부 설정 로깅을 활성화 또는 비활성화합니다.',
  type: 'bool',
};

const READ_METADATA_ONLY: SettingContent = {
  title: '메타데이터만 읽기',
  path: 'compliance.read_metadata_only',
  description: '문서 필드는 로깅하지 않고 문서의 메타데이터만 로깅합니다.',
  type: 'bool',
};

const READ_IGNORED_USERS: SettingContent = {
  title: '무시할 사용자',
  path: 'compliance.read_ignore_users',
  description: '감사 시 무시할 사용자입니다.',
  type: 'array',
  placeHolder: '사용자 또는 사용자 패턴 추가',
};

const READ_WATCHED_FIELDS: SettingContent = {
  title: '감시할 필드',
  path: 'compliance.read_watched_fields',
  description:
    '읽기 이벤트 시 감시할 인덱스와 필드를 나열합니다. 감시할 필드를 추가하면 문서에 접근할 때마다 로그가 하나씩' +
    ' 생성되어 상당한 오버헤드가 발생할 수 있습니다. 샘플 데이터 내용:',
  type: 'map',
  code: `{
  "index-name-pattern": ["field-name-pattern"],
  "logs*": ["message"],
  "twitter": ["id", "user*"]
}`,
  error: '잘못된 내용입니다. 샘플 데이터 내용을 확인하세요.',
};

const WRITE_METADATA_ONLY: SettingContent = {
  title: '메타데이터만 쓰기',
  path: 'compliance.write_metadata_only',
  description: '문서 내용은 로깅하지 않고 문서의 메타데이터만 로깅합니다.',
  type: 'bool',
};

const WRITE_LOG_DIFFS: SettingContent = {
  title: '변경 사항(diff) 로깅',
  path: 'compliance.write_log_diffs',
  description: '문서 업데이트에 대한 변경 사항(diff)을 로깅합니다.',
  type: 'bool',
};

const WRITE_IGNORED_USERS: SettingContent = {
  title: '무시할 사용자',
  path: 'compliance.write_ignore_users',
  description: '감사 시 무시할 사용자입니다.',
  type: 'array',
  placeHolder: '사용자 또는 사용자 패턴 추가',
};

const WRITE_WATCHED_FIELDS: SettingContent = {
  title: '감시할 인덱스',
  path: 'compliance.write_watched_indices',
  description:
    '쓰기 이벤트 시 감시할 인덱스를 나열합니다. 감시할 인덱스를 추가하면 문서에 접근할 때마다 로그가 하나씩 ' +
    '생성되어 상당한 오버헤드가 발생할 수 있습니다.',
  type: 'array',
  placeHolder: '인덱스 추가',
};

export const CONFIG = {
  ENABLED: {
    title: '감사 로깅 활성화',
    path: 'enabled',
    description: '감사 로깅을 활성화 또는 비활성화합니다.',
    type: 'bool',
  },
  AUDIT: {
    REST_LAYER,
    REST_DISABLED_CATEGORIES,
    TRANSPORT_LAYER,
    TRANSPORT_DISABLED_CATEGORIES,
    BULK_REQUESTS,
    REQUEST_BODY,
    RESOLVE_INDICES,
    SENSITIVE_HEADERS,
    IGNORED_USERS,
    IGNORED_REQUESTS,
  },
  COMPLIANCE: {
    ENABLED,
    INTERNAL_CONFIG,
    EXTERNAL_CONFIG,
    READ_METADATA_ONLY,
    READ_IGNORED_USERS,
    READ_WATCHED_FIELDS,
    WRITE_METADATA_ONLY,
    WRITE_LOG_DIFFS,
    WRITE_IGNORED_USERS,
    WRITE_WATCHED_FIELDS,
  },
};

export interface SettingGroup {
  title: string;
  settings: SettingContent[];
}

export const LAYER_SETTINGS: SettingGroup = {
  title: CONFIG_LABELS.LAYER_SETTINGS,
  settings: [
    CONFIG.AUDIT.REST_LAYER,
    CONFIG.AUDIT.REST_DISABLED_CATEGORIES,
    CONFIG.AUDIT.TRANSPORT_LAYER,
    CONFIG.AUDIT.TRANSPORT_DISABLED_CATEGORIES,
  ],
};

export const ATTRIBUTE_SETTINGS: SettingGroup = {
  title: CONFIG_LABELS.ATTRIBUTE_SETTINGS,
  settings: [
    CONFIG.AUDIT.BULK_REQUESTS,
    CONFIG.AUDIT.REQUEST_BODY,
    CONFIG.AUDIT.RESOLVE_INDICES,
    CONFIG.AUDIT.SENSITIVE_HEADERS,
  ],
};

export const IGNORE_SETTINGS: SettingGroup = {
  title: CONFIG_LABELS.IGNORE_SETTINGS,
  settings: [CONFIG.AUDIT.IGNORED_USERS, CONFIG.AUDIT.IGNORED_REQUESTS],
};

export const COMPLIANCE_CONFIG_MODE_SETTINGS: SettingGroup = {
  title: CONFIG_LABELS.COMPLIANCE_MODE,
  settings: [CONFIG.COMPLIANCE.ENABLED],
};

export const COMPLIANCE_CONFIG_SETTINGS: SettingGroup = {
  title: CONFIG_LABELS.COMPLIANCE_CONFIG_SETTINGS,
  settings: [CONFIG.COMPLIANCE.INTERNAL_CONFIG, CONFIG.COMPLIANCE.EXTERNAL_CONFIG],
};

export const COMPLIANCE_SETTINGS_READ: SettingGroup = {
  title: CONFIG_LABELS.COMPLIANCE_READ,
  settings: [
    CONFIG.COMPLIANCE.READ_METADATA_ONLY,
    CONFIG.COMPLIANCE.READ_IGNORED_USERS,
    CONFIG.COMPLIANCE.READ_WATCHED_FIELDS,
  ],
};

export const COMPLIANCE_SETTINGS_WRITE: SettingGroup = {
  title: CONFIG_LABELS.COMPLIANCE_WRITE,
  settings: [
    CONFIG.COMPLIANCE.WRITE_METADATA_ONLY,
    CONFIG.COMPLIANCE.WRITE_LOG_DIFFS,
    CONFIG.COMPLIANCE.WRITE_IGNORED_USERS,
    CONFIG.COMPLIANCE.WRITE_WATCHED_FIELDS,
  ],
};

export const SETTING_GROUPS = {
  AUDIT_SETTINGS: {
    settings: [CONFIG.ENABLED],
  },
  LAYER_SETTINGS,
  ATTRIBUTE_SETTINGS,
  IGNORE_SETTINGS,
  COMPLIANCE_CONFIG_MODE_SETTINGS,
  COMPLIANCE_CONFIG_SETTINGS,
  COMPLIANCE_SETTINGS_READ,
  COMPLIANCE_SETTINGS_WRITE,
};

export const SUB_URL_FOR_GENERAL_SETTINGS_EDIT = '/edit/generalSettings';
export const SUB_URL_FOR_COMPLIANCE_SETTINGS_EDIT = '/edit/complianceSettings';
