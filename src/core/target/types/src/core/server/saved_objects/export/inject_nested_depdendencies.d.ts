import { SavedObject, SavedObjectsClientContract } from '../types';
export declare function getObjectReferencesToFetch(savedObjectsMap: Map<string, SavedObject>): {
    type: string;
    id: string;
}[];
export declare function fetchNestedDependencies(savedObjects: SavedObject[], savedObjectsClient: SavedObjectsClientContract, namespace?: string): Promise<{
    objects: SavedObject<unknown>[];
    missingRefs: {
        type: string;
        id: string;
    }[];
}>;
//# sourceMappingURL=inject_nested_depdendencies.d.ts.map