import { PluginInitializerContext, PluginManifest, PluginOpaqueId, PluginConfigDescriptor } from './types';
import { CoreSetup, CoreStart } from '..';
/**
 * Lightweight wrapper around discovered plugin that is responsible for instantiating
 * plugin and dispatching proper context and dependencies into plugin's lifecycle hooks.
 *
 * @internal
 */
export declare class PluginWrapper<TSetup = unknown, TStart = unknown, TPluginsSetup extends object = object, TPluginsStart extends object = object> {
    readonly params: {
        readonly path: string;
        readonly manifest: PluginManifest;
        readonly opaqueId: PluginOpaqueId;
        readonly initializerContext: PluginInitializerContext;
    };
    readonly path: string;
    readonly manifest: PluginManifest;
    readonly opaqueId: PluginOpaqueId;
    readonly name: PluginManifest['id'];
    readonly configPath: PluginManifest['configPath'];
    readonly requiredPlugins: PluginManifest['requiredPlugins'];
    readonly optionalPlugins: PluginManifest['optionalPlugins'];
    readonly requiredEnginePlugins: PluginManifest['requiredEnginePlugins'];
    readonly requiredBundles: PluginManifest['requiredBundles'];
    readonly includesServerPlugin: PluginManifest['server'];
    readonly includesUiPlugin: PluginManifest['ui'];
    readonly supportedOSDataSourceVersions: PluginManifest['supportedOSDataSourceVersions'];
    readonly requiredOSDataSourcePlugins: PluginManifest['requiredOSDataSourcePlugins'];
    private readonly log;
    private readonly initializerContext;
    private instance?;
    private readonly startDependencies$;
    readonly startDependencies: Promise<[CoreStart, TPluginsStart, TStart]>;
    constructor(params: {
        readonly path: string;
        readonly manifest: PluginManifest;
        readonly opaqueId: PluginOpaqueId;
        readonly initializerContext: PluginInitializerContext;
    });
    /**
     * Instantiates plugin and calls `setup` function exposed by the plugin initializer.
     * @param setupContext Context that consists of various core services tailored specifically
     * for the `setup` lifecycle event.
     * @param plugins The dictionary where the key is the dependency name and the value
     * is the contract returned by the dependency's `setup` function.
     */
    setup(setupContext: CoreSetup<TPluginsStart>, plugins: TPluginsSetup): Promise<TSetup>;
    /**
     * Calls `start` function exposed by the initialized plugin.
     * @param startContext Context that consists of various core services tailored specifically
     * for the `start` lifecycle event.
     * @param plugins The dictionary where the key is the dependency name and the value
     * is the contract returned by the dependency's `start` function.
     */
    start(startContext: CoreStart, plugins: TPluginsStart): Promise<TStart>;
    /**
     * Calls optional `stop` function exposed by the plugin initializer.
     */
    stop(): Promise<void>;
    getConfigDescriptor(): PluginConfigDescriptor | null;
    private createPluginInstance;
}
//# sourceMappingURL=plugin.d.ts.map