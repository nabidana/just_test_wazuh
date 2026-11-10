import './collapsible_nav.scss';
import React from 'react';
import * as Rx from 'rxjs';
import { ChromeNavLink, ChromeRecentlyAccessedHistoryItem } from '../..';
import { InternalApplicationStart } from '../../../application/types';
import { HttpStart } from '../../../http';
import { OnIsLockedUpdate } from './';
import type { Logos } from '../../../../common/types';
interface Props {
    appId$: InternalApplicationStart['currentAppId$'];
    basePath: HttpStart['basePath'];
    collapsibleNavHeaderRender?: () => JSX.Element | null;
    id: string;
    isLocked: boolean;
    isNavOpen: boolean;
    homeHref: string;
    navLinks$: Rx.Observable<ChromeNavLink[]>;
    recentlyAccessed$: Rx.Observable<ChromeRecentlyAccessedHistoryItem[]>;
    storage?: Storage;
    onIsLockedUpdate: OnIsLockedUpdate;
    closeNav: () => void;
    navigateToApp: InternalApplicationStart['navigateToApp'];
    navigateToUrl: InternalApplicationStart['navigateToUrl'];
    customNavLink$: Rx.Observable<ChromeNavLink | undefined>;
    logos: Logos;
    workspaceEnabled: boolean | undefined;
}
export declare function CollapsibleNav({ basePath, collapsibleNavHeaderRender, id, isLocked, isNavOpen, homeHref, storage, onIsLockedUpdate, closeNav, navigateToApp, navigateToUrl, logos, workspaceEnabled, ...observables }: Props): React.JSX.Element;
export {};
//# sourceMappingURL=collapsible_nav.d.ts.map