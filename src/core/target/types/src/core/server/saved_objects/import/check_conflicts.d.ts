import { SavedObject, SavedObjectsClientContract, SavedObjectsImportError, SavedObjectsImportRetry, SavedObjectsBaseOptions } from '../types';
interface CheckConflictsParams {
    objects: Array<SavedObject<{
        title?: string;
    }>>;
    savedObjectsClient: SavedObjectsClientContract;
    namespace?: string;
    ignoreRegularConflicts?: boolean;
    retries?: SavedObjectsImportRetry[];
    createNewCopies?: boolean;
    workspaces?: SavedObjectsBaseOptions['workspaces'];
}
export declare function checkConflicts({ objects, savedObjectsClient, namespace, ignoreRegularConflicts, retries, createNewCopies, workspaces, }: CheckConflictsParams): Promise<{
    filteredObjects: SavedObject<{
        title?: string | undefined;
    }>[];
    errors: SavedObjectsImportError[];
    importIdMap: Map<string, {
        id?: string | undefined;
        omitOriginId?: boolean | undefined;
    }>;
    pendingOverwrites: Set<string>;
}>;
export {};
//# sourceMappingURL=check_conflicts.d.ts.map