/*
 * Wazuh app - React component for show configuration of CIS-CAT - benchmark tab.
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

import WzNoConfig from '../util-components/no-config';
import WzConfigurationSettingsHeader from '../util-components/configuration-settings-header';
import { isString } from '../utils/utils';

const columns = [
  { field: 'path', name: '경로' },
  { field: 'profile', name: '프로파일' },
  { field: 'timeout', name: '제한 시간' },
  { field: 'type', name: '유형' }
];
class WzConfigurationCisCatBenchmarks extends Component {
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
          wodleConfig['cis-cat'] &&
          !wodleConfig['cis-cat'].content && (
            <WzNoConfig error="not-present" />
          )}
        {wodleConfig['cis-cat'] && wodleConfig['cis-cat'].content && (
          <Fragment>
            <WzConfigurationSettingsHeader
              title="벤치마크"
              description="스캔을 수행할 CIS-CAT 벤치마크 템플릿 목록"
            >
              <EuiBasicTable
                items={wodleConfig['cis-cat'].content}
                columns={columns}
              />
            </WzConfigurationSettingsHeader>
          </Fragment>
        )}
      </Fragment>
    );
  }
}

export default WzConfigurationCisCatBenchmarks;
