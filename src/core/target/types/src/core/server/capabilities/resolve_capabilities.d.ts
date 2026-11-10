import { Capabilities, CapabilitiesSwitcher } from './types';
import { OpenSearchDashboardsRequest } from '../http';
export declare type CapabilitiesResolver = (request: OpenSearchDashboardsRequest, applications: string[]) => Promise<Capabilities>;
export declare const getCapabilitiesResolver: (capabilities: () => Capabilities, switchers: () => CapabilitiesSwitcher[]) => CapabilitiesResolver;
export declare const resolveCapabilities: (capabilities: Capabilities, switchers: CapabilitiesSwitcher[], request: OpenSearchDashboardsRequest, applications: string[]) => Promise<Capabilities>;
//# sourceMappingURL=resolve_capabilities.d.ts.map