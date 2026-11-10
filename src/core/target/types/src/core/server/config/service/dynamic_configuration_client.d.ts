import { InternalDynamicConfigurationClient } from './internal_dynamic_configuration_client';
import { BulkGetConfigProps, DynamicConfigurationClientOptions, GetConfigProps, IDynamicConfigurationClient } from '../types';
export declare class DynamicConfigurationClient implements IDynamicConfigurationClient {
    #private;
    constructor(internalDynamicConfigurationClient: InternalDynamicConfigurationClient);
    getConfig(props: GetConfigProps, options?: DynamicConfigurationClientOptions): Promise<Record<string, unknown>>;
    bulkGetConfigs(props: BulkGetConfigProps, options?: DynamicConfigurationClientOptions): Promise<Map<string, Record<string, any>>>;
    listConfigs(options?: DynamicConfigurationClientOptions): Promise<Map<string, Record<string, any>>>;
}
//# sourceMappingURL=dynamic_configuration_client.d.ts.map