import { CoreContext } from '../core_context';
import { PluginWrapper } from './plugin';
import { PluginsServiceSetupDeps, PluginsServiceStartDeps } from './plugins_service';
import { PluginInitializerContext, PluginManifest, PluginOpaqueId } from './types';
import { CoreSetup, CoreStart } from '..';
export interface InstanceInfo {
    uuid: string;
}
/**
 * This returns a facade for `CoreContext` that will be exposed to the plugin initializer.
 * This facade should be safe to use across entire plugin lifespan.
 *
 * This is called for each plugin when it's created, so each plugin gets its own
 * version of these values.
 *
 * We should aim to be restrictive and specific in the APIs that we expose.
 *
 * @param coreContext OpenSearch Dashboards core context
 * @param pluginManifest The manifest of the plugin we're building these values for.
 * @internal
 */
export declare function createPluginInitializerContext(coreContext: CoreContext, opaqueId: PluginOpaqueId, pluginManifest: PluginManifest, instanceInfo: InstanceInfo): PluginInitializerContext;
/**
 * This returns a facade for `CoreContext` that will be exposed to the plugin `setup` method.
 * This facade should be safe to use only within `setup` itself.
 *
 * This is called for each plugin when it's set up, so each plugin gets its own
 * version of these values.
 *
 * We should aim to be restrictive and specific in the APIs that we expose.
 *
 * @param coreContext OpenSearch Dashboards core context
 * @param plugin The plugin we're building these values for.
 * @param deps Dependencies that Plugins services gets during setup.
 * @internal
 */
export declare function createPluginSetupContext<TPlugin, TPluginDependencies>(coreContext: CoreContext, deps: PluginsServiceSetupDeps, plugin: PluginWrapper<TPlugin, TPluginDependencies>): CoreSetup;
/**
 * This returns a facade for `CoreContext` that will be exposed to the plugin `start` method.
 * This facade should be safe to use only within `start` itself.
 *
 * This is called for each plugin when it starts, so each plugin gets its own
 * version of these values.
 *
 * @param coreContext OpenSearch Dashboards core context
 * @param plugin The plugin we're building these values for.
 * @param deps Dependencies that Plugins services gets during start.
 * @internal
 */
export declare function createPluginStartContext<TPlugin, TPluginDependencies>(coreContext: CoreContext, deps: PluginsServiceStartDeps, plugin: PluginWrapper<TPlugin, TPluginDependencies>): CoreStart;
//# sourceMappingURL=plugin_context.d.ts.map