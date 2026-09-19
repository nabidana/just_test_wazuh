/*
 * Wazuh app - React component for show configuration of log collection - logs tab.
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
import { isString, renderValueOrNoValue } from '../utils/utils';
import { settingsListBuilder } from '../utils/builders';

import { LOGCOLLECTOR_LOCALFILE_PROP, LOCALFILE_LOGS_PROP } from './types';

const renderTargetField = item => (item ? item.join(', ') : 'agent');
const renderArrayObjectField = arrayObjectField => {
  const stringToRender = arrayObjectField
    ? arrayObjectField
        .map(({ value, type }) => value?.concat(type ? ` (${type})` : ''))
        .join(', ')
    : '-';
  return stringToRender;
};

const mainSettings = [
  { field: 'logformat', label: '로그 형식' },
  { field: 'file', label: '로그 위치', render: renderValueOrNoValue },
  {
    field: 'only-future-events',
    label: '시작 이후 발생한 로그만 수신',
    when: 'agent',
  },
  {
    field: 'reconnect_time',
    label:
      'Windows Event Channel이 중단되었을 때 재연결을 시도하는 시간(초)',
    when: 'agent',
  },
  {
    field: 'query',
    label: '이 XPATH 쿼리를 사용하여 로그 필터링',
    render: renderValueOrNoValue,
    when: 'agent',
  },
  {
    field: 'labels',
    label: '시작 이후 발생한 로그만 수신',
    render: renderValueOrNoValue,
    when: 'agent',
  },
  {
    field: 'target',
    label: '이 소켓으로 출력 리디렉션',
    render: renderTargetField,
  },
  {
    field: 'ignore',
    label: '표현식이 일치하면 로그가 무시됩니다',
    render: renderArrayObjectField,
  },
  {
    field: 'restrict',
    label: '표현식이 일치하는 경우에만 로그가 처리됩니다',
    render: renderArrayObjectField,
  },
];

const getMainSettingsAgentOrManager = agent =>
  agent && agent.id === '000'
    ? mainSettings.filter(setting => setting.when !== 'agent')
    : mainSettings.filter(setting =>
        setting.when === 'agent'
          ? agent && agent.os && agent.os.platform === 'windows'
          : true,
      );
class WzConfigurationLogCollectionLogs extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { currentConfig, agent } = this.props;
    const items = currentConfig?.[LOGCOLLECTOR_LOCALFILE_PROP]?.[
      LOCALFILE_LOGS_PROP
    ]
      ? settingsListBuilder(
          currentConfig[LOGCOLLECTOR_LOCALFILE_PROP][LOCALFILE_LOGS_PROP],
          [
            'file',
            'alias',
            'commnad',
            item =>
              `${item.logformat}${
                item.target ? ` - ${item.target.join(', ')}` : ''
              }`,
          ],
        )
      : [];
    return (
      <Fragment>
        {isString(currentConfig?.[LOGCOLLECTOR_LOCALFILE_PROP]) && (
          <WzNoConfig
            error={currentConfig[LOGCOLLECTOR_LOCALFILE_PROP]}
          />
        )}
        {!isString(currentConfig?.[LOGCOLLECTOR_LOCALFILE_PROP]) &&
        !currentConfig?.[LOGCOLLECTOR_LOCALFILE_PROP]?.[LOCALFILE_LOGS_PROP]
          ?.length ? (
          <WzNoConfig error='not-present' />
        ) : null}
        {!isString(currentConfig?.[LOGCOLLECTOR_LOCALFILE_PROP]) &&
        currentConfig?.[LOGCOLLECTOR_LOCALFILE_PROP]?.[LOCALFILE_LOGS_PROP]
          ?.length ? (
          <WzConfigurationSettingsHeader
            title='로그 파일'
            description='분석될 로그 파일 목록'
          >
            <WzConfigurationListSelector
              items={items}
              settings={getMainSettingsAgentOrManager(agent)}
            />
          </WzConfigurationSettingsHeader>
        ) : null}
      </Fragment>
    );
  }
}

export default WzConfigurationLogCollectionLogs;
