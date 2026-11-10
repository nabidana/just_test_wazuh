import { DynamicConfigurationClientOptions, IDynamicConfigStoreClient } from 'opensearch-dashboards/server';
import { OpenSearchClient } from '../../../opensearch';
import { BulkCreateConfigProps, BulkDeleteConfigProps, CreateConfigProps, DeleteConfigProps } from '../../types';
/**
 * This is the default client DAO when "dynamic_config_service.enabled: true" and no plugin has registered a DAO factory.
 * This client will fetch configs from .opensearch_dashboards_config alias.
 * The alias is important as it will always point to the latest "version" of the config index
 */
export declare class OpenSearchConfigStoreClient implements IDynamicConfigStoreClient {
    #private;
    constructor(openSearchClient: OpenSearchClient);
    /**
     * Inserts the config index and an alias that points to it
     *
     * TODO Add migration logic
     */
    createDynamicConfigIndex(): Promise<void>;
    getConfig(namespace: string, options?: DynamicConfigurationClientOptions): Promise<Record<string, any> | undefined>;
    bulkGetConfigs(namespaces: string[], options?: DynamicConfigurationClientOptions): Promise<Map<string, Record<string, any>>>;
    listConfigs(options?: DynamicConfigurationClientOptions): Promise<Map<string, Record<string, any>>>;
    createConfig(createConfigProps: CreateConfigProps, options?: DynamicConfigurationClientOptions): Promise<import("@opensearch-project/opensearch").ApiResponse<import("@opensearch-project/opensearch/api/types").BulkResponse, unknown>>;
    bulkCreateConfigs(bulkCreateConfigProps: BulkCreateConfigProps, options?: DynamicConfigurationClientOptions): Promise<import("@opensearch-project/opensearch").ApiResponse<import("@opensearch-project/opensearch/api/types").BulkResponse, unknown>>;
    deleteConfig(deleteConfigs: DeleteConfigProps, options?: DynamicConfigurationClientOptions): Promise<import("@opensearch-project/opensearch").ApiResponse<import("@opensearch-project/opensearch/api/types").DeleteByQueryResponse, unknown>>;
    bulkDeleteConfigs(bulkDeleteConfigs: BulkDeleteConfigProps, options?: DynamicConfigurationClientOptions): Promise<import("@opensearch-project/opensearch").ApiResponse<import("@opensearch-project/opensearch/api/types").DeleteByQueryResponse, unknown>>;
    clearCache(): void;
    /**
     * Adds config names to the cache from search hits
     *
     * @param config
     */
    private setCacheFromSearch;
    /**
     * Adds config names to the cache from a config document
     *
     * @param config
     */
    private setCache;
    /**
     * Sends a bulk update/request to create/update the new configs
     *
     * @param configMap config name and config blob key/pair values
     */
    private createConfigsRequest;
    /**
     * Deletes documents whose config name matches the query
     *
     * @param namespaces list of config names to search
     * @returns
     */
    private deleteConfigsRequest;
    /**
     * Returns documents whose config name matches the query
     *
     * @param namespaces list of config names to search
     * @param excludeConfigBlob whether to include the config blob in the response
     * @returns
     */
    private searchConfigsRequest;
    /**
     * Finds the most updated dynamic config index
     *
     * @returns the latest version number or 0 if not found
     */
    private searchLatestConfigIndex;
}
//# sourceMappingURL=opensearch_config_store_client.d.ts.map