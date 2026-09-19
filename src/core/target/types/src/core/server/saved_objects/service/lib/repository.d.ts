import { OpenSearchClient } from '../../../opensearch/';
import { IndexMapping } from '../../mappings';
import { IOpenSearchDashboardsMigrator } from '../../migrations';
import { SavedObjectsSerializer } from '../../serialization';
import { SavedObjectsBulkCreateObject, SavedObjectsBulkGetObject, SavedObjectsBulkResponse, SavedObjectsBulkUpdateResponse, SavedObjectsCheckConflictsObject, SavedObjectsCheckConflictsResponse, SavedObjectsCreateOptions, SavedObjectsFindResponse, SavedObjectsUpdateOptions, SavedObjectsUpdateResponse, SavedObjectsBulkUpdateObject, SavedObjectsBulkUpdateOptions, SavedObjectsDeleteOptions, SavedObjectsAddToNamespacesOptions, SavedObjectsAddToNamespacesResponse, SavedObjectsDeleteFromNamespacesOptions, SavedObjectsDeleteFromNamespacesResponse, SavedObjectsDeleteByWorkspaceOptions } from '../saved_objects_client';
import { SavedObject, SavedObjectsBaseOptions, SavedObjectsFindOptions, SavedObjectsMigrationVersion, MutatingOperationRefreshSetting } from '../../types';
import { SavedObjectTypeRegistry } from '../../saved_objects_type_registry';
export interface SavedObjectsRepositoryOptions {
    index: string;
    mappings: IndexMapping;
    client: OpenSearchClient;
    typeRegistry: SavedObjectTypeRegistry;
    serializer: SavedObjectsSerializer;
    migrator: IOpenSearchDashboardsMigrator;
    allowedTypes: string[];
}
/**
 * @public
 */
export interface SavedObjectsIncrementCounterOptions extends SavedObjectsBaseOptions {
    migrationVersion?: SavedObjectsMigrationVersion;
    /** The OpenSearch Refresh setting for this operation */
    refresh?: MutatingOperationRefreshSetting;
}
/**
 *
 * @public
 */
export interface SavedObjectsDeleteByNamespaceOptions extends SavedObjectsBaseOptions {
    /** The OpenSearch supports only boolean flag for this operation */
    refresh?: boolean;
}
/**
 * See {@link SavedObjectsRepository}
 *
 * @public
 */
export declare type ISavedObjectsRepository = Pick<SavedObjectsRepository, keyof SavedObjectsRepository>;
/**
 * @public
 */
