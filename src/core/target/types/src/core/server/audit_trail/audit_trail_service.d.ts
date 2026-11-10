import { CoreService } from '../../types';
import { CoreContext } from '../core_context';
import { OpenSearchDashboardsRequest } from '../http';
import { Auditor, AuditorFactory, AuditTrailSetup, AuditTrailStart } from './types';
export declare class AuditTrailService implements CoreService<AuditTrailSetup, AuditTrailStart> {
    private readonly log;
    private auditor;
    private readonly auditors;
    constructor(core: CoreContext);
    setup(): {
        register: (auditor: AuditorFactory) => void;
    };
    start(): {
        asScoped: (request: OpenSearchDashboardsRequest) => Auditor;
    };
    stop(): void;
}
//# sourceMappingURL=audit_trail_service.d.ts.map