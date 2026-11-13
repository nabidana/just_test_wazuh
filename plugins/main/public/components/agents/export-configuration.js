/*
 * Wazuh app - React component for exporting the configuration of a group.
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

import {
  EuiPopover,
  EuiButton,
  EuiCheckboxGroup,
  EuiSpacer,
  EuiButtonEmpty,
} from '@elastic/eui';

import PropTypes from 'prop-types';
import { withErrorBoundary } from '../common/hocs';
import { hasAgentSupportModule } from '../../react-services';

export const ExportConfiguration = withErrorBoundary(
  class ExportConfiguration extends Component {
    constructor(props) {
      super(props);

      this.state = {
        buttonDisabled: false,
        isPopoverOpen: false,
      };

      const agentOptions = [
        '전역 구성',
        '통신',
        '플러딩 방지 설정',
        '레이블',
        '정책 모니터링',
        { name: 'oscap', desc: 'OpenSCAP' },
        'CIS-CAT',
        'Osquery',
        '인벤토리 데이터',
        '능동 대응',
        '명령',
        { name: 'docker', desc: 'Docker listener' },
        '로그 수집',
        '무결성 모니터링',
      ];
      const groupOptions = ['구성', '그룹 내 에이전트'];

      this.options = [];
      const list = this.props.type === 'agent' ? agentOptions : groupOptions;
      list.forEach((x, idx) => {
        if (
          typeof x === 'string' ||
          (x.name && hasAgentSupportModule(this.props.agent, x.name))
        ) {
          this.options.push({ id: `${idx}`, label: x.desc || x });
        }
      });

      let initialChecks = {};
      this.options.forEach(x => {
        initialChecks[x.id] = true;
      });
      this.state.checkboxIdToSelectedMap = initialChecks;
    }

    selectAll(flag) {
      let newCheckboxIdToSelectedMap = {};
      for (let i = 0; i < this.options.length; i++) {
        newCheckboxIdToSelectedMap[`${this.options[i].id}`] = flag;
      }
      this.setState({
        checkboxIdToSelectedMap: newCheckboxIdToSelectedMap,
        buttonDisabled: !flag,
      });
    }

    exportClick() {
      this.setState({
        isPopoverOpen: !this.state.isPopoverOpen,
      });
    }

    closePopover() {
      this.setState({
        isPopoverOpen: false,
      });
    }

    onChange = optionId => {
      const newCheckboxIdToSelectedMap = {
        ...this.state.checkboxIdToSelectedMap,
        ...{
          [optionId]: !this.state.checkboxIdToSelectedMap[optionId],
        },
      };
      let result = false;
      for (let i = 0; i < this.options.length; i++) {
        if (newCheckboxIdToSelectedMap[`${this.options[i].id}`] === true) {
          result = true;
        }
      }
      this.setState({
        checkboxIdToSelectedMap: newCheckboxIdToSelectedMap,
        buttonDisabled: !result,
      });
    };

    render() {
      const button = (
        <EuiButtonEmpty
          iconType='importAction'
          iconSide='left'
          size='s'
          style={{ marginTop: '4px' }}
          onClick={this.exportClick.bind(this)}
        >
          PDF 내보내기
        </EuiButtonEmpty>
      );
      return (
        <EuiPopover
          id='trapFocus'
          ownFocus
          button={button}
          isOpen={this.state.isPopoverOpen}
          closePopover={this.closePopover.bind(this)}
          anchorPosition='downRight'
        >
          <EuiCheckboxGroup
            options={this.options}
            idToSelectedMap={this.state.checkboxIdToSelectedMap}
            onChange={this.onChange}
            compressed
          />
          <EuiSpacer size='s' />
          {this.options.length > 3 && (
            <>
              <EuiButtonEmpty size='xs' onClick={() => this.selectAll(true)}>
                전체 선택
              </EuiButtonEmpty>
              <EuiSpacer size='s' />
              <EuiButtonEmpty size='xs' onClick={() => this.selectAll(false)}>
                전체 해제
              </EuiButtonEmpty>
            </>
          )}
          <EuiSpacer size='m' />
          <EuiButton
            isDisabled={this.state.buttonDisabled}
            onClick={() => {
              this.closePopover();
              this.props.exportConfiguration(
                this.state.checkboxIdToSelectedMap,
              );
            }}
            fill
          >
            PDF 보고서 생성
          </EuiButton>
        </EuiPopover>
      );
    }
  },
);

ExportConfiguration.propTypes = {
  exportConfiguration: PropTypes.func,
  type: PropTypes.string,
  agentPlatform: PropTypes.string,
};
