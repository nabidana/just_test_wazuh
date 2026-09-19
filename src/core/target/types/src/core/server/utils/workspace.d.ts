import { OpenSearchDashboardsRequest } from '../http/router';
export interface WorkspaceState {
    requestWorkspaceId?: string;
    isDashboardAdmin?: boolean;
    isDataSourceAdmin?: boolean;
}
/**
 * This function will be used as a proxy
 * because `ensureRequest` is only importable from core module.
 *
 * @param workspaceId string
 * @returns void
 */
export declare const updateWorkspaceState: (request: OpenSearchDashboardsRequest, payload: Partial<WorkspaceState>) => void;
export declare const getWorkspaceState: (request: OpenSearchDashboardsRequest) => WorkspaceState;
//# sourceMappingURL=workspace.d.ts.map