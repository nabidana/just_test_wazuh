import { TypeOf } from '@osd/config-schema';
export declare const config: {
    path: string;
    schema: import("@osd/config-schema").ObjectType<{
        basePathProxyTarget: import("@osd/config-schema").Type<number>;
    }>;
};
export declare type DevConfigType = TypeOf<typeof config.schema>;
export declare class DevConfig {
    basePathProxyTargetPort: number;
    /**
     * @internal
     */
    constructor(rawConfig: DevConfigType);
}
//# sourceMappingURL=dev_config.d.ts.map