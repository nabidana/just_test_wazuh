import { ISavedObjectsRepository } from './lib';
import { SavedObject, SavedObjectError, SavedObjectReference, SavedObjectsMigrationVersion, SavedObjectsBaseOptions, MutatingOperationRefreshSetting, SavedObjectsFindOptions } from '../types';
import { SavedObjectsErrorHelpers } from './lib/errors';
import { Permissions } from '../permission_control';
/**
 *
 * @public
 */
export interface SavedObjectsCreateOptions extends SavedObjectsBaseOptions {
    /** (not recommended) Specify an id for the document */
    id?: string;
    /** Overwrite existing documents (defaults to false) */
    overwrite?: boolean;
    /**
     * An opaque version number which changes on each successful write operation.
     * Can be used in conjunction with `overwrite` for implementing optimistic concurrency control.
     **/
    version?: string;
    /** {@inheritDoc SavedObjectsMigrationVersion} */
    migrationVersion?: SavedObjectsMigrationVersion;
    references?: SavedObjectReference[];
    /** The OpenSearch Refresh setting for this operation */
    refresh?: MutatingOperationRefreshSetting;
    /** Optional ID of the original saved object, if this object's `id` was regenerated */
    originId?: string;
    /**
     * Optional initial namespaces for the object to be created in. If this is defined, it will supersede the namespace ID that is in
     * {@link SavedObjectsCreateOptions}.
     *
     * Note: this can only be used for multi-namespace object types.
     */
    initialNamespaces?: string[];
    /** permission control describe by ACL object */
    permissions?: Permissions;
}
/**
 *
 * @public
 */
export interface SavedObjectsBulkCreateObject<T = unknown> {
    id?: string;
    type: string;
    attributes: T;
    version?: string;
    references?: SavedObjectReference[];
    /** {@inheritDoc SavedObjectsMigrationVersion} */
    migrationVersion?: SavedObjectsMigrationVersion;
    /** Optional ID of the original saved object, if this object's `id` was regenerated */
    originId?: string;
    /**
     * Optional initial namespaces for the object to be created in. If this is defined, it will supersede the namespace ID that is in
     * {@link SavedObjectsCreateOptions}.
     *
     * Note: this can only be used for multi-namespace object types.
     */
    initialNamespaces?: string[];
    /**
     * workspaces the objects belong to, will only be used when overwrite is enabled.
     */
    workspaces?: SavedObject['workspaces'];
}
/**
 *
 * @public
 */
export interface SavedObjectsBulkUpdateObject<T = unknown> extends Pick<SavedObjectsUpdateOptions, 'version' | 'references' | 'permissions' | 'workspaces'> {
    /** The ID of this Saved Object, guaranteed to be unique for all objects of the same `type` */
    id: string;
    /**  The type of this Saved Object. Each plugin can define it's own custom Saved Object types. */
    type: string;
    /** {@inheritdoc SavedObjectAttributes} */
    attributes: Partial<T>;
    /**
     * Optional namespace string to use when searching for this object. If this is defined, it will supersede the namespace ID that is in
     * {@link SavedObjectsBulkUpdateOptions}.
     *
     * Note: the default namespace's string representation is `'default'`, and its ID representation is `undefined`.
     **/
    namespace?: string;
}
/**
 *
 * @public
 */
export interface SavedObjectsBulkResponse<T = unknown> {
    saved_objects: Array<SavedObject<T>>;
}
/**
 *
 * @public
 */
export interface SavedObjectsFindResult<T = unknown> extends SavedObject<T> {
    /**
     * The OpenSearch `_score` of this result.
     */
    score: number;
}
/**
 * Return type of the Saved Objects `find()` method.
 *
 * *Note*: this type is different between the Public and Server Saved Objects
 * clients.
 *
 * @public
 */
export interface SavedObjectsFindResponse<T = unknown> {
    saved_objects: Array<SavedObjectsFindResult<T>>;
    total: number;
    per_page: number;
    page: number;
}
/**
 *
 * @public
 */
