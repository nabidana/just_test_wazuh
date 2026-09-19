import React from 'react';
import { Observable } from 'rxjs';
import { ChromeNavControl } from '../../nav_controls';
interface Props {
    navControls$: Observable<readonly ChromeNavControl[]>;
    side?: 'left' | 'right';
    className?: HTMLElement['className'];
}
export declare function HeaderNavControls({ navControls$, side, className }: Props): React.JSX.Element | null;
export {};
//# sourceMappingURL=header_nav_controls.d.ts.map