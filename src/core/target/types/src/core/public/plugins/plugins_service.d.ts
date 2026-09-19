import { PluginOpaqueId } from '../../server';
import { CoreService } from '../../types';
import { CoreContext } from '../core_system';
import { InternalCoreSetup, InternalCoreStart } from '../core_system';
import { InjectedPluginMetadata } from '../injected_metadata';
/** @internal */
export declare type PluginsServiceSetupDeps = InternalCoreSetup;
/** @internal */
export declare type PluginsServiceStartDeps = InternalCoreStart;
/** @internal */
export interface PluginsServiceSetup {
    contracts: ReadonlyMap<string, unknown>;
}
/** @internal */
export interface PluginsServiceStart {
    contracts: ReadonlyMap<string, unknown>;
}
/**
 * Service responsible for loading plugin bundles, initializing plugins, and managing the lifecycle
 * of all plugins.
 *
 * @internal
 */
export declare class PluginsService implements CoreService<PluginsServiceSetup, PluginsServiceStart> {
    private readonly coreContext;
    /** Plugin wrappers in topological order. */
    private readonly plugins;
    private readonly pluginDependencies;
    private readonly satupPlugins;
    constructor(coreContext: CoreContext, plugins: InjectedPluginMetadata[]);
    getOpaqueIds(): ReadonlyMap<PluginOpaqueId, PluginOpaqueId[]>;
    setup(deps: PluginsServiceSetupDeps): Promise<PluginsServiceSetup>;
    start(deps: PluginsServiceStartDeps): Promise<PluginsServiceStart>;
    stop(): Promise<void>;
}
//# sourceMappingURL=plugins_service.d.ts.map