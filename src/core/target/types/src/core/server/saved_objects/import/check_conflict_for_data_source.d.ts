import { SavedObject, SavedObjectsClientContract, SavedObjectsImportError, SavedObjectsImportRetry } from '../types';
export interface ConflictsForDataSourceParams {
    objects: Array<SavedObject<{
        title?: string;
    }>>;
    ignoreRegularConflicts?: boolean;
    retries?: SavedObjectsImportRetry[];
    dataSourceId?: string;
    savedObjectsClient?: SavedObjectsClientContract;
}
interface ImportIdMapEntry {
    id?: string;
    omitOriginId?: boolean;
}
/**
 * function to only check the data souerce conflict when multiple data sources are enabled.
 * the purpose of this function is to check the conflict of the imported saved objects and data source
 * @param objects, this the array of saved objects to be verified whether contains the data source conflict
 * @param ignoreRegularConflicts whether to override
 * @param retries import operations list
 * @param dataSourceId the id to identify the data source
 * @returns {filteredObjects, errors, importIdMap }
 */
export declare function checkConflictsForDataSource({ objects, ignoreRegularConflicts, retries, dataSourceId, savedObjectsClient, }: ConflictsForDataSourceParams): Promise<{
    filteredObjects: SavedObject<{
        title?: string | undefined;
    }>[];
    errors: SavedObjectsImportError[];
    importIdMap: Map<string, ImportIdMapEntry>;
}>;
export {};
//# sourceMappingURL=check_conflict_for_data_source.d.ts.map