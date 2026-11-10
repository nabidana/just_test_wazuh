/*
 * Wazuh app - React component for show configuration of registration service.
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

import WzConfigurationSettingsGroup from '../util-components/configuration-settings-group';
import WzConfigurationSettingsHeader from '../util-components/configuration-settings-header';
import withWzConfig from '../util-hocs/wz-config';
import WzNoConfig from '../util-components/no-config';
import {
  isString,
  renderValueNoThenEnabled,
  renderValueYesThenEnabled,
} from '../utils/utils';

const mainSettings = [
  {
    field: 'disabled',
    label: '서비스 상태',
    render: renderValueNoThenEnabled,
  },
  { field: 'port', label: '연결을 수신할 포트' },
  { field: 'use_source_ip', label: '클라이언트의 소스 IP 주소 사용' },
  { field: 'use_password', label: '에이전트 등록에 비밀번호 사용' },
  { field: 'purge', label: '에이전트 제거 시 에이전트 목록 정리' },
  {
    field: 'limit_maxagents',
    label: '최대 에이전트 수로 등록 제한',
  },
  {
    field: 'force.enabled',
    label: '기존 IP 주소 사용 시 강제 등록',
  },
  {
    field: 'force.after_registration_time',
    label:
      '에이전트 등록 후 경과 시간(초)이 설정된 값보다 클 때만 에이전트 교체를 수행하도록 지정',
  },
  {
    field: 'force.key_mismatch',
    label: '유효한 키를 이미 보유한 에이전트는 재등록하지 않음',
  },
  {
    field: 'force.disconnected_time.enabled',
    label:
      '특정 시간보다 오래 연결이 끊긴 에이전트에 대해서만 교체를 수행하도록 지정',
  },
  {
    field: 'force.disconnected_time.value',
    label: '에이전트가 연결 끊김 상태인 시간(초)',
  },
];

const keyRequestSettings = [
  {
    field: 'key_request.enabled',
    label: '키 요청 상태',
    render: renderValueYesThenEnabled,
  },
  {
    field: 'key_request.exec_path',
    label: '실행 파일의 전체 경로',
  },
  {
    field: 'key_request.socket',
    label: 'Unix 도메인 소켓의 전체 경로',
  },
  {
    field: 'key_request.timeout',
    label: '실행 파일의 응답을 기다리는 최대 시간',
  },
  {
    field: 'key_request.threads',
    label: '외부 키 요청을 처리하는 스레드 수',
  },
  {
    field: 'key_request.queue_size',
    label: '외부 키를 가져오기 위한 큐의 최대 크기',
  },
];

const sslSettings = [
  {
    field: 'ssl_verify_host',
    label: 'CA 인증서가 지정된 경우 호스트 확인',
  },
  {
    field: 'ssl_agent_ca',
    label: '클라이언트 확인에 사용되는 CA 인증서 경로',
  },
  {
    field: 'ssl_auto_negotiate',
    label: 'SSL 협상 방식 자동 선택',
  },
  { field: 'ssl_manager_ca', label: 'CA 인증서 위치' },
  { field: 'ssl_manager_cert', label: '서버 SSL 인증서 위치' },
  { field: 'ssl_manager_key', label: '서버 SSL 키 위치' },
  { field: 'ciphers', label: '다음 SSL 암호화 방식 사용' },
];

class WzRegistrationService extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.updateBadge(this.badgeEnabled());
  }
  badgeEnabled() {
    return (
      this.props.currentConfig['auth-auth'] &&
      this.props.currentConfig['auth-auth'].auth &&
      this.props.currentConfig['auth-auth'].auth.disabled === 'no'
    );
  }
  render() {
    const { currentConfig } = this.props;
    return (
      <Fragment>
        {currentConfig['auth-auth'] && !currentConfig['auth-auth'].auth && (
          <WzNoConfig error={currentConfig['auth-auth']} />
        )}
        {currentConfig['auth-auth'] &&
          currentConfig['auth-auth'].auth &&
          !isString(currentConfig['auth-auth'].auth) && (
            <WzConfigurationSettingsHeader
              title='기본 설정'
              description='등록 서비스에 적용되는 일반 설정'
            >
              <WzConfigurationSettingsGroup
                config={currentConfig['auth-auth'].auth}
                items={mainSettings}
              />
              <WzConfigurationSettingsGroup
                title='키 요청 설정'
                description='키 요청 기능을 사용하면 데이터베이스와 같은 외부 소스에서 에이전트 키를 가져올 수 있습니다'
                config={currentConfig['auth-auth'].auth}
                items={keyRequestSettings}
              />
              <WzConfigurationSettingsGroup
                title='SSL 설정'
                description='등록 서비스가 SSL 인증서를 사용할 때 적용됨'
                config={currentConfig['auth-auth'].auth}
                items={sslSettings}
              />
            </WzConfigurationSettingsHeader>
          )}
      </Fragment>
    );
  }
}

export default withWzConfig([{ component: 'auth', configuration: 'auth' }])(
  WzRegistrationService,
);
