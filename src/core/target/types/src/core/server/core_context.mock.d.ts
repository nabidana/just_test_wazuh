/// <reference types="jest" />
import { CoreContext } from './core_context';
import { Env, IConfigService } from './config';
import { ILoggingSystem } from './logging';
import { IDynamicConfigService } from './config/dynamic_config_service';
declare function create({ env, logger, configService, dynamicConfigService, }?: {
    env?: Env;
    logger?: jest.Mocked<ILoggingSystem>;
    configService?: jest.Mocked<IConfigService>;
    dynamicConfigService?: jest.Mocked<IDynamicConfigService>;
}): DeeplyMockedKeys<CoreContext>;
export declare const mockCoreContext: {
    create: typeof create;
};
export {};
//# sourceMappingURL=core_context.mock.d.ts.map