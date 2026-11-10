export * from './service';
export * from './import';
export { exportSavedObjectsToStream, SavedObjectsExportOptions, SavedObjectsExportResultDetails, } from './export';
export { SavedObjectsSerializer, SavedObjectsRawDoc, SavedObjectSanitizedDoc, SavedObjectUnsanitizedDoc, } from './serialization';
export { SavedObjectsMigrationLogger } from './migrations/core/migration_logger';
export { SavedObjectsService, InternalSavedObjectsServiceStart, SavedObjectsServiceStart, SavedObjectsServiceSetup, InternalSavedObjectsServiceSetup, SavedObjectsRepositoryFactory, } from './saved_objects_service';
export { ISavedObjectsRepository, SavedObjectsIncrementCounterOptions, SavedObjectsDeleteByNamespaceOptions, } from './service/lib/repository';
export { SavedObjectsFieldMapping, SavedObjectsMappingProperties, SavedObjectsTypeMappingDefinition, SavedObjectsTypeMappingDefinitions, } from './mappings';
export { SavedObjectMigrationMap, SavedObjectMigrationFn, SavedObjectMigrationContext, } from './migrations';
export { SavedObjectsNamespaceType, SavedObjectStatusMeta, SavedObjectsType, SavedObjectsTypeManagementDefinition, } from './types';
export { savedObjectsConfig, savedObjectsMigrationConfig } from './saved_objects_config';
export { SavedObjectTypeRegistry, ISavedObjectTypeRegistry } from './saved_objects_type_registry';
export { Permissions, ACL, Principals, PrincipalType } from './permission_control/acl';
//# sourceMappingURL=index.d.ts.map