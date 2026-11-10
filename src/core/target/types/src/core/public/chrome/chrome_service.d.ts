/// <reference types="react" />
import { EuiBreadcrumb, IconType } from '@elastic/eui';
import { Observable } from 'rxjs';
import { InternalApplicationStart } from '../application';
import { DocLinksStart } from '../doc_links';
import { HttpStart } from '../http';
import { InjectedMetadataStart } from '../injected_metadata';
import { NotificationsStart } from '../notifications';
import { IUiSettingsClient } from '../ui_settings';
import { HeaderVariant } from './constants';
import { ChromeDocTitle } from './doc_title';
import { ChromeNavControls } from './nav_controls';
import { ChromeNavLinks, ChromeNavLink } from './nav_links';
import { ChromeRecentlyAccessed } from './recently_accessed';
import { ChromeHelpExtensionMenuLink } from './ui/header/header_help_menu';
import { Branding, WorkspacesStart } from '../';
import type { Logos } from '../../common/types';
import { OverlayStart } from '../overlays';
import { ChromeNavGroupServiceSetupContract, ChromeNavGroupServiceStartContract } from './nav_group';
import { GlobalSearchServiceSetupContract, GlobalSearchServiceStartContract } from './global_search';
export { ChromeNavControls, ChromeRecentlyAccessed, ChromeDocTitle };
/** @public */
export interface ChromeBadge {
    text: string;
    tooltip: string;
    iconType?: IconType;
}
/** @public */
export declare type ChromeBreadcrumb = EuiBreadcrumb;
/** @public */
export declare type ChromeBreadcrumbEnricher = (breadcrumbs: ChromeBreadcrumb[]) => ChromeBreadcrumb[];
/** @public */
export declare type ChromeBranding = Branding;
/** @public */
export interface ChromeHelpExtension {
    /**
     * Provide your plugin's name to create a header for separation
     */
    appName: string;
    /**
     * Creates unified links for sending users to documentation, GitHub, Discuss, or a custom link/button
     */
    links?: ChromeHelpExtensionMenuLink[];
    /**
     * Custom content to occur below the list of links
     */
    content?: (element: HTMLDivElement) => () => void;
}
interface ConstructorParams {
    browserSupportsCsp: boolean;
}
export interface SetupDeps {
    uiSettings: IUiSettingsClient;
}
export interface StartDeps {
    application: InternalApplicationStart;
    docLinks: DocLinksStart;
    http: HttpStart;
    injectedMetadata: InjectedMetadataStart;
    notifications: NotificationsStart;
    uiSettings: IUiSettingsClient;
    overlays: OverlayStart;
    workspaces: WorkspacesStart;
}
declare type CollapsibleNavHeaderRender = () => JSX.Element | null;
/** @internal */
export declare class ChromeService {
    private readonly params;
    private isVisible$;
    private isForceHidden$;
    private headerVariant$;
    private headerVariantOverride$;
    private readonly stop$;
    private readonly navControls;
    private readonly navLinks;
    private readonly recentlyAccessed;
    private readonly docTitle;
    private readonly navGroup;
    private readonly globalSearch;
    private useUpdatedHeader;
    private updatedHeaderSubscription;
    private collapsibleNavHeaderRender?;
    constructor(params: ConstructorParams);
    /**
     * These observables allow consumers to toggle the chrome visibility via either:
     *   1. Using setIsVisible() to trigger the next chromeHidden$
     *   2. Setting `chromeless` when registering an application, which will
     *      reset the visibility whenever the next application is mounted
     *   3. Having "embed" in the query string
     */
    private initVisibility;
    private initHeaderVariant;
    setup({ uiSettings }: SetupDeps): ChromeSetup;
    start({ application, docLinks, http, injectedMetadata, notifications, uiSettings, overlays, workspaces, }: StartDeps): Promise<InternalChromeStart>;
    stop(): void;
}
/**
 * ChromeSetup allows plugins to customize the global chrome header UI rendering
 * before the header UI is mounted.
 *
 * @example
 * Customize the Collapsible Nav's (left nav menu) header section:
 * ```ts
 * core.chrome.registerCollapsibleNavHeader(() => <CustomNavHeader />)
 * ```
 */
