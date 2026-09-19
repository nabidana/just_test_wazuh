/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  EuiSmallButton,
  EuiSmallButtonEmpty,
  EuiCallOut,
  EuiFlexGroup,
  EuiFlexItem,
  EuiLink,
  EuiSpacer,
  EuiTitle,
  EuiCompressedFormRow,
  EuiLoadingSpinner,
  EuiText,
  EuiPanel,
  EuiHorizontalRule,
} from "@elastic/eui";
import React, { Component } from "react";

import { CatIndex } from "../../../../../server/models/interfaces";
import FormGenerator, { IField, IFormGeneratorRef } from "../../../../components/FormGenerator";
import IndexDetail from "../../../../containers/IndexDetail";
import { IndexItem } from "../../../../../models/interfaces";
import { IFieldComponentProps } from "../../../../components/FormGenerator/built_in_components";
import AliasSelect from "../../../../components/AliasSelect";
import EuiToolTipWrapper from "../../../../components/EuiToolTipWrapper";
import { CommonService } from "../../../../services";
import { RouteComponentProps } from "react-router-dom";
import {
  SHRINK_DOCUMENTATION_URL,
  INDEX_SETTINGS_URL,
  ROUTES,
  INDEX_NAMING_MESSAGE,
  REPLICA_NUMBER_MESSAGE,
  ALIAS_SELECT_RULE,
} from "../../../../utils/constants";
import { BREADCRUMBS } from "../../../../utils/constants";
import queryString from "query-string";
import { jobSchedulerInstance } from "../../../../context/JobSchedulerContext";
import { RecoveryJobMetaData } from "../../../../models/interfaces";
import { getClusterInfo, getErrorMessage } from "../../../../utils/helpers";
import { ServerResponse } from "../../../../../server/models/types";
import { CoreServicesContext } from "../../../../components/core_services";
import { DEFAULT_INDEX_SETTINGS, INDEX_BLOCKS_WRITE_SETTING, INDEX_BLOCKS_READONLY_SETTING } from "../../utils/constants";
import { get } from "lodash";
import NotificationConfig from "../../../../containers/NotificationConfig";
import { ActionType, OperationType } from "../../../Notifications/constant";
import { NotificationConfigRef } from "../../../../containers/NotificationConfig/NotificationConfig";
import { ListenType } from "../../../../lib/JobScheduler";
import { openIndices } from "../../../Indices/utils/helpers";
import { EVENT_MAP, destroyListener, listenEvent } from "../../../../JobHandler";
import { useUpdateUrlWithDataSourceProperties } from "../../../../components/MDSEnabledComponent";
import { getApplication, getNavigationUI, getUISettings } from "../../../../services/Services";
import { TopNavControlDescriptionData, TopNavControlLinkData } from "src/plugins/navigation/public";
import { OptionalLabel } from "../../../../components/CustomFormRow";

const WrappedAliasSelect = EuiToolTipWrapper(AliasSelect as any, {
  disabledKey: "isDisabled",
});

interface ShrinkIndexProps extends RouteComponentProps {
  commonService: CommonService;
  useUpdatedUX: boolean;
}

interface ShrinkIndexState {
  sourceIndex: CatIndex;
  requestPayload: Required<IndexItem>["settings"];
  sourceIndexSettings: Object;
  loading: boolean;
}

class ShrinkIndex extends Component<ShrinkIndexProps, ShrinkIndexState> {
  static contextType = CoreServicesContext;

  destroyed: boolean = false;

  constructor(props: ShrinkIndexProps) {
    super(props);

    this.state = {
      sourceIndex: {} as CatIndex,
      requestPayload: DEFAULT_INDEX_SETTINGS,
      sourceIndexSettings: {},
      loading: false,
    };
  }

  async componentDidMount() {
    const breadCrumbs = this.props.useUpdatedUX
      ? [BREADCRUMBS.INDICES, { ...BREADCRUMBS.SHRINK_INDEX, href: `#${this.props.location.pathname}${this.props.location.search}` }]
      : [
          BREADCRUMBS.INDEX_MANAGEMENT,
          BREADCRUMBS.INDICES,
          { ...BREADCRUMBS.SHRINK_INDEX, href: `#${this.props.location.pathname}${this.props.location.search}` },
        ];
    this.context.chrome.setBreadcrumbs(breadCrumbs);

    const { source } = queryString.parse(this.props.location.search);
    if (typeof source === "string" && !!source) {
      await this.getIndex(source);
    } else {
      const errorMessage = !source ? "인덱스가 비어 있습니다." : `인덱스를 찾을 수 없습니다: ${source}.`;
      this.context.notifications.toasts.addDanger(errorMessage);
      this.props.history.push(ROUTES.INDICES);
    }
    listenEvent(EVENT_MAP.OPEN_COMPLETE, this.openCompleteHandler);
  }

