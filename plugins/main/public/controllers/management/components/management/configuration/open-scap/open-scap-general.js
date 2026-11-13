/*
 * Wazuh app - React component for show configuration of OpenSCAP - general tab.
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
import { isString, renderValueNoThenEnabled } from '../utils/utils';

const mainSettings = [
  {
    field: 'disabled',
    label: 'OpenSCAP 통합 상태',
    render: renderValueNoThenEnabled
  },
  { field: 'timeout', label: '스캔 실행 제한 시간(초)' },
  { field: 'interval', label: '스캔 실행 간격' },
  { field: 'scan-on-start', label: '시작 시 스캔' }
];

class WzConfigurationOpenSCAPGeneral extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { currentConfig, wodleConfig } = this.props;
    return (
      <Fragment>
        {currentConfig['wmodules-wmodules'] &&
          isString(currentConfig['wmodules-wmodules']) && (
            <WzNoConfig
              error={currentConfig['wmodules-wmodules']}
            />
          )}
        {currentConfig &&
          !wodleConfig['open-scap'] &&
          !isString(currentConfig['wmodules-wmodules']) && (
            <WzNoConfig error="not-present" />
          )}
        {wodleConfig['open-scap'] && (
          <WzConfigurationSettingsHeader
            title="기본 설정"
            description="이 설정은 모든 OpenSCAP 평가에 적용됩니다"
          >
            <WzConfigurationSettingsGroup
              config={wodleConfig['open-scap']}
              items={mainSettings}
            />
          </WzConfigurationSettingsHeader>
        )}
      </Fragment>
    );
  }
}

export default WzConfigurationOpenSCAPGeneral;
