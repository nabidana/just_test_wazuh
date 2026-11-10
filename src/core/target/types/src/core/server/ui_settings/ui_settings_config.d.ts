import { TypeOf } from '@osd/config-schema';
import { ServiceConfigDescriptor } from '../internal_types';
export declare const DEFAULT_THEME_VERSION = "v7";
declare const configSchema: import("@osd/config-schema").ObjectType<{
    overrides: import("@osd/config-schema").ObjectType<{}>;
    defaults: import("@osd/config-schema").ObjectType<{
        'theme:darkMode': import("@osd/config-schema").Type<boolean | undefined>;
        'theme:version': import("@osd/config-schema").Type<string | undefined>;
    }>;
}>;
export declare type UiSettingsConfigType = TypeOf<typeof configSchema>;
export declare const config: ServiceConfigDescriptor<UiSettingsConfigType>;
export {};
//# sourceMappingURL=ui_settings_config.d.ts.map