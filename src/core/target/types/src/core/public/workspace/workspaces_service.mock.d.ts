/// <reference types="jest" />
/// <reference types="@testing-library/jest-dom" />
import { BehaviorSubject } from 'rxjs';
import type { PublicMethodsOf } from '@osd/utility-types';
import { IWorkspaceClient, WorkspaceObject } from './types';
import { WorkspacesService } from './workspaces_service';
export declare type WorkspacesServiceContract = PublicMethodsOf<WorkspacesService>;
export declare const workspacesServiceMock: {
    create: () => jest.Mocked<WorkspacesServiceContract>;
    createSetupContract: () => {
        currentWorkspaceId$: BehaviorSubject<string>;
        workspaceList$: BehaviorSubject<WorkspaceObject[]>;
        currentWorkspace$: BehaviorSubject<WorkspaceObject | null>;
        initialized$: BehaviorSubject<boolean>;
        setClient: jest.Mock<any, any>;
    };
    createStartContract: () => {
        currentWorkspaceId$: BehaviorSubject<string>;
        workspaceList$: BehaviorSubject<WorkspaceObject[]>;
        currentWorkspace$: BehaviorSubject<WorkspaceObject | null>;
        initialized$: BehaviorSubject<boolean>;
        client$: BehaviorSubject<IWorkspaceClient | null>;
    };
};
//# sourceMappingURL=workspaces_service.mock.d.ts.map