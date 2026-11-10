import type { PublicMethodsOf } from '@osd/utility-types';
import { SavedObjectReference, SavedObjectsClientContract as SavedObjectsApi, SavedObjectsFindOptions as SavedObjectFindOptionsServer, SavedObjectsMigrationVersion, SavedObjectsBaseOptions } from '../../server';
import { SimpleSavedObject } from './simple_saved_object';
import { HttpSetup } from '../http';
declare type SavedObjectsFindOptions = Omit<SavedObjectFindOptionsServer, 'sortOrder' | 'rootSearchFields' | 'typeToNamespacesMap' | 'ACLSearchParams' | 'workspacesSearchOperator'>;
/** @public */
export interface SavedObjectsCreateOptions {
    /**
     * (Not recommended) Specify an id instead of having the saved objects service generate one for you.
     */
    id?: string;
    /** If a document with the given `id` already exists, overwrite it's contents (default=false). */
    overwrite?: boolean;
    /** {@inheritDoc SavedObjectsMigrationVersion} */
    migrationVersion?: SavedObjectsMigrationVersion;
    references?: SavedObjectReference[];
    workspaces?: SavedObjectsBaseOptions['workspaces'];
}
/**
 * @param type - Create a SavedObject of the given type
 * @param attributes - Create a SavedObject with the given attributes
 *
 * @public
 */
export interface SavedObjectsBulkCreateObject<T = unknown> extends SavedObjectsCreateOptions {
    type: string;
    attributes: T;
}
/** @public */
export interface SavedObjectsBulkCreateOptions {
    /** If a document with the given `id` already exists, overwrite it's contents (default=false). */
    overwrite?: boolean;
    workspaces?: SavedObjectsCreateOptions['workspaces'];
}
/** @public */
export interface SavedObjectsBulkUpdateObject<T = unknown> {
    type: string;
    id: string;
    attributes: T;
    version?: string;
    references?: SavedObjectReference[];
}
/** @public */
export interface SavedObjectsBulkUpdateOptions {
    namespace?: string;
}
/** @public */
export interface SavedObjectsUpdateOptions {
    version?: string;
    /** {@inheritDoc SavedObjectsMigrationVersion} */
    migrationVersion?: SavedObjectsMigrationVersion;
    references?: SavedObjectReference[];
}
/** @public */
export interface SavedObjectsBatchResponse<T = unknown> {
    savedObjects: Array<SimpleSavedObject<T>>;
}
/** @public */
export interface SavedObjectsDeleteOptions {
    /** Force deletion of an object that exists in multiple namespaces */
    force?: boolean;
}
/**
 * Return type of the Saved Objects `find()` method.
 *
 * *Note*: this type is different between the Public and Server Saved Objects
 * clients.
 *
 * @public
 */
export interface SavedObjectsFindResponsePublic<T = unknown> extends SavedObjectsBatchResponse<T> {
    total: number;
    perPage: number;
    page: number;
}
/**
 * SavedObjectsClientContract as implemented by the {@link SavedObjectsClient}
 *
 * @public
 */
export declare type SavedObjectsClientContract = PublicMethodsOf<SavedObjectsClient>;
/**
 * Saved Objects is OpenSearchDashboards's data persisentence mechanism allowing plugins to
 * use OpenSearchsearch for storing plugin state. The client-side
 * SavedObjectsClient is a thin convenience library around the SavedObjects
 * HTTP API for interacting with Saved Objects.
 *
 * @public
 */
export declare class SavedObjectsClient {
    private http;
    private batchQueue;
    /**
     * The currentWorkspaceId may be undefined when workspace plugin is not enabled.
     */
    private currentWorkspaceId;
    /**
     * Check if workspaces field present in given options, if so, overwrite the current workspace id.
     * @param options
     * @returns
     */
    private formatWorkspacesParams;
    /**
     * Throttled processing of get requests into bulk requests at 100ms interval
     */
    private processBatchQueue;
    /** @internal */
    constructor(http: HttpSetup);
    setCurrentWorkspace(workspaceId: string): void;
    /**
     * Persists an object
     *
     * @param type
     * @param attributes
     * @param options
     * @returns
     */
    create: <T = unknown>(type: string, attributes: T, options?: SavedObjectsCreateOptions) => Promise<SimpleSavedObject<T>>;
    /**
     * Creates multiple documents at once
     *
     * @param {array} objects - [{ type, id, attributes, references, migrationVersion }]
     * @param {object} [options={}]
     * @property {boolean} [options.overwrite=false]
     * @returns The result of the create operation containing created saved objects.
     */
    bulkCreate: (objects?: SavedObjectsBulkCreateObject[], options?: SavedObjectsBulkCreateOptions) => Promise<SavedObjectsBatchResponse<unknown>>;
    /**
     * Deletes an object
     *
     * @param type
     * @param id
     * @returns
     */
    delete: (type: string, id: string, options?: SavedObjectsDeleteOptions | undefined) => ReturnType<SavedObjectsApi['delete']>;
    /**
     * Search for objects
     *
     * @param {object} [options={}]
     * @property {string} options.type
     * @property {string} options.search
     * @property {string} options.searchFields - see OpenSearch Simple Query String
     *                                        Query field argument for more information
     * @property {integer} [options.page=1]
     * @property {integer} [options.perPage=20]
     * @property {array} options.fields
     * @property {object} [options.hasReference] - { type, id }
     * @returns A find result with objects matching the specified search.
     */
    find: <T = unknown>(options: SavedObjectsFindOptions) => Promise<SavedObjectsFindResponsePublic<T>>;
    /**
     * Fetches a single object
     *
     * @param {string} type
     * @param {string} id
     * @returns The saved object for the given type and id.
     */
    get: <T = unknown>(type: string, id: string) => Promise<SimpleSavedObject<T>>;
    /**
     * Returns an array of objects by id
     *
     * @param {array} objects - an array ids, or an array of objects containing id and optionally type
     * @returns The saved objects with the given type and ids requested
     * @example
     *
     * bulkGet([
     *   { id: 'one', type: 'config' },
     *   { id: 'foo', type: 'index-pattern' }
     * ])
     */
    bulkGet: <T = unknown>(objects?: Array<{
        id: string;
        type: string;
    }>) => Promise<SavedObjectsBatchResponse<T>>;
    private performBulkGet;
    /**
     * Updates an object
     *
     * @param {string} type
     * @param {string} id
     * @param {object} attributes
     * @param {object} options
     * @prop {integer} options.version - ensures version matches that of persisted object
     * @prop {object} options.migrationVersion - The optional migrationVersion of this document
     * @returns
     */
    update<T = unknown>(type: string, id: string, attributes: T, { version, migrationVersion, references }?: SavedObjectsUpdateOptions): Promise<SimpleSavedObject<T>>;
    /**
     * Update multiple documents at once
     *
     * @param {array} objects - [{ type, id, attributes, options: { version, references } }]
     * @returns The result of the update operation containing both failed and updated saved objects.
     */
    bulkUpdate<T = unknown>(objects?: SavedObjectsBulkUpdateObject[]): Promise<SavedObjectsBatchResponse<unknown>>;
    private createSavedObject;
    private getPath;
    /**
     * To ensure we don't break backwards compatibility, savedObjectsFetch keeps
     * the old kfetch error format of `{res: {status: number}}` whereas `http.fetch`
     * uses `{response: {status: number}}`.
     */
    private savedObjectsFetch;
}
export {};
//# sourceMappingURL=saved_objects_client.d.ts.map