/*
 * Wazuh app - React component for show configuration of policy monitoring - general tab.
 * Copyright (C) 2015-2022 Wazuh, Inc.
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * Find more information about this on the LICENSE file.
 */

import React, { Component, Fragment } from 'react';

import WzConfigurationSettingsHeader from '../util-components/configuration-settings-header';
import WzConfigurationSettingsGroup from '../util-components/configuration-settings-group';
import { isString, renderValueNoThenEnabled } from '../utils/utils';
import WzNoConfig from '../util-components/no-config';

const allSettings = [
  {
    field: 'disabled',
    label: '정책 모니터링 서비스 상태',
    render: renderValueNoThenEnabled
  },
  { field: 'base_directory', label: '기본 디렉터리' },
  { field: 'scanall', label: '전체 시스템 스캔' },
  { field: 'frequency', label: '스캔 실행 주기(초 단위)' },
  { field: 'check_dev', label: '/dev 경로 확인' },
  { field: 'check_files', label: '파일 확인' },
  { field: 'check_if', label: '네트워크 인터페이스 확인' },
  { field: 'check_pids', label: '프로세스 ID 확인' },
  { field: 'check_ports', label: '네트워크 포트 확인' },
  { field: 'check_sys', label: '비정상 시스템 객체 확인' },
  { field: 'check_trojans', label: '트로이 목마 확인' },
  { field: 'check_unixaudit', label: 'UNIX 감사 확인' },
  { field: 'check_winapps', label: 'Windows 앱 확인' },
  { field: 'check_winaudit', label: 'Windows 감사 확인' },
  { field: 'check_winmalware', label: 'Windows 멀웨어 확인' },
  { field: 'skip_nfs', label: 'CIFS/NFS 마운트 스캔 건너뛰기' },
  { field: 'rootkit_files', label: '루트킷 파일 데이터베이스 경로' },
  { field: 'rootkit_trojans', label: '루트킷 트로이 목마 데이터베이스 경로' },
  { field: 'windows_audit', label: 'Windows 감사 정의 파일 경로' },
  { field: 'windows_apps', label: 'Windows 애플리케이션 정의 파일 경로' },
  { field: 'windows_malware', label: 'Windows 멀웨어 정의 파일 경로' }
];

class WzConfigurationPolicyMonitoringGeneral extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { currentConfig } = this.props;
    return (
      <Fragment>
        {currentConfig['syscheck-rootcheck'] &&
          isString(currentConfig['syscheck-rootcheck']) && (
            <WzNoConfig
              error={currentConfig['syscheck-rootcheck']}
            />
          )}
        {currentConfig['syscheck-rootcheck'] &&
          !isString(currentConfig['syscheck-rootcheck']) &&
          !currentConfig['syscheck-rootcheck'].rootcheck && (
            <WzNoConfig error="not-present" />
          )}
        {((currentConfig['syscheck-rootcheck'] &&
          !isString(currentConfig['syscheck-rootcheck']) &&
          currentConfig['syscheck-rootcheck'].rootcheck) ||
          currentConfig['sca']) && (
          <WzConfigurationSettingsHeader
            title="전체 설정"
            description="rootcheck 데몬의 일반 설정"
          >
            <WzConfigurationSettingsGroup
              config={currentConfig['syscheck-rootcheck'].rootcheck}
              items={allSettings}
            />
          </WzConfigurationSettingsHeader>
        )}
      </Fragment>
    );
  }
}

export default WzConfigurationPolicyMonitoringGeneral;
