/// <reference types="jest" />
import { InternalWorkspaceServiceSetup, InternalWorkspaceServiceStart } from './workspace_service';
export declare const workspaceServiceMock: {
    create: () => jest.Mocked<Pick<import("./workspace_service").WorkspaceService, "start" | "stop" | "setup">>;
    createInternalSetupContract: () => jest.Mocked<InternalWorkspaceServiceSetup>;
    createInternalStartContract: () => jest.Mocked<InternalWorkspaceServiceStart>;
    createSetupContract: () => jest.Mocked<InternalWorkspaceServiceSetup>;
    createStartContract: () => jest.Mocked<InternalWorkspaceServiceStart>;
};
//# sourceMappingURL=mocks.d.ts.map