  componentWillUnmount(): void {
    destroyListener(EVENT_MAP.OPEN_COMPLETE, this.openCompleteHandler);
    this.destroyed = true;
  }

  openCompleteHandler = () => {
    this.setState({
      loading: false,
    });
    // refresh status
    this.getIndex(this.state.sourceIndex.index);
  };

  getIndex = async (indexName: string) => {
    try {
      const { commonService } = this.props;
      const result: ServerResponse<CatIndex[]> = await commonService.apiCaller({
        endpoint: "cat.indices",
        data: {
          index: [indexName],
          format: "json",
        },
      });

      if (result.ok && result.response.length > 0) {
        this.setState({
          sourceIndex: result.response[0],
        });
        await this.isSourceIndexReady();
      } else {
        const errorMessage = result.ok ? `인덱스 ${indexName}이(가) 존재하지 않습니다.` : result.error;
        this.context.notifications.toasts.addDanger(`인덱스를 축소할 수 없습니다: ${errorMessage}`);
        this.props.history.push(ROUTES.INDICES);
      }
    } catch (err) {
      this.context.notifications.toasts.addDanger(getErrorMessage(err, "인덱스를 가져오는 중 문제가 발생했습니다."));
      this.props.history.push(ROUTES.INDICES);
    }
  };

  formRef: IFormGeneratorRef | null = null;
  notificationRef: NotificationConfigRef | null = null;

  onClickAction = async () => {
    const { sourceIndex } = this.state;
    const { targetIndex, ...others } = this.state.requestPayload;

    const result = await this.formRef?.validatePromise();
    if (result?.errors) {
      return;
    }
    const notificationsResult = await this.notificationRef?.validatePromise();
    if (notificationsResult?.errors) {
      return;
    }
    this.shrinkIndex(sourceIndex.index, targetIndex, others);
  };

  onCancel = () => {
    this.props.history.push(ROUTES.INDICES);
  };

  shrinkIndex = async (sourceIndexName: string, targetIndexName: string, requestPayload: Required<IndexItem>["settings"]) => {
    this.setState({
      loading: true,
    });
    try {
      const { commonService } = this.props;
      const { aliases, ...settings } = requestPayload;

      const result = await commonService.apiCaller<{
        task: string;
      }>({
        endpoint: "transport.request",
        data: {
          path: `/${sourceIndexName}/_shrink/${targetIndexName}?wait_for_completion=false`,
          method: "PUT",
          body: {
            settings,
            aliases,
          },
        },
      });
      if (result && result.ok) {
        await this.notificationRef?.associateWithTask({
          taskId: result.response?.task,
        });
        const toastInstance = this.context.notifications.toasts.addSuccess(
          `${sourceIndexName} 축소를 시작했습니다. 축소된 인덱스의 이름은 ${targetIndexName}입니다.`,
          {
            toastLifeTimeMs: 1000 * 60 * 60 * 24 * 5,
          }
        );
        this.onCancel();
        const clusterInfo = await getClusterInfo({
          commonService,
        });
        jobSchedulerInstance.addJob({
          interval: 30000,
          extras: {
            clusterInfo,
            toastId: toastInstance.id,
            sourceIndex: sourceIndexName,
            destIndex: targetIndexName,
            taskId: result.response?.task,
          },
          type: ListenType.SHRINK,
        } as RecoveryJobMetaData);
      } else {
        this.context.notifications.toasts.addDanger(result.error);
      }
    } catch (err) {
      this.context.notifications.toasts.addDanger(getErrorMessage(err, "인덱스를 축소하는 중 문제가 발생했습니다."));
    }
    if (this.destroyed) {
      return;
    }
    this.setState({
      loading: false,
    });
  };

