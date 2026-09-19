import { FC } from 'react';
import { IconType } from '@elastic/eui';
import { Logos } from 'opensearch-dashboards/public';
import { ReactPluginBranding } from '../..';
import './index.scss';
interface Props {
    hideToolbar?: boolean;
    /** @deprecated use showIcon */
    iconType?: IconType;
    showIcon?: boolean;
    overlap?: boolean;
    showDevToolsLink?: boolean;
    showManagementLink?: boolean;
    title: JSX.Element | string;
    addBasePath: (path: string) => string;
    logos: Logos;
    /** @deprecated use logos */
    branding?: ReactPluginBranding;
}
export declare const OverviewPageHeader: FC<Props>;
export {};
//# sourceMappingURL=overview_page_header.d.ts.map