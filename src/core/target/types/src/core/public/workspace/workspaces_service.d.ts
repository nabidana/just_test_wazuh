import { BehaviorSubject } from 'rxjs';
import { CoreService } from '../../types';
import { IWorkspaceClient, WorkspaceObject } from './types';
interface WorkspaceObservables {
    /**
     * Indicates the current activated workspace id, the value should be changed every time
     * when switching to a different workspace
     */
    currentWorkspaceId$: BehaviorSubject<string>;
    /**
     * The workspace that is derived from `currentWorkspaceId` and `workspaceList`, if
     * `currentWorkspaceId` cannot be found from `workspaceList`, it will return an error
     *
     * This value MUST NOT set manually from outside of WorkspacesService
     */
    currentWorkspace$: BehaviorSubject<WorkspaceObject | null>;
    /**
     * The list of available workspaces. This workspace list should be set by whoever
     * implemented the workspace functionalities, core workspace module should not be
     * aware of how to populate the workspace list.
     */
    workspaceList$: BehaviorSubject<WorkspaceObject[]>;
    /**
     * This is a flag which indicates the WorkspacesService module is initialized and ready
     * for consuming by others. For example, the `workspaceList` has been set, etc
     */
    initialized$: BehaviorSubject<boolean>;
}
export declare type WorkspacesSetup = WorkspaceObservables & {
    setClient: (client: IWorkspaceClient) => void;
};
export declare type WorkspacesStart = WorkspaceObservables & {
    client$: BehaviorSubject<IWorkspaceClient | null>;
};
export declare class WorkspacesService implements CoreService<WorkspacesSetup, WorkspacesStart> {
    private currentWorkspaceId$;
    private workspaceList$;
    private currentWorkspace$;
    private initialized$;
    private client$;
    constructor();
    setup(): WorkspacesSetup;
    start(): WorkspacesStart;
    stop(): Promise<void>;
}
export {};
//# sourceMappingURL=workspaces_service.d.ts.map