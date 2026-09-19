import { OpenSearchDashboardsRequest } from '../http';
/**
 * Event to audit.
 * @public
 *
 * @remarks
 * Not a complete interface.
 */
export interface AuditableEvent {
    message: string;
    type: string;
}
/**
 * Provides methods to log user actions and access events.
 * @public
 */
export interface Auditor {
    /**
     * Add a record to audit log.
     * Service attaches to a log record:
     * - metadata about an end-user initiating an operation
     * - scope name, if presents
     *
     * @example
     * How to add a record in audit log:
     * ```typescript
     * router.get({ path: '/my_endpoint', validate: false }, async (context, request, response) => {
     *   context.core.auditor.withAuditScope('my_plugin_operation');
     *   const value = await context.core.opensearch.legacy.client.callAsCurrentUser('...');
     *   context.core.add({ type: 'operation.type', message: 'perform an operation in ... endpoint' });
     * ```
     */
    add(event: AuditableEvent): void;
    /**
     * Add a high-level scope name for logged events.
     * It helps to identify the root cause of low-level events.
     */
    withAuditScope(name: string): void;
}
/**
 * Creates {@link Auditor} instance bound to the current user credentials.
 * @public
 */
export interface AuditorFactory {
    asScoped(request: OpenSearchDashboardsRequest): Auditor;
}
export interface AuditTrailSetup {
    /**
     * Register a custom {@link AuditorFactory} implementation.
     */
    register(auditor: AuditorFactory): void;
}
export declare type AuditTrailStart = AuditorFactory;
//# sourceMappingURL=types.d.ts.map