import { SavedObjectsImportResponse, SavedObjectsResolveImportErrorsOptions } from './types';
/**
 * Resolve and return saved object import errors.
 * See the {@link SavedObjectsResolveImportErrorsOptions | options} for more detailed informations.
 *
 * @public
 */
export declare function resolveSavedObjectsImportErrors({ readStream, objectLimit, retries, savedObjectsClient, typeRegistry, namespace, createNewCopies, dataSourceId, dataSourceTitle, workspaces, }: SavedObjectsResolveImportErrorsOptions): Promise<SavedObjectsImportResponse>;
//# sourceMappingURL=resolve_import_errors.d.ts.map