import React, { ComponentType } from 'react';
import * as H from 'history';
export declare const WithMemoryRouter: (initialEntries?: string[], initialIndex?: number) => (WrappedComponent: ComponentType) => (props: any) => React.JSX.Element;
export declare const WithRoute: (componentRoutePath?: string, onRouter?: (router: any) => void) => (WrappedComponent: ComponentType) => (props: any) => React.JSX.Element;
interface Router {
    history: Partial<H.History>;
    route: {
        location: H.Location;
    };
}
export declare const reactRouterMock: Router;
export {};
//# sourceMappingURL=router_helpers.d.ts.map