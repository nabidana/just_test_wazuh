import { OpenSearchDashboardsRequest } from '../http/router';
import { Logger } from '../logging';
export declare const ACLAuditorStateKey: {
    readonly VALIDATE_SUCCESS: "validateSuccess";
    readonly VALIDATE_FAILURE: "validateFailure";
    readonly DATABASE_OPERATION: "databaseOperation";
};
declare type ValueOf<T> = T[keyof T];
declare class ACLAuditor {
    private logger;
    private state;
    constructor(logger: Logger);
    reset: () => void;
    increment: (key: ValueOf<typeof ACLAuditorStateKey>, count: number) => void;
    checkout: (requestInfo?: string | undefined) => void;
    getState: () => {
        validateSuccess: number;
        validateFailure: number;
        databaseOperation: number;
    };
}
/**
 * This function will be used to initialize a new app state to the request
 *
 * @param request OpenSearchDashboardsRequest
 * @returns void
 */
export declare const initializeACLAuditor: (request: OpenSearchDashboardsRequest, logger: Logger) => void;
export declare const getACLAuditor: (request: OpenSearchDashboardsRequest) => ACLAuditor | undefined;
export declare const cleanUpACLAuditor: (request: OpenSearchDashboardsRequest) => void;
export {};
//# sourceMappingURL=acl_auditor.d.ts.map