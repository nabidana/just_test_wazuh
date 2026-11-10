import { Observable } from 'rxjs';
import { History } from 'history';
import { IStateStorage } from './types';
/**
 * OsdUrlStateStorage is a state storage for {@link syncState} utility which:
 *
 * 1. Keeps state in sync with the URL.
 * 2. Serializes data and stores it in the URL in one of the supported formats:
 *   * Rison encoded.
 *   * Hashed URL: In URL we store only the hash from the serialized state, but the state itself is stored in sessionStorage. See OpenSearch Dashboards's `state:storeInSessionStorage`
 *     advanced option for more context.
 * 3. Takes care of listening to the URL updates and notifies state about the updates.
 * 4. Takes care of batching URL updates to prevent redundant browser history records.
 *
 * TODO: Update link
 * {@link https://github.com/opensearch-project/OpenSearch-Dashboards/blob/main/src/plugins/opensearch_dashboards_utils/docs/state_sync/storages/osd_url_storage.md | Refer to this guide for more info}
 * @public
 */
export interface IOsdUrlStateStorage extends IStateStorage {
    set: <State>(key: string, state: State, opts?: {
        replace: boolean;
    }) => Promise<string | undefined>;
    get: <State = unknown>(key: string) => State | null;
    change$: <State = unknown>(key: string) => Observable<State | null>;
    /**
     * cancels any pending url updates
     */
    cancel: () => void;
    /**
     * Synchronously runs any pending url updates, returned boolean indicates if change occurred.
     * @param opts: {replace? boolean} - allows to specify if push or replace should be used for flushing update
     * @returns boolean - indicates if there was an update to flush
     */
    flush: (opts?: {
        replace?: boolean;
    }) => boolean;
}
/**
 * Creates {@link IOsdUrlStateStorage} state storage
 * @returns - {@link IOsdUrlStateStorage}
 * @public
 */
export declare const createOsdUrlStateStorage: ({ useHash, history, onGetError, onSetError, }?: {
    useHash: boolean;
    history?: History<unknown> | undefined;
    onGetError?: ((error: Error) => void) | undefined;
    onSetError?: ((error: Error) => void) | undefined;
}) => IOsdUrlStateStorage;
//# sourceMappingURL=create_osd_url_state_storage.d.ts.map