/**
 * CSP configuration for use in OpenSearch Dashboards.
 * @public
 */
export interface ICspConfig {
    /**
     * The CSP rules used for OpenSearch Dashboards.
     */
    readonly rules: string[];
    /**
     * Specify whether browsers that do not support CSP should be
     * able to use OpenSearch Dashboards. Use `true` to block and `false` to allow.
     */
    readonly strict: boolean;
    /**
     * Specify whether users with legacy browsers should be warned
     * about their lack of OpenSearch Dashboards security compliance.
     */
    readonly warnLegacyBrowsers: boolean;
    /**
     * The CSP rules in a formatted directives string for use
     * in a `Content-Security-Policy` header.
     */
    readonly header: string;
}
/**
 * CSP configuration for use in OpenSearch Dashboards.
 * @public
 */
export declare class CspConfig implements ICspConfig {
    static readonly DEFAULT: CspConfig;
    readonly rules: string[];
    readonly strict: boolean;
    readonly warnLegacyBrowsers: boolean;
    readonly header: string;
    /**
     * Returns the default CSP configuration when passed with no config
     * @internal
     */
    constructor(rawCspConfig?: Partial<Omit<ICspConfig, 'header'>>);
}
//# sourceMappingURL=csp_config.d.ts.map