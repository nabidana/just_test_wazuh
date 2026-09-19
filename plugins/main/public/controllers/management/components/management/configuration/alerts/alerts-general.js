/*
 * Wazuh app - React component for show configuration of alerts - General tab.
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

import WzConfigurationSettingsGroup from '../util-components/configuration-settings-group';
import WzConfigurationSettingsHeader from '../util-components/configuration-settings-header';
import WzNoConfig from '../util-components/no-config';
import { isString, renderValueOrNo } from '../utils/utils';

const mainSettings = [
  {
    field: 'log_alert_level',
    label: '알림을 저장할 최소 심각도 수준',
  },
  {
    field: 'email_alert_level',
    label: '이메일로 알림을 전송할 최소 심각도 수준',
  },
  {
    field: 'use_geoip',
    label: 'GeoIP 조회 활성화',
    render: renderValueOrNo,
  },
];

class WzConfigurationAlertsGeneral extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { currentConfig, wazuhNotReadyYet } = this.props;
    return (
      <Fragment>
        {currentConfig['analysis-alerts'] &&
          isString(currentConfig['analysis-alerts']) && (
            <WzNoConfig
              error={currentConfig['analysis-alerts']}
            />
          )}
        {currentConfig['analysis-alerts'] &&
          !isString(currentConfig['analysis-alerts']) &&
          !currentConfig['analysis-alerts'].alerts && (
            <WzNoConfig error='not-present' />
          )}
        {wazuhNotReadyYet &&
          (!currentConfig || !currentConfig['analysis-alerts']) && (
            <WzNoConfig error='서버가 아직 준비되지 않았습니다' />
          )}
        {currentConfig['analysis-alerts'] &&
          !isString(currentConfig['analysis-alerts']) &&
          currentConfig['analysis-alerts'].alerts && (
            <WzConfigurationSettingsHeader
              title='기본 설정'
              description='일반 알림 설정'
            >
              <WzConfigurationSettingsGroup
                config={currentConfig['analysis-alerts'].alerts}
                items={mainSettings}
              />
            </WzConfigurationSettingsHeader>
          )}
      </Fragment>
    );
  }
}

WzConfigurationAlertsGeneral.propTypes = {
  wazuhNotReadyYet: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
};

export default WzConfigurationAlertsGeneral;
