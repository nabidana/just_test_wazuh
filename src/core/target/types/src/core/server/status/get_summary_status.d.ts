import { ServiceStatus } from './types';
/**
 * Returns a single {@link ServiceStatus} that summarizes the most severe status level from a group of statuses.
 * @param statuses
 */
export declare const getSummaryStatus: (statuses: Array<[string, ServiceStatus]>, { allAvailableSummary }?: {
    allAvailableSummary?: string | undefined;
}) => ServiceStatus;
//# sourceMappingURL=get_summary_status.d.ts.map