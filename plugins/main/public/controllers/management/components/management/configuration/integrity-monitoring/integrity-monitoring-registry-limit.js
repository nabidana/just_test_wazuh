/*
 * Wazuh app - React component for show configuration of integrity monitoring - synchronization tab.
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

import WzConfigurationSettingsHeader from '../util-components/configuration-settings-header';
import WzConfigurationSettingsGroup from '../util-components/configuration-settings-group';
import WzNoConfig from '../util-components/no-config';
import { renderValueYesThenEnabled } from '../utils/utils';

const mainSettings = [
  {
    field: 'enabled',
    label: '레지스트리 제한 상태',
    render: renderValueYesThenEnabled,
  },
  {
    field: 'entries',
    label: '모니터링할 최대 레지스트리 값 수',
  },
];

const REGISTRY_LIMIT_PROP = 'registry_limit';

class WzConfigurationIntegrityMonitoringRegistryLimit extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { currentConfig } = this.props;
    return (
      <Fragment>
        {currentConfig &&
        currentConfig['syscheck-syscheck'] &&
        currentConfig['syscheck-syscheck'].syscheck &&
        currentConfig['syscheck-syscheck'].syscheck[REGISTRY_LIMIT_PROP] ? (
          <WzConfigurationSettingsHeader
            title='레지스트리 제한'
            description='FIM 데이터베이스의 최대 레지스트리 수 제한'
          >
            <WzConfigurationSettingsGroup
              config={
                currentConfig['syscheck-syscheck'].syscheck[REGISTRY_LIMIT_PROP]
              }
              items={mainSettings}
            />
          </WzConfigurationSettingsHeader>
        ) : (
          <WzNoConfig error='not-present' />
        )}
      </Fragment>
    );
  }
}

export default WzConfigurationIntegrityMonitoringRegistryLimit;