  getIndexSettings = async (indexName: string, flat: boolean): Promise<Record<string, IndexItem> | void> => {
    try {
      const { commonService } = this.props;
      const result: ServerResponse<Record<string, IndexItem>> = await commonService.apiCaller({
        endpoint: "indices.getSettings",
        data: {
          index: indexName,
          flat_settings: flat,
        },
      });
      if (result && result.ok) {
        return result.response;
      } else {
        const errorMessage = `${indexName}의 인덱스 설정을 가져오는 중 문제가 발생했습니다. 관리자에게 문의하세요.`;
        this.context.notifications.toasts.addDanger(result?.error || errorMessage);
      }
    } catch (err) {
      this.context.notifications.toasts.addDanger(getErrorMessage(err, "인덱스 설정을 가져오는 중 문제가 발생했습니다."));
    }
  };

  setIndexSettings = async (indexName: string, settings: {}) => {
    try {
      const { commonService } = this.props;
      const result = await commonService.apiCaller({
        endpoint: "indices.putSettings",
        method: "PUT",
        data: {
          index: indexName,
          body: {
            settings: {
              ...settings,
            },
          },
        },
      });
      if (result && result.ok) {
        this.context.notifications.toasts.addSuccess(`${indexName}이(가) 쓰기 작업을 차단하도록 설정되었습니다.`);
      } else {
        const errorMessage = `${indexName}의 인덱스 설정을 업데이트하는 중 문제가 발생했습니다. 관리자에게 문의하세요.`;
        this.context.notifications.toasts.addDanger(result?.error || errorMessage);
      }
    } catch (err) {
      this.context.notifications.toasts.addDanger(getErrorMessage(err, "인덱스 설정을 업데이트하는 중 문제가 발생했습니다."));
    }
  };

  getAlias = async (aliasName: string) => {
    try {
      const { commonService } = this.props;
      return await commonService.apiCaller<{ alias: string }[]>({
        endpoint: "cat.aliases",
        method: "GET",
        data: {
          format: "json",
          name: `${aliasName || ""}*`,
          s: "alias:desc",
        },
      });
    } catch (err) {
      this.context.notifications.toasts.addDanger(getErrorMessage(err, "별칭을 가져오는 중 문제가 발생했습니다."));
    }
  };

  openIndex = async (index: string) => {
    this.setState({
      loading: true,
    });
    openIndices({
      indices: [index],
      commonService: this.props.commonService,
      coreServices: this.context,
      jobConfig: {
        firstRunTimeout: 5000,
      },
    });
  };

  isSourceIndexReady = async () => {
    const { sourceIndex } = this.state;
    const indexSettings = await this.getIndexSettings(sourceIndex.index, true);
    if (!!indexSettings) {
      this.setState({
        sourceIndexSettings: indexSettings,
      });
    }
  };

  onUpdateIndexSettings = async (indexName: string, settings: {}) => {
    await this.setIndexSettings(indexName, settings);

    // refresh index settings
    const indexSettings = await this.getIndexSettings(indexName, true);
    if (!!indexSettings) {
      this.setState({
        sourceIndexSettings: indexSettings,
      });
    }
  };

  onOpenIndex = async () => {
    const { sourceIndex } = this.state;
    await this.openIndex(sourceIndex.index);
  };

