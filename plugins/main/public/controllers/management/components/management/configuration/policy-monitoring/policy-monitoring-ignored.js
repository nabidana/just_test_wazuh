/*
 * Wazuh app - React component for show configuration of policy monitoring - ignored tab.
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

import { EuiBasicTable, EuiSpacer } from '@elastic/eui';

import WzNoConfig from '../util-components/no-config';
import WzConfigurationSettingsHeader from '../util-components/configuration-settings-header';
import { isString } from '../utils/utils';

const columnsIgnore = [{ field: 'path', name: '경로' }];

const columnsIgnoreSregex = [{ field: 'sreg', name: 'Sregex' }];

class WzConfigurationPolicyMonitoringSystemAudit extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { currentConfig } = this.props;
    return (
      <Fragment>
        {currentConfig['syscheck-rootcheck'] &&
          isString(currentConfig['syscheck-rootcheck']) && (
            <WzNoConfig
              error={currentConfig['syscheck-rootcheck']}
            />
          )}
        {currentConfig &&
          currentConfig['syscheck-rootcheck'] &&
          currentConfig['syscheck-rootcheck'].rootcheck &&
          (!currentConfig['syscheck-rootcheck'].rootcheck.ignore ||
            (currentConfig['syscheck-rootcheck'].rootcheck.ignore &&
              !currentConfig['syscheck-rootcheck'].rootcheck.ignore
                .length)) && (
            <WzNoConfig error="not-present" />
          )}
        {currentConfig &&
        currentConfig['syscheck-rootcheck'] &&
        currentConfig['syscheck-rootcheck'].rootcheck &&
        currentConfig['syscheck-rootcheck'].rootcheck.ignore &&
        currentConfig['syscheck-rootcheck'].rootcheck.ignore.length ? (
          <WzConfigurationSettingsHeader
            title="무시된 파일 및 디렉터리"
            description="이 파일과 디렉터리는 rootcheck 스캔에서 무시됩니다"
          >
            {(currentConfig['syscheck-rootcheck'].rootcheck.ignore || {})
              .length && (
              <Fragment>
                <EuiBasicTable
                  items={currentConfig[
                    'syscheck-rootcheck'
                  ].rootcheck.ignore.map(item => ({ path: item }))}
                  columns={columnsIgnore}
                />
                <EuiSpacer size="m" />
              </Fragment>
            )}
            {(currentConfig['syscheck-rootcheck'].rootcheck.ignore_sregex || {})
              .length && (
              <Fragment>
                <EuiBasicTable
                  items={currentConfig[
                    'syscheck-rootcheck'
                  ].rootcheck.ignore_sregex.map(item => ({ sreg: item }))}
                  columns={columnsIgnoreSregex}
                />
              </Fragment>
            )}
          </WzConfigurationSettingsHeader>
        ) : null}
      </Fragment>
    );
  }
}

export default WzConfigurationPolicyMonitoringSystemAudit;
