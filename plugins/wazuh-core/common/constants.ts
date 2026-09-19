/*
 * Wazuh app - Wazuh Constants file
 * Copyright (C) 2015-2022 Wazuh, Inc.
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * Find more information about this on the LICENSE file.
 */
import path from 'path';
import { version } from '../package.json';
// import { validate as validateNodeCronInterval } from 'node-cron';
import { SettingsValidator } from '../common/services/settings-validator';

// Plugin
export const PLUGIN_VERSION = version;
export const PLUGIN_VERSION_SHORT = version.split('.').splice(0, 2).join('.');

// Index patterns - Wazuh alerts
export const WAZUH_INDEX_TYPE_ALERTS = 'alerts';
export const WAZUH_ALERTS_PREFIX = 'wazuh-alerts-';
export const WAZUH_ALERTS_PATTERN = 'wazuh-alerts-*';

// Job - Wazuh monitoring
export const WAZUH_INDEX_TYPE_MONITORING = 'monitoring';
export const WAZUH_MONITORING_PREFIX = 'wazuh-monitoring-';
export const WAZUH_MONITORING_PATTERN = 'wazuh-monitoring-*';
export const WAZUH_MONITORING_TEMPLATE_NAME = 'wazuh-agent';
export const WAZUH_MONITORING_DEFAULT_INDICES_SHARDS = 1;
export const WAZUH_MONITORING_DEFAULT_INDICES_REPLICAS = 0;
export const WAZUH_MONITORING_DEFAULT_CREATION = 'w';
export const WAZUH_MONITORING_DEFAULT_ENABLED = true;
export const WAZUH_MONITORING_DEFAULT_FREQUENCY = 900;
export const WAZUH_MONITORING_DEFAULT_CRON_FREQ = '0 * * * * *';

// Job - Wazuh statistics
export const WAZUH_INDEX_TYPE_STATISTICS = 'statistics';
export const WAZUH_STATISTICS_DEFAULT_PREFIX = 'wazuh';
export const WAZUH_STATISTICS_DEFAULT_NAME = 'statistics';
export const WAZUH_STATISTICS_PATTERN = `${WAZUH_STATISTICS_DEFAULT_PREFIX}-${WAZUH_STATISTICS_DEFAULT_NAME}-*`;
export const WAZUH_STATISTICS_TEMPLATE_NAME = `${WAZUH_STATISTICS_DEFAULT_PREFIX}-${WAZUH_STATISTICS_DEFAULT_NAME}`;
export const WAZUH_STATISTICS_DEFAULT_INDICES_SHARDS = 1;
export const WAZUH_STATISTICS_DEFAULT_INDICES_REPLICAS = 0;
export const WAZUH_STATISTICS_DEFAULT_CREATION = 'w';
export const WAZUH_STATISTICS_DEFAULT_STATUS = true;
export const WAZUH_STATISTICS_DEFAULT_FREQUENCY = 900;
export const WAZUH_STATISTICS_DEFAULT_CRON_FREQ = '0 */5 * * * *';

// Job - Wazuh initialize
export const WAZUH_PLUGIN_PLATFORM_TEMPLATE_NAME = 'wazuh-kibana';

// Sample data
export const WAZUH_SAMPLE_ALERT_PREFIX = 'wazuh-alerts-4.x-';
export const WAZUH_SAMPLE_ALERTS_INDEX_SHARDS = 1;
export const WAZUH_SAMPLE_ALERTS_INDEX_REPLICAS = 0;
export const WAZUH_SAMPLE_ALERTS_CATEGORY_SECURITY = 'security';
export const WAZUH_SAMPLE_ALERTS_CATEGORY_AUDITING_POLICY_MONITORING =
  'auditing-policy-monitoring';
export const WAZUH_SAMPLE_ALERTS_CATEGORY_THREAT_DETECTION = 'threat-detection';
export const WAZUH_SAMPLE_ALERTS_DEFAULT_NUMBER_ALERTS = 3000;
export const WAZUH_SAMPLE_ALERTS_CATEGORIES_TYPE_ALERTS = {
  [WAZUH_SAMPLE_ALERTS_CATEGORY_SECURITY]: [
    { syscheck: true },
    { aws: true },
    { azure: true },
    { office: true },
    { gcp: true },
    { authentication: true },
    { ssh: true },
    { apache: true, alerts: 2000 },
    { web: true },
    { windows: { service_control_manager: true }, alerts: 1000 },
    { github: true },
  ],
  [WAZUH_SAMPLE_ALERTS_CATEGORY_AUDITING_POLICY_MONITORING]: [
    { rootcheck: true },
    { audit: true },
    { openscap: true },
    { ciscat: true },
    { virustotal: true },
    { yara: true },
  ],
  [WAZUH_SAMPLE_ALERTS_CATEGORY_THREAT_DETECTION]: [
    { vulnerabilities: true },
    { osquery: true },
    { docker: true },
    { mitre: true },
  ],
};

// Security
export const WAZUH_SECURITY_PLUGIN_OPENSEARCH_DASHBOARDS_SECURITY =
  'OpenSearch Dashboards Security';

export const WAZUH_SECURITY_PLUGINS = [
  WAZUH_SECURITY_PLUGIN_OPENSEARCH_DASHBOARDS_SECURITY,
];

// App configuration
export const WAZUH_CONFIGURATION_CACHE_TIME = 10000; // time in ms;

// Reserved ids for Users/Role mapping
export const WAZUH_API_RESERVED_ID_LOWER_THAN = 100;
export const WAZUH_API_RESERVED_WUI_SECURITY_RULES = [1, 2];

// Queue
export const WAZUH_QUEUE_CRON_FREQ = '*/15 * * * * *'; // Every 15 seconds

// Wazuh errors
export const WAZUH_ERROR_DAEMONS_NOT_READY = 'ERROR3099';

// Agents
export enum WAZUH_AGENTS_OS_TYPE {
  WINDOWS = 'windows',
  LINUX = 'linux',
  SUNOS = 'sunos',
  DARWIN = 'darwin',
  OTHERS = '',
}

export enum WAZUH_MODULES_ID {
  SECURITY_EVENTS = 'general',
  INTEGRITY_MONITORING = 'fim',
  AMAZON_WEB_SERVICES = 'aws',
  OFFICE_365 = 'office',
  GOOGLE_CLOUD_PLATFORM = 'gcp',
  POLICY_MONITORING = 'pm',
  SECURITY_CONFIGURATION_ASSESSMENT = 'sca',
  AUDITING = 'audit',
  OPEN_SCAP = 'oscap',
  VULNERABILITIES = 'vuls',
  OSQUERY = 'osquery',
  DOCKER = 'docker',
  MITRE_ATTACK = 'mitre',
  PCI_DSS = 'pci',
  HIPAA = 'hipaa',
  NIST_800_53 = 'nist',
  TSC = 'tsc',
  CIS_CAT = 'ciscat',
  VIRUSTOTAL = 'virustotal',
  GDPR = 'gdpr',
  GITHUB = 'github',
}

export enum WAZUH_MENU_MANAGEMENT_SECTIONS_ID {
  MANAGEMENT = 'management',
  ADMINISTRATION = 'administration',
  RULESET = 'ruleset',
  RULES = 'rules',
  DECODERS = 'decoders',
  CDB_LISTS = 'lists',
  GROUPS = 'groups',
  CONFIGURATION = 'configuration',
  STATUS_AND_REPORTS = 'statusReports',
  STATUS = 'status',
  CLUSTER = 'monitoring',
  LOGS = 'logs',
  REPORTING = 'reporting',
  STATISTICS = 'statistics',
}

export enum WAZUH_MENU_TOOLS_SECTIONS_ID {
  API_CONSOLE = 'devTools',
  RULESET_TEST = 'logtest',
}

export enum WAZUH_MENU_SECURITY_SECTIONS_ID {
  USERS = 'users',
  ROLES = 'roles',
  POLICIES = 'policies',
  ROLES_MAPPING = 'roleMapping',
}

export enum WAZUH_MENU_SETTINGS_SECTIONS_ID {
  SETTINGS = 'settings',
  API_CONFIGURATION = 'api',
  MODULES = 'modules',
  SAMPLE_DATA = 'sample_data',
  CONFIGURATION = 'configuration',
  LOGS = 'logs',
  MISCELLANEOUS = 'miscellaneous',
  ABOUT = 'about',
}

export const AUTHORIZED_AGENTS = 'authorized-agents';

// Wazuh links
export const WAZUH_LINK_GITHUB = 'https://github.com/wazuh';
export const WAZUH_LINK_GOOGLE_GROUPS =
  'https://groups.google.com/forum/#!forum/wazuh';
export const WAZUH_LINK_SLACK = 'https://wazuh.com/community/join-us-on-slack';

