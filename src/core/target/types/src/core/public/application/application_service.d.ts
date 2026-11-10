import { History } from 'history';
import { HttpSetup, HttpStart } from '../http';
import { OverlayStart } from '../overlays';
import { ContextSetup } from '../context';
import { InternalApplicationSetup, InternalApplicationStart } from './types';
import { WorkspacesStart } from '../workspace';
interface SetupDeps {
    context: ContextSetup;
    http: HttpSetup;
    history?: History<any>;
    /** Used to redirect to external urls */
    redirectTo?: (path: string) => void;
}
interface StartDeps {
    http: HttpStart;
    overlays: OverlayStart;
    workspaces: WorkspacesStart;
}
/**
 * Service that is responsible for registering new applications.
 * @internal
 */
export declare class ApplicationService {
    private readonly apps;
    private readonly mounters;
    private readonly capabilities;
    private readonly appInternalStates;
    private currentAppId$;
    private currentActionMenu$;
    private currentLeftControls$;
    private currentCenterControls$;
    private currentRightControls$;
    private currentBadgeControls$;
    private currentDescriptionControls$;
    private currentBottomControls$;
    private readonly statusUpdaters$;
    private readonly subscriptions;
    private stop$;
    private registrationClosed;
    private history?;
    private mountContext?;
    private navigate?;
    private redirectTo?;
    setup({ context, http: { basePath }, redirectTo, history, }: SetupDeps): InternalApplicationSetup;
    start({ http, overlays, workspaces }: StartDeps): Promise<InternalApplicationStart>;
    private setAppLeaveHandler;
    private setAppActionMenu;
    private refreshCurrentActionMenu;
    private setAppLeftControls;
    private setAppCenterControls;
    private setAppRightControls;
    private setAppBadgeControls;
    private setAppDescriptionControls;
    private setAppBottomControls;
    private setAppControls;
    private refreshCurrentControls;
    private shouldNavigate;
    private onBeforeUnload;
    stop(): void;
}
export {};
//# sourceMappingURL=application_service.d.ts.map