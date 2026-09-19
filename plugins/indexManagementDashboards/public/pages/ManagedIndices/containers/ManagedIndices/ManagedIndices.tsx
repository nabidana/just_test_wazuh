/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Component, useContext } from "react";
import { RouteComponentProps } from "react-router-dom";
import {
  EuiBasicTable,
  EuiHorizontalRule,
  EuiLink,
  EuiFlexGroup,
  EuiFlexItem,
  EuiSmallButton,
  EuiTitle,
  EuiSpacer,
  EuiTableFieldDataColumnType,
  // @ts-ignore
  Criteria,
  EuiTableSortingType,
  Direction,
  // @ts-ignore
  Pagination,
  EuiTableSelectionType,
  ArgsWithQuery,
  ArgsWithError,
  Query,
  EuiContextMenuItem,
  EuiPopover,
  EuiContextMenuPanel,
  EuiPanel,
} from "@elastic/eui";
import queryString from "query-string";
import _ from "lodash";
import { ContentPanel, ContentPanelActions } from "../../../../components/ContentPanel";
import ManagedIndexControls from "../../components/ManagedIndexControls";
import ManagedIndexEmptyPrompt from "../../components/ManagedIndexEmptyPrompt";
import { DEFAULT_PAGE_SIZE_OPTIONS, DEFAULT_QUERY_PARAMS } from "../../utils/constants";
import { BREADCRUMBS, DEFAULT_EMPTY_DATA, PLUGIN_NAME, ROUTES } from "../../../../utils/constants";
import InfoModal from "../../components/InfoModal";
import PolicyModal from "../../../../components/PolicyModal";
import { ModalConsumer } from "../../../../components/Modal";
import { getURLQueryParams } from "../../utils/helpers";
import { ManagedIndexItem } from "../../../../../models/interfaces";
import { ManagedIndexService } from "../../../../services";
import { getErrorMessage } from "../../../../utils/helpers";
import ConfirmationModal from "../../../../components/ConfirmationModal";
import RetryModal from "../../components/RetryModal";
import RolloverAliasModal from "../../components/RolloverAliasModal";
import { CoreServicesContext } from "../../../../components/core_services";
import { DataStream } from "../../../../../server/models/interfaces";
import { SECURITY_EXCEPTION_PREFIX } from "../../../../../server/utils/constants";
import { DataSourceMenuContext, DataSourceMenuProperties } from "../../../../services/DataSourceMenuContext";
import MDSEnabledComponent from "../../../../components/MDSEnabledComponent";
import { getApplication, getNavigationUI, getUISettings } from "../../../../services/Services";
import { TopNavControlButtonData } from "src/plugins/navigation/public";

interface ManagedIndicesProps extends RouteComponentProps, DataSourceMenuProperties {
  managedIndexService: ManagedIndexService;
}

interface ManagedIndicesState extends DataSourceMenuProperties {
  totalManagedIndices: number;
  from: number;
  size: number;
  search: string;
  query: Query;
  sortField: keyof ManagedIndexItem;
  sortDirection: Direction;
  selectedItems: ManagedIndexItem[];
  managedIndices: ManagedIndexItem[];
  loadingManagedIndices: boolean;
  showDataStreams: boolean;
  isDataStreamColumnVisible: boolean;
  useUpdatedUX: boolean;
  showRetryModal: boolean;
  showRemoveModal: boolean;
  showEditModal: boolean;
  isPopoverOpen: boolean;
}

export class ManagedIndices extends MDSEnabledComponent<ManagedIndicesProps, ManagedIndicesState> {
  static contextType = CoreServicesContext;
  columns: EuiTableFieldDataColumnType<ManagedIndexItem>[];

