export { calculateObjectHash, defer, Defer, fieldWildcardFilter, fieldWildcardMatcher, Get, JsonArray, JsonObject, JsonValue, of, Set, UiComponent, UiComponentInstance, url, createGetterSetter, } from '../common';
export * from './core';
export * from '../common/errors';
export * from './render_complete';
export * from './resize_checker';
export * from '../common/state_containers';
export * from './storage';
export { hashedItemStore, HashedItemStore } from './storage/hashed_item_store';
export { createStateHash, persistState, retrieveState, isStateHash, } from './state_management/state_hash';
export { hashQuery, hashUrl, unhashUrl, unhashQuery, createUrlTracker, createOsdUrlTracker, createOsdUrlControls, getStateFromOsdUrl, getStatesFromOsdUrl, setStateToOsdUrl, withNotifyOnErrors, } from './state_management/url';
export { syncState, syncStates, createOsdUrlStateStorage, createSessionStorageStateStorage, IStateSyncConfig, ISyncStateRef, IOsdUrlStateStorage, INullableBaseStateContainer, ISessionStorageStateStorage, StartSyncStateFnType, StopSyncStateFnType, } from './state_sync';
export { Configurable, CollectConfigProps } from './ui';
export { removeQueryParam, redirectWhenMissing } from './history';
export { applyDiff } from './state_management/utils/diff_object';
export { createStartServicesGetter, StartServicesGetter } from './core/create_start_service_getter';
/** dummy plugin, we just want opensearchDashboardsUtils to have its own bundle */
export declare function plugin(): {
    setup(): void;
    start(): void;
};
//# sourceMappingURL=index.d.ts.map