/*
 * Wazuh app - React component for show configuration of inventory.
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

import WzNoConfig from '../util-components/no-config';
import WzConfigurationSettingsHeader from '../util-components/configuration-settings-header';
import WzConfigurationSettingsGroup from '../util-components/configuration-settings-group';
import withWzConfig from '../util-hocs/wz-config';
import { isString, renderValueNoThenEnabled } from '../utils/utils';
import { wodleBuilder } from '../utils/builders';

const mainSettings = [
  {
    field: 'disabled',
    label: 'Syscollector 통합 상태',
    render: renderValueNoThenEnabled,
  },
  { field: 'interval', label: '시스템 스캔 간격' },
  { field: 'scan-on-start', label: '시작 시 스캔' },
];

const scanSettings = [
  { field: 'hardware', label: '하드웨어 정보 스캔' },
  { field: 'processes', label: '현재 프로세스 스캔' },
  { field: 'os', label: '운영 체제 정보 스캔' },
  { field: 'packages', label: '설치된 패키지 스캔' },
  { field: 'network', label: '네트워크 인터페이스 스캔' },
  { field: 'ports', label: '수신 대기 중인 네트워크 포트 스캔' },
  { field: 'ports_all', label: '모든 네트워크 포트 스캔' },
  { field: 'groups', label: '그룹 스캔' },
  { field: 'users', label: '사용자 스캔' },
  { field: 'services', label: '서비스 스캔' },
  { field: 'browser_extensions', label: '브라우저 확장 프로그램 스캔' },
  { field: 'sync_max_eps', label: '최대 이벤트 보고 처리량' },
];

class WzConfigurationInventory extends Component {
  constructor(props) {
    super(props);
    this.wodleConfig = wodleBuilder(this.props.currentConfig, 'syscollector');
  }
  componentDidMount() {
    this.props.updateBadge(this.badgeEnabled());
  }
  badgeEnabled() {
    return (
      this.wodleConfig &&
      this.wodleConfig.syscollector &&
      this.wodleConfig.syscollector.disabled === 'no'
    );
  }
  render() {
    const { currentConfig } = this.props;
    return (
      <Fragment>
        {currentConfig['wmodules-wmodules'] &&
          isString(currentConfig['wmodules-wmodules']) && (
            <WzNoConfig
              error={currentConfig['wmodules-wmodules']}
            />
          )}
        {currentConfig &&
          !this.wodleConfig.syscollector &&
          !isString(currentConfig['wmodules-wmodules']) && (
            <WzNoConfig error='not-present' />
          )}
        {currentConfig && this.wodleConfig && this.wodleConfig.syscollector && (
          <WzConfigurationSettingsHeader
            title='기본 설정'
            description='모든 스캔에 적용되는 일반 설정'
          >
            <WzConfigurationSettingsGroup
              config={this.wodleConfig.syscollector}
              items={mainSettings}
            />
            <WzConfigurationSettingsGroup
              title='스캔 설정'
              description='수집할 특정 인벤토리 스캔'
              config={this.wodleConfig.syscollector}
              items={scanSettings}
            />
          </WzConfigurationSettingsHeader>
        )}
      </Fragment>
    );
  }
}

const sections = [{ component: 'wmodules', configuration: 'wmodules' }];

export default withWzConfig(sections)(WzConfigurationInventory);
