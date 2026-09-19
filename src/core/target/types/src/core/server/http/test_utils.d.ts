import { HttpService } from './http_service';
import { CoreContext } from '../core_context';
export declare const createCoreContext: (overrides?: Partial<CoreContext>) => CoreContext;
/**
 * Creates a concrete HttpServer with a mocked context.
 */
export declare const createHttpServer: (overrides?: Partial<CoreContext>) => HttpService;
//# sourceMappingURL=test_utils.d.ts.map