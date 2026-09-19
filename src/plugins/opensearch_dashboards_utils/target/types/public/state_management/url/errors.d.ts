import { NotificationsStart } from 'opensearch-dashboards/public';
export declare const restoreUrlErrorTitle: string;
export declare const saveStateInUrlErrorTitle: string;
/**
 * Helper for configuring {@link IOsdUrlStateStorage} to notify about inner errors
 *
 * @example
 * ```ts
 * const osdUrlStateStorage = createOsdUrlStateStorage({
 *  history,
 *  ...withNotifyOnErrors(core.notifications.toast))
 * }
 * ```
 * @param toast - toastApi from core.notifications.toasts
 */
export declare const withNotifyOnErrors: (toasts: NotificationsStart['toasts']) => {
    onGetError: (error: Error) => void;
    onSetError: (error: Error) => void;
};
//# sourceMappingURL=errors.d.ts.map