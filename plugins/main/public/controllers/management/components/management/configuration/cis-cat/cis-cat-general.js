/*
 * Wazuh app - React component for show configuration of CIS-CAT - general tab.
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
    label: 'CIS-CAT 통합 상태',
    render: renderValueNoThenEnabled
  },
  { field: 'timeout', label: '스캔 실행 제한 시간(초 단위)' },
  { field: 'java_path', label: 'Java 실행 파일 디렉터리 경로' },
  { field: 'ciscat_path', label: 'CIS-CAT 실행 파일 디렉터리 경로' }
];

const schedulingSettings = [
  { field: 'interval', label: '스캔 실행 간격' },
  { field: 'scan-on-start', label: '시작 시 스캔' },
  { field: 'day', label: '스캔을 실행할 월중 날짜' },
  { field: 'wday', label: '스캔을 실행할 요일' },
  { field: 'time', label: '스캔을 실행할 시각' }
];

class WzConfigurationCisCatGeneral extends Component {
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
          !wodleConfig['cis-cat'] &&
          !isString(currentConfig['wmodules-wmodules']) && (
            <WzNoConfig error="not-present" />
          )}
        {wodleConfig['cis-cat'] && (
          <WzConfigurationSettingsHeader
            title="기본 설정"
            description="모든 벤치마크에 적용되는 일반 설정"
          >
            <WzConfigurationSettingsGroup
              config={wodleConfig['cis-cat']}
              items={mainSettings}
            />
            <WzConfigurationSettingsGroup
              title="스케줄링 설정"
              description="CIS-CAT 스캔 스케줄링 사용자 지정"
              config={wodleConfig['cis-cat']}
              items={schedulingSettings}
            />
          </WzConfigurationSettingsHeader>
        )}
      </Fragment>
    );
  }
}

export default WzConfigurationCisCatGeneral;
