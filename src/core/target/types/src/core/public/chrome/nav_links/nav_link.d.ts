import { EuiIconType } from '@elastic/eui/src/components/icon/icon';
import { AppCategory } from '../../';
/**
 * @public
 */
export interface ChromeNavLink {
    /**
     * A unique identifier for looking up links.
     */
    readonly id: string;
    /**
     * The title of the application.
     */
    readonly title: string;
    /**
     * The category the app lives in
     */
    readonly category?: AppCategory;
    /**
     * The base route used to open the root of an application.
     */
    readonly baseUrl: string;
    /**
     * The route used to open the {@link AppBase.defaultPath | default path } of an application.
     * If unset, `baseUrl` will be used instead.
     */
    readonly url?: string;
    /**
     * An ordinal used to sort nav links relative to one another for display.
     */
    readonly order?: number;
    /**
     * A tooltip shown when hovering over an app link.
     */
    readonly tooltip?: string;
    /**
     * A EUI iconType that will be used for the app's icon. This icon
     * takes precedence over the `icon` property.
     */
    readonly euiIconType?: EuiIconType;
    /**
     * A URL to an image file used as an icon. Used as a fallback
     * if `euiIconType` is not provided.
     */
    readonly icon?: string;
    /**
     * Settled state between `url`, `baseUrl`, and `active`
     */
    readonly href: string;
    /**
     * Disables a link from being clickable.
     *
     * @internalRemarks
     * This is only used by the ML and Graph plugins currently. They use this field
     * to disable the nav link when the license is expired.
     */
    readonly disabled?: boolean;
    /**
     * Hides a link from the navigation.
     */
    readonly hidden?: boolean;
    /**
     * Description of the nav link
     */
    readonly description?: string;
}
/** @public */
export declare type ChromeNavLinkUpdateableFields = Partial<Pick<ChromeNavLink, 'disabled' | 'hidden' | 'url' | 'href'>>;
export declare class NavLinkWrapper {
    readonly id: string;
    readonly properties: Readonly<ChromeNavLink>;
    constructor(properties: ChromeNavLink);
    update(newProps: ChromeNavLinkUpdateableFields): NavLinkWrapper;
}
//# sourceMappingURL=nav_link.d.ts.map