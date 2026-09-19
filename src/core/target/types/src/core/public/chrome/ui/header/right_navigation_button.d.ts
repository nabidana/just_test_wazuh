import React from 'react';
import { CoreStart } from '../../..';
/**
 * This component is used for application to render top right navigation button in header.
 */
export interface RightNavigationButtonProps {
    application: CoreStart['application'];
    http: CoreStart['http'];
    appId: string;
    iconType: string;
    title: string;
}
/**
 * @experimental this class is experimental and might change in future releases.
 */
export declare const RightNavigationButton: ({ application, http, appId, iconType, title, }: RightNavigationButtonProps) => React.JSX.Element;
//# sourceMappingURL=right_navigation_button.d.ts.map