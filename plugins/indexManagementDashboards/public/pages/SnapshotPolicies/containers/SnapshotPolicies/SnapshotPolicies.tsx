/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Component, useContext } from "react";
import _ from "lodash";
import queryString from "query-string";
import { RouteComponentProps } from "react-router-dom";
import { CoreServicesContext } from "../../../../components/core_services";
import {
  Criteria,
  Direction,
  EuiBasicTable,
  EuiSmallButton,
  EuiContextMenuItem,
  EuiContextMenuPanel,
  EuiEmptyPrompt,
  EuiHealth,
  EuiLink,
  EuiPopover,
  EuiSearchBar,
  EuiTableFieldDataColumnType,
  EuiTableSelectionType,
  EuiTableSortingType,
  EuiText,
  EuiTextColor,
  Pagination,
  Query,
  EuiFlexItem,
  EuiFlexGroup,
  EuiButtonIcon,
  EuiCompressedFieldSearch,
  EuiPanel,
  EuiSpacer,
  EuiToolTip,
} from "@elastic/eui";
import { BREADCRUMBS, PLUGIN_NAME, ROUTES, SNAPSHOT_MANAGEMENT_DOCUMENTATION_URL } from "../../../../utils/constants";
import { getMessagePrompt, getSMPoliciesQueryParamsFromURL, renderTimestampMillis } from "../../helpers";
import { SMPolicy } from "../../../../../models/interfaces";
import { SnapshotManagementService } from "../../../../services";
import { getErrorMessage } from "../../../../utils/helpers";
import { DEFAULT_PAGE_SIZE_OPTIONS } from "../../constants";
import { ContentPanel } from "../../../../components/ContentPanel";
import DeleteModal from "../../../PolicyDetails/components/DeleteModal";
import { OnSearchChangeArgs } from "../../../../models/interfaces";
import { humanCronExpression, parseCronExpression } from "../../../CreateSnapshotPolicy/components/CronSchedule/helper";
import { truncateSpan } from "../../../Snapshots/helper";
import { DataSourceMenuContext, DataSourceMenuProperties } from "../../../../services/DataSourceMenuContext";
import MDSEnabledComponent from "../../../../components/MDSEnabledComponent";
import { useUpdateUrlWithDataSourceProperties } from "../../../../components/MDSEnabledComponent";
import { getApplication, getNavigationUI, getUISettings } from "../../../../services/Services";
import { ExternalLink } from "../../../utils/display-utils";
import { TopNavControlData, TopNavControlDescriptionData, TopNavControlLinkData } from "src/plugins/navigation/public";

interface SnapshotPoliciesProps extends RouteComponentProps, DataSourceMenuProperties {
  snapshotManagementService: SnapshotManagementService;
}

interface SnapshotPoliciesState extends DataSourceMenuProperties {
  policies: SMPolicy[];
  totalPolicies: number;
  loadingPolicies: boolean;

  query: Query | null;
  queryString: string;

  from: number;
  size: number;
  sortOrder: Direction;
  sortField: keyof SMPolicy;

  selectedItems: SMPolicy[];

  showFlyout: boolean;
  policyClicked: SMPolicy | null;

  isPopoverOpen: boolean;
  isDeleteModalVisible: boolean;
  useNewUx: boolean;
}

export class SnapshotPolicies extends MDSEnabledComponent<SnapshotPoliciesProps, SnapshotPoliciesState> {
  static contextType = CoreServicesContext;
  columns: EuiTableFieldDataColumnType<SMPolicy>[];

