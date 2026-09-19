import { History, Path, LocationDescriptorObject, UnregisterCallback, Location, Href, Action } from 'history';
/**
 * A wrapper around a `History` instance that is scoped to a particular base path of the history stack. Behaves
 * similarly to the `basename` option except that this wrapper hides any history stack entries from outside the scope
 * of this base path.
 *
 * This wrapper also allows Core and Plugins to share a single underlying global `History` instance without exposing
 * the history of other applications.
 *
 * The {@link ScopedHistory.createSubHistory | createSubHistory} method is particularly useful for applications that
 * contain any number of "sub-apps" which should not have access to the main application's history or basePath.
 *
 * @public
 */
export declare class ScopedHistory<HistoryLocationState = unknown> implements History<HistoryLocationState> {
    private readonly parentHistory;
    private readonly basePath;
    /**
     * Tracks whether or not the user has left this history's scope. All methods throw errors if called after scope has
     * been left.
     */
    private isActive;
    /**
     * All active listeners on this history instance.
     */
    private listeners;
    /**
     * Array of the local history stack. Only stores {@link Location.key} to use tracking an index of the current
     * position of the window in the history stack.
     */
    private locationKeys;
    /**
     * The key of the current position of the window in the history stack.
     */
    private currentLocationKeyIndex;
    constructor(parentHistory: History, basePath: string);
    /**
     * Creates a `ScopedHistory` for a subpath of this `ScopedHistory`. Useful for applications that may have sub-apps
     * that do not need access to the containing application's history.
     *
     * @param basePath the URL path scope for the sub history
     */
    createSubHistory: <SubHistoryLocationState = unknown>(basePath: string) => ScopedHistory<SubHistoryLocationState>;
    /**
     * The number of entries in the history stack, including all entries forwards and backwards from the current location.
     */
    get length(): number;
    /**
     * The current location of the history stack.
     */
    get location(): Location<HistoryLocationState>;
    /**
     * The last action dispatched on the history stack.
     */
    get action(): Action;
    /**
     * Pushes a new location onto the history stack. If there are forward entries in the stack, they will be removed.
     *
     * @param pathOrLocation a string or location descriptor
     * @param state
     */
    push: (pathOrLocation: Path | LocationDescriptorObject<HistoryLocationState>, state?: HistoryLocationState | undefined) => void;
    /**
     * Replaces the current location in the history stack. Does not remove forward or backward entries.
     *
     * @param pathOrLocation a string or location descriptor
     * @param state
     */
    replace: (pathOrLocation: Path | LocationDescriptorObject<HistoryLocationState>, state?: HistoryLocationState | undefined) => void;
    /**
     * Send the user forward or backwards in the history stack.
     *
     * @param n number of positions in the stack to go. Negative numbers indicate number of entries backward, positive
     *          numbers for forwards. If passed 0, the current location will be reloaded. If `n` exceeds the number of
     *          entries available, this is a no-op.
     */
    go: (n: number) => void;
    /**
     * Send the user one location back in the history stack. Equivalent to calling
     * {@link ScopedHistory.go | ScopedHistory.go(-1)}. If no more entries are available backwards, this is a no-op.
     */
    goBack: () => void;
    /**
     * Send the user one location forward in the history stack. Equivalent to calling
     * {@link ScopedHistory.go | ScopedHistory.go(1)}. If no more entries are available forwards, this is a no-op.
     */
    goForward: () => void;
    /**
     * Not supported. Use {@link AppMountParameters.onAppLeave}.
     *
     * @remarks
     * We prefer that applications use the `onAppLeave` API because it supports a more graceful experience that prefers
     * a modal when possible, falling back to a confirm dialog box in the beforeunload case.
     */
    block: (prompt?: string | boolean | History.TransitionPromptHook<HistoryLocationState> | undefined) => UnregisterCallback;
    /**
     * Adds a listener for location updates.
     *
     * @param listener a function that receives location updates.
     * @returns an function to unsubscribe the listener.
     */
    listen: (listener: (location: Location<HistoryLocationState>, action: Action) => void) => UnregisterCallback;
    /**
     * Creates an href (string) to the location.
     * If `prependBasePath` is true (default), it will prepend the location's path with the scoped history basePath.
     *
     * @param location
     * @param prependBasePath
     */
    createHref: (location: LocationDescriptorObject<HistoryLocationState>, { prependBasePath }?: {
        prependBasePath?: boolean | undefined;
    }) => Href;
    private prependBasePath;
    /**
     * Prepends the base path to string.
     */
    private prependBasePathToString;
    /**
     * Removes the base path from a location.
     */
    private stripBasePath;
    /** Called on each public method to ensure that we have not fallen out of scope yet. */
    private verifyActive;
    /**
     * Sets up the listener on the parent history instance used to follow navigation updates and track our internal
     * state. Also forwards events to child listeners with the base path stripped from the location.
     */
    private setupHistoryListener;
}
//# sourceMappingURL=scoped_history.d.ts.map