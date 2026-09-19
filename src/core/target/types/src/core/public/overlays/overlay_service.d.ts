import { I18nStart } from '../i18n';
import { IUiSettingsClient } from '../ui_settings';
import { OverlayBannersStart } from './banners';
import { OverlayFlyoutStart } from './flyout';
import { OverlayModalStart } from './modal';
import { OverlaySidecarStart } from './sidecar';
interface StartDeps {
    i18n: I18nStart;
    targetDomElement: HTMLElement;
    uiSettings: IUiSettingsClient;
}
/** @internal */
export declare class OverlayService {
    private bannersService;
    private modalService;
    private flyoutService;
    private sidecarService;
    start({ i18n, targetDomElement, uiSettings }: StartDeps): OverlayStart;
}
/** @public */
export interface OverlayStart {
    /** {@link OverlayBannersStart} */
    banners: OverlayBannersStart;
    /** {@link OverlayFlyoutStart#open} */
    openFlyout: OverlayFlyoutStart['open'];
    /** {@link OverlayFlyoutStart#close} */
    closeFlyout: OverlayFlyoutStart['close'];
    /** {@link OverlayModalStart#open} */
    openModal: OverlayModalStart['open'];
    /** {@link OverlayModalStart#openConfirm} */
    openConfirm: OverlayModalStart['openConfirm'];
    /** {@link OverlaySidecarStart#open} */
    sidecar: OverlaySidecarStart;
}
export {};
//# sourceMappingURL=overlay_service.d.ts.map