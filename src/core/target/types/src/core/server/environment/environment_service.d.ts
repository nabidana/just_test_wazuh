import { CoreContext } from '../core_context';
/**
 * @internal
 */
export interface InternalEnvironmentServiceSetup {
    /**
     * Retrieve the Kibana instance uuid.
     */
    instanceUuid: string;
}
/** @internal */
export declare class EnvironmentService {
    private readonly log;
    private readonly configService;
    private uuid;
    constructor(core: CoreContext);
    setup(): Promise<{
        instanceUuid: string;
    }>;
}
//# sourceMappingURL=environment_service.d.ts.map