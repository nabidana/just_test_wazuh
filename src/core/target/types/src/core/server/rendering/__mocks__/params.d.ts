/// <reference types="jest" />
export declare const mockRenderingServiceParams: DeeplyMockedKeys<import("../../core_context").CoreContext>;
export declare const mockRenderingSetupDeps: {
    http: import("../../http/http_service.mock").InternalHttpServiceSetupMock;
    uiPlugins: {
        browserConfigs: Map<any, any>;
        internal: Map<any, any>;
        public: Map<any, any>;
    };
    status: jest.Mocked<import("../../status").InternalStatusServiceSetup>;
    dynamicConfig: jest.Mocked<import("../../config").InternalDynamicConfigServiceSetup>;
};
//# sourceMappingURL=params.d.ts.map