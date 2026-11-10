import React from 'react';
/**
 * Service that is responsible for i18n capabilities.
 * @internal
 */
export declare class I18nService {
    /**
     * Used exclusively to give a Context component to FatalErrorsService which
     * may render before Core successfully sets up or starts.
     *
     * Separated from `start` to disambiguate that this can be called from within
     * Core outside the lifecycle flow.
     * @internal
     */
    getContext(): I18nStart;
    start(): I18nStart;
    stop(): void;
}
/**
 * I18nStart.Context is required by any localizable React component from \@osd/i18n and \@elastic/eui packages
 * and is supposed to be used as the topmost component for any i18n-compatible React tree.
 *
 * @public
 *
 */
export interface I18nStart {
    /**
     * React Context provider required as the topmost component for any i18n-compatible React tree.
     */
    Context: ({ children }: {
        children: React.ReactNode;
    }) => JSX.Element;
}
//# sourceMappingURL=i18n_service.d.ts.map