export interface SavedObjectsCheckConflictsObject {
    id: string;
    type: string;
}
/**
 *
 * @public
 */
export interface SavedObjectsCheckConflictsResponse {
    errors: Array<{
        id: string;
        type: string;
        error: SavedObjectError;
    }>;
}
/**
 *
 * @public
 */
export interface SavedObjectsUpdateOptions extends SavedObjectsBaseOptions {
    /** An opaque version number which changes on each successful write operation. Can be used for implementing optimistic concurrency control. */
    version?: string;
    /** {@inheritdoc SavedObjectReference} */
    references?: SavedObjectReference[];
    /** The OpenSearch Refresh setting for this operation */
    refresh?: MutatingOperationRefreshSetting;
    /** permission control describe by ACL object */
    permissions?: Permissions;
    workspaces?: string[];
}
/**
 *
 * @public
 */
export interface SavedObjectsAddToNamespacesOptions extends SavedObjectsBaseOptions {
    /** An opaque version number which changes on each successful write operation. Can be used for implementing optimistic concurrency control. */
    version?: string;
    /** The OpenSearch Refresh setting for this operation */
    refresh?: MutatingOperationRefreshSetting;
}
/**
 *
 * @public
 */
export interface SavedObjectsAddToNamespacesResponse {
    /** The namespaces the object exists in after this operation is complete. */
    namespaces: string[];
}
/**
 *
 * @public
 */
export interface SavedObjectsDeleteFromNamespacesOptions extends SavedObjectsBaseOptions {
    /** The OpenSearch Refresh setting for this operation */
    refresh?: MutatingOperationRefreshSetting;
}
/**
 *
 * @public
 */
export interface SavedObjectsDeleteFromNamespacesResponse {
    /** The namespaces the object exists in after this operation is complete. An empty array indicates the object was deleted. */
    namespaces: string[];
}
/**
 *
 * @public
 */
export interface SavedObjectsBulkUpdateOptions extends SavedObjectsBaseOptions {
    /** The OpenSearch Refresh setting for this operation */
    refresh?: MutatingOperationRefreshSetting;
}
/**
 *
 * @public
 */
export interface SavedObjectsDeleteOptions extends SavedObjectsBaseOptions {
    /** The OpenSearch Refresh setting for this operation */
    refresh?: MutatingOperationRefreshSetting;
    /** Force deletion of an object that exists in multiple namespaces */
    force?: boolean;
}
/**
 *
 * @public
 */
export interface SavedObjectsBulkGetObject {
    id: string;
    type: string;
    /** SavedObject fields to include in the response */
    fields?: string[];
}
/**
 *
 * @public
 */
export interface SavedObjectsBulkResponse<T = unknown> {
    saved_objects: Array<SavedObject<T>>;
}
/**
 *
 * @public
 */
export interface SavedObjectsBulkUpdateResponse<T = unknown> {
    saved_objects: Array<SavedObjectsUpdateResponse<T>>;
}
/**
 *
 * @public
 */
export interface SavedObjectsUpdateResponse<T = unknown> extends Omit<SavedObject<T>, 'attributes' | 'references'> {
    attributes: Partial<T>;
    references: SavedObjectReference[] | undefined;
}
/**
 *
 * @public
 */
export interface SavedObjectsDeleteByWorkspaceOptions extends SavedObjectsBaseOptions {
    /** The OpenSearch supports only boolean flag for this operation */
    refresh?: boolean;
}
/**
 *
 * @public
 */
