import { Observable } from 'rxjs';
import { CoreService } from '../../types';
import { SavedObjectsClientProviderOptions } from './';
import { CoreContext } from '../core_context';
import { InternalOpenSearchServiceSetup, InternalOpenSearchServiceStart } from '../opensearch';
import { OpenSearchDashboardsRequest, InternalHttpServiceSetup } from '../http';
import { SavedObjectsClientContract, SavedObjectsType, SavedObjectStatusMeta } from './types';
import { ISavedObjectsRepository } from './service/lib/repository';
import { SavedObjectsClientFactoryProvider, SavedObjectsClientWrapperFactory, SavedObjectRepositoryFactoryProvider } from './service/lib/scoped_client_provider';
import { ISavedObjectTypeRegistry } from './saved_objects_type_registry';
import { SavedObjectsSerializer } from './serialization';
import { ServiceStatus } from '../status';
/**
 * Saved Objects is OpenSearchDashboards's data persistence mechanism allowing plugins to
 * use OpenSearch for storing and querying state. The SavedObjectsServiceSetup API exposes methods
 * for registering Saved Object types, creating and registering Saved Object client wrappers and factories.
 *
 * @remarks
 * When plugins access the Saved Objects client, a new client is created using
 * the factory provided to `setClientFactory` and wrapped by all wrappers
 * registered through `addClientWrapper`.
 *
 * @example
 * ```ts
 * import { SavedObjectsClient, CoreSetup } from 'src/core/server';
 *
 * export class Plugin() {
 *   setup: (core: CoreSetup) => {
 *     core.savedObjects.setClientFactory(({ request: OpenSearchDashboardsRequest }) => {
 *       return new SavedObjectsClient(core.savedObjects.scopedRepository(request));
 *     })
 *   }
 * }
 * ```
 *
 * @example
 * ```ts
 * import { SavedObjectsClient, CoreSetup } from 'src/core/server';
 * import { mySoType } from './saved_objects'
 *
 * export class Plugin() {
 *   setup: (core: CoreSetup) => {
 *     core.savedObjects.registerType(mySoType);
 *   }
 * }
 * ```
 *
 * @public
 */
export interface SavedObjectsServiceSetup {
    /**
     * Set the default {@link SavedObjectsClientFactoryProvider | factory provider} for creating Saved Objects clients.
     * Only one provider can be set, subsequent calls to this method will fail.
     */
    setClientFactoryProvider: (clientFactoryProvider: SavedObjectsClientFactoryProvider) => void;
    /**
     * Add a {@link SavedObjectsClientWrapperFactory | client wrapper factory} with the given priority.
     */
    addClientWrapper: (priority: number, id: string, factory: SavedObjectsClientWrapperFactory) => void;
    /**
     * Register a {@link SavedObjectsType | savedObjects type} definition.
     *
     * See the {@link SavedObjectsTypeMappingDefinition | mappings format} and
     * {@link SavedObjectMigrationMap | migration format} for more details about these.
     *
     * @example
     * ```ts
     * // src/plugins/my_plugin/server/saved_objects/my_type.ts
     * import { SavedObjectsType } from 'src/core/server';
     * import * as migrations from './migrations';
     *
     * export const myType: SavedObjectsType = {
     *   name: 'MyType',
     *   hidden: false,
     *   namespaceType: 'multiple',
     *   mappings: {
     *     properties: {
     *       textField: {
     *         type: 'text',
     *       },
     *       boolField: {
     *         type: 'boolean',
     *       },
     *     },
     *   },
     *   migrations: {
     *     '2.0.0': migrations.migrateToV2,
     *     '2.1.0': migrations.migrateToV2_1
     *   },
     * };
     *
     * // src/plugins/my_plugin/server/plugin.ts
     * import { SavedObjectsClient, CoreSetup } from 'src/core/server';
     * import { myType } from './saved_objects';
     *
     * export class Plugin() {
     *   setup: (core: CoreSetup) => {
     *     core.savedObjects.registerType(myType);
     *   }
     * }
     * ```
     */
    registerType: (type: SavedObjectsType) => void;
    /**
     * Returns the maximum number of objects allowed for import or export operations.
     */
    getImportExportObjectLimit: () => number;
    /**
     * Set the default {@link SavedObjectRepositoryFactoryProvider | factory provider} for creating Saved Objects repository.
     * Only one repository can be set, subsequent calls to this method will fail.
     */
    setRepositoryFactoryProvider: (respositoryFactoryProvider: SavedObjectRepositoryFactoryProvider) => void;
    /**
     * Allows a plugin to specify a custom status dependent on its own criteria.
     * Completely overrides the default status.
     */
    setStatus(status$: Observable<ServiceStatus<SavedObjectStatusMeta>>): void;
}
/**
 * @internal
 */
