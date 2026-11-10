import type { PublicMethodsOf } from '@osd/utility-types';
import { CoreService } from '../../types';
import { CoreContext } from '../core_context';
import { LegacyServiceSetupDeps, LegacyServiceStartDeps, LegacyConfig } from './types';
/** @internal */
export declare type ILegacyService = PublicMethodsOf<LegacyService>;
/** @internal */
export declare class LegacyService implements CoreService {
    private readonly coreContext;
    /** Symbol to represent the legacy platform as a fake "plugin". Used by the ContextService */
    readonly legacyId: symbol;
    private readonly log;
    private readonly devConfig$;
    private readonly httpConfig$;
    private osdServer?;
    private configSubscription?;
    private setupDeps?;
    private update$?;
    private legacyRawConfig?;
    private settings?;
    constructor(coreContext: CoreContext);
    setupLegacyConfig(): Promise<{
        settings: Record<string, any>;
        legacyConfig: LegacyConfig;
    }>;
    setup(setupDeps: LegacyServiceSetupDeps): Promise<void>;
    start(startDeps: LegacyServiceStartDeps): Promise<void>;
    stop(): Promise<void>;
    private createClusterManager;
    private createOsdServer;
}
//# sourceMappingURL=legacy_service.d.ts.map