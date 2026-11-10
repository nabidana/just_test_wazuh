import { Logger } from '../logging';
import { HttpConfig } from './http_config';
export declare class HttpsRedirectServer {
    private readonly log;
    private server?;
    constructor(log: Logger);
    start(config: HttpConfig): Promise<void>;
    stop(): Promise<void>;
}
//# sourceMappingURL=https_redirect_server.d.ts.map