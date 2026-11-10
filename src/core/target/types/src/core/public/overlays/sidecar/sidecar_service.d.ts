import { Observable } from 'rxjs';
import { I18nStart } from '../../i18n';
import { MountPoint } from '../../types';
import { OverlayRef } from '../types';
/**
 * A SidecarRef is a reference to an opened sidecar panel. It offers methods to
 * close the sidecar panel again. If you open a sidecar panel you should make
 * sure you call `close()` when it should be closed.
 * Since a sidecar could also be closed by a user or from another sidecar being
 * opened, you must bind to the `onClose` Promise on the Sidecar instance.
 * The Promise will resolve whenever the sidecar was closed at which point you
 * should discard the SidecarRef.
 *
 * @public
 */
declare class SidecarRef implements OverlayRef {
    /**
     * An Promise that will resolve once this sidecar is closed.
     *
     * Sidecars can close from user interaction, calling `close()` on the sidecar
     * reference or another call to `open()` replacing your sidecar.
     */
    readonly onClose: Promise<void>;
    private closeSubject;
    constructor();
    /**
     * Closes the referenced sidecar if it's still open which in turn will
     * resolve the `onClose` Promise. If the sidecar had already been
     * closed this method does nothing.
     */
    close(): Promise<void>;
}
/**
 * APIs to open and manage sidecar.
 *
 * @public
 */
export interface OverlaySidecarStart {
    /**
     * Opens a sidecar panel with the given mount point inside. You can use
     * `close()` on the returned SidecarRef to close the sidecar.
     *
     * @param mount {@link MountPoint} - Mounts the children inside a sidecar panel
     * @param options {@link OverlaySidecarOpenOptions} - options for the sidecar
     * @return {@link SidecarRef} A reference to the opened sidecar panel.
     */
    open(mount: MountPoint, options: OverlaySidecarOpenOptions): SidecarRef;
    /**
     * Override the default support config
     * @param config The updated support config
     */
    setSidecarConfig(config: Partial<ISidecarConfig>): void;
    /**
     * Get an observable of the current locked state of the nav drawer.
     */
    getSidecarConfig$(): Observable<ISidecarConfig | undefined>;
    /**
     * Hide side car.
     */
    hide: () => void;
    /**
     * Show side car.
     */
    show: () => void;
}
/**
 * @public
 */
export interface OverlaySidecarOpenOptions {
    className?: string;
    'data-test-subj'?: string;
    config: ISidecarConfig;
}
interface StartDeps {
    i18n: I18nStart;
    targetDomElement: Element | null;
}
export declare enum SIDECAR_DOCKED_MODE {
    LEFT = "left",
    RIGHT = "right",
    TAKEOVER = "takeover"
}
export interface ISidecarConfig {
    dockedMode: SIDECAR_DOCKED_MODE;
    paddingSize: number;
    isHidden?: boolean;
}
/** @internal */
export declare class SidecarService {
    private activeSidecar;
    private targetDomElement;
    private readonly stop$;
    start({ i18n, targetDomElement }: StartDeps): OverlaySidecarStart;
    /**
     * When using React.render to re-render content into a target DOM element, it replaces
     * the content without invoking unmountComponentAtNode on any components within the target
     * or their children. To avoid potential subtle bugs in child components that rely on
     * unmounting for cleanup behavior, this function ensures proper cleanup of the DOM.
     */
    private cleanupDom;
}
export {};
//# sourceMappingURL=sidecar_service.d.ts.map