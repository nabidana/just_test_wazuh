/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */
import {
  EuiSmallButton,
  EuiContextMenuItem,
  EuiContextMenuPanel,
  EuiInMemoryTable,
  EuiPopover,
  EuiTableFieldDataColumnType,
  EuiText,
  EuiTextColor,
  EuiButtonIcon,
  EuiPanel,
  EuiToolTip,
} from "@elastic/eui";
import { getErrorMessage } from "../../../../utils/helpers";
import React, { Component, useContext } from "react";
import { RouteComponentProps } from "react-router-dom";
import { CatRepository, CreateRepositoryBody, CreateRepositorySettings } from "../../../../../server/models/interfaces";
import { CoreServicesContext } from "../../../../components/core_services";
import { SnapshotManagementService } from "../../../../services";
import { ContentPanel } from "../../../../components/ContentPanel";
import CreateRepositoryFlyout from "../../components/CreateRepositoryFlyout";
import { FieldValueSelectionFilterConfigType } from "@elastic/eui/src/components/search_bar/filters/field_value_selection_filter";
import { BREADCRUMBS } from "../../../../utils/constants";
import DeleteModal from "../../components/DeleteModal";
import { truncateSpan } from "../../../Snapshots/helper";
import { DataSourceMenuContext, DataSourceMenuProperties } from "../../../../services/DataSourceMenuContext";
import MDSEnabledComponent from "../../../../components/MDSEnabledComponent";
import { useUpdateUrlWithDataSourceProperties } from "../../../../components/MDSEnabledComponent";
import { getApplication, getNavigationUI, getUISettings } from "../../../../services/Services";
import { TopNavControlDescriptionData } from "src/plugins/navigation/public";

interface RepositoriesProps extends RouteComponentProps, DataSourceMenuProperties {
  snapshotManagementService: SnapshotManagementService;
}

interface RepositoriesState extends DataSourceMenuProperties {
  repositories: CatRepository[];
  loading: boolean;
  selectedItems: CatRepository[];

  showFlyout: boolean;

  isPopoverOpen: boolean;

  editRepo: string | null;

  isDeleteModalVisible: boolean;
  useNewUX: boolean;
}

export class Repositories extends MDSEnabledComponent<RepositoriesProps, RepositoriesState> {
  static contextType = CoreServicesContext;
  columns: EuiTableFieldDataColumnType<CatRepository>[];

  constructor(props: RepositoriesProps) {
    super(props);

    const uiSettings = getUISettings();
    const useNewUX = uiSettings.get("home:useNewHomePage");
    this.state = {
      ...this.state,
      repositories: [],
      loading: false,
      selectedItems: [],
      showFlyout: false,
      isPopoverOpen: false,
      editRepo: null,
      isDeleteModalVisible: false,
      useNewUX: useNewUX,
    };

    this.columns = [
      {
        field: "id",
        name: "리포지토리 이름",
        sortable: true,
        dataType: "string",
        width: "15%",
        align: "left",
        render: (value: string, item: CatRepository) => {
          return truncateSpan(value, 30);
        },
      },
      {
        field: "type",
        name: "유형",
        sortable: true,
        dataType: "string",
        width: "10%",
      },
      {
        field: "snapshotCount",
        name: "스냅샷 수",
        sortable: true,
        width: "80%",
      },
    ];
  }

  async componentDidMount() {
    const breadCrumbs = this.state.useNewUX
      ? [BREADCRUMBS.SNAPSHOT_REPOSITORIES]
      : [BREADCRUMBS.SNAPSHOT_MANAGEMENT, BREADCRUMBS.REPOSITORIES];
    this.context.chrome.setBreadcrumbs(breadCrumbs);
    await this.getRepos();
  }

  async componentDidUpdate(prevProps: RepositoriesProps, prevState: RepositoriesState) {
    const prevQuery = Repositories.getQueryObjectFromState(prevState);
    const currQuery = Repositories.getQueryObjectFromState(this.state);
    if (!_.isEqual(prevQuery, currQuery)) {
      await this.getRepos();
    }
  }

  static getQueryObjectFromState({ dataSourceId, multiDataSourceEnabled }: RepositoriesState) {
    return {
      ...(multiDataSourceEnabled ? { dataSourceId } : {}),
    };
  }

