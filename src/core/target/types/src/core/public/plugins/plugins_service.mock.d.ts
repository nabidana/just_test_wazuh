/// <reference types="jest" />
import { PluginsService, PluginsServiceSetup } from './plugins_service';
export declare const pluginsServiceMock: {
    create: () => jest.Mocked<Pick<PluginsService, "start" | "stop" | "setup" | "getOpaqueIds">>;
    createSetupContract: () => PluginsServiceSetup;
    createStartContract: () => PluginsServiceSetup;
};
//# sourceMappingURL=plugins_service.mock.d.ts.map