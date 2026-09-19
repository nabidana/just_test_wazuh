import { Observable } from 'rxjs';
import { HttpSetup } from '../../http';
import { WorkspacesStart } from '../../workspace';
import { InternalApplicationStart } from '../../application';
/** @public */
export interface ChromeRecentlyAccessedHistoryItem {
    link: string;
    label: string;
    id: string;
    workspaceId?: string;
    meta?: {
        type?: string;
        lastAccessedTime?: number;
    };
}
interface StartDeps {
    http: HttpSetup;
    workspaces: WorkspacesStart;
    application: InternalApplicationStart;
}
/** @internal */
export declare class RecentlyAccessedService {
    start({ http, workspaces, application }: StartDeps): Promise<ChromeRecentlyAccessed>;
}
/**
 * {@link ChromeRecentlyAccessed | APIs} for recently accessed history.
 * @public
 */
export interface ChromeRecentlyAccessed {
    /**
     * Adds a new item to the recently accessed history.
     *
     * @example
     * ```js
     * chrome.recentlyAccessed.add('/app/map/1234', 'Map 1234', '1234');
     * ```
     *
     * @param link a relative URL to the resource (not including the {@link HttpStart.basePath | `http.basePath`})
     * @param label the label to display in the UI
     * @param id a unique string used to de-duplicate the recently accessed list.
     */
    add(link: string, label: string, id: string, meta?: ChromeRecentlyAccessedHistoryItem['meta']): void;
    /**
     * Gets an Array of the current recently accessed history.
     *
     * @example
     * ```js
     * chrome.recentlyAccessed.get().forEach(console.log);
     * ```
     */
    get(): ChromeRecentlyAccessedHistoryItem[];
    /**
     * Gets an Observable of the array of recently accessed history.
     *
     * @example
     * ```js
     * chrome.recentlyAccessed.get$().subscribe(console.log);
     * ```
     */
    get$(): Observable<ChromeRecentlyAccessedHistoryItem[]>;
}
export {};
//# sourceMappingURL=recently_accessed_service.d.ts.map