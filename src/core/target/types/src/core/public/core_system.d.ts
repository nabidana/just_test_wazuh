import { CoreSetup, CoreStart } from '.';
import { CoreId } from '../server';
import { EnvironmentMode, PackageInfo } from '../server/types';
import type { InternalApplicationSetup, InternalApplicationStart } from './application/types';
import { FatalErrorsSetup } from './fatal_errors';
import { InjectedMetadataParams, InjectedMetadataSetup, InjectedMetadataStart } from './injected_metadata';
interface Params {
    rootDomElement: HTMLElement;
    browserSupportsCsp: boolean;
    injectedMetadata: InjectedMetadataParams['injectedMetadata'];
}
/** @internal */
export interface CoreContext {
    coreId: CoreId;
    env: {
        mode: Readonly<EnvironmentMode>;
        packageInfo: Readonly<PackageInfo>;
    };
}
/** @internal */
export interface InternalCoreSetup extends Omit<CoreSetup, 'application' | 'getStartServices'> {
    application: InternalApplicationSetup;
    injectedMetadata: InjectedMetadataSetup;
}
/** @internal */
export interface InternalCoreStart extends Omit<CoreStart, 'application'> {
    application: InternalApplicationStart;
    injectedMetadata: InjectedMetadataStart;
}
/**
 * The CoreSystem is the root of the new platform, and setups all parts
 * of OpenSearch Dashboards in the UI, including the LegacyPlatform which is managed
 * by the LegacyPlatformService. As we migrate more things to the new
 * platform the CoreSystem will get many more Services.
 *
 * @internal
 */
export declare class CoreSystem {
    private readonly fatalErrors;
    private readonly injectedMetadata;
    private readonly notifications;
    private readonly http;
    private readonly savedObjects;
    private readonly uiSettings;
    private readonly chrome;
    private readonly i18n;
    private readonly overlay;
    private readonly plugins;
    private readonly application;
    private readonly docLinks;
    private readonly rendering;
    private readonly context;
    private readonly integrations;
    private readonly coreApp;
    private readonly rootDomElement;
    private readonly coreContext;
    private readonly workspaces;
    private fatalErrorsSetup;
    constructor(params: Params);
    setup(): Promise<{
        fatalErrors: FatalErrorsSetup;
    } | undefined>;
    start(): Promise<{
        application: InternalApplicationStart;
    } | undefined>;
    stop(): void;
}
export {};
//# sourceMappingURL=core_system.d.ts.map