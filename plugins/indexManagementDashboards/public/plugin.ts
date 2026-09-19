/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { i18n } from "@osd/i18n";
import { IndexManagementPluginStart, IndexManagementPluginSetup } from ".";
import {
  AppCategory,
  AppMountParameters,
  AppUpdater,
  CoreSetup,
  CoreStart,
  DEFAULT_APP_CATEGORIES,
  DEFAULT_NAV_GROUPS,
  Plugin,
  PluginInitializerContext,
  WorkspaceAvailability,
} from "../../../src/core/public";
import { actionRepoSingleton } from "./pages/VisualCreatePolicy/utils/helpers";
import { ROUTES } from "./utils/constants";
import { JobHandlerRegister } from "./JobHandler";
import { ManagementOverViewPluginSetup } from "../../../src/plugins/management_overview/public";
import { DataSourceManagementPluginSetup } from "../../../src/plugins/data_source_management/public";
import { dataSourceObservable } from "./pages/Main/Main";
import { BehaviorSubject } from "rxjs";
import { NavigationPublicPluginStart } from "../../../src/plugins/navigation/public";
import { setApplication, setNavigationUI, setUISettings } from "./services/Services";

interface IndexManagementSetupDeps {
  managementOverview?: ManagementOverViewPluginSetup;
  dataSourceManagement?: DataSourceManagementPluginSetup;
}

const ISM_CATEGORIES: Record<string, AppCategory> = Object.freeze({
  automation_policies: {
    id: "automation_policies",
    label: "자동화 정책",
    order: 2000,
  },
  templates: {
    id: "templates",
    label: "템플릿",
    order: 3000,
  },
  index_backup_and_recovery: {
    id: "index_backup_and_recovery",
    label: "인덱스 백업 및 복구",
    order: 4000,
  },
});

const ISM_FEATURE_DESCRIPTION: Record<string, string> = Object.freeze({
  index_management: i18n.translate("index-management-dashboards-plugin.indexManagement.description", {
    defaultMessage: "상태 정책, 템플릿, 별칭으로 인덱스를 관리합니다. 인덱스를 롤업하거나 트랜스폼할 수도 있습니다.",
  }),
  snapshot_management: i18n.translate("index-management-dashboards-plugin.snapshotManagement.description", {
    defaultMessage: "클러스터의 인덱스와 상태를 백업하고 복원합니다. 정책을 설정해 스냅샷 생성과 삭제를 자동화하세요.",
  }),
  indexes: i18n.translate("index-management-dashboards-plugin.indexes.description", {
    defaultMessage: "인덱스를 설정하고 관리합니다.",
  }),
  policy_managed_indexes: i18n.translate("index-management-dashboards-plugin.policyManagedIndexes.description", {
    defaultMessage: "인덱스 상태 관리(ISM) 정책으로 관리되는 인덱스를 확인합니다.",
  }),
  data_streams: i18n.translate("index-management-dashboards-plugin.dataStreams.description", {
    defaultMessage: "시계열 데이터 관리를 단순화합니다.",
  }),
  aliases: i18n.translate("index-management-dashboards-plugin.aliases.description", {
    defaultMessage: "여러 인덱스를 가상 인덱스 이름으로 묶어서 관리합니다.",
  }),
  index_state_management_policies: i18n.translate("index-management-dashboards-plugin.indexStateManagementPolicies.description", {
    defaultMessage: "주기적인 관리 작업을 자동화합니다.",
  }),
  index_templates: i18n.translate("index-management-dashboards-plugin.indexTemplates.description", {
    defaultMessage: "새 인덱스에 적용할 매핑과 설정을 미리 정의합니다.",
  }),
  notification_settings: i18n.translate("index-management-dashboards-plugin.notificationSettings.description", {
    defaultMessage: "인덱스 작업 상태에 대한 기본 알림을 설정합니다.",
  }),
  rollup_jobs: i18n.translate("index-management-dashboards-plugin.rollupJobs.description", {
    defaultMessage: "오래된 데이터를 롤업하여 요약된 인덱스로 만들어 데이터 세분성을 줄입니다.",
  }),
  transform_jobs: i18n.translate("index-management-dashboards-plugin.transformJobs.description", {
    defaultMessage: "특정 필드로 구성된 데이터의 요약 뷰를 생성합니다.",
  }),
  index_snapshots: i18n.translate("index-management-dashboards-plugin.indexSnapshots.description", {
    defaultMessage: "인덱스를 백업합니다.",
  }),
  snapshot_policies: i18n.translate("index-management-dashboards-plugin.snapshotPolicies.description", {
    defaultMessage: "자동 데이터 스냅샷을 설정합니다.",
  }),
  snapshot_repositories: i18n.translate("index-management-dashboards-plugin.snapshotRepositories.description", {
    defaultMessage: "스냅샷을 위한 원격 저장소를 구성합니다.",
  }),
  component_templates: i18n.translate("index-management-dashboards-plugin.componentTemplates.description", {
    defaultMessage: "인덱스 템플릿에 사용할 컴포넌트를 정의합니다.",
  }),
});

