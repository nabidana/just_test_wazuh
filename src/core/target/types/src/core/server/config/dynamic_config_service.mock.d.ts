/// <reference types="jest" />
import { AsyncLocalStorageContext, InternalDynamicConfigServiceSetup, InternalDynamicConfigServiceStart } from './types';
export declare const dynamicConfigServiceMock: {
    create: (mockClientReturnValues?: Pick<import("./service/configuration_client.mock").InternalDynamicConfigurationClientMockProps, "getConfig" | "bulkGetConfigs" | "listConfigs"> | undefined, mockAsyncLocalStoreValues?: AsyncLocalStorageContext | undefined) => jest.Mocked<Pick<import("./dynamic_config_service").DynamicConfigService, "start" | "stop" | "setup" | "setSchema" | "registerRoutesAndHandlers" | "hasDefaultConfigs">>;
    createInternalSetupContract: () => jest.Mocked<InternalDynamicConfigServiceSetup>;
    createInternalStartContract: (mockClientReturnValues?: Pick<import("./service/configuration_client.mock").InternalDynamicConfigurationClientMockProps, "getConfig" | "bulkGetConfigs" | "listConfigs"> | undefined, mockAsyncLocalStoreValues?: AsyncLocalStorageContext | undefined) => jest.Mocked<InternalDynamicConfigServiceStart>;
    createSetupContract: () => jest.Mocked<InternalDynamicConfigServiceSetup>;
    createStartContract: (mockClientReturnValues?: Pick<import("./service/configuration_client.mock").InternalDynamicConfigurationClientMockProps, "getConfig" | "bulkGetConfigs" | "listConfigs"> | undefined, mockAsyncLocalStoreValues?: AsyncLocalStorageContext | undefined) => jest.Mocked<InternalDynamicConfigServiceStart>;
};
//# sourceMappingURL=dynamic_config_service.mock.d.ts.map