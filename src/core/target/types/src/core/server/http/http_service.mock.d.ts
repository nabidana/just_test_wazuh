/// <reference types="jest" />
/// <reference types="@testing-library/jest-dom" />
import { RouterMock } from './router/router.mock';
import { InternalHttpServiceSetup, HttpServiceSetup, HttpServiceStart, InternalHttpServiceStart } from './types';
import { HttpService } from './http_service';
import { OnPreRoutingToolkit } from './lifecycle/on_pre_routing';
import { AuthToolkit } from './lifecycle/auth';
import { OnPostAuthToolkit } from './lifecycle/on_post_auth';
import { OnPreAuthToolkit } from './lifecycle/on_pre_auth';
import { OnPreResponseToolkit } from './lifecycle/on_pre_response';
declare type BasePathMocked = jest.Mocked<InternalHttpServiceSetup['basePath']>;
export declare type HttpServiceSetupMock = jest.Mocked<Omit<HttpServiceSetup, 'basePath' | 'createRouter'>> & {
    basePath: BasePathMocked;
    createRouter: jest.MockedFunction<() => RouterMock>;
};
export declare type InternalHttpServiceSetupMock = jest.Mocked<Omit<InternalHttpServiceSetup, 'basePath' | 'createRouter'>> & {
    basePath: BasePathMocked;
    createRouter: jest.MockedFunction<(path: string) => RouterMock>;
};
export declare type HttpServiceStartMock = jest.Mocked<HttpServiceStart> & {
    basePath: BasePathMocked;
};
export declare type InternalHttpServiceStartMock = jest.Mocked<InternalHttpServiceStart> & {
    basePath: BasePathMocked;
};
export declare const httpServiceMock: {
    create: () => jest.Mocked<Pick<HttpService, "start" | "stop" | "setup" | "getStartContract">>;
    createBasePath: (serverBasePath?: string) => BasePathMocked;
    createAuth: () => jest.Mocked<{
        get: import("./auth_state_storage").GetAuthState;
        isAuthenticated: import("./auth_state_storage").IsAuthenticated;
    }>;
    createInternalSetupContract: () => InternalHttpServiceSetupMock;
    createSetupContract: () => HttpServiceSetupMock;
    createInternalStartContract: () => InternalHttpServiceStartMock;
    createStartContract: () => HttpServiceStartMock;
    createOnPreAuthToolkit: () => jest.Mocked<OnPreAuthToolkit>;
    createOnPostAuthToolkit: () => jest.Mocked<OnPostAuthToolkit>;
    createOnPreResponseToolkit: () => jest.Mocked<OnPreResponseToolkit>;
    createOnPreRoutingToolkit: () => jest.Mocked<OnPreRoutingToolkit>;
    createAuthToolkit: () => jest.Mocked<AuthToolkit>;
    createRouter: ({ routerPath }?: {
        routerPath?: string | undefined;
    }) => jest.Mocked<import("..").IRouter>;
};
export {};
//# sourceMappingURL=http_service.mock.d.ts.map