import { CoreContext } from '../core_context';
import { PluginWrapper } from './plugin';
import { DiscoveredPlugin } from './types';
import { PluginsServiceSetupDeps, PluginsServiceStartDeps } from './plugins_service';
import { PluginDependencies } from '.';
/** @internal */
export declare class PluginsSystem {
    private readonly coreContext;
    private readonly plugins;
    private readonly log;
    private readonly crossCompatibilityService;
    private readonly satupPlugins;
    constructor(coreContext: CoreContext);
    addPlugin(plugin: PluginWrapper): void;
    /**
     * @returns a ReadonlyMap of each plugin and an Array of its available dependencies
     * @internal
     */
    getPluginDependencies(): PluginDependencies;
    setupPlugins(deps: PluginsServiceSetupDeps): Promise<Map<string, unknown>>;
    startPlugins(deps: PluginsServiceStartDeps): Promise<Map<string, unknown>>;
    healthCheckOpenSearchPlugins(deps: PluginsServiceStartDeps): Promise<void>;
    stopPlugins(): Promise<void>;
    /**
     * Get a Map of all discovered UI plugins in topological order.
     */
    uiPlugins(): Map<string, DiscoveredPlugin>;
    /**
     * Gets topologically sorted plugin names that are registered with the plugin system.
     * Ordering is possible if and only if the plugins graph has no directed cycles,
     * that is, if it is a directed acyclic graph (DAG). If plugins cannot be ordered
     * an error is thrown.
     *
     * Uses Kahn's Algorithm to sort the graph.
     */
    private getTopologicallySortedPluginNames;
}
//# sourceMappingURL=plugins_system.d.ts.map