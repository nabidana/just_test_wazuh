import { IndexMapping } from '../types';
/**
 *  Get the property mappings for the root type in the OpenSearchMappingsDsl
 *
 *  If the mappings don't have a root type, or the root type is not
 *  an object type (it's a keyword or something) this function will
 *  throw an error.
 *
 *  OpenSearchPropertyMappings objects have the root property names as their
 *  first level keys which map to the mappings object for each property.
 *  If the property is of type object it too could have a `properties`
 *  key whose value follows the same format.
 *
 *  This data can be found at `{indexName}.mappings.{typeName}.properties`
 *  in the opensearch indices.get() response.
 */
export declare function getRootProperties(mapping: IndexMapping): import("../types").SavedObjectsMappingProperties;
//# sourceMappingURL=get_root_properties.d.ts.map