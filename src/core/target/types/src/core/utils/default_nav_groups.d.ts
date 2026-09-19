import { ChromeNavGroup, NavGroupType } from '../types';
export declare const ALL_USE_CASE_ID = "all";
export declare const OBSERVABILITY_USE_CASE_ID = "observability";
export declare const SECURITY_ANALYTICS_USE_CASE_ID = "security-analytics";
export declare const ESSENTIAL_USE_CASE_ID = "essentials";
export declare const SEARCH_USE_CASE_ID = "search";
declare const defaultNavGroups: {
    readonly dataAdministration: {
        readonly id: "dataAdministration";
        readonly title: string;
        readonly description: string;
        readonly order: 1000;
        readonly type: NavGroupType;
        readonly icon: "database";
    };
    readonly settingsAndSetup: {
        readonly id: "settingsAndSetup";
        readonly title: string;
        readonly description: string;
        readonly order: 2000;
        readonly type: NavGroupType;
        readonly icon: "gear";
    };
    readonly all: {
        readonly id: "all";
        readonly title: string;
        readonly description: string;
        readonly order: 3000;
        readonly icon: "wsAnalytics";
    };
    readonly observability: {
        readonly id: "observability";
        readonly title: string;
        readonly description: string;
        readonly order: 4000;
        readonly icon: "wsObservability";
    };
    readonly 'security-analytics': {
        readonly id: "security-analytics";
        readonly title: string;
        readonly description: string;
        readonly order: 5000;
        readonly icon: "wsSecurityAnalytics";
    };
    readonly essentials: {
        readonly id: "essentials";
        readonly title: string;
        readonly description: string;
        readonly order: 7000;
        readonly icon: "wsEssentials";
    };
    readonly search: {
        readonly id: "search";
        readonly title: string;
        readonly description: string;
        readonly order: 6000;
        readonly icon: "wsSearch";
    };
};
/** @internal */
export declare const DEFAULT_NAV_GROUPS: Record<keyof typeof defaultNavGroups, ChromeNavGroup>;
export {};
//# sourceMappingURL=default_nav_groups.d.ts.map