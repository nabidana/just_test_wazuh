/*
 * Wazuh app - React component for show configuration of client-buffer.
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

import { EuiBasicTable } from '@elastic/eui';

import WzNoConfig from '../util-components/no-config';
import WzConfigurationSettingsHeader from '../util-components/configuration-settings-header';
import WzConfigurationSettingsGroup from '../util-components/configuration-settings-group';
import {
  isString,
  renderValueOrDefault,
  renderValueOrNoValue,
} from '../utils/utils';
import withWzConfig from '../util-hocs/wz-config';
import { webDocumentationLink } from '../../../../../../../common/services/web_documentation';

const helpLinks = [
  {
    text: 'manager와의 연결 확인',
    href: webDocumentationLink(
      'user-manual/agent/agent-management/agent-connection.html#checking-connection-with-the-wazuh-manager',
    ),
  },
  {
    text: 'Client 참조',
    href: webDocumentationLink('user-manual/reference/ossec-conf/client.html'),
  },
];

const mainSettings = [
  { field: 'crypto_method', label: '통신 암호화에 사용되는 방식' },
  { field: 'remote_conf', label: '원격 구성 활성화됨' },
  {
    field: 'auto_restart',
    label:
      'manager로부터 유효한 구성을 수신하면 에이전트 자동 재시작',
  },
  {
    field: 'notify_time',
    label: '에이전트가 manager를 확인하는 간격(초 단위)',
  },
  {
    field: 'time-reconnect',
    label: '재연결을 시도하기 전 대기 시간(초 단위)',
  },
  { field: 'config-profile', label: '구성 프로파일' },
  {
    field: 'local_ip',
    label: '에이전트에 여러 네트워크 인터페이스가 있을 때 사용되는 IP 주소',
  },
];

const columns = [
  { field: 'address', name: '주소', render: renderValueOrNoValue },
  { field: 'port', name: '포트', render: renderValueOrDefault('1514') },
  { field: 'protocol', name: '프로토콜', render: renderValueOrDefault('udp') },
  {
    field: 'max_retries',
    name: '연결 최대 재시도 횟수',
    render: renderValueOrNoValue,
  },
  {
    field: 'retry_interval',
    name: '연결 재시도 간격',
    render: renderValueOrNoValue,
  },
];

class WzConfigurationClient extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { currentConfig } = this.props;
    return (
      <Fragment>
        {currentConfig['agent-client'] &&
          isString(currentConfig['agent-client']) && (
            <WzNoConfig
              error={currentConfig['agent-client']}
              help={helpLinks}
            />
          )}
        {currentConfig['agent-client'] &&
          !isString(currentConfig['agent-client']) && (
            <WzConfigurationSettingsHeader
              title='기본 설정'
              description='기본 manager-에이전트 통신 설정'
              help={helpLinks}
            >
              <WzConfigurationSettingsGroup
                config={currentConfig['agent-client'].client}
                items={mainSettings}
              />
              {currentConfig['agent-client'].client.server.length && (
                <Fragment>
                  <WzConfigurationSettingsHeader
                    title='서버 설정'
                    description='연결할 manager 목록'
                  />
                  <EuiBasicTable
                    items={currentConfig['agent-client'].client.server}
                    columns={columns}
                    tableLayout='auto'
                  />
                </Fragment>
              )}
            </WzConfigurationSettingsHeader>
          )}
      </Fragment>
    );
  }
}

const sections = [{ component: 'agent', configuration: 'client' }];

export default withWzConfig(sections)(WzConfigurationClient);
