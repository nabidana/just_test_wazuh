declare type KueryNode = any;
import { ISavedObjectTypeRegistry } from '../../../saved_objects_type_registry';
import { SavedObjectsFindOptions } from '../../../types';
interface HasReferenceQueryParams {
    type: string;
    id: string;
}
interface QueryParams {
    registry: ISavedObjectTypeRegistry;
    namespaces?: string[];
    type?: string | string[];
    typeToNamespacesMap?: Map<string, string[] | undefined>;
    search?: string;
    searchFields?: string[];
    rootSearchFields?: string[];
    defaultSearchOperator?: string;
    hasReference?: HasReferenceQueryParams;
    kueryNode?: KueryNode;
    workspaces?: SavedObjectsFindOptions['workspaces'];
    workspacesSearchOperator?: 'AND' | 'OR';
    ACLSearchParams?: SavedObjectsFindOptions['ACLSearchParams'];
}
export declare function getClauseForReference(reference: HasReferenceQueryParams): {
    nested: {
        path: string;
        query: {
            bool: {
                must: ({
                    term: {
                        'references.id': string;
                        'references.type'?: undefined;
                    };
                } | {
                    term: {
                        'references.type': string;
                        'references.id'?: undefined;
                    };
                })[];
            };
        };
    };
};
/**
 *  Get the "query" related keys for the search body
 */
export declare function getQueryParams({ registry, namespaces, type, typeToNamespacesMap, search, searchFields, rootSearchFields, defaultSearchOperator, hasReference, kueryNode, workspaces, workspacesSearchOperator, ACLSearchParams, }: QueryParams): {
    query: {
        bool: any;
    };
};
export {};
//# sourceMappingURL=query_params.d.ts.map