export const HEALTH_CHECK = 'health-check';

// Health check
export const HEALTH_CHECK_REDIRECTION_TIME = 300; //ms

// Plugin platform settings
// Default timeFilter set by the app
export const WAZUH_PLUGIN_PLATFORM_SETTING_TIME_FILTER = {
  from: 'now-24h',
  to: 'now',
};
export const PLUGIN_PLATFORM_SETTING_NAME_TIME_FILTER =
  'timepicker:timeDefaults';

// Default maxBuckets set by the app
export const WAZUH_PLUGIN_PLATFORM_SETTING_MAX_BUCKETS = 200000;
export const PLUGIN_PLATFORM_SETTING_NAME_MAX_BUCKETS = 'timeline:max_buckets';

// Default metaFields set by the app
export const WAZUH_PLUGIN_PLATFORM_SETTING_METAFIELDS = ['_source', '_index'];
export const PLUGIN_PLATFORM_SETTING_NAME_METAFIELDS = 'metaFields';

// Logger
export const UI_LOGGER_LEVELS = {
  WARNING: 'WARNING',
  INFO: 'INFO',
  ERROR: 'ERROR',
};

export const UI_TOAST_COLOR = {
  SUCCESS: 'success',
  WARNING: 'warning',
  DANGER: 'danger',
};

// Assets
export const ASSETS_BASE_URL_PREFIX = '/plugins/wazuh/assets/';
export const ASSETS_PUBLIC_URL = '/plugins/wazuh/public/assets/';

// Reports
export const REPORTS_LOGO_IMAGE_ASSETS_RELATIVE_PATH =
  'images/logo_reports.png';
export const REPORTS_PRIMARY_COLOR = '#256BD1';
export const REPORTS_PAGE_FOOTER_TEXT = 'Copyright © Wazuh, Inc.';
export const REPORTS_PAGE_HEADER_TEXT =
  'info@secuwiz.co.kr\nhttps://secuwiz.co.kr';

// Plugin platform
export const PLUGIN_PLATFORM_NAME = 'dashboard';
export const PLUGIN_PLATFORM_INSTALLATION_USER = 'wazuh-dashboard';
export const PLUGIN_PLATFORM_INSTALLATION_USER_GROUP = 'wazuh-dashboard';
export const PLUGIN_PLATFORM_WAZUH_DOCUMENTATION_URL_PATH_UPGRADE_PLATFORM =
  'upgrade-guide';
export const PLUGIN_PLATFORM_WAZUH_DOCUMENTATION_URL_PATH_TROUBLESHOOTING =
  'user-manual/wazuh-dashboard/troubleshooting.html';
export const PLUGIN_PLATFORM_WAZUH_DOCUMENTATION_URL_PATH_APP_CONFIGURATION =
  'user-manual/wazuh-dashboard/settings.html';
export const PLUGIN_PLATFORM_URL_GUIDE =
  'https://opensearch.org/docs/2.10/about';
export const PLUGIN_PLATFORM_URL_GUIDE_TITLE = 'OpenSearch guide';

export const PLUGIN_PLATFORM_REQUEST_HEADERS = {
  'osd-xsrf': 'kibana',
};

// Plugin app
export const PLUGIN_APP_NAME = 'Dashboard';

// UI
export const UI_COLOR_STATUS = {
  success: '#007871',
  danger: '#BD271E',
  warning: '#FEC514',
  disabled: '#646A77',
  info: '#6092C0',
  default: '#000000',
} as const;

export const API_NAME_AGENT_STATUS = {
  ACTIVE: 'active',
  DISCONNECTED: 'disconnected',
  PENDING: 'pending',
  NEVER_CONNECTED: 'never_connected',
} as const;

export const UI_COLOR_AGENT_STATUS = {
  [API_NAME_AGENT_STATUS.ACTIVE]: UI_COLOR_STATUS.success,
  [API_NAME_AGENT_STATUS.DISCONNECTED]: UI_COLOR_STATUS.danger,
  [API_NAME_AGENT_STATUS.PENDING]: UI_COLOR_STATUS.warning,
  [API_NAME_AGENT_STATUS.NEVER_CONNECTED]: UI_COLOR_STATUS.disabled,
  default: UI_COLOR_STATUS.default,
} as const;

export const UI_LABEL_NAME_AGENT_STATUS = {
  [API_NAME_AGENT_STATUS.ACTIVE]: 'Active',
  [API_NAME_AGENT_STATUS.DISCONNECTED]: 'Disconnected',
  [API_NAME_AGENT_STATUS.PENDING]: 'Pending',
  [API_NAME_AGENT_STATUS.NEVER_CONNECTED]: 'Never connected',
  default: 'Unknown',
} as const;

export const UI_ORDER_AGENT_STATUS = [
  API_NAME_AGENT_STATUS.ACTIVE,
  API_NAME_AGENT_STATUS.DISCONNECTED,
  API_NAME_AGENT_STATUS.PENDING,
  API_NAME_AGENT_STATUS.NEVER_CONNECTED,
];

export const AGENT_SYNCED_STATUS = {
  SYNCED: 'synced',
  NOT_SYNCED: 'not synced',
};

// The status code can be seen here https://github.com/wazuh/wazuh/blob/686068a1f05d806b2e3b3d633a765320ae7ae114/src/wazuh_db/wdb.h#L55-L61

export const AGENT_STATUS_CODE = [
  {
    STATUS_CODE: 0,
    STATUS_DESCRIPTION: 'Agent is connected',
  },
  {
    STATUS_CODE: 1,
    STATUS_DESCRIPTION: 'Invalid agent version',
  },
  {
    STATUS_CODE: 2,
    STATUS_DESCRIPTION: 'Error retrieving version',
  },
  {
    STATUS_CODE: 3,
    STATUS_DESCRIPTION: 'Shutdown message received',
  },
  {
    STATUS_CODE: 4,
    STATUS_DESCRIPTION: 'Disconnected because no keepalive received',
  },
  {
    STATUS_CODE: 5,
    STATUS_DESCRIPTION: 'Connection reset by manager',
  },
];

// Documentation
export const DOCUMENTATION_WEB_BASE_URL = 'https://documentation.wazuh.com';

// Default Elasticsearch user name context
export const ELASTIC_NAME = 'elastic';

// Default Wazuh indexer name
export const WAZUH_INDEXER_NAME = 'indexer';

// Not timeFieldName on index pattern
export const NOT_TIME_FIELD_NAME_INDEX_PATTERN =
  'not_time_field_name_index_pattern';

// Customization
export const CUSTOMIZATION_ENDPOINT_PAYLOAD_UPLOAD_CUSTOM_FILE_MAXIMUM_BYTES = 1048576;

// Plugin settings
export enum SettingCategory {
  GENERAL,
  HEALTH_CHECK,
  MONITORING,
  STATISTICS,
  SECURITY,
  CUSTOMIZATION,
  API_CONNECTION,
}

type TPluginSettingOptionsTextArea = {
  maxRows?: number;
  minRows?: number;
  maxLength?: number;
};

type TPluginSettingOptionsSelect = {
  select: { text: string; value: any }[];
};

type TPluginSettingOptionsEditor = {
  editor: {
    language: string;
  };
};

type TPluginSettingOptionsFile = {
  file: {
    type: 'image';
    extensions?: string[];
    size?: {
      maxBytes?: number;
      minBytes?: number;
    };
    recommended?: {
      dimensions?: {
        width: number;
        height: number;
        unit: string;
      };
    };
    store?: {
      relativePathFileSystem: string;
      filename: string;
      resolveStaticURL: (filename: string) => string;
    };
  };
};

type TPluginSettingOptionsNumber = {
  number: {
    min?: number;
    max?: number;
    integer?: boolean;
  };
};

type TPluginSettingOptionsSwitch = {
  switch: {
    values: {
      disabled: { label?: string; value: any };
      enabled: { label?: string; value: any };
    };
  };
};

export enum EpluginSettingType {
  text = 'text',
  textarea = 'textarea',
  switch = 'switch',
  number = 'number',
  editor = 'editor',
  select = 'select',
  filepicker = 'filepicker',
  password = 'password',
  arrayOf = 'arrayOf',
  custom = 'custom',
}

