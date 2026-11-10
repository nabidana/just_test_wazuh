import React from 'react';
import * as Rx from 'rxjs';
import { EuiHeaderSectionItemButtonProps } from '@elastic/eui';
import { SavedObjectsNamespaceType } from 'src/core/public';
import { ChromeRecentlyAccessedHistoryItem, SavedObject } from 'opensearch-dashboards/public';
import { WorkspaceObject } from '../../../workspace';
import { HttpStart } from '../../../http';
import { ChromeNavLink } from '../../../';
import './recent_items.scss';
export interface Props {
    recentlyAccessed$: Rx.Observable<ChromeRecentlyAccessedHistoryItem[]>;
    workspaceList$: Rx.Observable<WorkspaceObject[]>;
    navigateToUrl: (url: string) => Promise<void>;
    basePath: HttpStart['basePath'];
    navLinks$: Rx.Observable<ChromeNavLink[]>;
    renderBreadcrumbs: React.JSX.Element;
    buttonSize?: EuiHeaderSectionItemButtonProps['size'];
    http: HttpStart;
    loadingCount$: Rx.Observable<number>;
    workspaceEnabled?: boolean;
}
interface SavedObjectMetadata {
    icon?: string;
    title?: string;
    editUrl?: string;
    inAppUrl?: {
        path: string;
        uiCapabilitiesPath: string;
    };
    namespaceType?: SavedObjectsNamespaceType;
}
export declare type SavedObjectWithMetadata<T = unknown> = SavedObject<T> & {
    meta: SavedObjectMetadata;
};
export declare const RecentItems: ({ recentlyAccessed$, workspaceList$, navigateToUrl, navLinks$, basePath, renderBreadcrumbs, buttonSize, http, loadingCount$, workspaceEnabled, }: Props) => React.JSX.Element;
export {};
//# sourceMappingURL=recent_items.d.ts.map