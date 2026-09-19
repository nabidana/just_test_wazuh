/// <reference types="jest" />
import type { PublicMethodsOf } from '@osd/utility-types';
import { PluginsService, PluginsServiceSetup } from './plugins_service';
declare type PluginsServiceMock = jest.Mocked<PublicMethodsOf<PluginsService>>;
declare function createUiPlugins(): {
    browserConfigs: Map<any, any>;
    internal: Map<any, any>;
    public: Map<any, any>;
};
export declare const pluginServiceMock: {
    create: () => PluginsServiceMock;
    createSetupContract: () => PluginsServiceSetup;
    createStartContract: () => {
        contracts: Map<any, any>;
    };
    createUiPlugins: typeof createUiPlugins;
};
export {};
//# sourceMappingURL=plugins_service.mock.d.ts.map