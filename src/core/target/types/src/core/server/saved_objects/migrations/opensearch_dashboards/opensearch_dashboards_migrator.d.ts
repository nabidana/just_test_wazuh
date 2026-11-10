import { OpenSearchDashboardsConfigType } from 'src/core/server/opensearch_dashboards_config';
import { Config } from '@osd/config';
import { Logger } from '../../../logging';
import { IndexMapping, SavedObjectsTypeMappingDefinitions } from '../../mappings';
import { SavedObjectUnsanitizedDoc } from '../../serialization';
import { MigrationResult, MigrationStatus } from '../core';
import { MigrationOpenSearchClient } from '../core/';
import { SavedObjectsMigrationConfigType } from '../../saved_objects_config';
import { ISavedObjectTypeRegistry } from '../../saved_objects_type_registry';
import { SavedObjectsType } from '../../types';
export interface OpenSearchDashboardsMigratorOptions {
    client: MigrationOpenSearchClient;
    typeRegistry: ISavedObjectTypeRegistry;
    savedObjectsConfig: SavedObjectsMigrationConfigType;
    opensearchDashboardsConfig: OpenSearchDashboardsConfigType;
    opensearchDashboardsVersion: string;
    logger: Logger;
    opensearchDashboardsRawConfig: Config;
}
export declare type IOpenSearchDashboardsMigrator = Pick<OpenSearchDashboardsMigrator, keyof OpenSearchDashboardsMigrator>;
export interface OpenSearchDashboardsMigratorStatus {
    status: MigrationStatus;
    result?: MigrationResult[];
}
/**
 * Manages the shape of mappings and documents in the OpenSearch Dashboards index.
 */
export declare class OpenSearchDashboardsMigrator {
    private readonly client;
    private readonly savedObjectsConfig;
    private readonly documentMigrator;
    private readonly opensearchDashboardsConfig;
    private readonly log;
    private readonly mappingProperties;
    private readonly typeRegistry;
    private readonly serializer;
    private migrationResult?;
    private readonly status$;
    private readonly activeMappings;
    private readonly opensearchDashboardsRawConfig;
    /**
     * Creates an instance of OpenSearchDashboardsMigrator.
     */
    constructor({ client, typeRegistry, opensearchDashboardsConfig, savedObjectsConfig, opensearchDashboardsVersion, logger, opensearchDashboardsRawConfig, }: OpenSearchDashboardsMigratorOptions);
    /**
     * Migrates the mappings and documents in the OpenSearch Dashboards index. By default, this will run only
     * once and subsequent calls will return the result of the original call.
     *
     * @param rerun - If true, method will run a new migration when called again instead of
     * returning the result of the initial migration. This should only be used when factors external
     * to OpenSearch Dashboards itself alter the .kibana index causing the saved objects mappings or data to change
     * after the OpenSearch Dashboards server performed the initial migration.
     *
     * @remarks When the `rerun` parameter is set to true, no checks are performed to ensure that no migration
     * is currently running. Chained or concurrent calls to `runMigrations({ rerun: true })` can lead to
     * multiple migrations running at the same time. When calling with this parameter, it's expected that the calling
     * code should ensure that the initial call resolves before calling the function again.
     *
     * @returns - A promise which resolves once all migrations have been applied.
     *    The promise resolves with an array of migration statuses, one for each
     *    opensearch index which was migrated.
     */
    runMigrations({ rerun }?: {
        rerun?: boolean;
    }): Promise<Array<{
        status: string;
    }>>;
    getStatus$(): import("rxjs").Observable<OpenSearchDashboardsMigratorStatus>;
    private runMigrationsInternal;
    /**
     * Gets all the index mappings defined by OpenSearchDashboards's enabled plugins.
     *
     */
    getActiveMappings(): IndexMapping;
    /**
     * Migrates an individual doc to the latest version, as defined by the plugin migrations.
     *
     * @param doc - The saved object to migrate
     * @returns `doc` with all registered migrations applied.
     */
    migrateDocument(doc: SavedObjectUnsanitizedDoc): SavedObjectUnsanitizedDoc;
}
/**
 * Merges savedObjectMappings properties into a single object, verifying that
 * no mappings are redefined.
 */
export declare function mergeTypes(types: SavedObjectsType[]): SavedObjectsTypeMappingDefinitions;
//# sourceMappingURL=opensearch_dashboards_migrator.d.ts.map