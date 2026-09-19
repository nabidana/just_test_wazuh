/// <reference types="node" />
import { SavedObjectsClientContract, SavedObjectsBaseOptions } from '../types';
export declare const DATA_SOURCE_CREDENTIALS_PLACEHOLDER = "pleaseUpdateCredentials";
/**
 * Options controlling the export operation.
 * @public
 */
export interface SavedObjectsExportOptions {
    /** optional array of saved object types. */
    types?: string[];
    /** optional array of objects to export. */
    objects?: Array<{
        /** the saved object id. */
        id: string;
        /** the saved object type. */
        type: string;
    }>;
    /** optional query string to filter exported objects. */
    search?: string;
    /** an instance of the SavedObjectsClient. */
    savedObjectsClient: SavedObjectsClientContract;
    /** the maximum number of objects to export. */
    exportSizeLimit: number;
    /** flag to also include all related saved objects in the export stream. */
    includeReferencesDeep?: boolean;
    /** flag to not append {@link SavedObjectsExportResultDetails | export details} to the end of the export stream. */
    excludeExportDetails?: boolean;
    /** optional namespace to override the namespace used by the savedObjectsClient. */
    namespace?: string;
    /** optional workspaces to override the workspaces used by the savedObjectsClient. */
    workspaces?: SavedObjectsBaseOptions['workspaces'];
}
/**
 * Structure of the export result details entry
 * @public
 */
export interface SavedObjectsExportResultDetails {
    /** number of successfully exported objects */
    exportedCount: number;
    /** number of missing references */
    missingRefCount: number;
    /** missing references details */
    missingReferences: Array<{
        /** the missing reference id. */
        id: string;
        /** the missing reference type. */
        type: string;
    }>;
}
/**
 * Generates sorted saved object stream to be used for export.
 * See the {@link SavedObjectsExportOptions | options} for more detailed information.
 *
 * @public
 */
export declare function exportSavedObjectsToStream({ types, objects, search, savedObjectsClient, exportSizeLimit, includeReferencesDeep, excludeExportDetails, namespace, workspaces, }: SavedObjectsExportOptions): Promise<import("stream").Readable>;
//# sourceMappingURL=get_sorted_objects_for_export.d.ts.map