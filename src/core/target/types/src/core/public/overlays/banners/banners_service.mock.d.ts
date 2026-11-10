/// <reference types="jest" />
import { OverlayBannersStart, OverlayBannersService } from './banners_service';
export declare const overlayBannersServiceMock: {
    create: () => jest.Mocked<Pick<OverlayBannersService, "start" | "stop">>;
    createStartContract: () => jest.Mocked<OverlayBannersStart>;
};
//# sourceMappingURL=banners_service.mock.d.ts.map