export type TPluginSetting = {
  // Define the text displayed in the UI.
  title: string;
  // Description.
  description: string;
  // Category.
  category: SettingCategory;
  // Type.
  type: EpluginSettingType;
  // Store
  store: {
    file: {
      // Define if the setting is managed by the ConfigurationStore service
      configurableManaged?: boolean;
      // Define a text to print as the default in the configuration block
      defaultBlock?: string;
      /* Transform the value defined in the configuration file to be consumed by the Configuration
        service */
      transformFrom?: (value: any) => any;
    };
  };
  // Default value.
  defaultValue: any;
  /* Special: This is used for the settings of customization to get the hidden default value, because the default value is empty to not to be displayed on the App Settings. */
  defaultValueIfNotSet?: any;
  // Configurable from the App Settings app.
  isConfigurableFromSettings: boolean;
  // Modify the setting requires running the plugin health check (frontend).
  requiresRunningHealthCheck?: boolean;
  // Modify the setting requires reloading the browser tab (frontend).
  requiresReloadingBrowserTab?: boolean;
  // Modify the setting requires restarting the plugin platform to take effect.
  requiresRestartingPluginPlatform?: boolean;
  // Define options related to the `type`.
  options?:
    | TPluginSettingOptionsEditor
    | TPluginSettingOptionsFile
    | TPluginSettingOptionsNumber
    | TPluginSettingOptionsSelect
    | TPluginSettingOptionsSwitch
    | TPluginSettingOptionsTextArea;
  // Transform the input value. The result is saved in the form global state of Settings/Configuration
  uiFormTransformChangedInputValue?: (value: any) => any;
  // Transform the configuration value or default as initial value for the input in Settings/Configuration
  uiFormTransformConfigurationValueToInputValue?: (value: any) => any;
  // Transform the input value changed in the form of Settings/Configuration and returned in the `changed` property of the hook useForm
  uiFormTransformInputValueToConfigurationValue?: (value: any) => any;
  // Validate the value in the form of Settings/Configuration. It returns a string if there is some validation error.
  validateUIForm?: (value: any) => string | undefined;
  // Validate function creator to validate the setting in the backend.
  validate?: (value: unknown) => string | undefined;
};

export type TPluginSettingWithKey = TPluginSetting & { key: TPluginSettingKey };
export type TPluginSettingCategory = {
  title: string;
  description?: string;
  documentationLink?: string;
  renderOrder?: number;
};

export const PLUGIN_SETTINGS_CATEGORIES: {
  [category: number]: TPluginSettingCategory;
} = {
  [SettingCategory.HEALTH_CHECK]: {
    title: '헬스 체크',
    description: '앱의 헬스 체크에서 실행할 검사 항목입니다.',
    renderOrder: SettingCategory.HEALTH_CHECK,
  },
  [SettingCategory.GENERAL]: {
    title: '일반',
    description:
      '알럿 인덱스 패턴, 대시보드에서 매니저 알럿 숨김, 로그 레벨 등과 관련된 기본 앱 설정입니다.',
    renderOrder: SettingCategory.GENERAL,
  },
  [SettingCategory.SECURITY]: {
    title: '보안',
    description: '허용되지 않은 역할 등 애플리케이션 보안 옵션입니다.',
    renderOrder: SettingCategory.SECURITY,
  },
  [SettingCategory.MONITORING]: {
    title: '작업:모니터링',
    description:
      '에이전트 상태 모니터링 작업 및 인덱스 저장과 관련된 옵션입니다.',
    renderOrder: SettingCategory.MONITORING,
  },
  [SettingCategory.STATISTICS]: {
    title: '작업:통계',
    description:
      '데몬 매니저 모니터링 작업 및 인덱스 저장과 관련된 옵션입니다.',
    renderOrder: SettingCategory.STATISTICS,
  },
  [SettingCategory.CUSTOMIZATION]: {
    title: '커스텀 브랜딩',
    description:
      '로고 등 커스텀 브랜딩 요소를 사용하려면 아래 설정을 편집하세요.',
    documentationLink: 'user-manual/wazuh-dashboard/custom-branding.html',
    renderOrder: SettingCategory.CUSTOMIZATION,
  },
  [SettingCategory.API_CONNECTION]: {
    title: 'API 연결',
    description: 'API 연결과 관련된 옵션입니다.',
    renderOrder: SettingCategory.API_CONNECTION,
  },
};

const pluginSettingsSampleData = ({
  nameCategory,
  defaultValue,
}: {
  nameCategory: string;
  defaultValue: string;
}) => ({
  title: `샘플 인벤토리(${nameCategory}) 접두사`,
  description: `${nameCategory}용 샘플 데이터의 인덱스 이름 접두사를 정의합니다. 대시보드에서 알 수 없는 필드가 발생하지 않도록 인덱스 패턴에서 사용하는 템플릿과 일치해야 합니다.`,
  store: {
    file: {
      configurableManaged: true,
    },
  },
  category: SettingCategory.GENERAL,
  type: EpluginSettingType.text,
  defaultValue: defaultValue,
  isConfigurableFromSettings: true,
  requiresRunningHealthCheck: false,
  validateUIForm: function (value) {
    return this.validate(value);
  },
  // Validation: https://github.com/elastic/elasticsearch/blob/v7.10.2/docs/reference/indices/create-index.asciidoc
  validate: SettingsValidator.compose(
    SettingsValidator.isString,
    SettingsValidator.isNotEmptyString,
    SettingsValidator.hasNoSpaces,
    SettingsValidator.noStartsWithString('-', '_', '+', '.'),
    SettingsValidator.hasNotInvalidCharacters(
      '\\',
      '/',
      '?',
      '"',
      '<',
      '>',
      '|',
      ',',
      '#',
      '*',
    ),
  ),
});

