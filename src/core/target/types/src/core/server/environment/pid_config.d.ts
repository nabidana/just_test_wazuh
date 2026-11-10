import { TypeOf } from '@osd/config-schema';
export declare const config: {
    path: string;
    schema: import("@osd/config-schema").ObjectType<{
        file: import("@osd/config-schema").Type<string | undefined>;
        exclusive: import("@osd/config-schema").Type<boolean>;
    }>;
};
export declare type PidConfigType = TypeOf<typeof config.schema>;
//# sourceMappingURL=pid_config.d.ts.map