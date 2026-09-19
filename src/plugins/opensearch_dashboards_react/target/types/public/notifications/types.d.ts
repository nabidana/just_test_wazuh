import * as React from 'react';
import { Toast } from '../../../../core/public';
export interface ToastInput {
    title?: React.ReactNode;
    body?: React.ReactNode;
    color?: Toast['color'];
    iconType?: Toast['iconType'];
    toastLifeTimeMs?: Toast['toastLifeTimeMs'];
    onClose?: Toast['onClose'];
}
export interface OpenSearchDashboardsReactNotifications {
    toasts: {
        show: (input: ToastInput) => void;
        success: (input: ToastInput) => void;
        warning: (input: ToastInput) => void;
        danger: (input: ToastInput) => void;
    };
}
//# sourceMappingURL=types.d.ts.map