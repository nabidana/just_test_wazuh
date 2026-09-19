import { I18nStart } from '../../i18n';
import { IUiSettingsClient } from '../../ui_settings';
import { OverlayBannersStart } from './banners_service';
interface StartDeps {
    banners: OverlayBannersStart;
    i18n: I18nStart;
    uiSettings: IUiSettingsClient;
}
/**
 * Sets up the custom banner that can be specified in advanced settings.
 * @internal
 */
export declare class UserBannerService {
    private settingsSubscription?;
    start({ banners, i18n, uiSettings }: StartDeps): void;
    stop(): void;
}
export {};
//# sourceMappingURL=user_banner_service.d.ts.map