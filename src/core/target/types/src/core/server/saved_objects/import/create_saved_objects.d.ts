import { SavedObject, SavedObjectsBaseOptions, SavedObjectsClientContract, SavedObjectsImportError } from '../types';
import { CreatedObject } from './types';
interface CreateSavedObjectsParams<T> {
    objects: Array<SavedObject<T>>;
    accumulatedErrors: SavedObjectsImportError[];
    savedObjectsClient: SavedObjectsClientContract;
    importIdMap: Map<string, {
        id?: string;
        omitOriginId?: boolean;
    }>;
    namespace?: string;
    overwrite?: boolean;
    dataSourceId?: string;
    dataSourceTitle?: string;
    workspaces?: SavedObjectsBaseOptions['workspaces'];
}
interface CreateSavedObjectsResult<T> {
    createdObjects: Array<CreatedObject<T>>;
    errors: SavedObjectsImportError[];
}
/**
 * This function abstracts the bulk creation of import objects. The main reason for this is that the import ID map should dictate the IDs of
 * the objects we create, and the create results should be mapped to the original IDs that consumers will be able to understand.
 */
export declare const createSavedObjects: <T>({ objects, accumulatedErrors, savedObjectsClient, importIdMap, namespace, overwrite, dataSourceId, dataSourceTitle, workspaces, }: CreateSavedObjectsParams<T>) => Promise<CreateSavedObjectsResult<T>>;
export {};
//# sourceMappingURL=create_saved_objects.d.ts.map