/*
 * Wazuh app - React component for show Client-Buffer configuration.
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
import WzConfigurationSettingsHeader from '../util-components/configuration-settings-header';
import WzConfigurationSettingsGroup from '../util-components/configuration-settings-group';
import withWzConfig from '../util-hocs/wz-config';
import {
  isString,
  renderValueNoThenEnabled,
  renderValueOrDefault,
} from '../utils/utils';
import { webDocumentationLink } from '../../../../../../../common/services/web_documentation';

const helpLinks = [
  {
    text: '플러딩 방지 메커니즘',
    href: webDocumentationLink(
      'user-manual/agent/agent-management/antiflooding.html',
    ),
  },
  {
    text: 'Client buffer 참조',
    href: webDocumentationLink(
      'user-manual/reference/ossec-conf/client-buffer.html',
    ),
  },
];

const mainSettings = [
  {
    field: 'disabled',
    label: '버퍼 상태',
    render: renderValueNoThenEnabled,
  },
  {
    field: 'queue_size',
    label: '큐 크기',
    render: renderValueOrDefault('5000'),
  },
  {
    field: 'events_per_second',
    label: '초당 이벤트 수',
    render: renderValueOrDefault('500'),
  },
];

class WzConfigurationClientBuffer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { currentConfig } = this.props;
    return (
      <Fragment>
        {currentConfig['agent-buffer'] &&
          isString(currentConfig['agent-buffer']) && (
            <WzNoConfig
              error={currentConfig['agent-buffer']}
              help={helpLinks}
            />
          )}
        {currentConfig['agent-buffer'] &&
          !isString(currentConfig['agent-buffer']) &&
          !currentConfig['agent-buffer'].buffer && (
            <WzNoConfig error='not-present' help={helpLinks} />
          )}
        {currentConfig['agent-buffer'] &&
          !isString(currentConfig['agent-buffer']) &&
          currentConfig['agent-buffer'].buffer && (
            <WzConfigurationSettingsHeader
              title='기본 설정'
              description='이 설정은 에이전트의 이벤트 처리 속도를 결정합니다'
              help={helpLinks}
            >
              <WzConfigurationSettingsGroup
                config={currentConfig['agent-buffer'].buffer}
                items={mainSettings}
              />
            </WzConfigurationSettingsHeader>
          )}
      </Fragment>
    );
  }
}

const sections = [{ component: 'agent', configuration: 'buffer' }];

export default withWzConfig(sections)(WzConfigurationClientBuffer);
