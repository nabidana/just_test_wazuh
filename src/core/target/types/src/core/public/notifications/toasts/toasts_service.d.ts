import { I18nStart } from '../../i18n';
import { IUiSettingsClient } from '../../ui_settings';
import { ToastsApi, IToasts } from './toasts_api';
import { OverlayStart } from '../../overlays';
interface SetupDeps {
    uiSettings: IUiSettingsClient;
}
interface StartDeps {
    i18n: I18nStart;
    overlays: OverlayStart;
    targetDomElement: HTMLElement;
}
/**
 * {@link IToasts}
 * @public
 */
export declare type ToastsSetup = IToasts;
/**
 * {@link IToasts}
 * @public
 */
export declare type ToastsStart = IToasts;
export declare class ToastsService {
    private api?;
    private targetDomElement?;
    setup({ uiSettings }: SetupDeps): ToastsApi;
    start({ i18n, overlays, targetDomElement }: StartDeps): ToastsApi;
    stop(): void;
}
export {};
//# sourceMappingURL=toasts_service.d.ts.map