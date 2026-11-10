/// <reference types="jest" />
import { ChromeService, InternalChromeStart } from './';
export declare const chromeServiceMock: {
    create: () => jest.Mocked<Pick<ChromeService, "start" | "stop" | "setup">>;
    createStartContract: () => DeeplyMockedKeys<InternalChromeStart>;
    createSetupContract: () => {
        registerCollapsibleNavHeader: jest.Mock<any, any>;
        navGroup: {
            addNavLinksToGroup: jest.Mock<any, any>;
            getNavGroupEnabled: jest.Mock<any, any>;
            registerNavGroupUpdater: jest.Mock<any, any>;
        };
        globalSearch: {
            registerSearchCommand: jest.Mock<any, any>;
        };
    };
};
//# sourceMappingURL=chrome_service.mock.d.ts.map