/// <reference types="jest" />
import { LoadingCountSetup, LoadingCountService } from './loading_count_service';
export declare const loadingCountServiceMock: {
    create: () => jest.Mocked<Pick<LoadingCountService, "start" | "stop" | "setup">>;
    createSetupContract: () => jest.Mocked<LoadingCountSetup>;
    createStartContract: () => jest.Mocked<LoadingCountSetup>;
};
//# sourceMappingURL=loading_count_service.mock.d.ts.map