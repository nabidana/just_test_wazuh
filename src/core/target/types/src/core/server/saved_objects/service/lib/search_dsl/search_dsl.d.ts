import { IndexMapping } from '../../../mappings';
import { ISavedObjectTypeRegistry } from '../../../saved_objects_type_registry';
import { SavedObjectsFindOptions } from '../../../types';
declare type KueryNode = any;
interface GetSearchDslOptions {
    type: string | string[];
    search?: string;
    defaultSearchOperator?: string;
    searchFields?: string[];
    rootSearchFields?: string[];
    sortField?: string;
    sortOrder?: string;
    namespaces?: string[];
    typeToNamespacesMap?: Map<string, string[] | undefined>;
    hasReference?: {
        type: string;
        id: string;
    };
    kueryNode?: KueryNode;
    workspaces?: SavedObjectsFindOptions['workspaces'];
    workspacesSearchOperator?: 'AND' | 'OR';
    ACLSearchParams?: SavedObjectsFindOptions['ACLSearchParams'];
}
export declare function getSearchDsl(mappings: IndexMapping, registry: ISavedObjectTypeRegistry, options: GetSearchDslOptions): {
    sort?: undefined;
    query: {
        bool: any;
    };
} | {
    sort: {
        [x: string]: {
            order: string | undefined;
        };
    }[];
    query: {
        bool: any;
    };
} | {
    sort: {
        [x: string]: {
            order: string | undefined;
            unmapped_type: string | undefined;
        };
    }[];
    query: {
        bool: any;
    };
};
export {};
//# sourceMappingURL=search_dsl.d.ts.map