import { Observable } from 'rxjs';
import { MountPoint } from '../../types';
/** @public */
export interface ChromeNavControl {
    order?: number;
    mount: MountPoint;
}
/**
 * {@link ChromeNavControls | APIs} for registering new controls to be displayed in the navigation bar.
 *
 * @example
 * Register a left-side nav control rendered with React.
 * ```jsx
 * chrome.navControls.registerLeft({
 *   mount(targetDomElement) {
 *     ReactDOM.mount(<MyControl />, targetDomElement);
 *     return () => ReactDOM.unmountComponentAtNode(targetDomElement);
 *   }
 * })
 * ```
 *
 * @public
 */
export interface ChromeNavControls {
    /** Register a nav control to be presented on the bottom-left side of the chrome header. */
    registerLeft(navControl: ChromeNavControl): void;
    /** Register a nav control to be presented on the top-right side of the chrome header. */
    registerRight(navControl: ChromeNavControl): void;
    /** Register a nav control to be presented on the top-center side of the chrome header. */
    registerCenter(navControl: ChromeNavControl): void;
    /** Register a nav control to be presented on the left-bottom side of the left navigation. */
    registerLeftBottom(navControl: ChromeNavControl): void;
    /** Register a nav control to be presented on the right side of the primary chrome header. */
    registerPrimaryHeaderRight(navControl: ChromeNavControl): void;
    /** @internal */
    getLeft$(): Observable<ChromeNavControl[]>;
    /** @internal */
    getRight$(): Observable<ChromeNavControl[]>;
    /** @internal */
    getCenter$(): Observable<ChromeNavControl[]>;
    /** @internal */
    getLeftBottom$(): Observable<ChromeNavControl[]>;
    /** @internal */
    getPrimaryHeaderRight$(): Observable<ChromeNavControl[]>;
}
/** @internal */
export declare class NavControlsService {
    private readonly stop$;
    start(): {
        registerLeft: (navControl: ChromeNavControl) => void;
        registerRight: (navControl: ChromeNavControl) => void;
        registerCenter: (navControl: ChromeNavControl) => void;
        registerExpandedRight: (navControl: ChromeNavControl) => void;
        registerExpandedCenter: (navControl: ChromeNavControl) => void;
        registerLeftBottom: (navControl: ChromeNavControl) => void;
        registerPrimaryHeaderRight: (navControl: ChromeNavControl) => void;
        getLeft$: () => Observable<ChromeNavControl[]>;
        getRight$: () => Observable<ChromeNavControl[]>;
        getCenter$: () => Observable<ChromeNavControl[]>;
        getExpandedRight$: () => Observable<ChromeNavControl[]>;
        getExpandedCenter$: () => Observable<ChromeNavControl[]>;
        getLeftBottom$: () => Observable<ChromeNavControl[]>;
        getPrimaryHeaderRight$: () => Observable<ChromeNavControl[]>;
    };
    stop(): void;
}
//# sourceMappingURL=nav_controls_service.d.ts.map