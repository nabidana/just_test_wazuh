import { Capabilities } from '../../types/capabilities';
import { OpenSearchDashboardsRequest } from '../http';
export { Capabilities };
/**
 * See {@link CapabilitiesSetup}
 * @public
 */
export declare type CapabilitiesProvider = () => Partial<Capabilities>;
/**
 * See {@link CapabilitiesSetup}
 * @public
 */
export declare type CapabilitiesSwitcher = (request: OpenSearchDashboardsRequest, uiCapabilities: Capabilities) => Partial<Capabilities> | Promise<Partial<Capabilities>>;
//# sourceMappingURL=types.d.ts.map