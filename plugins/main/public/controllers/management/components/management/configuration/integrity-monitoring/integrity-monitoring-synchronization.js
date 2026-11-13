/*
 * Wazuh app - React component for show configuration of integrity monitoring - synchronization tab.
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
import WzNoConfig from '../util-components/no-config';
import { renderValueYesThenEnabled } from '../utils/utils';

const mainSettings = [
  {
    field: 'enabled',
    label: '동기화 상태',
    render: renderValueYesThenEnabled
  },
  {
    field: 'max_interval',
    label: '각 동기화 사이의 최대 간격(초 단위)'
  },
  { field: 'interval', label: '각 동기화 사이의 간격(초 단위)' },
  { field: 'response_timeout', label: '응답 제한 시간(초 단위)' },
  { field: 'queue_size', label: 'manager 응답의 큐 크기' },
  { field: 'max_eps', label: '최대 메시지 처리량' },
  { field: 'thread_pool', label: '스레드 수' },
];

class WzConfigurationIntegrityMonitoringSynchronization extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { currentConfig } = this.props;
    return (
      <Fragment>
        {currentConfig &&
        currentConfig['syscheck-syscheck'] &&
        currentConfig['syscheck-syscheck'].syscheck &&
        currentConfig['syscheck-syscheck'].syscheck.synchronization ? (
          <WzConfigurationSettingsHeader
            title="동기화"
            description="데이터베이스 동기화 설정"
          >
            <WzConfigurationSettingsGroup
              config={
                currentConfig['syscheck-syscheck'].syscheck.synchronization
              }
              items={mainSettings}
            />
          </WzConfigurationSettingsHeader>
        ) : (
          <WzNoConfig error="not-present" />
        )}
      </Fragment>
    );
  }
}

export default WzConfigurationIntegrityMonitoringSynchronization;
