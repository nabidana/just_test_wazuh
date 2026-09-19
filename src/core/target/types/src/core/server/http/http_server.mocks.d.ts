/// <reference types="node" />
/// <reference types="jest" />
/// <reference types="@testing-library/jest-dom" />
import { Request } from '@hapi/hapi';
import { Socket } from 'net';
import { OpenSearchDashboardsRequest, LifecycleResponseFactory, RouteMethod, OpenSearchDashboardsResponseFactory, RouteValidationSpec, OpenSearchDashboardsRouteOptions, OpenSearchDashboardsRequestState } from './router';
import { OnPreResponseToolkit } from './lifecycle/on_pre_response';
import { OnPostAuthToolkit } from './lifecycle/on_post_auth';
import { OnPreRoutingToolkit } from './lifecycle/on_pre_routing';
interface RequestFixtureOptions<P = any, Q = any, B = any> {
    auth?: {
        isAuthenticated: boolean;
    };
    headers?: Record<string, string>;
    params?: Record<string, any>;
    body?: Record<string, any>;
    query?: Record<string, any>;
    path?: string;
    method?: RouteMethod;
    socket?: Socket;
    routeTags?: string[];
    opensearchDashboardsRouteOptions?: OpenSearchDashboardsRouteOptions;
    opensearchDashboardsRequestState?: OpenSearchDashboardsRequestState;
    routeAuthRequired?: false;
    validation?: {
        params?: RouteValidationSpec<P>;
        query?: RouteValidationSpec<Q>;
        body?: RouteValidationSpec<B>;
    };
}
declare function createOpenSearchDashboardsRequestMock<P = any, Q = any, B = any>({ path, headers, params, body, query, method, socket, routeTags, routeAuthRequired, validation, opensearchDashboardsRouteOptions, opensearchDashboardsRequestState, auth, }?: RequestFixtureOptions<P, Q, B>): OpenSearchDashboardsRequest<P, Q, B, any>;
declare type DeepPartial<T> = T extends any[] ? DeepPartialArray<T[number]> : T extends object ? DeepPartialObject<T> : T;
interface DeepPartialArray<T> extends Array<DeepPartial<T>> {
}
declare type DeepPartialObject<T> = {
    [P in keyof T]+?: DeepPartial<T[P]>;
};
declare function createRawRequestMock(customization?: DeepPartial<Request>): Request;
declare type ToolkitMock = jest.Mocked<OnPreResponseToolkit & OnPostAuthToolkit & OnPreRoutingToolkit>;
export declare const httpServerMock: {
    createOpenSearchDashboardsRequest: typeof createOpenSearchDashboardsRequestMock;
    createRawRequest: typeof createRawRequestMock;
    createResponseFactory: () => jest.Mocked<OpenSearchDashboardsResponseFactory>;
    createLifecycleResponseFactory: () => jest.Mocked<LifecycleResponseFactory>;
    createToolkit: () => ToolkitMock;
};
export {};
//# sourceMappingURL=http_server.mocks.d.ts.map