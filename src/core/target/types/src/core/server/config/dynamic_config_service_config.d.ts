import { TypeOf } from '@osd/config-schema';
import { ServiceConfigDescriptor } from '../internal_types';
export declare type DynamicConfigServiceConfigType = TypeOf<typeof configSchema>;
export declare const configSchema: import("@osd/config-schema").ObjectType<{
    skipMigrations: import("@osd/config-schema").Type<boolean>;
    enabled: import("@osd/config-schema").Type<boolean>;
}>;
export declare const config: ServiceConfigDescriptor<DynamicConfigServiceConfigType>;
//# sourceMappingURL=dynamic_config_service_config.d.ts.map