import { OpenSearchDashboardsRequest } from '../http/router';
export declare const CLIENT_CALL_AUDITOR_KEY: {
    readonly incoming: "incoming";
    readonly outgoing: "outgoing";
};
/**
 * This class will be used to audit all the async calls to saved objects client.
 * For example, `/api/sample_data` will call savedObjectsClient.get() 3 times parallely and for ACL auditor,
 * it should only `checkout` when the incoming calls equal outgoing call.
 */
declare class ClientCallAuditor {
    private state;
    increment(key: keyof typeof CLIENT_CALL_AUDITOR_KEY): void;
    isAsyncClientCallsBalanced(): boolean;
}
/**
 * This function will be used to initialize a new app state to the request
 *
 * @param request OpenSearchDashboardsRequest
 * @returns void
 */
export declare const initializeClientCallAuditor: (request: OpenSearchDashboardsRequest) => void;
export declare const getClientCallAuditor: (request: OpenSearchDashboardsRequest) => ClientCallAuditor | undefined;
export declare const cleanUpClientCallAuditor: (request: OpenSearchDashboardsRequest) => void;
export {};
//# sourceMappingURL=client_call_auditor.d.ts.map