export interface ISMPluginStartDeps {
  navigation: NavigationPublicPluginStart;
}

export class IndexManagementPlugin implements Plugin<IndexManagementPluginSetup, IndexManagementPluginStart, IndexManagementSetupDeps> {
  constructor(private readonly initializerContext: PluginInitializerContext) {
    // can retrieve config from initializerContext
  }

  private updateDefaultRouteOfManagementApplications: AppUpdater = () => {
    const hash = `#/?dataSourceId=${dataSourceObservable.value?.id || ""}`;
    return {
      defaultPath: hash,
    };
  };

  private appStateUpdater = new BehaviorSubject<AppUpdater>(this.updateDefaultRouteOfManagementApplications);

  public setup(core: CoreSetup, { managementOverview, dataSourceManagement }: IndexManagementSetupDeps): IndexManagementPluginSetup {
    JobHandlerRegister(core);

    const mountWrapper = async (params: AppMountParameters, redirect: string) => {
      const { renderApp } = await import("./index_management_app");
      const [coreStart, depsStart] = await core.getStartServices();
      return renderApp(coreStart, depsStart, params, redirect, dataSourceManagement);
    };

    if (managementOverview) {
      managementOverview.register({
        id: "opensearch_index_management_dashboards",
        title: "인덱스 관리",
        order: 9010,
        description: i18n.translate("indexManagement.description", {
          defaultMessage: "상태 정책, 템플릿, 별칭으로 인덱스를 관리합니다. 인덱스를 롤업하거나 트랜스폼할 수도 있습니다.",
        }),
      });
      managementOverview.register({
        id: "opensearch_snapshot_management_dashboards",
        title: "스냅샷 관리",
        order: 9020,
        description: i18n.translate("snapshotManagement.description", {
          defaultMessage:
            "클러스터의 인덱스와 상태를 백업하고 복원합니다. 정책을 설정해 스냅샷 생성과 삭제를 자동화하세요.",
        }),
      });
    }

    const imApplicationID = "opensearch_index_management_dashboards";
    const smApplicationID = "opensearch_snapshot_management_dashboards";

    core.application.register({
      id: imApplicationID,
      title: "인덱스 관리",
      order: 9010,
      category: DEFAULT_APP_CATEGORIES.management,
      workspaceAvailability: WorkspaceAvailability.outsideWorkspace,
      description: ISM_FEATURE_DESCRIPTION.index_management,
      updater$: this.appStateUpdater,
      mount: async (params: AppMountParameters) => {
        const { renderApp } = await import("./index_management_app");
        const [coreStart, depsStart] = await core.getStartServices();
        return renderApp(coreStart, depsStart, params, ROUTES.INDEX_POLICIES, dataSourceManagement);
      },
    });

    core.application.register({
      id: smApplicationID,
      title: "스냅샷 관리",
      order: 9020,
      category: DEFAULT_APP_CATEGORIES.management,
      workspaceAvailability: WorkspaceAvailability.outsideWorkspace,
      description: ISM_FEATURE_DESCRIPTION.snapshot_management,
      updater$: this.appStateUpdater,
      mount: async (params: AppMountParameters) => {
        const { renderApp } = await import("./index_management_app");
        const [coreStart, depsStart] = await core.getStartServices();
        return renderApp(coreStart, depsStart, params, ROUTES.SNAPSHOT_POLICIES, dataSourceManagement);
      },
    });

    // In-app navigation registration

    if (core.chrome.navGroup.getNavGroupEnabled()) {
      // indices route
      core.application.register({
        id: `opensearch_index_management_dashboards_${encodeURIComponent(ROUTES.INDICES)}`,
        title: "인덱스",
        workspaceAvailability: WorkspaceAvailability.outsideWorkspace,
        description: ISM_FEATURE_DESCRIPTION.indexes,
        updater$: this.appStateUpdater,
        mount: async (params: AppMountParameters) => {
          return mountWrapper(params, ROUTES.INDICES);
        },
      });

      // policy managed index route
      core.application.register({
        id: `opensearch_index_management_dashboards_${encodeURIComponent(ROUTES.MANAGED_INDICES)}`,
        title: "정책 관리 인덱스",
        workspaceAvailability: WorkspaceAvailability.outsideWorkspace,
        description: ISM_FEATURE_DESCRIPTION.policy_managed_indexes,
        updater$: this.appStateUpdater,
        mount: async (params: AppMountParameters) => {
          return mountWrapper(params, ROUTES.MANAGED_INDICES);
        },
      });

      // data streams route
      core.application.register({
        id: `opensearch_index_management_dashboards_${encodeURIComponent(ROUTES.DATA_STREAMS)}`,
        title: "데이터 스트림",
        workspaceAvailability: WorkspaceAvailability.outsideWorkspace,
        description: ISM_FEATURE_DESCRIPTION.data_streams,
        updater$: this.appStateUpdater,
        mount: async (params: AppMountParameters) => {
          return mountWrapper(params, ROUTES.DATA_STREAMS);
        },
      });

      // index alias route
      core.application.register({
        id: `opensearch_index_management_dashboards_${encodeURIComponent(ROUTES.ALIASES)}`,
        title: "인덱스 별칭",
        workspaceAvailability: WorkspaceAvailability.outsideWorkspace,
        description: ISM_FEATURE_DESCRIPTION.aliases,
        updater$: this.appStateUpdater,
        mount: async (params: AppMountParameters) => {
          return mountWrapper(params, ROUTES.ALIASES);
        },
      });

      // index templates route
      core.application.register({
        id: `opensearch_index_management_dashboards_${encodeURIComponent(ROUTES.TEMPLATES)}`,
        title: "인덱스 템플릿",
        workspaceAvailability: WorkspaceAvailability.outsideWorkspace,
        description: ISM_FEATURE_DESCRIPTION.index_templates,
        updater$: this.appStateUpdater,
        mount: async (params: AppMountParameters) => {
          return mountWrapper(params, ROUTES.TEMPLATES);
        },
      });

      // component templates route
      core.application.register({
        id: `opensearch_index_management_dashboards_${encodeURIComponent(ROUTES.COMPOSABLE_TEMPLATES)}`,
        title: "컴포넌트 템플릿",
        workspaceAvailability: WorkspaceAvailability.outsideWorkspace,
        description: ISM_FEATURE_DESCRIPTION.component_templates,
        updater$: this.appStateUpdater,
        mount: async (params: AppMountParameters) => {
          return mountWrapper(params, ROUTES.COMPOSABLE_TEMPLATES);
        },
      });

      // notification settings route
      core.application.register({
        id: `opensearch_index_management_dashboards_${encodeURIComponent(ROUTES.NOTIFICATIONS)}`,
        title: "인덱스 작업 알림",
        workspaceAvailability: WorkspaceAvailability.outsideWorkspace,
        description: ISM_FEATURE_DESCRIPTION.notification_settings,
        updater$: this.appStateUpdater,
        mount: async (params: AppMountParameters) => {
          return mountWrapper(params, ROUTES.NOTIFICATIONS);
        },
      });

      // rollup jobs route
      core.application.register({
        id: `opensearch_index_management_dashboards_${encodeURIComponent(ROUTES.ROLLUPS)}`,
        title: "롤업 작업",
        workspaceAvailability: WorkspaceAvailability.outsideWorkspace,
        description: ISM_FEATURE_DESCRIPTION.rollup_jobs,
        updater$: this.appStateUpdater,
        mount: async (params: AppMountParameters) => {
          return mountWrapper(params, ROUTES.ROLLUPS);
        },
      });

      // transform jobs route
      core.application.register({
        id: `opensearch_index_management_dashboards_${encodeURIComponent(ROUTES.TRANSFORMS)}`,
        title: "트랜스폼 작업",
        workspaceAvailability: WorkspaceAvailability.outsideWorkspace,
        description: ISM_FEATURE_DESCRIPTION.transform_jobs,
        updater$: this.appStateUpdater,
        mount: async (params: AppMountParameters) => {
          return mountWrapper(params, ROUTES.TRANSFORMS);
        },
      });

      // index snapshots route
      core.application.register({
        id: `opensearch_index_management_dashboards_${encodeURIComponent(ROUTES.SNAPSHOTS)}`,
        title: "인덱스 스냅샷",
        category: ISM_CATEGORIES.index_backup_and_recovery,
        workspaceAvailability: WorkspaceAvailability.outsideWorkspace,
        description: ISM_FEATURE_DESCRIPTION.index_snapshots,
        updater$: this.appStateUpdater,
        mount: async (params: AppMountParameters) => {
          return mountWrapper(params, ROUTES.SNAPSHOTS);
        },
      });

      // snapshot repositories route
      core.application.register({
        id: `opensearch_index_management_dashboards_${encodeURIComponent(ROUTES.REPOSITORIES)}`,
        title: "스냅샷 리포지토리",
        category: ISM_CATEGORIES.index_backup_and_recovery,
        workspaceAvailability: WorkspaceAvailability.outsideWorkspace,
        description: ISM_FEATURE_DESCRIPTION.snapshot_repositories,
        updater$: this.appStateUpdater,
        mount: async (params: AppMountParameters) => {
          return mountWrapper(params, ROUTES.REPOSITORIES);
        },
      });
    }

    dataSourceObservable.subscribe((dataSourceOption) => {
      if (dataSourceOption) {
        this.appStateUpdater.next(this.updateDefaultRouteOfManagementApplications);
      }
    });

    core.chrome.navGroup.addNavLinksToGroup(DEFAULT_NAV_GROUPS.dataAdministration, [
      {
        id: `opensearch_index_management_dashboards_${encodeURIComponent(ROUTES.INDICES)}`,
        category: DEFAULT_APP_CATEGORIES.manageData,
        order: 200,
      },
      {
        id: `opensearch_index_management_dashboards_${encodeURIComponent(ROUTES.MANAGED_INDICES)}`,
        category: ISM_CATEGORIES.automation_policies,
        order: 100,
      },
      {
        id: `opensearch_index_management_dashboards_${encodeURIComponent(ROUTES.DATA_STREAMS)}`,
        category: DEFAULT_APP_CATEGORIES.manageData,
        order: 400,
      },
      {
        id: `opensearch_index_management_dashboards_${encodeURIComponent(ROUTES.ALIASES)}`,
        category: DEFAULT_APP_CATEGORIES.manageData,
        order: 300,
      },
      {
        id: imApplicationID,
        category: ISM_CATEGORIES.automation_policies,
        title: "인덱스 상태 관리 정책",
        order: 200,
      },
      {
        id: `opensearch_index_management_dashboards_${encodeURIComponent(ROUTES.TEMPLATES)}`,
        category: ISM_CATEGORIES.templates,
        order: 100,
      },
      {
        id: `opensearch_index_management_dashboards_${encodeURIComponent(ROUTES.NOTIFICATIONS)}`,
        category: DEFAULT_APP_CATEGORIES.manageData,
        order: 500,
      },
      {
        id: `opensearch_index_management_dashboards_${encodeURIComponent(ROUTES.ROLLUPS)}`,
        category: ISM_CATEGORIES.automation_policies,
        order: 300,
      },
      {
        id: `opensearch_index_management_dashboards_${encodeURIComponent(ROUTES.TRANSFORMS)}`,
        category: ISM_CATEGORIES.automation_policies,
        order: 400,
      },
      {
        id: `opensearch_index_management_dashboards_${encodeURIComponent(ROUTES.SNAPSHOTS)}`,
        category: ISM_CATEGORIES.index_backup_and_recovery,
        order: 100,
      },
      {
        id: smApplicationID,
        category: ISM_CATEGORIES.index_backup_and_recovery,
        title: "스냅샷 정책",
        order: 200,
      },
      {
        id: `opensearch_index_management_dashboards_${encodeURIComponent(ROUTES.REPOSITORIES)}`,
        category: ISM_CATEGORIES.index_backup_and_recovery,
        order: 300,
      },
      {
        id: `opensearch_index_management_dashboards_${encodeURIComponent(ROUTES.COMPOSABLE_TEMPLATES)}`,
        category: ISM_CATEGORIES.templates,
        order: 200,
      },
    ]);

    return {
      registerAction: (actionType, uiActionCtor, defaultAction) => {
        actionRepoSingleton.registerAction(actionType, uiActionCtor, defaultAction);
      },
    };
  }

  public start(core: CoreStart, { navigation }: ISMPluginStartDeps): IndexManagementPluginStart {
    Object.freeze(actionRepoSingleton.repository);
    // After this point, calling registerAction will throw error because "Object is not extensible"
    setNavigationUI(navigation.ui);
    setApplication(core.application);
    setUISettings(core.uiSettings);
    return {};
  }
}
