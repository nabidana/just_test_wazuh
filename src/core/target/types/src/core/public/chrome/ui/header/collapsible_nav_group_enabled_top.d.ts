import React from 'react';
import { Logos } from 'opensearch-dashboards/public';
import { InternalApplicationStart } from 'src/core/public/application';
import { NavGroupItemInMap } from '../../nav_group';
import { ChromeNavLink } from '../../nav_links';
export interface CollapsibleNavTopProps {
    collapsibleNavHeaderRender?: () => JSX.Element | null;
    homeLink?: ChromeNavLink;
    currentNavGroup?: NavGroupItemInMap;
    navigateToApp: InternalApplicationStart['navigateToApp'];
    logos: Logos;
    onClickShrink?: () => void;
    shouldShrinkNavigation: boolean;
}
export declare const CollapsibleNavTop: ({ collapsibleNavHeaderRender, currentNavGroup, navigateToApp, logos, onClickShrink, shouldShrinkNavigation, homeLink, }: CollapsibleNavTopProps) => React.JSX.Element;
//# sourceMappingURL=collapsible_nav_group_enabled_top.d.ts.map