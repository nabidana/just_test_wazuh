/*
 * Wazuh app - React component for show configuration of integrity monitoring - whodata tab.
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

import { EuiBasicTable } from '@elastic/eui';

import WzConfigurationSettingsHeader from '../util-components/configuration-settings-header';
import WzConfigurationSettingsGroup from '../util-components/configuration-settings-group';
import WzNoConfig from '../util-components/no-config';

const mainSettings = [
  { field: 'restart_audit', label: 'audit 재시작' },
  { field: 'startup_healthcheck', label: '시작 상태 점검' },
  { field: 'provider', label: '공급자' },
  { field: 'queue_size', label: '큐 크기' },
];

const columns = [{ field: 'audit_key', name: '키' }];

class WzConfigurationIntegrityMonitoringWhoData extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { currentConfig } = this.props;
    return (
      <>
        {!currentConfig?.['syscheck-syscheck']?.syscheck?.whodata && (
          <WzNoConfig error='not-present' />
        )}
        {currentConfig?.['syscheck-syscheck']?.syscheck?.whodata && (
          <WzConfigurationSettingsHeader
            title='Who-data 감사 키'
            description='서버는 audit_key를 사용하여 Audit이 모니터링하는 이벤트를 FIM 기준선에 포함합니다.'
          >
            <WzConfigurationSettingsGroup
              config={currentConfig['syscheck-syscheck'].syscheck.whodata}
              items={mainSettings}
            />
            {currentConfig['syscheck-syscheck'].syscheck.whodata.audit_key && (
              <EuiBasicTable
                items={currentConfig[
                  'syscheck-syscheck'
                ].syscheck.whodata.audit_key.map(item => ({
                  audit_key: item,
                }))}
                columns={columns}
              />
            )}
          </WzConfigurationSettingsHeader>
        )}
      </>
    );
  }
}

export default WzConfigurationIntegrityMonitoringWhoData;