export const PLUGIN_SETTINGS: { [key: string]: TPluginSetting } = {
  'alerts.sample.prefix': {
    title: '샘플 알럿 접두사',
    description:
      '샘플 알럿의 인덱스 이름 접두사를 정의합니다. 대시보드에서 알 수 없는 필드가 발생하지 않도록 인덱스 패턴에서 사용하는 템플릿과 일치해야 합니다.',
    store: {
      file: {
        configurableManaged: true,
      },
    },
    category: SettingCategory.GENERAL,
    type: EpluginSettingType.text,
    defaultValue: WAZUH_SAMPLE_ALERT_PREFIX,
    isConfigurableFromSettings: true,
    requiresRunningHealthCheck: true,
    // Wazuh: hide the "wazuh-" branding prefix in the App Settings UI while still
    // storing/using the real "wazuh-"-prefixed value internally (config file, sample
    // data index naming, template matching, etc. all keep working exactly as before).
    uiFormTransformConfigurationValueToInputValue: function (value: string) {
      return typeof value === 'string' ? value.replace(/^wazuh-/, '') : value;
    },
    uiFormTransformInputValueToConfigurationValue: function (value: string) {
      return typeof value === 'string' && !value.startsWith('wazuh-')
        ? `wazuh-${value}`
        : value;
    },
    validateUIForm: function (value) {
      return this.validate(
        this.uiFormTransformInputValueToConfigurationValue(value),
      );
    },
    // Validation: https://github.com/elastic/elasticsearch/blob/v7.10.2/docs/reference/indices/create-index.asciidoc
    validate: SettingsValidator.compose(
      SettingsValidator.isString,
      SettingsValidator.isNotEmptyString,
      SettingsValidator.hasNoSpaces,
      SettingsValidator.noStartsWithString('-', '_', '+', '.'),
      SettingsValidator.hasNotInvalidCharacters(
        '\\',
        '/',
        '?',
        '"',
        '<',
        '>',
        '|',
        ',',
        '#',
        '*',
      ),
    ),
  },
  'checks.api': {
    title: 'API 연결',
    description: '앱을 열 때 API 헬스 체크를 활성화하거나 비활성화합니다.',
    store: {
      file: {
        configurableManaged: true,
      },
    },
    category: SettingCategory.HEALTH_CHECK,
    type: EpluginSettingType.switch,
    defaultValue: true,
    isConfigurableFromSettings: true,
    options: {
      switch: {
        values: {
          disabled: { label: 'false', value: false },
          enabled: { label: 'true', value: true },
        },
      },
    },
    uiFormTransformChangedInputValue: function (
      value: boolean | string,
    ): boolean {
      return Boolean(value);
    },
    validateUIForm: function (value) {
      return this.validate(value);
    },
    validate: SettingsValidator.isBoolean,
  },
  'checks.fields': {
    title: '알려진 필드',
    description:
      '앱을 열 때 알려진 필드 헬스 체크를 활성화하거나 비활성화합니다.',
    store: {
      file: {
        configurableManaged: true,
      },
    },
    category: SettingCategory.HEALTH_CHECK,
    type: EpluginSettingType.switch,
    defaultValue: true,
    isConfigurableFromSettings: true,
    options: {
      switch: {
        values: {
          disabled: { label: 'false', value: false },
          enabled: { label: 'true', value: true },
        },
      },
    },
    uiFormTransformChangedInputValue: function (
      value: boolean | string,
    ): boolean {
      return Boolean(value);
    },
    validateUIForm: function (value) {
      return this.validate(value);
    },
    validate: SettingsValidator.isBoolean,
  },
  'checks.maxBuckets': {
    title: '최대 버킷 수를 200000으로 설정',
    description:
      '플랫폼의 최대 버킷(max buckets) 설정 기본값을 변경합니다.',
    store: {
      file: {
        configurableManaged: true,
      },
    },
    category: SettingCategory.HEALTH_CHECK,
    type: EpluginSettingType.switch,
    defaultValue: true,
    isConfigurableFromSettings: true,
    options: {
      switch: {
        values: {
          disabled: { label: 'false', value: false },
          enabled: { label: 'true', value: true },
        },
      },
    },
    uiFormTransformChangedInputValue: function (
      value: boolean | string,
    ): boolean {
      return Boolean(value);
    },
    validateUIForm: function (value) {
      return this.validate(value);
    },
    validate: SettingsValidator.isBoolean,
  },
  'checks.metaFields': {
    title: '메타 필드 제거',
    description:
      '플랫폼의 메타 필드(metaField) 설정 기본값을 변경합니다.',
    store: {
      file: {
        configurableManaged: true,
      },
    },
    category: SettingCategory.HEALTH_CHECK,
    type: EpluginSettingType.switch,
    defaultValue: true,
    isConfigurableFromSettings: true,
    options: {
      switch: {
        values: {
          disabled: { label: 'false', value: false },
          enabled: { label: 'true', value: true },
        },
      },
    },
    uiFormTransformChangedInputValue: function (
      value: boolean | string,
    ): boolean {
      return Boolean(value);
    },
    validateUIForm: function (value) {
      return this.validate(value);
    },
    validate: SettingsValidator.isBoolean,
  },
  'checks.pattern': {
    title: '인덱스 패턴',
    description:
      '앱을 열 때 인덱스 패턴 헬스 체크를 활성화하거나 비활성화합니다.',
    store: {
      file: {
        configurableManaged: true,
      },
    },
    category: SettingCategory.HEALTH_CHECK,
    type: EpluginSettingType.switch,
    defaultValue: true,
    isConfigurableFromSettings: true,
    options: {
      switch: {
        values: {
          disabled: { label: 'false', value: false },
          enabled: { label: 'true', value: true },
        },
      },
    },
    uiFormTransformChangedInputValue: function (
      value: boolean | string,
    ): boolean {
      return Boolean(value);
    },
    validateUIForm: function (value) {
      return this.validate(value);
    },
    validate: SettingsValidator.isBoolean,
  },
  'checks.setup': {
    title: 'API 버전',
    description:
      '앱을 열 때 설정(setup) 헬스 체크를 활성화하거나 비활성화합니다.',
    store: {
      file: {
        configurableManaged: true,
      },
    },
    category: SettingCategory.HEALTH_CHECK,
    type: EpluginSettingType.switch,
    defaultValue: true,
    isConfigurableFromSettings: true,
    options: {
      switch: {
        values: {
          disabled: { label: 'false', value: false },
          enabled: { label: 'true', value: true },
        },
      },
    },
    uiFormTransformChangedInputValue: function (
      value: boolean | string,
    ): boolean {
      return Boolean(value);
    },
    validateUIForm: function (value) {
      return this.validate(value);
    },
    validate: SettingsValidator.isBoolean,
  },
  'checks.template': {
    title: '인덱스 템플릿',
    description:
      '앱을 열 때 템플릿 헬스 체크를 활성화하거나 비활성화합니다.',
    store: {
      file: {
        configurableManaged: true,
      },
    },
    category: SettingCategory.HEALTH_CHECK,
    type: EpluginSettingType.switch,
    defaultValue: true,
    isConfigurableFromSettings: true,
    options: {
      switch: {
        values: {
          disabled: { label: 'false', value: false },
          enabled: { label: 'true', value: true },
        },
      },
    },
    uiFormTransformChangedInputValue: function (
      value: boolean | string,
    ): boolean {
      return Boolean(value);
    },
    validateUIForm: function (value) {
      return this.validate(value);
    },
    validate: SettingsValidator.isBoolean,
  },
  'checks.timeFilter': {
    title: '시간 필터를 24시간으로 설정',
    description:
      '플랫폼의 시간 필터(timeFilter) 설정 기본값을 변경합니다.',
    store: {
      file: {
        configurableManaged: true,
      },
    },
    category: SettingCategory.HEALTH_CHECK,
    type: EpluginSettingType.switch,
    defaultValue: true,
    isConfigurableFromSettings: true,
    options: {
      switch: {
        values: {
          disabled: { label: 'false', value: false },
          enabled: { label: 'true', value: true },
        },
      },
    },
    uiFormTransformChangedInputValue: function (
      value: boolean | string,
    ): boolean {
      return Boolean(value);
    },
    validateUIForm: function (value) {
      return this.validate(value);
    },
    validate: SettingsValidator.isBoolean,
  },
  'configuration.ui_api_editable': {
    title: '설정 UI 편집 가능 여부',
    description:
      'UI 또는 API 엔드포인트에서 설정을 편집할 수 있는지 여부를 지정합니다. 비활성화하면 설정 파일에서만 편집할 수 있으며, 관련 API 엔드포인트가 비활성화되고 UI에서 접근할 수 없습니다.',
    store: {
      file: {
        configurableManaged: false,
      },
    },
    category: SettingCategory.GENERAL,
    type: EpluginSettingType.switch,
    defaultValue: true,
    isConfigurableFromSettings: false,
    requiresRestartingPluginPlatform: true,
    options: {
      switch: {
        values: {
          disabled: { label: 'false', value: false },
          enabled: { label: 'true', value: true },
        },
      },
    },
    uiFormTransformChangedInputValue: function (
      value: boolean | string,
    ): boolean {
      return Boolean(value);
    },
    validateUIForm: function (value) {
      return this.validate(value);
    },
    validate: SettingsValidator.isBoolean,
  },
  'cron.prefix': {
    title: 'Cron 접두사',
    description: '사전 정의된 작업의 인덱스 접두사를 정의합니다.',
    store: {
      file: {
        configurableManaged: true,
      },
    },
    category: SettingCategory.GENERAL,
    type: EpluginSettingType.text,
    defaultValue: WAZUH_STATISTICS_DEFAULT_PREFIX,
    // Wazuh: hidden from the App Settings UI. The value/default is still used internally
    // (cron-scheduler index prefix) and can still be set via the configuration file.
    isConfigurableFromSettings: false,
    validateUIForm: function (value) {
      return this.validate(value);
    },
    // Validation: https://github.com/elastic/elasticsearch/blob/v7.10.2/docs/reference/indices/create-index.asciidoc
    validate: SettingsValidator.compose(
      SettingsValidator.isString,
      SettingsValidator.isNotEmptyString,
      SettingsValidator.hasNoSpaces,
      SettingsValidator.noStartsWithString('-', '_', '+', '.'),
      SettingsValidator.hasNotInvalidCharacters(
        '\\',
        '/',
        '?',
        '"',
        '<',
        '>',
        '|',
        ',',
        '#',
        '*',
      ),
    ),
  },
  'cron.statistics.apis': {
    title: '포함할 API',
    description:
      '데이터를 저장할 호스트의 ID를 입력하세요. 비워두면 모든 호스트에서 작업이 실행됩니다.',
    store: {
      file: {
        configurableManaged: true,
      },
    },
    category: SettingCategory.STATISTICS,
    type: EpluginSettingType.editor,
    defaultValue: [],
    isConfigurableFromSettings: true,
    options: {
      editor: {
        language: 'json',
      },
    },
    uiFormTransformConfigurationValueToInputValue: function (value: any): any {
      return JSON.stringify(value);
    },
    uiFormTransformInputValueToConfigurationValue: function (
      value: string,
    ): any {
      try {
        return JSON.parse(value);
      } catch (error) {
        return value;
      }
    },
    validateUIForm: function (value) {
      return SettingsValidator.json(this.validate)(value);
    },
    validate: SettingsValidator.compose(
      SettingsValidator.array(
        SettingsValidator.compose(
          SettingsValidator.isString,
          SettingsValidator.isNotEmptyString,
          SettingsValidator.hasNoSpaces,
        ),
      ),
    ),
  },
  'cron.statistics.index.creation': {
    title: '인덱스 생성 주기',
    description: '새 인덱스가 생성되는 주기를 정의합니다.',
    store: {
      file: {
        configurableManaged: true,
      },
    },
    category: SettingCategory.STATISTICS,
    type: EpluginSettingType.select,
    options: {
      select: [
        {
          text: '매시간',
          value: 'h',
        },
        {
          text: '매일',
          value: 'd',
        },
        {
          text: '매주',
          value: 'w',
        },
        {
          text: '매월',
          value: 'm',
        },
      ],
    },
    defaultValue: WAZUH_STATISTICS_DEFAULT_CREATION,
    isConfigurableFromSettings: true,
    requiresRunningHealthCheck: true,
    validateUIForm: function (value) {
      return this.validate(value);
    },
    validate: function (value) {
      return SettingsValidator.literal(
        this.options.select.map(({ value }) => value),
      )(value);
    },
  },
  'cron.statistics.index.name': {
    title: '인덱스 이름',
    description:
      '문서가 저장될 인덱스의 이름을 정의합니다.',
    store: {
      file: {
        configurableManaged: true,
      },
    },
    category: SettingCategory.STATISTICS,
    type: EpluginSettingType.text,
    defaultValue: WAZUH_STATISTICS_DEFAULT_NAME,
    isConfigurableFromSettings: true,
    requiresRunningHealthCheck: true,
    validateUIForm: function (value) {
      return this.validate(value);
    },
    // Validation: https://github.com/elastic/elasticsearch/blob/v7.10.2/docs/reference/indices/create-index.asciidoc
    validate: SettingsValidator.compose(
      SettingsValidator.isString,
      SettingsValidator.isNotEmptyString,
      SettingsValidator.hasNoSpaces,
      SettingsValidator.noStartsWithString('-', '_', '+', '.'),
      SettingsValidator.hasNotInvalidCharacters(
        '\\',
        '/',
        '?',
        '"',
        '<',
        '>',
        '|',
        ',',
        '#',
        '*',
      ),
    ),
  },
  'cron.statistics.index.replicas': {
    title: '인덱스 복제본 수',
    description:
      '통계 인덱스에 사용할 복제본 수를 정의합니다.',
    store: {
      file: {
        configurableManaged: true,
      },
    },
    category: SettingCategory.STATISTICS,
    type: EpluginSettingType.number,
    defaultValue: WAZUH_STATISTICS_DEFAULT_INDICES_REPLICAS,
    isConfigurableFromSettings: true,
    requiresRunningHealthCheck: true,
    options: {
      number: {
        min: 0,
        integer: true,
      },
    },
    uiFormTransformConfigurationValueToInputValue: function (
      value: number,
    ): string {
      return String(value);
    },
    uiFormTransformInputValueToConfigurationValue: function (
      value: string,
    ): number {
      return Number(value);
    },
    validateUIForm: function (value) {
      return this.validate(
        this.uiFormTransformInputValueToConfigurationValue(value),
      );
    },
    validate: function (value) {
      return SettingsValidator.number(this.options.number)(value);
    },
  },
  'cron.statistics.index.shards': {
    title: '인덱스 샤드 수',
    description:
      '통계 인덱스에 사용할 샤드 수를 정의합니다.',
    store: {
      file: {
        configurableManaged: true,
      },
    },
    category: SettingCategory.STATISTICS,
    type: EpluginSettingType.number,
    defaultValue: WAZUH_STATISTICS_DEFAULT_INDICES_SHARDS,
    isConfigurableFromSettings: true,
    requiresRunningHealthCheck: true,
    options: {
      number: {
        min: 1,
        integer: true,
      },
    },
    uiFormTransformConfigurationValueToInputValue: function (value: number) {
      return String(value);
    },
    uiFormTransformInputValueToConfigurationValue: function (
      value: string,
    ): number {
      return Number(value);
    },
    validateUIForm: function (value) {
      return this.validate(
        this.uiFormTransformInputValueToConfigurationValue(value),
      );
    },
    validate: function (value) {
      return SettingsValidator.number(this.options.number)(value);
    },
  },
  'cron.statistics.interval': {
    title: '실행 주기',
    description:
      'cron 스케줄 표현식으로 작업 실행 빈도를 정의합니다.',
    store: {
      file: {
        configurableManaged: true,
      },
    },
    category: SettingCategory.STATISTICS,
    type: EpluginSettingType.text,
    defaultValue: WAZUH_STATISTICS_DEFAULT_CRON_FREQ,
    isConfigurableFromSettings: true,
    requiresRestartingPluginPlatform: true,
    // Workaround: this need to be defined in the frontend side and backend side because an optimization error in the frontend side related to some module can not be loaded.
    // validateUIForm: function (value) {
    // },
    // validate: function (value) {
    // },
  },
  'cron.statistics.status': {
    title: '상태',
    description: '통계 작업을 활성화하거나 비활성화합니다.',
    store: {
      file: {
        configurableManaged: true,
      },
    },
    category: SettingCategory.STATISTICS,
    type: EpluginSettingType.switch,
    defaultValue: WAZUH_STATISTICS_DEFAULT_STATUS,
    isConfigurableFromSettings: true,
    options: {
      switch: {
        values: {
          disabled: { label: 'false', value: false },
          enabled: { label: 'true', value: true },
        },
      },
    },
    uiFormTransformChangedInputValue: function (
      value: boolean | string,
    ): boolean {
      return Boolean(value);
    },
    validateUIForm: function (value) {
      return this.validate(value);
    },
    validate: SettingsValidator.isBoolean,
  },
  'customization.enabled': {
    title: '상태',
    description: '커스텀 브랜딩을 활성화하거나 비활성화합니다.',
    store: {
      file: {
        configurableManaged: true,
      },
    },
    category: SettingCategory.CUSTOMIZATION,
    type: EpluginSettingType.switch,
    defaultValue: true,
    isConfigurableFromSettings: true,
    requiresReloadingBrowserTab: true,
    options: {
      switch: {
        values: {
          disabled: { label: 'false', value: false },
          enabled: { label: 'true', value: true },
        },
      },
    },
    uiFormTransformChangedInputValue: function (
      value: boolean | string,
    ): boolean {
      return Boolean(value);
    },
    validateUIForm: function (value) {
      return this.validate(value);
    },
    validate: SettingsValidator.isBoolean,
  },
  'customization.logo.app': {
    title: '앱 메인 로고',
    description: `API 로그인 중 로딩 인디케이터로 사용되는 로고입니다.`,
    store: {
      file: {
        configurableManaged: true,
      },
    },
    category: SettingCategory.CUSTOMIZATION,
    type: EpluginSettingType.filepicker,
    defaultValue: '',
    isConfigurableFromSettings: true,
    options: {
      file: {
        type: 'image',
        extensions: ['.jpeg', '.jpg', '.png', '.svg'],
        size: {
          maxBytes:
            CUSTOMIZATION_ENDPOINT_PAYLOAD_UPLOAD_CUSTOM_FILE_MAXIMUM_BYTES,
        },
        recommended: {
          dimensions: {
            width: 300,
            height: 70,
            unit: 'px',
          },
        },
        store: {
          relativePathFileSystem: 'public/assets/custom/images',
          filename: 'customization.logo.app',
          resolveStaticURL: (filename: string) =>
            `custom/images/${filename}?v=${Date.now()}`,
          // ?v=${Date.now()} is used to force the browser to reload the image when a new file is uploaded
        },
      },
    },
    validateUIForm: function (value) {
      return SettingsValidator.compose(
        SettingsValidator.filePickerFileSize({
          ...this.options.file.size,
          meaningfulUnit: true,
        }),
        SettingsValidator.filePickerSupportedExtensions(
          this.options.file.extensions,
        ),
      )(value);
    },
  },
  'customization.logo.healthcheck': {
    title: '헬스 체크 로고',
    description: `앱의 헬스 체크 과정에서 표시되는 로고입니다.`,
    store: {
      file: {
        configurableManaged: true,
      },
    },
    category: SettingCategory.CUSTOMIZATION,
    type: EpluginSettingType.filepicker,
    defaultValue: '',
    isConfigurableFromSettings: true,
    options: {
      file: {
        type: 'image',
        extensions: ['.jpeg', '.jpg', '.png', '.svg'],
        size: {
          maxBytes:
            CUSTOMIZATION_ENDPOINT_PAYLOAD_UPLOAD_CUSTOM_FILE_MAXIMUM_BYTES,
        },
        recommended: {
          dimensions: {
            width: 300,
            height: 70,
            unit: 'px',
          },
        },
        store: {
          relativePathFileSystem: 'public/assets/custom/images',
          filename: 'customization.logo.healthcheck',
          resolveStaticURL: (filename: string) =>
            `custom/images/${filename}?v=${Date.now()}`,
          // ?v=${Date.now()} is used to force the browser to reload the image when a new file is uploaded
        },
      },
    },
    validateUIForm: function (value) {
      return SettingsValidator.compose(
        SettingsValidator.filePickerFileSize({
          ...this.options.file.size,
          meaningfulUnit: true,
        }),
        SettingsValidator.filePickerSupportedExtensions(
          this.options.file.extensions,
        ),
      )(value);
    },
  },
  'customization.logo.reports': {
    title: 'PDF 리포트 로고',
    description: `앱에서 생성하는 PDF 리포트에 사용되는 로고입니다. PDF의 모든 페이지 왼쪽 상단에 표시됩니다.`,
    store: {
      file: {
        configurableManaged: true,
      },
    },
    category: SettingCategory.CUSTOMIZATION,
    type: EpluginSettingType.filepicker,
    defaultValue: '',
    defaultValueIfNotSet: REPORTS_LOGO_IMAGE_ASSETS_RELATIVE_PATH,
    isConfigurableFromSettings: true,
    options: {
      file: {
        type: 'image',
        extensions: ['.jpeg', '.jpg', '.png'],
        size: {
          maxBytes:
            CUSTOMIZATION_ENDPOINT_PAYLOAD_UPLOAD_CUSTOM_FILE_MAXIMUM_BYTES,
        },
        recommended: {
          dimensions: {
            width: 190,
            height: 40,
            unit: 'px',
          },
        },
        store: {
          relativePathFileSystem: 'public/assets/custom/images',
          filename: 'customization.logo.reports',
          resolveStaticURL: (filename: string) => `custom/images/${filename}`,
        },
      },
    },
    validateUIForm: function (value) {
      return SettingsValidator.compose(
        SettingsValidator.filePickerFileSize({
          ...this.options.file.size,
          meaningfulUnit: true,
        }),
        SettingsValidator.filePickerSupportedExtensions(
          this.options.file.extensions,
        ),
      )(value);
    },
  },
  'customization.reports.footer': {
    title: '리포트 푸터',
    description: '리포트의 푸터를 설정합니다.',
    store: {
      file: {
        configurableManaged: true,
      },
    },
    category: SettingCategory.CUSTOMIZATION,
    type: EpluginSettingType.textarea,
    defaultValue: '',
    defaultValueIfNotSet: REPORTS_PAGE_FOOTER_TEXT,
    isConfigurableFromSettings: true,
    options: { maxRows: 2, maxLength: 50 },
    validateUIForm: function (value) {
      return this.validate(value);
    },
    validate: function (value) {
      return SettingsValidator.compose(
        SettingsValidator.isString,
        SettingsValidator.multipleLinesString({
          maxRows: this.options?.maxRows,
          maxLength: this.options?.maxLength,
        }),
      )(value);
    },
  },
  'customization.reports.header': {
    title: '리포트 헤더',
    description: '리포트의 헤더를 설정합니다.',
    store: {
      file: {
        configurableManaged: true,
      },
    },
    category: SettingCategory.CUSTOMIZATION,
    type: EpluginSettingType.textarea,
    defaultValue: '',
    defaultValueIfNotSet: REPORTS_PAGE_HEADER_TEXT,
    isConfigurableFromSettings: true,
    options: { maxRows: 3, maxLength: 40 },
    validateUIForm: function (value) {
      return this.validate(value);
    },
    validate: function (value) {
      return SettingsValidator.compose(
        SettingsValidator.isString,
        SettingsValidator.multipleLinesString({
          maxRows: this.options?.maxRows,
          maxLength: this.options?.maxLength,
        }),
      )(value);
    },
  },
  'enrollment.dns': {
    title: '등록(Enrollment) DNS',
    description:
      '에이전트 등록에 사용되는 등록 서버를 지정합니다.',
    store: {
      file: {
        configurableManaged: true,
      },
    },
    category: SettingCategory.GENERAL,
    type: EpluginSettingType.text,
    defaultValue: '',
    isConfigurableFromSettings: true,
    validateUIForm: function (value) {
      return this.validate(value);
    },
    validate: SettingsValidator.compose(
      SettingsValidator.isString,
      SettingsValidator.serverAddressHostnameFQDNIPv4IPv6,
    ),
  },
  hideManagerAlerts: {
    title: '매니저 알럿 숨김',
    description: '모든 대시보드에서 매니저의 알럿을 숨깁니다.',
    store: {
      file: {
        configurableManaged: true,
      },
    },
    category: SettingCategory.GENERAL,
    type: EpluginSettingType.switch,
    defaultValue: false,
    isConfigurableFromSettings: true,
    requiresReloadingBrowserTab: true,
    options: {
      switch: {
        values: {
          disabled: { label: 'false', value: false },
          enabled: { label: 'true', value: true },
        },
      },
    },
    uiFormTransformChangedInputValue: function (
      value: boolean | string,
    ): boolean {
      return Boolean(value);
    },
    validateUIForm: function (value) {
      return this.validate(value);
    },
    validate: SettingsValidator.isBoolean,
  },
  hosts: {
    title: '서버 호스트',
    description: 'API 연결을 설정합니다.',
    category: SettingCategory.API_CONNECTION,
    type: EpluginSettingType.arrayOf,
    defaultValue: [],
    store: {
      file: {
        configurableManaged: false,
        defaultBlock: `# The following configuration is the default structure to define a host.
#
# hosts:
#   # Host ID / name,
#   - env-1:
#       # Host URL
#       url: https://env-1.example
#       # Host / API port
#       port: 55000
#       # Host / API username
#       username: wazuh-wui
#       # Host / API password
#       password: wazuh-wui
#       # Use RBAC or not. If set to true, the username must be "wazuh-wui".
#       run_as: true
#   - env-2:
#       url: https://env-2.example
#       port: 55000
#       username: wazuh-wui
#       password: wazuh-wui
#       run_as: true

hosts:
  - default:
      url: https://localhost
      port: 55000
      username: wazuh-wui
      password: wazuh-wui
      run_as: true`,
        transformFrom: value => {
          return value.map(hostData => {
            const key = Object.keys(hostData)?.[0];
            return { ...hostData[key], id: key };
          });
        },
      },
    },
    options: {
      arrayOf: {
        id: {
          title: '식별자',
          description: 'API 연결의 식별자입니다. 고유한 값이어야 합니다.',
          type: EpluginSettingType.text,
          defaultValue: 'default',
          isConfigurableFromSettings: true,
          validateUIForm: function (value) {
            return this.validate(value);
          },
          validate: SettingsValidator.compose(
            SettingsValidator.isString,
            SettingsValidator.isNotEmptyString,
          ),
        },
        url: {
          title: 'URL',
          description: '서버 URL 주소',
          type: EpluginSettingType.text,
          defaultValue: 'https://localhost',
          isConfigurableFromSettings: true,
          validateUIForm: function (value) {
            return this.validate(value);
          },
          validate: SettingsValidator.compose(
            SettingsValidator.isString,
            SettingsValidator.isNotEmptyString,
          ),
        },
        port: {
          title: '포트',
          description: '포트',
          type: EpluginSettingType.number,
          defaultValue: 55000,
          isConfigurableFromSettings: true,
          options: {
            number: {
              min: 0,
              max: 65535,
              integer: true,
            },
          },
          uiFormTransformConfigurationValueToInputValue: function (
            value: number,
          ) {
            return String(value);
          },
          uiFormTransformInputValueToConfigurationValue: function (
            value: string,
          ): number {
            return Number(value);
          },
          validateUIForm: function (value) {
            return this.validate(
              this.uiFormTransformInputValueToConfigurationValue(value),
            );
          },
          validate: function (value) {
            return SettingsValidator.number(this.options.number)(value);
          },
        },
        username: {
          title: '사용자명',
          description: '서버 API 사용자명',
          type: EpluginSettingType.text,
          defaultValue: 'wazuh-wui',
          isConfigurableFromSettings: true,
          validateUIForm: function (value) {
            return this.validate(value);
          },
          validate: SettingsValidator.compose(
            SettingsValidator.isString,
            SettingsValidator.isNotEmptyString,
          ),
        },
        password: {
          title: '비밀번호',
          description: '사용자 비밀번호',
          type: EpluginSettingType.password,
          defaultValue: 'wazuh-wui',
          isConfigurableFromSettings: true,
          validateUIForm: function (value) {
            return this.validate(value);
          },
          validate: SettingsValidator.compose(
            SettingsValidator.isString,
            SettingsValidator.isNotEmptyString,
          ),
        },
        run_as: {
          title: 'Run as',
          description: '인증 컨텍스트를 사용합니다.',
          type: EpluginSettingType.switch,
          defaultValue: true,
          isConfigurableFromSettings: true,
          options: {
            switch: {
              values: {
                disabled: { label: 'false', value: false },
                enabled: { label: 'true', value: true },
              },
            },
          },
          uiFormTransformChangedInputValue: function (
            value: boolean | string,
          ): boolean {
            return Boolean(value);
          },
          validateUIForm: function (value) {
            return this.validate(value);
          },
          validate: SettingsValidator.isBoolean,
        },
      },
    },
    isConfigurableFromSettings: false,
    uiFormTransformChangedInputValue: function (
      value: boolean | string,
    ): boolean {
      return Boolean(value);
    },
    // TODO: add validation
    // validate: SettingsValidator.isBoolean,
    // validate: function (schema) {
    //   return schema.boolean();
    // },
  },
  'ip.ignore': {
    title: '인덱스 패턴 제외',
    description:
      '인덱스 패턴 선택기에서 특정 인덱스 패턴 이름을 사용할 수 없도록 합니다.',
    store: {
      file: {
        configurableManaged: true,
      },
    },
    category: SettingCategory.GENERAL,
    type: EpluginSettingType.editor,
    defaultValue: [],
    isConfigurableFromSettings: true,
    options: {
      editor: {
        language: 'json',
      },
    },
    uiFormTransformConfigurationValueToInputValue: function (value: any): any {
      return JSON.stringify(value);
    },
    uiFormTransformInputValueToConfigurationValue: function (
      value: string,
    ): any {
      try {
        return JSON.parse(value);
      } catch (error) {
        return value;
      }
    },
    // Validation: https://github.com/elastic/elasticsearch/blob/v7.10.2/docs/reference/indices/create-index.asciidoc
    validateUIForm: function (value) {
      return SettingsValidator.json(this.validate)(value);
    },
    validate: SettingsValidator.compose(
      SettingsValidator.array(
        SettingsValidator.compose(
          SettingsValidator.isString,
          SettingsValidator.isNotEmptyString,
          SettingsValidator.hasNoSpaces,
          SettingsValidator.noLiteralString('.', '..'),
          SettingsValidator.noStartsWithString('-', '_', '+', '.'),
          SettingsValidator.hasNotInvalidCharacters(
            '\\',
            '/',
            '?',
            '"',
            '<',
            '>',
            '|',
            ',',
            '#',
          ),
        ),
      ),
    ),
  },
  'ip.selector': {
    title: 'IP 선택기',
    description:
      '상단 메뉴 바에서 선택된 인덱스 패턴을 사용자가 직접 변경할 수 있는지 여부를 정의합니다.',
    store: {
      file: {
        configurableManaged: true,
      },
    },
    category: SettingCategory.GENERAL,
    type: EpluginSettingType.switch,
    defaultValue: true,
    isConfigurableFromSettings: true,
    options: {
      switch: {
        values: {
          disabled: { label: 'false', value: false },
          enabled: { label: 'true', value: true },
        },
      },
    },
    uiFormTransformChangedInputValue: function (
      value: boolean | string,
    ): boolean {
      return Boolean(value);
    },
    validateUIForm: function (value) {
      return this.validate(value);
    },
    validate: SettingsValidator.isBoolean,
  },
  'wazuh.updates.disabled': {
    title: '업데이트 확인',
    description: '업데이트 확인 서비스의 비활성화 여부를 정의합니다.',
    category: SettingCategory.GENERAL,
    type: EpluginSettingType.switch,
    defaultValue: true,
    store: {
      file: {
        configurableManaged: true,
      },
    },
    isConfigurableFromSettings: true,
    options: {
      switch: {
        values: {
          disabled: { label: 'false', value: false },
          enabled: { label: 'true', value: true },
        },
      },
    },
    uiFormTransformChangedInputValue: function (
      value: boolean | string,
    ): boolean {
      return Boolean(value);
    },
    validate: SettingsValidator.isBoolean,
  },
  pattern: {
    title: '인덱스 패턴',
    store: {
      file: {
        configurableManaged: true,
      },
    },
    description:
      '앱에서 사용할 기본 인덱스 패턴입니다. 유효한 인덱스 패턴이 없으면 이 옵션에 지정된 이름으로 앱이 자동으로 생성합니다.',
    category: SettingCategory.GENERAL,
    type: EpluginSettingType.text,
    defaultValue: WAZUH_ALERTS_PATTERN,
    isConfigurableFromSettings: true,
    requiresRunningHealthCheck: true,
    // Wazuh: hide the "wazuh-" branding prefix in the App Settings UI while still
    // storing/using the real "wazuh-"-prefixed value internally (index pattern
    // creation/matching keeps working exactly as before).
    uiFormTransformConfigurationValueToInputValue: function (value: string) {
      return typeof value === 'string' ? value.replace(/^wazuh-/, '') : value;
    },
    uiFormTransformInputValueToConfigurationValue: function (value: string) {
      return typeof value === 'string' && !value.startsWith('wazuh-')
        ? `wazuh-${value}`
        : value;
    },
    // Validation: https://github.com/elastic/elasticsearch/blob/v7.10.2/docs/reference/indices/create-index.asciidoc
    validateUIForm: function (value) {
      return this.validate(this.uiFormTransformInputValueToConfigurationValue(value));
    },
    validate: SettingsValidator.compose(
      SettingsValidator.isString,
      SettingsValidator.isNotEmptyString,
      SettingsValidator.hasNoSpaces,
      SettingsValidator.noLiteralString('.', '..'),
      SettingsValidator.noStartsWithString('-', '_', '+', '.'),
      SettingsValidator.hasNotInvalidCharacters(
        '\\',
        '/',
        '?',
        '"',
        '<',
        '>',
        '|',
        ',',
        '#',
      ),
    ),
  },
  timeout: {
    title: '요청 타임아웃',
    store: {
      file: {
        configurableManaged: true,
      },
    },
    description:
      '앱이 API 응답을 기다리는 최대 시간(밀리초)입니다. 값이 1500밀리초 미만이면 무시됩니다.',
    category: SettingCategory.GENERAL,
    type: EpluginSettingType.number,
    defaultValue: 20000,
    isConfigurableFromSettings: true,
    options: {
      number: {
        min: 1500,
        integer: true,
      },
    },
    uiFormTransformConfigurationValueToInputValue: function (value: number) {
      return String(value);
    },
    uiFormTransformInputValueToConfigurationValue: function (
      value: string,
    ): number {
      return Number(value);
    },
    validateUIForm: function (value) {
      return this.validate(
        this.uiFormTransformInputValueToConfigurationValue(value),
      );
    },
    validate: function (value) {
      return SettingsValidator.number(this.options.number)(value);
    },
  },
  'reports.csv.maxRows': {
    title: 'CSV 리포트 최대 행 수',
    store: {
      file: {
        configurableManaged: true,
      },
    },
    description:
      'CSV 리포트에 포함될 최대 행 수입니다. 행 수가 이 값을 초과하면 리포트가 잘립니다. 값을 너무 높게 설정하면 리포트 생성 과정이 불안정해질 수 있습니다.',
    category: SettingCategory.GENERAL,
    type: EpluginSettingType.number,
    defaultValue: 10000,
    isConfigurableFromSettings: true,
    options: {
      number: {
        integer: true,
      },
    },
    uiFormTransformConfigurationValueToInputValue: function (value: number) {
      return String(value);
    },
    uiFormTransformInputValueToConfigurationValue: function (
      value: string,
    ): number {
      return Number(value);
    },
    validateUIForm: function (value) {
      return this.validate(
        this.uiFormTransformInputValueToConfigurationValue(value),
      );
    },
    validate: function (value) {
      return SettingsValidator.number(this.options.number)(value);
    },
  },
  'wazuh.monitoring.creation': {
    title: '인덱스 생성 주기',
    description:
      '새 모니터링 인덱스가 생성되는 주기를 정의합니다.',
    store: {
      file: {
        configurableManaged: true,
      },
    },
    category: SettingCategory.MONITORING,
    type: EpluginSettingType.select,
    options: {
      select: [
        {
          text: '매시간',
          value: 'h',
        },
        {
          text: '매일',
          value: 'd',
        },
        {
          text: '매주',
          value: 'w',
        },
        {
          text: '매월',
          value: 'm',
        },
      ],
    },
    defaultValue: WAZUH_MONITORING_DEFAULT_CREATION,
    isConfigurableFromSettings: true,
    requiresRunningHealthCheck: true,
    validateUIForm: function (value) {
      return this.validate(value);
    },
    validate: function (value) {
      return SettingsValidator.literal(
        this.options.select.map(({ value }) => value),
      )(value);
    },
  },
  'wazuh.monitoring.enabled': {
    title: '상태',
    description:
      '모니터링 인덱스 생성 및/또는 시각화를 활성화하거나 비활성화합니다.',
    store: {
      file: {
        configurableManaged: true,
      },
    },
    category: SettingCategory.MONITORING,
    type: EpluginSettingType.switch,
    defaultValue: WAZUH_MONITORING_DEFAULT_ENABLED,
    isConfigurableFromSettings: true,
    requiresRestartingPluginPlatform: true,
    options: {
      switch: {
        values: {
          disabled: { label: 'false', value: false },
          enabled: { label: 'true', value: true },
        },
      },
    },
    uiFormTransformChangedInputValue: function (
      value: boolean | string,
    ): boolean {
      return Boolean(value);
    },
    validateUIForm: function (value) {
      return this.validate(value);
    },
    validate: SettingsValidator.isBoolean,
  },
  'wazuh.monitoring.frequency': {
    title: '주기',
    description:
      '에이전트 상태를 조회해 모니터링 인덱스에 새 문서로 기록하는 API 요청 주기(초)입니다.',
    store: {
      file: {
        configurableManaged: true,
      },
    },
    category: SettingCategory.MONITORING,
    type: EpluginSettingType.number,
    defaultValue: WAZUH_MONITORING_DEFAULT_FREQUENCY,
    isConfigurableFromSettings: true,
    requiresRestartingPluginPlatform: true,
    options: {
      number: {
        min: 60,
        integer: true,
      },
    },
    uiFormTransformConfigurationValueToInputValue: function (value: number) {
      return String(value);
    },
    uiFormTransformInputValueToConfigurationValue: function (
      value: string,
    ): number {
      return Number(value);
    },
    validateUIForm: function (value) {
      return this.validate(
        this.uiFormTransformInputValueToConfigurationValue(value),
      );
    },
    validate: function (value) {
      return SettingsValidator.number(this.options.number)(value);
    },
  },
  'wazuh.monitoring.pattern': {
    title: '인덱스 패턴',
    description: '모니터링에 사용할 기본 인덱스 패턴입니다.',
    store: {
      file: {
        configurableManaged: true,
      },
    },
    category: SettingCategory.MONITORING,
    type: EpluginSettingType.text,
    defaultValue: WAZUH_MONITORING_PATTERN,
    isConfigurableFromSettings: true,
    requiresRunningHealthCheck: true,
    // Wazuh: hide the "wazuh-" branding prefix in the App Settings UI while still
    // storing/using the real "wazuh-"-prefixed value internally (index pattern
    // creation/matching keeps working exactly as before).
    uiFormTransformConfigurationValueToInputValue: function (value: string) {
      return typeof value === 'string' ? value.replace(/^wazuh-/, '') : value;
    },
    uiFormTransformInputValueToConfigurationValue: function (value: string) {
      return typeof value === 'string' && !value.startsWith('wazuh-')
        ? `wazuh-${value}`
        : value;
    },
    validateUIForm: function (value) {
      return this.validate(this.uiFormTransformInputValueToConfigurationValue(value));
    },
    validate: SettingsValidator.compose(
      SettingsValidator.isString,
      SettingsValidator.isNotEmptyString,
      SettingsValidator.hasNoSpaces,
      SettingsValidator.noLiteralString('.', '..'),
      SettingsValidator.noStartsWithString('-', '_', '+', '.'),
      SettingsValidator.hasNotInvalidCharacters(
        '\\',
        '/',
        '?',
        '"',
        '<',
        '>',
        '|',
        ',',
        '#',
      ),
    ),
  },
  'wazuh.monitoring.replicas': {
    title: '인덱스 복제본 수',
    description:
      '모니터링 인덱스에 사용할 복제본 수를 정의합니다.',
    store: {
      file: {
        configurableManaged: true,
      },
    },
    category: SettingCategory.MONITORING,
    type: EpluginSettingType.number,
    defaultValue: WAZUH_MONITORING_DEFAULT_INDICES_REPLICAS,
    isConfigurableFromSettings: true,
    requiresRunningHealthCheck: true,
    options: {
      number: {
        min: 0,
        integer: true,
      },
    },
    uiFormTransformConfigurationValueToInputValue: function (value: number) {
      return String(value);
    },
    uiFormTransformInputValueToConfigurationValue: function (
      value: string,
    ): number {
      return Number(value);
    },
    validateUIForm: function (value) {
      return this.validate(
        this.uiFormTransformInputValueToConfigurationValue(value),
      );
    },
    validate: function (value) {
      return SettingsValidator.number(this.options.number)(value);
    },
  },
  'wazuh.monitoring.shards': {
    title: '인덱스 샤드 수',
    description:
      '모니터링 인덱스에 사용할 샤드 수를 정의합니다.',
    store: {
      file: {
        configurableManaged: true,
      },
    },
    category: SettingCategory.MONITORING,
    type: EpluginSettingType.number,
    defaultValue: WAZUH_MONITORING_DEFAULT_INDICES_SHARDS,
    isConfigurableFromSettings: true,
    requiresRunningHealthCheck: true,
    options: {
      number: {
        min: 1,
        integer: true,
      },
    },
    uiFormTransformConfigurationValueToInputValue: function (value: number) {
      return String(value);
    },
    uiFormTransformInputValueToConfigurationValue: function (
      value: string,
    ): number {
      return Number(value);
    },
    validateUIForm: function (value) {
      return this.validate(
        this.uiFormTransformInputValueToConfigurationValue(value),
      );
    },
    validate: function (value) {
      return SettingsValidator.number(this.options.number)(value);
    },
  },
};

