import React from 'react';
import { Observable } from 'rxjs';
import { ChromeBreadcrumb, ChromeBreadcrumbEnricher } from '../../chrome_service';
interface Props {
    appTitle$: Observable<string>;
    breadcrumbs$: Observable<ChromeBreadcrumb[]>;
    breadcrumbsEnricher$: Observable<ChromeBreadcrumbEnricher | undefined>;
    useUpdatedHeader?: boolean;
    renderFullLength?: boolean;
    hideTrailingSeparator?: boolean;
}
export declare function HeaderBreadcrumbs({ appTitle$, breadcrumbs$, breadcrumbsEnricher$, useUpdatedHeader, renderFullLength, hideTrailingSeparator, }: Props): React.JSX.Element;
export {};
//# sourceMappingURL=header_breadcrumbs.d.ts.map