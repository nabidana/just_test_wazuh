import { ResponseObject as HapiResponseObject, ResponseToolkit as HapiResponseToolkit } from '@hapi/hapi';
import Boom from '@hapi/boom';
import { OpenSearchDashboardsResponse } from './response';
export declare class HapiResponseAdapter {
    private readonly responseToolkit;
    constructor(responseToolkit: HapiResponseToolkit);
    toBadRequest(message: string): Boom.Boom<unknown>;
    toInternalError(): Boom.Boom<any>;
    handle(opensearchDashboardsResponse: OpenSearchDashboardsResponse): Boom.Boom<any> | HapiResponseObject;
    private toHapiResponse;
    private toSuccess;
    private toRedirect;
    private toError;
}
//# sourceMappingURL=response_adapter.d.ts.map