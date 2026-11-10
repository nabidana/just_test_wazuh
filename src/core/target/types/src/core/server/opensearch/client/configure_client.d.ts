import { Client } from '@opensearch-project/opensearch';
import { Client as ClientNext } from '@opensearch-project/opensearch-next';
import { Logger } from '../../logging';
import { OpenSearchClientConfig } from './client_config';
declare type ClientType<T> = T extends {
    withLongNumeralsSupport: true;
} ? ClientNext : Client;
export declare const configureClient: <T>(config: OpenSearchClientConfig, { logger, scoped, withLongNumeralsSupport, }: T extends {
    logger: Logger;
    scoped?: boolean | undefined;
    withLongNumeralsSupport?: boolean | undefined;
} ? T : never) => ClientType<T>;
export {};
//# sourceMappingURL=configure_client.d.ts.map