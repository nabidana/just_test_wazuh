import { SavedObjectsImportResponse, SavedObjectsImportOptions } from './types';
/**
 * Import saved objects from given stream. See the {@link SavedObjectsImportOptions | options} for more
 * detailed information.
 *
 * @public
 */
export declare function importSavedObjectsFromStream({ readStream, objectLimit, overwrite, createNewCopies, savedObjectsClient, typeRegistry, namespace, dataSourceId, dataSourceTitle, workspaces, dataSourceEnabled, isCopy, }: SavedObjectsImportOptions): Promise<SavedObjectsImportResponse>;
//# sourceMappingURL=import_saved_objects.d.ts.map