  getRepos = async () => {
    this.setState({ loading: true });

    try {
      const { snapshotManagementService } = this.props;
      const response = await snapshotManagementService.catRepositories();
      if (response.ok) {
        this.setState({ loading: false });
        this.setState({ repositories: response.response });
      } else {
        this.setState({ loading: false });
        this.context.notifications.toasts.addDanger(response.error);
      }
    } catch (err) {
      this.setState({ loading: false });
      this.context.notifications.toasts.addDanger(getErrorMessage(err, "리포지토리를 불러오는 중 문제가 발생했습니다."));
    }
  };

  createRepo = async (repoName: string, repoType: string, settings: CreateRepositorySettings) => {
    try {
      const { snapshotManagementService } = this.props;

      const createRepoBody: CreateRepositoryBody = {
        type: repoType,
        settings: settings,
      };
      const response = await snapshotManagementService.createRepository(repoName, createRepoBody);
      if (response.ok) {
        this.setState({ showFlyout: false });
        let toastMsgPre = "생성";
        if (!!this.state.editRepo) {
          toastMsgPre = "편집";
        }
        this.context.notifications.toasts.addSuccess(`리포지토리 ${repoName}을(를) ${toastMsgPre}했습니다.`);
        await this.getRepos();
      } else {
        this.context.notifications.toasts.addDanger(response.error);
      }
    } catch (err) {
      this.context.notifications.toasts.addDanger(getErrorMessage(err, "리포지토리를 생성하는 중 문제가 발생했습니다."));
    }
  };

  deleteRepo = async (repoName: string) => {
    try {
      const { snapshotManagementService } = this.props;
      const response = await snapshotManagementService.deleteRepository(repoName);
      if (response.ok) {
        this.context.notifications.toasts.addSuccess(`리포지토리 ${repoName}을(를) 삭제했습니다.`);
      } else {
        this.context.notifications.toasts.addDanger(response.error);
      }
    } catch (err) {
      this.context.notifications.toasts.addDanger(getErrorMessage(err, "리포지토리를 삭제하는 중 문제가 발생했습니다."));
    }
  };

  onClickDelete = async () => {
    const { selectedItems } = this.state;
    for (let item of selectedItems) {
      const repoName = item.id;
      await this.deleteRepo(repoName);
    }
    await this.getRepos();
  };

  onClickCreate = () => {
    this.setState({ showFlyout: true, editRepo: null });
  };

  onClickEdit = () => {
    const {
      selectedItems: [{ id }],
    } = this.state;
    this.setState({ showFlyout: true, editRepo: id });
  };

  closePopover = () => {
    this.setState({ isPopoverOpen: false });
  };

  render() {
    const { repositories, loading, selectedItems, showFlyout, isPopoverOpen, editRepo, isDeleteModalVisible, useNewUX } = this.state;
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
        <EuiTextColor color="danger">삭제</EuiTextColor>
      </EuiContextMenuItem>,
    ];
    const popoverButton = (
      <EuiSmallButton
        iconType="arrowDown"
        iconSide="right"
        disabled={!selectedItems.length}
        onClick={() => {
          this.setState({ isPopoverOpen: !this.state.isPopoverOpen });
        }}
        data-test-subj="actionButton"
      >
        작업
      </EuiSmallButton>
    );
    const actions = [
      <EuiSmallButton iconType="refresh" onClick={this.getRepos} data-test-subj="refreshButton">
        새로고침
      </EuiSmallButton>,
      <EuiSmallButton disabled={!selectedItems.length} onClick={this.showDeleteModal} data-test-subj="deleteButton" color="danger">
        삭제
      </EuiSmallButton>,
      <EuiSmallButton onClick={this.onClickCreate} fill={true} iconType="plus">
        리포지토리 생성
      </EuiSmallButton>,
    ];

    const renderToolsRight = () => {
      return [
        <>
          <EuiToolTip content="새로고침">
            <EuiButtonIcon
              iconType="refresh"
              onClick={this.getRepos}
              data-test-subj="refreshButton"
              aria-label="새로고침"
              size="s"
              display="base"
            />
          </EuiToolTip>
        </>,
      ];
    };

    const renderToolsLeft = () => {
      return [
        <EuiSmallButton
          iconType="trash"
          iconSide="left"
          iconSize="s"
          disabled={!selectedItems.length}
          onClick={this.showDeleteModal}
          data-test-subj="deleteButton"
          aria-label="삭제"
          color="danger"
          minWidth={75}
        >
          삭제
        </EuiSmallButton>,
      ];
    };

