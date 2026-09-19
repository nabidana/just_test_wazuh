import { CoreService } from '../../types';
import { ContextSetup } from '../context';
import { InternalDynamicConfigServiceStart } from '../config';
import { CoreContext } from '../core_context';
import { InternalHttpServiceSetup, InternalHttpServiceStart } from './types';
interface SetupDeps {
    context: ContextSetup;
}
export interface StartDeps {
    dynamicConfigService: InternalDynamicConfigServiceStart;
}
/** @internal */
export declare class HttpService implements CoreService<InternalHttpServiceSetup, InternalHttpServiceStart> {
    private readonly coreContext;
    private readonly httpServer;
    private readonly httpsRedirectServer;
    private readonly config$;
    private configSubscription?;
    private readonly logger;
    private readonly log;
    private readonly env;
    private notReadyServer?;
    private internalSetup?;
    private requestHandlerContext?;
    constructor(coreContext: CoreContext);
    setup(deps: SetupDeps): Promise<InternalHttpServiceSetup>;
    getStartContract(): InternalHttpServiceStart;
    start(deps: StartDeps): Promise<InternalHttpServiceStart>;
    /**
     * Indicates if http server has configured to start listening on a configured port.
     * We shouldn't start http service in two cases:
     * 1. If `server.autoListen` is explicitly set to `false`.
     * 2. When the process is run as dev cluster manager.
     * will fork a dedicated process where http service will be set up instead.
     * @internal
     * */
    private shouldListen;
    stop(): Promise<void>;
    private runNotReadyServer;
}
export {};
//# sourceMappingURL=http_service.d.ts.map