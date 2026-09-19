/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import _ from "lodash";
import queryString from "query-string";
import {
  EuiCompressedFormRow,
  EuiTextArea,
  EuiCompressedSelect,
  EuiCompressedFieldText,
  EuiFlexGroup,
  EuiFlexItem,
  EuiSpacer,
  EuiTitle,
  EuiSmallButtonEmpty,
  EuiSmallButton,
  EuiComboBoxOptionOption,
  EuiCompressedFieldNumber,
  EuiAccordion,
  EuiCompressedRadioGroup,
  EuiText,
  EuiCompressedCheckbox,
  EuiPanel,
  EuiHorizontalRule,
  EuiSmallButtonIcon,
  EuiLink,
} from "@elastic/eui";
import React, { ChangeEvent, Component, useContext } from "react";
import { RouteComponentProps } from "react-router-dom";
import { CoreServicesContext } from "../../../../components/core_services";
import { CatRepository, CreateRepositoryBody, CreateRepositorySettings, FeatureChannelList } from "../../../../../server/models/interfaces";
import { IndexItem, SMPolicy } from "../../../../../models/interfaces";
import { BREADCRUMBS, ROUTES, SNAPSHOT_MANAGEMENT_DOCUMENTATION_URL } from "../../../../utils/constants";
import { ContentPanel } from "../../../../components/ContentPanel";
import { IndexService, NotificationService, SnapshotManagementService } from "../../../../services";
import { getErrorMessage, wildcardOption } from "../../../../utils/helpers";
import CustomLabel from "../../../../components/CustomLabel";
import { DEFAULT_INDEX_OPTIONS, ERROR_PROMPT, getDefaultSMPolicy, maxAgeUnitOptions as MAX_AGE_UNIT_OPTIONS } from "../../constants";
import {
  getIncludeGlobalState,
  getIgnoreUnavailabel,
  getAllowPartial,
  showNotification,
  getNotifyCreation,
  getNotifyDeletion,
  getNotifyFailure,
} from "../helper";
import { parseCronExpression } from "../../components/CronSchedule/helper";
import SnapshotIndicesRepoInput from "../../components/SnapshotIndicesRepoInput";
import CronSchedule from "../../components/CronSchedule";
import SnapshotAdvancedSettings from "../../components/SnapshotAdvancedSettings";
import Notification from "../../components/Notification";
import { DataSourceMenuContext, DataSourceMenuProperties } from "../../../../services/DataSourceMenuContext";
import MDSEnabledComponent from "../../../../components/MDSEnabledComponent";
import { useUpdateUrlWithDataSourceProperties } from "../../../../components/MDSEnabledComponent";
import { getApplication, getNavigationUI, getUISettings } from "../../../../services/Services";
import { ExternalLink } from "../../../utils/display-utils";
import { TopNavControlDescriptionData, TopNavControlLinkData } from "src/plugins/navigation/public";

interface CreateSMPolicyProps extends RouteComponentProps, DataSourceMenuProperties {
  snapshotManagementService: SnapshotManagementService;
  isEdit: boolean;
  notificationService: NotificationService;
  indexService: IndexService;
}

interface CreateSMPolicyState extends DataSourceMenuProperties {
  policy: SMPolicy;
  policyId: string;
  policySeqNo: number | undefined;
  policyPrimaryTerm: number | undefined;

  isSubmitting: boolean;

  channels: FeatureChannelList[];
  loadingChannels: boolean;

  indexOptions: EuiComboBoxOptionOption<IndexItem>[];
  selectedIndexOptions: EuiComboBoxOptionOption<IndexItem>[];

  repositories: CatRepository[];
  selectedRepoValue: string;

  maxAgeNum: number;
  maxAgeUnit: string;

  creationScheduleFrequencyType: string;
  deletionScheduleFrequencyType: string;

  deleteConditionEnabled: boolean;
  deletionScheduleEnabled: boolean; // whether to use the same schedule as creation

  advancedSettingsOpen: boolean;

  showCreateRepoFlyout: boolean;

  policyIdError: string;
  minCountError: string;
  repoError: string;
  timezoneError: string;
  useNewUX: boolean;
}

export class CreateSnapshotPolicy extends MDSEnabledComponent<CreateSMPolicyProps, CreateSMPolicyState> {
  static contextType = CoreServicesContext;

