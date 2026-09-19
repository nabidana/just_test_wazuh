/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import _ from "lodash";
import { RouteComponentProps } from "react-router-dom";
import React, { Component, useContext } from "react";
import queryString from "query-string";
import {
  EuiAccordion,
  EuiBasicTable,
  EuiSmallButton,
  EuiFlexGrid,
  EuiFlexGroup,
  EuiFlexItem,
  EuiLink,
  EuiLoadingSpinner,
  EuiSpacer,
  EuiTableFieldDataColumnType,
  EuiText,
  EuiTitle,
  EuiHealth,
  EuiHorizontalRule,
  EuiPanel,
} from "@elastic/eui";
import { NotificationService, SnapshotManagementService } from "../../../../services";
import { SMMetadata, SMPolicy } from "../../../../../models/interfaces";
import { CoreServicesContext } from "../../../../components/core_services";
import { BREADCRUMBS, ROUTES } from "../../../../utils/constants";
import { getErrorMessage } from "../../../../utils/helpers";
import { ContentPanel } from "../../../../components/ContentPanel";
import DeleteModal from "../../../PolicyDetails/components/DeleteModal";
import { LatestActivities } from "../../../../models/interfaces";
import { renderTimestampMillis } from "../../../SnapshotPolicies/helpers";
import { humanCronExpression, parseCronExpression } from "../../../CreateSnapshotPolicy/components/CronSchedule/helper";
import { CRON_SCHEDULE_FREQUENCY_TYPE } from "../../../CreateSnapshotPolicy/components/CronSchedule/constants";
import { ModalConsumer } from "../../../../components/Modal";
import InfoModal from "../../components/InfoModal";
import { getAllowPartial, getIgnoreUnavailabel, getIncludeGlobalState } from "../../../CreateSnapshotPolicy/containers/helper";
import { truncateSpan } from "../../../Snapshots/helper";
import { NotificationConfig } from "../../../../../server/models/interfaces";
import { DataSourceMenuContext, DataSourceMenuProperties } from "../../../../services/DataSourceMenuContext";
import MDSEnabledComponent from "../../../../components/MDSEnabledComponent";
import { useUpdateUrlWithDataSourceProperties } from "../../../../components/MDSEnabledComponent";
import { getApplication, getNavigationUI, getUISettings } from "../../../../services/Services";
import { TopNavControlButtonData, TopNavControlTextData, TopNavControlIconData } from "../../../../../../../src/plugins/navigation/public";

interface SnapshotPolicyDetailsProps extends RouteComponentProps, DataSourceMenuProperties {
  snapshotManagementService: SnapshotManagementService;
  notificationService: NotificationService;
}

interface SnapshotPolicyDetailsState extends DataSourceMenuProperties {
  policyId: string;
  policy: SMPolicy | null;

  metadata: SMMetadata | null;

  isDeleteModalVisible: boolean;

  channel: NotificationConfig | null;
  useNewUX: boolean;
}

export class SnapshotPolicyDetails extends MDSEnabledComponent<SnapshotPolicyDetailsProps, SnapshotPolicyDetailsState> {
  static contextType = CoreServicesContext;
  columns: EuiTableFieldDataColumnType<LatestActivities>[];

  constructor(props: SnapshotPolicyDetailsProps) {
    super(props);

    const uiSettings = getUISettings();
    const useNewUx = uiSettings.get("home:useNewHomePage");

    this.state = {
      ...this.state,
      policyId: "",
      policy: null,
      metadata: null,
      isDeleteModalVisible: false,
      channel: null,
      useNewUX: useNewUx,
    };

    this.columns = [
      {
        field: "activityType",
        name: "작업 유형",
        dataType: "string",
      },
      {
        field: "status",
        name: "상태",
        dataType: "string",
      },
      {
        field: "start_time",
        name: "시작 시간",
        sortable: true,
        dataType: "date",
        render: renderTimestampMillis,
      },
      {
        field: "end_time",
        name: "완료 시간",
        sortable: true,
        dataType: "date",
        render: renderTimestampMillis,
      },
      {
        field: "info",
        name: "정보",
        dataType: "auto",
        render: (info: object) => {
          const message = _.get(info, "message", null);
          const cause = _.get(info, "cause", null);
          let showSymbol = "-";
          if (!!message) showSymbol = "message";
          if (!!cause) showSymbol = "cause";
          return (
            <ModalConsumer>{({ onShow }) => <EuiLink onClick={() => onShow(InfoModal, { info })}>{showSymbol}</EuiLink>}</ModalConsumer>
          );
        },
      },
    ];
  }

