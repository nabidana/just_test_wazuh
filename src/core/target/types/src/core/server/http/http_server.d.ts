import { Server } from '@hapi/hapi';
import { LoggerFactory } from '../logging';
import { HttpConfig } from './http_config';
import { IRouter } from './router';
import { IsAuthenticated, GetAuthState } from './auth_state_storage';
import { GetAuthHeaders } from './auth_headers_storage';
import { HttpServiceSetup, HttpServerInfo } from './types';
import { InternalDynamicConfigServiceStart } from '../config';
/** @internal */
export interface HttpServerSetup {
    server: Server;
    /**
     * Add all the routes registered with `router` to HTTP server request listeners.
     * @param router {@link IRouter} - a router with registered route handlers.
     */
    registerRouter: (router: IRouter) => void;
    registerStaticDir: (path: string, dirPath: string) => void;
    basePath: HttpServiceSetup['basePath'];
    csp: HttpServiceSetup['csp'];
    createCookieSessionStorageFactory: HttpServiceSetup['createCookieSessionStorageFactory'];
    registerOnPreRouting: HttpServiceSetup['registerOnPreRouting'];
    registerOnPreAuth: HttpServiceSetup['registerOnPreAuth'];
    registerAuth: HttpServiceSetup['registerAuth'];
    registerOnPostAuth: HttpServiceSetup['registerOnPostAuth'];
    registerOnPreResponse: HttpServiceSetup['registerOnPreResponse'];
    getAuthHeaders: GetAuthHeaders;
    auth: {
        get: GetAuthState;
        isAuthenticated: IsAuthenticated;
    };
    getServerInfo: () => HttpServerInfo;
}
/** @internal */
export declare type LifecycleRegistrar = Pick<HttpServerSetup, 'registerOnPreRouting' | 'registerOnPreAuth' | 'registerAuth' | 'registerOnPostAuth' | 'registerOnPreResponse'>;
export declare class HttpServer {
    private readonly logger;
    private readonly name;
    private server?;
    private config?;
    private registeredRouters;
    private authRegistered;
    private cookieSessionStorageCreated;
    private stopped;
    private readonly log;
    private readonly authState;
    private readonly authRequestHeaders;
    private readonly authResponseHeaders;
    constructor(logger: LoggerFactory, name: string);
    isListening(): boolean;
    private registerRouter;
    setup(config: HttpConfig): Promise<HttpServerSetup>;
    start(dynamicConfigService: InternalDynamicConfigServiceStart): Promise<void>;
    stop(): Promise<void>;
    private getAuthOption;
    private setupBasePathRewrite;
    private setupConditionalCompression;
    private setupRequestStateAssignment;
    private registerOnPreAuth;
    private registerOnPostAuth;
    private registerOnPreRouting;
    private registerOnPreResponse;
    private createCookieSessionStorageFactory;
    private registerAuth;
    private registerStaticDir;
}
//# sourceMappingURL=http_server.d.ts.map