    const search = {
      toolsRight: useNewUX ? renderToolsRight() : undefined,
      toolsLeft: useNewUX ? renderToolsLeft() : undefined,
      box: {
        placeholder: "리포지토리 검색",
        compressed: true,
        increamental: true,
      },
      compressed: true,
      filters: [
        {
          type: "field_value_selection",
          field: "type",
          name: "유형",
          options: repositories.map((repo) => ({ value: repo.type })),
          multiSelect: "or",
        } as FieldValueSelectionFilterConfigType,
      ],
    };

    const subTitleText = (
      <EuiText color="subdued" size="s" style={{ padding: "5px 0px" }}>
        <p style={{ fontWeight: 200 }}>리포지토리는 스냅샷을 저장하는 데 사용되는 원격 스토리지 위치입니다.</p>
      </EuiText>
    );

    let additionalWarning = `${this.getSelectedSnapshotCounts()}개의 스냅샷이 있습니다`;
    if (selectedItems.length > 1) {
      additionalWarning += " (각 리포지토리 기준).";
    } else {
      additionalWarning += " (해당 리포지토리 기준).";
    }

    const descriptionData = [
      {
        description: "리포지토리는 스냅샷을 저장하는 데 사용되는 원격 스토리지 위치입니다.",
      } as TopNavControlDescriptionData,
    ];

    const controlControlsData = [
      {
        id: "Create repository",
        label: "리포지토리 생성",
        iconType: "plus",
        fill: true,
        run: this.onClickCreate,
        testId: "createRepo",
        controlType: "button",
      },
    ];

    const repositoriesTable = () => {
      return !useNewUX ? (
        <ContentPanel title={useTitle} actions={useActions} subTitleText={useSubTitleText}>
          <EuiInMemoryTable
            items={repositories}
            itemId="id"
            columns={this.columns}
            pagination={true}
            isSelectable={true}
            selection={{ onSelectionChange: (selectedItems) => this.setState({ selectedItems }) }}
            search={search}
            loading={loading}
          />
        </ContentPanel>
      ) : (
        <EuiPanel>
          <EuiInMemoryTable
            items={repositories}
            itemId="id"
            columns={this.columns}
            pagination={true}
            isSelectable={true}
            selection={{ onSelectionChange: (selectedItems) => this.setState({ selectedItems }) }}
            search={search}
            loading={loading}
          />
        </EuiPanel>
      );
    };

    const { HeaderControl } = getNavigationUI();
    const { setAppRightControls, setAppDescriptionControls } = getApplication();
    const useTitle = useNewUX ? undefined : (
      <EuiText size="s">
        <h1>리포지토리</h1>
      </EuiText>
    );
    const useActions = useNewUX ? undefined : actions;
    const useSubTitleText = useNewUX ? undefined : subTitleText;

    return (
      <>
        {useNewUX ? (
          <>
            <HeaderControl setMountPoint={setAppRightControls} controls={controlControlsData} />
            <HeaderControl setMountPoint={setAppDescriptionControls} controls={descriptionData} />
          </>
        ) : null}
        {repositoriesTable()}

        {showFlyout && (
          <CreateRepositoryFlyout
            service={this.props.snapshotManagementService}
            editRepo={editRepo}
            createRepo={this.createRepo}
            onCloseFlyout={() => {
              this.setState({ showFlyout: false });
            }}
          />
        )}

        {isDeleteModalVisible && (
          <DeleteModal
            type="repository"
            ids={this.getSelectedIds()}
            closeDeleteModal={this.closeDeleteModal}
            onClickDelete={this.onClickDelete}
            confirmation={true}
            addtionalWarning={additionalWarning}
          />
        )}
      </>
    );
  }

  showDeleteModal = () => {
    this.setState({ isDeleteModalVisible: true });
  };
  closeDeleteModal = () => {
    this.setState({ isDeleteModalVisible: false });
  };

  getSelectedIds = () => {
    return this.state.selectedItems
      .map((item: CatRepository) => {
        return item.id;
      })
      .join(", ");
  };

  getSelectedSnapshotCounts = () => {
    return this.state.selectedItems
      .map((item: CatRepository) => {
        return item.snapshotCount;
      })
      .join(", ");
  };
}

export default function (props: Omit<RepositoriesProps, keyof DataSourceMenuProperties>) {
  const dataSourceMenuProps = useContext(DataSourceMenuContext);
  useUpdateUrlWithDataSourceProperties();
  return <Repositories {...props} {...dataSourceMenuProps} />;
}
