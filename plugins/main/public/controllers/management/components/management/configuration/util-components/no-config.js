/*
 * Wazuh app - React component for render no config.
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

import {
  EuiIcon,
  EuiHorizontalRule,
  EuiSpacer,
  EuiPanel,
  EuiFlexGroup,
  EuiFlexItem
} from '@elastic/eui';

class WzNoConfig extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { error } = this.props;
    return (
      <EuiPanel>
        <EuiFlexGroup>
          <EuiFlexItem>
            <div style={{ textAlign: 'center' }}>
              <EuiIcon type="help" style={{ marginRight: '4px' }} />
                <span>구성을 사용할 수 없습니다</span>
              <EuiHorizontalRule margin="s" />
              {(error === 'not-present' && (
                <p>이 섹션은 구성 파일에 존재하지 않습니다.</p>
              )) || (
                <span>
                  이 섹션의 구성을 가져오는 중 문제가 발생했습니다.
                  서버 문제이거나 구성이 존재하지 않을 수 있습니다.
                </span>
              )}
            </div>
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiPanel>
    );
  }
}

WzNoConfig.propTypes = {
  error: PropTypes.string.isRequired,
  links: PropTypes.array
};

export default WzNoConfig;
