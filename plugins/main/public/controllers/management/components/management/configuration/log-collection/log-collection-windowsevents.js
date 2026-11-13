/*
 * Wazuh app - React component for show configuration of log collection - commands tab.
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
import { renderValueOrNoValue, isString } from '../utils/utils';
import { settingsListBuilder } from '../utils/builders';
import { LOGCOLLECTOR_LOCALFILE_PROP, LOCALFILE_WINDOWSEVENT_PROP } from './types';

/**
 *  Return input label based on logformat value
 *
 * @param {*} value => field value
 * @param {*} item => settings item
 * @param {*} config => all log data
 * @returns string => value to show in Channel label
 */
const channelLabel = (value, item, config) => {
  return config.logformat === 'eventlog'
    ? '로그'
    : config.logformat === 'eventchannel'
    ? '채널'
    : '채널';
};

/**
 *
 * @param {*} data => all log data
 * @returns string => value to show in query input
 */
const queryValue = (data) => {
  return typeof data === 'undefined' ? '-' : typeof data === 'object' ? data.value : data;
};

/**
 * Returns targets array parsed in one string
 * @param {*} item
 * @returns string => target
 */
const renderTargetField = (item) => (item ? item.join(', ') : 'agent');
/**
 * Return panels title
 * @param {*} item => log data
 * @returns
 */
const panelsLabel = (item) =>
  !item.channel
    ? `${item.logformat} - ${renderTargetField(item.target)}`
    : `${item.channel} (${item.logformat})`;

const mainSettings = [
  { field: 'logformat', label: '로그 형식' },
  { field: 'channel', label: '채널', render: renderValueOrNoValue, renderLabel: channelLabel },
  { field: 'query', label: '쿼리', render: queryValue },
  {
    field: 'only-future-events',
    label: '이후 이벤트만',
    render: renderValueOrNoValue,
  },
  {
    field: 'reconnect_time',
    label: '재연결 시간',
    render: renderValueOrNoValue,
  },
];

class WzConfigurationLogCollectionWindowsEvents extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { currentConfig } = this.props;
    const items = currentConfig?.[LOGCOLLECTOR_LOCALFILE_PROP]?.[LOCALFILE_WINDOWSEVENT_PROP]
      ? settingsListBuilder(
          currentConfig[LOGCOLLECTOR_LOCALFILE_PROP][LOCALFILE_WINDOWSEVENT_PROP],
          panelsLabel
        )
      : [];
    return (
      <Fragment>
        {isString(currentConfig?.[LOGCOLLECTOR_LOCALFILE_PROP]) && (
          <WzNoConfig error={currentConfig[LOGCOLLECTOR_LOCALFILE_PROP]} />
        )}
        {!currentConfig?.[LOGCOLLECTOR_LOCALFILE_PROP]?.[LOCALFILE_WINDOWSEVENT_PROP]?.length ? (
          <WzNoConfig error="not-present" />
        ) : null}
        {currentConfig?.[LOGCOLLECTOR_LOCALFILE_PROP]?.[LOCALFILE_WINDOWSEVENT_PROP]?.length ? (
          <WzConfigurationSettingsHeader
            title="Windows 이벤트 로그"
            description="처리될 Windows 로그 목록"
          >
            <WzConfigurationListSelector items={items} settings={mainSettings} />
          </WzConfigurationSettingsHeader>
        ) : null}
      </Fragment>
    );
  }
}

export default WzConfigurationLogCollectionWindowsEvents;
