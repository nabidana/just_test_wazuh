import { History } from 'history';
/**
 * State management url_tracker in react hook form
 *
 * Replicates what src/legacy/ui/public/chrome/api/nav.ts did
 * Persists the url in sessionStorage so it could be restored if navigated back to the app
 *
 * @param key - key to use in storage
 * @param history - history instance to use
 * @param shouldRestoreUrl - cb if url should be restored
 * @param storage - storage to use. window.sessionStorage is default
 */
export declare function useUrlTracker(key: string, history: History, shouldRestoreUrl?: (urlToRestore: string) => boolean, storage?: Storage): void;
//# sourceMappingURL=use_url_tracker.d.ts.map