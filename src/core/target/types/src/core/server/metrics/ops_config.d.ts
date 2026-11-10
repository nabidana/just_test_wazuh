import { TypeOf } from '@osd/config-schema';
export declare const opsConfig: {
    path: string;
    schema: import("@osd/config-schema").ObjectType<{
        interval: import("@osd/config-schema").Type<import("moment").Duration>;
        cGroupOverrides: import("@osd/config-schema").ObjectType<{
            cpuPath: import("@osd/config-schema").Type<string | undefined>;
            cpuAcctPath: import("@osd/config-schema").Type<string | undefined>;
        }>;
    }>;
};
export declare type OpsConfigType = TypeOf<typeof opsConfig.schema>;
//# sourceMappingURL=ops_config.d.ts.map