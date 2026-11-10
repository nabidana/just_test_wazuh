import React from 'react';
import { OverlayStart } from 'opensearch-dashboards/public';
import { I18nStart } from '../../i18n';
interface ErrorToastProps {
    title: string;
    error: Error;
    toastMessage: string;
    openModal: OverlayStart['openModal'];
    i18nContext: () => I18nStart['Context'];
}
export declare function ErrorToast({ title, error, toastMessage, openModal, i18nContext, }: ErrorToastProps): React.JSX.Element;
export {};
//# sourceMappingURL=error_toast.d.ts.map