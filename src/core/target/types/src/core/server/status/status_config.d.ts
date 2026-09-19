import { TypeOf } from '@osd/config-schema';
import { ServiceConfigDescriptor } from '../internal_types';
declare const statusConfigSchema: import("@osd/config-schema").ObjectType<{
    allowAnonymous: import("@osd/config-schema").Type<boolean>;
}>;
export declare type StatusConfigType = TypeOf<typeof statusConfigSchema>;
export declare const config: ServiceConfigDescriptor<StatusConfigType>;
export {};
//# sourceMappingURL=status_config.d.ts.map