  async componentDidMount() {
    let breadCrumbs = this.state.useNewUX
      ? [BREADCRUMBS.SNAPSHOT_POLICIES]
      : [BREADCRUMBS.SNAPSHOT_MANAGEMENT, BREADCRUMBS.SNAPSHOT_POLICIES];
    this.context.chrome.setBreadcrumbs(breadCrumbs);
    const { id } = queryString.parse(this.props.location.search);
    if (typeof id === "string") {
      const breadCrumbs = this.state.useNewUX
        ? [BREADCRUMBS.SNAPSHOT_POLICIES, { text: id }]
        : [BREADCRUMBS.SNAPSHOT_MANAGEMENT, BREADCRUMBS.SNAPSHOT_POLICIES, { text: id }];
      this.context.chrome.setBreadcrumbs(breadCrumbs);
      await this.getPolicy(id);

      const channelId = _.get(this.state.policy, "notification.channel.id");
      if (channelId) {
        this.getChannel(channelId);
      }
    } else {
      this.context.notifications.toasts.addDanger(`잘못된 정책 ID입니다: ${id}`);
      this.props.history.push(ROUTES.SNAPSHOT_POLICIES);
    }
  }

  getPolicy = async (policyId: string): Promise<void> => {
    try {
      const { snapshotManagementService } = this.props;
      const response = await snapshotManagementService.getPolicy(policyId);

      if (response.ok && !response.response) {
        let errorMessage = "정책이 존재하지 않습니다";
        this.context.notifications.toasts.addDanger(`정책을 로드할 수 없습니다: ${errorMessage}`);
        this.props.history.push(ROUTES.SNAPSHOT_POLICIES);
        return;
      }
      if (response.ok && !!response.response.policy) {
        this.setState({
          policy: response.response.policy,
          policyId: response.response.id,
          metadata: response.response.metadata,
        });
      } else {
        let errorMessage = response.ok ? "정책이 비어 있습니다" : response.error;
        this.context.notifications.toasts.addDanger(`정책을 로드할 수 없습니다: ${errorMessage}`);
        this.props.history.push(ROUTES.SNAPSHOT_POLICIES);
      }
    } catch (err) {
      this.context.notifications.toasts.addDanger(`정책을 로드할 수 없습니다`);
      this.props.history.push(ROUTES.SNAPSHOT_POLICIES);
    }
  };

  getChannel = async (channelId: string): Promise<void> => {
    try {
      const { notificationService } = this.props;
      const response = await notificationService.getChannel(channelId);

      if (response.ok) {
        const configList = response.response.config_list;
        let channel = null;
        if (configList.length == 1) channel = configList[0];
        this.setState({ channel });
      } else {
        this.context.notifications.toasts.addDanger(`알림 채널을 로드할 수 없습니다: ${response.error}`);
      }
    } catch (err) {
      this.context.notifications.toasts.addDanger(getErrorMessage(err, "알림 채널을 로드할 수 없습니다"));
    }
  };

  onClickStop = async () => {
    const { snapshotManagementService } = this.props;
    const policyId = this.state.policyId;
    try {
      const response = await snapshotManagementService.stopPolicy(policyId);
      if (response.ok) {
        this.context.notifications.toasts.addSuccess(`정책 "${policyId}"이(가) 비활성화되었습니다.`);
      } else {
        this.context.notifications.toasts.addDanger(`정책 "${policyId}"을(를) 비활성화할 수 없습니다: ${response.error}`);
      }
    } catch (err) {
      this.context.notifications.toasts.addDanger(getErrorMessage(err, "정책을 비활성화할 수 없습니다."));
    }
    this.componentDidMount();
  };

  onClickStart = async () => {
    const { snapshotManagementService } = this.props;
    const policyId = this.state.policyId;
    try {
      const response = await snapshotManagementService.startPolicy(policyId);
      if (response.ok) {
        this.context.notifications.toasts.addSuccess(`정책 "${policyId}"이(가) 활성화되었습니다.`);
      } else {
        this.context.notifications.toasts.addDanger(`정책 "${policyId}"을(를) 활성화할 수 없습니다: ${response.error}`);
      }
    } catch (err) {
      this.context.notifications.toasts.addDanger(getErrorMessage(err, "정책을 활성화할 수 없습니다."));
    }
    this.componentDidMount();
  };

  onClickPolicyStatusChange = async () => {
    return this.state.policy?.enabled ? this.onClickStop() : this.onClickStart();
  };

