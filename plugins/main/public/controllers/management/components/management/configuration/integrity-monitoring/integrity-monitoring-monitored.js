/*
 * Wazuh app - React component for show configuration of integrity monitoring - monitored tab.
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
import WzConfigurationListSelector from '../util-components/configuration-settings-list-selector';
import WzNoConfig from '../util-components/no-config';
import { settingsListBuilder } from '../utils/builders';

const renderOptsIncludes = key => item => (item.includes(key) ? 'yes' : 'no');

const mainSettings = [
  { field: 'dir', label: '선택된 항목' },
  {
    field: 'opts',
    label: '실시간 모니터링 활성화',
    render: renderOptsIncludes('realtime')
  },
  {
    field: 'opts',
    label: '감사(who-data) 활성화',
    render: renderOptsIncludes('check_whodata')
  },
  {
    field: 'opts',
    label: '파일 변경 보고',
    render: renderOptsIncludes('report_changes')
  },
  {
    field: 'opts',
    label: '모든 체크섬 수행',
    render: renderOptsIncludes('check_all')
  },
  {
    field: 'opts',
    label: '체크섬 (MD5 및 SHA1)',
    render: renderOptsIncludes('check_sum')
  },
  {
    field: 'opts',
    label: 'MD5 체크섬 확인',
    render: renderOptsIncludes('check_md5sum')
  },
  {
    field: 'opts',
    label: 'SHA1 체크섬 확인',
    render: renderOptsIncludes('check_sha1sum')
  },
  {
    field: 'opts',
    label: 'SHA256 체크섬 확인',
    render: renderOptsIncludes('check_sha256sum')
  },
  {
    field: 'opts',
    label: '파일 크기 확인',
    render: renderOptsIncludes('check_size')
  },
  {
    field: 'opts',
    label: '파일 소유자 확인',
    render: renderOptsIncludes('check_owner')
  },
  {
    field: 'opts',
    label: '파일 그룹 확인',
    render: renderOptsIncludes('check_group')
  },
  {
    field: 'opts',
    label: '파일 권한 확인',
    render: renderOptsIncludes('check_perm')
  },
  {
    field: 'opts',
    label: '파일 수정 시간 확인',
    render: renderOptsIncludes('check_mtime')
  },
  {
    field: 'opts',
    label: '파일 inode 확인',
    render: renderOptsIncludes('check_inode')
  },
  { field: 'restrict', label: '이 문자열을 포함하는 파일로 제한' },
  { field: 'tags', label: '알림용 사용자 지정 태그' },
  { field: 'recursion_level', label: '재귀 수준' },
  {
    field: 'opts',
    label: '심볼릭 링크 따라가기',
    render: renderOptsIncludes('follow_symbolic_link')
  }
];

const columnsAgentWin = [
  { field: 'entry', name: '항목' },
  { field: 'arch', name: '아키텍처' }
];

class WzConfigurationIntegrityMonitoringMonitored extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { currentConfig, agent } = this.props;
    const items =
      currentConfig['syscheck-syscheck'] &&
      currentConfig['syscheck-syscheck'].syscheck &&
      currentConfig['syscheck-syscheck'].syscheck.directories
        ? settingsListBuilder(
            currentConfig['syscheck-syscheck'].syscheck.directories,
            'dir'
          )
        : [];
    return (
      <Fragment>
        {currentConfig &&
        currentConfig['syscheck-syscheck'] &&
        currentConfig['syscheck-syscheck'].syscheck &&
        (currentConfig['syscheck-syscheck'].syscheck.directories &&
        !currentConfig['syscheck-syscheck'].syscheck.directories.length  &&
        ((currentConfig['syscheck-syscheck'].syscheck.registry &&
        !currentConfig['syscheck-syscheck'].syscheck.registry.length) || !currentConfig['syscheck-syscheck'].syscheck.registry)) ? (
          <WzNoConfig error="not-present" />
        ) : null}
        {currentConfig &&
        currentConfig['syscheck-syscheck'] &&
        currentConfig['syscheck-syscheck'].syscheck &&
        currentConfig['syscheck-syscheck'].syscheck.directories &&
        currentConfig['syscheck-syscheck'].syscheck.directories.length > 0 ? (
          <WzConfigurationSettingsHeader
            title="모니터링되는 디렉터리"
            description="이 디렉터리는 무결성 스캔에 포함됩니다"
          >
            <WzConfigurationListSelector
              items={items}
              settings={mainSettings}
            />
            {((agent || {}).os || {}).platform === 'windows' &&
              currentConfig &&
              currentConfig['syscheck-syscheck'] &&
              currentConfig['syscheck-syscheck'].syscheck &&
              currentConfig['syscheck-syscheck'].syscheck.registry && (
                <Fragment>
                  <EuiSpacer />
                  <WzConfigurationSettingsHeader
                    title="모니터링되는 레지스트리 항목"
                    description="모니터링될 레지스트리 항목 목록"
                  />
                  <EuiBasicTable
                    items={currentConfig['syscheck-syscheck'].syscheck.registry}
                    columns={columnsAgentWin}
                  />
                </Fragment>
            )}
          </WzConfigurationSettingsHeader>
        ) : null}
        {((agent || {}).os || {}).platform === 'windows' &&
          currentConfig &&
          currentConfig['syscheck-syscheck'] &&
          currentConfig['syscheck-syscheck'].syscheck &&
          !currentConfig['syscheck-syscheck'].syscheck.registry && (
            <WzNoConfig error="not-present" />
          )}
        {((agent || {}).os || {}).platform === 'windows' &&
          currentConfig &&
          currentConfig['syscheck-syscheck'] &&
          currentConfig['syscheck-syscheck'].syscheck &&
          currentConfig['syscheck-syscheck'].syscheck.registry &&
          currentConfig['syscheck-syscheck'].syscheck.registry.length > 0 &&
          ((currentConfig['syscheck-syscheck'].syscheck.directories && !currentConfig['syscheck-syscheck'].syscheck.directories.length)
            || !currentConfig['syscheck-syscheck'].syscheck.directories) && (
              <WzConfigurationSettingsHeader
                title="모니터링되는 레지스트리 항목"
                description="모니터링될 레지스트리 항목 목록"
              >
                <EuiBasicTable
                  items={currentConfig['syscheck-syscheck'].syscheck.registry}
                  columns={columnsAgentWin}
                />
              </WzConfigurationSettingsHeader>
          )}
      </Fragment>
    );
  }
}

WzConfigurationIntegrityMonitoringMonitored.proptTypes = {
  agent: PropTypes.object
};

export default WzConfigurationIntegrityMonitoringMonitored;
