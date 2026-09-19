import { DiscoveredPlugin, PluginOpaqueId } from '../../server';
import { PluginInitializerContext } from './plugin_context';
import { CoreStart, CoreSetup } from '..';
/**
 * The interface that should be returned by a `PluginInitializer`.
 *
 * @public
 */
export interface Plugin<TSetup = void, TStart = void, TPluginsSetup extends object = object, TPluginsStart extends object = object> {
    setup(core: CoreSetup<TPluginsStart, TStart>, plugins: TPluginsSetup): TSetup | Promise<TSetup>;
    start(core: CoreStart, plugins: TPluginsStart): TStart | Promise<TStart>;
    stop?(): void;
}
/**
 * The `plugin` export at the root of a plugin's `public` directory should conform
 * to this interface.
 *
 * @public
 */
export declare type PluginInitializer<TSetup, TStart, TPluginsSetup extends object = object, TPluginsStart extends object = object> = (core: PluginInitializerContext) => Plugin<TSetup, TStart, TPluginsSetup, TPluginsStart>;
/**
 * Lightweight wrapper around discovered plugin that is responsible for instantiating
 * plugin and dispatching proper context and dependencies into plugin's lifecycle hooks.
 *
 * @internal
 */
export declare class PluginWrapper<TSetup = unknown, TStart = unknown, TPluginsSetup extends object = object, TPluginsStart extends object = object> {
    readonly discoveredPlugin: DiscoveredPlugin;
    readonly opaqueId: PluginOpaqueId;
    private readonly initializerContext;
    readonly name: DiscoveredPlugin['id'];
    readonly configPath: DiscoveredPlugin['configPath'];
    readonly requiredPlugins: DiscoveredPlugin['requiredPlugins'];
    readonly optionalPlugins: DiscoveredPlugin['optionalPlugins'];
    private instance?;
    private readonly startDependencies$;
    readonly startDependencies: Promise<[CoreStart, TPluginsStart, TStart]>;
    constructor(discoveredPlugin: DiscoveredPlugin, opaqueId: PluginOpaqueId, initializerContext: PluginInitializerContext);
    /**
     * Instantiates plugin and calls `setup` function exposed by the plugin initializer.
     * @param setupContext Context that consists of various core services tailored specifically
     * for the `setup` lifecycle event.
     * @param plugins The dictionary where the key is the dependency name and the value
     * is the contract returned by the dependency's `setup` function.
     */
    setup(setupContext: CoreSetup<TPluginsStart, TStart>, plugins: TPluginsSetup): Promise<TSetup>;
    /**
     * Calls `setup` function exposed by the initialized plugin.
     * @param startContext Context that consists of various core services tailored specifically
     * for the `start` lifecycle event.
     * @param plugins The dictionary where the key is the dependency name and the value
     * is the contract returned by the dependency's `start` function.
     */
    start(startContext: CoreStart, plugins: TPluginsStart): Promise<TStart>;
    /**
     * Calls optional `stop` function exposed by the plugin initializer.
     */
    stop(): void;
    private createPluginInstance;
}
//# sourceMappingURL=plugin.d.ts.map