  constructor(props: ManagedIndicesProps) {
    super(props);

    const { from, size, search, sortField, sortDirection, showDataStreams } = getURLQueryParams(this.props.location);

    const uiSettings = getUISettings();
    const useUpdatedUX = uiSettings.get("home:useNewHomePage");

    this.state = {
      ...this.state,
      totalManagedIndices: 0,
      from,
      size,
      search,
      query: Query.parse(search),
      sortField,
      sortDirection,
      selectedItems: [],
      managedIndices: [],
      loadingManagedIndices: true,
      showDataStreams,
      isDataStreamColumnVisible: showDataStreams,
      useUpdatedUX: useUpdatedUX,
      showRetryModal: false,
      showRemoveModal: false,
      showEditModal: false,
      isPopoverOpen: false,
    };

    this.getManagedIndices = _.debounce(this.getManagedIndices, 500, { leading: true });

    this.columns = [
      {
        field: "index",
        name: "인덱스",
        sortable: true,
        truncateText: true,
        textOnly: true,
        render: (index: string) => <span title={index}>{index}</span>,
      },
      {
        field: "dataStream",
        name: "데이터 스트림",
        sortable: true,
        truncateText: true,
        textOnly: true,
        render: (dataStream) => dataStream || DEFAULT_EMPTY_DATA,
      },
      {
        field: "policyId",
        name: "정책",
        sortable: true,
        truncateText: true,
        textOnly: true,
        render: this.renderPolicyId,
      },
      {
        field: "managedIndexMetaData.state.name",
        name: "상태",
        sortable: false,
        truncateText: false,
        // @ts-ignore
        render: (state: string) => state || DEFAULT_EMPTY_DATA,
      },
      {
        field: "managedIndexMetaData.action.name",
        name: "작업",
        sortable: false,
        truncateText: false,
        // @ts-ignore
        render: (action: string) => (
          <span style={{ textTransform: "capitalize" }}>{(action || DEFAULT_EMPTY_DATA).split("_").join(" ")}</span>
        ),
      },
      {
        field: "managedIndexMetaData.info",
        name: "정보",
        sortable: false,
        truncateText: true,
        textOnly: true,
        render: (info: object) => (
          <ModalConsumer>
            {({ onShow }) => (
              <EuiLink style={{ width: "100%", overflow: "hidden", textOverflow: "ellipsis" }} onClick={() => onShow(InfoModal, { info })}>
                {_.get(info, "message", DEFAULT_EMPTY_DATA)}
              </EuiLink>
            )}
          </ModalConsumer>
        ),
      },
      {
        field: "index", // we don't care about the field as we're using the whole item in render
        name: "작업 상태",
        sortable: false,
        truncateText: false,
        render: (index: string, item: ManagedIndexItem) => {
          const { managedIndexMetaData } = item;
          if (!managedIndexMetaData) return "초기화 중";
          const { policyCompleted, retryInfo, action } = managedIndexMetaData;
          if (policyCompleted) return "완료";
          if (retryInfo && retryInfo.failed) return "실패";
          if (action && action.failed) return "실패";
          return "실행 중";
        },
      },
    ];
  }

  managedIndicesColumns = (isDataStreamColumnVisible: boolean): EuiTableFieldDataColumnType<ManagedIndexItem>[] => {
    return isDataStreamColumnVisible ? this.columns : this.columns.filter((col) => col["field"] !== "dataStream");
  };

  async componentDidMount() {
    const breadCrumbs = this.state.useUpdatedUX
      ? [BREADCRUMBS.MANAGED_INDICES]
      : [BREADCRUMBS.INDEX_MANAGEMENT, BREADCRUMBS.MANAGED_INDICES];
    this.context.chrome.setBreadcrumbs(breadCrumbs);
    await this.getManagedIndices();
    if (this.state.useUpdatedUX) {
      this.context.chrome.setBreadcrumbs([
        { text: BREADCRUMBS.MANAGED_INDICES.text.concat(` (${this.state.totalManagedIndices})`), href: BREADCRUMBS.MANAGED_INDICES.href },
      ]);
    }
  }

