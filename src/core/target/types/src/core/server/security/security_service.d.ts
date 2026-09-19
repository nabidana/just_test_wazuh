import { CoreService } from '../../types';
import { IReadOnlyService, InternalSecurityServiceSetup } from './types';
import { CoreContext } from '../core_context';
export declare class SecurityService implements CoreService<InternalSecurityServiceSetup> {
    private logger;
    private readonlyService;
    constructor(coreContext: CoreContext);
    setup(): {
        registerReadonlyService(service: IReadOnlyService): void;
        readonlyService(): IReadOnlyService;
    };
    start(): void;
    stop(): void;
}
//# sourceMappingURL=security_service.d.ts.map