import { CoreService } from '../../types';
import { CoreContext } from '../core_context';
export interface InternalWorkspaceServiceSetup {
    isWorkspaceEnabled: () => boolean;
}
export interface InternalWorkspaceServiceStart {
    isWorkspaceEnabled: () => boolean;
}
/** @internal */
export declare class WorkspaceService implements CoreService<InternalWorkspaceServiceSetup, InternalWorkspaceServiceStart> {
    private readonly coreContext;
    private readonly log;
    private readonly config$;
    constructor(coreContext: CoreContext);
    setup(): Promise<InternalWorkspaceServiceSetup>;
    start(): Promise<InternalWorkspaceServiceStart>;
    stop(): Promise<void>;
}
//# sourceMappingURL=workspace_service.d.ts.map