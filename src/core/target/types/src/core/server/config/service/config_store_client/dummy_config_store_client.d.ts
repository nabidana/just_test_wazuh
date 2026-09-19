import { BulkCreateConfigProps, BulkDeleteConfigProps, ConfigIdentifier, CreateConfigProps, DynamicConfigurationClientOptions, IDynamicConfigStoreClient } from '../../types';
/**
 * The DummyConfigStoreClient is the client DAO that will used when dynamic config service is "disabled".
 * The client will return nothing, which will cause the dynamic config service to return static configs only.
 * It is important to note that the DynamicConfigService will always exist as it's a core service.
 */
export declare class DummyConfigStoreClient implements IDynamicConfigStoreClient {
    listConfigs(options?: DynamicConfigurationClientOptions | undefined): Promise<Map<any, any>>;
    bulkCreateConfigs(bulkCreateConfigProps: BulkCreateConfigProps, options?: DynamicConfigurationClientOptions | undefined): Promise<import("@opensearch-project/opensearch").ApiResponse<Record<string, any>, unknown>>;
    createConfig(createConfigProps: CreateConfigProps, options?: DynamicConfigurationClientOptions | undefined): Promise<import("@opensearch-project/opensearch").ApiResponse<Record<string, any>, unknown>>;
    bulkDeleteConfigs(bulkDeleteConfigs: BulkDeleteConfigProps, options?: DynamicConfigurationClientOptions | undefined): Promise<import("@opensearch-project/opensearch").ApiResponse<Record<string, any>, unknown>>;
    deleteConfig(deleteConfigs: ConfigIdentifier, options?: DynamicConfigurationClientOptions | undefined): Promise<import("@opensearch-project/opensearch").ApiResponse<Record<string, any>, unknown>>;
    getConfig(namespace: string, options?: DynamicConfigurationClientOptions | undefined): Promise<undefined>;
    bulkGetConfigs(namespaces: string[], options?: DynamicConfigurationClientOptions | undefined): Promise<Map<any, any>>;
}
//# sourceMappingURL=dummy_config_store_client.d.ts.map