  async componentDidUpdate(prevProps: ManagedIndicesProps, prevState: ManagedIndicesState) {
    const prevQuery = ManagedIndices.getQueryObjectFromState(prevState);
    const currQuery = ManagedIndices.getQueryObjectFromState(this.state);
    if (!_.isEqual(prevQuery, currQuery)) {
      await this.getManagedIndices();
    }
    if (this.state.useUpdatedUX) {
      this.context.chrome.setBreadcrumbs([
        { text: BREADCRUMBS.MANAGED_INDICES.text.concat(` (${this.state.totalManagedIndices})`), href: BREADCRUMBS.MANAGED_INDICES.href },
      ]);
    }
  }

  static getQueryObjectFromState({
    from,
    size,
    search,
    sortField,
    sortDirection,
    showDataStreams,
    dataSourceId,
    multiDataSourceEnabled,
  }: ManagedIndicesState) {
    return {
      from,
      size,
      search,
      sortField,
      sortDirection,
      showDataStreams,
      ...(multiDataSourceEnabled ? { dataSourceId } : {}),
    };
  }

  renderPolicyId = (policyId: string, item: ManagedIndexItem) => {
    let errorMessage: string | undefined = undefined;
    if (item.managedIndexMetaData?.policySeqNo == null) errorMessage = `아직 초기화 중입니다. 잠시 기다려 주세요.`;
    if (!item.policy) errorMessage = `정책을 불러오지 못했습니다: ${item.policyId}`;

    return (
      <ModalConsumer>
        {({ onShow, onClose }) => (
          <EuiLink
            onClick={() =>
              onShow(PolicyModal, {
                policyId: policyId,
                policy: item.policy,
                onEdit: () => this.onClickModalEdit(item, onClose),
                errorMessage,
              })
            }
          >
            {policyId}
          </EuiLink>
        )}
      </ModalConsumer>
    );
  };

  getManagedIndices = async (): Promise<void> => {
    this.setState({ loadingManagedIndices: true });
    try {
      const { managedIndexService, history } = this.props;
      const queryObject = ManagedIndices.getQueryObjectFromState(this.state);
      const queryParamsString = queryString.stringify(queryObject);
      history.replace({ ...this.props.location, search: queryParamsString });

      const getManagedIndicesResponse = await managedIndexService.getManagedIndices({
        ...queryObject,
        terms: this.getTermClausesFromState(),
        indices: this.getFieldClausesFromState("indices"),
        dataStreams: this.getFieldClausesFromState("data_streams"),
      });

      if (getManagedIndicesResponse.ok) {
        const {
          response: { managedIndices, totalManagedIndices },
        } = getManagedIndicesResponse;
        this.setState({ managedIndices, totalManagedIndices });
      } else {
        this.context.notifications.toasts.addDanger(getManagedIndicesResponse.error);
      }
    } catch (err) {
      this.context.notifications.toasts.addDanger(getErrorMessage(err, "관리 대상 인덱스를 불러오는 중 문제가 발생했습니다"));
    }

    // Avoiding flicker by showing/hiding the "Data stream" column only after the results are loaded.
    const { showDataStreams } = this.state;
    this.setState({ loadingManagedIndices: false, isDataStreamColumnVisible: showDataStreams });
  };

  getDataStreams = async (): Promise<DataStream[]> => {
    const { managedIndexService } = this.props;
    const serverResponse = await managedIndexService.getDataStreams(undefined);
    if (!serverResponse.ok) {
      if (serverResponse.error.startsWith(SECURITY_EXCEPTION_PREFIX)) {
        this.context.notifications.toasts.addWarning(serverResponse.error);
      }
    }
    return serverResponse.response.dataStreams;
  };

  toggleShowDataStreams = (): void => {
    const { showDataStreams } = this.state;
    this.setState({ showDataStreams: !showDataStreams });
  };

  getFieldClausesFromState = (clause: string): string[] => {
    const { query } = this.state;
    return _.flatten((query.ast.getFieldClauses(clause) || []).map((field) => field.value));
  };

