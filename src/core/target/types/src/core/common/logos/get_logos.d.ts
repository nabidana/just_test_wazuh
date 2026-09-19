import type { Logos } from './types';
import { Branding } from '../../types';
export declare const OPENSEARCH_DASHBOARDS_THEMED = "ui/logos/wazuh_dashboards.svg";
export declare const OPENSEARCH_DASHBOARDS_ON_LIGHT = "ui/logos/wazuh_dashboards_on_light.svg";
export declare const OPENSEARCH_DASHBOARDS_ON_DARK = "ui/logos/wazuh_dashboards_on_dark.svg";
export declare const OPENSEARCH_THEMED = "ui/logos/wazuh.svg";
export declare const OPENSEARCH_ON_LIGHT = "ui/logos/wazuh_on_light.svg";
export declare const OPENSEARCH_ON_DARK = "ui/logos/wazuh_on_dark.svg";
export declare const MARK_THEMED = "ui/logos/wazuh_mark.svg";
export declare const MARK_ON_LIGHT = "ui/logos/wazuh_mark_on_light.svg";
export declare const MARK_ON_DARK = "ui/logos/wazuh_mark_on_dark.svg";
export declare const CENTER_MARK_THEMED = "ui/logos/wazuh_center_mark.svg";
export declare const CENTER_MARK_ON_LIGHT = "ui/logos/wazuh_center_mark_on_light.svg";
export declare const CENTER_MARK_ON_DARK = "ui/logos/wazuh_center_mark_on_dark.svg";
export declare const ANIMATED_MARK_THEMED = "ui/logos/spinner.svg";
export declare const ANIMATED_MARK_ON_LIGHT = "ui/logos/spinner_on_light.svg";
export declare const ANIMATED_MARK_ON_DARK = "ui/logos/spinner_on_dark.svg";
/**
 * Generates all the combinations of logos based on the color-scheme and branding config
 *
 * Ideally, the default logos would point to color-scheme-aware (aka themed) imagery while the dark and light
 * subtypes reference the dark and light variants. Sadly, Safari doesn't support color-schemes in SVGs yet.
 * https://bugs.webkit.org/show_bug.cgi?id=199134
 */
export declare const getLogos: (branding: Branding | undefined, serverBasePath: string) => Logos;
//# sourceMappingURL=get_logos.d.ts.map