  constructor(props: CreateSMPolicyProps) {
    super(props);

    const uiSettings = getUISettings();
    const useNewUx = uiSettings.get("home:useNewHomePage");
    this.state = {
      ...this.state,
      policy: getDefaultSMPolicy(),
      policyId: "",
      policySeqNo: undefined,
      policyPrimaryTerm: undefined,

      isSubmitting: false,

      channels: [],
      loadingChannels: false,

      indexOptions: DEFAULT_INDEX_OPTIONS,
      selectedIndexOptions: [],

      repositories: [],
      selectedRepoValue: "",

      maxAgeNum: 1,
      maxAgeUnit: "d",

      creationScheduleFrequencyType: "daily",
      deletionScheduleFrequencyType: "daily",

      deleteConditionEnabled: false,
      deletionScheduleEnabled: false,

      advancedSettingsOpen: false,
      showCreateRepoFlyout: false,

      policyIdError: "",
      repoError: "",
      minCountError: "",
      timezoneError: "",
      useNewUX: useNewUx,
    };
  }

  async componentDidMount() {
    if (this.props.isEdit) {
      const { id } = queryString.parse(this.props.location.search);
      if (typeof id === "string" && !!id) {
        const breadCrumbs = this.state.useNewUX
          ? [BREADCRUMBS.SNAPSHOT_POLICIES, { text: id }]
          : [BREADCRUMBS.SNAPSHOT_MANAGEMENT, BREADCRUMBS.SNAPSHOT_POLICIES, BREADCRUMBS.EDIT_SNAPSHOT_POLICY, { text: id }];
        this.context.chrome.setBreadcrumbs(breadCrumbs);
        await this.getPolicy(id);
      } else {
        this.context.notifications.toasts.addDanger(`잘못된 정책 ID입니다: ${id}`);
        this.props.history.push(ROUTES.SNAPSHOT_POLICIES);
      }
    } else {
      const breadCrumbs = this.state.useNewUX
        ? [BREADCRUMBS.SNAPSHOT_POLICIES, BREADCRUMBS.CREATE_SNAPSHOT_POLICY]
        : [BREADCRUMBS.SNAPSHOT_MANAGEMENT, BREADCRUMBS.SNAPSHOT_POLICIES, BREADCRUMBS.CREATE_SNAPSHOT_POLICY];
      this.context.chrome.setBreadcrumbs(breadCrumbs);
    }
    this.updateOptions();
  }

  async updateOptions() {
    await this.getIndexOptions("");
    await this.getRepos();
    await this.getChannels();
  }

  static getQueryObjectFromState({ dataSourceId, multiDataSourceEnabled }: CreateSMPolicyState) {
    return {
      ...(multiDataSourceEnabled ? { dataSourceId } : {}),
    };
  }

  resetState() {
    this.setState({
      policy: getDefaultSMPolicy(),
      policyId: "",
      policySeqNo: undefined,
      policyPrimaryTerm: undefined,

      isSubmitting: false,

      channels: [],
      loadingChannels: false,

      indexOptions: DEFAULT_INDEX_OPTIONS,
      selectedIndexOptions: [],

      repositories: [],
      selectedRepoValue: "",

      maxAgeNum: 1,
      maxAgeUnit: "d",

      creationScheduleFrequencyType: "daily",
      deletionScheduleFrequencyType: "daily",

      deleteConditionEnabled: false,
      deletionScheduleEnabled: false,

      advancedSettingsOpen: false,
      showCreateRepoFlyout: false,

      policyIdError: "",
      repoError: "",
      minCountError: "",
      timezoneError: "",
    });
  }

  async componentDidUpdate(prevProps: CreateSMPolicyProps, prevState: CreateSMPolicyState) {
    const prevQuery = CreateSnapshotPolicy.getQueryObjectFromState(prevState);
    const currQuery = CreateSnapshotPolicy.getQueryObjectFromState(this.state);
    if (!_.isEqual(prevQuery, currQuery)) {
      this.resetState();
      this.updateOptions();
    }
  }

