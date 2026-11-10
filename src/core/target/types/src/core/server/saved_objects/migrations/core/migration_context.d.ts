/**
 * The MigrationOpts interface defines the minimum set of data required
 * in order to properly migrate an index. MigrationContext expands this
 * with computed values and values from the index being migrated, and is
 * serves as a central blueprint for what migrations will end up doing.
 */
import { Logger } from 'src/core/server/logging';
import { Config } from '@osd/config';
import { MigrationOpenSearchClient } from './migration_opensearch_client';
import { SavedObjectsSerializer } from '../../serialization';
import { SavedObjectsTypeMappingDefinitions, IndexMapping } from '../../mappings';
import { VersionedTransformer } from './document_migrator';
import * as Index from './opensearch_index';
import { SavedObjectsMigrationLogger } from './migration_logger';
export interface MigrationOpts {
    batchSize: number;
    pollInterval: number;
    scrollDuration: string;
    client: MigrationOpenSearchClient;
    index: string;
    log: Logger;
    mappingProperties: SavedObjectsTypeMappingDefinitions;
    documentMigrator: VersionedTransformer;
    serializer: SavedObjectsSerializer;
    convertToAliasScript?: string;
    /**
     * If specified, templates matching the specified pattern will be removed
     * prior to running migrations. For example: 'opensearch_dashboards_index_template*'
     */
    obsoleteIndexTemplatePattern?: string;
    /**
     * If specified, types matching the specified list will be removed prior to
     * running migrations. Useful for removing types that are not supported.
     */
    typesToDelete?: string[];
    opensearchDashboardsRawConfig?: Config;
}
/**
 * @internal
 */
export interface Context {
    client: MigrationOpenSearchClient;
    alias: string;
    source: Index.FullIndexInfo;
    dest: Index.FullIndexInfo;
    documentMigrator: VersionedTransformer;
    log: SavedObjectsMigrationLogger;
    batchSize: number;
    pollInterval: number;
    scrollDuration: string;
    serializer: SavedObjectsSerializer;
    obsoleteIndexTemplatePattern?: string;
    typesToDelete?: string[];
    convertToAliasScript?: string;
}
/**
 * Builds up an uber object which has all of the config options, settings,
 * and various info needed to migrate the source index.
 */
export declare function migrationContext(opts: MigrationOpts): Promise<Context>;
/**
 * Merges the active mappings and the source mappings while disabling the
 * fields of any unknown Saved Object types present in the source index's
 * mappings.
 *
 * Since the Saved Objects index has `dynamic: strict` defined at the
 * top-level, only Saved Object types for which a mapping exists can be
 * inserted into the index. To ensure that we can continue to store Saved
 * Object documents belonging to a disabled plugin we define a mapping for all
 * the unknown Saved Object types that were present in the source index's
 * mappings. To limit the field count as much as possible, these unkwnown
 * type's mappings are set to `dynamic: false`.
 *
 * (Since we're using the source index mappings instead of looking at actual
 * document types in the index, we potentially add more "unknown types" than
 * what would be necessary to support migrating all the data over to the
 * target index.)
 *
 * @param activeMappings The mappings compiled from all the Saved Object types
 * known to this OpenSearch Dashboards node.
 * @param sourceMappings The mappings of index used as the migration source.
 * @returns The mappings that should be applied to the target index.
 */
export declare function disableUnknownTypeMappingFields(activeMappings: IndexMapping, sourceMappings: IndexMapping): IndexMapping;
/**
 * This function is used to modify the target mappings object by deleting specified type mappings fields.
 *
 * The function operates under the following conditions:
 * - It checks if the 'migrations.delete.enabled' configuration is set to true.
 * - If true, it retrieves the 'migrations.delete.types' configuration
 * - For each type, it deletes the corresponding property from the target mappings object.
 *
 * The purpose of this function is to allow for dynamic modification of the target mappings object
 * based on the application's configuration. This can be useful in scenarios where certain type
 * mappings are no longer needed and should be removed from the target mappings.
 *
 * @param {Object} targetMappings - The target mappings object to be modified.
 * @param {Object} opensearchDashboardsRawConfig - The application's configuration object.
 * @returns The mappings that should be applied to the target index.
 */
export declare function deleteTypeMappingsFields(targetMappings: IndexMapping, opensearchDashboardsRawConfig?: Config): IndexMapping;
//# sourceMappingURL=migration_context.d.ts.map