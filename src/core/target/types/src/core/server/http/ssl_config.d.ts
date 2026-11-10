import { TypeOf } from '@osd/config-schema';
export declare const sslSchema: import("@osd/config-schema").ObjectType<{
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
declare type SslConfigType = TypeOf<typeof sslSchema>;
export declare class SslConfig {
    enabled: boolean;
    redirectHttpFromPort: number | undefined;
    key: string | undefined;
    certificate: string | undefined;
    certificateAuthorities: string[] | undefined;
    keyPassphrase: string | undefined;
    requestCert: boolean;
    rejectUnauthorized: boolean;
    cipherSuites: string[];
    supportedProtocols: string[];
    /**
     * @internal
     */
    constructor(config: SslConfigType);
    /**
     * Options that affect the OpenSSL protocol behavior via numeric bitmask of the SSL_OP_* options from OpenSSL Options.
     */
    getSecureOptions(): number;
}
export {};
//# sourceMappingURL=ssl_config.d.ts.map