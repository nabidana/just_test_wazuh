/// <reference types="jest" />
import { SidecarService, OverlaySidecarStart } from './sidecar_service';
export declare const overlaySidecarServiceMock: {
    create: () => jest.Mocked<Pick<SidecarService, "start">>;
    createStartContract: () => jest.Mocked<OverlaySidecarStart>;
};
//# sourceMappingURL=sidecar_service.mock.d.ts.map