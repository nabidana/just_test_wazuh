/// <reference types="jest" />
export declare const mockHttpService: jest.Mocked<Pick<import("./http").HttpService, "start" | "stop" | "setup" | "getStartContract">>;
export declare const mockPluginsService: jest.Mocked<Pick<import("./plugins").PluginsService, "start" | "stop" | "setup" | "discover">>;
export declare const mockOpenSearchService: jest.Mocked<Pick<import("./opensearch").OpenSearchService, "start" | "stop" | "setup">>;
export declare const mockLegacyService: jest.Mocked<Pick<import("./legacy").LegacyService, import("@osd/utility-types").MethodKeysOf<import("./legacy").LegacyService>> & {
    legacyId: symbol;
}>;
export declare const mockConfigService: jest.Mocked<Pick<import("@osd/config").ConfigService, "validate" | "getConfig$" | "setSchema" | "addDeprecationProvider" | "atPath" | "optionalAtPath" | "isEnabledAtPath" | "getUnusedPaths" | "getUsedPaths">>;
export declare const mockSavedObjectsService: jest.Mocked<Pick<import("./saved_objects").SavedObjectsService, "start" | "stop" | "setup">>;
export declare const mockContextService: jest.Mocked<Pick<import("./context").ContextService, "setup">>;
export declare const mockUiSettingsService: jest.Mocked<Pick<import("./ui_settings").UiSettingsService, "start" | "stop" | "setup">>;
export declare const mockEnsureValidConfiguration: jest.Mock<any, any>;
import { mockRenderingService } from './rendering/__mocks__/rendering_service';
export { mockRenderingService };
export declare const mockEnvironmentService: jest.Mocked<Pick<import("./environment").EnvironmentService, "setup">>;
export declare const mockMetricsService: jest.Mocked<Pick<import("./metrics").MetricsService, "start" | "stop" | "setup">>;
export declare const mockStatusService: jest.Mocked<Pick<import("./status").StatusService, "start" | "stop" | "setup">>;
export declare const mockLoggingService: jest.Mocked<Pick<import("./logging").LoggingService, "start" | "stop" | "setup">>;
export declare const mockAuditTrailService: jest.Mocked<Pick<import("./audit_trail").AuditTrailService, "start" | "stop" | "setup">>;
export declare const mockDynamicConfigService: jest.Mocked<Pick<import("./config/dynamic_config_service").DynamicConfigService, "start" | "stop" | "setup" | "setSchema" | "registerRoutesAndHandlers" | "hasDefaultConfigs">>;
//# sourceMappingURL=server.test.mocks.d.ts.map