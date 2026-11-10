/*
 * Wazuh app - React component for show configuration of active response - active response tab.
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
import WzConfigurationSettingsListSelector from '../util-components/configuration-settings-list-selector';
import { isString, renderValueNoThenEnabled } from '../utils/utils';
import { settingsListBuilder } from '../utils/builders';

import { connect } from 'react-redux';
import { compose } from 'redux';

import withWzConfig from '../util-hocs/wz-config';

const mainSettings = [
  { field: 'command', label: '실행할 명령' },
  { field: 'location', label: '명령을 실행할 위치' },
  { field: 'agent_id', label: '명령을 실행할 에이전트 ID' },
  { field: 'level', label: '이 심각도 수준 이상에 일치' },
  { field: 'rules_group', label: '이 그룹 중 하나에 일치' },
  { field: 'rules_id', label: '이 규칙 ID 중 하나에 일치' },
  { field: 'timeout', label: '되돌리기 전 제한 시간(초 단위)' },
];

class WzConfigurationActiveResponseActiveResponse extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { currentConfig, wazuhNotReadyYet } = this.props;
    const items =
      !isString(currentConfig['analysis-active_response']) &&
      currentConfig['analysis-active_response']['active-response'] &&
      currentConfig['analysis-active_response']['active-response'].length
        ? settingsListBuilder(
            currentConfig['analysis-active_response']['active-response'],
            'command',
          )
        : [];
    return (
      <Fragment>
        {currentConfig['analysis-active_response'] &&
          isString(currentConfig['analysis-active_response']) && (
            <WzNoConfig
              error={currentConfig['analysis-active_response']}
            />
          )}
        {currentConfig['analysis-active_response'] &&
          !isString(currentConfig['analysis-active_response']) &&
          currentConfig['analysis-active_response']['active-response'] &&
          !currentConfig['analysis-active_response']['active-response']
            .length && <WzNoConfig error='not-present' />}
        {wazuhNotReadyYet &&
          (!currentConfig || !currentConfig['analysis-active_response']) && (
            <WzNoConfig error='서버가 아직 준비되지 않았습니다' />
          )}
        {currentConfig['analysis-active_response'] &&
        !isString(currentConfig['analysis-active_response']) &&
        currentConfig['analysis-active_response']['active-response'].length ? (
          <WzConfigurationSettingsHeader
            title='Active response 정의'
            description="현재 정의된 모든 active response를 여기에서 확인할 수 있습니다. 비활성화된 active response는 표시되지 않습니다."
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

WzConfigurationActiveResponseActiveResponse.propTypes = {
  // currentConfig: PropTypes.object.isRequired,
  wazuhNotReadyYet: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
};

const mapStateToProps = state => ({
  wazuhNotReadyYet: state.appStateReducers.wazuhNotReadyYet,
});

export default connect(mapStateToProps)(
  WzConfigurationActiveResponseActiveResponse,
);

const sectionsAgent = [{ component: 'com', configuration: 'active-response' }];

export const WzConfigurationActiveResponseActiveResponseAgent = compose(
  connect(mapStateToProps),
  withWzConfig(sectionsAgent),
)(WzConfigurationActiveResponseActiveResponse);

WzConfigurationActiveResponseActiveResponseAgent.propTypes = {
  wazuhNotReadyYet: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
};
