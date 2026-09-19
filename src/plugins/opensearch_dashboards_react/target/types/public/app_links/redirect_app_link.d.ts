import { FunctionComponent } from 'react';
import { ApplicationStart } from 'src/core/public';
interface RedirectCrossAppLinksProps {
    application: ApplicationStart;
    className?: string;
    'data-test-subj'?: string;
}
/**
 * Utility component that will intercept click events on children anchor (`<a>`) elements to call
 * `application.navigateToUrl` with the link's href. This will trigger SPA friendly navigation
 * when the link points to a valid OpenSearch Dashboards app.
 *
 * @example
 * ```tsx
 * <RedirectCrossAppLinks application={application}>
 *   <a href="/base-path/app/another-app/some-path">Go to another-app</a>
 * </RedirectCrossAppLinks>
 * ```
 *
 * @remarks
 * It is recommended to use the component at the highest possible level of the component tree that would
 * require to handle the links. A good practice is to consider it as a context provider and to use it
 * at the root level of an application or of the page that require the feature.
 */
export declare const RedirectAppLinks: FunctionComponent<RedirectCrossAppLinksProps>;
export {};
//# sourceMappingURL=redirect_app_link.d.ts.map