import { TypeOf } from '@osd/config-schema';
/**
 * @internal
 */
export declare type CspConfigType = TypeOf<typeof config.schema>;
export declare const config: {
    path: string;
    schema: import("@osd/config-schema").ObjectType<{
        rules: import("@osd/config-schema").Type<string[]>;
        strict: import("@osd/config-schema").Type<boolean>;
        warnLegacyBrowsers: import("@osd/config-schema").Type<boolean>;
    }>;
};
//# sourceMappingURL=config.d.ts.map