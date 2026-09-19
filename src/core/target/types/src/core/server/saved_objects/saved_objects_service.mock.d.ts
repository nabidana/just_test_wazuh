/// <reference types="jest" />
import { SavedObjectsService, InternalSavedObjectsServiceSetup, SavedObjectsServiceSetup, SavedObjectsServiceStart } from './saved_objects_service';
export declare const savedObjectsServiceMock: {
    create: () => jest.Mocked<Pick<SavedObjectsService, "start" | "stop" | "setup">>;
    createInternalSetupContract: () => jest.Mocked<InternalSavedObjectsServiceSetup>;
    createSetupContract: () => jest.Mocked<SavedObjectsServiceSetup>;
    createInternalStartContract: (typeRegistry?: jest.Mocked<Pick<import("./saved_objects_type_registry").SavedObjectTypeRegistry, "getType" | "getVisibleTypes" | "getAllTypes" | "getImportableAndExportableTypes" | "isNamespaceAgnostic" | "isSingleNamespace" | "isMultiNamespace" | "isHidden" | "getIndex" | "isImportableAndExportable">> | undefined) => jest.Mocked<SavedObjectsServiceStart>;
    createStartContract: (typeRegistry?: jest.Mocked<Pick<import("./saved_objects_type_registry").SavedObjectTypeRegistry, "getType" | "getVisibleTypes" | "getAllTypes" | "getImportableAndExportableTypes" | "isNamespaceAgnostic" | "isSingleNamespace" | "isMultiNamespace" | "isHidden" | "getIndex" | "isImportableAndExportable">> | undefined) => jest.Mocked<SavedObjectsServiceStart>;
    createMigrationContext: () => jest.Mocked<import("..").SavedObjectMigrationContext>;
    createTypeRegistryMock: () => jest.Mocked<Pick<import("./saved_objects_type_registry").SavedObjectTypeRegistry, "getType" | "getVisibleTypes" | "getAllTypes" | "getImportableAndExportableTypes" | "isNamespaceAgnostic" | "isSingleNamespace" | "isMultiNamespace" | "isHidden" | "getIndex" | "isImportableAndExportable"> & Pick<import("./saved_objects_type_registry").SavedObjectTypeRegistry, "registerType">>;
};
//# sourceMappingURL=saved_objects_service.mock.d.ts.map