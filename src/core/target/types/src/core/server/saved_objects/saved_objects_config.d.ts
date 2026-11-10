import { TypeOf } from '@osd/config-schema';
export declare type SavedObjectsMigrationConfigType = TypeOf<typeof savedObjectsMigrationConfig.schema>;
export declare const savedObjectsMigrationConfig: {
    path: string;
    schema: import("@osd/config-schema").ObjectType<{
        batchSize: import("@osd/config-schema").Type<number>;
        scrollDuration: import("@osd/config-schema").Type<string>;
        pollInterval: import("@osd/config-schema").Type<number>;
        skip: import("@osd/config-schema").Type<boolean>;
        delete: import("@osd/config-schema").ObjectType<{
            enabled: import("@osd/config-schema").Type<boolean>;
            types: import("@osd/config-schema").Type<string[]>;
        }>;
    }>;
};
export declare type SavedObjectsConfigType = TypeOf<typeof savedObjectsConfig.schema>;
export declare const savedObjectsConfig: {
    path: string;
    schema: import("@osd/config-schema").ObjectType<{
        maxImportPayloadBytes: import("@osd/config-schema").Type<import("@osd/config-schema").ByteSizeValue>;
        maxImportExportSize: import("@osd/config-schema").Type<import("@osd/config-schema").ByteSizeValue>;
        permission: import("@osd/config-schema").ObjectType<{
            enabled: import("@osd/config-schema").Type<boolean>;
        }>;
    }>;
};
export declare class SavedObjectConfig {
    maxImportPayloadBytes: number;
    maxImportExportSize: number;
    migration: SavedObjectsMigrationConfigType;
    constructor(rawConfig: SavedObjectsConfigType, rawMigrationConfig: SavedObjectsMigrationConfigType);
}
//# sourceMappingURL=saved_objects_config.d.ts.map