  constructor(props: SnapshotPoliciesProps) {
    super(props);

    const { from, size, sortField, sortOrder } = getSMPoliciesQueryParamsFromURL(this.props.location);
    const uiSettings = getUISettings();
    const useNewUx = uiSettings.get("home:useNewHomePage");
    this.state = {
      ...this.state,
      policies: [],
      totalPolicies: 0,
      loadingPolicies: false,
      query: null,
      queryString: "",
      from: from,
      size: size,
      sortField: sortField,
      sortOrder: sortOrder,
      selectedItems: [],
      showFlyout: false,
      policyClicked: null,
      isPopoverOpen: false,
      isDeleteModalVisible: false,
      useNewUx: useNewUx,
    };

    this.columns = [
      {
        field: "name",
        name: "정책 이름",
        sortable: true,
        dataType: "string",
        render: (name: string, item: SMPolicy) => {
          const showSymbol = _.truncate(name, { length: 60 });
          return (
            <EuiLink onClick={() => this.props.history.push(`${ROUTES.SNAPSHOT_POLICY_DETAILS}?id=${name}`)}>
              <span title={name}>{showSymbol}</span>
            </EuiLink>
          );
        },
      },
      {
        field: "enabled",
        name: "상태",
        sortable: true,
        dataType: "boolean",
        width: "100px",
        render: (name: string, item: SMPolicy) => {
          if (item.enabled) {
            return <EuiHealth color="success">활성화</EuiHealth>;
          } else {
            return <EuiHealth color="danger">비활성화</EuiHealth>;
          }
        },
      },
      {
        field: "snapshot_config.indices",
        name: "인덱스",
        sortable: false,
        dataType: "string",
        render: (value: string, item: SMPolicy) => {
          return truncateSpan(value, 60);
        },
      },
      {
        field: "creation.schedule.cron.expression",
        name: "스냅샷 일정",
        sortable: false,
        dataType: "string",
        width: "180px",
        render: (name: string, item: SMPolicy) => {
          const expression = name;
          const timezone = item.creation.schedule.cron.timezone;
          return `${humanCronExpression(parseCronExpression(expression), expression, timezone)}`;
        },
      },
      {
        field: "last_updated_time",
        name: "마지막 업데이트 시간",
        sortable: true,
        dataType: "date",
        width: "150px",
        render: renderTimestampMillis,
      },
      {
        field: "description",
        name: "설명",
        sortable: false,
        dataType: "string",
        width: "150px",
        render: (value: string, item: SMPolicy) => {
          return truncateSpan(value);
        },
      },
    ];
  }

  async componentDidMount() {
    const breadCrumbs = this.state.useNewUx
      ? [BREADCRUMBS.SNAPSHOT_POLICIES]
      : [BREADCRUMBS.SNAPSHOT_MANAGEMENT, BREADCRUMBS.SNAPSHOT_POLICIES];
    this.context.chrome.setBreadcrumbs(breadCrumbs);
    await this.getPolicies();
  }

  async componentDidUpdate(prevProps: SnapshotPoliciesProps, prevState: SnapshotPoliciesState) {
    const prevQuery = SnapshotPolicies.getQueryObjectFromState(prevState);
    const currQuery = SnapshotPolicies.getQueryObjectFromState(this.state);
    if (!_.isEqual(prevQuery, currQuery)) {
      await this.getPolicies();
    }
  }

  getPolicies = async () => {
    this.setState({ loadingPolicies: true });
    try {
      const { snapshotManagementService, history } = this.props;
      const queryParamsObject = SnapshotPolicies.getQueryObjectFromState(this.state);
      const queryParamsString = queryString.stringify(queryParamsObject);
      history.replace({ ...this.props.location, search: queryParamsString });

      const response = await snapshotManagementService.getPolicies({ ...queryParamsObject });
      if (response.ok) {
        const { policies, totalPolicies } = response.response;
        this.setState({ policies: policies.map((p) => p.policy), totalPolicies });
      } else {
        this.context.notifications.toasts.addDanger(response.error);
      }
    } catch (err) {
      this.context.notifications.toasts.addDanger(getErrorMessage(err, "스냅샷 정책을 로드하는 중 문제가 발생했습니다."));
    }
    this.setState({ loadingPolicies: false });
  };

  static getQueryObjectFromState({
    from,
    size,
    sortField,
    sortOrder,
    queryString,
    multiDataSourceEnabled,
    dataSourceId,
  }: SnapshotPoliciesState) {
    return {
      from,
      size,
      sortField,
      sortOrder,
      queryString,
      ...(multiDataSourceEnabled ? { dataSourceId } : {}),
    };
  }

  onSelectionChange = (selectedItems: SMPolicy[]): void => {
    this.setState({ selectedItems });
  };

  onTableChange = (criteria: Criteria<SMPolicy>): void => {
    const { from: prevFrom, size: prevSize, sortField, sortOrder } = this.state;
    const { page: { index, size } = {}, sort: { field, direction } = {} } = criteria;

    // index could be 0, so need to explicitly check if it's undefined
    const from = index !== undefined ? (size ? index * size : prevFrom) : prevFrom;
    this.setState({
      from: from,
      size: size ?? prevSize,
      sortField: field ?? sortField,
      sortOrder: direction ?? sortOrder,
    });
  };

  onClickCreate = () => {
    this.props.history.push(ROUTES.CREATE_SNAPSHOT_POLICY);
  };

  onSearchChange = ({ query, queryText, error }: OnSearchChangeArgs) => {
    if (error) {
      return;
    }

    this.setState({ from: 0, queryString: queryText, query });
  };

  closePopover = () => {
    this.setState({ isPopoverOpen: false });
  };

  onClickEdit = () => {
    const {
      selectedItems: [{ name }],
    } = this.state;
    if (name) this.props.history.push(`${ROUTES.EDIT_SNAPSHOT_POLICY}?id=${name}`);
  };

  showDeleteModal = () => {
    this.setState({ isDeleteModalVisible: true });
  };

