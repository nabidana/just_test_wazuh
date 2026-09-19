import { History } from 'history';
/**
 * Parses a OpenSearch Dashboards url and retrieves all the states encoded into url,
 * Handles both expanded rison state and hashed state (where the actual state stored in sessionStorage)
 * e.g.:
 *
 * given an url:
 * http://localhost:5601/oxf/app/opensearch-dashboards#/yourApp?_a=(tab:indexedFields)&_b=(f:test,i:'',l:'')
 * will return object:
 * {_a: {tab: 'indexedFields'}, _b: {f: 'test', i: '', l: ''}};
 */
export declare function getStatesFromOsdUrl(url?: string, keys?: string[]): Record<string, unknown>;
/**
 * Retrieves specific state from url by key
 * e.g.:
 *
 * given an url:
 * http://localhost:5601/oxf/app/opensearch-dashboards#/yourApp?_a=(tab:indexedFields)&_b=(f:test,i:'',l:'')
 * and key '_a'
 * will return object:
 * {tab: 'indexedFields'}
 */
export declare function getStateFromOsdUrl<State>(key: string, url?: string): State | null;
/**
 * Sets state to the url by key and returns a new url string.
 * Doesn't actually updates history
 *
 * e.g.:
 * given a url: http://localhost:5601/oxf/app/opensearch-dashboards#/yourApp?_a=(tab:indexedFields)&_b=(f:test,i:'',l:'')
 * key: '_a'
 * and state: {tab: 'other'}
 *
 * will return url:
 * http://localhost:5601/oxf/app/opensearch-dashboards#/yourApp?_a=(tab:other)&_b=(f:test,i:'',l:'')
 */
export declare function setStateToOsdUrl<State>(key: string, state: State, { useHash, storeInHashQuery }?: {
    useHash: boolean;
    storeInHashQuery?: boolean;
}, rawUrl?: string): string;
/**
 * A tiny wrapper around history library to listen for url changes and update url
 * History library handles a bunch of cross browser edge cases
 */
export interface IOsdUrlControls {
    /**
     * Listen for url changes
     * @param cb - called when url has been changed
     */
    listen: (cb: () => void) => () => void;
    /**
     * Updates url synchronously, if needed
     * skips the update and returns undefined in case when trying to update to current url
     * otherwise returns new url
     *
     * @param url - url to update to
     * @param replace - use replace instead of push
     */
    update: (url: string, replace: boolean) => string | undefined;
    /**
     * Schedules url update to next microtask,
     * Useful to batch sync changes to url to cause only one browser history update
     * @param updater - fn which receives current url and should return next url to update to
     * @param replace - use replace instead of push
     *
     */
    updateAsync: (updater: UrlUpdaterFnType, replace?: boolean) => Promise<string | undefined>;
    /**
     * If there is a pending url update - returns url that is scheduled for update
     */
    getPendingUrl: () => string | undefined;
    /**
     * Synchronously flushes scheduled url updates. Returns new flushed url, if there was an update. Otherwise - undefined.
     * @param replace - if replace passed in, then uses it instead of push. Otherwise push or replace is picked depending on updateQueue
     */
    flush: (replace?: boolean) => string | undefined;
    /**
     * Cancels any pending url updates
     */
    cancel: () => void;
}
export declare type UrlUpdaterFnType = (currentUrl: string) => string | undefined;
export declare const createOsdUrlControls: (history?: History) => IOsdUrlControls;
/**
 * Depending on history configuration extracts relative path for history updates
 * 4 possible cases (see tests):
 * 1. Browser history with empty base path
 * 2. Browser history with base path
 * 3. Hash history with empty base path
 * 4. Hash history with base path
 */
export declare function getRelativeToHistoryPath(absoluteUrl: string, history: History): History.Path;
//# sourceMappingURL=osd_url_storage.d.ts.map