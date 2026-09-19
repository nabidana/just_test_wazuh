/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { Component, useContext } from "react";
import { EuiCallOut, EuiSpacer, EuiTitle, EuiSmallButton, EuiLink, EuiCompressedFormRow, EuiText } from "@elastic/eui";
import { get } from "lodash";

import { CatIndex } from "../../../../../server/models/interfaces";
import { BrowserServices } from "../../../../models/interfaces";
import SplitIndexForm from "../../components/SplitIndexForm";
import { IndexItem } from "../../../../../models/interfaces";
import { RouteComponentProps } from "react-router-dom";
import queryString from "query-string";
import {
  openIndices,
  getIndexSettings,
  setIndexSettings,
  getSplitShardOptions,
  splitIndex,
  getSingleIndice,
  getAlias,
} from "../../../Indices/utils/helpers";

import { CommonService, ServicesContext } from "../../../../services";
import { CoreStart } from "opensearch-dashboards/public";
import { CoreServicesContext } from "../../../../components/core_services";
import { BREADCRUMBS, ROUTES } from "../../../../utils/constants";
import { EVENT_MAP, destroyListener, listenEvent } from "../../../../JobHandler";
import { ServerResponse } from "../../../../../server/models/types";
import { useUpdateUrlWithDataSourceProperties } from "../../../../components/MDSEnabledComponent";
import { getApplication, getNavigationUI, getUISettings } from "../../../../services/Services";
import { TopNavControlDescriptionData, TopNavControlLinkData } from "src/plugins/navigation/public/top_nav_menu/top_nav_control_data";

interface SplitIndexProps extends RouteComponentProps {
  commonService: CommonService;
  coreService: CoreStart;
  useUpdatedUX: boolean;
}

export class SplitIndex extends Component<SplitIndexProps> {
  static contextType = CoreServicesContext;
  state = {
    reasons: [] as React.ReactChild[],
    shardsSelectOptions: [] as { label: string }[],
    sourceIndex: {} as CatIndex,
    splitIndexFlyoutVisible: false,
    loading: false,
  };

  async componentDidMount() {
    const breadCrumbs = this.props.useUpdatedUX
      ? [BREADCRUMBS.INDICES, { ...BREADCRUMBS.SPLIT_INDEX, href: `#${ROUTES.SPLIT_INDEX}${this.props.location.search}` }]
      : [
          BREADCRUMBS.INDEX_MANAGEMENT,
          BREADCRUMBS.INDICES,
          { ...BREADCRUMBS.SPLIT_INDEX, href: `#${ROUTES.SPLIT_INDEX}${this.props.location.search}` },
        ];
    this.context.chrome.setBreadcrumbs(breadCrumbs);
    await this.isSourceIndexReady();
    this.calculateShardsOption();
    this.setState({
      splitIndexFlyoutVisible: true,
    });
    listenEvent(EVENT_MAP.OPEN_COMPLETE, this.openCompleteHandler);
  }

  componentWillUnmount(): void {
    destroyListener(EVENT_MAP.OPEN_COMPLETE, this.openCompleteHandler);
  }

  openCompleteHandler = () => {
    this.setState({
      loading: false,
    });
    this.isSourceIndexReady();
  };

  isSourceIndexReady = async () => {
    const source = queryString.parse(this.props.location.search) as { source: string };
    let sourceIndex: CatIndex;
    try {
      sourceIndex = await getSingleIndice({
        indexName: source.source,
        commonService: this.props.commonService,
        coreServices: this.props.coreService,
      });
    } catch (err) {
      // no need to log anything since getIndexSettings will log the error
      this.onCancel();
      return;
    }

    this.setState({
      sourceIndex,
    });

    let sourceIndexSettings;
    try {
      sourceIndexSettings = await getIndexSettings({
        indexName: sourceIndex.index,
        flat: true,
        commonService: this.props.commonService,
        coreServices: this.props.coreService,
      });
    } catch (err) {
      // no need to log anything since getIndexSettings will log the error
      this.onCancel();
      return;
    }
    const reasons = [];
    const sourceSettings = get(sourceIndexSettings, [sourceIndex.index, "settings"]);
    const blocksWriteValue = get(sourceSettings, ["index.blocks.write"]);

    if (sourceIndex.health === "red") {
      reasons.push(
        <>
          <EuiCallOut color="danger" iconType="alert" title="원본 인덱스는 위험(red) 상태가 아니어야 합니다." />
          <EuiSpacer />
        </>
      );
    }

    if (sourceIndex.status === "close") {
      reasons.push(
        <>
          <EuiCallOut color="danger" iconType="alert" title="원본 인덱스는 열려 있어야 합니다.">
            <p>
              분할하기 전에 먼저 인덱스를 열어야 합니다. 원본 인덱스의 크기에 따라 완료하는 데 추가 시간이 걸릴 수 있습니다. 인덱스가
              열리는 동안 인덱스는 위험(red) 상태가 됩니다.
            </p>
            <p>
              <EuiSmallButton
                fill
                isLoading={this.state.loading}
                isDisabled={this.state.loading}
                onClick={() => {
                  this.setState({
                    loading: true,
                  });
                  openIndices({
                    commonService: this.props.commonService,
                    indices: [source.source],
                    coreServices: this.props.coreService,
                    jobConfig: {
                      firstRunTimeout: 5000,
                    },
                  });
                }}
                data-test-subj={"open-index-button"}
              >
                인덱스 열기
              </EuiSmallButton>
            </p>
          </EuiCallOut>
          <EuiSpacer />
        </>
      );
    }

    if (sourceSettings && blocksWriteValue !== "true" && blocksWriteValue !== true) {
      const flat = true;
      const blocksWriteSetting = { "index.blocks.write": "true" };
      reasons.push(
        <>
          <EuiCallOut color="danger" iconType="alert" title="분할하기 전에 원본 인덱스에서 쓰기 작업을 차단해야 합니다.">
            <p>기존 인덱스를 분할하려면 먼저 인덱스가 쓰기 작업을 차단하도록 설정해야 합니다.</p>
            <EuiSmallButton
              fill
              onClick={async () => {
                try {
                  await setIndexSettings({
                    indexName: sourceIndex.index,
                    flat,
                    settings: blocksWriteSetting,
                    commonService: this.props.commonService,
                    coreServices: this.props.coreService,
                  });
                  await this.isSourceIndexReady();
                } catch (err) {
                  // no need to log anything since getIndexSettings will log the error
                }
              }}
              data-test-subj={"set-indexsetting-button"}
            >
              쓰기 작업 차단
            </EuiSmallButton>
          </EuiCallOut>
          <EuiSpacer />
        </>
      );
    }

    this.setState({
      reasons,
    });
  };

