/// <reference types="jest" />
export declare const migratorInstanceMock: jest.Mocked<Pick<import("./migrations").OpenSearchDashboardsMigrator, "runMigrations" | "getStatus$" | "getActiveMappings" | "migrateDocument">>;
export declare const OpenSearchDashboardsMigratorMock: jest.Mock<any, any>;
export declare const clientProviderInstanceMock: jest.Mocked<Pick<import("./service").SavedObjectsClientProvider, "addClientWrapperFactory" | "setClientFactory" | "getClient">>;
export declare const typeRegistryInstanceMock: jest.Mocked<Pick<import("./saved_objects_type_registry").SavedObjectTypeRegistry, "getType" | "getVisibleTypes" | "getAllTypes" | "getImportableAndExportableTypes" | "isNamespaceAgnostic" | "isSingleNamespace" | "isMultiNamespace" | "isHidden" | "getIndex" | "isImportableAndExportable"> & Pick<import("./saved_objects_type_registry").SavedObjectTypeRegistry, "registerType">>;
//# sourceMappingURL=saved_objects_service.test.mocks.d.ts.map