export declare class SavedObjectsClient {
    static errors: typeof SavedObjectsErrorHelpers;
    errors: typeof SavedObjectsErrorHelpers;
    private _repository;
    /** @internal */
    constructor(repository: ISavedObjectsRepository);
    /**
     * Persists a SavedObject
     *
     * @param type
     * @param attributes
     * @param options
     */
    create<T = unknown>(type: string, attributes: T, options?: SavedObjectsCreateOptions): Promise<SavedObject<T>>;
    /**
     * Persists multiple documents batched together as a single request
     *
     * @param objects
     * @param options
     */
    bulkCreate<T = unknown>(objects: Array<SavedObjectsBulkCreateObject<T>>, options?: SavedObjectsCreateOptions): Promise<SavedObjectsBulkResponse<T>>;
    /**
     * Check what conflicts will result when creating a given array of saved objects. This includes "unresolvable conflicts", which are
     * multi-namespace objects that exist in a different namespace; such conflicts cannot be resolved/overwritten.
     *
     * @param objects
     * @param options
     */
    checkConflicts(objects?: SavedObjectsCheckConflictsObject[], options?: SavedObjectsBaseOptions): Promise<SavedObjectsCheckConflictsResponse>;
    /**
     * Deletes a SavedObject
     *
     * @param type
     * @param id
     * @param options
     */
    delete(type: string, id: string, options?: SavedObjectsDeleteOptions): Promise<{}>;
    /**
     * Find all SavedObjects matching the search query
     *
     * @param options
     */
    find<T = unknown>(options: SavedObjectsFindOptions): Promise<SavedObjectsFindResponse<T>>;
    /**
     * Returns an array of objects by id
     *
     * @param objects - an array of ids, or an array of objects containing id, type and optionally fields
     * @example
     *
     * bulkGet([
     *   { id: 'one', type: 'config' },
     *   { id: 'foo', type: 'index-pattern' }
     * ])
     */
    bulkGet<T = unknown>(objects?: SavedObjectsBulkGetObject[], options?: SavedObjectsBaseOptions): Promise<SavedObjectsBulkResponse<T>>;
    /**
     * Retrieves a single object
     *
     * @param type - The type of SavedObject to retrieve
     * @param id - The ID of the SavedObject to retrieve
     * @param options
     */
    get<T = unknown>(type: string, id: string, options?: SavedObjectsBaseOptions): Promise<SavedObject<T>>;
    /**
     * Updates an SavedObject
     *
     * @param type
     * @param id
     * @param options
     */
    update<T = unknown>(type: string, id: string, attributes: Partial<T>, options?: SavedObjectsUpdateOptions): Promise<SavedObjectsUpdateResponse<T>>;
    /**
     * Adds namespaces to a SavedObject
     *
     * @param type
     * @param id
     * @param namespaces
     * @param options
     */
    addToNamespaces(type: string, id: string, namespaces: string[], options?: SavedObjectsAddToNamespacesOptions): Promise<SavedObjectsAddToNamespacesResponse>;
    /**
     * Removes namespaces from a SavedObject
     *
     * @param type
     * @param id
     * @param namespaces
     * @param options
     */
    deleteFromNamespaces(type: string, id: string, namespaces: string[], options?: SavedObjectsDeleteFromNamespacesOptions): Promise<SavedObjectsDeleteFromNamespacesResponse>;
    /**
     * delete saved objects by workspace id
     * @param workspace
     * @param options
     */
    deleteByWorkspace: (workspace: string, options?: SavedObjectsDeleteByWorkspaceOptions) => Promise<any>;
    /**
     * Remove a saved object from workspaces
     * @param type
     * @param id
     * @param targetWorkspaces
     * @param options
     */
    deleteFromWorkspaces: <T = unknown>(type: string, id: string, targetWorkspaces: string[], options?: SavedObjectsBaseOptions) => Promise<SavedObjectsUpdateResponse<T>>;
    /**
     * Add a saved object to workspaces
     * @param type
     * @param id
     * @param targetWorkspaces
     * @param options
     */
    addToWorkspaces: <T = unknown>(type: string, id: string, targetWorkspaces: string[], options?: SavedObjectsBaseOptions) => Promise<any>;
    /**
     * Bulk Updates multiple SavedObject at once
     *
     * @param objects
     */
    bulkUpdate<T = unknown>(objects: Array<SavedObjectsBulkUpdateObject<T>>, options?: SavedObjectsBulkUpdateOptions): Promise<SavedObjectsBulkUpdateResponse<T>>;
}
//# sourceMappingURL=saved_objects_client.d.ts.map