/*
 * Wazuh app - React component for show configuration of integrity monitoring - ignored tab.
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

import { EuiBasicTable, EuiSpacer } from '@elastic/eui';

import WzConfigurationSettingsHeader from '../util-components/configuration-settings-header';
import WzNoConfig from '../util-components/no-config';

const columnsPath = [{ field: 'path', name: '경로' }];

const columnsSregex = [{ field: 'sregex', name: 'Sregex' }];

const columnsEntryArch = [
  { field: 'entry', name: '항목' },
  { field: 'arch', name: '아키텍처' }
];

const columnsEntryArchSRegex = [
  { field: 'entry', name: '항목 Sregex' },
  { field: 'arch', name: '아키텍처' }
];

class WzConfigurationMonitoringIgnored extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { currentConfig, agent } = this.props;
    return (
      <Fragment>
        {((agent || {}).os || {}).platform !== 'windows' &&
        currentConfig &&
        currentConfig['syscheck-syscheck'] &&
        currentConfig['syscheck-syscheck'].syscheck &&
        !currentConfig['syscheck-syscheck'].syscheck.ignore &&
        !currentConfig['syscheck-syscheck'].syscheck.ignore_sregex ? (
          <WzNoConfig error="not-present" />
        ) : null}
        {((agent || {}).os || {}).platform !== 'windows' &&
        currentConfig &&
        currentConfig['syscheck-syscheck'] &&
        currentConfig['syscheck-syscheck'].syscheck &&
        (currentConfig['syscheck-syscheck'].syscheck.ignore ||
        currentConfig['syscheck-syscheck'].syscheck.ignore_sregex ) ? (
          <Fragment>
            <WzConfigurationSettingsHeader
              title="무시된 파일 및 디렉터리"
              description="이 파일과 디렉터리는 무결성 스캔에서 무시됩니다"
            >
              {currentConfig['syscheck-syscheck'].syscheck.ignore && (
                <EuiBasicTable
                  items={currentConfig['syscheck-syscheck'].syscheck.ignore.map(
                    item => ({ path: item })
                  )}
                  columns={columnsPath}
                />
              )}
              {currentConfig['syscheck-syscheck'].syscheck.ignore_sregex && (
                <Fragment>
                  {currentConfig['syscheck-syscheck'].syscheck.ignore && <EuiSpacer size="s" />}
                  <EuiBasicTable
                    items={currentConfig[
                      'syscheck-syscheck'
                    ].syscheck.ignore_sregex.map(item => ({ sregex: item }))}
                    columns={columnsSregex}
                  />
                </Fragment>
              )}
            </WzConfigurationSettingsHeader>
          </Fragment>
        ) : null}
        {((agent || {}).os || {}).platform === 'windows' &&
          currentConfig &&
          currentConfig['syscheck-syscheck'] &&
          currentConfig['syscheck-syscheck'].syscheck &&
          !currentConfig['syscheck-syscheck'].syscheck.ignore &&
          !currentConfig['syscheck-syscheck'].syscheck.ignore_sregex &&
          !currentConfig['syscheck-syscheck'].syscheck.registry_ignore &&
          !currentConfig['syscheck-syscheck'].syscheck.registry_ignore_sregex && (
            <WzNoConfig error="not-present" />
          )}
        {((agent || {}).os || {}).platform === 'windows' &&
          currentConfig &&
          currentConfig['syscheck-syscheck'] &&
          currentConfig['syscheck-syscheck'].syscheck &&
          (currentConfig['syscheck-syscheck'].syscheck.ignore ||
            currentConfig['syscheck-syscheck'].syscheck.ignore_sregex ||
            currentConfig['syscheck-syscheck'].syscheck.registry_ignore ||
            currentConfig['syscheck-syscheck'].syscheck.registry_ignore_sregex) && (
            <WzConfigurationSettingsHeader
              title="무시됨"
              description="무시될 레지스트리 항목 목록"
            >
              {currentConfig['syscheck-syscheck'].syscheck.registry_ignore && (
                <EuiBasicTable
                  items={
                    currentConfig['syscheck-syscheck'].syscheck.registry_ignore
                  }
                  columns={columnsEntryArch}
                />
              )}
              {currentConfig['syscheck-syscheck'].syscheck
                .registry_ignore_sregex && (
                  <Fragment>
                    {(currentConfig['syscheck-syscheck'].syscheck.registry_ignore) && <EuiSpacer />}
                    <EuiBasicTable
                      items={
                        currentConfig['syscheck-syscheck'].syscheck.registry_ignore_sregex
                      }
                      columns={columnsEntryArchSRegex}
                    />
                  </Fragment>
              )}
              {currentConfig['syscheck-syscheck'].syscheck
                .ignore && (
                  <Fragment>
                    {(currentConfig['syscheck-syscheck'].syscheck.registry_ignore || currentConfig['syscheck-syscheck'].syscheck.registry_ignore_sregex ) && <EuiSpacer />}
                    <EuiBasicTable
                      items={
                        currentConfig['syscheck-syscheck'].syscheck.ignore.map(item => ({ path: item }))
                      }
                      columns={columnsPath}
                    />
                  </Fragment>
              )}
              {currentConfig['syscheck-syscheck'].syscheck
                .ignore_sregex && (
                  <Fragment>
                    {(currentConfig['syscheck-syscheck'].syscheck.registry_ignore || currentConfig['syscheck-syscheck'].syscheck.registry_ignore_sregex || currentConfig['syscheck-syscheck'].syscheck.ignore) && <EuiSpacer />}
                    <EuiBasicTable
                      items={
                        currentConfig['syscheck-syscheck'].syscheck.ignore_sregex.map(item => ({ sregex: item }))
                      }
                      columns={columnsSregex}
                    />
                  </Fragment>
              )}
            </WzConfigurationSettingsHeader>
          )}
      </Fragment>
    );
  }
}

WzConfigurationMonitoringIgnored.proptTypes = {
  agent: PropTypes.object
};

export default WzConfigurationMonitoringIgnored;