  getPolicy = async (policyId: string): Promise<void> => {
    try {
      const { snapshotManagementService } = this.props;
      const response = await snapshotManagementService.getPolicy(policyId);

      if (response.ok) {
        // Populate policy into state
        const policy = response.response.policy;
        const indices = _.get(policy, "snapshot_config.indices", "");
        const selectedIndexOptions = indices
          .split(",")
          .filter((index: string) => !!index)
          .map((label: string) => ({ label }));
        const selectedRepoValue = _.get(policy, "snapshot_config.repository", "");

        const { frequencyType: creationScheduleFrequencyType } = parseCronExpression(_.get(policy, "creation.schedule.cron.expression"));
        const { frequencyType: deletionScheduleFrequencyType } = parseCronExpression(_.get(policy, "deletion.schedule.cron.expression"));

        let deleteConditionEnabled = false;
        let deletionScheduleEnabled = false;
        if (!!_.get(policy, "deletion")) {
          deleteConditionEnabled = true;
          const creationScheduleExpression = _.get(policy, "creation.schedule.cron.expression");
          const deletionScheduleExpression = _.get(policy, "deletion.schedule.cron.expression");
          if (creationScheduleExpression !== deletionScheduleExpression) deletionScheduleEnabled = true;
        }

        const maxAge = policy.deletion?.condition?.max_age;
        let maxAgeNum = 1;
        let maxAgeUnit = "d";
        if (maxAge) {
          maxAgeNum = parseInt(maxAge.substring(0, maxAge.length - 1));
          maxAgeUnit = maxAge[maxAge.length - 1];
        }

        this.setState({
          policy,
          policyId: response.response.id,
          policySeqNo: response.response.seqNo,
          policyPrimaryTerm: response.response.primaryTerm,
          selectedIndexOptions,
          selectedRepoValue,
          creationScheduleFrequencyType,
          deletionScheduleFrequencyType,
          deleteConditionEnabled,
          deletionScheduleEnabled,
          maxAgeNum,
          maxAgeUnit,
        });
      } else {
        const errorMessage = response.ok ? "정책이 비어 있습니다" : response.error;
        this.context.notifications.toasts.addDanger(`정책을 로드할 수 없습니다: ${errorMessage}`);
        this.props.history.push(ROUTES.SNAPSHOT_POLICIES);
      }
    } catch (err) {
      this.context.notifications.toasts.addDanger(`정책을 로드할 수 없습니다`);
      this.props.history.push(ROUTES.SNAPSHOT_POLICIES);
    }
  };
  getIndexOptions = async (searchValue: string) => {
    const { indexService } = this.props;
    this.setState({ indexOptions: DEFAULT_INDEX_OPTIONS });
    try {
      const optionsResponse = await indexService.getDataStreamsAndIndicesNames(searchValue);
      if (optionsResponse.ok) {
        // Adding wildcard to search value
        const options = searchValue.trim() ? [{ label: wildcardOption(searchValue) }, { label: searchValue }] : [];
        const indices = optionsResponse.response.indices.map((label) => ({ label }));
        this.setState({ indexOptions: [...this.state.indexOptions, ...options.concat(indices)] });
      } else {
        if (optionsResponse.error.startsWith("[index_not_found_exception]")) {
          this.context.notifications.toasts.addDanger("사용 가능한 인덱스가 없습니다");
        } else {
          this.context.notifications.toasts.addDanger(optionsResponse.error);
        }
      }
    } catch (err) {
      this.context.notifications.toasts.addDanger(getErrorMessage(err, "인덱스 옵션을 가져오는 중 문제가 발생했습니다."));
    }
  };
  getRepos = async () => {
    try {
      const { snapshotManagementService } = this.props;
      const response = await snapshotManagementService.catRepositories();
      if (response.ok) {
        if (!this.props.isEdit) {
          const selectedRepoValue = response.response.length > 0 ? response.response[0].id : "";
          this.setState({
            repositories: response.response,
            selectedRepoValue,
            policy: this.setPolicyHelper("snapshot_config.repository", selectedRepoValue),
          });
        } else {
          this.setState({
            repositories: response.response,
          });
        }
      } else {
        this.context.notifications.toasts.addDanger(response.error);
      }
    } catch (err) {
      this.context.notifications.toasts.addDanger(getErrorMessage(err, "스냅샷을 로드하는 중 문제가 발생했습니다."));
    }
  };
  createRepo = async (repoName: string, type: string, settings: CreateRepositorySettings) => {
    try {
      const { snapshotManagementService } = this.props;

      const createRepoBody: CreateRepositoryBody = {
        type: type,
        settings: settings,
      };
      const response = await snapshotManagementService.createRepository(repoName, createRepoBody);
      if (response.ok) {
        this.setState({ showCreateRepoFlyout: false });
        this.context.notifications.toasts.addSuccess(`리포지토리 ${repoName}이(가) 생성되었습니다.`);
        await this.getRepos();
      } else {
        this.context.notifications.toasts.addDanger(response.error);
      }
    } catch (err) {
      this.context.notifications.toasts.addDanger(getErrorMessage(err, "리포지토리를 생성하는 중 문제가 발생했습니다."));
    }
  };
  createPolicy = async (policyId: string, policy: SMPolicy) => {
    const { snapshotManagementService } = this.props;
    try {
      const response = await snapshotManagementService.createPolicy(policyId, policy);
      this.setState({ isSubmitting: false });
      if (response.ok) {
        this.context.notifications.toasts.addSuccess(`정책이 생성되었습니다: ${response.response.policy.name}`);
        this.props.history.push(ROUTES.SNAPSHOT_POLICIES);
      } else {
        this.context.notifications.toasts.addDanger(`스냅샷 정책 생성에 실패했습니다: ${response.error}`);
      }
    } catch (err) {
      this.setState({ isSubmitting: false });
      this.context.notifications.toasts.addDanger(
        `스냅샷 정책 생성에 실패했습니다: ${getErrorMessage(err, "스냅샷 정책을 생성하는 중 문제가 발생했습니다.")}`
      );
    }
  };
  updatePolicy = async (policyId: string, policy: SMPolicy): Promise<void> => {
    try {
      const { snapshotManagementService } = this.props;
      const { policyPrimaryTerm, policySeqNo } = this.state;
      if (policySeqNo == null || policyPrimaryTerm == null) {
        this.context.notifications.toasts.addDanger("seqNo와 primaryTerm 없이는 정책을 업데이트할 수 없습니다");
        return;
      }
      const response = await snapshotManagementService.updatePolicy(policyId, policy, policySeqNo, policyPrimaryTerm);
      this.setState({ isSubmitting: false });
      if (response.ok) {
        this.context.notifications.toasts.addSuccess(`정책이 업데이트되었습니다: ${response.response.policy.name}`);
        this.props.history.push(ROUTES.SNAPSHOT_POLICIES);
      } else {
        this.context.notifications.toasts.addDanger(`정책 업데이트에 실패했습니다: ${response.error}`);
      }
    } catch (err) {
      this.setState({ isSubmitting: false });
      this.context.notifications.toasts.addDanger(getErrorMessage(err, "정책을 업데이트하는 중 문제가 발생했습니다."));
    }
  };

