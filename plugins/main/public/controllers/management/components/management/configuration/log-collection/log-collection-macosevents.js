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
import WzConfigurationSettingsGroup from '../util-components/configuration-settings-group';
import { renderValueOrNoValue, isString } from '../utils/utils';
import { settingsListBuilder } from '../utils/builders';
import {
  LOGCOLLECTOR_LOCALFILE_PROP,
  LOCALFILE_MACOSEVENT_PROP,
} from './types';

/**
 *
 * @param {*} data => all log data
 * @returns string => value to show in query input
 */
const queryValue = data => {
  return typeof data === 'undefined'
    ? '-'
    : typeof data === 'object'
    ? data.value
    : data;
};

/**
 * Returns targets array parsed in one string
 * @param {*} item
 * @returns string => target
 */
const renderTargetField = item =>
  Array.isArray(item) ? item.join(', ') : 'agent';

/**
 * Return panels title
 * @param {*} item => log data
 * @returns
 */
const panelsLabel = item =>
  `${item.logformat} - ${renderTargetField(item.target)}`;

const mainSettings = [
  { field: 'logformat', label: '로그 형식' },
  { field: 'query', label: '쿼리 값', render: queryValue },
  { field: 'query.level', label: '쿼리 수준', render: renderValueOrNoValue },
  { field: 'query.type', label: '쿼리 유형', render: renderValueOrNoValue },
  {
    field: 'ignore_binaries',
    label: '바이너리 무시',
    render: renderValueOrNoValue,
  },
  {
    field: 'only-future-events',
    label: '이후 이벤트만',
    render: renderValueOrNoValue,
  },
];

class WzConfigurationLogCollectionMacOSEvents extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { currentConfig } = this.props;
    const items = currentConfig?.[LOGCOLLECTOR_LOCALFILE_PROP]?.[
      LOCALFILE_MACOSEVENT_PROP
    ]
      ? settingsListBuilder(
          currentConfig[LOGCOLLECTOR_LOCALFILE_PROP][LOCALFILE_MACOSEVENT_PROP],
          panelsLabel,
        )
      : [];

    return (
      <Fragment>
        {isString(currentConfig?.[LOGCOLLECTOR_LOCALFILE_PROP]) && (
          <WzNoConfig
            error={currentConfig[LOGCOLLECTOR_LOCALFILE_PROP]}
          />
        )}
        {!currentConfig?.[LOGCOLLECTOR_LOCALFILE_PROP]?.[
          LOCALFILE_MACOSEVENT_PROP
        ]?.length ? (
          <WzNoConfig error='not-present' />
        ) : null}
        {currentConfig?.[LOGCOLLECTOR_LOCALFILE_PROP]?.[
          LOCALFILE_MACOSEVENT_PROP
        ]?.length > 1 ? (
          <WzConfigurationSettingsHeader
            title='macOS 이벤트 로그'
            description='처리될 macOS 로그 목록'
          >
            <WzConfigurationListSelector
              items={items}
              settings={mainSettings}
            />
          </WzConfigurationSettingsHeader>
        ) : null}
        {currentConfig?.[LOGCOLLECTOR_LOCALFILE_PROP]?.[
          LOCALFILE_MACOSEVENT_PROP
        ]?.length === 1 ? (
          <WzConfigurationSettingsHeader
            title='macOS 이벤트 로그'
            description='처리될 로그'
          >
            <WzConfigurationSettingsGroup
              config={items[0].data}
              items={mainSettings}
            />
          </WzConfigurationSettingsHeader>
        ) : null}
      </Fragment>
    );
  }
}

export default WzConfigurationLogCollectionMacOSEvents;
