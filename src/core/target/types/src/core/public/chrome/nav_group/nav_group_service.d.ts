import { BehaviorSubject, Observable } from 'rxjs';
import { AppCategory, ChromeNavGroup, WorkspacesStart } from 'opensearch-dashboards/public';
import { IUiSettingsClient } from '../../ui_settings';
import { ChromeNavLinks } from '../nav_links';
import { InternalApplicationStart } from '../../application';
import { ChromeBreadcrumbEnricher } from '../chrome_service';
export declare const CURRENT_NAV_GROUP_ID = "core.chrome.currentNavGroupId";
/** @public */
export interface ChromeRegistrationNavLink {
    id: string;
    title?: string;
    category?: AppCategory;
    order?: number;
    /**
     * link with parentNavLinkId field will be displayed as nested items in navigation.
     */
    parentNavLinkId?: string;
    /**
     * If the nav link should be shown in 'all' nav group
     */
    showInAllNavGroup?: boolean;
}
export declare type NavGroupItemInMap = ChromeNavGroup & {
    navLinks: ChromeRegistrationNavLink[];
};
export declare type ChromeNavGroupUpdater = (navGroup: ChromeNavGroup) => Partial<ChromeNavGroup> | void;
export interface ChromeNavGroupServiceSetupContract {
    addNavLinksToGroup: (navGroup: ChromeNavGroup, navLinks: ChromeRegistrationNavLink[]) => void;
    /**
     * Get a boolean value to indicates whether use case is enabled
     */
    getNavGroupEnabled: () => boolean;
    registerNavGroupUpdater: (navGroupUpdater: Observable<ChromeNavGroupUpdater>) => () => void;
}
export interface ChromeNavGroupServiceStartContract {
    getNavGroupsMap$: () => Observable<Record<string, NavGroupItemInMap>>;
    getNavGroupEnabled: ChromeNavGroupServiceSetupContract['getNavGroupEnabled'];
    /**
     * Get an observable of the current selected nav group
     */
    getCurrentNavGroup$: () => Observable<NavGroupItemInMap | undefined>;
    /**
     * Set current selected nav group
     * @param navGroupId The id of the nav group to be set as current
     */
    setCurrentNavGroup: (navGroupId: string | undefined) => void;
}
/** @internal */
export declare class ChromeNavGroupService {
    private readonly navGroupsMap$;
    private readonly stop$;
    private navLinks$;
    private navGroupEnabled;
    private navGroupEnabledUiSettingsSubscription;
    private navGroupUpdaters$$;
    private currentNavGroup$;
    private currentNavGroupSubscription;
    private currentAppIdSubscription;
    private addNavLinkToGroup;
    private sortNavGroupNavLinks;
    private getNavLinksForAllUseCase;
    private getSortedNavGroupsMap$;
    private getUpdatedNavGroupsMap$;
    setup({ uiSettings }: {
        uiSettings: IUiSettingsClient;
    }): ChromeNavGroupServiceSetupContract;
    start({ navLinks, application, breadcrumbsEnricher$, workspaces, }: {
        navLinks: ChromeNavLinks;
        application: InternalApplicationStart;
        breadcrumbsEnricher$: BehaviorSubject<ChromeBreadcrumbEnricher | undefined>;
        workspaces: WorkspacesStart;
    }): Promise<ChromeNavGroupServiceStartContract>;
    /**
     * prepend current nav group into existing breadcrumbs and return new breadcrumbs, the new breadcrumbs will looks like
     * Home > Search > Visualization
     * @param breadcrumbs existing breadcrumbs
     * @param currentNavGroup current nav group object
     * @param navigateToApp
     * @returns new breadcrumbs array
     */
    private prependCurrentNavGroupToBreadcrumbs;
    stop(): Promise<void>;
}
//# sourceMappingURL=nav_group_service.d.ts.map