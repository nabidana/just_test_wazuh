/*
 * Wazuh app - React component for show configuration of commands.
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

import WzNoConfig from '../util-components/no-config';
import WzConfigurationSettingsHeader from '../util-components/configuration-settings-header';
import WzConfigurationSettingsListSelector from '../util-components/configuration-settings-list-selector';
import withWzConfig from '../util-hocs/wz-config';
import { isString, renderValueNoThenEnabled } from '../utils/utils';
import { settingsListBuilder } from '../utils/builders';

const mainSettings = [
  { field: 'disabled', label: '명령 상태', renderValueNoThenEnabled },
  { field: 'tag', label: '명령 이름' },
  { field: 'command', label: '실행할 명령' },
  { field: 'interval', label: '실행 간격' },
  { field: 'run_on_start', label: '시작 시 실행' },
  { field: 'ignore_output', label: '명령 출력 무시' },
  { field: 'timeout', label: '실행을 기다리는 제한 시간(초 단위)' },
  { field: 'verify_md5', label: 'MD5 체크섬 검증' },
  { field: 'verify_sha1', label: 'SHA1 체크섬 검증' },
  { field: 'verify_sha256', label: 'SHA256 체크섬 검증' },
  { field: 'skip_verification', label: '체크섬 검증 무시' }
];

class WzConfigurationCommands extends Component {
  constructor(props) {
    super(props);
    this.wodleConfig =
      this.props.currentConfig &&
      !isString(this.props.currentConfig['wmodules-wmodules'])
        ? this.props.currentConfig['wmodules-wmodules'].wmodules.filter(
            item => item['command']
          )
        : [];
  }
  render() {
    const { currentConfig } = this.props;
    const items =
      this.wodleConfig && this.wodleConfig.length
        ? settingsListBuilder(this.wodleConfig.map(item => item.command), ['tag','command'])
        : false;
    return (
      <Fragment>
        {currentConfig['wmodules-wmodules'] &&
          isString(currentConfig['wmodules-wmodules']) && (
            <WzNoConfig
              error={currentConfig['wmodules-wmodules']}
            />
          )}
        {currentConfig &&
          !items &&
          !isString(currentConfig['wmodules-wmodules']) && (
            <WzNoConfig error="not-present" />
          )}
        {currentConfig &&
        items &&
        !isString(currentConfig['wmodules-wmodules']) ? (
          <WzConfigurationSettingsHeader
            title="명령 정의"
            description="현재 정의된 모든 명령을 여기에서 확인할 수 있습니다"
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

const sections = [{ component: 'wmodules', configuration: 'wmodules' }];

export default withWzConfig(sections)(WzConfigurationCommands);
