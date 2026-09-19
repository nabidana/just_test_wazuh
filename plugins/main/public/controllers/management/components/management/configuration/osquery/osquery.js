/*
 * Wazuh app - React component for show configuration of Osquery.
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

import { EuiBasicTable } from '@elastic/eui';

import WzConfigurationSettingsHeader from '../util-components/configuration-settings-header';
import withWzConfig from '../util-hocs/wz-config';
import WzConfigurationSettingsGroup from '../util-components/configuration-settings-group';
import WzNoConfig from '../util-components/no-config';
import { isString, isArray, renderValueNoThenEnabled } from '../utils/utils';
import { wodleBuilder } from '../utils/builders';

const mainSettings = [
  {
    field: 'disabled',
    label: 'Osquery 통합 상태',
    render: renderValueNoThenEnabled,
  },
  { field: 'run_daemon', label: 'Osquery 데몬 자동 실행' },
  { field: 'bin_path', label: 'Osquery 실행 파일 경로' },
  { field: 'log_path', label: 'Osquery 결과 로그 파일 경로' },
  { field: 'config_path', label: 'Osquery 구성 파일 경로' },
  { field: 'add_labels', label: '정의된 레이블을 데코레이터로 사용' },
];

const columns = [
  { field: 'name', name: '이름' },
  { field: 'path', name: '경로' },
];

class WzConfigurationOsquery extends Component {
  constructor(props) {
    super(props);
    this.wodleConfig = wodleBuilder(this.props.currentConfig, 'osquery');
  }
  componentDidMount() {
    this.props.updateBadge(this.badgeEnabled());
  }
  badgeEnabled() {
    return (
      this.wodleConfig &&
      this.wodleConfig.osquery &&
      this.wodleConfig.osquery.disabled === 'no'
    );
  }
  render() {
    const { currentConfig } = this.props;
    return (
      <Fragment>
        {currentConfig['wmodules-wmodules'] &&
          isString(currentConfig['wmodules-wmodules']) && (
            <WzNoConfig
              error={currentConfig['wmodules-wmodules']}
            />
          )}
        {currentConfig &&
          !this.wodleConfig.osquery &&
          !isString(currentConfig['wmodules-wmodules']) && (
            <WzNoConfig error='not-present' />
          )}
        {currentConfig && this.wodleConfig && this.wodleConfig.osquery && (
          <WzConfigurationSettingsHeader
            title='기본 설정'
            description='일반 Osquery 통합 설정'
          >
            <WzConfigurationSettingsGroup
              config={this.wodleConfig.osquery}
              items={mainSettings}
              ks
            />
            {this.wodleConfig.osquery.packs &&
              isArray(this.wodleConfig.osquery.packs) &&
              this.wodleConfig.osquery.packs.length && (
                <Fragment>
                  <WzConfigurationSettingsHeader
                    title='Osquery 팩'
                    description='팩에는 시스템 정보를 빠르게 조회하기 위한 여러 쿼리가 포함됩니다'
                  />
                  <EuiBasicTable
                    items={this.wodleConfig.osquery.packs}
                    columns={columns}
                  />
                </Fragment>
              )}
          </WzConfigurationSettingsHeader>
        )}
      </Fragment>
    );
  }
}

const sections = [{ component: 'wmodules', configuration: 'wmodules' }];

export default withWzConfig(sections)(WzConfigurationOsquery);
