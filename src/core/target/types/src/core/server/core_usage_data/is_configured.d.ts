/**
 * Test whether a given config value is configured based on it's schema type.
 * Our configuration schema and code often accept and ignore empty values like
 * `opensearch.customHeaders: {}`. However, for telemetry purposes, we're
 * only interested when these values have been set to something that will
 * change the behaviour of OpenSearch Dashboards.
 */
export declare const isConfigured: {
    /**
     * config is a string with non-zero length
     */
    string: (config?: string | undefined) => boolean;
    /**
     * config is an array with non-zero length
     */
    array: (config?: string | unknown[] | undefined, defaultValue?: any) => boolean;
    /**
     * config is a string or array of strings where each element has non-zero length
     */
    stringOrArray: (config?: string | string[] | undefined, defaultValue?: any) => boolean;
    /**
     * config is a record with at least one key
     */
    record: (config?: Record<string, unknown> | undefined) => boolean;
    /**
     * config is a number
     */
    number: (config?: number | undefined) => boolean;
};
//# sourceMappingURL=is_configured.d.ts.map