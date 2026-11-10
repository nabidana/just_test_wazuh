/*
 * Wazuh app - React component for show configuration of vulnerabilities.
 * Copyright (C) 2015-2022 Wazuh, Inc.
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * Find more information about this on the LICENSE file.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import withWzConfig from '../util-hocs/wz-config';
import { wodleBuilder } from '../utils/builders';
import WzConfigurationSettingsHeader from '../util-components/configuration-settings-header';
import WzConfigurationSettingsGroup from '../util-components/configuration-settings-group';
import WzNoConfig from '../util-components/no-config';
import { isString, renderValueYesThenEnabled } from '../utils/utils';

const mainSettings = [
  {
    field: 'enabled',
    label: '취약점 탐지 모듈 활성화',
    render: renderValueYesThenEnabled,
  },
  {
    field: 'feed-update-interval',
    label: '주기적인 피드 업데이트 시간 간격',
  },
];

class WzConfigurationVulnerabilities extends Component {
  constructor(props) {
    super(props);
    this.wodleConfig = wodleBuilder(
      this.props.currentConfig,
      'vulnerability-detection',
    );
  }
  componentDidMount() {
    this.props.updateBadge(this.badgeEnabled());
  }
  badgeEnabled() {
    return (
      this.wodleConfig &&
      this.wodleConfig['vulnerability-detection'] &&
      this.wodleConfig['vulnerability-detection'].enabled === 'yes'
    );
  }

  // TODO: This functionalities is repeated in other configuration components.
  // Maybe it should be extracted to a util function.

  // If it is a string,
  // it is an error message and the error view should be displayed.
  problemFetchingConfiguration() {
    const hasProblem = isString(
      this.props.currentConfig?.['wmodules-wmodules'],
    );
    return hasProblem;
  }

  // If it is not a string and the object does not have the vulnerability detection configuration,
  // it must show the configuration view not configured.
  currentConfigHasVulnerabilityDetection() {
    const hasVulnerabilityDetection =
      !isString(this.props.currentConfig?.['wmodules-wmodules']) &&
      !this.wodleConfig?.['vulnerability-detection'];
    return hasVulnerabilityDetection;
  }

  render() {
    const { currentConfig } = this.props;
    return (
      <>
        {this.problemFetchingConfiguration() && (
          <WzNoConfig
            error={currentConfig['wmodules-wmodules']}
          />
        )}
        {this.currentConfigHasVulnerabilityDetection() && (
          <WzNoConfig error='not-present' />
        )}
        {this.wodleConfig?.['vulnerability-detection'] && (
          <WzConfigurationSettingsHeader
            title='기본 설정'
            description='취약점 탐지기와 프로바이더에 적용되는 일반 설정'
          >
            <WzConfigurationSettingsGroup
              config={this.wodleConfig['vulnerability-detection']}
              items={mainSettings}
            />
          </WzConfigurationSettingsHeader>
        )}
      </>
    );
  }
}

const sections = [{ component: 'wmodules', configuration: 'wmodules' }];

WzConfigurationVulnerabilities.propTypes = {
  currentConfig: PropTypes.object.isRequired,
};

export default withWzConfig(sections)(WzConfigurationVulnerabilities);
