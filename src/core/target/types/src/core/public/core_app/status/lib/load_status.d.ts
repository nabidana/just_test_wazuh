import type { UnwrapPromise } from '@osd/utility-types';
import type { HttpSetup } from '../../../http';
import type { NotificationsSetup } from '../../../notifications';
import type { DataType } from '../lib';
export interface Metric {
    name: string;
    value: number | number[];
    type?: DataType;
}
export interface FormattedStatus {
    id: string;
    state: {
        id: string;
        title: string;
        message: string;
        uiColor: string;
    };
}
/**
 * Get the status from the server API and format it for display.
 */
export declare function loadStatus({ http, notifications, }: {
    http: HttpSetup;
    notifications: NotificationsSetup;
}): Promise<{
    name: string;
    version: import("../../../../types/status").ServerVersion;
    statuses: FormattedStatus[];
    serverState: {
        id: string;
        title: string;
        message: string;
        uiColor: string;
    };
    metrics: Metric[];
}>;
export declare type ProcessedServerResponse = UnwrapPromise<ReturnType<typeof loadStatus>>;
//# sourceMappingURL=load_status.d.ts.map