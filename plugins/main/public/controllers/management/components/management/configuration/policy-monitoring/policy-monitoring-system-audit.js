/*
 * Wazuh app - React component for show configuration of policy monitoring - system audit tab.
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

const columns = [{ field: 'path', name: '경로' }];

class WzPolicyMonitoringSystemAudit extends Component {
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
          !currentConfig['syscheck-rootcheck'].rootcheck.system_audit && (
            <WzNoConfig error="not-present" />
          )}
        {currentConfig &&
          currentConfig['syscheck-rootcheck'] &&
          currentConfig['syscheck-rootcheck'].rootcheck &&
          currentConfig['syscheck-rootcheck'].rootcheck.system_audit && (
            <WzConfigurationSettingsHeader
              title="UNIX 감사 파일"
              description="Unix 계열 시스템의 감사 정의 파일에 지정된 경로"
            >
              <EuiBasicTable
                items={currentConfig[
                  'syscheck-rootcheck'
                ].rootcheck.system_audit.map(item => ({ path: item }))}
                columns={columns}
              />
            </WzConfigurationSettingsHeader>
          )}
      </Fragment>
    );
  }
}

export default WzPolicyMonitoringSystemAudit;
