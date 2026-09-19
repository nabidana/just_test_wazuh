/// <reference types="jest" />
import { SavedObjectsType } from '../types';
export declare const setupServer: (coreId?: symbol) => Promise<{
    server: import("../../http").HttpService;
    httpSetup: import("../../http").InternalHttpServiceSetup;
    handlerContext: {
        savedObjects: {
            client: jest.Mocked<Pick<import("..").SavedObjectsClient, "find" | "update" | "get" | "create" | "bulkCreate" | "checkConflicts" | "delete" | "deleteByWorkspace" | "bulkGet" | "addToNamespaces" | "deleteFromNamespaces" | "bulkUpdate" | "errors" | "deleteFromWorkspaces" | "addToWorkspaces">>;
            typeRegistry: jest.Mocked<Pick<import("..").SavedObjectTypeRegistry, "getType" | "getVisibleTypes" | "getAllTypes" | "getImportableAndExportableTypes" | "isNamespaceAgnostic" | "isSingleNamespace" | "isMultiNamespace" | "isHidden" | "getIndex" | "isImportableAndExportable"> & Pick<import("..").SavedObjectTypeRegistry, "registerType">>;
        };
        opensearch: {
            client: import("../../opensearch/client/mocks").ScopedClusterClientMock;
            legacy: {
                client: jest.Mocked<Pick<import("../..").LegacyScopedClusterClient, "callAsInternalUser" | "callAsCurrentUser">>;
            };
        };
        uiSettings: {
            client: jest.Mocked<import("../..").IUiSettingsClient>;
        };
        auditor: jest.Mocked<import("../..").Auditor>;
        dynamicConfig: {
            client: Pick<import("../../config").IInternalDynamicConfigurationClient, "getConfig" | "bulkGetConfigs" | "listConfigs">;
            asyncLocalStore: import("../../config").AsyncLocalStorageContext | undefined;
        };
    };
}>;
export declare const createExportableType: (name: string) => SavedObjectsType;
//# sourceMappingURL=test_utils.d.ts.map