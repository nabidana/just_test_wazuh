import { SavedObjectsClientContract } from '../../types';
import { SavedObjectsRepositoryFactory } from '../../saved_objects_service';
import { ISavedObjectTypeRegistry, SavedObjectTypeRegistry } from '../../saved_objects_type_registry';
import { OpenSearchDashboardsRequest } from '../../../http';
import { ISavedObjectsRepository } from './repository';
import { IOpenSearchDashboardsMigrator } from '../../migrations';
/**
 * Options passed to each SavedObjectRepositoryFactoryProvider to aid in creating the repository instance.
 * @public
 */
export interface SavedObjectsRepositoryOptions {
    migrator: IOpenSearchDashboardsMigrator;
    typeRegistry: SavedObjectTypeRegistry;
    includedHiddenTypes: string[];
}
/**
 * Provider to invoke to a factory function for creating ISavedObjectRepository {@link ISavedObjectRepository} instances.
 * @public
 */
export declare type SavedObjectRepositoryFactoryProvider = (options: SavedObjectsRepositoryOptions) => ISavedObjectsRepository;
/**
 * Options passed to each SavedObjectsClientWrapperFactory to aid in creating the wrapper instance.
 * @public
 */
export interface SavedObjectsClientWrapperOptions {
    client: SavedObjectsClientContract;
    typeRegistry: ISavedObjectTypeRegistry;
    request: OpenSearchDashboardsRequest;
}
/**
 * Describes the factory used to create instances of Saved Objects Client Wrappers.
 * @public
 */
export declare type SavedObjectsClientWrapperFactory = (options: SavedObjectsClientWrapperOptions) => SavedObjectsClientContract;
/**
 * Describes the factory used to create instances of the Saved Objects Client.
 * @public
 */
export declare type SavedObjectsClientFactory = ({ request, includedHiddenTypes, }: {
    request: OpenSearchDashboardsRequest;
    includedHiddenTypes?: string[];
}) => SavedObjectsClientContract;
/**
 * Provider to invoke to retrieve a {@link SavedObjectsClientFactory}.
 * @public
 */
export declare type SavedObjectsClientFactoryProvider = (repositoryFactory: SavedObjectsRepositoryFactory) => SavedObjectsClientFactory;
/**
 * Options to control the creation of the Saved Objects Client.
 * @public
 */
export interface SavedObjectsClientProviderOptions {
    excludedWrappers?: string[];
    includedHiddenTypes?: string[];
}
/**
 * @internal
 */
export declare type ISavedObjectsClientProvider = Pick<SavedObjectsClientProvider, keyof SavedObjectsClientProvider>;
/**
 * Provider for the Scoped Saved Objects Client.
 *
 * @internal
 */
export declare class SavedObjectsClientProvider {
    private readonly _wrapperFactories;
    private _clientFactory;
    private readonly _originalClientFactory;
    private readonly _typeRegistry;
    constructor({ defaultClientFactory, typeRegistry, }: {
        defaultClientFactory: SavedObjectsClientFactory;
        typeRegistry: ISavedObjectTypeRegistry;
    });
    addClientWrapperFactory(priority: number, id: string, factory: SavedObjectsClientWrapperFactory): void;
    setClientFactory(customClientFactory: SavedObjectsClientFactory): void;
    getClient(request: OpenSearchDashboardsRequest, { includedHiddenTypes, excludedWrappers }?: SavedObjectsClientProviderOptions): SavedObjectsClientContract;
}
//# sourceMappingURL=scoped_client_provider.d.ts.map