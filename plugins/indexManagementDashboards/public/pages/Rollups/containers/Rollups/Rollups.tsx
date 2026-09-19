/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Component, useContext } from "react";
import _ from "lodash";
import { BREADCRUMBS, ROUTES } from "../../../../utils/constants";
import queryString from "query-string";
import { getErrorMessage } from "../../../../utils/helpers";
import { ManagedCatIndex } from "../../../../../server/models/interfaces";
import { DEFAULT_PAGE_SIZE_OPTIONS, DEFAULT_QUERY_PARAMS } from "../../../Indices/utils/constants";
import { RouteComponentProps } from "react-router-dom";
import {
  EuiBasicTable,
  EuiHorizontalRule,
  // @ts-ignore
  Criteria,
  EuiTableSortingType,
  Direction,
  // @ts-ignore
  Pagination,
  EuiTableSelectionType,
  EuiFlexItem,
  EuiCompressedFieldSearch,
  EuiFlexGroup,
  EuiPanel,
  EuiTitle,
  EuiSmallButton,
  EuiPopover,
  EuiContextMenuItem,
  EuiContextMenuPanel,
  EuiTextColor,
  EuiLink,
  EuiTableFieldDataColumnType,
  EuiButtonIcon,
  EuiSpacer,
  EuiText,
  EuiToolTip,
} from "@elastic/eui";
import { RollupService } from "../../../../services";
import RollupEmptyPrompt from "../../components/RollupEmptyPrompt";
import { RollupQueryParams } from "../../models/interfaces";
import { getURLQueryParams, renderContinuous, renderEnabled, renderTime } from "../../utils/helpers";
import DeleteModal from "../../components/DeleteModal";
import { renderStatus } from "../../../RollupDetails/utils/helpers";
import { DocumentRollup } from "../../../../../models/interfaces";
import { CoreServicesContext } from "../../../../components/core_services";
import { DataSourceMenuContext, DataSourceMenuProperties } from "../../../../services/DataSourceMenuContext";
import MDSEnabledComponent from "../../../../components/MDSEnabledComponent";
import { HttpFetchQuery } from "opensearch-dashboards/public";
import { getApplication, getNavigationUI, getUISettings } from "../../../../services/Services";
import { ContentPanel } from "../../../../components/ContentPanel";

interface RollupsProps extends RouteComponentProps, DataSourceMenuProperties {
  rollupService: RollupService;
}

interface RollupsState extends DataSourceMenuProperties {
  totalRollups: number;
  from: number;
  size: number;
  search: string;
  sortField: keyof DocumentRollup;
  sortDirection: Direction;
  selectedItems: DocumentRollup[];
  rollups: DocumentRollup[];
  rollupExplain: any;
  loadingRollups: boolean;
  isPopoverOpen: boolean;
  isDeleteModalVisible: boolean;
  useNewUX: boolean;
}

export class Rollups extends MDSEnabledComponent<RollupsProps, RollupsState> {
  static contextType = CoreServicesContext;
  constructor(props: RollupsProps) {
    super(props);

    const uiSettings = getUISettings();
    const useNewUX = uiSettings.get("home:useNewHomePage");
    const { from, size, search, sortField, sortDirection } = getURLQueryParams(this.props.location);

    this.state = {
      ...this.state,
      totalRollups: 0,
      from,
      size,
      search,
      sortField,
      sortDirection,
      selectedItems: [],
      rollups: [],
      loadingRollups: true,
      isPopoverOpen: false,
      isDeleteModalVisible: false,
      rollupExplain: {},
      useNewUX: useNewUX,
    };

    this.getRollups = _.debounce(this.getRollups, 500, { leading: true });
  }

  async updateBreadCrumbs() {
    if (this.state.useNewUX) {
      this.context.chrome.setBreadcrumbs([
        { text: BREADCRUMBS.ROLLUPS.text.concat(` (${this.state.rollups.length})`), href: BREADCRUMBS.ROLLUPS.href },
      ]);
    }
  }

  async componentDidMount() {
    const breadCrumbs = this.state.useNewUX ? [BREADCRUMBS.ROLLUPS] : [BREADCRUMBS.INDEX_MANAGEMENT, BREADCRUMBS.ROLLUPS];
    this.context.chrome.setBreadcrumbs(breadCrumbs);
    await this.getRollups();
    this.updateBreadCrumbs();
  }

  async componentDidUpdate(prevProps: RollupsProps, prevState: RollupsState) {
    const prevQuery = Rollups.getQueryObjectFromState(prevState);
    const currQuery = Rollups.getQueryObjectFromState(this.state);
    if (!_.isEqual(prevQuery, currQuery)) {
      await this.getRollups();
    }
    this.updateBreadCrumbs();
  }

