/// <reference types="jest" />
/// <reference types="node" />
/// <reference types="@testing-library/jest-dom" />
import { HttpResources } from './types';
declare function createInternalHttpResourcesSetup(): {
    createRegistrar: jest.Mock<jest.Mocked<HttpResources>, []>;
};
declare function createHttpResourcesResponseFactory(): {
    renderCoreApp: jest.MockInstance<Promise<import("..").IOpenSearchDashboardsResponse<any>>, [options?: import("./types").HttpResourcesRenderOptions | undefined]> & ((options?: import("./types").HttpResourcesRenderOptions | undefined) => Promise<import("..").IOpenSearchDashboardsResponse<any>>);
    renderAnonymousCoreApp: jest.MockInstance<Promise<import("..").IOpenSearchDashboardsResponse<any>>, [options?: import("./types").HttpResourcesRenderOptions | undefined]> & ((options?: import("./types").HttpResourcesRenderOptions | undefined) => Promise<import("..").IOpenSearchDashboardsResponse<any>>);
    renderHtml: jest.MockInstance<import("..").IOpenSearchDashboardsResponse<any>, [options: import("..").HttpResponseOptions]> & ((options: import("..").HttpResponseOptions) => import("..").IOpenSearchDashboardsResponse<any>);
    renderJs: jest.MockInstance<import("..").IOpenSearchDashboardsResponse<any>, [options: import("..").HttpResponseOptions]> & ((options: import("..").HttpResponseOptions) => import("..").IOpenSearchDashboardsResponse<any>);
    custom: jest.MockInstance<import("../http/router").OpenSearchDashboardsResponse<string | Error | Record<string, any> | Buffer | import("stream").Stream | {
        message: string | Error;
        attributes?: Record<string, any> | undefined;
    } | undefined>, [options: import("..").CustomHttpResponseOptions<string | Error | Record<string, any> | Buffer | import("stream").Stream | {
        message: string | Error;
        attributes?: Record<string, any> | undefined;
    } | undefined>]> & (<T extends string | Error | Record<string, any> | Buffer | import("stream").Stream | {
        message: string | Error;
        attributes?: Record<string, any> | undefined;
    } | undefined>(options: import("..").CustomHttpResponseOptions<T>) => import("../http/router").OpenSearchDashboardsResponse<T>);
    badRequest: jest.MockInstance<import("../http/router").OpenSearchDashboardsResponse<import("..").ResponseError>, [options?: import("..").ErrorHttpResponseOptions | undefined]> & ((options?: import("..").ErrorHttpResponseOptions) => import("../http/router").OpenSearchDashboardsResponse<import("..").ResponseError>);
    unauthorized: jest.MockInstance<import("../http/router").OpenSearchDashboardsResponse<import("..").ResponseError>, [options?: import("..").ErrorHttpResponseOptions | undefined]> & ((options?: import("..").ErrorHttpResponseOptions) => import("../http/router").OpenSearchDashboardsResponse<import("..").ResponseError>);
    forbidden: jest.MockInstance<import("../http/router").OpenSearchDashboardsResponse<import("..").ResponseError>, [options?: import("..").ErrorHttpResponseOptions | undefined]> & ((options?: import("..").ErrorHttpResponseOptions) => import("../http/router").OpenSearchDashboardsResponse<import("..").ResponseError>);
    notFound: jest.MockInstance<import("../http/router").OpenSearchDashboardsResponse<import("..").ResponseError>, [options?: import("..").ErrorHttpResponseOptions | undefined]> & ((options?: import("..").ErrorHttpResponseOptions) => import("../http/router").OpenSearchDashboardsResponse<import("..").ResponseError>);
    conflict: jest.MockInstance<import("../http/router").OpenSearchDashboardsResponse<import("..").ResponseError>, [options?: import("..").ErrorHttpResponseOptions | undefined]> & ((options?: import("..").ErrorHttpResponseOptions) => import("../http/router").OpenSearchDashboardsResponse<import("..").ResponseError>);
    internalError: jest.MockInstance<import("../http/router").OpenSearchDashboardsResponse<import("..").ResponseError>, [options?: import("..").ErrorHttpResponseOptions | undefined]> & ((options?: import("..").ErrorHttpResponseOptions) => import("../http/router").OpenSearchDashboardsResponse<import("..").ResponseError>);
    customError: jest.MockInstance<import("../http/router").OpenSearchDashboardsResponse<import("..").ResponseError>, [options: import("..").CustomHttpResponseOptions<import("..").ResponseError>]> & ((options: import("..").CustomHttpResponseOptions<import("..").ResponseError>) => import("../http/router").OpenSearchDashboardsResponse<import("..").ResponseError>);
    redirected: jest.MockInstance<import("../http/router").OpenSearchDashboardsResponse<string | Record<string, any> | Buffer | import("stream").Stream>, [options: import("..").RedirectResponseOptions]> & ((options: import("..").RedirectResponseOptions) => import("../http/router").OpenSearchDashboardsResponse<string | Record<string, any> | Buffer | import("stream").Stream>);
    ok: jest.MockInstance<import("../http/router").OpenSearchDashboardsResponse<string | Record<string, any> | Buffer | import("stream").Stream>, [options?: import("..").HttpResponseOptions | undefined]> & ((options?: import("..").HttpResponseOptions) => import("../http/router").OpenSearchDashboardsResponse<string | Record<string, any> | Buffer | import("stream").Stream>);
    accepted: jest.MockInstance<import("../http/router").OpenSearchDashboardsResponse<string | Record<string, any> | Buffer | import("stream").Stream>, [options?: import("..").HttpResponseOptions | undefined]> & ((options?: import("..").HttpResponseOptions) => import("../http/router").OpenSearchDashboardsResponse<string | Record<string, any> | Buffer | import("stream").Stream>);
    noContent: jest.MockInstance<import("../http/router").OpenSearchDashboardsResponse<undefined>, [options?: import("..").HttpResponseOptions | undefined]> & ((options?: import("..").HttpResponseOptions) => import("../http/router").OpenSearchDashboardsResponse<undefined>);
};
export declare const httpResourcesMock: {
    createRegistrar: () => jest.Mocked<HttpResources>;
    createSetupContract: typeof createInternalHttpResourcesSetup;
    createResponseFactory: typeof createHttpResourcesResponseFactory;
};
export {};
//# sourceMappingURL=http_resources_service.mock.d.ts.map