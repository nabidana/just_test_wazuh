/*
 * Wazuh app - React component for show configuration of integrations.
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
import WzNoConfig from '../util-components/no-config';
import WzConfigurationSettingsGroup from '../util-components/configuration-settings-group';
import withWzConfig from '../util-hocs/wz-config';
import { capitalize, isString } from '../utils/utils';

const defaultIntegrations = [
  { title: 'Slack', description: 'Slack로 직접 알림 받기' },
  {
    title: 'VirusTotal',
    description: '악성 소프트웨어가 발견되면 알림 받기',
  },
  {
    title: 'PagerDuty',
    description: '이 간소화된 인시던트 해결 소프트웨어에서 알림 받기',
  },
];

const integrationsSettings = [
  { field: 'hook_url', label: 'Hook URL' },
  { field: 'level', label: '이 수준 이상으로 알림 필터링' },
  { field: 'rule_id', label: '이 규칙 ID로 알림 필터링' },
  { field: 'group', label: '이 규칙 그룹으로 알림 필터링' },
  {
    field: 'event_location',
    label: '위치(에이전트, IP 주소 또는 파일)로 알림 필터링',
  },
  { field: 'alert_format', label: '알림 기록에 사용되는 형식' },
];

class WzConfigurationIntegrations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: '',
    };
  }
  changeView(view) {
    this.setState({ view });
  }
  buildIntegration(integration) {
    return (
      defaultIntegrations.find(
        i => i.title && i.title.toLocaleLowerCase() === integration,
      ) || { title: capitalize(integration), description: '사용자 지정 통합' }
    );
  }
  render() {
    const { currentConfig } = this.props;
    const integrations =
      currentConfig['integrator-integration'] &&
      currentConfig['integrator-integration'].integration
        ? currentConfig['integrator-integration'].integration
        : false;
    return (
      <Fragment>
        {currentConfig['integrator-integration'] &&
          isString(currentConfig['integrator-integration']) && (
            <WzNoConfig
              error={currentConfig['integrator-integration']}
            />
          )}
        {currentConfig['integrator-integration'] &&
        !isString(currentConfig['integrator-integration'])
          ? integrations &&
            integrations.map((integrationInfo, key) => {
              const integration = Object.assign(
                this.buildIntegration(integrationInfo.name),
                integrationInfo,
              );
              return (
                <Fragment key={`integration-${integration.title}`}>
                  <WzConfigurationSettingsGroup
                    title={integration.title}
                    description={integration.description}
                    items={integrationsSettings}
                    config={integration}
                  />
                </Fragment>
              );
            })
          : null}
      </Fragment>
    );
  }
}

const sections = [{ component: 'integrator', configuration: 'integration' }];

export default withWzConfig(sections)(WzConfigurationIntegrations);
