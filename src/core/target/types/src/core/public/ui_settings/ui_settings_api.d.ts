import { HttpSetup } from '../http';
import { UiSettingsState } from './types';
export interface UiSettingsApiResponse {
    settings: UiSettingsState;
}
export declare class UiSettingsApi {
    private readonly http;
    private pendingChanges?;
    private sendInProgress;
    private readonly loadingCount$;
    constructor(http: HttpSetup);
    /**
     * Adds a key+value that will be sent to the server ASAP. If a request is
     * already in progress it will wait until the previous request is complete
     * before sending the next request
     */
    batchSet(key: string, value: any): Promise<UiSettingsApiResponse>;
    /**
     * Gets an observable that notifies subscribers of the current number of active requests
     */
    getLoadingCount$(): import("rxjs").Observable<number>;
    /**
     * Prepares the uiSettings API to be discarded
     */
    stop(): void;
    /**
     * Report back if there are pending changes waiting to be sent.
     */
    hasPendingChanges(): boolean;
    /**
     * If there are changes that need to be sent to the server and there is not already a
     * request in progress, this method will start a request sending those changes. Once
     * the request is complete `flushPendingChanges()` will be called again, and if the
     * prerequisites are still true (because changes were queued while the request was in
     * progress) then another request will be started until all pending changes have been
     * sent to the server.
     */
    private flushPendingChanges;
    /**
     * Calls window.fetch() with the proper headers and error handling logic.
     */
    private sendRequest;
}
//# sourceMappingURL=ui_settings_api.d.ts.map