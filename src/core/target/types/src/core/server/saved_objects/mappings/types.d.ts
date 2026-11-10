import type { opensearchtypes } from '@opensearch-project/opensearch';
/**
 * Describe a saved object type mapping.
 *
 * @example
 * ```ts
 * const typeDefinition: SavedObjectsTypeMappingDefinition = {
 *   properties: {
 *     enabled: {
 *       type: "boolean"
 *     },
 *     sendUsageFrom: {
 *       ignore_above: 256,
 *       type: "keyword"
 *     },
 *     lastReported: {
 *       type: "date"
 *     },
 *     lastVersionChecked: {
 *       ignore_above: 256,
 *       type: "keyword"
 *     },
 *   }
 * }
 * ```
 *
 * @public
 */
export interface SavedObjectsTypeMappingDefinition {
    /** The dynamic property of the mapping, either `false` or `'strict'`. If
     * unspecified `dynamic: 'strict'` will be inherited from the top-level
     * index mappings. */
    dynamic?: false | 'strict';
    /** The underlying properties of the type mapping */
    properties: SavedObjectsMappingProperties;
}
/**
 * A map of {@link SavedObjectsTypeMappingDefinition | saved object type mappings}
 *
 * @example
 * ```ts
 * const mappings: SavedObjectsTypeMappingDefinitions = {
 *   someType: {
 *     properties: {
 *       enabled: {
 *         type: "boolean"
 *       },
 *       field: {
 *         type: "keyword"
 *       },
 *     },
 *   },
 *   anotherType: {
 *     properties: {
 *       enabled: {
 *         type: "boolean"
 *       },
 *       lastReported: {
 *         type: "date"
 *       },
 *     },
 *   },

 * }
 * ```
 * @remark This is the format for the legacy `mappings.json` savedObject mapping file.
 *
 * @internal
 */
export interface SavedObjectsTypeMappingDefinitions {
    [type: string]: SavedObjectsTypeMappingDefinition;
}
/**
 * Describe the fields of a {@link SavedObjectsTypeMappingDefinition | saved object type}.
 *
 * @public
 */
export interface SavedObjectsMappingProperties {
    [field: string]: SavedObjectsFieldMapping;
}
/**
 * Describe a {@link SavedObjectsTypeMappingDefinition | saved object type mapping} field.
 *
 * @public
 */
export declare type SavedObjectsFieldMapping = opensearchtypes.MappingProperty & {
    /**
     * The dynamic property of the mapping, either `false` or `'strict'`. If
     * unspecified `dynamic: 'strict'` will be inherited from the top-level
     * index mappings.
     *
     * Note: To limit the number of mapping fields Saved Object types should
     * *never* use `dynamic: true`.
     */
    dynamic?: false | 'strict';
};
/** @internal */
export interface IndexMapping {
    dynamic?: boolean | 'strict';
    properties: SavedObjectsMappingProperties;
    _meta?: IndexMappingMeta;
}
/** @internal */
export interface IndexMappingMeta {
    migrationMappingPropertyHashes?: {
        [k: string]: string;
    };
}
//# sourceMappingURL=types.d.ts.map