  getTermClausesFromState = (): string[] => {
    const { query } = this.state;
    return (query.ast.getTermClauses() || []).map((term) => term.value);
  };

  onClickRemovePolicy = async (indices: string[]): Promise<void> => {
    try {
      if (!indices.length) return;
      const { managedIndexService } = this.props;
      const removePolicyResponse = await managedIndexService.removePolicy(indices);
      if (removePolicyResponse.ok) {
        const { updatedIndices, failedIndices, failures } = removePolicyResponse.response;
        if (updatedIndices) {
          this.context.notifications.toasts.addSuccess(`관리 대상 인덱스 ${updatedIndices}개에서 정책을 제거했습니다`);
          await this.getManagedIndices();
        }
        if (failures) {
          this.context.notifications.toasts.addDanger(
            `다음 인덱스에서 정책 제거에 실패했습니다: ${failedIndices
              .map((failedIndex) => `[${failedIndex.indexName}, ${failedIndex.reason}]`)
              .join(", ")}`
          );
        }
      } else {
        this.context.notifications.toasts.addDanger(removePolicyResponse.error);
      }
    } catch (err) {
      this.context.notifications.toasts.addDanger(getErrorMessage(err, "정책을 제거하는 중 문제가 발생했습니다"));
    }
  };

  onTableChange = ({ page: tablePage, sort }: Criteria<ManagedIndexItem>): void => {
    const { index: page, size } = tablePage;
    const { field: sortField, direction: sortDirection } = sort;
    this.setState({ from: page * size, size, sortField, sortDirection });
  };

  onSelectionChange = (selectedItems: ManagedIndexItem[]): void => {
    this.setState({ selectedItems });
  };

  onSearchChange = ({ query, queryText, error }: ArgsWithQuery | ArgsWithError): void => {
    if (error) {
      return;
    }

    this.setState({ from: 0, search: queryText, query });
  };

  onClickModalEdit = (item: ManagedIndexItem, onClose: () => void): void => {
    onClose();
    if (!item || !item.policyId) return;
    this.props.history.push(`${ROUTES.EDIT_POLICY}?id=${item.policyId}`);
  };

  resetFilters = (): void => {
    this.setState({ search: DEFAULT_QUERY_PARAMS.search, query: Query.parse(DEFAULT_QUERY_PARAMS.search) });
  };

  onShowRetryModal = (): void => {
    this.setState({ showRetryModal: true });
  };

  onCloseRetryModal = (): void => {
    this.setState({ showRetryModal: false });
  };

  onShowRemoveModal = () => {
    this.setState({ showRemoveModal: true });
  };

  onCloseRemoveModal = () => {
    this.setState({ showRemoveModal: false });
  };

  onShowEditModal = () => {
    this.setState({ showEditModal: true });
  };

  onCloseEditModal = () => {
    this.setState({ showEditModal: false });
  };

  closePopover = () => {
    this.setState({ isPopoverOpen: false });
  };

  onActionButtonClick = () => {
    this.setState({ isPopoverOpen: !this.state.isPopoverOpen });
  };

