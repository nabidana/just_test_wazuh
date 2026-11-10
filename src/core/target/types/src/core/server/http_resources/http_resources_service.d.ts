import { CoreContext } from '../core_context';
import { IRouter, InternalHttpServiceSetup } from '../http';
import { InternalRenderingServiceSetup } from '../rendering';
import { CoreService } from '../../types';
import { InternalHttpResourcesSetup, HttpResources } from './types';
export interface SetupDeps {
    http: InternalHttpServiceSetup;
    rendering: InternalRenderingServiceSetup;
}
export declare class HttpResourcesService implements CoreService<InternalHttpResourcesSetup> {
    private readonly logger;
    constructor(core: CoreContext);
    setup(deps: SetupDeps): {
        createRegistrar: (router: IRouter) => HttpResources;
    };
    start(): void;
    stop(): void;
    private createRegistrar;
    private createResponseToolkit;
}
//# sourceMappingURL=http_resources_service.d.ts.map