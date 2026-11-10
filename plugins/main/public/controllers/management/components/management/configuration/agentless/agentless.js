/*
 * Wazuh app - React component for show configuration of agentless.
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

import withWzConfig from '../util-hocs/wz-config';
import WzNoConfig from '../util-components/no-config';
import WzConfigurationListSelector from '../util-components/configuration-settings-list-selector';
import WzConfigurationSettingsHeader from '../util-components/configuration-settings-header';
import { isString } from '../utils/utils';

import { connect } from 'react-redux';
import { compose } from 'redux';

const mainSettings = [
  { field: 'type', label: '에이전트리스 모니터링 유형' },
  { field: 'frequency', label: '점검 간격(초 단위)' },
  { field: 'host', label: '장비 사용자 이름 및 호스트 이름' },
  { field: 'state', label: '장비 점검 유형' },
  { field: 'arguments', label: '점검에 전달할 인수' },
];

class WzConfigurationAgentless extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { currentConfig, wazuhNotReadyYet } = this.props;
    const items =
      currentConfig &&
      currentConfig['agentless-agentless'] &&
      currentConfig['agentless-agentless'].agentless
        ? currentConfig['agentless-agentless'].agentless.map(item => ({
            label: `${item.type} (${item.state})`,
            data: item,
          }))
        : false;
    return (
      <Fragment>
        {currentConfig['agentless-agentless'] &&
          isString(currentConfig['agentless-agentless']) && (
            <WzNoConfig
              error={currentConfig['agentless-agentless']}
            />
          )}
        {wazuhNotReadyYet &&
          (!currentConfig || !currentConfig['agentless-agentless']) && (
            <WzNoConfig error='서버가 아직 준비되지 않았습니다' />
          )}
        {currentConfig['agentless-agentless'] &&
          !isString(currentConfig['agentless-agentless']) && (
            <WzConfigurationSettingsHeader
              title='장비 목록'
              description="에이전트를 사용하지 않고 모니터링되는 장비 목록"
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

const sections = [{ component: 'agentless', configuration: 'agentless' }];

const mapStateToProps = state => ({
  wazuhNotReadyYet: state.appStateReducers.wazuhNotReadyYet,
});

WzConfigurationAgentless.propTypes = {
  wazuhNotReadyYet: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
};

export default compose(
  withWzConfig(sections),
  connect(mapStateToProps),
)(WzConfigurationAgentless);
