/*
 * Wazuh app - React component building the API entries table.
 *
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
  EuiFlexGroup,
  EuiFlexItem,
  EuiInMemoryTable,
  EuiButtonIcon,
  EuiToolTip,
  EuiHealth,
  EuiPanel,
  EuiPage,
  EuiButtonEmpty,
  EuiTitle,
  EuiText,
  EuiLoadingSpinner,
  EuiIcon,
  EuiCallOut,
  EuiSpacer,
  EuiSteps,
  EuiCopy,
  EuiCodeBlock,
  EuiButton,
  EuiLink,
  EuiPopover,
} from '@elastic/eui';
import { WzButtonPermissions } from '../../common/permissions/button';
import { AppState } from '../../../react-services/app-state';
import { withErrorBoundary } from '../../common/hocs';
import { compose } from 'redux';
import { UI_ERROR_SEVERITIES } from '../../../react-services/error-orchestrator/types';
import { UI_LOGGER_LEVELS } from '../../../../common/constants';
import { getErrorOrchestrator } from '../../../react-services/common-services';
import {
  getWazuhCheckUpdatesPlugin,
  getWazuhCorePlugin,
} from '../../../kibana-services';
import { AvailableUpdatesFlyout } from './available-updates-flyout';
import { AddApi } from './add-api';
import {
  WzButtonOpenFlyout,
  WzButtonPermissionsOpenFlyout,
} from '../../common/buttons';
import {
  ApiCheck,
  ErrorHandler,
  GenericRequest,
} from '../../../react-services';
import { WazuhConfig } from '../../../react-services/wazuh-config';

export const ApiTable = compose(withErrorBoundary)(
  class ApiTable extends Component {
    constructor(props) {
      super(props);

      let selectedAPIConnection = null;
      try {
        const currentApi = AppState.getCurrentAPI();

        if (currentApi) {
          const { id } = JSON.parse(currentApi);
          selectedAPIConnection = id;
        }
      } catch (error) {}

      this.state = {
        apiEntries: [],
        selectedAPIConnection,
        refreshingEntries: false,
        availableUpdates: {},
        refreshingAvailableUpdates: false,
        popoverOpened: null,
      };
    }

    async getApisAvailableUpdates(queryApi = false, forceQuery = false) {
      try {
        this.setState({ refreshingAvailableUpdates: true });
        const availableUpdates =
          await getWazuhCheckUpdatesPlugin().getAvailableUpdates(
            queryApi,
            forceQuery,
          );
        this.setState({ availableUpdates });
      } catch (error) {
        const options = {
          context: `${ApiTable.name}.checkAvailableUpdates`,
          level: UI_LOGGER_LEVELS.ERROR,
          severity: UI_ERROR_SEVERITIES.BUSINESS,
          store: true,
          error: {
            error: error,
            message: error.message || error,
            title: `업데이트 확인 중 오류: ${
              error.message || error
            }`,
          },
        };

        getErrorOrchestrator().handleError(options);
      } finally {
        this.setState({ refreshingAvailableUpdates: false });
      }
    }

    componentDidMount() {
      this.refresh();
      this.wazuhConfig = new WazuhConfig().getConfig();
      this.isUpdatesEnabled = !this.wazuhConfig?.['wazuh.updates.disabled'];
      if (this.isUpdatesEnabled) {
        this.getApisAvailableUpdates();
      }
    }

    copyToClipBoard(msg) {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard
          .writeText(msg)
          .then(() => {
            ErrorHandler.info('클립보드에 복사되었습니다');
          })
          .catch(() => {
            this.fallbackCopyToClipboard(msg);
          });
      } else {
        this.fallbackCopyToClipboard(msg); // old method
      }
    }

    fallbackCopyToClipboard(msg) {
      const el = document.createElement('textarea');
      el.value = msg;
      document.body.appendChild(el);
      el.select();
      let successful = false;
      successful = document.execCommand('copy');
      document.body.removeChild(el);
      if (successful) {
        ErrorHandler.info('클립보드에 복사되었습니다');
      } else {
        ErrorHandler.error('텍스트를 복사할 수 없습니다');
      }
    }

    async checkManager(APIConnection, silent = false) {
      try {
        // Get the Api information
        const { username, url, port, id } = APIConnection;

        // Test the connection
        const response = await ApiCheck.checkApi(
          {
            username: username,
            url: url,
            port: port,
            cluster_info: {},
            insecure: 'true',
            id: id,
          },
          true,
        );
        APIConnection.cluster_info = response.data;
        APIConnection.status = 'online';
        APIConnection.allow_run_as = response.data.allow_run_as;
        !silent && ErrorHandler.info('연결 성공', 'Settings');
        // WORKAROUND: Update the apiEntries with the modifications of the APIConnection object
        this.setState({
          apiEntries: this.state.apiEntries,
        });
      } catch (error) {
        if (!silent) {
          const options = {
            context: `${ApiTable.name}.checkManager`,
            level: UI_LOGGER_LEVELS.ERROR,
            severity: UI_ERROR_SEVERITIES.BUSINESS,
            error: {
              error: error,
              message: error.message || error,
              title: error.name || error,
            },
          };
          getErrorOrchestrator().handleError(options);
        }
        throw error;
      }
    }

    async setDefault(APIconnection) {
      try {
        await this.checkManager(APIconnection, true);
        const { cluster_info, id } = APIconnection;
        const { manager, cluster, status } = cluster_info;

        // Check the connection before set as default
        AppState.setClusterInfo(cluster_info);
        const clusterEnabled = status === 'disabled';
        AppState.setCurrentAPI(
          JSON.stringify({
            name: clusterEnabled ? manager : cluster,
            id: id,
          }),
        );

        const currentApi = AppState.getCurrentAPI();
        const currentApiJSON = JSON.parse(currentApi);

        ErrorHandler.info(`API(${currentApiJSON.id})가 기본값으로 설정되었습니다`);

        this.setState({ selectedAPIConnection: currentApiJSON.id });
      } catch (error) {
        const options = {
          context: `${ApiTable.name}.setDefault`,
          level: UI_LOGGER_LEVELS.ERROR,
          severity: UI_ERROR_SEVERITIES.BUSINESS,
          error: {
            error: error,
            message: error.message || error,
            title: error.name || error,
          },
        };
        getErrorOrchestrator().handleError(options);
      }
    }
    async refreshAPI(APIconnection, options) {
      try {
        const data = await ApiCheck.checkApi(APIconnection, true);
        const clusterInfo = data.data || {};
        APIconnection.status = 'online';
        APIconnection.cluster_info = clusterInfo;
        APIconnection.allow_run_as = clusterInfo.allow_run_as;
        if (options?.selectAPIHostOnAvailable) {
          this.setDefault(entry);
        }
      } catch (error) {
        const code = ((error || {}).data || {}).code;
        const downReason =
          typeof error === 'string'
            ? error
            : (error || {}).message ||
              ((error || {}).data || {}).message ||
              'API에 연결할 수 없습니다';
        const status = code === 3099 ? 'down' : 'unknown';
        APIconnection.status = { status, downReason };
        if (APIconnection.id === this.state.selectedAPIConnection) {
          // if the selected API is down, we remove it so a new one will selected
          AppState.removeCurrentAPI();
        }
        throw new Error(error);
      }
    }
    /**
     * Refresh the API entries
     */
    async refresh(options = { selectAPIHostOnAvailable: false }) {
      try {
        let status = 'complete';
        this.setState({ error: false, refreshingEntries: true });
        const responseAPIHosts = await GenericRequest.request(
          'GET',
          '/hosts/apis',
          {},
        );
        const hosts = responseAPIHosts.data || [];
        this.setState({
          apiEntries: hosts.map(host => ({ ...host, status: 'checking' })),
        });
        const entries = [...hosts];
        let numErr = 0;
        for (let idx in entries) {
          const entry = entries[idx];
          try {
            await this.refreshAPI(entry, options);
          } catch (error) {
            numErr = numErr + 1;
          }
        }
        this.setState({
          apiEntries: entries,
          status: status,
          refreshingEntries: false,
          apiIsDown: entries.length > 0 && numErr >= entries.length,
        });
      } catch (error) {
        this.setState({
          refreshingEntries: false,
        });
      }
    }

    /**
     * Checks the API connectivity
     * @param {Object} api
     */
    async checkApi(api) {
      try {
        const entries = this.state.apiEntries;
        const idx = entries.map(e => e.id).indexOf(api.id);
        try {
          await this.checkManager(api);
          entries[idx].status = 'online';
        } catch (error) {
          const code = ((error || {}).data || {}).code;
          const downReason =
            typeof error === 'string'
              ? error
              : (error || {}).message ||
                ((error || {}).data || {}).message ||
                'API에 연결할 수 없습니다';
          const status = code === 3099 ? 'down' : 'unknown';
          entries[idx].status = { status, downReason };
          throw error;
        } finally {
          this.setState({
            apiEntries: entries,
          });
        }
      } catch (error) {
        const options = {
          context: `${ApiTable.name}.checkApi`,
          level: UI_LOGGER_LEVELS.ERROR,
          severity: UI_ERROR_SEVERITIES.BUSINESS,
          store: true,
          error: {
            error: error,
            message: error.message || error,
            title: `매니저 연결 확인 중 오류: ${
              error.message || error
            }`,
          },
        };

        getErrorOrchestrator().handleError(options);
      }
    }

    /**
     * Show/close info UUID
     * @param {String | Null} id
     */
    togglePopoverUUID = id => {
      this.setState({
        popoverOpened: this.state.popoverOpened === id ? null : id,
      });
    };

    render() {
      const { DismissNotificationCheck } = getWazuhCheckUpdatesPlugin();

      const API_UPDATES_STATUS_COLUMN = {
        upToDate: {
          text: '최신 버전',
          color: 'success',
        },
        availableUpdates: {
          text: '업데이트 있음',
          color: 'warning',
        },
        disabled: {
          text: '업데이트 확인 비활성화됨',
          color: 'subdued',
        },
        error: {
          text: '업데이트 확인 오류',
          color: 'danger',
        },
      };

      const isLoading =
        this.state.refreshingEntries || this.state.refreshingAvailableUpdates;

      const items = [
        ...this.state.apiEntries?.map(apiEntry => {
          const versionData =
            this.state.availableUpdates?.apis_available_updates?.find(
              apiAvailableUpdates => apiAvailableUpdates.api_id === apiEntry.id,
            ) || {};

          return {
            ...versionData,
            ...apiEntry,
            version_status: versionData.status,
          };
        }),
      ];

      const columns = [
        {
          field: 'id',
          name: 'ID',
          align: 'left',
          sortable: true,
          render: (item, row) => {
            if (row.cluster_info.uuid) {
              return (
                <EuiPopover
                  button={
                    <EuiLink
                      onClick={() => this.togglePopoverUUID(row.id)}
                      style={{
                        fontWeight: 'normal',
                      }}
                      color='text'
                    >
                      <EuiFlexGroup
                        alignItems='center'
                        gutterSize='xs'
                        responsive={false}
                      >
                        <EuiFlexItem grow={false}>{item}</EuiFlexItem>
                        <EuiFlexItem grow={false}>
                          <EuiToolTip
                            position='top'
                            content='UUID 정보 보기'
                          >
                            <EuiIcon type='iInCircle' color='primary' />
                          </EuiToolTip>
                        </EuiFlexItem>
                      </EuiFlexGroup>
                    </EuiLink>
                  }
                  isOpen={this.state.popoverOpened === row.id}
                  closePopover={() => this.togglePopoverUUID(null)}
                  anchorPosition='upCenter'
                  hasArrow={true}
                  panelPaddingSize='s'
                >
                  <EuiFlexGroup alignItems='center' gutterSize='s'>
                    <EuiFlexItem>
                      <EuiText size='s'>
                        <p>
                          <strong>UUID:</strong> {row.cluster_info.uuid}
                        </p>
                      </EuiText>
                    </EuiFlexItem>
                    <EuiFlexItem grow={false}>
                      <EuiToolTip position='top' content='클립보드에 복사'>
                        <EuiButtonIcon
                          iconType='copy'
                          size='s'
                          aria-label='copy UUID'
                          onClick={() =>
                            this.copyToClipBoard(row.cluster_info.uuid)
                          }
                        />
                      </EuiToolTip>
                    </EuiFlexItem>
                  </EuiFlexGroup>
                </EuiPopover>
              );
            }
            return <EuiText size='s'>{item}</EuiText>;
          },
        },
        {
          field: 'cluster_info.cluster',
          name: '클러스터',
          align: 'left',
          sortable: true,
        },
        {
          field: 'cluster_info.manager',
          name: '매니저',
          align: 'left',
          sortable: true,
        },
        {
          field: 'url',
          name: '호스트',
          align: 'left',
          sortable: true,
        },
        {
          field: 'port',
          name: '포트',
          align: 'left',
          sortable: true,
        },
        {
          field: 'username',
          name: '사용자명',
          align: 'left',
          sortable: true,
        },
        {
          field: 'status',
          name: '상태',
          align: 'left',
          sortable: true,
          render: item => {
            if (item === 'checking') {
              return (
                <span>
                  <EuiLoadingSpinner size='s' />
                  <span>&nbsp;&nbsp;확인 중</span>
                </span>
              );
            }
            if (item) {
              return item === 'online' ? (
                <EuiHealth color='success' style={{ wordBreak: 'normal' }}>
                  온라인
                </EuiHealth>
              ) : item.status === 'down' ? (
                <EuiFlexGroup
                  alignItems='center'
                  gutterSize='xs'
                  responsive={false}
                >
                  <EuiFlexItem grow={false}>
                    <EuiHealth color='warning' style={{ wordBreak: 'normal' }}>
                      경고
                    </EuiHealth>
                  </EuiFlexItem>
                  <EuiFlexItem grow={false}>
                    <EuiToolTip position='top' content={item.downReason}>
                      <EuiButtonIcon
                        color='primary'
                        iconType='questionInCircle'
                        aria-label='오류 정보'
                        onClick={() => this.copyToClipBoard(item.downReason)}
                      />
                    </EuiToolTip>
                  </EuiFlexItem>
                </EuiFlexGroup>
              ) : (
                <EuiFlexGroup
                  alignItems='center'
                  gutterSize='xs'
                  responsive={false}
                >
                  <EuiFlexItem grow={false}>
                    <EuiHealth color='danger' style={{ wordBreak: 'normal' }}>
                      오프라인
                    </EuiHealth>
                  </EuiFlexItem>
                  <EuiFlexItem grow={false}>
                    <EuiToolTip position='top' content={item.downReason}>
                      <EuiButtonIcon
                        color='primary'
                        iconType='questionInCircle'
                        aria-label='오류 정보'
                        onClick={() => this.copyToClipBoard(item.downReason)}
                      />
                    </EuiToolTip>
                  </EuiFlexItem>
                </EuiFlexGroup>
              );
            }
          },
        },
        {
          name: 'Run as',
          field: 'allow_run_as',
          align: 'center',
          sortable: true,
          width: '80px',
          render: value => {
            return value ===
              getWazuhCorePlugin().API_USER_STATUS_RUN_AS.ENABLED ? (
              <EuiToolTip
                position='top'
                content='설정된 API 사용자가 인증 컨텍스트를 사용합니다.'
              >
                <EuiIcon type='check' />
              </EuiToolTip>
            ) : value ===
              getWazuhCorePlugin().API_USER_STATUS_RUN_AS.USER_NOT_ALLOWED ? (
              <EuiToolTip
                position='top'
                content='설정된 API 사용자가 run_as를 사용할 권한이 없습니다. 권한을 부여하거나 호스트 설정에서 run_as 값을 false로 설정하세요.'
              >
                <EuiIcon color='danger' type='alert' />
              </EuiToolTip>
            ) : (
              <EuiToolTip
                position='top'
                content='설정된 API 사용자가 인증 컨텍스트를 사용하지 않습니다.'
              >
                <p>-</p>
              </EuiToolTip>
            );
          },
        },
        {
          name: '작업',
          render: item => (
            <EuiFlexGroup>
              <WzButtonPermissions
                buttonType='icon'
                tooltip={{ position: 'top', content: <p>기본값으로 설정</p> }}
                iconType={
                  item.id === this.state.selectedAPIConnection
                    ? 'starFilled'
                    : 'starEmpty'
                }
                aria-label='기본값으로 설정'
                onClick={async () => {
                  const currentDefault = await this.setDefault(item);
                  this.setState({
                    currentDefault,
                  });
                }}
              />
              <EuiToolTip position='top' content={<p>연결 확인</p>}>
                <EuiButtonIcon
                  aria-label='연결 확인'
                  iconType='refresh'
                  onClick={async () => await this.checkApi(item)}
                  color='success'
                />
              </EuiToolTip>
            </EuiFlexGroup>
          ),
        },
      ];

      // optional column if Check Updates is enabled
      const currentVersionColumn = {
        field: 'current_version',
        name: '버전',
        align: 'left',
        sortable: true,
      };

      // optional column if Check Updates is enabled
      const versionStatusColumn = {
        field: 'version_status',
        name: '업데이트 상태',
        sortable: true,
        render: (item, api) => {
          const color = API_UPDATES_STATUS_COLUMN[item]?.color ?? 'subdued';

          const content =
            API_UPDATES_STATUS_COLUMN[item]?.text ?? '확인한 적 없음';

          if (!this.state.refreshingAvailableUpdates) {
            return (
              <EuiFlexGroup
                alignItems='center'
                gutterSize='xs'
                responsive={false}
              >
                <EuiFlexItem grow={false}>
                  <EuiHealth color={color} style={{ wordBreak: 'normal' }}>
                    {content}
                  </EuiHealth>
                </EuiFlexItem>
                {!item ? (
                  <EuiFlexItem grow={false}>
                    <EuiToolTip
                      position='top'
                      content={
                        <p>
                          <b>업데이트 확인</b> 버튼을 클릭하면 정보를 확인할 수 있습니다
                        </p>
                      }
                    >
                      <EuiButtonIcon
                        aria-label={content}
                        iconType='questionInCircle'
                      />
                    </EuiToolTip>
                  </EuiFlexItem>
                ) : null}
                {item === 'availableUpdates' ? (
                  <EuiFlexItem grow={false}>
                    <WzButtonOpenFlyout
                      tooltip={{ content: '사용 가능한 업데이트 보기' }}
                      flyoutTitle={'사용 가능한 업데이트'}
                      flyoutBody={() => {
                        return <AvailableUpdatesFlyout api={api} />;
                      }}
                      buttonProps={{
                        buttonType: 'icon',
                        iconType: 'eye',
                      }}
                    />
                  </EuiFlexItem>
                ) : null}
                {item === 'error' && api.error?.detail ? (
                  <EuiFlexItem grow={false}>
                    <EuiToolTip
                      position='top'
                      title={api.error.title}
                      content={api.error.detail}
                    >
                      <EuiButtonIcon
                        color='primary'
                        iconType='questionInCircle'
                        aria-label='오류 정보'
                        onClick={() => this.copyToClipBoard(api.error.detail)}
                      />
                    </EuiToolTip>
                  </EuiFlexItem>
                ) : null}
              </EuiFlexGroup>
            );
          } else {
            return (
              <span>
                <EuiLoadingSpinner size='s' />
                <span>&nbsp;&nbsp;확인 중</span>
              </span>
            );
          }
        },
      };
      if (this.isUpdatesEnabled) {
        columns.splice(7, 0, currentVersionColumn, versionStatusColumn);
      }

      const search = {
        box: {
          incremental: this.state.incremental,
          schema: true,
        },
      };

      const checkAPIHostsConnectionButton = (
        <EuiButton
          onClick={async () =>
            await this.refresh({
              selectAPIHostOnAvailable: true,
            })
          }
          isDisabled={this.state.refreshingEntries}
        >
          연결 확인
        </EuiButton>
      );

      return (
        <EuiPage>
          <EuiPanel paddingSize='l'>
            <EuiFlexGroup alignItems='center'>
              <EuiFlexItem>
                <EuiFlexGroup>
                  <EuiFlexItem>
                    <EuiTitle>
                      <h2>API 연결</h2>
                    </EuiTitle>
                  </EuiFlexItem>
                </EuiFlexGroup>
              </EuiFlexItem>
              <EuiFlexItem grow={false}>
                <WzButtonPermissionsOpenFlyout
                  flyoutTitle='API 연결 추가'
                  flyoutBody={() => <AddApi />}
                  buttonProps={{
                    administrator: true,
                    buttonType: 'empty',
                    iconType: 'plusInCircle',
                  }}
                >
                  API 연결 추가
                </WzButtonPermissionsOpenFlyout>
              </EuiFlexItem>
              <EuiFlexItem grow={false}>
                <EuiButtonEmpty
                  iconType='refresh'
                  onClick={async () => await this.refresh()}
                >
                  새로고침
                </EuiButtonEmpty>
              </EuiFlexItem>
              {this.isUpdatesEnabled && (
                <>
                  <EuiFlexItem grow={false}>
                    <EuiButtonEmpty
                      iconType='refresh'
                      onClick={async () =>
                        await this.getApisAvailableUpdates(true, true)
                      }
                    >
                      <span>
                        업데이트 확인{' '}
                        <EuiToolTip
                          title='마지막 대시보드 확인'
                          content={
                            this.state.availableUpdates?.last_check_date
                              ? getWazuhCorePlugin().utils.formatUIDate(
                                  this.state.availableUpdates.last_check_date,
                                )
                              : '-'
                          }
                        >
                          <EuiIcon type='iInCircle' color='primary' />
                        </EuiToolTip>
                      </span>
                    </EuiButtonEmpty>
                  </EuiFlexItem>
                  <EuiFlexItem grow={false}>
                    <DismissNotificationCheck />
                  </EuiFlexItem>
                </>
              )}
            </EuiFlexGroup>
            <EuiFlexGroup>
              <EuiFlexItem>
                <EuiText color='subdued' style={{ paddingBottom: '15px' }}>
                  여기에서 API 항목을 관리하고 설정할 수 있습니다. 연결 상태도
                  확인할 수 있습니다.
                </EuiText>
              </EuiFlexItem>
            </EuiFlexGroup>
            {this.state.apiIsDown && (
              <EuiFlexGroup>
                <EuiFlexItem>
                  <EuiCallOut
                    title='API 연결이 다운되었거나 접근할 수 없습니다'
                    iconType='alert'
                    color='warning'
                  >
                    <EuiFlexGroup>
                      <EuiFlexItem grow={false}>
                        <WzButtonOpenFlyout
                          flyoutTitle={
                            'API 연결이 다운되었거나 접근할 수 없습니다'
                          }
                          flyoutBody={() => {
                            const steps = [
                              {
                                title: 'API 서버 서비스 상태 확인',
                                children: (
                                  <>
                                    {[
                                      {
                                        label: 'Systemd의 경우',
                                        command:
                                          'sudo systemctl status wazuh-manager',
                                      },
                                      {
                                        label: 'SysV Init의 경우',
                                        command:
                                          'sudo service wazuh-manager status',
                                      },
                                    ].map(({ label, command }) => (
                                      <>
                                        <EuiText>{label}</EuiText>
                                        <div className='copy-codeblock-wrapper'>
                                          <EuiCodeBlock
                                            style={{
                                              zIndex: '100',
                                              wordWrap: 'break-word',
                                            }}
                                            language='tsx'
                                          >
                                            {command}
                                          </EuiCodeBlock>
                                          <EuiCopy textToCopy={command}>
                                            {copy => (
                                              <div
                                                className='copy-overlay'
                                                onClick={copy}
                                              >
                                                <p>
                                                  <EuiIcon type='copy' /> 명령어
                                                  복사
                                                </p>
                                              </div>
                                            )}
                                          </EuiCopy>
                                        </div>
                                        <EuiSpacer />
                                      </>
                                    ))}
                                  </>
                                ),
                              },
                              {
                                title: 'API 호스트 설정 검토',
                              },
                              {
                                title: 'API 호스트 연결 확인',
                                children: checkAPIHostsConnectionButton,
                              },
                            ];

                            return (
                              <EuiSteps firstStepNumber={1} steps={steps} />
                            );
                          }}
                          buttonProps={{
                            buttonType: 'empty',
                          }}
                        >
                          문제 해결
                        </WzButtonOpenFlyout>
                      </EuiFlexItem>
                      <EuiFlexItem grow={false}>
                        {checkAPIHostsConnectionButton}
                      </EuiFlexItem>
                    </EuiFlexGroup>
                  </EuiCallOut>
                </EuiFlexItem>
              </EuiFlexGroup>
            )}
            <EuiInMemoryTable
              itemId='id'
              items={items}
              search={search}
              columns={columns}
              pagination={true}
              sorting={true}
              loading={isLoading}
              tableLayout='auto'
              message={
                !items.length ? 'API 연결이 없습니다. 새로 추가하세요.' : undefined
              }
            />
          </EuiPanel>
        </EuiPage>
      );
    }
  },
);
