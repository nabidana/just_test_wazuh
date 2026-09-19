import { Observable } from 'rxjs';
import { ServiceStatus } from '../status';
import { OpenSearchStatusMeta } from './types';
import { NodesVersionCompatibility } from './version_check/ensure_opensearch_version';
export declare const calculateStatus$: (opensearchNodesCompatibility$: Observable<NodesVersionCompatibility>) => Observable<ServiceStatus<OpenSearchStatusMeta>>;
//# sourceMappingURL=status.d.ts.map