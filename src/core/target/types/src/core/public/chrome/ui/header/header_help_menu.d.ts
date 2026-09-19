/// <reference types="@osd/i18n/node_modules/@types/react-intl" />
import * as Rx from 'rxjs';
import React from 'react';
import { InjectedIntl } from '@osd/i18n/react';
import { EuiButtonEmptyProps } from '@elastic/eui';
import { ExclusiveUnion } from '@elastic/eui';
import { ChromeHelpExtension } from '../../chrome_service';
/** @public */
export declare type ChromeHelpExtensionMenuGitHubLink = EuiButtonEmptyProps & {
    /**
     * Creates a link to a new github issue in the OpenSearch Dashboards repo
     */
    linkType: 'github';
    /**
     * Include at least one app-specific label to be applied to the new github issue
     */
    labels: string[];
    /**
     * Provides initial text for the title of the issue
     */
    title?: string;
};
/** @public */
export declare type ChromeHelpExtensionMenuDiscussLink = EuiButtonEmptyProps & {
    /**
     * Creates a generic give feedback link with comment icon
     */
    linkType: 'discuss';
    /**
     * URL to discuss page.
     * i.e. https://discuss.opendistrocommunity.dev/
     */
    href: string;
};
/** @public */
export declare type ChromeHelpExtensionMenuDocumentationLink = EuiButtonEmptyProps & {
    /**
     * Creates a deep-link to app-specific documentation
     */
    linkType: 'documentation';
    /**
     * URL to documentation page.
     * i.e. `${OPENSEARCH_DOCS}${appName}`,
     */
    href: string;
};
/** @public */
export declare type ChromeHelpExtensionMenuCustomLink = EuiButtonEmptyProps & {
    /**
     * Extend EuiButtonEmpty to provide extra functionality
     */
    linkType: 'custom';
    /**
     * Content of the button (in lieu of `children`)
     */
    content: React.ReactNode;
};
/** @public */
export declare type ChromeHelpExtensionMenuLink = ExclusiveUnion<ChromeHelpExtensionMenuGitHubLink, ExclusiveUnion<ChromeHelpExtensionMenuDiscussLink, ExclusiveUnion<ChromeHelpExtensionMenuDocumentationLink, ChromeHelpExtensionMenuCustomLink>>>;
interface Props {
    helpExtension$: Rx.Observable<ChromeHelpExtension | undefined>;
    helpSupportUrl$: Rx.Observable<string>;
    intl: InjectedIntl;
    opensearchDashboardsVersion: string;
    useDefaultContent?: boolean;
    opensearchDashboardsDocLink: string;
    surveyLink?: string;
    useUpdatedAppearance?: boolean;
    darkmode: boolean;
}
export declare const HeaderHelpMenu: React.ComponentClass<Pick<Props, "opensearchDashboardsVersion" | "helpExtension$" | "helpSupportUrl$" | "useDefaultContent" | "opensearchDashboardsDocLink" | "surveyLink" | "useUpdatedAppearance" | "darkmode">, any> & {
    WrappedComponent: React.ComponentType<Props & ReactIntl.InjectedIntlProps>;
};
export {};
//# sourceMappingURL=header_help_menu.d.ts.map