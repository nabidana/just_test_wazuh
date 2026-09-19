import { TypeOf } from '@osd/config-schema';
import { Env } from '../config';
export declare type PluginsConfigType = TypeOf<typeof config.schema>;
export declare const config: {
    path: string;
    schema: import("@osd/config-schema").ObjectType<{
        initialize: import("@osd/config-schema").Type<boolean>;
        /**
         * Defines an array of directories where another plugin should be loaded from.
         */
        paths: import("@osd/config-schema").Type<string[]>;
    }>;
};
/** @internal */
export declare class PluginsConfig {
    /**
     * Indicates whether or not plugins should be initialized.
     */
    readonly initialize: boolean;
    /**
     * Defines directories that we should scan for the plugin subdirectories.
     */
    readonly pluginSearchPaths: readonly string[];
    /**
     * Defines directories where an additional plugin exists.
     */
    readonly additionalPluginPaths: readonly string[];
    constructor(rawConfig: PluginsConfigType, env: Env);
}
//# sourceMappingURL=plugins_config.d.ts.map