import { PathConfigType } from '@osd/utils';
import { HttpConfigType } from '../http';
import { Logger } from '../logging';
/**
 * This UUID was inadvertantly shipped in the 7.6.0 distributable and should be deleted if found.
 * See https://github.com/elastic/kibana/issues/57673 for more info.
 */
export declare const UUID_7_6_0_BUG = "ce42b997-a913-4d58-be46-bb1937feedd6";
export declare function resolveInstanceUuid({ pathConfig, serverConfig, logger, }: {
    pathConfig: PathConfigType;
    serverConfig: HttpConfigType;
    logger: Logger;
}): Promise<string>;
//# sourceMappingURL=resolve_uuid.d.ts.map