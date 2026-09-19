import * as React from 'react';
import { CoreStart } from '../../../../core/public';
export interface OpenSearchDashboardsReactOverlays {
    openFlyout: (node: React.ReactNode, options?: Parameters<CoreStart['overlays']['openFlyout']>['1']) => ReturnType<CoreStart['overlays']['openFlyout']>;
    openModal: (node: React.ReactNode, options?: Parameters<CoreStart['overlays']['openModal']>['1']) => ReturnType<CoreStart['overlays']['openModal']>;
    sidecar: () => CoreStart['overlays']['sidecar'];
}
//# sourceMappingURL=types.d.ts.map