import { FunctionComponent } from 'react';
import { History } from 'history';
import { Observable } from 'rxjs';
import type { MountPoint } from '../../types';
import { AppLeaveHandler, AppStatus, Mounter } from '../types';
interface Props {
    mounters: Map<string, Mounter>;
    history: History;
    appStatuses$: Observable<Map<string, AppStatus>>;
    setAppLeaveHandler: (appId: string, handler: AppLeaveHandler) => void;
    setAppActionMenu: (appId: string, mount: MountPoint | undefined) => void;
    setAppLeftControls: (appId: string, mount: MountPoint | undefined) => void;
    setAppCenterControls: (appId: string, mount: MountPoint | undefined) => void;
    setAppRightControls: (appId: string, mount: MountPoint | undefined) => void;
    setAppBadgeControls: (appId: string, mount: MountPoint | undefined) => void;
    setAppDescriptionControls: (appId: string, mount: MountPoint | undefined) => void;
    setAppBottomControls: (appId: string, mount: MountPoint | undefined) => void;
    setIsMounting: (isMounting: boolean) => void;
}
export declare const AppRouter: FunctionComponent<Props>;
export {};
//# sourceMappingURL=app_router.d.ts.map