import { HttpInterceptController } from './http_intercept_controller';
import { HttpInterceptor, HttpResponse, HttpFetchOptionsWithPath } from './types';
export declare function interceptRequest(options: HttpFetchOptionsWithPath, interceptors: ReadonlySet<HttpInterceptor>, controller: HttpInterceptController): Promise<HttpFetchOptionsWithPath>;
export declare function interceptResponse(fetchOptions: HttpFetchOptionsWithPath, responsePromise: Promise<HttpResponse>, interceptors: ReadonlySet<HttpInterceptor>, controller: HttpInterceptController): Promise<HttpResponse>;
//# sourceMappingURL=intercept.d.ts.map