  render() {
    const {
      totalManagedIndices,
      from,
      size,
      search,
      sortField,
      sortDirection,
      selectedItems,
      managedIndices,
      loadingManagedIndices,
      showDataStreams,
      isDataStreamColumnVisible,
      showRetryModal,
      showRemoveModal,
      showEditModal,
      isPopoverOpen,
    } = this.state;
    const filterIsApplied = !!search;
    const page = Math.floor(from / size);

    const pagination: Pagination = {
      pageIndex: page,
      pageSize: size,
      pageSizeOptions: DEFAULT_PAGE_SIZE_OPTIONS,
      totalItemCount: totalManagedIndices,
    };

    const sorting: EuiTableSortingType<ManagedIndexItem> = {
      sort: {
        direction: sortDirection,
        field: sortField,
      },
    };

    const selection: EuiTableSelectionType<ManagedIndexItem> = {
      onSelectionChange: this.onSelectionChange,
    };

    const isRetryDisabled =
      !selectedItems.length ||
      selectedItems.some((item): boolean => {
        if (!item.managedIndexMetaData) return true;
        const { retryInfo, action } = item.managedIndexMetaData;
        return !(retryInfo && retryInfo.failed) && !(action && action.failed);
      });

    // Editing the rollover alias for a data stream shouldn't be allowed.
    const isDataStreamIndexSelected = selectedItems.some((item) => item.dataStream !== null);

    const actions = [
      {
        text: "롤오버 별칭 수정",
        buttonProps: { disabled: selectedItems.length !== 1 || isDataStreamIndexSelected },
        modal: {
          onClickModal: (onShow: (component: any, props: object) => void) => () =>
            onShow(RolloverAliasModal, {
              index: selectedItems[0].index,
              core: this.context,
            }),
        },
      },
      {
        text: "정책 제거",
        buttonProps: { disabled: !selectedItems.length },
        modal: {
          onClickModal: (onShow: (component: any, props: object) => void) => () =>
            onShow(ConfirmationModal, {
              title: `${
                selectedItems.length === 1 ? `${selectedItems[0].index}의 정책` : `인덱스 ${selectedItems.length}개의 정책`
              } 제거`,
              bodyMessage: `${
                selectedItems.length === 1 ? `${selectedItems[0].index}의 정책을` : `인덱스 ${selectedItems.length}개의 정책을`
              } 영구적으로 제거하시겠습니까? 이 작업은 취소할 수 없습니다.`,
              actionMessage: "제거",
              onAction: () => this.onClickRemovePolicy(selectedItems.map((item) => item.index)),
            }),
        },
      },
      {
        text: "정책 재시도",
        buttonProps: { disabled: isRetryDisabled },
        modal: {
          onClickModal: (onShow: (component: any, props: object) => void) => () =>
            onShow(RetryModal, {
              retryItems: _.cloneDeep(selectedItems),
            }),
        },
      },
    ];

    const RemovePolicyModal = () => {
      return (
        showRemoveModal && (
          <ConfirmationModal
            title={`${
              selectedItems.length === 1 ? `${selectedItems[0].index}의 정책` : `인덱스 ${selectedItems.length}개의 정책`
            } 제거`}
            bodyMessage={`${
              selectedItems.length === 1 ? `${selectedItems[0].index}의 정책을` : `인덱스 ${selectedItems.length}개의 정책을`
            } 영구적으로 제거하시겠습니까? 이 작업은 취소할 수 없습니다.`}
            actionMessage={"제거"}
            onAction={() => this.onClickRemovePolicy(selectedItems.map((item) => item.index))}
            onClose={this.onCloseRemoveModal}
          />
        )
      );
    };

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

    const popoverActionItems = [
      <ModalConsumer>
        {({ onShow, onClose }) => (
          <EuiContextMenuItem
            size="s"
            key="Edit"
            toolTipPosition="left"
            disabled={selectedItems.length !== 1 || isDataStreamIndexSelected}
            data-test-subj="editOption"
            onClick={() =>
              onShow(RolloverAliasModal, {
                index: selectedItems[0].index,
                core: this.context,
              })
            }
          >
            롤오버 별칭 수정
          </EuiContextMenuItem>
        )}
      </ModalConsumer>,
      <EuiContextMenuItem
        size="s"
        key="Remove"
        toolTipPosition="left"
        disabled={!selectedItems.length}
        data-test-subj="removeOption"
        onClick={() => {
          this.closePopover();
          this.onShowRemoveModal();
        }}
      >
        정책 제거
      </EuiContextMenuItem>,
      <ModalConsumer>
        {({ onShow, onClose }) => (
          <EuiContextMenuItem
            size="s"
            key="Retry"
            toolTipPosition="left"
            disabled={isRetryDisabled}
            data-test-subj="RetryOption"
            onClick={() =>
              onShow(RetryModal, {
                retryItems: _.cloneDeep(selectedItems),
              })
            }
          >
            정책 재시도
          </EuiContextMenuItem>
        )}
      </ModalConsumer>,
    ];

    const Action = () => {
      return (
        <EuiFlexItem grow={false}>
          <EuiPopover
            id="action"
            button={actionsButton}
            isOpen={isPopoverOpen}
            closePopover={this.closePopover}
            anchorPosition="downLeft"
            panelPaddingSize="s"
          >
            <EuiContextMenuPanel items={popoverActionItems} size="s" />
          </EuiPopover>
        </EuiFlexItem>
      );
    };

    const { HeaderControl } = getNavigationUI();
    const { setAppRightControls } = getApplication();

    const CommonTable = () => {
      return (
        <EuiBasicTable
          columns={this.managedIndicesColumns(isDataStreamColumnVisible)}
          isSelectable={true}
          itemId="index"
          items={managedIndices}
          noItemsMessage={
            <ManagedIndexEmptyPrompt
              history={this.props.history}
              filterIsApplied={filterIsApplied}
              loading={loadingManagedIndices}
              resetFilters={this.resetFilters}
            />
          }
          onChange={this.onTableChange}
          pagination={pagination}
          selection={selection}
          sorting={sorting}
        />
      );
    };

    const onClickChange = () => {
      this.props.history.push(ROUTES.CHANGE_POLICY);
    };

    return this.state.useUpdatedUX ? (
      <>
        <HeaderControl
          setMountPoint={setAppRightControls}
          controls={[
            {
              id: "Change policy",
              label: "정책 변경",
              fill: true,
              run: onClickChange,
              testId: "changePolicyButton",
              controlType: "button",
              color: "primary",
            } as TopNavControlButtonData,
          ]}
        />

        <div style={{ padding: "0px" }}>
          <EuiPanel>
            <ManagedIndexControls
              search={search}
              onSearchChange={this.onSearchChange}
              onRefresh={this.getManagedIndices}
              showDataStreams={showDataStreams}
              getDataStreams={this.getDataStreams}
              toggleShowDataStreams={this.toggleShowDataStreams}
              Actions={Action()}
            />
            {CommonTable()}
          </EuiPanel>
          {RemovePolicyModal()}
        </div>
      </>
    ) : (
      <div style={{ padding: "0px 25px" }}>
        <EuiFlexGroup alignItems="center">
          <EuiFlexItem></EuiFlexItem>
          <EuiFlexItem grow={false}>
            <EuiSmallButton iconType="refresh" onClick={this.getManagedIndices} data-test-subj="refreshButton">
              새로고침
            </EuiSmallButton>
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <EuiSmallButton href={`${PLUGIN_NAME}#/change-policy`} data-test-subj="changePolicyButton">
              정책 변경
            </EuiSmallButton>
          </EuiFlexItem>
        </EuiFlexGroup>

        <EuiSpacer />
        <ContentPanel
          actions={<ContentPanelActions actions={actions} />}
          bodyStyles={{ padding: "initial" }}
          title="관리 대상 인덱스"
          itemCount={totalManagedIndices}
        >
          <ManagedIndexControls
            search={search}
            onSearchChange={this.onSearchChange}
            onRefresh={this.getManagedIndices}
            showDataStreams={showDataStreams}
            getDataStreams={this.getDataStreams}
            toggleShowDataStreams={this.toggleShowDataStreams}
          />

          <EuiHorizontalRule margin="xs" />

          {CommonTable()}
        </ContentPanel>
      </div>
    );
  }
}

export default function (props: Omit<ManagedIndicesProps, keyof DataSourceMenuProperties>) {
  const dataSourceMenuProps = useContext(DataSourceMenuContext);
  return <ManagedIndices {...props} {...dataSourceMenuProps} />;
}
