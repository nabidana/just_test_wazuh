import { History } from 'history';
import { IToasts } from '../../notifications';
import { IBasePath } from '../../http';
import { IUiSettingsClient } from '../../ui_settings';
export declare const IS_IE: boolean;
/**
 * The max URL length allowed by the current browser. Should be used to display warnings to users when query parameters
 * cause URL to exceed this limit.
 * @public
 */
export declare const URL_MAX_LENGTH: number;
export declare const URL_WARNING_LENGTH: number;
interface Deps {
    basePath: IBasePath;
    history: History;
    toasts: IToasts;
    uiSettings: IUiSettingsClient;
}
export declare const setupUrlOverflowDetection: ({ basePath, history, toasts, uiSettings }: Deps) => import("history").UnregisterCallback;
export {};
//# sourceMappingURL=url_overflow.d.ts.map