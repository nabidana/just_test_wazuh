import { TypeOf } from '@osd/config-schema';
import { ConfigDeprecationProvider } from 'packages/osd-config';
export declare type OpenSearchDashboardsConfigType = TypeOf<typeof config.schema>;
export declare const config: {
    path: string;
    schema: import("@osd/config-schema").ObjectType<{
        enabled: import("@osd/config-schema").Type<boolean>;
        index: import("@osd/config-schema").Type<string>;
        configIndex: import("@osd/config-schema").Type<string>;
        autocompleteTerminateAfter: import("@osd/config-schema").Type<import("moment").Duration>;
        autocompleteTimeout: import("@osd/config-schema").Type<import("moment").Duration>;
        branding: import("@osd/config-schema").ObjectType<{
            logo: import("@osd/config-schema").ObjectType<{
                defaultUrl: import("@osd/config-schema").Type<string>;
                darkModeUrl: import("@osd/config-schema").Type<string>;
            }>;
            mark: import("@osd/config-schema").ObjectType<{
                defaultUrl: import("@osd/config-schema").Type<string>;
                darkModeUrl: import("@osd/config-schema").Type<string>;
            }>;
            loadingLogo: import("@osd/config-schema").ObjectType<{
                defaultUrl: import("@osd/config-schema").Type<string>;
                darkModeUrl: import("@osd/config-schema").Type<string>;
            }>;
            faviconUrl: import("@osd/config-schema").Type<string>;
            applicationTitle: import("@osd/config-schema").Type<string>;
            useExpandedHeader: import("@osd/config-schema").Type<boolean>;
        }>;
        survey: import("@osd/config-schema").ObjectType<{
            url: import("@osd/config-schema").Type<string>;
        }>;
        dashboardAdmin: import("@osd/config-schema").ObjectType<{
            groups: import("@osd/config-schema").Type<string[]>;
            users: import("@osd/config-schema").Type<string[]>;
        }>;
        futureNavigation: import("@osd/config-schema").Type<boolean>;
    }>;
    deprecations: ConfigDeprecationProvider;
};
//# sourceMappingURL=opensearch_dashboards_config.d.ts.map