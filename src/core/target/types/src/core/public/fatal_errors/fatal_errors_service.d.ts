import * as Rx from 'rxjs';
import { I18nStart } from '../i18n';
import { InjectedMetadataSetup } from '../injected_metadata';
import { FatalErrorInfo } from './get_error_info';
interface Deps {
    i18n: I18nStart;
    injectedMetadata: InjectedMetadataSetup;
}
/**
 * FatalErrors stop the OpenSearch Dashboards Public Core and displays a fatal error screen
 * with details about the OpenSearch Dashboards build and the error.
 *
 * @public
 */
export interface FatalErrorsSetup {
    /**
     * Add a new fatal error. This will stop the OpenSearch Dashboards Public Core and display
     * a fatal error screen with details about the OpenSearch Dashboards build and the error.
     *
     * @param error - The error to display
     * @param source - Adds a prefix of the form `${source}: ` to the error message
     */
    add: (error: string | Error, source?: string) => never;
    /**
     * An Observable that will emit whenever a fatal error is added with `add()`
     */
    get$: () => Rx.Observable<FatalErrorInfo>;
}
/**
 * FatalErrors stop the OpenSearch Dashboards Public Core and displays a fatal error screen
 * with details about the OpenSearch Dashboards build and the error.
 *
 * @public
 */
export declare type FatalErrorsStart = FatalErrorsSetup;
/** @interal */
export declare class FatalErrorsService {
    private rootDomElement;
    private onFirstErrorCb;
    private readonly errorInfo$;
    private fatalErrors?;
    /**
     *
     * @param rootDomElement
     * @param onFirstErrorCb - Callback function that gets executed after the first error,
     *   but before the FatalErrorsService renders the error to the DOM.
     */
    constructor(rootDomElement: HTMLElement, onFirstErrorCb: () => void);
    setup({ i18n, injectedMetadata }: Deps): FatalErrorsSetup;
    start(): FatalErrorsSetup;
    private renderError;
    private setupGlobalErrorHandlers;
}
export {};
//# sourceMappingURL=fatal_errors_service.d.ts.map