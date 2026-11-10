import { DiscoveredPlugin } from '../../server';
import { PluginOpaqueId, PackageInfo, EnvironmentMode } from '../../server/types';
import { CoreContext } from '../core_system';
import { PluginWrapper } from './plugin';
import { PluginsServiceSetupDeps, PluginsServiceStartDeps } from './plugins_service';
import { CoreSetup, CoreStart } from '../';
/**
 * The available core services passed to a `PluginInitializer`
 *
 * @public
 */
export interface PluginInitializerContext<ConfigSchema extends object = object> {
    /**
     * A symbol used to identify this plugin in the system. Needed when registering handlers or context providers.
     */
    readonly opaqueId: PluginOpaqueId;
    readonly env: {
        mode: Readonly<EnvironmentMode>;
        packageInfo: Readonly<PackageInfo>;
    };
    readonly config: {
        get: <T extends object = ConfigSchema>() => T;
    };
}
/**
 * Provides a plugin-specific context passed to the plugin's construtor. This is currently
 * empty but should provide static services in the future, such as config and logging.
 *
 * @param coreContext
 * @param opaqueId
 * @param pluginManifest
 * @param pluginConfig
 * @internal
 */
export declare function createPluginInitializerContext(coreContext: CoreContext, opaqueId: PluginOpaqueId, pluginManifest: DiscoveredPlugin, pluginConfig: {
    [key: string]: unknown;
}): PluginInitializerContext;
/**
 * Provides a plugin-specific context passed to the plugin's `setup` lifecycle event. Currently
 * this returns a shallow copy the service setup contracts, but in the future could provide
 * plugin-scoped versions of the service.
 *
 * @param coreContext
 * @param deps
 * @param plugin
 * @internal
 */
export declare function createPluginSetupContext<TSetup, TStart, TPluginsSetup extends object, TPluginsStart extends object>(coreContext: CoreContext, deps: PluginsServiceSetupDeps, plugin: PluginWrapper<TSetup, TStart, TPluginsSetup, TPluginsStart>): CoreSetup;
/**
 * Provides a plugin-specific context passed to the plugin's `start` lifecycle event. Currently
 * this returns a shallow copy the service start contracts, but in the future could provide
 * plugin-scoped versions of the service.
 *
 * @param coreContext
 * @param deps
 * @param plugin
 * @internal
 */
export declare function createPluginStartContext<TSetup, TStart, TPluginsSetup extends object, TPluginsStart extends object>(coreContext: CoreContext, deps: PluginsServiceStartDeps, plugin: PluginWrapper<TSetup, TStart, TPluginsSetup, TPluginsStart>): CoreStart;
//# sourceMappingURL=plugin_context.d.ts.map