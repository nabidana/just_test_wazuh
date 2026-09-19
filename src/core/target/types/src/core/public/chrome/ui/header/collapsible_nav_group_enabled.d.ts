import './collapsible_nav_group_enabled.scss';
import React from 'react';
import * as Rx from 'rxjs';
import { WorkspacesStart } from 'src/core/public/workspace';
import { ChromeNavControl, ChromeNavLink } from '../..';
import { InternalApplicationStart } from '../../../application/types';
import { HttpStart } from '../../../http';
import type { Logos } from '../../../../common/types';
import { ChromeNavGroupServiceStartContract, NavGroupItemInMap } from '../../nav_group';
import { GlobalSearchCommand } from '../../global_search';
export interface CollapsibleNavGroupEnabledProps {
    appId$: InternalApplicationStart['currentAppId$'];
    collapsibleNavHeaderRender?: () => JSX.Element | null;
    basePath: HttpStart['basePath'];
    id: string;
    isNavOpen: boolean;
    navLinks$: Rx.Observable<ChromeNavLink[]>;
    storage?: Storage;
    closeNav: () => void;
    navigateToApp: InternalApplicationStart['navigateToApp'];
    navigateToUrl: InternalApplicationStart['navigateToUrl'];
    customNavLink$: Rx.Observable<ChromeNavLink | undefined>;
    logos: Logos;
    navGroupsMap$: Rx.Observable<Record<string, NavGroupItemInMap>>;
    navControlsLeftBottom$: Rx.Observable<readonly ChromeNavControl[]>;
    currentNavGroup$: Rx.Observable<NavGroupItemInMap | undefined>;
    setCurrentNavGroup: ChromeNavGroupServiceStartContract['setCurrentNavGroup'];
    capabilities: InternalApplicationStart['capabilities'];
    currentWorkspace$: WorkspacesStart['currentWorkspace$'];
    globalSearchCommands?: GlobalSearchCommand[];
}
export declare function CollapsibleNavGroupEnabled({ basePath, id, isNavOpen, storage, closeNav, navigateToApp, navigateToUrl, logos, setCurrentNavGroup, capabilities, collapsibleNavHeaderRender, globalSearchCommands, ...observables }: CollapsibleNavGroupEnabledProps): React.JSX.Element;
//# sourceMappingURL=collapsible_nav_group_enabled.d.ts.map