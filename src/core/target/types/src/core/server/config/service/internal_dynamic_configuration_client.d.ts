import { Type } from '@osd/config-schema';
import { Env, IConfigService } from '@osd/config';
import { Logger } from '@osd/logging';
import { BulkCreateConfigProps, BulkDeleteConfigProps, BulkGetConfigProps, CreateConfigProps, DeleteConfigProps, IInternalDynamicConfigurationClient, DynamicConfigurationClientOptions, GetConfigProps, IDynamicConfigStoreClient } from '../types';
export interface InternalDynamicConfigurationClientProps {
    client: IDynamicConfigStoreClient;
    logger: Logger;
    schemas: Map<string, Type<unknown>>;
    env: Env;
    configService: IConfigService;
}
export declare class InternalDynamicConfigurationClient implements IInternalDynamicConfigurationClient {
    #private;
    constructor(props: InternalDynamicConfigurationClientProps);
    getConfig(getConfigProps: GetConfigProps, options?: DynamicConfigurationClientOptions): Promise<Record<string, unknown>>;
    bulkGetConfigs(bulkGetConfig: BulkGetConfigProps, options?: DynamicConfigurationClientOptions): Promise<Map<string, Record<string, any>>>;
    listConfigs(options?: DynamicConfigurationClientOptions): Promise<Map<string, Record<string, any>>>;
    createConfig(createConfigProps: CreateConfigProps, options?: DynamicConfigurationClientOptions): Promise<import("@opensearch-project/opensearch").ApiResponse<Record<string, any>, unknown>>;
    bulkCreateConfigs(bulkCreateConfigProps: BulkCreateConfigProps, options?: DynamicConfigurationClientOptions): Promise<import("@opensearch-project/opensearch").ApiResponse<Record<string, any>, unknown>>;
    deleteConfig(deleteConfigs: DeleteConfigProps, options?: DynamicConfigurationClientOptions): Promise<import("@opensearch-project/opensearch").ApiResponse<Record<string, any>, unknown>>;
    bulkDeleteConfigs(bulkDeleteConfigProps: BulkDeleteConfigProps, options?: DynamicConfigurationClientOptions): Promise<import("@opensearch-project/opensearch").ApiResponse<Record<string, any>, unknown>>;
    /**
     * Given the top level config, obtain the top level config from the config store
     *
     * @param namespace The config name to fetch the registered schema
     * @private
     */
    private getDefaultConfig;
}
//# sourceMappingURL=internal_dynamic_configuration_client.d.ts.map