  closeDeleteModal = () => {
    this.setState({ isDeleteModalVisible: false });
  };

  onActionButtonClick = () => {
    this.setState({ isPopoverOpen: !this.state.isPopoverOpen });
  };

  onClickDelete = async () => {
    const { snapshotManagementService } = this.props;
    const { selectedItems } = this.state;
    for (let item of selectedItems) {
      const policyId = item.name;
      try {
        const response = await snapshotManagementService.deletePolicy(policyId);
        if (response.ok) {
          this.context.notifications.toasts.addSuccess(`정책 "${policyId}"을(를) 삭제했습니다.`);
        } else {
          this.context.notifications.toasts.addDanger(`정책 "${policyId}"을(를) 삭제할 수 없습니다: ${response.error}`);
        }
      } catch (err) {
        this.context.notifications.toasts.addDanger(getErrorMessage(err, "정책을 삭제할 수 없습니다."));
      }
    }
    this.closeDeleteModal();
    await this.getPolicies();
  };

  onClickStart = async () => {
    const { snapshotManagementService } = this.props;
    const { selectedItems } = this.state;
    for (let item of selectedItems) {
      const policyId = item.name;
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
    }
    _.delay(this.getPolicies, 1000);
  };

  onClickStop = async () => {
    const { snapshotManagementService } = this.props;
    const { selectedItems } = this.state;
    for (let item of selectedItems) {
      const policyId = item.name;
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
    }
    _.delay(this.getPolicies, 1000);
  };

  getSelectedPolicyIds = () => {
    return this.state.selectedItems
      .map((item: SMPolicy) => {
        return item.name;
      })
      .join(", ");
  };

