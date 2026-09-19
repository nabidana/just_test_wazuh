import { History } from 'history';
import { ApplicationStart, HttpStart, ToastsSetup } from 'opensearch-dashboards/public';
import { SavedObjectNotFound } from '..';
interface Mapping {
    [key: string]: string | {
        app: string;
        path: string;
    };
}
/**
 * Creates an error handler that will redirect to a url when a SavedObjectNotFound
 * error is thrown
 */
export declare function redirectWhenMissing({ history, navigateToApp, basePath, mapping, toastNotifications, onBeforeRedirect, }: {
    history: History;
    navigateToApp: ApplicationStart['navigateToApp'];
    basePath: HttpStart['basePath'];
    /**
     * a mapping of url's to redirect to based on the saved object that
     * couldn't be found, or just a string that will be used for all types
     */
    mapping: string | Mapping;
    /**
     * Toast notifications service to show toasts in error cases.
     */
    toastNotifications: ToastsSetup;
    /**
     * Optional callback invoked directly before a redirect is triggered
     */
    onBeforeRedirect?: (error: SavedObjectNotFound) => void;
}): (error: SavedObjectNotFound) => void;
export {};
//# sourceMappingURL=redirect_when_missing.d.ts.map