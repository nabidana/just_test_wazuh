import { HttpSetup, HttpStart } from './types';
import { InjectedMetadataSetup } from '../injected_metadata';
import { FatalErrorsSetup } from '../fatal_errors';
import { CoreService } from '../../types';
interface HttpDeps {
    injectedMetadata: InjectedMetadataSetup;
    fatalErrors: FatalErrorsSetup;
}
/** @internal */
export declare class HttpService implements CoreService<HttpSetup, HttpStart> {
    private readonly anonymousPaths;
    private readonly loadingCount;
    private service?;
    setup({ injectedMetadata, fatalErrors }: HttpDeps): HttpSetup;
    start(): HttpSetup;
    stop(): void;
}
export {};
//# sourceMappingURL=http_service.d.ts.map