export declare class SavedObjectsRepository {
    private _migrator;
    private _index;
    private _mappings;
    private _registry;
    private _allowedTypes;
    private readonly client;
    private _serializer;
    /**
     * A factory function for creating SavedObjectRepository instances.
     *
     * @internalRemarks
     * Tests are located in ./repository_create_repository.test.ts
     *
     * @internal
     */
    static createRepository(migrator: IOpenSearchDashboardsMigrator, typeRegistry: SavedObjectTypeRegistry, indexName: string, client: OpenSearchClient, includedHiddenTypes?: string[], injectedConstructor?: any): ISavedObjectsRepository;
    private constructor();
    /**
     * Persists an object
     *
     * @param {string} type
     * @param {object} attributes
     * @param {object} [options={}]
     * @property {string} [options.id] - force id on creation, not recommended
     * @property {boolean} [options.overwrite=false]
     * @property {object} [options.migrationVersion=undefined]
     * @property {string} [options.namespace]
     * @property {array} [options.references=[]] - [{ name, type, id }]
     * @returns {promise} - { id, type, version, attributes }
     */
    create<T = unknown>(type: string, attributes: T, options?: SavedObjectsCreateOptions): Promise<SavedObject<T>>;
    /**
     * Creates multiple documents at once
     *
     * @param {array} objects - [{ type, id, attributes, references, migrationVersion }]
     * @param {object} [options={}]
     * @property {boolean} [options.overwrite=false] - overwrites existing documents
     * @property {string} [options.namespace]
     * @returns {promise} -  {saved_objects: [[{ id, type, version, references, attributes, error: { message } }]}
     */
    bulkCreate<T = unknown>(objects: Array<SavedObjectsBulkCreateObject<T>>, options?: SavedObjectsCreateOptions): Promise<SavedObjectsBulkResponse<T>>;
    /**
     * Check what conflicts will result when creating a given array of saved objects. This includes "unresolvable conflicts", which are
     * multi-namespace objects that exist in a different namespace; such conflicts cannot be resolved/overwritten.
     */
    checkConflicts(objects?: SavedObjectsCheckConflictsObject[], options?: SavedObjectsBaseOptions): Promise<SavedObjectsCheckConflictsResponse>;
    /**
     * Deletes an object
     *
     * @param {string} type
     * @param {string} id
     * @param {object} [options={}]
     * @property {string} [options.namespace]
     * @returns {promise}
     */
    delete(type: string, id: string, options?: SavedObjectsDeleteOptions): Promise<{}>;
    /**
     * Deletes all objects from the provided namespace.
     *
     * @param {string} namespace
     * @returns {promise} - { took, timed_out, total, deleted, batches, version_conflicts, noops, retries, failures }
     */
    deleteByNamespace(namespace: string, options?: SavedObjectsDeleteByNamespaceOptions): Promise<any>;
    /**
     * Deletes all objects from the provided workspace.
     *
     * @param {string} workspace - workspace id
     * @param options SavedObjectsDeleteByWorkspaceOptions
     * @returns {promise} - { took, timed_out, total, deleted, batches, version_conflicts, noops, retries, failures }
     */
    deleteByWorkspace(workspace: string, options?: SavedObjectsDeleteByWorkspaceOptions): Promise<any>;
    /**
     * @param {object} [options={}]
     * @property {(string|Array<string>)} [options.type]
     * @property {string} [options.search]
     * @property {string} [options.defaultSearchOperator]
     * @property {Array<string>} [options.searchFields] - see OpenSearch Simple Query String
     *                                        Query field argument for more information
     * @property {integer} [options.page=1]
     * @property {integer} [options.perPage=20]
     * @property {string} [options.sortField]
     * @property {string} [options.sortOrder]
     * @property {Array<string>} [options.fields]
     * @property {string} [options.namespace]
     * @property {object} [options.hasReference] - { type, id }
     * @property {string} [options.preference]
     * @returns {promise} - { saved_objects: [{ id, type, version, attributes }], total, per_page, page }
     */
    find<T = unknown>(options: SavedObjectsFindOptions): Promise<SavedObjectsFindResponse<T>>;
    /**
     * Returns an array of objects by id
     *
     * @param {array} objects - an array of objects containing id, type and optionally fields
     * @param {object} [options={}]
     * @property {string} [options.namespace]
     * @returns {promise} - { saved_objects: [{ id, type, version, attributes }] }
     * @example
     *
     * bulkGet([
     *   { id: 'one', type: 'config' },
     *   { id: 'foo', type: 'index-pattern' }
     * ])
     */
    bulkGet<T = unknown>(objects?: SavedObjectsBulkGetObject[], options?: SavedObjectsBaseOptions): Promise<SavedObjectsBulkResponse<T>>;
    /**
     * Gets a single object
     *
     * @param {string} type
     * @param {string} id
     * @param {object} [options={}]
     * @property {string} [options.namespace]
     * @returns {promise} - { id, type, version, attributes }
     */
    get<T = unknown>(type: string, id: string, options?: SavedObjectsBaseOptions): Promise<SavedObject<T>>;
    /**
     * Updates an object
     *
     * @param {string} type
     * @param {string} id
     * @param {object} [options={}]
     * @property {string} options.version - ensures version matches that of persisted object
     * @property {string} [options.namespace]
     * @property {array} [options.references] - [{ name, type, id }]
     * @returns {promise}
     */
    update<T = unknown>(type: string, id: string, attributes: Partial<T>, options?: SavedObjectsUpdateOptions): Promise<SavedObjectsUpdateResponse<T>>;
    /**
     * Adds one or more namespaces to a given multi-namespace saved object. This method and
     * [`deleteFromNamespaces`]{@link SavedObjectsRepository.deleteFromNamespaces} are the only ways to change which Spaces a multi-namespace
     * saved object is shared to.
     */
    addToNamespaces(type: string, id: string, namespaces: string[], options?: SavedObjectsAddToNamespacesOptions): Promise<SavedObjectsAddToNamespacesResponse>;
    /**
     * Removes one or more namespaces from a given multi-namespace saved object. If no namespaces remain, the saved object is deleted
     * entirely. This method and [`addToNamespaces`]{@link SavedObjectsRepository.addToNamespaces} are the only ways to change which Spaces a
     * multi-namespace saved object is shared to.
     */
    deleteFromNamespaces(type: string, id: string, namespaces: string[], options?: SavedObjectsDeleteFromNamespacesOptions): Promise<SavedObjectsDeleteFromNamespacesResponse>;
    /**
     * Updates multiple objects in bulk
     *
     * @param {array} objects - [{ type, id, attributes, options: { version, namespace } references }]
     * @property {string} options.version - ensures version matches that of persisted object
     * @property {string} [options.namespace]
     * @returns {promise} -  {saved_objects: [[{ id, type, version, references, attributes, error: { message } }]}
     */
    bulkUpdate<T = unknown>(objects: Array<SavedObjectsBulkUpdateObject<T>>, options?: SavedObjectsBulkUpdateOptions): Promise<SavedObjectsBulkUpdateResponse<T>>;
    /**
     * Increases a counter field by incrementValue which by default is 1. Creates the document if one doesn't exist for the given id.
     *
     * @param {string} type
     * @param {string} id
     * @param {string} counterFieldName
     * @param {object} [options={}]
     * @param {number} [incrementValue=1]
     * @property {object} [options.migrationVersion=undefined]
     * @returns {promise}
     */
    incrementCounter(type: string, id: string, counterFieldName: string, options?: SavedObjectsIncrementCounterOptions, incrementValue?: number): Promise<SavedObject>;
    /**
     * Returns index specified by the given type or the default index
     *
     * @param type - the type
     */
    private getIndexForType;
    /**
     * Returns an array of indices as specified in `this._registry` for each of the
     * given `types`. If any of the types don't have an associated index, the
     * default index `this._index` will be included.
     *
     * @param types The types whose indices should be retrieved
     */
    private getIndicesForTypes;
    private _getCurrentTime;
    private _rawToSavedObject;
    /**
     * Check to ensure that a raw document exists in a namespace. If the document is not a multi-namespace type, then this returns `true` as
     * we rely on the guarantees of the document ID format. If the document is a multi-namespace type, this checks to ensure that the
     * document's `namespaces` value includes the string representation of the given namespace.
     *
     * WARNING: This should only be used for documents that were retrieved from OpenSearch. Otherwise, the guarantees of the document ID
     * format mentioned above do not apply.
     */
    private rawDocExistsInNamespace;
    /**
     * Pre-flight check to get a multi-namespace saved object's included namespaces. This ensures that, if the saved object exists, it
     * includes the target namespace.
     *
     * @param type The type of the saved object.
     * @param id The ID of the saved object.
     * @param namespace The target namespace.
     * @returns Array of namespaces that this saved object currently includes, or (if the object does not exist yet) the namespaces that a
     * newly-created object will include. Value may be undefined if an existing saved object has no namespaces attribute; this should not
     * happen in normal operations, but it is possible if the OpenSearch document is manually modified.
     * @throws Will throw an error if the saved object exists and it does not include the target namespace.
     */
    private preflightGetNamespaces;
    /**
     * Pre-flight check for a multi-namespace saved object's namespaces. This ensures that, if the saved object exists, it includes the target
     * namespace.
     *
     * @param type The type of the saved object.
     * @param id The ID of the saved object.
     * @param namespace The target namespace.
     * @returns Raw document from OpenSearch.
     * @throws Will throw an error if the saved object is not found, or if it doesn't include the target namespace.
     */
    private preflightCheckIncludesNamespace;
}
//# sourceMappingURL=repository.d.ts.map