import * as Rx from 'rxjs';
import { DevConfig } from '../dev';
import { Logger } from '../logging';
import { HttpConfig } from './http_config';
export interface BasePathProxyServerOptions {
    shouldRedirectFromOldBasePath: (path: string) => boolean;
    delayUntil: () => Rx.Observable<void>;
}
export declare class BasePathProxyServer {
    private readonly log;
    private readonly httpConfig;
    private readonly devConfig;
    private server?;
    private httpsAgent?;
    get basePath(): string | undefined;
    get targetPort(): number;
    constructor(log: Logger, httpConfig: HttpConfig, devConfig: DevConfig);
    start(options: Readonly<BasePathProxyServerOptions>): Promise<void>;
    stop(): Promise<void>;
    private setupRoutes;
}
//# sourceMappingURL=base_path_proxy_server.d.ts.map