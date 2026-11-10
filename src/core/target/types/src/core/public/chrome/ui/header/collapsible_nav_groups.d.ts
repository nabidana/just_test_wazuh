import './collapsible_nav_group_enabled.scss';
import React from 'react';
import { ChromeNavLink } from '../..';
import { InternalApplicationStart } from '../../../application/types';
export interface NavGroupsProps {
    navLinks: ChromeNavLink[];
    suffix?: React.ReactElement;
    style?: React.CSSProperties;
    appId?: string;
    navigateToApp: InternalApplicationStart['navigateToApp'];
    onNavItemClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, navItem: ChromeNavLink) => void;
    categoryCollapsible?: boolean;
    currentWorkspaceId?: string;
}
export declare function NavGroups({ navLinks, suffix, style, appId, navigateToApp, onNavItemClick, categoryCollapsible, currentWorkspaceId, }: NavGroupsProps): React.JSX.Element;
//# sourceMappingURL=collapsible_nav_groups.d.ts.map