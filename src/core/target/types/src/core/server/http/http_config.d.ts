import { ByteSizeValue, TypeOf } from '@osd/config-schema';
import { CspConfigType, ICspConfig } from '../csp';
import { SslConfig } from './ssl_config';
export declare const config: {
    path: string;
    schema: import("@osd/config-schema").ObjectType<{
        name: import("@osd/config-schema").Type<string>;
        autoListen: import("@osd/config-schema").Type<boolean>;
        basePath: import("@osd/config-schema").Type<string | undefined>;
        cors: import("@osd/config-schema").Type<boolean>;
        customResponseHeaders: import("@osd/config-schema").Type<Record<string, any>>;
        host: import("@osd/config-schema").Type<string>;
        maxPayload: import("@osd/config-schema").Type<ByteSizeValue>;
        port: import("@osd/config-schema").Type<number>;
        rewriteBasePath: import("@osd/config-schema").Type<boolean>;
        ssl: import("@osd/config-schema").ObjectType<{
            certificate: import("@osd/config-schema").Type<string | undefined>;
            certificateAuthorities: import("@osd/config-schema").Type<string | string[] | undefined>;
            cipherSuites: import("@osd/config-schema").Type<string[]>;
            enabled: import("@osd/config-schema").Type<boolean>;
            key: import("@osd/config-schema").Type<string | undefined>;
            keyPassphrase: import("@osd/config-schema").Type<string | undefined>;
            keystore: import("@osd/config-schema").ObjectType<{
                path: import("@osd/config-schema").Type<string | undefined>;
                password: import("@osd/config-schema").Type<string | undefined>;
            }>;
            truststore: import("@osd/config-schema").ObjectType<{
                path: import("@osd/config-schema").Type<string | undefined>;
                password: import("@osd/config-schema").Type<string | undefined>;
            }>;
            redirectHttpFromPort: import("@osd/config-schema").Type<number | undefined>;
            supportedProtocols: import("@osd/config-schema").Type<string[]>;
            clientAuthentication: import("@osd/config-schema").Type<"none" | "optional" | "required">;
        }>;
        keepaliveTimeout: import("@osd/config-schema").Type<number>;
        socketTimeout: import("@osd/config-schema").Type<number>;
        compression: import("@osd/config-schema").ObjectType<{
            enabled: import("@osd/config-schema").Type<boolean>;
            referrerWhitelist: import("@osd/config-schema").Type<string[] | undefined>;
        }>;
        uuid: import("@osd/config-schema").Type<string | undefined>;
        xsrf: import("@osd/config-schema").ObjectType<{
            disableProtection: import("@osd/config-schema").Type<boolean>;
            whitelist: import("@osd/config-schema").Type<string[]>;
        }>;
        requestId: import("@osd/config-schema").ObjectType<{
            allowFromAnyIp: import("@osd/config-schema").Type<boolean>;
            ipAllowlist: import("@osd/config-schema").Type<string[]>;
        }>;
    }>;
};
export declare type HttpConfigType = TypeOf<typeof config.schema>;
export declare class HttpConfig {
    name: string;
    autoListen: boolean;
    host: string;
    keepaliveTimeout: number;
    socketTimeout: number;
    port: number;
    cors: boolean | {
        origin: string[];
    };
    customResponseHeaders: Record<string, string | string[]>;
    maxPayload: ByteSizeValue;
    basePath?: string;
    rewriteBasePath: boolean;
    ssl: SslConfig;
    compression: {
        enabled: boolean;
        referrerWhitelist?: string[];
    };
    csp: ICspConfig;
    xsrf: {
        disableProtection: boolean;
        whitelist: string[];
    };
    requestId: {
        allowFromAnyIp: boolean;
        ipAllowlist: string[];
    };
    /**
     * @internal
     */
    constructor(rawHttpConfig: HttpConfigType, rawCspConfig: CspConfigType);
}
//# sourceMappingURL=http_config.d.ts.map