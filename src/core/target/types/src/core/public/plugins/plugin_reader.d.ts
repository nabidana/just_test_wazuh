import { PluginInitializer } from './plugin';
/**
 * Unknown variant for internal use only for when plugins are not known.
 * @internal
 */
export declare type UnknownPluginInitializer = PluginInitializer<unknown, Record<string, unknown>>;
/**
 * Custom window type for loading bundles. Do not extend global Window to avoid leaking these types.
 * @internal
 */
export interface CoreWindow {
    __osdBundles__: {
        has(key: string): boolean;
        get(key: string): {
            plugin: UnknownPluginInitializer;
        } | undefined;
    };
}
/**
 * Reads the plugin's bundle declared in the global context.
 */
export declare function read(name: string): PluginInitializer<unknown, Record<string, unknown>, object, object>;
//# sourceMappingURL=plugin_reader.d.ts.map