  onEdit = () => {
    const { policyId } = this.state;
    if (policyId) {
      this.props.history.push(`${ROUTES.EDIT_SNAPSHOT_POLICY}?id=${policyId}`);
    }
  };

  closeDeleteModal = () => {
    this.setState({ isDeleteModalVisible: false });
  };

  showDeleteModal = (): void => {
    this.setState({ isDeleteModalVisible: true });
  };

  onClickDelete = async (): Promise<void> => {
    const { snapshotManagementService } = this.props;
    const { policyId } = this.state;

    try {
      const response = await snapshotManagementService.deletePolicy(policyId);

      if (response.ok) {
        this.closeDeleteModal();
        this.context.notifications.toasts.addSuccess(`정책 "${policyId}"이(가) 삭제되었습니다.`);
        this.props.history.push(ROUTES.SNAPSHOT_POLICIES);
      } else {
        this.context.notifications.toasts.addDanger(`정책 "${policyId}"을(를) 삭제할 수 없습니다: ${response.error}`);
      }
    } catch (err) {
      this.context.notifications.toasts.addDanger(getErrorMessage(err, "정책을 삭제할 수 없습니다."));
    }
  };

  renderEnabledField = (enabled: boolean) => {
    if (enabled) {
      return "활성화";
    }
    return "비활성화";
  };

  getFrequencyLabel = (frequencyType: string): string => {
    return CRON_SCHEDULE_FREQUENCY_TYPE.find((option) => option.value === frequencyType)?.text ?? _.capitalize(frequencyType);
  };

