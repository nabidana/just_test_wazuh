/// <reference types="jest" />
import { MetricsService } from './metrics_service';
import { MetricsServiceSetup } from './types';
export declare const metricsServiceMock: {
    create: () => jest.Mocked<Pick<MetricsService, "start" | "stop" | "setup">>;
    createSetupContract: () => jest.Mocked<MetricsServiceSetup>;
    createStartContract: () => jest.Mocked<MetricsServiceSetup>;
    createInternalSetupContract: () => jest.Mocked<MetricsServiceSetup>;
    createInternalStartContract: () => jest.Mocked<MetricsServiceSetup>;
};
//# sourceMappingURL=metrics_service.mock.d.ts.map