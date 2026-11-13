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
import {
  renderValueOrNoValue,
  isString,
  renderValueOrDefault,
} from '../utils/utils';
import { settingsListBuilder } from '../utils/builders';
import { LOGCOLLECTOR_LOCALFILE_PROP, LOCALFILE_JOURNALDT_PROP } from './types';

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
  {
    field: 'only-future-events',
    label: '이후 이벤트만',
    render: renderValueOrNoValue,
  },
  {
    field: 'filters_disabled',
    label: '필터 비활성화',
    render: renderValueOrDefault('true'),
  },
  {
    field: 'filters',
    label: '필터',
    columns: [
      {
        field: 'field',
        name: '필드',
      },
      {
        field: 'expression',
        name: '표현식',
      },
      {
        field: 'ignore_if_missing',
        name: '없으면 무시',
      },
    ],
    info: '동일한 그룹 내의 구성 필터는 AND 논리 연산자로 처리됩니다. 반면 서로 다른 필터 그룹은 OR와 유사한 논리 연산자로 처리됩니다.',
  },
];

class WzConfigurationLogCollectionJournald extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { currentConfig } = this.props;
    const items = currentConfig?.[LOGCOLLECTOR_LOCALFILE_PROP]?.[
      LOCALFILE_JOURNALDT_PROP
    ]
      ? settingsListBuilder(
          currentConfig[LOGCOLLECTOR_LOCALFILE_PROP][LOCALFILE_JOURNALDT_PROP],
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
          LOCALFILE_JOURNALDT_PROP
        ]?.length ? (
          <WzNoConfig error='not-present' />
        ) : null}
        {currentConfig?.[LOGCOLLECTOR_LOCALFILE_PROP]?.[
          LOCALFILE_JOURNALDT_PROP
        ]?.length > 1 ? (
          <WzConfigurationSettingsHeader
            title='Journald 이벤트 로그'
            description='처리될 journald 로그 목록'
          >
            <WzConfigurationListSelector
              items={items}
              settings={mainSettings}
            />
          </WzConfigurationSettingsHeader>
        ) : null}
        {currentConfig?.[LOGCOLLECTOR_LOCALFILE_PROP]?.[
          LOCALFILE_JOURNALDT_PROP
        ]?.length === 1 ? (
          <WzConfigurationSettingsHeader
            title='Journald 이벤트 로그'
            description='처리될 journald 로그 목록'
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

export default WzConfigurationLogCollectionJournald;
