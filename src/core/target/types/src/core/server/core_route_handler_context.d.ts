import { InternalCoreStart } from './internal_types';
import { OpenSearchDashboardsRequest } from './http/router';
import { InternalSavedObjectsServiceStart } from './saved_objects';
import { InternalOpenSearchServiceStart, IScopedClusterClient, LegacyScopedClusterClient } from './opensearch';
import { Auditor } from './audit_trail';
import { InternalUiSettingsServiceStart, IUiSettingsClient } from './ui_settings';
import { AsyncLocalStorageContext, InternalDynamicConfigServiceStart } from './config';
declare class CoreOpenSearchRouteHandlerContext {
    #private;
    private readonly opensearchStart;
    private readonly request;
    constructor(opensearchStart: InternalOpenSearchServiceStart, request: OpenSearchDashboardsRequest);
    get client(): IScopedClusterClient;
    get legacy(): {
        client: Pick<LegacyScopedClusterClient, "callAsInternalUser" | "callAsCurrentUser">;
    };
}
declare class CoreSavedObjectsRouteHandlerContext {
    #private;
    private readonly savedObjectsStart;
    private readonly request;
    constructor(savedObjectsStart: InternalSavedObjectsServiceStart, request: OpenSearchDashboardsRequest);
    get client(): Pick<import("./saved_objects").SavedObjectsClient, "find" | "update" | "get" | "create" | "bulkCreate" | "checkConflicts" | "delete" | "deleteByWorkspace" | "bulkGet" | "addToNamespaces" | "deleteFromNamespaces" | "bulkUpdate" | "errors" | "deleteFromWorkspaces" | "addToWorkspaces">;
    get typeRegistry(): Pick<import("./saved_objects").SavedObjectTypeRegistry, "getType" | "getVisibleTypes" | "getAllTypes" | "getImportableAndExportableTypes" | "isNamespaceAgnostic" | "isSingleNamespace" | "isMultiNamespace" | "isHidden" | "getIndex" | "isImportableAndExportable">;
}
declare class CoreUiSettingsRouteHandlerContext {
    #private;
    private readonly uiSettingsStart;
    private readonly savedObjectsRouterHandlerContext;
    constructor(uiSettingsStart: InternalUiSettingsServiceStart, savedObjectsRouterHandlerContext: CoreSavedObjectsRouteHandlerContext);
    get client(): IUiSettingsClient;
}
declare class CoreDynamicConfigRouteHandlerContext {
    #private;
    private readonly dynamicConfigServiceStart;
    constructor(dynamicConfigServiceStart: InternalDynamicConfigServiceStart);
    get client(): Pick<import("./config").IInternalDynamicConfigurationClient, "getConfig" | "bulkGetConfigs" | "listConfigs">;
    get asyncLocalStore(): AsyncLocalStorageContext | undefined;
}
export declare class CoreRouteHandlerContext {
    #private;
    private readonly coreStart;
    private readonly request;
    readonly opensearch: CoreOpenSearchRouteHandlerContext;
    readonly savedObjects: CoreSavedObjectsRouteHandlerContext;
    readonly uiSettings: CoreUiSettingsRouteHandlerContext;
    readonly dynamicConfig: CoreDynamicConfigRouteHandlerContext;
    constructor(coreStart: InternalCoreStart, request: OpenSearchDashboardsRequest);
    get auditor(): Auditor;
}
export {};
//# sourceMappingURL=core_route_handler_context.d.ts.map