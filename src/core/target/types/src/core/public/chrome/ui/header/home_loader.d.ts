import './home_loader.scss';
import React from 'react';
import { Observable } from 'rxjs';
import { ChromeNavLink } from '../..';
import { ChromeBranding } from '../../chrome_service';
import type { Logos } from '../../../../common/types';
interface Props {
    href: string;
    navLinks$: Observable<ChromeNavLink[]>;
    forceNavigation$: Observable<boolean>;
    loadingCount$: Observable<number>;
    navigateToApp: (appId: string) => void;
    branding: ChromeBranding;
    logos: Logos;
}
export declare function HomeLoader({ href, navigateToApp, branding, logos, ...observables }: Props): React.JSX.Element;
export {};
//# sourceMappingURL=home_loader.d.ts.map