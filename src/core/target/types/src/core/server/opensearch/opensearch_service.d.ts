import { CoreService } from '../../types';
import { CoreContext } from '../core_context';
import { InternalHttpServiceSetup } from '../http/';
import { AuditTrailStart } from '../audit_trail';
import { InternalOpenSearchServiceSetup, InternalOpenSearchServiceStart } from './types';
interface SetupDeps {
    http: InternalHttpServiceSetup;
}
interface StartDeps {
    auditTrail: AuditTrailStart;
}
/** @internal */
export declare class OpenSearchService implements CoreService<InternalOpenSearchServiceSetup, InternalOpenSearchServiceStart> {
    private readonly coreContext;
    private readonly log;
    private readonly config$;
    private auditorFactory?;
    private stop$;
    private opensearchDashboardsVersion;
    private getAuthHeaders?;
    private createLegacyCustomClient?;
    private legacyClient?;
    private client?;
    constructor(coreContext: CoreContext);
    setup(deps: SetupDeps): Promise<InternalOpenSearchServiceSetup>;
    start({ auditTrail }: StartDeps): Promise<InternalOpenSearchServiceStart>;
    stop(): Promise<void>;
    private createClusterClient;
    private createLegacyClusterClient;
    private getAuditorFactory;
}
export {};
//# sourceMappingURL=opensearch_service.d.ts.map