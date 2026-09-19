import { IBasePath } from '../../http';
import { AppMountParameters } from '../../application';
interface Deps {
    basePath: IBasePath;
}
/**
 * Renders UI for displaying error messages.
 * @internal
 */
export declare const renderApp: ({ element, history }: AppMountParameters, { basePath }: Deps) => () => void;
export {};
//# sourceMappingURL=error_application.d.ts.map