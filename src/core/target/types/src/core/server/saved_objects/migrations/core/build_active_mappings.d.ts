import { Config } from '@osd/config';
import { IndexMapping, SavedObjectsMappingProperties, SavedObjectsTypeMappingDefinitions } from './../../mappings';
/**
 * Creates an index mapping with the core properties required by saved object
 * indices, as well as the specified additional properties.
 *
 * @param typeDefinitions - the type definitions to build mapping from.
 */
export declare function buildActiveMappings(typeDefinitions: SavedObjectsTypeMappingDefinitions | SavedObjectsMappingProperties, opensearchDashboardsRawConfig?: Config): IndexMapping;
/**
 * Diffs the actual vs expected mappings. The properties are compared using md5 hashes stored in _meta, because
 * actual and expected mappings *can* differ, but if the md5 hashes stored in actual._meta.migrationMappingPropertyHashes
 * match our expectations, we don't require a migration. This allows OpenSearch to tack on additional mappings that OpenSearchDashboards
 * doesn't know about or expect, without triggering continual migrations.
 */
export declare function diffMappings(actual: IndexMapping, expected: IndexMapping): {
    changedProp: string;
} | undefined;
//# sourceMappingURL=build_active_mappings.d.ts.map