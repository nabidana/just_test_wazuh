/// <reference types="react" />
import { Observable } from 'rxjs';
import { IUiSettingsClient } from '../../ui_settings';
import { I18nStart } from '../../i18n';
import { MountPoint } from '../../types';
/** @public */
export interface OverlayBannersStart {
    /**
     * Add a new banner
     *
     * @param mount {@link MountPoint}
     * @param priority optional priority order to display this banner. Higher priority values are shown first.
     * @returns a unique identifier for the given banner to be used with {@link OverlayBannersStart.remove} and
     *          {@link OverlayBannersStart.replace}
     */
    add(mount: MountPoint, priority?: number): string;
    /**
     * Remove a banner
     *
     * @param id the unique identifier for the banner returned by {@link OverlayBannersStart.add}
     * @returns if the banner was found or not
     */
    remove(id: string): boolean;
    /**
     * Replace a banner in place
     *
     * @param id the unique identifier for the banner returned by {@link OverlayBannersStart.add}
     * @param mount {@link MountPoint}
     * @param priority optional priority order to display this banner. Higher priority values are shown first.
     * @returns a new identifier for the given banner to be used with {@link OverlayBannersStart.remove} and
     *          {@link OverlayBannersStart.replace}
     */
    replace(id: string | undefined, mount: MountPoint, priority?: number): string;
    /** @internal */
    get$(): Observable<OverlayBanner[]>;
    getComponent(): JSX.Element;
}
/** @internal */
export interface OverlayBanner {
    readonly id: string;
    readonly mount: MountPoint;
    readonly priority: number;
}
interface StartDeps {
    i18n: I18nStart;
    uiSettings: IUiSettingsClient;
}
/** @internal */
export declare class OverlayBannersService {
    private readonly userBanner;
    start({ i18n, uiSettings }: StartDeps): OverlayBannersStart;
    stop(): void;
}
export {};
//# sourceMappingURL=banners_service.d.ts.map