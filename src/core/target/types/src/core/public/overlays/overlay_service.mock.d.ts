/// <reference types="jest" />
import { OverlayService, OverlayStart } from './overlay_service';
export declare const overlayServiceMock: {
    create: () => jest.Mocked<Pick<OverlayService, "start">>;
    createStartContract: () => DeeplyMockedKeys<OverlayStart>;
};
//# sourceMappingURL=overlay_service.mock.d.ts.map