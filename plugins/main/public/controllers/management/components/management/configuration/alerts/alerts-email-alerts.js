/*
 * Wazuh app - React component for show configuration of alerts - email alerts tab.
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
import WzConfigurationSettingsListSelector from '../util-components/configuration-settings-list-selector';
import WzNoConfig from '../util-components/no-config';
import { isString, isArray } from '../utils/utils';
import { settingsListBuilder } from '../utils/builders';

import { connect } from 'react-redux';

const mainSettings = [
  { field: 'email_to', label: '이 이메일 주소로 알림 전송' },
  {
    field: 'level',
    label: '이메일로 알림을 전송할 최소 심각도 수준',
  },
  {
    field: 'group',
    label: '이 그룹 중 하나에 속하는 알림만 전송',
  },
  {
    field: 'event_location',
    label: '이 이벤트 위치와 일치할 때 알림 전송',
  },
  { field: 'format', label: '이메일 알림 형식' },
  {
    field: 'rule_id',
    label: '이 규칙 ID 중 하나에 속하는 알림만 전송',
  },
  { field: 'do_not_delay', label: '이메일 지연 전송 비활성화' },
  {
    field: 'do_not_group',
    label: '동일한 이메일로 알림 그룹화 비활성화',
  },
];

class WzConfigurationAlertsEmailAlerts extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { currentConfig, wazuhNotReadyYet } = this.props;
    const items =
      currentConfig &&
      currentConfig['mail-alerts'] &&
      isArray(currentConfig['mail-alerts'].email_alerts)
        ? settingsListBuilder(
            currentConfig['mail-alerts'].email_alerts,
            'email_to',
          )
        : [];
    return (
      <Fragment>
        {currentConfig['mail-alerts'] &&
          isString(currentConfig['mail-alerts']) && (
            <WzNoConfig error={currentConfig['mail-alerts']} />
          )}
        {currentConfig['mail-alerts'] &&
        !isString(currentConfig['mail-alerts']) &&
        (!currentConfig['mail-alerts'].email_alerts ||
          !currentConfig['mail-alerts'].email_alerts.length) ? (
          <WzNoConfig error='not-present' />
        ) : null}
        {wazuhNotReadyYet &&
          (!currentConfig || !currentConfig['mail-alerts']) && (
            <WzNoConfig error='서버가 아직 준비되지 않았습니다' />
          )}
        {currentConfig['mail-alerts'] &&
        isArray(currentConfig['mail-alerts'].email_alerts) &&
        currentConfig['mail-alerts'].email_alerts.length ? (
          <WzConfigurationSettingsHeader
            title='기본 설정'
            description='세부 이메일 알림 옵션'
          >
            <WzConfigurationSettingsListSelector
              items={items}
              settings={mainSettings}
            />
          </WzConfigurationSettingsHeader>
        ) : null}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  wazuhNotReadyYet: state.appStateReducers.wazuhNotReadyYet,
});

WzConfigurationAlertsEmailAlerts.propTypes = {
  wazuhNotReadyYet: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
};

export default connect(mapStateToProps)(WzConfigurationAlertsEmailAlerts);
