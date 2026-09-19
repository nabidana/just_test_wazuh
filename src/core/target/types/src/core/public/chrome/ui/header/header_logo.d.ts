import './header_logo.scss';
import React from 'react';
import { Observable } from 'rxjs';
import { ChromeNavLink } from '../..';
import { ChromeBranding } from '../../chrome_service';
import type { Logos } from '../../../../common/types';
interface Props {
    href: string;
    navLinks$: Observable<ChromeNavLink[]>;
    forceNavigation$: Observable<boolean>;
    navigateToApp: (appId: string) => void;
    branding: ChromeBranding;
    logos: Logos;
    backgroundColorScheme?: 'normal' | 'light' | 'dark';
}
export declare function HeaderLogo({ href, navigateToApp, branding, logos, backgroundColorScheme, ...observables }: Props): React.JSX.Element;
export {};
//# sourceMappingURL=header_logo.d.ts.map