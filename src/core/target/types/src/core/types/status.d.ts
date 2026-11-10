import type { OpsMetrics } from '../server/metrics';
export interface ServerStatus {
    id: string;
    title: string;
    state: string;
    message: string;
    uiColor: string;
    icon?: string;
    since?: string;
}
export declare type ServerMetrics = OpsMetrics & {
    collection_interval_in_millis: number;
};
export interface ServerVersion {
    number: string;
    build_hash: string;
    build_number: string;
    build_snapshot: string;
}
export interface StatusResponse {
    name: string;
    uuid: string;
    version: ServerVersion;
    status: {
        overall: ServerStatus;
        statuses: ServerStatus[];
    };
    metrics: ServerMetrics;
}
//# sourceMappingURL=status.d.ts.map