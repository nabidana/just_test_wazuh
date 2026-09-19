/// <reference types="jest" />
import { AppMountParameters, CoreContext, PluginInitializerContext } from '.';
export { applicationServiceMock } from './application/application_service.mock';
export { scopedHistoryMock } from './application/scoped_history.mock';
export { chromeServiceMock } from './chrome/chrome_service.mock';
export { docLinksServiceMock } from './doc_links/doc_links_service.mock';
export { fatalErrorsServiceMock } from './fatal_errors/fatal_errors_service.mock';
export { httpServiceMock } from './http/http_service.mock';
export { i18nServiceMock } from './i18n/i18n_service.mock';
export { injectedMetadataServiceMock } from './injected_metadata/injected_metadata_service.mock';
export { notificationServiceMock } from './notifications/notifications_service.mock';
export { overlayServiceMock } from './overlays/overlay_service.mock';
export { savedObjectsServiceMock } from './saved_objects/saved_objects_service.mock';
export { uiSettingsServiceMock } from './ui_settings/ui_settings_service.mock';
export { workspacesServiceMock } from './workspace/workspaces_service.mock';
declare function createCoreSetupMock({ basePath, pluginStartDeps, pluginStartContract, }?: {
    basePath?: string;
    pluginStartDeps?: object;
    pluginStartContract?: any;
}): {
    application: jest.Mocked<import(".").ApplicationSetup>;
    chrome: {
        registerCollapsibleNavHeader: jest.Mock<any, any>;
        navGroup: {
            addNavLinksToGroup: jest.Mock<any, any>;
            getNavGroupEnabled: jest.Mock<any, any>;
            registerNavGroupUpdater: jest.Mock<any, any>;
        };
        globalSearch: {
            registerSearchCommand: jest.Mock<any, any>;
        };
    };
    context: jest.Mocked<import(".").ContextSetup>;
    docLinks: jest.Mock<any, any>;
    fatalErrors: jest.Mocked<import(".").FatalErrorsSetup>;
    getStartServices: jest.Mock<Promise<[{
        application: jest.Mocked<import(".").ApplicationStart>;
        chrome: DeeplyMockedKeys<import("./chrome").InternalChromeStart>;
        docLinks: import(".").DocLinksStart;
        http: import("./http/http_service.mock").HttpSetupMock;
        i18n: jest.Mocked<import(".").I18nStart>;
        notifications: MockedKeys<import(".").NotificationsStart>;
        overlays: DeeplyMockedKeys<import(".").OverlayStart>;
        uiSettings: jest.Mocked<import(".").IUiSettingsClient>;
        savedObjects: jest.Mocked<import(".").SavedObjectsStart>;
        injectedMetadata: {
            getInjectedVar: jest.MockInstance<unknown, [name: string, defaultValue?: any]> & ((name: string, defaultValue?: any) => unknown);
            getBranding: jest.MockInstance<import(".").Branding, []> & (() => import(".").Branding);
        };
        fatalErrors: jest.Mocked<import(".").FatalErrorsSetup>;
        workspaces: {
            currentWorkspaceId$: import("rxjs").BehaviorSubject<string>;
            workspaceList$: import("rxjs").BehaviorSubject<import(".").WorkspaceObject[]>;
            currentWorkspace$: import("rxjs").BehaviorSubject<import(".").WorkspaceObject | null>;
            initialized$: import("rxjs").BehaviorSubject<boolean>;
            client$: import("rxjs").BehaviorSubject<import(".").IWorkspaceClient | null>;
        };
    }, any, any]>, []>;
    http: import("./http/http_service.mock").HttpSetupMock;
    notifications: MockedKeys<import(".").NotificationsSetup>;
    uiSettings: jest.Mocked<import(".").IUiSettingsClient>;
    injectedMetadata: {
        getInjectedVar: jest.MockInstance<unknown, [name: string, defaultValue?: any]> & ((name: string, defaultValue?: any) => unknown);
        getBranding: jest.MockInstance<import(".").Branding, []> & (() => import(".").Branding);
    };
    workspaces: {
        currentWorkspaceId$: import("rxjs").BehaviorSubject<string>;
        workspaceList$: import("rxjs").BehaviorSubject<import(".").WorkspaceObject[]>;
        currentWorkspace$: import("rxjs").BehaviorSubject<import(".").WorkspaceObject | null>;
        initialized$: import("rxjs").BehaviorSubject<boolean>;
        setClient: jest.Mock<any, any>;
    };
};
declare function createCoreStartMock({ basePath }?: {
    basePath?: string | undefined;
}): {
    application: jest.Mocked<import(".").ApplicationStart>;
    chrome: DeeplyMockedKeys<import("./chrome").InternalChromeStart>;
    docLinks: import(".").DocLinksStart;
    http: import("./http/http_service.mock").HttpSetupMock;
    i18n: jest.Mocked<import(".").I18nStart>;
    notifications: MockedKeys<import(".").NotificationsStart>;
    overlays: DeeplyMockedKeys<import(".").OverlayStart>;
    uiSettings: jest.Mocked<import(".").IUiSettingsClient>;
    savedObjects: jest.Mocked<import(".").SavedObjectsStart>;
    injectedMetadata: {
        getInjectedVar: jest.MockInstance<unknown, [name: string, defaultValue?: any]> & ((name: string, defaultValue?: any) => unknown);
        getBranding: jest.MockInstance<import(".").Branding, []> & (() => import(".").Branding);
    };
    fatalErrors: jest.Mocked<import(".").FatalErrorsSetup>;
    workspaces: {
        currentWorkspaceId$: import("rxjs").BehaviorSubject<string>;
        workspaceList$: import("rxjs").BehaviorSubject<import(".").WorkspaceObject[]>;
        currentWorkspace$: import("rxjs").BehaviorSubject<import(".").WorkspaceObject | null>;
        initialized$: import("rxjs").BehaviorSubject<boolean>;
        client$: import("rxjs").BehaviorSubject<import(".").IWorkspaceClient | null>;
    };
};
declare function pluginInitializerContextMock(): PluginInitializerContext<object>;
declare function createCoreContext(): CoreContext;
declare function createStorageMock(): jest.Mocked<Storage>;
declare function createAppMountParametersMock(appBasePath?: string): jest.Mocked<AppMountParameters<unknown>>;
export declare const coreMock: {
    createCoreContext: typeof createCoreContext;
    createSetup: typeof createCoreSetupMock;
    createStart: typeof createCoreStartMock;
    createPluginInitializerContext: typeof pluginInitializerContextMock;
    createStorage: typeof createStorageMock;
    createAppMountParamters: typeof createAppMountParametersMock;
};
//# sourceMappingURL=mocks.d.ts.map