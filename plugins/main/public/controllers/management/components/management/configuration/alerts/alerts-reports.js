/*
 * Wazuh app - React component for show configuration of alerts - Report tab.
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
import WzConfigurationListSelector from '../util-components/configuration-settings-list-selector';
import WzNoConfig from '../util-components/no-config';
import { isString } from '../utils/utils';
import { settingsListBuilder } from '../utils/builders';

import { connect } from 'react-redux';

const mainSettings = [
  { field: 'title', label: '보고서 이름' },
  { field: 'mail_to', label: '이 이메일 주소로 보고서 전송' },
  { field: 'showlogs', label: '보고서 생성 시 로그 포함' },
  { field: 'group', label: '이 그룹으로 필터링' },
  { field: 'category', label: '이 카테고리로 필터링' },
  { field: 'rule', label: '이 규칙 ID로 필터링' },
  { field: 'level', label: '이 알림 수준 이상으로 필터링' },
  { field: 'location', label: '이 로그 위치로 필터링' },
  { field: 'srcip', label: '이 출발지 IP 주소로 필터링' },
  { field: 'user', label: '이 사용자 이름으로 필터링' },
];

class WzConfigurationAlertsReports extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { currentConfig, wazuhNotReadyYet } = this.props;
    const items =
      currentConfig &&
      currentConfig['monitor-reports'] &&
      currentConfig['monitor-reports'].reports
        ? settingsListBuilder(currentConfig['monitor-reports'].reports, 'title')
        : {};
    return (
      <Fragment>
        {currentConfig['monitor-reports'] &&
          isString(currentConfig['monitor-reports']) && (
            <WzNoConfig
              error={currentConfig['monitor-reports']}
            />
          )}
        {currentConfig['monitor-reports'] &&
          !isString(currentConfig['monitor-reports']) &&
          (!currentConfig['monitor-reports'].reports ||
            !currentConfig['monitor-reports'].reports.length) && (
            <WzNoConfig error='not-present' />
          )}
        {wazuhNotReadyYet &&
          (!currentConfig || !currentConfig['monitor-reports']) && (
            <WzNoConfig error='서버가 아직 준비되지 않았습니다' />
          )}
        {currentConfig['monitor-reports'] &&
          !isString(currentConfig['monitor-reports']) &&
          currentConfig['monitor-reports'].reports &&
          currentConfig['monitor-reports'].reports.length && (
            <WzConfigurationSettingsHeader
              title='기본 설정'
              description='알림에 대한 일일 보고서'
            >
              <WzConfigurationListSelector
                items={items}
                settings={mainSettings}
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
