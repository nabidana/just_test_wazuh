/// <reference types="jest" />
import { ByteSizeValue } from '@osd/config-schema';
import { PluginInitializerContext, CoreSetup, CoreStart, StartServicesAccessor } from '.';
import { opensearchServiceMock } from './opensearch/opensearch_service.mock';
import { savedObjectsClientMock } from './saved_objects/service/saved_objects_client.mock';
export { configServiceMock } from './config/mocks';
export { dynamicConfigServiceMock } from './config/mocks';
export { httpServerMock } from './http/http_server.mocks';
export { httpResourcesMock } from './http_resources/http_resources_service.mock';
export { sessionStorageMock } from './http/cookie_session_storage.mocks';
export { opensearchServiceMock } from './opensearch/opensearch_service.mock';
export { httpServiceMock } from './http/http_service.mock';
export { loggingSystemMock } from './logging/logging_system.mock';
export { savedObjectsRepositoryMock } from './saved_objects/service/lib/repository.mock';
export { savedObjectsServiceMock } from './saved_objects/saved_objects_service.mock';
export { migrationMocks } from './saved_objects/migrations/mocks';
export { typeRegistryMock as savedObjectsTypeRegistryMock } from './saved_objects/saved_objects_type_registry.mock';
export { uiSettingsServiceMock } from './ui_settings/ui_settings_service.mock';
export { metricsServiceMock } from './metrics/metrics_service.mock';
export { renderingMock } from './rendering/rendering_service.mock';
export { statusServiceMock } from './status/status_service.mock';
export { contextServiceMock } from './context/context_service.mock';
export { capabilitiesServiceMock } from './capabilities/capabilities_service.mock';
export { coreUsageDataServiceMock } from './core_usage_data/core_usage_data_service.mock';
export { crossCompatibilityServiceMock } from './cross_compatibility/cross_compatibility.mock';
export declare function pluginInitializerContextConfigMock<T>(config: T): jest.Mocked<{
    legacy: {
        globalConfig$: import("rxjs").Observable<Readonly<{
            opensearchDashboards: Readonly<{
                readonly index: string;
                readonly configIndex: string;
                readonly autocompleteTerminateAfter: Readonly<{
                    clone: () => import("moment").Duration;
                    humanize: {
                        (argWithSuffix?: boolean | undefined, argThresholds?: import("moment").argThresholdOpts | undefined): string;
                        (argThresholds?: import("moment").argThresholdOpts | undefined): string;
                    };
                    abs: () => import("moment").Duration;
                    as: (units: import("moment").unitOfTime.Base) => number;
                    get: (units: import("moment").unitOfTime.Base) => number;
                    milliseconds: () => number;
                    asMilliseconds: () => number;
                    seconds: () => number;
                    asSeconds: () => number;
                    minutes: () => number;
                    asMinutes: () => number;
                    hours: () => number;
                    asHours: () => number;
                    days: () => number;
                    asDays: () => number;
                    weeks: () => number;
                    asWeeks: () => number;
                    months: () => number;
                    asMonths: () => number;
                    years: () => number;
                    asYears: () => number;
                    add: (inp?: import("moment").DurationInputArg1, unit?: "m" | "y" | "s" | "month" | "week" | "h" | "d" | "w" | "M" | "year" | "years" | "months" | "weeks" | "day" | "days" | "hour" | "hours" | "minute" | "minutes" | "second" | "seconds" | "millisecond" | "milliseconds" | "ms" | "quarter" | "quarters" | "Q" | undefined) => import("moment").Duration;
                    subtract: (inp?: import("moment").DurationInputArg1, unit?: "m" | "y" | "s" | "month" | "week" | "h" | "d" | "w" | "M" | "year" | "years" | "months" | "weeks" | "day" | "days" | "hour" | "hours" | "minute" | "minutes" | "second" | "seconds" | "millisecond" | "milliseconds" | "ms" | "quarter" | "quarters" | "Q" | undefined) => import("moment").Duration;
                    locale: {
                        (): string;
                        (locale: import("moment").LocaleSpecifier): import("moment").Duration;
                    };
                    localeData: () => import("moment").Locale;
                    toISOString: () => string;
                    toJSON: () => string;
                    isValid: () => boolean;
                    lang: {
                        (locale: import("moment").LocaleSpecifier): import("moment").Moment;
                        (): import("moment").Locale;
                    };
                    toIsoString: () => string;
                }>;
                readonly autocompleteTimeout: Readonly<{
                    clone: () => import("moment").Duration;
                    humanize: {
                        (argWithSuffix?: boolean | undefined, argThresholds?: import("moment").argThresholdOpts | undefined): string;
                        (argThresholds?: import("moment").argThresholdOpts | undefined): string;
                    };
                    abs: () => import("moment").Duration;
                    as: (units: import("moment").unitOfTime.Base) => number;
                    get: (units: import("moment").unitOfTime.Base) => number;
                    milliseconds: () => number;
                    asMilliseconds: () => number;
                    seconds: () => number;
                    asSeconds: () => number;
                    minutes: () => number;
                    asMinutes: () => number;
                    hours: () => number;
                    asHours: () => number;
                    days: () => number;
                    asDays: () => number;
                    weeks: () => number;
                    asWeeks: () => number;
                    months: () => number;
                    asMonths: () => number;
                    years: () => number;
                    asYears: () => number;
                    add: (inp?: import("moment").DurationInputArg1, unit?: "m" | "y" | "s" | "month" | "week" | "h" | "d" | "w" | "M" | "year" | "years" | "months" | "weeks" | "day" | "days" | "hour" | "hours" | "minute" | "minutes" | "second" | "seconds" | "millisecond" | "milliseconds" | "ms" | "quarter" | "quarters" | "Q" | undefined) => import("moment").Duration;
                    subtract: (inp?: import("moment").DurationInputArg1, unit?: "m" | "y" | "s" | "month" | "week" | "h" | "d" | "w" | "M" | "year" | "years" | "months" | "weeks" | "day" | "days" | "hour" | "hours" | "minute" | "minutes" | "second" | "seconds" | "millisecond" | "milliseconds" | "ms" | "quarter" | "quarters" | "Q" | undefined) => import("moment").Duration;
                    locale: {
                        (): string;
                        (locale: import("moment").LocaleSpecifier): import("moment").Duration;
                    };
                    localeData: () => import("moment").Locale;
                    toISOString: () => string;
                    toJSON: () => string;
                    isValid: () => boolean;
                    lang: {
                        (locale: import("moment").LocaleSpecifier): import("moment").Moment;
                        (): import("moment").Locale;
                    };
                    toIsoString: () => string;
                }>;
                readonly dashboardAdmin: Readonly<{
                    readonly users: import("@osd/utility-types").RecursiveReadonlyArray<string>;
                    readonly groups: import("@osd/utility-types").RecursiveReadonlyArray<string>;
                }>;
                readonly futureNavigation: boolean;
            }>;
            opensearch: Readonly<{
                readonly requestTimeout: Readonly<{
                    clone: () => import("moment").Duration;
                    humanize: {
                        (argWithSuffix?: boolean | undefined, argThresholds?: import("moment").argThresholdOpts | undefined): string;
                        (argThresholds?: import("moment").argThresholdOpts | undefined): string;
                    };
                    abs: () => import("moment").Duration;
                    as: (units: import("moment").unitOfTime.Base) => number;
                    get: (units: import("moment").unitOfTime.Base) => number;
                    milliseconds: () => number;
                    asMilliseconds: () => number;
                    seconds: () => number;
                    asSeconds: () => number;
                    minutes: () => number;
                    asMinutes: () => number;
                    hours: () => number;
                    asHours: () => number;
                    days: () => number;
                    asDays: () => number;
                    weeks: () => number;
                    asWeeks: () => number;
                    months: () => number;
                    asMonths: () => number;
                    years: () => number;
                    asYears: () => number;
                    add: (inp?: import("moment").DurationInputArg1, unit?: "m" | "y" | "s" | "month" | "week" | "h" | "d" | "w" | "M" | "year" | "years" | "months" | "weeks" | "day" | "days" | "hour" | "hours" | "minute" | "minutes" | "second" | "seconds" | "millisecond" | "milliseconds" | "ms" | "quarter" | "quarters" | "Q" | undefined) => import("moment").Duration;
                    subtract: (inp?: import("moment").DurationInputArg1, unit?: "m" | "y" | "s" | "month" | "week" | "h" | "d" | "w" | "M" | "year" | "years" | "months" | "weeks" | "day" | "days" | "hour" | "hours" | "minute" | "minutes" | "second" | "seconds" | "millisecond" | "milliseconds" | "ms" | "quarter" | "quarters" | "Q" | undefined) => import("moment").Duration;
                    locale: {
                        (): string;
                        (locale: import("moment").LocaleSpecifier): import("moment").Duration;
                    };
                    localeData: () => import("moment").Locale;
                    toISOString: () => string;
                    toJSON: () => string;
                    isValid: () => boolean;
                    lang: {
                        (locale: import("moment").LocaleSpecifier): import("moment").Moment;
                        (): import("moment").Locale;
                    };
                    toIsoString: () => string;
                }>;
                readonly shardTimeout: Readonly<{
                    clone: () => import("moment").Duration;
                    humanize: {
                        (argWithSuffix?: boolean | undefined, argThresholds?: import("moment").argThresholdOpts | undefined): string;
                        (argThresholds?: import("moment").argThresholdOpts | undefined): string;
                    };
                    abs: () => import("moment").Duration;
                    as: (units: import("moment").unitOfTime.Base) => number;
                    get: (units: import("moment").unitOfTime.Base) => number;
                    milliseconds: () => number;
                    asMilliseconds: () => number;
                    seconds: () => number;
                    asSeconds: () => number;
                    minutes: () => number;
                    asMinutes: () => number;
                    hours: () => number;
                    asHours: () => number;
                    days: () => number;
                    asDays: () => number;
                    weeks: () => number;
                    asWeeks: () => number;
                    months: () => number;
                    asMonths: () => number;
                    years: () => number;
                    asYears: () => number;
                    add: (inp?: import("moment").DurationInputArg1, unit?: "m" | "y" | "s" | "month" | "week" | "h" | "d" | "w" | "M" | "year" | "years" | "months" | "weeks" | "day" | "days" | "hour" | "hours" | "minute" | "minutes" | "second" | "seconds" | "millisecond" | "milliseconds" | "ms" | "quarter" | "quarters" | "Q" | undefined) => import("moment").Duration;
                    subtract: (inp?: import("moment").DurationInputArg1, unit?: "m" | "y" | "s" | "month" | "week" | "h" | "d" | "w" | "M" | "year" | "years" | "months" | "weeks" | "day" | "days" | "hour" | "hours" | "minute" | "minutes" | "second" | "seconds" | "millisecond" | "milliseconds" | "ms" | "quarter" | "quarters" | "Q" | undefined) => import("moment").Duration;
                    locale: {
                        (): string;
                        (locale: import("moment").LocaleSpecifier): import("moment").Duration;
                    };
                    localeData: () => import("moment").Locale;
                    toISOString: () => string;
                    toJSON: () => string;
                    isValid: () => boolean;
                    lang: {
                        (locale: import("moment").LocaleSpecifier): import("moment").Moment;
                        (): import("moment").Locale;
                    };
                    toIsoString: () => string;
                }>;
                readonly pingTimeout: Readonly<{
                    clone: () => import("moment").Duration;
                    humanize: {
                        (argWithSuffix?: boolean | undefined, argThresholds?: import("moment").argThresholdOpts | undefined): string;
                        (argThresholds?: import("moment").argThresholdOpts | undefined): string;
                    };
                    abs: () => import("moment").Duration;
                    as: (units: import("moment").unitOfTime.Base) => number;
                    get: (units: import("moment").unitOfTime.Base) => number;
                    milliseconds: () => number;
                    asMilliseconds: () => number;
                    seconds: () => number;
                    asSeconds: () => number;
                    minutes: () => number;
                    asMinutes: () => number;
                    hours: () => number;
                    asHours: () => number;
                    days: () => number;
                    asDays: () => number;
                    weeks: () => number;
                    asWeeks: () => number;
                    months: () => number;
                    asMonths: () => number;
                    years: () => number;
                    asYears: () => number;
                    add: (inp?: import("moment").DurationInputArg1, unit?: "m" | "y" | "s" | "month" | "week" | "h" | "d" | "w" | "M" | "year" | "years" | "months" | "weeks" | "day" | "days" | "hour" | "hours" | "minute" | "minutes" | "second" | "seconds" | "millisecond" | "milliseconds" | "ms" | "quarter" | "quarters" | "Q" | undefined) => import("moment").Duration;
                    subtract: (inp?: import("moment").DurationInputArg1, unit?: "m" | "y" | "s" | "month" | "week" | "h" | "d" | "w" | "M" | "year" | "years" | "months" | "weeks" | "day" | "days" | "hour" | "hours" | "minute" | "minutes" | "second" | "seconds" | "millisecond" | "milliseconds" | "ms" | "quarter" | "quarters" | "Q" | undefined) => import("moment").Duration;
                    locale: {
                        (): string;
                        (locale: import("moment").LocaleSpecifier): import("moment").Duration;
                    };
                    localeData: () => import("moment").Locale;
                    toISOString: () => string;
                    toJSON: () => string;
                    isValid: () => boolean;
                    lang: {
                        (locale: import("moment").LocaleSpecifier): import("moment").Moment;
                        (): import("moment").Locale;
                    };
                    toIsoString: () => string;
                }>;
            }>;
            path: Readonly<{
                readonly data: string;
            }>;
            savedObjects: Readonly<{
                readonly maxImportPayloadBytes: Readonly<{
                    isGreaterThan: (other: ByteSizeValue) => boolean;
                    isLessThan: (other: ByteSizeValue) => boolean;
                    isEqualTo: (other: ByteSizeValue) => boolean;
                    getValueInBytes: () => number;
                    toString: (returnUnit?: "b" | "kb" | "mb" | "gb" | undefined) => string;
                }>;
                readonly permission: Readonly<{
                    readonly enabled: boolean;
                }>;
            }>;
        }>>;
    };
    create: <T_1 = T>() => import("rxjs").Observable<T_1>;
    createIfExists: <T_2 = T>() => import("rxjs").Observable<T_2 | undefined>;
}>;
declare function pluginInitializerContextMock<T>(config?: T): PluginInitializerContext<T>;
declare type CoreSetupMockType = MockedKeys<CoreSetup> & {
    opensearch: ReturnType<typeof opensearchServiceMock.createSetup>;
    getStartServices: jest.MockedFunction<StartServicesAccessor<any, any>>;
};
declare function createCoreSetupMock({ pluginStartDeps, pluginStartContract, }?: {
    pluginStartDeps?: object;
    pluginStartContract?: any;
}): CoreSetupMockType;
declare function createCoreStartMock(): MockedKeys<CoreStart>;
declare function createInternalCoreSetupMock(): {
    capabilities: jest.Mocked<import(".").CapabilitiesSetup>;
    context: jest.Mocked<import(".").ContextSetup>;
    opensearch: jest.Mocked<import("./opensearch").InternalOpenSearchServiceSetup & {
        legacy: {
            client: jest.Mocked<Pick<import(".").LegacyClusterClient, "callAsInternalUser" | "asScoped">>;
        };
    }>;
    http: import("./http/http_service.mock").InternalHttpServiceSetupMock;
    savedObjects: jest.Mocked<import("./saved_objects").InternalSavedObjectsServiceSetup>;
    status: jest.Mocked<import("./status").InternalStatusServiceSetup>;
    environment: jest.Mocked<import("./environment").InternalEnvironmentServiceSetup>;
    httpResources: {
        createRegistrar: jest.Mock<jest.Mocked<import(".").HttpResources>, []>;
    };
    rendering: jest.Mocked<import("./rendering").InternalRenderingServiceSetup>;
    uiSettings: jest.Mocked<import("./ui_settings").InternalUiSettingsServiceSetup>;
    auditTrail: jest.Mocked<import(".").AuditTrailSetup>;
    logging: jest.Mocked<import("./logging").InternalLoggingServiceSetup>;
    metrics: jest.Mocked<import(".").MetricsServiceSetup>;
    security: jest.Mocked<import("./security/types").SecurityServiceSetup>;
    dynamicConfig: jest.Mocked<import("./config").InternalDynamicConfigServiceSetup>;
    workspace: jest.Mocked<import("./workspace").InternalWorkspaceServiceSetup>;
};
declare function createInternalCoreStartMock(): {
    capabilities: jest.Mocked<import(".").CapabilitiesStart>;
    opensearch: import("./opensearch/opensearch_service.mock").MockedOpenSearchServiceSetup & {
        client: import("./opensearch/client/mocks").ClusterClientMock;
        createClient: jest.MockedFunction<(name: string, config?: Partial<import(".").OpenSearchClientConfig> | undefined) => import("./opensearch/client/mocks").CustomClusterClientMock>;
    };
    http: import("./http/http_service.mock").InternalHttpServiceStartMock;
    metrics: jest.Mocked<import(".").MetricsServiceSetup>;
    savedObjects: jest.Mocked<import(".").SavedObjectsServiceStart>;
    uiSettings: jest.Mocked<import(".").UiSettingsServiceStart>;
    auditTrail: jest.Mocked<import(".").AuditorFactory>;
    coreUsageData: jest.Mocked<import(".").CoreUsageDataStart>;
    crossCompatibility: jest.Mocked<import(".").CrossCompatibilityServiceStart>;
    dynamicConfig: jest.Mocked<import("./config").InternalDynamicConfigServiceStart>;
    workspace: jest.Mocked<import("./workspace").InternalWorkspaceServiceStart>;
};
declare function createCoreRequestHandlerContextMock(): {
    savedObjects: {
        client: jest.Mocked<Pick<import(".").SavedObjectsClient, "find" | "update" | "get" | "create" | "bulkCreate" | "checkConflicts" | "delete" | "deleteByWorkspace" | "bulkGet" | "addToNamespaces" | "deleteFromNamespaces" | "bulkUpdate" | "errors" | "deleteFromWorkspaces" | "addToWorkspaces">>;
        typeRegistry: jest.Mocked<Pick<import(".").SavedObjectTypeRegistry, "getType" | "getVisibleTypes" | "getAllTypes" | "getImportableAndExportableTypes" | "isNamespaceAgnostic" | "isSingleNamespace" | "isMultiNamespace" | "isHidden" | "getIndex" | "isImportableAndExportable"> & Pick<import(".").SavedObjectTypeRegistry, "registerType">>;
    };
    opensearch: {
        client: import("./opensearch/client/mocks").ScopedClusterClientMock;
        legacy: {
            client: jest.Mocked<Pick<import(".").LegacyScopedClusterClient, "callAsInternalUser" | "callAsCurrentUser">>;
        };
    };
    uiSettings: {
        client: jest.Mocked<import(".").IUiSettingsClient>;
    };
    auditor: jest.Mocked<import(".").Auditor>;
    dynamicConfig: {
        client: Pick<import("./config").IInternalDynamicConfigurationClient, "getConfig" | "bulkGetConfigs" | "listConfigs">;
        asyncLocalStore: import("./config").AsyncLocalStorageContext | undefined;
    };
};
export declare const coreMock: {
    createSetup: typeof createCoreSetupMock;
    createStart: typeof createCoreStartMock;
    createInternalSetup: typeof createInternalCoreSetupMock;
    createInternalStart: typeof createInternalCoreStartMock;
    createPluginInitializerContext: typeof pluginInitializerContextMock;
    createRequestHandlerContext: typeof createCoreRequestHandlerContextMock;
};
export { savedObjectsClientMock };
//# sourceMappingURL=mocks.d.ts.map