import { Observable } from 'rxjs';
import { ServiceStatus } from '../status';
import { SavedObjectStatusMeta } from './types';
import { OpenSearchDashboardsMigratorStatus } from './migrations/opensearch_dashboards';
export declare const calculateStatus$: (rawMigratorStatus$: Observable<OpenSearchDashboardsMigratorStatus>, opensearchStatus$: Observable<ServiceStatus>) => Observable<ServiceStatus<SavedObjectStatusMeta>>;
//# sourceMappingURL=status.d.ts.map