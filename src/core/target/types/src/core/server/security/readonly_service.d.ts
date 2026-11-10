import { OpenSearchDashboardsRequest, Capabilities } from '../index';
import { IReadOnlyService } from './types';
export declare class ReadonlyService implements IReadOnlyService {
    isReadonly(request: OpenSearchDashboardsRequest): Promise<boolean>;
    hideForReadonly(request: OpenSearchDashboardsRequest, capabilites: Partial<Capabilities>, hideCapabilities: Partial<Capabilities>): Promise<Partial<Capabilities>>;
}
//# sourceMappingURL=readonly_service.d.ts.map