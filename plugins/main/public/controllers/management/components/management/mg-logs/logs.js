/*
 * Wazuh app - Component what renders Management/Logs
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
import {
  EuiButtonEmpty,
  EuiCallOut,
  EuiCodeBlock,
  EuiFlexGroup,
  EuiFlexItem,
  EuiPage,
  EuiPageBody,
  EuiPanel,
  EuiProgress,
  EuiSelect,
  EuiSpacer,
  EuiSwitch,
  EuiTextColor,
  EuiTitle,
} from '@elastic/eui';
import 'brace/mode/less';
import 'brace/theme/github';
import exportCsv from '../../../../../react-services/wz-csv';
import { getToasts } from '../../../../../kibana-services';
import { WzRequest } from '../../../../../react-services/wz-request';
// GS 인증용: /manager/logs API의 타임스탬프는 실제 UTC가 아니라 로컬(서버) 시각에
// "Z"만 붙은 값이라 formatUIDate 대신 전용 포맷터 사용 (time-service.js 참고)
import { formatManagerLogDate } from '../../../../../react-services/time-service';
import {
  withGlobalBreadcrumb,
  withUserAuthorizationPrompt,
} from '../../../../../components/common/hocs';
import { compose } from 'redux';
import { UI_LOGGER_LEVELS } from '../../../../../../common/constants';
import { UI_ERROR_SEVERITIES } from '../../../../../react-services/error-orchestrator/types';
import { getErrorOrchestrator } from '../../../../../react-services/common-services';
import { WzFieldSearchDelay } from '../../../../../components/common/search';
import { logs } from '../../../../../utils/applications';

export default compose(
  withGlobalBreadcrumb([{ text: logs.breadcrumbLabel }]),
  withUserAuthorizationPrompt([
    { action: 'cluster:status', resource: '*:*:*' },
    { action: 'cluster:read', resource: 'node:id:*' },
  ]),
)(
  class WzLogs extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isCluster: false,
        selectedDaemon: '',
        logLevelSelect: '',
        descendingSort: false,
        searchBarValue: '',
        appliedSearch: '',
        logsList: '',
        isLoading: false,
        offset: 0,
        selectedNode: '',
        logsPath: '',
        nodeList: [],
        totalItems: 0,
        daemonsList: [],
        loadingLogs: false,
        realTime: false,
      };
      this.ITEM_STYLE = { width: '300px' };
      this.HEIGHT_WITHOUT_CODE_EDITOR = 400;
    }

    async componentDidMount() {
      try {
        this.setState({ isLoading: true });

        const { nodeList, logsPath, selectedNode } = await this.getLogsPath();
        await this.initDaemonsList(logsPath);

        this.setState(
          {
            generatingCsv: false,
            selectedNode,
            selectedDaemon: 'all',
            logLevelSelect: 'all',
            realTime: false,
            descendingSort: false,
            offset: 0,
            totalItems: 0,
            logsPath,
            loadingLogs: false,
            nodeList,
          },
          async () => {
            await this.setFullLogs();
            this.setState({
              isLoading: false,
            });
          },
        );
      } catch (error) {
        this.setState({
          isLoading: false,
        });

        const options = {
          context: `${WzLogs.name}.componentDidMount`,
          level: UI_LOGGER_LEVELS.ERROR,
          severity: UI_ERROR_SEVERITIES.CRITICAL,
          store: true,
          error: {
            error: error,
            message: error.message || error,
            title: error.name || error,
          },
        };

        getErrorOrchestrator().handleError(options);
      }
    }

    componentWillUnmount() {
      clearInterval(this.realTimeInterval);
    }

    async initDaemonsList(logsPath) {
      try {
        const path = logsPath + '/summary';
        const responseLogsSummary = await WzRequest.apiReq('GET', path, {});
        const daemonsList = [
          'all',
          ...responseLogsSummary?.data?.data?.affected_items
            .map(logSummary => Object.keys(logSummary)[0])
            .sort(),
        ];
        this.setState({ daemonsList });
      } catch (error) {
        throw new Error('데몬 목록을 가져오는 중 오류가 발생했습니다: ' + error);
      }
    }

    parseLogsToText(logs) {
      let result = '';
      logs.forEach(item => {
        result +=
          formatManagerLogDate(item.timestamp) +
          ' ' +
          (item.tag || '').replace(/^wazuh-/, '') +
          ' ' +
          item.level.toUpperCase() +
          ' ' +
          item.description +
          '\n';
      });
      return result;
    }

    buildFilters(customOffset = 0) {
      let result = { limit: 100 };
      if (customOffset) {
        result['offset'] = customOffset;
      }
      if (this.state.logLevelSelect !== 'all')
        result['level'] = this.state.logLevelSelect;
      if (this.state.selectedDaemon !== 'all')
        result['tag'] = this.state.selectedDaemon;
      if (this.state.appliedSearch) result['search'] = this.state.appliedSearch;
      result['sort'] = `${this.state.descendingSort ? '-' : '+'}timestamp`;

      return result;
    }

    async getFullLogs(customOffset = 0) {
      const { logsPath } = this.state;
      let result = '';
      let totalItems = 0;

      // Avoid attempts to send invalid requests if the logsPath variable
      // hasn't been intialized yet (caused by the onSearchBarSearch event).
      if (logsPath === '') {
        return result;
      }

      try {
        const tmpResult = await WzRequest.apiReq('GET', logsPath, {
          params: this.buildFilters(customOffset),
        });
        const resultItems = tmpResult?.data?.data?.affected_items;
        totalItems = tmpResult?.data?.data?.total_affected_items;
        result = this.parseLogsToText(resultItems) || '';
      } catch (error) {
        throw new Error('로그를 가져오는 중 오류가 발생했습니다: ' + error);
      }

      this.setState({ totalItems });
      return result;
    }

    async setFullLogs() {
      try {
        const result = await this.getFullLogs();
        this.setState({ logsList: result, offset: 0 });
      } catch (error) {
        const options = {
          context: `${WzLogs.name}.setFullLogs`,
          level: UI_LOGGER_LEVELS.ERROR,
          severity: UI_ERROR_SEVERITIES.BUSINESS,
          store: true,
          error: {
            error: error,
            message: error.message || error,
            title: error.name || error,
          },
        };

        getErrorOrchestrator().handleError(options);
      }
    }

    /**
     * Returns an object with the path to request Wazuh logs, the list of nodes and the current selected node.
     */
    async getLogsPath() {
      try {
        const clusterStatus = await WzRequest.apiReq(
          'GET',
          '/cluster/status',
          {},
        );
        const clusterEnabled =
          clusterStatus?.data?.data?.running === 'yes' &&
          clusterStatus?.data?.data?.enabled === 'yes';

        if (clusterEnabled) {
          let nodeList = '';
          let selectedNode = '';
          const nodeListTmp = await WzRequest.apiReq(
            'GET',
            '/cluster/nodes',
            {},
          );
          if (Array.isArray(nodeListTmp?.data?.data?.affected_items)) {
            nodeList = nodeListTmp.data.data.affected_items;
            selectedNode = nodeListTmp.data.data.affected_items.filter(
              item => item.type === 'master',
            )[0].name;
          }
          return {
            nodeList,
            logsPath: `/cluster/${selectedNode}/logs`,
            selectedNode: selectedNode,
          };
        }

        return { nodeList: '', logsPath: '/manager/logs', selectedNode: '' };
      } catch (error) {
        throw new Error('로그 경로를 구성하는 중 오류가 발생했습니다: ' + error);
      }
    }

    getDaemonsOptions() {
      return this.state.daemonsList.length > 0
        ? this.state.daemonsList.map(item => {
            return {
              value: item,
              text:
                item === 'all' ? '전체 데몬' : item.replace(/^wazuh-/, ''),
            };
          })
        : [{ value: 'all', text: '전체 데몬' }];
    }

    getLogLevelOptions() {
      return [
        { value: 'all', text: '전체 로그 레벨' },
        { value: 'info', text: '정보' },
        { value: 'error', text: '오류' },
        { value: 'warning', text: '경고' },
        { value: 'critical', text: '치명적' },
        { value: 'debug', text: '디버그' },
        { value: 'debug2', text: '디버그2' },
      ];
    }

    getNodeList() {
      try {
        if (this.state.nodeList && Array.isArray(this.state.nodeList)) {
          return this.state.nodeList.map(item => {
            return { value: item.name, text: `${item.name} (${item.type})` };
          });
        } else {
          return false;
        }
      } catch (error) {
        const options = {
          context: `${WzLogs.name}.getNodeList`,
          level: UI_LOGGER_LEVELS.ERROR,
          severity: UI_ERROR_SEVERITIES.BUSINESS,
          store: true,
          error: {
            error: error,
            message: '노드 목록을 가져오는 중 오류가 발생했습니다.',
            title: error.name,
          },
        };

        getErrorOrchestrator().handleError(options);
      }
    }

    onDaemonChange = e => {
      this.setState(
        {
          selectedDaemon: e.target.value,
        },
        this.setFullLogs,
      );
    };

    onLogLevelChange = e => {
      this.setState(
        {
          logLevelSelect: e.target.value,
        },
        this.setFullLogs,
      );
    };

    onSortSwitchChange = e => {
      this.setState(
        {
          descendingSort: e.target.checked,
        },
        this.setFullLogs,
      );
    };

    onSelectNode = e => {
      this.setState(
        {
          selectedNode: e.target.value,
          logsPath: `/cluster/${e.target.value}/logs`,
        },
        this.setFullLogs,
      );
    };

    onSearchBarChange = e => {
      this.setState({
        searchBarValue: e,
      });
    };

    onSearchBarSearch = e => {
      this.setState(
        {
          appliedSearch: e,
        },
        this.setFullLogs,
      );
    };

    makeSearch() {
      this.setState(
        { appliedSearch: this.state.searchBarValue },
        this.setFullLogs,
      );
    }

    setRealTimeInterval() {
      if (this.state.realTime)
        this.realTimeInterval = setInterval(() => this.setFullLogs(), 5000);
      else clearInterval(this.realTimeInterval);
    }

    switchRealTime() {
      this.setState(
        { realTime: !this.state.realTime },
        this.setRealTimeInterval,
      );
    }

    showToast = (color, title, time) => {
      getToasts().add({
        color: color,
        title: title,
        toastLifeTimeMs: time,
      });
    };

    exportFormatted = async () => {
      try {
        this.setState({ generatingCsv: true });
        this.showToast(
          'success',
          '다운로드가 자동으로 시작됩니다...',
          3000,
        );
        const filters = this.buildFilters();
        await exportCsv(
          this.state.selectedNode
            ? `/cluster/${this.state.selectedNode}/logs`
            : '/manager/logs',
          Object.keys(filters).map(filter => ({
            name: filter,
            value: filters[filter],
          })),
          `${
            this.state.selectedNode ? `${this.state.selectedNode}-` : ''
          }ossec-log`,
        );
      } catch (error) {
        const options = {
          context: `${WzLogs.name}.exportFormatted`,
          level: UI_LOGGER_LEVELS.ERROR,
          severity: UI_ERROR_SEVERITIES.BUSINESS,
          store: true,
          error: {
            error: error,
            message: error.message,
            title: error.name,
          },
        };
        getErrorOrchestrator().handleError(options);
      }
      this.setState({ generatingCsv: false });
    };

    header() {
      const daemonsOptions = this.getDaemonsOptions();
      const logLevelOptions = this.getLogLevelOptions();
      const nodeList = this.getNodeList();

      return (
        <div>
          <EuiFlexGroup>
            <EuiFlexItem>
              <EuiTitle size={'m'}>
                <h2>로그</h2>
              </EuiTitle>
            </EuiFlexItem>
            <EuiFlexItem grow={false}>
              <EuiFlexGroup>
                <EuiFlexItem grow={false}>
                  <EuiButtonEmpty
                    iconType='importAction'
                    onClick={this.exportFormatted}
                    isLoading={this.state.generatingCsv}
                    isDisabled={!this.state.logsList}
                  >
                    서식 내보내기
                  </EuiButtonEmpty>
                </EuiFlexItem>
              </EuiFlexGroup>
            </EuiFlexItem>
          </EuiFlexGroup>
          <EuiFlexGroup>
            <EuiFlexItem>
              <EuiTextColor color='subdued'>
                <p>로그를 조회하고 필터링합니다.</p>
              </EuiTextColor>
            </EuiFlexItem>
          </EuiFlexGroup>
          <EuiFlexGroup>
            <EuiFlexItem>
              <EuiFlexGroup>
                <EuiFlexItem grow={false}>
                  <EuiSelect
                    id='filterDaemon'
                    options={daemonsOptions}
                    value={this.state.selectedDaemon}
                    onChange={this.onDaemonChange}
                    aria-label='데몬으로 필터링'
                  />
                </EuiFlexItem>
                <EuiFlexItem grow={false}>
                  <EuiSelect
                    id='filterLogLevel'
                    options={logLevelOptions}
                    value={this.state.logLevelSelect}
                    onChange={this.onLogLevelChange}
                    aria-label='로그 레벨로 필터링'
                  />
                </EuiFlexItem>
                {this.state.selectedNode && (
                  <EuiFlexItem grow={false}>
                    <EuiSelect
                      id='selectNode'
                      options={nodeList}
                      value={this.state.selectedNode}
                      onChange={this.onSelectNode}
                      aria-label='노드 선택'
                    />
                  </EuiFlexItem>
                )}
                <EuiFlexItem grow={false} style={{ paddingTop: '10px' }}>
                  <EuiSwitch
                    label='내림차순 정렬'
                    checked={this.state.descendingSort}
                    onChange={this.onSortSwitchChange}
                  />
                </EuiFlexItem>
                <EuiFlexItem grow={false} style={{ paddingTop: '10px' }}>
                  <EuiSwitch
                    label='실시간'
                    checked={this.state.realTime}
                    onChange={() => this.switchRealTime()}
                  />
                </EuiFlexItem>
              </EuiFlexGroup>
            </EuiFlexItem>
          </EuiFlexGroup>
          <EuiSpacer size={'s'} />
          <EuiFlexGroup>
            <EuiFlexItem>
              <WzFieldSearchDelay
                delay={500}
                onChange={this.onSearchBarChange}
                onSearch={this.onSearchBarSearch}
                placeholder='로그 필터링'
                aria-label='로그 필터링'
                fullWidth
              />
            </EuiFlexItem>
          </EuiFlexGroup>
        </div>
      );
    }

    async loadExtraLogs() {
      this.setState({ loadingLogs: true });
      const customOffset = this.state.offset + 100;
      const result = await this.getFullLogs(customOffset);
      this.setState({
        offset: customOffset,
        logsList: this.state.logsList.concat(result),
        loadingLogs: false,
      });
    }

    logsTable() {
      return (
        <div>
          {(this.state.logsList && (
            <Fragment>
              <div className='code-block-log-viewer-container'>
                <EuiCodeBlock
                  fontSize='s'
                  paddingSize='m'
                  color='dark'
                  overflowHeight={
                    window.innerHeight - this.HEIGHT_WITHOUT_CODE_EDITOR
                  }
                >
                  {this.state.logsList}
                </EuiCodeBlock>
              </div>
              <EuiSpacer size='m' />
              {this.state.offset + 100 < this.state.totalItems && (
                <EuiFlexGroup justifyContent='center'>
                  <EuiFlexItem
                    grow={false}
                    style={{ marginTop: 0, marginBottom: 0 }}
                  >
                    <EuiButtonEmpty
                      iconType='refresh'
                      isLoading={this.state.loadingLogs}
                      isDisabled={this.state.loadingLogs}
                      onClick={
                        !this.state.loadingLogs
                          ? () => this.loadExtraLogs()
                          : undefined
                      }
                    >
                      로그 더 불러오기
                    </EuiButtonEmpty>
                  </EuiFlexItem>
                </EuiFlexGroup>
              )}
            </Fragment>
          )) || (
            <EuiCallOut
              color='warning'
              title='검색 조건에 맞는 결과가 없습니다.'
              iconType='alert'
            />
          )}
        </div>
      );
    }

    render() {
      return (
        <EuiPage>
          <EuiPageBody>
            <EuiPanel paddingSize='l'>
              {this.header()}
              <EuiSpacer size={'m'} />
              {(!this.state.isLoading && this.logsTable()) || (
                <EuiFlexGroup alignItems='center' justifyContent='center'>
                  <EuiFlexItem>
                    <EuiSpacer />
                    <EuiProgress size='xs' color='primary' />
                  </EuiFlexItem>
                </EuiFlexGroup>
              )}
            </EuiPanel>
          </EuiPageBody>
        </EuiPage>
      );
    }
  },
);