  render() {
    const {
      policies,
      totalPolicies,
      loadingPolicies,
      from,
      size,
      sortField,
      sortOrder,
      selectedItems,
      isPopoverOpen,
      isDeleteModalVisible,
    } = this.state;

    const page = Math.floor(from / size);
    const pagination: Pagination = {
      pageIndex: page,
      pageSize: size,
      pageSizeOptions: DEFAULT_PAGE_SIZE_OPTIONS,
      totalItemCount: totalPolicies,
    };

    const sorting: EuiTableSortingType<SMPolicy> = {
      sort: {
        direction: sortOrder,
        field: sortField,
      },
    };

    const selection: EuiTableSelectionType<SMPolicy> = {
      onSelectionChange: this.onSelectionChange,
    };

    const popoverActionItems = [
      <EuiContextMenuItem
        key="Edit"
        disabled={selectedItems.length != 1}
        data-test-subj="editButton"
        onClick={() => {
          this.closePopover();
          this.onClickEdit();
        }}
      >
        편집
      </EuiContextMenuItem>,
      <EuiContextMenuItem
        key="Delete"
        disabled={!selectedItems.length}
        data-test-subj="deleteButton"
        onClick={() => {
          this.closePopover();
          this.showDeleteModal();
        }}
      >
        <EuiTextColor>삭제</EuiTextColor>
      </EuiContextMenuItem>,
    ];

    const popoverActionItemsNew = [
      <EuiContextMenuItem
        disabled={!selectedItems.length}
        onClick={() => {
          this.closePopover();
          this.onClickStart();
        }}
      >
        활성화
      </EuiContextMenuItem>,
      <EuiContextMenuItem
        disabled={!selectedItems.length}
        onClick={() => {
          this.closePopover();
          this.onClickStop();
        }}
      >
        비활성화
      </EuiContextMenuItem>,
      <EuiContextMenuItem
        key="Edit"
        disabled={selectedItems.length != 1}
        data-test-subj="editButton"
        onClick={() => {
          this.closePopover();
          this.onClickEdit();
        }}
      >
        편집
      </EuiContextMenuItem>,
      <EuiContextMenuItem
        key="Delete"
        disabled={!selectedItems.length}
        data-test-subj="deleteButton"
        onClick={() => {
          this.closePopover();
          this.showDeleteModal();
        }}
      >
        <EuiTextColor>삭제</EuiTextColor>
      </EuiContextMenuItem>,
    ];
    const actionsButton = (
      <EuiSmallButton
        iconType="arrowDown"
        iconSide="right"
        disabled={!selectedItems.length}
        onClick={this.onActionButtonClick}
        data-test-subj="actionButton"
      >
        작업
      </EuiSmallButton>
    );
    const actions = [
      <EuiSmallButton iconType="refresh" onClick={this.getPolicies} data-test-subj="refreshButton">
        새로고침
      </EuiSmallButton>,
      <EuiSmallButton disabled={!selectedItems.length} onClick={this.onClickStop}>
        비활성화
      </EuiSmallButton>,
      <EuiSmallButton disabled={!selectedItems.length} onClick={this.onClickStart}>
        활성화
      </EuiSmallButton>,
      <EuiPopover
        id="action"
        button={actionsButton}
        isOpen={isPopoverOpen}
        closePopover={this.closePopover}
        panelPaddingSize="s"
        anchorPosition="downLeft"
        data-test-subj="actionPopover"
      >
        <EuiContextMenuPanel items={popoverActionItems} size="s" />
      </EuiPopover>,
      <EuiSmallButton onClick={this.onClickCreate} fill={true} iconType="plus">
        정책 생성
      </EuiSmallButton>,
    ];

    const subTitleText = (
      <EuiText color="subdued" size="s" style={{ padding: "5px 0px" }}>
        <p style={{ fontWeight: 200 }}>
          스냅샷 정책으로 자동화된 스냅샷 일정과 보존 기간을 정의합니다.{" "}
          <EuiLink href={SNAPSHOT_MANAGEMENT_DOCUMENTATION_URL} target="_blank" rel="noopener noreferrer">
            자세히 알아보기
          </EuiLink>
        </p>
      </EuiText>
    );

    const promptMessage = (
      <EuiEmptyPrompt
        style={{ maxWidth: "45em" }}
        body={
          <EuiText size="s">
            <p>{getMessagePrompt(loadingPolicies)}</p>
          </EuiText>
        }
        actions={
          <EuiSmallButton onClick={this.onClickCreate} fill={true} iconType="plus">
            Create policy
          </EuiSmallButton>
        }
      />
    );

    const { HeaderControl } = getNavigationUI();
    const { setAppRightControls, setAppDescriptionControls } = getApplication();

    const descriptionData = [
      {
        description: "스냅샷 정책으로 자동화된 스냅샷 일정과 보존 기간을 정의합니다.",
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

    const controlControlsData = [
      {
        id: "Create policy",
        label: "정책 생성",
        iconType: "plus",
        fill: true,
        run: this.onClickCreate,
        testId: "createButton",
        controlType: "button",
      } as TopNavControlData,
    ];

    const CommonTable = () => {
      return (
        <EuiBasicTable
          items={policies}
          itemId="name"
          columns={this.columns}
          pagination={pagination}
          sorting={sorting}
          isSelectable={true}
          selection={selection}
          onChange={this.onTableChange}
          noItemsMessage={promptMessage}
        />
      );
    };

    const CommonModal = () => {
      return (
        isDeleteModalVisible && (
          <DeleteModal policyId={this.getSelectedPolicyIds()} closeDeleteModal={this.closeDeleteModal} onClickDelete={this.onClickDelete} />
        )
      );
    };

    return !this.state.useNewUx ? (
      <>
        <ContentPanel
          title={
            <EuiText size="s">
              <h1>스냅샷 정책</h1>
            </EuiText>
          }
          actions={actions}
          subTitleText={subTitleText}
        >
          <EuiCompressedFieldSearch placeholder="스냅샷 정책 검색" incremental={false} fullWidth onChange={this.onSearchChange} />
          {CommonTable()}
        </ContentPanel>
        {CommonModal()}
      </>
    ) : (
      <>
        <HeaderControl setMountPoint={setAppRightControls} controls={controlControlsData} />
        <HeaderControl setMountPoint={setAppDescriptionControls} controls={descriptionData} />
        <EuiPanel>
          <EuiFlexGroup gutterSize="s" alignItems="center">
            <EuiFlexItem grow={true}>
              <EuiCompressedFieldSearch
                autoFocus
                placeholder="스냅샷 정책 검색"
                incremental={false}
                onChange={this.onSearchChange}
                aria-label="스냅샷 정책 검색"
                fullWidth
              />
            </EuiFlexItem>
            <EuiFlexItem grow={false}>
              <EuiToolTip content="새로고침">
                <EuiButtonIcon iconType="refresh" onClick={this.getPolicies} aria-label="새로고침" size="s" display="base" />
              </EuiToolTip>
            </EuiFlexItem>
            <EuiFlexItem grow={false}>
              <EuiPopover
                id="action"
                button={actionsButton}
                isOpen={isPopoverOpen}
                closePopover={this.closePopover}
                anchorPosition="downRight"
                panelPaddingSize="s"
              >
                <EuiContextMenuPanel items={popoverActionItemsNew} size="s" />
              </EuiPopover>
            </EuiFlexItem>
          </EuiFlexGroup>
          <EuiSpacer size="m" />
          {CommonTable()}
        </EuiPanel>
        {CommonModal()}
      </>
    );
  }
}

export default function (props: Omit<SnapshotPoliciesProps, keyof DataSourceMenuProperties>) {
  const dataSourceMenuProps = useContext(DataSourceMenuContext);
  useUpdateUrlWithDataSourceProperties();
  return <SnapshotPolicies {...props} {...dataSourceMenuProps} />;
}
