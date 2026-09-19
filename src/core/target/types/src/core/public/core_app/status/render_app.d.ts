import type { AppMountParameters } from '../../application';
import type { HttpSetup } from '../../http';
import type { NotificationsSetup } from '../../notifications';
interface Deps {
    http: HttpSetup;
    notifications: NotificationsSetup;
}
export declare const renderApp: ({ element }: AppMountParameters, { http, notifications }: Deps) => () => void;
export {};
//# sourceMappingURL=render_app.d.ts.map