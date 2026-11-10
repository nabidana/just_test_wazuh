import { FC } from 'react';
import { Observable } from 'rxjs';
import { MountPoint } from '../../../types';
import './header_controls_container.scss';
interface HeaderControlsContainerProps {
    controls$: Observable<MountPoint | undefined>;
    className?: string;
    'data-test-subj'?: string;
}
export declare const HeaderControlsContainer: FC<HeaderControlsContainerProps>;
export {};
//# sourceMappingURL=header_controls_container.d.ts.map