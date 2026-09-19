import { FunctionComponent } from 'react';
import type { MountPoint } from '../../types';
import { AppLeaveHandler, AppStatus, Mounter } from '../types';
import { ScopedHistory } from '../scoped_history';
import './app_container.scss';
interface Props {
    /** Path application is mounted on without the global basePath */
    appPath: string;
    appId: string;
    mounter?: Mounter;
    appStatus: AppStatus;
    setAppLeaveHandler: (appId: string, handler: AppLeaveHandler) => void;
    setAppActionMenu: (appId: string, mount: MountPoint | undefined) => void;
    setAppLeftControls: (appId: string, mount: MountPoint | undefined) => void;
    setAppCenterControls: (appId: string, mount: MountPoint | undefined) => void;
    setAppRightControls: (appId: string, mount: MountPoint | undefined) => void;
    setAppBadgeControls: (appId: string, mount: MountPoint | undefined) => void;
    setAppDescriptionControls: (appId: string, mount: MountPoint | undefined) => void;
    setAppBottomControls: (appId: string, mount: MountPoint | undefined) => void;
    createScopedHistory: (appUrl: string) => ScopedHistory;
    setIsMounting: (isMounting: boolean) => void;
}
export declare const AppContainer: FunctionComponent<Props>;
export {};
//# sourceMappingURL=app_container.d.ts.map