export interface ChromeSetup {
    registerCollapsibleNavHeader: (render: CollapsibleNavHeaderRender) => void;
    navGroup: ChromeNavGroupServiceSetupContract;
    /** {@inheritdoc GlobalSearchService} */
    globalSearch: GlobalSearchServiceSetupContract;
}
/**
 * ChromeStart allows plugins to customize the global chrome header UI and
 * enrich the UX with additional information about the current location of the
 * browser.
 *
 * @remarks
 * While ChromeStart exposes many APIs, they should be used sparingly and the
 * developer should understand how they affect other plugins and applications.
 *
 * @example
 * How to add a recently accessed item to the sidebar:
 * ```ts
 * core.chrome.recentlyAccessed.add('/app/map/1234', 'Map 1234', '1234');
 * ```
 *
 * @example
 * How to set the help dropdown extension:
 * ```tsx
 * core.chrome.setHelpExtension(elem => {
 *   ReactDOM.render(<MyHelpComponent />, elem);
 *   return () => ReactDOM.unmountComponentAtNode(elem);
 * });
 * ```
 *
 * @public
 */
export interface ChromeStart {
    /** {@inheritdoc ChromeNavLinks} */
    navLinks: ChromeNavLinks;
    /** {@inheritdoc ChromeNavControls} */
    navControls: ChromeNavControls;
    /** {@inheritdoc ChromeRecentlyAccessed} */
    recentlyAccessed: ChromeRecentlyAccessed;
    /** {@inheritdoc ChromeDocTitle} */
    docTitle: ChromeDocTitle;
    /** {@inheritdoc NavGroupService} */
    navGroup: ChromeNavGroupServiceStartContract;
    /** {@inheritdoc Logos} */
    readonly logos: Logos;
    /** {@inheritdoc GlobalSearchService} */
    globalSearch: GlobalSearchServiceStartContract;
    /**
     * Sets the current app's title
     *
     * @internalRemarks
     * This should be handled by the application service once it is in charge
     * of mounting applications.
     */
    setAppTitle(appTitle: string): void;
    /**
     * Get an observable of the current visibility state of the chrome.
     */
    getIsVisible$(): Observable<boolean>;
    /**
     * Set the temporary visibility for the chrome. This does nothing if the chrome is hidden
     * by default and should be used to hide the chrome for things like full-screen modes
     * with an exit button.
     */
    setIsVisible(isVisible: boolean): void;
    /**
     * Get an observable of the current header variant.
     */
    getHeaderVariant$(): Observable<HeaderVariant | undefined>;
    /**
     * Set or unset the temporary variant for the header.
     */
    setHeaderVariant(variant?: HeaderVariant): void;
    /**
     * Get the current set of classNames that will be set on the application container.
     */
    getApplicationClasses$(): Observable<string[]>;
    /**
     * Add a className that should be set on the application container.
     */
    addApplicationClass(className: string): void;
    /**
     * Remove a className added with `addApplicationClass()`. If className is unknown it is ignored.
     */
    removeApplicationClass(className: string): void;
    /**
     * Get an observable of the current badge
     */
    getBadge$(): Observable<ChromeBadge | undefined>;
    /**
     * Override the current badge
     */
    setBadge(badge?: ChromeBadge): void;
    /**
     * Get an observable of the current list of breadcrumbs
     */
    getBreadcrumbs$(): Observable<ChromeBreadcrumb[]>;
    /**
     * Override the current set of breadcrumbs
     */
    setBreadcrumbs(newBreadcrumbs: ChromeBreadcrumb[]): void;
    /**
     * Get an observable of the current breadcrumbs enricher
     */
    getBreadcrumbsEnricher$(): Observable<ChromeBreadcrumbEnricher | undefined>;
    /**
     * Override the current ChromeBreadcrumbEnricher
     */
    setBreadcrumbsEnricher(newBreadcrumbsEnricher: ChromeBreadcrumbEnricher | undefined): void;
    /**
     * Get an observable of the current custom nav link
     */
    getCustomNavLink$(): Observable<Partial<ChromeNavLink> | undefined>;
    /**
     * Override the current set of custom nav link
     */
    setCustomNavLink(newCustomNavLink?: Partial<ChromeNavLink>): void;
    /**
     * Get an observable of the current custom help content
     */
    getHelpExtension$(): Observable<ChromeHelpExtension | undefined>;
    /**
     * Override the current set of custom help content
     */
    setHelpExtension(helpExtension?: ChromeHelpExtension): void;
    /**
     * Override the default support URL shown in the help menu
     * @param url The updated support URL
     */
    setHelpSupportUrl(url: string): void;
    /**
     * Get an observable of the current locked state of the nav drawer.
     */
    getIsNavDrawerLocked$(): Observable<boolean>;
}
/** @internal */
export interface InternalChromeStart extends ChromeStart {
    /**
     * Used only by MountingService to render the header UI
     * @internal
     */
    getHeaderComponent(): JSX.Element;
}
//# sourceMappingURL=chrome_service.d.ts.map