export interface InternalSavedObjectsServiceSetup extends SavedObjectsServiceSetup {
    status$: Observable<ServiceStatus<SavedObjectStatusMeta>>;
}
/**
 * Saved Objects is OpenSearchDashboards's data persisentence mechanism allowing plugins to
 * use OpenSearch for storing and querying state. The
 * SavedObjectsServiceStart API provides a scoped Saved Objects client for
 * interacting with Saved Objects.
 *
 * @public
 */
export interface SavedObjectsServiceStart {
    /**
     * Creates a {@link SavedObjectsClientContract | Saved Objects client} that
     * uses the credentials from the passed in request to authenticate with
     * OpenSearch. If other plugins have registered Saved Objects client
     * wrappers, these will be applied to extend the functionality of the client.
     *
     * A client that is already scoped to the incoming request is also exposed
     * from the route handler context see {@link RequestHandlerContext}.
     */
    getScopedClient: (req: OpenSearchDashboardsRequest, options?: SavedObjectsClientProviderOptions) => SavedObjectsClientContract;
    /**
     * Creates a {@link ISavedObjectsRepository | Saved Objects repository} that
     * uses the credentials from the passed in request to authenticate with
     * OpenSearch.
     *
     * @param req - The request to create the scoped repository from.
     * @param includedHiddenTypes - A list of additional hidden types the repository should have access to.
     *
     * @remarks
     * Prefer using `getScopedClient`. This should only be used when using methods
     * not exposed on {@link SavedObjectsClientContract}
     */
    createScopedRepository: (req: OpenSearchDashboardsRequest, includedHiddenTypes?: string[]) => ISavedObjectsRepository;
    /**
     * Creates a {@link ISavedObjectsRepository | Saved Objects repository} that
     * uses the internal OpenSearch Dashboards user for authenticating with OpenSearch.
     *
     * @param includedHiddenTypes - A list of additional hidden types the repository should have access to.
     */
    createInternalRepository: (includedHiddenTypes?: string[]) => ISavedObjectsRepository;
    /**
     * Creates a {@link SavedObjectsSerializer | serializer} that is aware of all registered types.
     */
    createSerializer: () => SavedObjectsSerializer;
    /**
     * Returns the {@link ISavedObjectTypeRegistry | registry} containing all registered
     * {@link SavedObjectsType | saved object types}
     */
    getTypeRegistry: () => ISavedObjectTypeRegistry;
}
export declare type InternalSavedObjectsServiceStart = SavedObjectsServiceStart;
/**
 * Factory provided when invoking a {@link SavedObjectsClientFactoryProvider | client factory provider}
 * See {@link SavedObjectsServiceSetup.setClientFactoryProvider}
 *
 * @public
 */
export interface SavedObjectsRepositoryFactory {
    /**
     * Creates a {@link ISavedObjectsRepository | Saved Objects repository} that
     * uses the credentials from the passed in request to authenticate with
     * OpenSearch.
     *
     * @param includedHiddenTypes - A list of additional hidden types the repository should have access to.
     */
    createScopedRepository: (req: OpenSearchDashboardsRequest, includedHiddenTypes?: string[]) => ISavedObjectsRepository;
    /**
     * Creates a {@link ISavedObjectsRepository | Saved Objects repository} that
     * uses the internal OpenSearch Dashboards user for authenticating with OpenSearch.
     *
     * @param includedHiddenTypes - A list of additional hidden types the repository should have access to.
     */
    createInternalRepository: (includedHiddenTypes?: string[]) => ISavedObjectsRepository;
}
/** @internal */
export interface SavedObjectsSetupDeps {
    http: InternalHttpServiceSetup;
    opensearch: InternalOpenSearchServiceSetup;
}
/** @internal */
export interface SavedObjectsStartDeps {
    opensearch: InternalOpenSearchServiceStart;
    pluginsInitialized?: boolean;
}
export declare class SavedObjectsService implements CoreService<InternalSavedObjectsServiceSetup, InternalSavedObjectsServiceStart> {
    private readonly coreContext;
    private logger;
    private setupDeps?;
    private config?;
    private clientFactoryProvider?;
    private clientFactoryWrappers;
    private migrator$;
    private typeRegistry;
    private started;
    private respositoryFactoryProvider?;
    private savedObjectServiceCustomStatus$?;
    private savedObjectServiceStatus$;
    private opensearchDashboardsRawConfig?;
    constructor(coreContext: CoreContext);
    setup(setupDeps: SavedObjectsSetupDeps): Promise<InternalSavedObjectsServiceSetup>;
    start({ opensearch, pluginsInitialized }: SavedObjectsStartDeps, migrationsRetryDelay?: number): Promise<InternalSavedObjectsServiceStart>;
    stop(): Promise<void>;
    private createMigrator;
}
//# sourceMappingURL=saved_objects_service.d.ts.map