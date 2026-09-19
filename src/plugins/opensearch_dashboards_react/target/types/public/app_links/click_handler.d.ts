import React from 'react';
import { ApplicationStart } from 'src/core/public';
interface CreateCrossAppClickHandlerOptions {
    container: HTMLElement;
    navigateToUrl: ApplicationStart['navigateToUrl'];
}
export declare const createNavigateToUrlClickHandler: ({ container, navigateToUrl, }: CreateCrossAppClickHandlerOptions) => React.MouseEventHandler<HTMLElement>;
export {};
//# sourceMappingURL=click_handler.d.ts.map