  onClickCancel = (): void => {
    this.props.history.push(ROUTES.SNAPSHOT_POLICIES);
  };
  onClickSubmit = async () => {
    this.setState({ isSubmitting: true });
    const { isEdit } = this.props;
    const { policyId, policy } = this.state;

    try {
      if (!policyId.trim()) {
        this.setState({ policyIdError: ERROR_PROMPT.NAME });
      } else if (!_.get(policy, "snapshot_config.repository")) {
        this.setState({ repoError: ERROR_PROMPT.REPO });
      } else if (!_.get(policy, "creation.schedule.cron.timezone")) {
        this.setState({ timezoneError: ERROR_PROMPT.TIMEZONE });
      } else {
        const policyFromState = this.buildPolicyFromState(policy);
        // console.log(`sm dev policy from state ${JSON.stringify(policyFromState)}`);
        if (isEdit) await this.updatePolicy(policyId, policyFromState);
        else await this.createPolicy(policyId, policyFromState);
      }
      this.setState({ isSubmitting: false });
    } catch (err) {
      this.context.notifications.toasts.addDanger("잘못된 정책입니다");
      console.error(err);
      this.setState({ isSubmitting: false });
    }
  };

  buildPolicyFromState = (policy: SMPolicy): SMPolicy => {
    const { deletionScheduleEnabled, maxAgeNum, maxAgeUnit, deleteConditionEnabled } = this.state;

    if (deleteConditionEnabled) {
      _.set(policy, "deletion.condition.max_age", maxAgeNum + maxAgeUnit);
    } else {
      delete policy.deletion;
    }

    if (deletionScheduleEnabled) {
      _.set(policy, "deletion.schedule.cron.timezone", _.get(policy, "creation.schedule.cron.timezone"));
    } else {
      delete policy.deletion?.schedule;
    }

    if (!showNotification(policy)) {
      delete policy.notification;
    }

    return policy;
  };

  onIndicesSelectionChange = (selectedOptions: EuiComboBoxOptionOption<IndexItem>[]) => {
    const selectedIndexOptions = selectedOptions.map((o) => o.label);
    this.setState({
      policy: this.setPolicyHelper("snapshot_config.indices", selectedIndexOptions.toString()),
      selectedIndexOptions: selectedOptions,
    });
  };

  onRepoSelectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedRepo = e.target.value;
    let repoError = "";
    if (!selectedRepo) {
      repoError = ERROR_PROMPT.REPO;
    }
    this.setState({ policy: this.setPolicyHelper("snapshot_config.repository", selectedRepo), selectedRepoValue: selectedRepo, repoError });
  };

  onCreateOption = (searchValue: string, options: Array<EuiComboBoxOptionOption<IndexItem>>) => {
    const normalizedSearchValue = searchValue.trim().toLowerCase();
    if (!normalizedSearchValue) {
      return;
    }
    const newOption = {
      label: searchValue,
    };
    // Create the option if it doesn't exist.
    if (options.findIndex((option) => option.label.trim().toLowerCase() === normalizedSearchValue) === -1) {
      this.setState({ indexOptions: [...this.state.indexOptions, newOption] });
    }

    const selectedIndexOptions = [...this.state.selectedIndexOptions, newOption];
    this.setState({
      selectedIndexOptions: selectedIndexOptions,
      policy: this.setPolicyHelper("snapshot_config.indices", selectedIndexOptions.map((option) => option.label).join(", ")),
    });
  };

  getChannels = async (): Promise<void> => {
    this.setState({ loadingChannels: true });
    try {
      const { notificationService } = this.props;
      const response = await notificationService.getChannels();
      if (response.ok) {
        this.setState({ channels: response.response.channel_list });
      } else {
        this.context.notifications.toasts.addDanger(`알림 채널을 로드할 수 없습니다: ${response.error}`);
      }
    } catch (err) {
      this.context.notifications.toasts.addDanger(getErrorMessage(err, "알림 채널을 로드할 수 없습니다"));
    }
    this.setState({ loadingChannels: false });
  };
  onChangeChannelId = (e: ChangeEvent<HTMLSelectElement>): void => {
    const channelId = e.target.value;
    this.setState({ policy: this.setPolicyHelper("notification.channel.id", channelId) });
  };

  render() {
    // console.log(`sm dev render state policy ${JSON.stringify(this.state.policy)}`);

    const { isEdit } = this.props;
    const {
      policy,
      policyId,
      isSubmitting,
      channels,
      loadingChannels,
      indexOptions,
      selectedIndexOptions,
      repositories,
      selectedRepoValue,
      maxAgeNum,
      maxAgeUnit,
      creationScheduleFrequencyType,
      deletionScheduleFrequencyType,
      deleteConditionEnabled,
      deletionScheduleEnabled,
      advancedSettingsOpen,
      showCreateRepoFlyout,
      policyIdError,
      repoError,
      minCountError,
      timezoneError,
    } = this.state;

    const repoOptions = repositories.map((r) => ({ value: r.id, text: r.id }));

    const rententionEnableRadios = [
      {
        id: "retention_disabled",
        label: "모든 스냅샷 보존",
      },
      {
        id: "retention_enabled",
        label: "보존 조건 지정",
      },
    ];

    const subTitleText = (
      <EuiText color="subdued" size="s" style={{ padding: "5px 0px" }}>
        <p style={{ fontWeight: 200 }}>
          스냅샷 정책을 사용하면 자동화된 스냅샷 일정과 보존 기간을 정의할 수 있습니다.{" "}
          <EuiLink href={SNAPSHOT_MANAGEMENT_DOCUMENTATION_URL} target="_blank" rel="noopener noreferrer">
            자세히 알아보기
          </EuiLink>
        </p>
      </EuiText>
    );

    const showNotificationChannel = showNotification(policy);

    const { HeaderControl } = getNavigationUI();
    const { setAppDescriptionControls } = getApplication();

    const descriptionData = [
      {
        description: "스냅샷 정책을 사용하면 자동화된 스냅샷 일정과 보존 기간을 정의할 수 있습니다.",
        links: {
          label: "자세히 알아보기",
          href: SNAPSHOT_MANAGEMENT_DOCUMENTATION_URL,
          iconType: "popout",
          iconSide: "right",
          controlType: "link",
          target: "_blank",
          flush: "both",
        } as TopNavControlLinkData,
      } as TopNavControlDescriptionData,
    ];
    const padding_style = this.state.useNewUX ? { padding: "0px 0px" } : { padding: "5px 50px" };
    return (
      <div style={padding_style}>
        {this.state.useNewUX ? (
          <HeaderControl setMountPoint={setAppDescriptionControls} controls={descriptionData} />
        ) : (
          <>
            <EuiText size="s">
              <h1>{isEdit ? "정책 편집" : "정책 생성"}</h1>
            </EuiText>
            {subTitleText}
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
          <CustomLabel title="정책 이름" />
          <EuiCompressedFormRow isInvalid={!!policyIdError} error={policyIdError}>
            <EuiCompressedFieldText
              placeholder="예: daily-snapshot"
              value={policyId}
              onChange={this.onChangePolicyName}
              disabled={isEdit}
            />
          </EuiCompressedFormRow>

          <EuiSpacer />

          <CustomLabel title="설명" isOptional={true} />
          <EuiCompressedFormRow>
            <EuiTextArea
              compressed={true}
              value={_.get(policy, "description", "")}
              onChange={this.onChangeDescription}
              placeholder="스냅샷 관리 일일 정책."
              data-test-subj="description"
            />
          </EuiCompressedFormRow>
        </EuiPanel>

        <EuiSpacer />

        <EuiPanel>
          <EuiFlexGroup gutterSize="xs" alignItems="center">
            <EuiTitle size="s">
              <h2>원본 및 대상</h2>
            </EuiTitle>
          </EuiFlexGroup>
          <EuiHorizontalRule margin={"xs"} />
          <SnapshotIndicesRepoInput
            indexOptions={indexOptions}
            selectedIndexOptions={selectedIndexOptions}
            onIndicesSelectionChange={this.onIndicesSelectionChange}
            getIndexOptions={this.getIndexOptions}
            onCreateOption={this.onCreateOption}
            repoOptions={repoOptions}
            selectedRepoValue={selectedRepoValue}
            onRepoSelectionChange={this.onRepoSelectionChange}
            showFlyout={showCreateRepoFlyout}
            openFlyout={() => {
              this.setState({ showCreateRepoFlyout: true });
            }}
            closeFlyout={() => {
              this.setState({ showCreateRepoFlyout: false });
            }}
            createRepo={this.createRepo}
            snapshotManagementService={this.props.snapshotManagementService}
            repoError={repoError}
          />
        </EuiPanel>

        <EuiSpacer />

        <EuiPanel>
          <EuiFlexGroup gutterSize="xs" alignItems="center">
            <EuiTitle size="s">
              <h2>스냅샷 일정</h2>
            </EuiTitle>
          </EuiFlexGroup>
          <EuiHorizontalRule margin={"xs"} />
          <CronSchedule
            frequencyTitle="스냅샷 빈도"
            frequencyType={creationScheduleFrequencyType}
            onChangeFrequencyType={(e) => {
              const frequencyType = e.target.value;
              let maxAgeUnitToChange = maxAgeUnit;
              if (frequencyType == "hourly" && !deleteConditionEnabled) {
                maxAgeUnitToChange = "h";
              }
              this.setState({ creationScheduleFrequencyType: e.target.value, maxAgeUnit: maxAgeUnitToChange });
            }}
            showTimezone={true}
            timezone={_.get(policy, "creation.schedule.cron.timezone")}
            onChangeTimezone={(timezone: string) => {
              this.setState({ policy: this.setPolicyHelper("creation.schedule.cron.timezone", timezone) });
            }}
            timezoneError={timezoneError}
            cronExpression={_.get(policy, "creation.schedule.cron.expression", "")}
            onCronExpressionChange={(expression: string) => {
              this.setState({ policy: this.setPolicyHelper("creation.schedule.cron.expression", expression) });
            }}
          />
        </EuiPanel>

        <EuiSpacer />

        <EuiPanel>
          <EuiFlexGroup gutterSize="xs" alignItems="center">
            <EuiTitle size="s">
              <h2>보존 기간</h2>
            </EuiTitle>
          </EuiFlexGroup>
          <EuiHorizontalRule margin={"xs"} />
          <EuiCompressedRadioGroup
            options={rententionEnableRadios}
            idSelected={deleteConditionEnabled ? "retention_enabled" : "retention_disabled"}
            onChange={(id) => {
              this.setState({ deleteConditionEnabled: id === "retention_enabled" });
            }}
          />

          {deleteConditionEnabled ? (
            <>
              <EuiSpacer size="m" />
              <CustomLabel title="보존할 스냅샷의 최대 기간" />
              <EuiFlexGroup>
                <EuiFlexItem grow={false}>
                  <EuiCompressedFieldNumber
                    value={maxAgeNum}
                    min={1}
                    onChange={(e) => {
                      this.setState({ maxAgeNum: parseInt(e.target.value) });
                    }}
                  />
                </EuiFlexItem>
                <EuiFlexItem style={{ maxWidth: 100 }}>
                  <EuiCompressedSelect
                    options={MAX_AGE_UNIT_OPTIONS}
                    value={maxAgeUnit}
                    onChange={(e) => {
                      this.setState({ maxAgeUnit: e.target.value });
                    }}
                  />
                </EuiFlexItem>
              </EuiFlexGroup>
              <EuiSpacer size="m" />
              <EuiAccordion id="additional_delete_conditions" buttonContent="추가 설정">
                <EuiSpacer size="m" />

                <EuiText size="s">보존할 스냅샷 수</EuiText>
                <EuiSpacer size="s" />

                <EuiFlexGroup alignItems="flexStart">
                  <EuiFlexItem grow={false}>
                    <CustomLabel title="최소" />
                    <EuiCompressedFormRow isInvalid={!!minCountError} error={minCountError}>
                      <EuiCompressedFieldNumber
                        min={1}
                        value={_.get(policy, "deletion.condition.min_count") ?? "1"}
                        onChange={this.onChangeMinCount}
                      />
                    </EuiCompressedFormRow>
                  </EuiFlexItem>
                  <EuiFlexItem grow={false}>
                    <CustomLabel title="최대" isOptional={true} />
                    <EuiCompressedFormRow>
                      <EuiCompressedFieldNumber
                        min={1}
                        value={_.get(policy, "deletion.condition.max_count", "")}
                        onChange={this.onChangeMaxCount}
                      />
                    </EuiCompressedFormRow>
                  </EuiFlexItem>
                </EuiFlexGroup>

                <EuiSpacer size="m" />

                <EuiText size="s">삭제 빈도</EuiText>
                <span style={{ color: "grey", fontWeight: 200, fontSize: "12px" }}>
                  보존 조건을 확인하고 스냅샷을 삭제할 시점을 설정합니다.
                </span>
                <EuiSpacer size="s" />

                <EuiCompressedCheckbox
                  id="delete_schedule_checkbox"
                  label="스냅샷 빈도와 동일"
                  checked={!deletionScheduleEnabled}
                  onChange={(e) => {
                    this.setState({ deletionScheduleEnabled: !deletionScheduleEnabled });
                  }}
                />
                <EuiSpacer size="s" />

                {deletionScheduleEnabled ? (
                  <CronSchedule
                    frequencyTitle="삭제 빈도"
                    frequencyType={deletionScheduleFrequencyType}
                    onChangeFrequencyType={(e) => {
                      this.setState({ deletionScheduleFrequencyType: e.target.value });
                    }}
                    timezone={undefined}
                    cronExpression={_.get(policy, "deletion.schedule.cron.expression", "")}
                    onCronExpressionChange={(expression: string) => {
                      this.setState({ policy: this.setPolicyHelper("deletion.schedule.cron.expression", expression) });
                    }}
                  />
                ) : null}
              </EuiAccordion>
            </>
          ) : null}
        </EuiPanel>

        <EuiSpacer />

        <EuiPanel>
          <EuiFlexGroup gutterSize="xs" alignItems="center">
            <EuiTitle size="s">
              <h2>알림</h2>
            </EuiTitle>
          </EuiFlexGroup>
          <EuiHorizontalRule margin={"xs"} />
          <EuiText size="s">
            <h3>스냅샷 작업에 대해 알림</h3>
          </EuiText>

          <EuiSpacer size="s" />
          <EuiCompressedCheckbox
            id="notification-creation"
            label="스냅샷이 생성되었을 때."
            checked={getNotifyCreation(policy)}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              this.setState({ policy: this.setPolicyHelper("notification.conditions.creation", e.target.checked) });
            }}
          />

          <EuiSpacer size="s" />

          <EuiCompressedCheckbox
            id="notification-deletion"
            label="스냅샷이 삭제되었을 때."
            checked={getNotifyDeletion(policy)}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              this.setState({ policy: this.setPolicyHelper("notification.conditions.deletion", e.target.checked) });
            }}
          />

          <EuiSpacer size="s" />

          <EuiCompressedCheckbox
            id="notification-failure"
            label="스냅샷이 실패했을 때."
            checked={getNotifyFailure(policy)}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              this.setState({ policy: this.setPolicyHelper("notification.conditions.failure", e.target.checked) });
            }}
          />
          {showNotificationChannel ? (
            <>
              <EuiSpacer size="s" />
              <Notification
                channelId={_.get(policy, "notification.channel.id") || ""}
                channels={channels}
                loadingChannels={loadingChannels}
                onChangeChannelId={this.onChangeChannelId}
                getChannels={this.getChannels}
              />
            </>
          ) : null}
        </EuiPanel>

        <EuiSpacer />

        {/* Advanced settings */}
        <EuiPanel>
          <EuiFlexGroup justifyContent="flexStart" alignItems="center" gutterSize="none">
            <EuiFlexItem grow={false}>
              <EuiSmallButtonIcon
                iconType={advancedSettingsOpen ? "arrowDown" : "arrowRight"}
                color="text"
                onClick={() => {
                  this.setState({ advancedSettingsOpen: !this.state.advancedSettingsOpen });
                }}
                aria-label="드롭다운 아이콘"
              />
            </EuiFlexItem>
            <EuiFlexItem grow={false}>
              <EuiTitle size="s">
                <h2>
                  고급 설정 <i>– 선택 사항</i>
                </h2>
              </EuiTitle>
            </EuiFlexItem>
          </EuiFlexGroup>

          {advancedSettingsOpen && (
            <>
              <EuiHorizontalRule margin="xs" />
              <SnapshotAdvancedSettings
                includeGlobalState={getIncludeGlobalState(policy)}
                onIncludeGlobalStateToggle={this.onIncludeGlobalStateToggle}
                ignoreUnavailable={getIgnoreUnavailabel(policy)}
                onIgnoreUnavailableToggle={this.onIgnoreUnavailableToggle}
                partial={getAllowPartial(policy)}
                onPartialToggle={this.onPartialToggle}
                width="200%"
              />

              {/* TODO SM Haven't fininalized the design for this before 2.1 release */}
              {/* <div style={{ padding: "0px 10px" }}>
                <EuiText size="s">
                  <h4>Snapshot naming settings</h4>
                </EuiText>
                <span style={{ fontWeight: 200, fontSize: "12px" }}>Customize the naming format of snapshots.</span>

                <EuiSpacer size="s" />

                <CustomLabel title="Timestamp format" />
                <EuiCompressedFieldText
                  value={dateFormat}
                  onChange={(e) => {
                    let dateFormat = e.target.value;
                    if (!dateFormat) {
                      dateFormat = DEFAULT_DATE_FORMAT;
                    }
                    this.setState({ dateFormat });
                  }}
                />

                <EuiSpacer size="s" />

                <CustomLabel title="Time zone of timestamp" />
                <EuiComboBox
                  placeholder="Select a time zone"
                  singleSelection={{ asPlainText: true }}
                  options={TIMEZONES}
                  renderOption={({ label: tz }) => `${tz} (${moment.tz(tz).format("Z")})`}
                  selectedOptions={[{ label: _.get(policy, "snapshot_config.date_format_timezone") ?? DEFAULT_DATE_FORMAT_TIMEZONE }]}
                  onChange={(options) => {
                    let timezone = _.first(options)?.label;
                    if (!timezone) timezone = DEFAULT_DATE_FORMAT_TIMEZONE;
                    this.setState({ policy: this.setPolicyHelper("snapshot_config.date_format_timezone", timezone) });
                  }}
                />
              </div> */}
            </>
          )}
        </EuiPanel>

        <EuiSpacer />

        <EuiFlexGroup justifyContent="flexEnd" gutterSize="s">
          <EuiFlexItem grow={false}>
            <EuiSmallButtonEmpty onClick={this.onClickCancel}>취소</EuiSmallButtonEmpty>
          </EuiFlexItem>

          <EuiFlexItem grow={false}>
            <EuiSmallButton fill onClick={this.onClickSubmit} isLoading={isSubmitting}>
              {isEdit ? "업데이트" : "생성"}
            </EuiSmallButton>
          </EuiFlexItem>
        </EuiFlexGroup>
      </div>
    );
  }

  onChangeMaxCount = (e: ChangeEvent<HTMLInputElement>) => {
    // Received NaN for the `value` attribute. If this is expected, cast the value to a string.
    const maxCount = isNaN(parseInt(e.target.value)) ? undefined : parseInt(e.target.value);
    this.setState({ policy: this.setPolicyHelper("deletion.condition.max_count", maxCount) });
  };

  onChangeMinCount = (e: ChangeEvent<HTMLInputElement>) => {
    const minCount = isNaN(parseInt(e.target.value)) ? undefined : parseInt(e.target.value);
    let isMinCountValid = "";
    if (!minCount || minCount < 1) {
      isMinCountValid = "최소 개수는 0보다 커야 합니다.";
    }
    this.setState({ policy: this.setPolicyHelper("deletion.condition.min_count", minCount), minCountError: isMinCountValid });
  };

  onChangePolicyName = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ policyId: e.target.value });
  };

  onChangeDescription = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    this.setState({ policy: this.setPolicyHelper("description", e.target.value) });
  };

  onChangeCreationExpression = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ policy: this.setPolicyHelper("creation.schedule.cron.expression", e.target.value) });
  };

  onChangeDeletionExpression = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ policy: this.setPolicyHelper("deletion.schedule.cron.expression", e.target.value) });
  };

  onChangeCreationTimezone = (e: ChangeEvent<HTMLSelectElement>) => {
    this.setState({ policy: this.setPolicyHelper("creation.schedule.cron.timezone", e.target.value) });
  };

  onChangeDeletionTimezone = (e: ChangeEvent<HTMLSelectElement>) => {
    this.setState({ policy: this.setPolicyHelper("deletion.schedule.cron.timezone", e.target.value) });
  };

  onChangeIndices = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ policy: this.setPolicyHelper("snapshot_config.indices", e.target.value) });
  };

  onChangeRepository = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ policy: this.setPolicyHelper("snapshot_config.repository", e.target.value) });
  };

  onIncludeGlobalStateToggle = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ policy: this.setPolicyHelper("snapshot_config.include_global_state", e.target.checked) });
  };

  onIgnoreUnavailableToggle = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ policy: this.setPolicyHelper("snapshot_config.ignore_unavailable", e.target.checked) });
  };

  onPartialToggle = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ policy: this.setPolicyHelper("snapshot_config.partial", e.target.checked) });
  };

  setPolicyHelper = (path: string, newValue: any) => {
    return _.set(this.state.policy, path, newValue);
  };
}

export default function (props: Omit<CreateSMPolicyProps, keyof DataSourceMenuProperties>) {
  const dataSourceMenuProps = useContext(DataSourceMenuContext);
  useUpdateUrlWithDataSourceProperties();
  return <CreateSnapshotPolicy {...props} {...dataSourceMenuProps} />;
}