  render() {
    const { sourceIndex } = this.state;
    if (!sourceIndex.index) {
      return (
        <EuiFlexGroup justifyContent="center" alignItems="center" style={{ marginTop: "100px" }}>
          <EuiLoadingSpinner size="xl" />
        </EuiFlexGroup>
      );
    }
    const { requestPayload, sourceIndexSettings } = this.state;
    const sourceIndexNotReadyToShrinkReasons: React.ReactChild[] = [];
    let disableShrinkButton = false;
    const blockNameList = ["targetIndex"];

    if (sourceIndex.health === "red") {
      disableShrinkButton = true;
      sourceIndexNotReadyToShrinkReasons.push(
        <>
          <EuiCallOut title="원본 인덱스는 정상(green) 상태여야 합니다." color="danger" iconType="alert">
            <p>
              인덱스가 위험(red) 상태이며 백그라운드에서 작업이 실행 중일 수 있습니다. 축소를 계속하려면 인덱스가 정상(green) 상태가
              될 때까지 기다리는 것을 권장합니다.
            </p>
          </EuiCallOut>
          <EuiSpacer />
        </>
      );
    }

    if (sourceIndex.pri === "1") {
      disableShrinkButton = true;
      sourceIndexNotReadyToShrinkReasons.push(
        <>
          <EuiCallOut title="기본 샤드가 하나뿐인 원본 인덱스는 축소할 수 없습니다." color="danger" iconType="alert"></EuiCallOut>
          <EuiSpacer />
        </>
      );
    }

    // check index settings only if the source index is not red or has more than one primary shard.
    if (sourceIndexNotReadyToShrinkReasons.length == 0) {
      const indexWriteBlock = get(sourceIndexSettings, [sourceIndex.index, "settings", INDEX_BLOCKS_WRITE_SETTING]);
      if (indexWriteBlock !== "true" && indexWriteBlock !== true) {
        disableShrinkButton = true;
        sourceIndexNotReadyToShrinkReasons.push(
          <>
            <EuiCallOut title="축소하기 전에 원본 인덱스에서 쓰기 작업을 차단해야 합니다." color="danger" iconType="alert">
              <p>기존 인덱스를 축소하려면 먼저 인덱스가 쓰기 작업을 차단하도록 설정해야 합니다.</p>
              <EuiSmallButton
                onClick={() => {
                  const indexWriteBlockSettings = {
                    "index.blocks.write": true,
                  };
                  this.onUpdateIndexSettings(sourceIndex.index, indexWriteBlockSettings);
                }}
                fill
                data-test-subj="onSetIndexWriteBlockButton"
              >
                쓰기 작업 차단
              </EuiSmallButton>
            </EuiCallOut>
            <EuiSpacer />
          </>
        );
      }

      if (sourceIndex.status === "close") {
        disableShrinkButton = true;
        sourceIndexNotReadyToShrinkReasons.push(
          <>
            <EuiCallOut title="원본 인덱스는 열려 있어야 합니다." color="danger" iconType="alert">
              <p>
                축소하기 전에 먼저 인덱스를 열어야 합니다. 원본 인덱스의 크기에 따라 완료하는 데 추가 시간이 걸릴 수 있습니다.
                인덱스가 열리는 동안 인덱스는 위험(red) 상태가 됩니다.
              </p>
              <EuiSpacer />
              <EuiSmallButton
                onClick={() => {
                  this.onOpenIndex();
                }}
                isLoading={this.state.loading}
                isDisabled={this.state.loading}
                fill
                data-test-subj="onOpenIndexButton"
              >
                인덱스 열기
              </EuiSmallButton>
            </EuiCallOut>
            <EuiSpacer />
          </>
        );
      }

      // show warnings only if the source index is not red, has more than one primary shard, has write block
      // and not in close status.
      if (sourceIndexNotReadyToShrinkReasons.length === 0) {
        // It's better to do shrink when the source index's health status is green, but the user can still do shrink when the source index's health status
        // is yellow, we only give a warning to the user.
        if (sourceIndex.health === "yellow") {
          sourceIndexNotReadyToShrinkReasons.push(
            <>
              <EuiCallOut title="정상(green) 상태의 인덱스를 축소하는 것을 권장합니다." color="warning" iconType="help">
                <p>
                  원본 인덱스가 경고(yellow) 상태입니다. 새로 축소된 인덱스를 초기화할 때 문제가 발생하지 않도록 정상(green) 상태의
                  인덱스를 축소하는 것을 권장합니다.
                </p>
              </EuiCallOut>
              <EuiSpacer />
            </>
          );
        }

        // Check whether `index.blocks.read_only` is set to `true`,
        // because shrink operation will timeout and then the new shrunken index's shards cannot be allocated.
        const indexReadOnlyBlock = get(sourceIndexSettings, [sourceIndex.index, "settings", INDEX_BLOCKS_READONLY_SETTING]);
        if (indexReadOnlyBlock === "true" || indexReadOnlyBlock === true) {
          sourceIndexNotReadyToShrinkReasons.push(
            <>
              <EuiCallOut title="인덱스 설정 [index.blocks.read_only]가 [true]입니다." color="warning" iconType="help">
                <p>
                  원본 인덱스의 인덱스 설정 [index.blocks.read_only]가 [true]로 설정되어 있으며, 이 설정은 새로 축소된 인덱스에
                  복사되어 새로 축소된 인덱스의 샤드가 할당되지 않는 원인이 될 수 있습니다. 아래 고급 설정에서 이 설정을 [null] 또는
                  [false]로 설정할 수 있습니다.
                </p>
              </EuiCallOut>
              <EuiSpacer />
            </>
          );
        }
      }
    }

    const numberOfShardsSelectOptions = [];
    const sourceIndexSharsNum = Number(sourceIndex.pri);
    for (let i = 1; i <= sourceIndexSharsNum; i++) {
      if (sourceIndexSharsNum % i === 0) {
        numberOfShardsSelectOptions.push({
          value: i.toString(),
          text: i,
        });
      }
    }

    const formFields: IField[] = [
      {
        rowProps: {
          label: (
            <EuiText size="s">
              <h3>대상 인덱스 이름</h3>
            </EuiText>
          ),
          helpText: <div>{INDEX_NAMING_MESSAGE}</div>,
          position: "bottom",
        },
        name: "targetIndex",
        type: "Input",
        options: {
          rules: [
            {
              validator: (_, value) => {
                if (!value || !value.toString().trim()) {
                  return Promise.reject("대상 인덱스 이름은 필수입니다.");
                }
                return Promise.resolve();
              },
            },
            {
              pattern: /^[^A-Z-_"*+/\\|?#<>][^A-Z"*+/\\|?#<>]*$/,
              message: "대상 인덱스 이름이 올바르지 않습니다.",
            },
          ],
          props: {
            "data-test-subj": "targetIndexNameInput",
            placeholder: "새로 축소된 인덱스의 이름을 지정합니다.",
          },
        },
      },
      {
        rowProps: {
          label: (
            <EuiText size="s">
              <h3>기본 샤드 수</h3>
            </EuiText>
          ),
          helpText: (
            <>
              <p>새로 축소된 인덱스의 샤드 수를 지정합니다.</p>
              <p>이 숫자는 원본 인덱스의 기본 샤드 수의 약수여야 합니다.</p>
            </>
          ),
        },
        name: "index.number_of_shards",
        type: "Select",
        options: {
          rules: [
            {
              validator: (_, value) => {
                if (!value || !value.toString().trim() || Number(value) <= 0 || Number(sourceIndex.pri) % value != 0) {
                  return Promise.reject(
                    "새로 축소된 인덱스의 기본 샤드 수는 원본 인덱스의 기본 샤드 수의 양의 약수여야 합니다."
                  );
                }
                return Promise.resolve();
              },
            },
          ],
          props: {
            "data-test-subj": "numberOfShardsInput",
            options: numberOfShardsSelectOptions,
            placeholder: "기본 샤드 수 선택",
          },
        },
      },
      {
        rowProps: {
          label: (
            <EuiText size="s">
              <h3>복제본 수</h3>
            </EuiText>
          ),
          helpText: <div>{REPLICA_NUMBER_MESSAGE}</div>,
        },
        name: "index.number_of_replicas",
        type: "Number",
        options: {
          rules: [
            {
              validator: (_, value) => {
                if (!value || !value.toString().trim() || Number(value) < 0) {
                  return Promise.reject("복제본 수는 0 이상이어야 합니다.");
                }
                return Promise.resolve();
              },
            },
          ],
          props: {
            "data-test-subj": "numberOfReplicasInput",
            min: 0,
          },
        },
      },
      {
        name: "aliases",
        rowProps: {
          label: (
            <EuiText size="s">
              <h3>
                인덱스 별칭 <OptionalLabel />
              </h3>
            </EuiText>
          ),
          helpText: "이 인덱스를 기존 별칭으로 참조하도록 허용하거나 새 별칭을 지정합니다.",
        },
        options: {
          props: {
            "data-test-subj": "aliasesInput",
            refreshOptions: this.getAlias,
          },
          rules: [...ALIAS_SELECT_RULE],
        },
        component: WrappedAliasSelect as React.ComponentType<IFieldComponentProps>,
      },
    ];

    const indices = sourceIndex.index ? [sourceIndex.index] : [];
    const indexDetailChildren = (
      <ul key="reasons">
        {sourceIndexNotReadyToShrinkReasons.map((reason, index) => (
          <li key={index}>{reason}</li>
        ))}
      </ul>
    );

    const configurationChildren: React.ReactChild = (
      <>
        <EuiSpacer size="m" />
        <EuiPanel>
          <EuiText size="s">
            <h2>대상 인덱스 구성</h2>
          </EuiText>
          <EuiHorizontalRule margin="xs" />
          <EuiSpacer size="m" />
          <FormGenerator
            ref={(ref) => (this.formRef = ref)}
            value={requestPayload}
            onChange={(value) => {
              if (!!value) {
                this.setState({
                  requestPayload: value,
                });
              }
            }}
            formFields={formFields}
            hasAdvancedSettings
            advancedSettingsProps={{
              accordionProps: {
                initialIsOpen: false,
                id: "accordion_for_create_index_settings",
                buttonContent: <h2>고급 설정</h2>,
              },
              blockedNameList: blockNameList,
              rowProps: {
                label: "고급 인덱스 설정 지정",
                helpText: (
                  <>
                    쉼표로 구분된 설정 목록을 지정합니다.&nbsp;
                    <EuiLink href={INDEX_SETTINGS_URL} target="_blank">
                      인덱스 설정 보기
                    </EuiLink>
                  </>
                ),
              },
            }}
          />
        </EuiPanel>
      </>
    );

    const subTitleText = (
      <EuiCompressedFormRow
        fullWidth
        helpText={
          <div>
            기존 인덱스를 기본 샤드 수가 더 적은 새 인덱스로 축소합니다.&nbsp;
            <EuiLink href={SHRINK_DOCUMENTATION_URL} target="_blank" rel="noopener noreferrer">
              자세히 알아보기
            </EuiLink>
          </div>
        }
      >
        <></>
      </EuiCompressedFormRow>
    );

    const descriptionData = [
      {
        description: "기존 인덱스를 기본 샤드 수가 더 적은 새 인덱스로 축소합니다.",
        links: {
          label: "자세히 알아보기",
          href: SHRINK_DOCUMENTATION_URL,
          iconType: "popout",
          iconSide: "right",
          controlType: "link",
        } as TopNavControlLinkData,
      } as TopNavControlDescriptionData,
    ];

    const Common = () => {
      return (
        <>
          <IndexDetail indices={indices} children={indexDetailChildren} />
          {!!disableShrinkButton ? null : configurationChildren}
          <NotificationConfig
            withPanel
            panelProps={{
              title: (
                <EuiTitle size="s">
                  <h2>고급 설정</h2>
                </EuiTitle>
              ),
              titleSize: "s",
            }}
            ref={(ref) => (this.notificationRef = ref)}
            actionType={ActionType.RESIZE}
            operationType={OperationType.SHRINK}
          />
          <EuiSpacer />
          <EuiFlexGroup justifyContent="flexEnd" gutterSize="s">
            <EuiFlexItem grow={false}>
              <EuiSmallButtonEmpty onClick={this.onCancel} flush="left" data-test-subj="shrinkIndexCancelButton">
                취소
              </EuiSmallButtonEmpty>
            </EuiFlexItem>
            <EuiFlexItem grow={false}>
              <EuiSmallButton
                isLoading={this.state.loading}
                isDisabled={this.state.loading}
                onClick={this.onClickAction}
                fill
                data-test-subj="shrinkIndexConfirmButton"
                disabled={disableShrinkButton}
              >
                축소
              </EuiSmallButton>
            </EuiFlexItem>
          </EuiFlexGroup>
        </>
      );
    };

    const { HeaderControl } = getNavigationUI();
    const { setAppDescriptionControls } = getApplication();

    return this.props.useUpdatedUX ? (
      <div style={{ padding: "0px 0px" }}>
        <HeaderControl controls={descriptionData} setMountPoint={setAppDescriptionControls} />

        {Common()}
      </div>
    ) : (
      <div style={{ padding: "0px 50px" }}>
        <EuiText size="s">
          <h1>인덱스 축소</h1>
        </EuiText>
        {subTitleText}
        <EuiSpacer />
        {Common()}
      </div>
    );
  }
}

export default function (props: ShrinkIndexProps) {
  useUpdateUrlWithDataSourceProperties();
  const uiSettings = getUISettings();
  const useUpdatedUX = uiSettings.get("home:useNewHomePage");
  return <ShrinkIndex {...props} useUpdatedUX={useUpdatedUX} />;
}