export type TPluginSettingKey = keyof typeof PLUGIN_SETTINGS;

export enum HTTP_STATUS_CODES {
  CONTINUE = 100,
  SWITCHING_PROTOCOLS = 101,
  PROCESSING = 102,
  OK = 200,
  CREATED = 201,
  ACCEPTED = 202,
  NON_AUTHORITATIVE_INFORMATION = 203,
  NO_CONTENT = 204,
  RESET_CONTENT = 205,
  PARTIAL_CONTENT = 206,
  MULTI_STATUS = 207,
  MULTIPLE_CHOICES = 300,
  MOVED_PERMANENTLY = 301,
  MOVED_TEMPORARILY = 302,
  SEE_OTHER = 303,
  NOT_MODIFIED = 304,
  USE_PROXY = 305,
  TEMPORARY_REDIRECT = 307,
  PERMANENT_REDIRECT = 308,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  PAYMENT_REQUIRED = 402,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  METHOD_NOT_ALLOWED = 405,
  NOT_ACCEPTABLE = 406,
  PROXY_AUTHENTICATION_REQUIRED = 407,
  REQUEST_TIMEOUT = 408,
  CONFLICT = 409,
  GONE = 410,
  LENGTH_REQUIRED = 411,
  PRECONDITION_FAILED = 412,
  REQUEST_TOO_LONG = 413,
  REQUEST_URI_TOO_LONG = 414,
  UNSUPPORTED_MEDIA_TYPE = 415,
  REQUESTED_RANGE_NOT_SATISFIABLE = 416,
  EXPECTATION_FAILED = 417,
  IM_A_TEAPOT = 418,
  INSUFFICIENT_SPACE_ON_RESOURCE = 419,
  METHOD_FAILURE = 420,
  MISDIRECTED_REQUEST = 421,
  UNPROCESSABLE_ENTITY = 422,
  LOCKED = 423,
  FAILED_DEPENDENCY = 424,
  PRECONDITION_REQUIRED = 428,
  TOO_MANY_REQUESTS = 429,
  REQUEST_HEADER_FIELDS_TOO_LARGE = 431,
  UNAVAILABLE_FOR_LEGAL_REASONS = 451,
  INTERNAL_SERVER_ERROR = 500,
  NOT_IMPLEMENTED = 501,
  BAD_GATEWAY = 502,
  SERVICE_UNAVAILABLE = 503,
  GATEWAY_TIMEOUT = 504,
  HTTP_VERSION_NOT_SUPPORTED = 505,
  INSUFFICIENT_STORAGE = 507,
  NETWORK_AUTHENTICATION_REQUIRED = 511,
}