  render() {
    const { policyId, policy, metadata, isDeleteModalVisible, channel } = this.state;

    if (!policy) {
      return (
        <EuiFlexGroup justifyContent="center" alignItems="center" style={{ marginTop: "100px" }}>
          <EuiLoadingSpinner size="xl" />
        </EuiFlexGroup>
      );
    }

    const policySettingItems = [
      { term: "정책 이름", value: truncateSpan(policyId, 30) },
      { term: "상태", value: this.renderEnabledField(policy.enabled) },
      { term: "마지막 업데이트 시간", value: policy.last_updated_time },
      { term: "인덱스", value: policy.snapshot_config.indices },
      { term: "리포지토리", value: policy.snapshot_config.repository },
      { term: "설명", value: truncateSpan(policy.description, 30) },
    ];

    const advancedSettingItems = [
      { term: "클러스터 상태 포함", value: `${getIncludeGlobalState(policy)}` },
      { term: "사용할 수 없는 인덱스 무시", value: `${getIgnoreUnavailabel(policy)}` },
      { term: "부분 스냅샷 허용", value: `${getAllowPartial(policy)}` },
      // { term: "Timestamp format", value: `${_.get(policy, "snapshot_config.date_format")}` },
      // { term: "Time zone of timestamp", value: `${_.get(policy, "snapshot_config.date_format_timezone")}` },
    ];

    const createCronExpression = policy.creation.schedule.cron.expression;
    const { minute, hour, dayOfWeek, dayOfMonth, frequencyType } = parseCronExpression(createCronExpression);
    const humanCron = humanCronExpression(
      { minute, hour, dayOfWeek, dayOfMonth, frequencyType },
      createCronExpression,
      policy.creation.schedule.cron.timezone
    );
    const snapshotScheduleItems = [
      { term: "빈도", value: this.getFrequencyLabel(frequencyType) },
      { term: "Cron 일정", value: humanCron },
      { term: "다음 스냅샷 시간", value: renderTimestampMillis(metadata?.creation?.trigger.time) },
    ];

    let retentionItems = [{ term: "보존 기간", value: "모든 스냅샷 보존" }];
    let deletionScheduleItems;
    if (policy.deletion != null) {
      retentionItems = [
        { term: "스냅샷 최대 보존 기간", value: policy.deletion?.condition?.max_age ?? "-" },
        { term: "보존할 최소 스냅샷 수", value: `${policy.deletion?.condition?.min_count}` ?? "-" },
        { term: "보존할 최대 스냅샷 수", value: `${policy.deletion?.condition?.max_count}` ?? "-" },
      ];
      const deleteCronExpression = policy.deletion?.schedule?.cron.expression;
      if (deleteCronExpression != null) {
        const { minute, hour, dayOfWeek, dayOfMonth, frequencyType } = parseCronExpression(deleteCronExpression);
        const humanCron = humanCronExpression(
          { minute, hour, dayOfWeek, dayOfMonth, frequencyType },
          deleteCronExpression,
          policy.deletion.schedule?.cron.timezone ?? "-"
        );

        deletionScheduleItems = [
          { term: "빈도", value: this.getFrequencyLabel(frequencyType) },
          { term: "Cron 일정", value: humanCron },
          { term: "다음 보존 시간", value: renderTimestampMillis(metadata?.deletion?.trigger.time) },
        ];
      }
    }

    interface NotiConditions {
      [condition: string]: boolean;
    }
    const notiConditions: NotiConditions = _.get(policy, "notification.conditions");
    let notiActivities = "없음";
    if (notiConditions) {
      notiActivities = Object.keys(notiConditions)
        .filter((key) => notiConditions[key])
        .join(", ");
    }

    let channelDetail = <p>없음</p>;
    if (!!channel?.config.name) {
      channelDetail = (
        <EuiLink href={`notifications-dashboards#/channel-details/${channel.config_id}`} target="_blank">
          {channel?.config.name} ({channel?.config.config_type})
        </EuiLink>
      );
    }

    const notificationItems = [
      { term: "스냅샷 작업 알림", value: notiActivities },
      { term: "채널", value: channelDetail },
    ];

    let creationLatestActivity: LatestActivities = { activityType: "생성" };
    creationLatestActivity = { ...creationLatestActivity, ...metadata?.creation?.latest_execution };
    let latestActivities: LatestActivities[] = [creationLatestActivity];
    if (metadata?.deletion?.latest_execution != null) {
      let deletionLatestActivity: LatestActivities = { activityType: "삭제" };
      deletionLatestActivity = { ...deletionLatestActivity, ...metadata?.deletion?.latest_execution };
      latestActivities = [...latestActivities, deletionLatestActivity];
    }

    const { HeaderControl } = getNavigationUI();
    const { setAppRightControls, setAppBadgeControls } = getApplication();

    const badgeControlData = [
      {
        renderComponent: (
          <>
            <EuiHealth color={policy.enabled ? "success" : "danger"} />
            <EuiText size="s">{_.truncate(this.renderEnabledField(policy.enabled))}</EuiText>
          </>
        ),
      },
    ];

    const padding_style = this.state.useNewUX ? { padding: "0px 0px" } : { padding: "5px 50px" };
    return (
      <div style={padding_style}>
        {this.state.useNewUX ? (
          <>
            <HeaderControl
              setMountPoint={setAppRightControls}
              controls={[
                {
                  iconType: "trash",
                  testId: "deleteButton",
                  color: "danger",
                  ariaLabel: "삭제",
                  run: this.showDeleteModal,
                  controlType: "icon",
                  display: "base",
                } as TopNavControlIconData,
                {
                  id: "Status",
                  label: policy.enabled ? "비활성화" : "활성화",
                  testId: "editButton",
                  run: this.onClickPolicyStatusChange,
                  controlType: "button",
                } as TopNavControlButtonData,
                {
                  id: "Edit",
                  label: "정책 편집",
                  testId: "editButton",
                  run: this.onEdit,
                  fill: true,
                  controlType: "button",
                } as TopNavControlButtonData,
              ]}
            />

            <HeaderControl setMountPoint={setAppBadgeControls} controls={badgeControlData} />
          </>
        ) : (
          <>
            <EuiFlexGroup style={{ padding: "0px 10px" }} justifyContent="spaceBetween" alignItems="center">
              <EuiFlexItem grow={false}>
                <EuiText size="s">
                  <h1>{_.truncate(policyId)}</h1>
                </EuiText>
              </EuiFlexItem>

              <EuiFlexItem grow={false}>
                <EuiFlexGroup alignItems="center" gutterSize="s">
                  <EuiFlexItem grow={false}>
                    <EuiSmallButton onClick={this.onEdit}>편집</EuiSmallButton>
                  </EuiFlexItem>
                  <EuiFlexItem grow={false}>
                    <EuiSmallButton onClick={this.showDeleteModal} color="danger" data-test-subj="deleteButton">
                      삭제
                    </EuiSmallButton>
                  </EuiFlexItem>
                </EuiFlexGroup>
              </EuiFlexItem>
            </EuiFlexGroup>
            <EuiSpacer />
          </>
        )}

        <EuiPanel>
          <EuiFlexGroup gutterSize="xs" alignItems="center">
            <EuiTitle size="s">
              <h2>정책 설정</h2>
            </EuiTitle>
          </EuiFlexGroup>
          <EuiHorizontalRule margin={"xs"} />
          <EuiFlexGrid columns={3}>
            {policySettingItems.map((item) => (
              <EuiFlexItem key={`${item.term}`}>
                <EuiText size="s">
                  <dt>{item.term}</dt>
                  <dd>{item.value}</dd>
                </EuiText>
              </EuiFlexItem>
            ))}
          </EuiFlexGrid>

          <EuiSpacer size="s" />

          <EuiAccordion id="advanced_settings_items" buttonContent="고급 설정">
            <EuiSpacer size="s" />
            <EuiFlexGrid columns={3}>
              {advancedSettingItems.map((item) => (
                <EuiFlexItem key={`${item.term}`}>
                  <EuiText size="s">
                    <dt>{item.term}</dt>
                    <dd>{item.value}</dd>
                  </EuiText>
                </EuiFlexItem>
              ))}
            </EuiFlexGrid>
          </EuiAccordion>
        </EuiPanel>

        <EuiSpacer />

        <EuiPanel>
          <EuiFlexGroup gutterSize="xs" alignItems="center">
            <EuiTitle size="s">
              <h2>스냅샷 일정</h2>
            </EuiTitle>
          </EuiFlexGroup>
          <EuiHorizontalRule margin={"xs"} />
          <EuiFlexGrid columns={3}>
            {snapshotScheduleItems.map((item) => (
              <EuiFlexItem key={`${item.term}`}>
                <EuiText size="s">
                  <dt>{item.term}</dt>
                  <dd>{item.value}</dd>
                </EuiText>
              </EuiFlexItem>
            ))}
          </EuiFlexGrid>
        </EuiPanel>

        <EuiSpacer />

        <EuiPanel>
          <EuiFlexGroup gutterSize="xs" alignItems="center">
            <EuiTitle size="s">
              <h2>스냅샷 보존 기간</h2>
            </EuiTitle>
          </EuiFlexGroup>
          <EuiHorizontalRule margin={"xs"} />
          <EuiFlexGrid columns={3}>
            {retentionItems.map((item) => (
              <EuiFlexItem key={`${item.term}`}>
                <EuiText size="s">
                  <dt>{item.term}</dt>
                  <dd>{item.value}</dd>
                </EuiText>
              </EuiFlexItem>
            ))}
          </EuiFlexGrid>

          {deletionScheduleItems != undefined && (
            <EuiFlexGrid columns={3}>
              {deletionScheduleItems.map((item) => (
                <EuiFlexItem key={`${item.term}`}>
                  <EuiText size="s">
                    <dt>{item.term}</dt>
                    <dd>{item.value}</dd>
                  </EuiText>
                </EuiFlexItem>
              ))}
            </EuiFlexGrid>
          )}
        </EuiPanel>

        <EuiSpacer />

        <EuiPanel>
          <EuiFlexGroup gutterSize="xs" alignItems="center">
            <EuiTitle size="s">
              <h2>알림</h2>
            </EuiTitle>
          </EuiFlexGroup>
          <EuiHorizontalRule margin={"xs"} />
          <EuiFlexGrid columns={2}>
            {notificationItems.map((item) => (
              <EuiFlexItem key={`${item.term}`}>
                <EuiText size="s">
                  <dt>{item.term}</dt>
                  <dd>{item.value}</dd>
                </EuiText>
              </EuiFlexItem>
            ))}
          </EuiFlexGrid>
        </EuiPanel>

        <EuiSpacer />

        <EuiPanel>
          <EuiFlexGroup gutterSize="xs" alignItems="center">
            <EuiFlexItem>
              <EuiTitle size="s">
                <h2>최근 생성/삭제</h2>
              </EuiTitle>
            </EuiFlexItem>
            <EuiFlexItem grow={false}>
              <EuiSmallButton iconType="refresh" onClick={() => this.getPolicy(policyId)} data-test-subj="refreshButton">
                새로고침
              </EuiSmallButton>
            </EuiFlexItem>
          </EuiFlexGroup>
          <EuiHorizontalRule margin={"xs"} />
          <EuiBasicTable items={latestActivities} itemId="name" columns={this.columns} />
        </EuiPanel>

        {isDeleteModalVisible && (
          <DeleteModal policyId={policyId} closeDeleteModal={this.closeDeleteModal} onClickDelete={this.onClickDelete} />
        )}
      </div>
    );
  }
}

export default function (props: Omit<SnapshotPolicyDetailsProps, keyof DataSourceMenuProperties>) {
  const dataSourceMenuProps = useContext(DataSourceMenuContext);
  useUpdateUrlWithDataSourceProperties();
  return <SnapshotPolicyDetails {...props} {...dataSourceMenuProps} />;
}
