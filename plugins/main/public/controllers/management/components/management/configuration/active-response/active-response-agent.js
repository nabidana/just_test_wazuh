/*
 * Wazuh app - React component for show configuration of active response - agent tab.
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

import WzNoConfig from '../util-components/no-config';
import WzConfigurationSettingsHeader from '../util-components/configuration-settings-header';
import WzConfigurationSettingsGroup from '../util-components/configuration-settings-group';
import withWzConfig from '../util-hocs/wz-config';

import { compose } from 'redux';
import { connect } from 'react-redux';

import { isString, renderValueNoThenEnabled } from '../utils/utils';

const mainSettings = [
  {
    field: 'disabled',
    label: 'Active response 상태',
    render: renderValueNoThenEnabled,
  },
  {
    field: 'repeated_offenders',
    label: '반복 위반자에 대한 제한 시간 목록(분 단위)',
  },
  {
    field: 'ca_store',
    label: '다음 루트 CA 인증서 목록 사용',
  },
  {
    field: 'ca_verification',
    label: '루트 CA 인증서를 사용하여 WPK 검증',
  },
];

class WzConfigurationActiveResponseAgent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { currentConfig, wazuhNotReadyYet } = this.props;
    return (
      <Fragment>
        {currentConfig['com-active-response'] &&
          isString(currentConfig['com-active-response']) && (
            <WzNoConfig
              error={currentConfig['com-active-response']}
            />
          )}
        {currentConfig['com-active-response'] &&
          !isString(currentConfig['com-active-response']) &&
          !currentConfig['com-active-response']['active-response'] && (
            <WzNoConfig error='not-present' />
          )}
        {wazuhNotReadyYet &&
          (!currentConfig || !currentConfig['com-active-response']) && (
            <WzNoConfig error='서버가 아직 준비되지 않았습니다' />
          )}
        {currentConfig['com-active-response'] &&
          !isString(currentConfig['com-active-response']) &&
          currentConfig['com-active-response']['active-response'] && (
            <WzConfigurationSettingsHeader
              title='Active response 설정'
              description='이 에이전트의 모든 Active response 설정을 여기에서 확인할 수 있습니다'
            >
              <WzConfigurationSettingsGroup
                config={currentConfig['com-active-response']['active-response']}
                items={mainSettings}
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

const sectionsAgent = [{ component: 'com', configuration: 'active-response' }];

WzConfigurationActiveResponseAgent.propTypes = {
  wazuhNotReadyYet: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
};

export default compose(
  connect(mapStateToProps),
  withWzConfig(sectionsAgent),
)(WzConfigurationActiveResponseAgent);
