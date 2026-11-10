import { OpenSearchDashboardsRequest } from '../http/router';
import { HttpAuth } from '../http/types';
import { Principals } from '../saved_objects/permission_control/acl';
export interface AuthInfo {
    backend_roles?: string[];
    user_name?: string;
    user_id?: string;
}
export declare const getPrincipalsFromRequest: (request: OpenSearchDashboardsRequest, auth?: HttpAuth | undefined) => Principals;
//# sourceMappingURL=auth_info.d.ts.map