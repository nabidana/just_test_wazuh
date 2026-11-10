/// <reference types="jest" />
import { CoreUsageDataService } from './core_usage_data_service';
import { CoreUsageDataStart } from './types';
export declare const coreUsageDataServiceMock: {
    create: () => jest.Mocked<Pick<CoreUsageDataService, "start" | "stop" | "setup">>;
    createStartContract: () => jest.Mocked<CoreUsageDataStart>;
};
//# sourceMappingURL=core_usage_data_service.mock.d.ts.map