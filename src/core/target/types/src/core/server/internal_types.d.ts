import { Type } from '@osd/config-schema';
import { CapabilitiesSetup, CapabilitiesStart } from './capabilities';
import { ConfigDeprecationProvider, InternalDynamicConfigServiceSetup, InternalDynamicConfigServiceStart } from './config';
import { ContextSetup } from './context';
import { InternalOpenSearchServiceSetup, InternalOpenSearchServiceStart } from './opensearch';
import { InternalHttpServiceSetup, InternalHttpServiceStart } from './http';
import { InternalSavedObjectsServiceSetup, InternalSavedObjectsServiceStart } from './saved_objects';
import { InternalUiSettingsServiceSetup, InternalUiSettingsServiceStart } from './ui_settings';
import { InternalEnvironmentServiceSetup } from './environment';
import { InternalMetricsServiceSetup, InternalMetricsServiceStart } from './metrics';
import { InternalRenderingServiceSetup } from './rendering';
import { InternalHttpResourcesSetup } from './http_resources';
import { InternalStatusServiceSetup } from './status';
import { AuditTrailSetup, AuditTrailStart } from './audit_trail';
import { InternalLoggingServiceSetup } from './logging';
import { CoreUsageDataStart } from './core_usage_data';
import { InternalSecurityServiceSetup } from './security/types';
import { CrossCompatibilityServiceStart } from './cross_compatibility';
import { InternalWorkspaceServiceSetup, InternalWorkspaceServiceStart } from './workspace';
/** @internal */
export interface InternalCoreSetup {
    capabilities: CapabilitiesSetup;
    context: ContextSetup;
    http: InternalHttpServiceSetup;
    opensearch: InternalOpenSearchServiceSetup;
    savedObjects: InternalSavedObjectsServiceSetup;
    status: InternalStatusServiceSetup;
    uiSettings: InternalUiSettingsServiceSetup;
    environment: InternalEnvironmentServiceSetup;
    rendering: InternalRenderingServiceSetup;
    httpResources: InternalHttpResourcesSetup;
    auditTrail: AuditTrailSetup;
    logging: InternalLoggingServiceSetup;
    metrics: InternalMetricsServiceSetup;
    security: InternalSecurityServiceSetup;
    dynamicConfig: InternalDynamicConfigServiceSetup;
    workspace: InternalWorkspaceServiceSetup;
}
/**
 * @internal
 */
export interface InternalCoreStart {
    capabilities: CapabilitiesStart;
    opensearch: InternalOpenSearchServiceStart;
    http: InternalHttpServiceStart;
    metrics: InternalMetricsServiceStart;
    savedObjects: InternalSavedObjectsServiceStart;
    uiSettings: InternalUiSettingsServiceStart;
    auditTrail: AuditTrailStart;
    coreUsageData: CoreUsageDataStart;
    crossCompatibility: CrossCompatibilityServiceStart;
    dynamicConfig: InternalDynamicConfigServiceStart;
    workspace: InternalWorkspaceServiceStart;
}
/**
 * @internal
 */
export interface ServiceConfigDescriptor<T = any> {
    path: string;
    /**
     * Schema to use to validate the configuration.
     */
    schema: Type<T>;
    /**
     * Provider for the {@link ConfigDeprecation} to apply to the plugin configuration.
     */
    deprecations?: ConfigDeprecationProvider;
}
//# sourceMappingURL=internal_types.d.ts.map