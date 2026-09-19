import { InternalCoreSetup, InternalCoreStart } from '../internal_types';
import { PluginsServiceSetup, PluginsServiceStart, UiPlugins } from '../plugins';
import { InternalRenderingServiceSetup } from '../rendering';
/**
 * @internal
 * @deprecated
 */
export declare type LegacyVars = Record<string, any>;
declare type LegacyCoreSetup = InternalCoreSetup & {
    plugins: PluginsServiceSetup;
    rendering: InternalRenderingServiceSetup;
};
declare type LegacyCoreStart = InternalCoreStart & {
    plugins: PluginsServiceStart;
};
/**
 * New platform representation of the legacy configuration (OpenSearchDashboardsConfig)
 *
 * @internal
 * @deprecated
 */
export interface LegacyConfig {
    get<T>(key?: string): T;
    has(key: string): boolean;
    set(key: string, value: any): void;
    set(config: LegacyVars): void;
}
/**
 * @public
 * @deprecated
 */
export interface LegacyServiceSetupDeps {
    core: LegacyCoreSetup;
    plugins: Record<string, unknown>;
    uiPlugins: UiPlugins;
}
/**
 * @public
 * @deprecated
 */
export interface LegacyServiceStartDeps {
    core: LegacyCoreStart;
    plugins: Record<string, unknown>;
}
/**
 * @internal
 * @deprecated
 */
export interface LegacyServiceSetupConfig {
    legacyConfig: LegacyConfig;
    settings: LegacyVars;
}
export {};
//# sourceMappingURL=types.d.ts.map