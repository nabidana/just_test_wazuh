import { SavedObjectsTypeMappingDefinitions } from '../../mappings';
import { ISavedObjectTypeRegistry } from '../../saved_objects_type_registry';
export interface CreateIndexMapOptions {
    opensearchDashboardsIndexName: string;
    registry: ISavedObjectTypeRegistry;
    indexMap: SavedObjectsTypeMappingDefinitions;
}
export interface IndexMap {
    [index: string]: {
        typeMappings: SavedObjectsTypeMappingDefinitions;
        script?: string;
    };
}
export declare function createIndexMap({ opensearchDashboardsIndexName, registry, indexMap, }: CreateIndexMapOptions): IndexMap;
//# sourceMappingURL=build_index_map.d.ts.map