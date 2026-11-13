/*
 * Wazuh app - React component for show configuration of global configuration - global tab.
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

import { isString } from '../utils/utils';
import { webDocumentationLink } from '../../../../../../../common/services/web_documentation';

const helpLinks = [
  {
    text: 'Global 참조',
    href: webDocumentationLink('user-manual/reference/ossec-conf/global.html'),
  },
  {
    text: 'Logging 참조',
    href: webDocumentationLink('user-manual/reference/ossec-conf/logging.html'),
  },
];

const mainSettings = [
  { field: 'alerts_log', label: 'alerts.log 파일에 알림 기록' },
  {
    field: 'jsonout_output',
    label: 'alerts.json 파일에 JSON 형식 알림 기록',
  },
  { field: 'logall', label: '모든 알림을 일반 텍스트 형식으로 보관' },
  { field: 'logall_json', label: '모든 알림을 JSON 형식으로 보관' },
  {
    field: 'custom_alert_output',
    label: 'alerts.log 파일의 사용자 지정 알림 형식',
  },
  { field: 'plain', label: '내부 로그를 일반 텍스트로 기록' },
  { field: 'json', label: '내부 로그를 JSON 형식으로 기록' },
  { field: 'max_output_size', label: '알림 파일 크기 제한' },
  { field: 'rotate_interval', label: '파일 순환 주기' },
];

const emailSettings = [
  { field: 'email_notification', label: '이메일로 전송되는 알림 활성화' },
  { field: 'email_from', label: '이메일 알림 발신자 주소' },
  { field: 'email_to', label: '이메일 알림 수신자 주소' },
  { field: 'email_reply_to', label: '이메일 알림 회신 주소' },
  { field: 'smtp_server', label: 'SMTP 메일 서버 주소' },
  {
    field: 'email_maxperhour',
    label: '시간당 전송되는 최대 이메일 알림 수',
  },
  { field: 'email_log_source', label: '데이터를 읽어올 파일' },
  { field: 'email_idsname', label: '이메일 알림 헤더에 사용되는 이름' },
];

const otherSettings = [
  {
    field: 'stats',
    label: '통계 분석으로 생성된 알림의 심각도 수준',
  },
  {
    field: 'host_information',
    label: '호스트 변경 모니터로 생성된 알림의 심각도 수준',
  },
  {
    field: 'memory_size',
    label: '알림 상관관계 엔진의 메모리 크기',
  },
  { field: 'white_list', label: '화이트리스트에 등록된 IP 주소' },
  {
    field: 'geoip_db_path',
    label: 'MaxMind GeoIP IPv4 데이터베이스 파일의 전체 경로',
  },
];

const preludeZeroMQOutputSettings = [
  { field: 'prelude_output', label: 'Prelude 출력 활성화' },
  { field: 'zeromq_output', label: 'ZeroMQ 출력 활성화' },
  { field: 'zeromq_uri', label: '게시자 소켓을 바인딩할 ZeroMQ URI' },
];

const buildHelpLinks = agent =>
  agent.id === '000' ? helpLinks : [helpLinks[1]];

class WzConfigurationGlobalConfigurationGlobal extends Component {
  constructor(props) {
    super(props);
    this.helpLinks = buildHelpLinks(this.props.agent);
  }
  render() {
    const { currentConfig, agent, wazuhNotReadyYet } = this.props;
    const mainSettingsConfig =
      agent.id === '000' &&
      currentConfig['analysis-global'] &&
      currentConfig['analysis-global'].global &&
      currentConfig['com-logging'] &&
      currentConfig['com-logging'].logging
        ? {
            ...currentConfig['analysis-global'].global,
            plain: currentConfig['com-logging'].logging.plain,
            json: currentConfig['com-logging'].logging.json,
          }
        : currentConfig['com-logging'] && currentConfig['com-logging'].logging
        ? {
            plain: currentConfig['com-logging'].logging.plain,
            json: currentConfig['com-logging'].logging.json,
          }
        : {};
    const globalSettingsConfig =
      agent.id === '000' &&
      currentConfig['analysis-global'] &&
      currentConfig['analysis-global'].global
        ? {
            ...currentConfig['analysis-global'].global,
          }
        : {};
    return (
      <Fragment>
        {currentConfig['analysis-global'] &&
          isString(currentConfig['analysis-global']) && (
            <WzNoConfig
              error={currentConfig['analysis-global']}
              help={this.helpLinks}
            />
          )}
        {agent &&
          agent.id !== '000' &&
          currentConfig['com-logging'] &&
          isString(currentConfig['com-logging']) && (
            <WzNoConfig
              error={currentConfig['com-global']}
              help={this.helpLinks}
            />
          )}
        {currentConfig['analysis-global'] &&
          !isString(currentConfig['analysis-global']) &&
          !currentConfig['analysis-global'].global && (
            <WzNoConfig error='not-present' help={this.helpLinks} />
          )}
        {wazuhNotReadyYet &&
          (!currentConfig || !currentConfig['analysis-global']) && (
            <WzNoConfig error='서버가 아직 준비되지 않았습니다' help={this.helpLinks} />
          )}
        {((currentConfig['analysis-global'] &&
          currentConfig['analysis-global'].global) ||
          (currentConfig['com-logging'] &&
            currentConfig['com-logging'].logging)) && (
          <WzConfigurationSettingsHeader
            title='기본 설정'
            description='기본 알림 및 로깅 설정'
          >
            <WzConfigurationSettingsGroup
              config={mainSettingsConfig}
              items={mainSettings}
            />
            {agent.id === '000' && (
              <Fragment>
                <WzConfigurationSettingsGroup
                  title='이메일 설정'
                  description='기본 이메일 설정 (세부 이메일 설정에 필요)'
                  config={globalSettingsConfig}
                  items={emailSettings}
                />
                <WzConfigurationSettingsGroup
                  title='기타 설정'
                  description='특정 구성 요소와 직접 관련되지 않은 설정'
                  config={globalSettingsConfig}
                  items={otherSettings}
                />
                <WzConfigurationSettingsGroup
                  title='Prelude 및 ZeroMQ 출력'
                  config={globalSettingsConfig}
                  items={preludeZeroMQOutputSettings}
                />
              </Fragment>
            )}
          </WzConfigurationSettingsHeader>
        )}
      </Fragment>
    );
  }
}

WzConfigurationGlobalConfigurationGlobal.propTypes = {
  agent: PropTypes.object,
  wazuhNotReadyYet: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
};

export default WzConfigurationGlobalConfigurationGlobal;
