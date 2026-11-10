/*
 * Wazuh app - React component for show configuration of integrity monitoring - general tab.
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
import PropTypes from 'prop-types';

import WzConfigurationSettingsHeader from '../util-components/configuration-settings-header';
import WzSettingsGroup from '../util-components/configuration-settings-group';

import {
  renderValueOrDefault,
  renderValueOrNoValue,
  renderValueOrYes,
  renderValueOrNo,
  renderValueNoThenEnabled
} from '../utils/utils';

const mainSettings = [
  {
    field: 'disabled',
    label: '무결성 모니터링 상태',
    render: renderValueNoThenEnabled
  },
  {
    field: 'frequency',
    label: '무결성 스캔 실행 주기(초 단위)'
  },
  {
    field: 'scan_time',
    label: '무결성 스캔을 실행할 시각',
    render: renderValueOrNoValue
  },
  {
    field: 'scan_day',
    label: '무결성 스캔을 실행할 요일',
    render: renderValueOrNoValue
  },
  {
    field: 'auto_ignore',
    label: '너무 자주 변경되는 파일 무시',
    render: renderValueOrNo,
    when: 'manager'
  },
  {
    field: 'alert_new_files',
    label: '새 파일이 생성될 때 알림',
    render: renderValueOrNo,
    when: 'manager'
  },
  { field: 'scan_on_start', label: '시작 시 스캔' },
  { field: 'skip_nfs', label: 'CIFS/NFS 마운트 스캔 건너뛰기' },
  { field: 'skip_dev', label: '/dev 디렉터리 스캔 건너뛰기' },
  { field: 'skip_sys', label: '/sys 디렉터리 스캔 건너뛰기' },
  { field: 'skip_proc', label: '/proc 디렉터리 스캔 건너뛰기' },
  {
    field: 'remove_old_diff',
    label: '오래된 로컬 스냅샷 제거',
    render: renderValueOrYes
  },
  { field: 'restart_audit', label: 'Audit 데몬 재시작' },
  {
    field: 'windows_audit_interval',
    label: "디렉터리의 SACL을 확인하는 주기(초 단위)",
    render: renderValueOrDefault('300')
  },
  {
    field: 'prefilter_cmd',
    label: 'prelinking 방지 명령',
    render: renderValueOrNoValue
  },
  { field: 'max_eps', label: '최대 이벤트 보고 처리량' },
  { field: 'process_priority', label: '프로세스 우선순위' },
  { field: 'database', label: '데이터베이스 유형' }
];

const mainSettingsOfAgentOrManager = agent =>
  agent.id === '000'
    ? mainSettings
    : mainSettings.filter(setting => setting.when !== 'manager');

class WzConfigurationIntegrityMonitoringGeneral extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { currentConfig, agent } = this.props;
    return (
      <Fragment>
        <WzConfigurationSettingsHeader
          title="일반"
          description="아래 표시된 설정은 전역적으로 적용됩니다"
        >
          <WzSettingsGroup
            config={currentConfig['syscheck-syscheck'].syscheck}
            items={mainSettingsOfAgentOrManager(agent)}
          />
        </WzConfigurationSettingsHeader>
      </Fragment>
    );
  }
}

WzConfigurationIntegrityMonitoringGeneral.proptTypes = {
  agent: PropTypes.object
};

export default WzConfigurationIntegrityMonitoringGeneral;
