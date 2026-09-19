import { I18nStart } from '../i18n';
import { ToastsSetup, ToastsStart } from './toasts';
import { IUiSettingsClient } from '../ui_settings';
import { OverlayStart } from '../overlays';
interface SetupDeps {
    uiSettings: IUiSettingsClient;
}
interface StartDeps {
    i18n: I18nStart;
    overlays: OverlayStart;
    targetDomElement: HTMLElement;
}
/** @public */
export declare class NotificationsService {
    private readonly toasts;
    private uiSettingsErrorSubscription?;
    private targetDomElement?;
    constructor();
    setup({ uiSettings }: SetupDeps): NotificationsSetup;
    start({ i18n: i18nDep, overlays, targetDomElement }: StartDeps): NotificationsStart;
    stop(): void;
}
/** @public */
export interface NotificationsSetup {
    /** {@link ToastsSetup} */
    toasts: ToastsSetup;
}
/** @public */
export interface NotificationsStart {
    /** {@link ToastsStart} */
    toasts: ToastsStart;
}
export {};
//# sourceMappingURL=notifications_service.d.ts.map