  static getQueryObjectFromState({
    from,
    size,
    search,
    sortField,
    sortDirection,
    dataSourceId,
    multiDataSourceEnabled,
  }: RollupsState): RollupQueryParams {
    return { from, size, search, sortField, sortDirection, ...(multiDataSourceEnabled ? { dataSourceId } : {}) };
  }

  getRollups = async (): Promise<void> => {
    this.setState({ loadingRollups: true });
    try {
      const { rollupService, history } = this.props;
      const queryObject = Rollups.getQueryObjectFromState(this.state);
      const queryParamsString = queryString.stringify(queryObject);
      history.replace({ ...this.props.location, search: queryParamsString });
      const rollupJobsResponse = await rollupService.getRollups(queryObject);
      if (rollupJobsResponse.ok) {
        const { rollups, totalRollups, metadata } = rollupJobsResponse.response;
        this.setState({ rollups, totalRollups, rollupExplain: metadata });
      } else {
        this.context.notifications.toasts.addDanger(rollupJobsResponse.error);
      }
    } catch (err) {
      this.context.notifications.toasts.addDanger(getErrorMessage(err, "롤업을 로드하는 중 문제가 발생했습니다"));
    }
    this.setState({ loadingRollups: false });
  };

  onClickCreate = (): void => {
    this.props.history.push(ROUTES.CREATE_ROLLUP);
  };

  onClickEdit = (): void => {
    const {
      selectedItems: [{ _id }],
    } = this.state;
    if (_id) this.props.history.push(`${ROUTES.EDIT_ROLLUP}?id=${_id}`);
  };

  onClickDelete = async (): Promise<void> => {
    const { rollupService } = this.props;
    const { selectedItems } = this.state;
    for (let item of selectedItems) {
      const rollupId = item._id;
      try {
        const response = await rollupService.deleteRollup(rollupId);

        if (response.ok) {
          this.closeDeleteModal();
          //Show success message
          this.context.notifications.toasts.addSuccess(`"${rollupId}"이(가) 삭제되었습니다.`);
        } else {
          this.context.notifications.toasts.addDanger(`롤업 작업 "${rollupId}"을(를) 삭제할 수 없습니다 : ${response.error}`);
        }
      } catch (err) {
        this.context.notifications.toasts.addDanger(getErrorMessage(err, "롤업 작업을 삭제할 수 없습니다"));
      }
    }
    await this.getRollups();
  };

  onDisable = async (): Promise<void> => {
    const { rollupService } = this.props;
    const { selectedItems } = this.state;
    for (let item of selectedItems) {
      const rollupId = item._id;
      try {
        const response = await rollupService.stopRollup(rollupId);

        if (response.ok) {
          //Show success message
          this.context.notifications.toasts.addSuccess(`${rollupId}이(가) 비활성화되었습니다`);
        } else {
          this.context.notifications.toasts.addDanger(`롤업 작업 "${rollupId}"을(를) 중지할 수 없습니다 : ${response.error}`);
        }
      } catch (err) {
        this.context.notifications.toasts.addDanger(getErrorMessage(err, "롤업 작업을 중지할 수 없습니다"));
      }
    }
    await this.getRollups();
  };

  onEnable = async (): Promise<void> => {
    const { rollupService } = this.props;
    const { selectedItems } = this.state;
    for (let item of selectedItems) {
      const rollupId = item._id;
      try {
        const response = await rollupService.startRollup(rollupId);

        if (response.ok) {
          //Show success message
          this.context.notifications.toasts.addSuccess(`${rollupId}이(가) 활성화되었습니다`);
        } else {
          this.context.notifications.toasts.addDanger(`롤업 작업 "${rollupId}"을(를) 시작할 수 없습니다 : ${response.error}`);
        }
      } catch (err) {
        this.context.notifications.toasts.addDanger(getErrorMessage(err, "롤업 작업을 시작할 수 없습니다"));
      }
    }
    await this.getRollups();
  };

  onTableChange = ({ page: tablePage, sort }: Criteria<ManagedCatIndex>): void => {
    const { index: page, size } = tablePage;
    const { field: sortField, direction: sortDirection } = sort;
    this.setState({ from: page * size, size, sortField, sortDirection });
  };

  onSelectionChange = (selectedItems: DocumentRollup[]): void => {
    this.setState({ selectedItems });
  };

  onSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ from: 0, search: e.target.value });
  };

  onPageClick = (page: number): void => {
    const { size } = this.state;
    this.setState({ from: page * size });
  };

  resetFilters = (): void => {
    this.setState({ search: DEFAULT_QUERY_PARAMS.search });
  };

  onActionButtonClick = (): void => {
    this.setState({ isPopoverOpen: !this.state.isPopoverOpen });
  };

  closePopover = (): void => {
    this.setState({ isPopoverOpen: false });
  };

  closeDeleteModal = (): void => {
    this.setState({ isDeleteModalVisible: false });
  };

  showDeleteModal = (): void => {
    this.setState({ isDeleteModalVisible: true });
  };

  getSelectedRollupIds = (): string =>
    this.state.selectedItems
      .map((item) => {
        return item._id;
      })
      .join(", ");

  render() {
    const {
      totalRollups,
      from,
      size,
      search,
      sortField,
      sortDirection,
      selectedItems,
      rollups,
      loadingRollups,
      isPopoverOpen,
      isDeleteModalVisible,
      useNewUX,
    } = this.state;

    const filterIsApplied = !!search;
    const page = Math.floor(from / size);
    const pageCount = Math.ceil(totalRollups / size) || 1;

    const pagination: Pagination = {
      pageIndex: page,
      pageSize: size,
      pageSizeOptions: DEFAULT_PAGE_SIZE_OPTIONS,
      totalItemCount: totalRollups || 0,
    };

    const sorting: EuiTableSortingType<DocumentRollup> = {
      sort: {
        direction: sortDirection,
        field: sortField,
      },
    };

    const actionButton = (
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

    const selection: EuiTableSelectionType<DocumentRollup> = {
      onSelectionChange: this.onSelectionChange,
    };

    const actionItems = [
      <EuiContextMenuItem
        key="Edit"
        icon="empty"
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
        icon="empty"
        disabled={!selectedItems.length}
        data-test-subj="deleteButton"
        onClick={() => {
          this.closePopover();
          this.showDeleteModal();
        }}
      >
        <EuiTextColor color="danger">삭제</EuiTextColor>
      </EuiContextMenuItem>,
    ];

    const newActionItems = [
      <EuiContextMenuItem
        disabled={!selectedItems.length}
        onClick={() => {
          this.onEnable();
        }}
        data-test-subj="enableButton"
      >
        활성화
      </EuiContextMenuItem>,
      <EuiContextMenuItem disabled={!selectedItems.length} onClick={this.onDisable} data-test-subj="disableButton">
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

    const rollupsColumns: EuiTableFieldDataColumnType<DocumentRollup>[] = [
      {
        field: "_id",
        name: "이름",
        sortable: true,
        textOnly: true,
        truncateText: true,
        render: (_id) => (
          <EuiLink onClick={() => this.props.history.push(`${ROUTES.ROLLUP_DETAILS}?id=${_id}`)} data-test-subj={`rollupLink_${_id}`}>
            {_id}
          </EuiLink>
        ),
      },
      {
        field: "rollup.source_index",
        name: "원본 인덱스",
        sortable: true,
        textOnly: true,
        truncateText: true,
      },
      {
        field: "rollup.target_index",
        name: "대상 인덱스",
        sortable: true,
        textOnly: true,
        truncateText: true,
      },
      {
        field: "rollup.enabled",
        name: "작업 상태",
        sortable: true,
        textOnly: true,
        truncateText: true,
        render: renderEnabled,
      },
      {
        field: "rollup.continuous",
        name: "연속형",
        sortable: true,
        textOnly: true,
        truncateText: true,
        render: renderContinuous,
      },
      {
        field: "metadata.rollup_metadata.continuous",
        name: "다음 롤업 기간",
        sortable: false,
        textOnly: true,
        render: (metadata) =>
          metadata == null ? "-" : renderTime(metadata.next_window_start_time) + " - " + renderTime(metadata.next_window_end_time),
      },
      {
        field: "metadata",
        name: "롤업 작업 상태",
        sortable: false,
        textOnly: true,
        render: (metadata) => renderStatus(metadata),
      },
    ];

    const commonTable = () => {
      return (
        <EuiBasicTable
          columns={rollupsColumns}
          isSelectable={true}
          itemId="_id"
          items={rollups}
          noItemsMessage={<RollupEmptyPrompt filterIsApplied={filterIsApplied} loading={loadingRollups} resetFilters={this.resetFilters} />}
          onChange={this.onTableChange}
          pagination={pagination}
          selection={selection}
          sorting={sorting}
          tableLayout="auto"
        />
      );
    };

    const commonDeleteModal = () => {
      return (
        isDeleteModalVisible && (
          <DeleteModal rollupId={this.getSelectedRollupIds()} closeDeleteModal={this.closeDeleteModal} onClickDelete={this.onClickDelete} />
        )
      );
    };

    const { HeaderControl } = getNavigationUI();
    const { setAppRightControls } = getApplication();
    const controlControlsData = [
      {
        id: "Create rollup job",
        label: "롤업 작업 생성",
        iconType: "plus",
        fill: true,
        run: this.onClickCreate,
        testId: "createRollupButton",
        controlType: "button",
      },
    ];

    return useNewUX ? (
      <>
        <HeaderControl setMountPoint={setAppRightControls} controls={controlControlsData} />
        <EuiPanel>
          <EuiFlexGroup gutterSize="s" alignItems="center">
            <EuiFlexItem grow={true}>
              <EuiCompressedFieldSearch
                fullWidth
                incremental={true}
                value={search}
                placeholder="검색"
                aria-label="검색"
                onChange={this.onSearchChange}
              />
            </EuiFlexItem>
            <EuiFlexItem grow={false}>
              <EuiToolTip content="새로고침">
                <EuiButtonIcon
                  iconType="refresh"
                  onClick={this.getRollups}
                  aria-label="새로고침"
                  size="s"
                  display="base"
                  data-test-subj="refreshButton"
                />
              </EuiToolTip>
            </EuiFlexItem>
            <EuiFlexItem grow={false}>
              <EuiPopover
                id="action"
                button={actionButton}
                isOpen={isPopoverOpen}
                closePopover={this.closePopover}
                panelPaddingSize="s"
                anchorPosition="downLeft"
                data-test-subj="actionPopover"
              >
                <EuiContextMenuPanel items={newActionItems} size="s" />
              </EuiPopover>
            </EuiFlexItem>
          </EuiFlexGroup>
          <EuiSpacer size="m" />
          {commonTable()}
          {commonDeleteModal()}
        </EuiPanel>
      </>
    ) : (
      <EuiPanel>
        <EuiFlexGroup style={{ padding: "0px 10px" }} gutterSize="s" justifyContent="spaceBetween" alignItems="center">
          <EuiFlexItem>
            <EuiText size="s">
              <EuiTitle size="m">
                <h1>{"롤업 작업 (" + `${rollups.length}` + ")"}</h1>
              </EuiTitle>
            </EuiText>
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <EuiFlexGroup alignItems="center" gutterSize="s">
              <EuiFlexItem grow={false}>
                <EuiSmallButton iconType="refresh" onClick={this.getRollups} data-test-subj="refreshButton">
                  새로고침
                </EuiSmallButton>
              </EuiFlexItem>
              <EuiFlexItem grow={false}>
                <EuiSmallButton disabled={!selectedItems.length} onClick={this.onDisable} data-test-subj="disableButton">
                  비활성화
                </EuiSmallButton>
              </EuiFlexItem>
              <EuiFlexItem grow={false}>
                <EuiSmallButton
                  disabled={!selectedItems.length}
                  onClick={() => {
                    this.onEnable();
                  }}
                  data-test-subj="enableButton"
                >
                  활성화
                </EuiSmallButton>
              </EuiFlexItem>
              <EuiFlexItem grow={false}>
                <EuiPopover
                  id="action"
                  button={actionButton}
                  isOpen={isPopoverOpen}
                  closePopover={this.closePopover}
                  panelPaddingSize="s"
                  anchorPosition="downLeft"
                  data-test-subj="actionPopover"
                >
                  <EuiContextMenuPanel items={actionItems} size="s" />
                </EuiPopover>
              </EuiFlexItem>
              <EuiFlexItem grow={false}>
                <EuiSmallButton iconType="plus" onClick={this.onClickCreate} fill={true} data-test-subj="createRollupButton">
                  롤업 작업 생성
                </EuiSmallButton>
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiFlexItem>
        </EuiFlexGroup>

        <div style={{ padding: "initial" }}>
          <EuiFlexGroup style={{ padding: "0px 5px" }}>
            <EuiFlexItem>
              <EuiCompressedFieldSearch fullWidth={true} value={search} placeholder="검색" onChange={this.onSearchChange} />
            </EuiFlexItem>
          </EuiFlexGroup>

          <EuiHorizontalRule margin="xs" />

          {commonTable()}
          {commonDeleteModal()}
        </div>
      </EuiPanel>
    );
  }
}

export default function (props: Omit<RollupsProps, keyof DataSourceMenuProperties>) {
  const dataSourceMenuProps = useContext(DataSourceMenuContext);
  return <Rollups {...props} {...dataSourceMenuProps} />;
}
