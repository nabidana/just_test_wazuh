/// <reference types="react" />
/// <reference types="@elastic/eui" />
import { ScopedHistory } from 'opensearch-dashboards/public';
import { History } from 'history';
interface LocationObject {
    pathname?: string;
    search?: string;
    hash?: string;
}
export declare const toLocationObject: (to: string | LocationObject) => LocationObject;
export declare const reactRouterNavigate: (history: ScopedHistory | History, to: string | LocationObject, onClickCallback?: Function | undefined) => {
    href: string;
    onClick: (event: any) => void;
};
export declare const reactRouterOnClickHandler: (history: ScopedHistory | History, to: string | LocationObject, onClickCallback?: Function | undefined) => (event: any) => void;
export declare const getScopedBreadcrumbs: (crumbs: import("@opensearch-project/oui/src/eui_components/breadcrumbs/breadcrumbs").EuiBreadcrumb[] | undefined, appHistory: ScopedHistory) => ({
    href: string;
    onClick: (event: any) => void;
    className?: string | undefined;
    'aria-label'?: string | undefined;
    'data-test-subj'?: string | undefined;
    text: import("react").ReactNode;
    truncate?: boolean | undefined;
} | {
    className?: string | undefined;
    'aria-label'?: string | undefined;
    'data-test-subj'?: string | undefined;
    text: import("react").ReactNode;
    href?: string | undefined;
    onClick?: ((event: import("react").MouseEvent<HTMLAnchorElement, MouseEvent>) => void) | undefined;
    truncate?: boolean | undefined;
})[];
export {};
//# sourceMappingURL=react_router_navigate.d.ts.map