// Module Security configuration assessment
export const MODULE_SCA_CHECK_RESULT_LABEL = {
  passed: 'Passed',
  failed: 'Failed',
  'not applicable': 'Not applicable',
};

// Search bar

// This limits the results in the API request
export const SEARCH_BAR_WQL_VALUE_SUGGESTIONS_COUNT = 30;
// This limits the suggestions for the token of type value displayed in the search bar
export const SEARCH_BAR_WQL_VALUE_SUGGESTIONS_DISPLAY_COUNT = 10;
/* Time in milliseconds to debounce the analysis of search bar. This mitigates some problems related
to changes running in parallel */
export const SEARCH_BAR_DEBOUNCE_UPDATE_TIME = 400;

// Plugin settings
export const WAZUH_CORE_ENCRYPTION_PASSWORD = 'secretencryptionkey!';

// Configuration backend service
export const WAZUH_CORE_CONFIGURATION_INSTANCE = 'wazuh-dashboard';
export const WAZUH_CORE_CONFIGURATION_CACHE_SECONDS = 10;

// API connection permissions
export const WAZUH_ROLE_ADMINISTRATOR_ID = 1;

// ID used to refer the createOsdUrlStateStorage state
export const OSD_URL_STATE_STORAGE_ID = 'state:storeInSessionStorage';
