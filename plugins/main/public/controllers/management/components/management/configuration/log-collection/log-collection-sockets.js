/*
 * Wazuh app - React component for show configuration of log collection - sockets tab.
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
import WzConfigurationListSelector from '../util-components/configuration-settings-list-selector';
import {
  isString,
  isArray,
  renderValueOrDefault,
  renderValueOrNoValue,
} from '../utils/utils';
import { settingsListBuilder } from '../utils/builders';
import { LOGCOLLECTOR_SOCKET_PROP } from './types';

const mainSettings = [
  { field: 'name', label: '소켓 이름', render: renderValueOrNoValue },
  { field: 'location', label: '소켓 위치', render: renderValueOrNoValue },
  {
    field: 'mode',
    label: 'UNIX 소켓 프로토콜',
    render: renderValueOrDefault('udp'),
  },
  {
    field: 'prefix',
    label: '메시지 앞에 붙일 접두사',
    render: renderValueOrNoValue,
  },
];

class WzConfigurationLogCollectionSockets extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { currentConfig } = this.props;
    const items = isArray(currentConfig?.[LOGCOLLECTOR_SOCKET_PROP]?.target)
      ? settingsListBuilder(
          currentConfig[LOGCOLLECTOR_SOCKET_PROP].target,
          'name',
        )
      : isArray(currentConfig?.[LOGCOLLECTOR_SOCKET_PROP]?.socket)
      ? settingsListBuilder(
          currentConfig[LOGCOLLECTOR_SOCKET_PROP].socket,
          'name',
        )
      : [];
    return (
      <Fragment>
        {isString(currentConfig?.[LOGCOLLECTOR_SOCKET_PROP]) && (
          <WzNoConfig
            error={currentConfig[LOGCOLLECTOR_SOCKET_PROP]}
          />
        )}
        {!isString(currentConfig?.[LOGCOLLECTOR_SOCKET_PROP]) &&
        !items.length ? (
          <WzNoConfig error='not-present' />
        ) : null}
        {!isString(currentConfig?.[LOGCOLLECTOR_SOCKET_PROP]) &&
        items.length ? (
          <WzConfigurationSettingsHeader
            title='출력 소켓'
            description='로그 데이터를 전송할 사용자 지정 출력 정의'
          >
            <WzConfigurationListSelector
              items={items}
              settings={mainSettings}
            />
          </WzConfigurationSettingsHeader>
        ) : null}
      </Fragment>
    );
  }
}

export default WzConfigurationLogCollectionSockets;
