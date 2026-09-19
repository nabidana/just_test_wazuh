import { Observable } from 'rxjs';
import { FatalErrorsSetup } from '../fatal_errors';
import { CoreService } from '../../types';
/** @public */
export interface LoadingCountSetup {
    addLoadingCountSource(countSource$: Observable<number>): void;
    getLoadingCount$(): Observable<number>;
}
/**
 * See {@link LoadingCountSetup}.
 * @public
 */
export declare type LoadingCountStart = LoadingCountSetup;
/** @internal */
export declare class LoadingCountService implements CoreService<LoadingCountSetup, LoadingCountStart> {
    private readonly stop$;
    private readonly loadingCount$;
    setup({ fatalErrors }: {
        fatalErrors: FatalErrorsSetup;
    }): {
        getLoadingCount$: () => Observable<number>;
        addLoadingCountSource: (count$: Observable<number>) => void;
    };
    start({ fatalErrors }: {
        fatalErrors: FatalErrorsSetup;
    }): {
        getLoadingCount$: () => Observable<number>;
        addLoadingCountSource: (count$: Observable<number>) => void;
    };
    stop(): void;
}
//# sourceMappingURL=loading_count_service.d.ts.map