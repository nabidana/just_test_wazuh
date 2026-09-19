import { DiscoveredPlugin, PluginName } from '../../server';
import { EnvironmentMode, PackageInfo, UiSettingsParams, UserProvidedValues } from '../../server/types';
import { AppCategory, Branding } from '../';
export interface InjectedPluginMetadata {
    id: PluginName;
    plugin: DiscoveredPlugin;
    config?: {
        [key: string]: unknown;
    };
}
/** @internal */
export interface InjectedMetadataParams {
    injectedMetadata: {
        version: string;
        buildNumber: number;
        branch: string;
        wazuhVersion: string;
        basePath: string;
        serverBasePath: string;
        category?: AppCategory;
        csp: {
            warnLegacyBrowsers: boolean;
        };
        vars: {
            [key: string]: unknown;
        };
        env: {
            mode: Readonly<EnvironmentMode>;
            packageInfo: Readonly<PackageInfo>;
        };
        uiPlugins: InjectedPluginMetadata[];
        anonymousStatusPage: boolean;
        legacyMetadata: {
            uiSettings: {
                defaults: Record<string, UiSettingsParams>;
                user?: Record<string, UserProvidedValues>;
            };
        };
        branding: Branding;
        survey?: string;
    };
}
/**
 * Provides access to the metadata that is injected by the
 * server into the page. The metadata is actually defined
 * in the entry file for the bundle containing the new platform
 * and is read from the DOM in most cases.
 *
 * @internal
 */
export declare class InjectedMetadataService {
    private state;
    constructor(params: InjectedMetadataParams);
    start(): InjectedMetadataStart;
    setup(): InjectedMetadataSetup;
}
/**
 * Provides access to the metadata injected by the server into the page
 *
 * @internal
 */
export interface InjectedMetadataSetup {
    getBasePath: () => string;
    getServerBasePath: () => string;
    getOpenSearchDashboardsBuildNumber: () => number;
    getOpenSearchDashboardsBranch: () => string;
    getOpenSearchDashboardsVersion: () => string;
    getCspConfig: () => {
        warnLegacyBrowsers: boolean;
    };
    /**
     * An array of frontend plugins in topological order.
     */
    getPlugins: () => InjectedPluginMetadata[];
    getAnonymousStatusPage: () => boolean;
    getLegacyMetadata: () => {
        uiSettings: {
            defaults: Record<string, UiSettingsParams>;
            user?: Record<string, UserProvidedValues> | undefined;
        };
    };
    getInjectedVar: (name: string, defaultValue?: any) => unknown;
    getInjectedVars: () => {
        [key: string]: unknown;
    };
    getBranding: () => Branding;
    getSurvey: () => string | undefined;
    getWazuhVersion: () => string;
    getWazuhDocVersion: () => string;
}
/** @internal */
export declare type InjectedMetadataStart = InjectedMetadataSetup;
//# sourceMappingURL=injected_metadata_service.d.ts.map