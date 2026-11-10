/*
 * Wazuh app - React component for show alerts - syslog output tab.
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

import { EuiBasicTable } from '@elastic/eui';

import WzConfigurationSettingsHeader from '../util-components/configuration-settings-header';
import WzNoConfig from '../util-components/no-config';
import {
  isString,
  renderValueOrAll,
  renderValueOrNo,
  renderValueOrDefault,
} from '../utils/utils';

import { connect } from 'react-redux';

const columns = [
  { field: 'server', name: '서버' },
  { field: 'port', name: '포트' },
  { field: 'level', name: '수준' },
  { field: 'format', name: '형식', render: renderValueOrDefault('default') },
  { field: 'use_fqdn', name: 'FQDN', render: renderValueOrNo },
  { field: 'rule_id', name: '규칙 ID', render: renderValueOrAll },
  { field: 'group', name: '그룹', render: renderValueOrAll },
  { field: 'location', name: '위치', render: renderValueOrAll },
];
class WzConfigurationAlertsReports extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { currentConfig, wazuhNotReadyYet } = this.props;
    return (
      <Fragment>
        {currentConfig['csyslog-csyslog'] &&
          isString(currentConfig['csyslog-csyslog']) && (
            <WzNoConfig
              error={currentConfig['csyslog-csyslog']}
            />
          )}
        {currentConfig['csyslog-csyslog'] &&
          !isString(currentConfig['csyslog-csyslog']) &&
          (!currentConfig['csyslog-csyslog'].syslog_output ||
            !currentConfig['csyslog-csyslog'].syslog_output.length) && (
            <WzNoConfig error='not-present' />
          )}
        {wazuhNotReadyYet &&
          (!currentConfig || !currentConfig['csyslog-csyslog']) && (
            <WzNoConfig error='서버가 아직 준비되지 않았습니다' />
          )}
        {currentConfig['csyslog-csyslog'] &&
          !isString(currentConfig['csyslog-csyslog']) &&
          currentConfig['csyslog-csyslog'].syslog_output &&
          currentConfig['csyslog-csyslog'].syslog_output.length && (
            <WzConfigurationSettingsHeader
              title='기본 설정'
              description='syslog 서버로 알림 출력'
            >
              <EuiBasicTable
                columns={columns}
                items={currentConfig['csyslog-csyslog'].syslog_output}
              />
            </WzConfigurationSettingsHeader>
          )}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  wazuhNotReadyYet: state.appStateReducers.wazuhNotReadyYet,
});

WzConfigurationAlertsReports.propTypes = {
  wazuhNotReadyYet: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
};

export default connect(mapStateToProps)(WzConfigurationAlertsReports);
