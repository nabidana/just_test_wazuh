/*
 * Wazuh app - React component for show configuration of global configuration - remote tab.
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

import { EuiBasicTable, EuiSpacer } from '@elastic/eui';

import WzConfigurationSettingsHeader from '../util-components/configuration-settings-header';
import WzNoConfig from '../util-components/no-config';
import {
  isString,
  renderValueOrNoValue,
  renderValueOrDefault,
} from '../utils/utils';

const renderAllowedDeniedIPs = (items, label) => {
  if (items) {
    return (
      <ul>
        {items.map((item, key) => (
          <li key={`remote-${label}-${key}`}>{item}</li>
        ))}
      </ul>
    );
  } else {
    return '-';
  }
};

class WzConfigurationGlobalConfigurationRemote extends Component {
  constructor(props) {
    super(props);
    this.columns = [
      { field: 'connection', name: '연결', render: renderValueOrNoValue },
      { field: 'port', name: '포트', render: renderValueOrNoValue },
      {
        field: 'protocol',
        name: '프로토콜',
        render: renderValueOrDefault('udp'),
      },
      { field: 'ipv6', name: 'IPv6', render: renderValueOrNoValue },
      {
        field: 'allowed-ips',
        name: '허용된 IP 주소',
        render: item => renderAllowedDeniedIPs(item, 'allowed'),
      },
      {
        field: 'denied-ips',
        name: '거부된 IP 주소',
        render: item => renderAllowedDeniedIPs(item, 'denied'),
      },
      {
        field: 'local_ip',
        name: '로컬 IP 주소',
        render: renderValueOrDefault('All interfaces'),
      },
      {
        field: 'queue_size',
        name: '큐 크기',
        render: renderValueOrDefault('16384'),
      },
    ];
  }
  render() {
    const { currentConfig } = this.props;
    return (
      <Fragment>
        {currentConfig['request-remote'] &&
          isString(currentConfig['request-remote']) && (
            <WzNoConfig
              error={currentConfig['request-remote']}
            />
          )}
        {currentConfig['request-remote'] &&
          !isString(currentConfig['request-remote']) &&
          !currentConfig['request-remote'].remote && (
            <WzNoConfig error='not-present' />
          )}
        {currentConfig['request-remote'] &&
          currentConfig['request-remote'].remote && (
            <WzConfigurationSettingsHeader
              title='Remote 설정'
              description='에이전트 또는 syslog 클라이언트로부터 이벤트를 수신하기 위한 구성'
            >
              <EuiSpacer size='s' />
              <EuiBasicTable
                columns={this.columns}
                items={currentConfig['request-remote'].remote}
                tableLayout='auto'
              />
            </WzConfigurationSettingsHeader>
          )}
      </Fragment>
    );
  }
}

export default WzConfigurationGlobalConfigurationRemote;
