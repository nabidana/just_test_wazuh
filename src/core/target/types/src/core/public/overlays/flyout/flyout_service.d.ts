import { I18nStart } from '../../i18n';
import { MountPoint } from '../../types';
import { OverlayRef } from '../types';
/**
 * APIs to open and manage fly-out dialogs.
 *
 * @public
 */
export interface OverlayFlyoutStart {
    /**
     * Opens a flyout panel with the given mount point inside. You can use
     * `close()` on the returned FlyoutRef to close the flyout.
     *
     * @param mount {@link MountPoint} - Mounts the children inside a flyout panel
     * @param options {@link OverlayFlyoutOpenOptions} - options for the flyout
     * @return {@link OverlayRef} A reference to the opened flyout panel.
     */
    open(mount: MountPoint, options?: OverlayFlyoutOpenOptions): OverlayRef;
    /**
     * Closes any open flyout panel.
     */
    close(): void;
}
/**
 * @public
 */
export interface OverlayFlyoutOpenOptions {
    className?: string;
    closeButtonAriaLabel?: string;
    ownFocus?: boolean;
    'data-test-subj'?: string;
}
interface StartDeps {
    i18n: I18nStart;
    targetDomElement: Element;
}
/** @internal */
export declare class FlyoutService {
    private activeFlyout;
    private targetDomElement;
    start({ i18n, targetDomElement }: StartDeps): OverlayFlyoutStart;
    /**
     * Using React.Render to re-render into a target DOM element will replace
     * the content of the target but won't call unmountComponent on any
     * components inside the target or any of their children. So we properly
     * cleanup the DOM here to prevent subtle bugs in child components which
     * depend on unmounting for cleanup behaviour.
     */
    private cleanupDom;
}
export {};
//# sourceMappingURL=flyout_service.d.ts.map