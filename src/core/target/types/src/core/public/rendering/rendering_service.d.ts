import { InternalChromeStart } from '../chrome';
import { InternalApplicationStart } from '../application';
import { OverlayStart } from '../overlays';
interface StartDeps {
    application: InternalApplicationStart;
    chrome: InternalChromeStart;
    overlays: OverlayStart;
    targetDomElement: HTMLDivElement;
}
/**
 * Renders all Core UI in a single React tree.
 *
 * @internalRemarks Currently this only renders Chrome UI. Notifications and
 * Overlays UI should be moved here as well.
 *
 * @internal
 */
export declare class RenderingService {
    start({ application, chrome, overlays, targetDomElement }: StartDeps): void;
}
export {};
//# sourceMappingURL=rendering_service.d.ts.map