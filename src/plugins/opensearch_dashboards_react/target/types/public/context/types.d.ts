import * as React from 'react';
import { CoreStart } from '../../../../core/public';
import { OpenSearchDashboardsReactOverlays } from '../overlays';
import { OpenSearchDashboardsReactNotifications } from '../notifications';
export declare type OpenSearchDashboardsServices = Partial<CoreStart>;
export interface OpenSearchDashboardsReactContextValue<Services extends OpenSearchDashboardsServices> {
    readonly services: Services;
    readonly overlays: OpenSearchDashboardsReactOverlays;
    readonly notifications: OpenSearchDashboardsReactNotifications;
}
export interface OpenSearchDashboardsReactContext<T extends OpenSearchDashboardsServices> {
    value: OpenSearchDashboardsReactContextValue<T>;
    Provider: React.FC<{
        services?: T;
    }>;
    Consumer: React.Consumer<OpenSearchDashboardsReactContextValue<T>>;
}
//# sourceMappingURL=types.d.ts.map