  calculateShardsOption = () => {
    const { sourceIndex } = this.state;
    const sourceShards = Number(sourceIndex.pri);
    const shardsSelectOptions = getSplitShardOptions(sourceShards);
    this.setState({
      shardsSelectOptions,
    });
  };

  onSplitIndex = async (
    targetIndex: string,
    settingsPayload: Required<IndexItem>["settings"]
  ): Promise<ServerResponse<{ task: string }>> => {
    const { sourceIndex } = this.state;
    return await splitIndex({
      sourceIndex: sourceIndex.index,
      targetIndex,
      settingsPayload,
      commonService: this.props.commonService,
      coreServices: this.props.coreService,
    });
  };

  onCancel = () => {
    this.props.history.push(ROUTES.INDICES);
  };

  render() {
    const { sourceIndex, splitIndexFlyoutVisible, reasons, shardsSelectOptions } = this.state;

    const { HeaderControl } = getNavigationUI();
    const { setAppDescriptionControls } = getApplication();

    const descriptionData = [
      {
        description: "기존 읽기 전용 인덱스를 기본 샤드 수가 더 많은 새 인덱스로 분할합니다.",
        links: {
          label: "자세히 알아보기",
          href: "https://opensearch.org/docs/latest/api-reference/index-apis/split/",
          iconType: "popout",
          iconSide: "right",
          controlType: "link",
        } as TopNavControlLinkData,
      } as TopNavControlDescriptionData,
    ];

    const Common = () => {
      return (
        <>
          {splitIndexFlyoutVisible && (
            <SplitIndexForm
              sourceIndex={sourceIndex.index}
              onSplitIndex={this.onSplitIndex}
              shardsSelectOptions={shardsSelectOptions}
              reasons={reasons}
              onCancel={this.onCancel}
              sourceShards={sourceIndex.pri}
              loading={this.state.loading}
              getAlias={(aliasName) =>
                getAlias({
                  aliasName,
                  commonService: this.props.commonService,
                })
              }
            />
          )}
        </>
      );
    };

    return this.props.useUpdatedUX ? (
      <div style={{ padding: "0px" }}>
        <HeaderControl controls={descriptionData} setMountPoint={setAppDescriptionControls} />
        {Common()}
      </div>
    ) : (
      <div style={{ padding: "0px 50px" }}>
        <EuiText size="s">
          <h1>인덱스 분할</h1>
        </EuiText>

        <EuiCompressedFormRow
          fullWidth
          helpText={
            <div>
              기존 읽기 전용 인덱스를 기본 샤드 수가 더 많은 새 인덱스로 분할합니다.&nbsp;
              <EuiLink
                href={"https://opensearch.org/docs/latest/api-reference/index-apis/split/"}
                target="_blank"
                rel="noopener noreferrer"
              >
                자세히 알아보기
              </EuiLink>
            </div>
          }
        >
          <></>
        </EuiCompressedFormRow>

        <EuiSpacer />

        {Common()}
      </div>
    );
  }
}

export default function SplitIndexWrapper(props: Omit<SplitIndexProps, "commonService" | "coreService">) {
  const services = useContext(ServicesContext) as BrowserServices;
  const coreService = useContext(CoreServicesContext) as CoreStart;
  // in split-index page, user can't change the data source i.e., its in read-only
  useUpdateUrlWithDataSourceProperties();
  const uiSettings = getUISettings();
  const useUpdatedUX = uiSettings.get("home:useNewHomePage");
  return <SplitIndex {...props} commonService={services.commonService} coreService={coreService} useUpdatedUX={useUpdatedUX} />;
}
