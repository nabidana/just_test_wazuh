import { IStateStorage } from './types';
/**
 * {@link IStateStorage} for storing state in browser {@link Storage}
 * {@link https://github.com/opensearch-project/OpenSearch-Dashboards/blob/main/src/plugins/opensearch_dashboards_utils/docs/state_sync/storages/session_storage.md | guide}
 * @public
 */
export interface ISessionStorageStateStorage extends IStateStorage {
    set: <State>(key: string, state: State) => void;
    get: <State = unknown>(key: string) => State | null;
}
/**
 * Creates {@link ISessionStorageStateStorage}
 * {@link https://github.com/opensearch-project/OpenSearch-Dashboards/blob/main/src/plugins/opensearch_dashboards_utils/docs/state_sync/storages/session_storage.md | guide}
 * @param storage - Option {@link Storage} to use for storing state. By default window.sessionStorage.
 * @returns - {@link ISessionStorageStateStorage}
 * @public
 */
export declare const createSessionStorageStateStorage: (storage?: Storage) => ISessionStorageStateStorage;
//# sourceMappingURL=create_session_storage_state_storage.d.ts.map