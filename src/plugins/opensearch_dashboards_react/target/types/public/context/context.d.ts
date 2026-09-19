import * as React from 'react';
import { OpenSearchDashboardsReactContext, OpenSearchDashboardsReactContextValue, OpenSearchDashboardsServices } from './types';
export declare const context: React.Context<OpenSearchDashboardsReactContextValue<Partial<import("../../../../core/public").CoreStart>>>;
export declare const useOpenSearchDashboards: <Extra extends object = {}>() => OpenSearchDashboardsReactContextValue<Partial<import("../../../../core/public").CoreStart> & Extra>;
export declare const withOpenSearchDashboards: <Props extends {
    opensearchDashboards: OpenSearchDashboardsReactContextValue<any>;
}>(type: React.ComponentType<Props>) => React.FC<Pick<Props, Exclude<keyof Props, "opensearchDashboards">>>;
export declare const UseOpenSearchDashboards: React.FC<{
    children: (opensearchDashboards: OpenSearchDashboardsReactContextValue<any>) => React.ReactNode;
}>;
export declare const createOpenSearchDashboardsReactContext: <Services extends Partial<import("../../../../core/public").CoreStart>>(services: Services) => OpenSearchDashboardsReactContext<Services>;
export declare const OpenSearchDashboardsContextProvider: React.FC<{
    services?: {} | undefined;
}>;
//# sourceMappingURL=context.d.ts.map