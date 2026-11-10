/*
 * Wazuh app - React component for show configuration of cluster.
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

import WzConfigurationSettingsGroup from '../util-components/configuration-settings-group';
import WzConfigurationSettingsHeader from '../util-components/configuration-settings-header';
import WzNoConfig from '../util-components/no-config';
import withWzConfig from '../util-hocs/wz-config';
import { isString, renderValueOrNoValue } from '../utils/utils';

import { connect } from 'react-redux';
import { compose } from 'redux';

const mainSettings = [
  { field: 'disabled', label: '클러스터 상태' },
  { field: 'name', label: '클러스터 이름' },
  { field: 'node_name', label: '노드 이름' },
  { field: 'node_type', label: '노드 유형' },
  { field: 'nodes', label: '마스터 노드 IP 주소' },
  { field: 'port', label: '클러스터 통신을 수신할 포트' },
  {
    field: 'bind_addr',
    label: '클러스터 통신을 수신할 IP 주소',
  },
  { field: 'hidden', label: '알림에서 클러스터 정보 숨기기' },
];

const haproxySettings = [
  { field: 'haproxy_helper.haproxy_disabled', label: 'HAProxy 상태' },
  { field: 'haproxy_helper.haproxy_address', label: '주소' },
  { field: 'haproxy_helper.haproxy_user', label: '사용자' },
  { field: 'haproxy_helper.haproxy_password', label: '비밀번호' },
  { field: 'haproxy_helper.haproxy_port', label: '포트' },
  { field: 'haproxy_helper.haproxy_protocol', label: '프로토콜' },
  { field: 'haproxy_helper.haproxy_backend', label: '백엔드' },
  { field: 'haproxy_helper.frequency', label: '주기' },
  { field: 'haproxy_helper.agent_chunk_size', label: '에이전트 청크 크기' },
  {
    field: 'haproxy_helper.agent_reconnection_time',
    label: '에이전트 재연결 시간',
  },
  {
    field: 'haproxy_helper.agent_reconnection_stability_time',
    label: '에이전트 재연결 안정화 시간',
  },
  { field: 'haproxy_helper.imbalance_tolerance', label: '불균형 허용치' },
  {
    field: 'haproxy_helper.remove_disconnected_node_after',
    label: '연결 끊긴 노드 제거 대기 시간',
  },
  { field: 'haproxy_helper.haproxy_resolver', label: '리졸버' },
  {
    field: 'haproxy_helper.excluded_nodes',
    label: '제외된 노드',
    render: renderValueOrNoValue,
  },
];

export class WzCluster extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { currentConfig, wazuhNotReadyYet } = this.props;
    let mainSettingsConfig = {
      ...currentConfig['com-cluster'],
      disabled:
        currentConfig['com-cluster'].disabled === true ? 'disabled' : 'enabled',
    };

    if (currentConfig['com-cluster'].haproxy_helper) {
      mainSettingsConfig = {
        ...mainSettingsConfig,
        haproxy_helper: {
          ...currentConfig['com-cluster'].haproxy_helper,
          haproxy_disabled:
            currentConfig['com-cluster'].haproxy_helper.haproxy_disabled ===
            true
              ? 'disabled'
              : 'enabled',
        },
      };
    }
    return (
      <Fragment>
        {currentConfig['com-cluster'] &&
          isString(currentConfig['com-cluster']) && (
            <WzNoConfig error={currentConfig['com-cluster']} />
          )}
        {wazuhNotReadyYet &&
          (!currentConfig || !currentConfig['com-cluster']) && (
            <WzNoConfig error='서버가 아직 준비되지 않았습니다' />
          )}
        {currentConfig['com-cluster'] &&
          !isString(currentConfig['com-cluster']) && (
            <WzConfigurationSettingsHeader
              title='기본 설정'
            >
              <WzConfigurationSettingsGroup
                config={mainSettingsConfig}
                items={mainSettings}
              />
              {mainSettingsConfig.haproxy_helper && (
                <WzConfigurationSettingsGroup
                  title='HAProxy 설정'
                  config={mainSettingsConfig}
                  items={haproxySettings}
                />
              )}
            </WzConfigurationSettingsHeader>
          )}
      </Fragment>
    );
  }
}

const sections = [{ component: 'com', configuration: 'cluster' }];

const mapStateToProps = state => ({
  wazuhNotReadyYet: state.appStateReducers.wazuhNotReadyYet,
});

WzCluster.propTypes = {
  wazuhNotReadyYet: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
};

export default compose(
  withWzConfig(sections),
  connect(mapStateToProps),
)(WzCluster);
