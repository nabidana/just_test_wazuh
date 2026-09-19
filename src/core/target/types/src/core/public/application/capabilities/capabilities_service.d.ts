import { RecursiveReadonly } from '@osd/utility-types';
import { Capabilities } from '../../../types/capabilities';
import { HttpStart } from '../../http';
interface StartDeps {
    appIds: string[];
    http: HttpStart;
}
/** @internal */
export interface CapabilitiesStart {
    capabilities: RecursiveReadonly<Capabilities>;
}
/**
 * Service that is responsible for UI Capabilities.
 * @internal
 */
export declare class CapabilitiesService {
    start({ appIds, http }: StartDeps): Promise<CapabilitiesStart>;
}
export {};
//# sourceMappingURL=capabilities_service.d.ts.map