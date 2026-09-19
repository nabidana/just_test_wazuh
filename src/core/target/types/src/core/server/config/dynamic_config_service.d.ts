import { ConfigPath, Env, IConfigService } from '@osd/config';
import { Type } from '@osd/config-schema';
import { PublicMethodsOf } from '@osd/utility-types';
import { InternalHttpServiceSetup } from '../http';
import { CoreService } from '../../types';
import { ConfigIdentifier, InternalDynamicConfigServiceSetup, InternalDynamicConfigServiceStart } from './types';
import { LoggerFactory } from '../logging';
import { InternalOpenSearchServiceStart } from '../opensearch';
export interface RegisterHTTPSetupDeps {
    http: InternalHttpServiceSetup;
}
export interface StartDeps {
    opensearch: InternalOpenSearchServiceStart;
}
export declare type IDynamicConfigService = PublicMethodsOf<DynamicConfigService>;
/** @internal */
export declare class DynamicConfigService implements CoreService<unknown, InternalDynamicConfigServiceStart> {
    #private;
    constructor(configService: IConfigService, envService: Env, logger: LoggerFactory);
    setup(): Promise<InternalDynamicConfigServiceSetup>;
    start({ opensearch }: StartDeps): Promise<InternalDynamicConfigServiceStart>;
    /**
     * Extra setup step to register any HTTP routes and the async local store. This should be called after all plugins are setup but before dynamicConfigService is started
     *
     * @param setupDeps
     */
    registerRoutesAndHandlers(setupDeps: RegisterHTTPSetupDeps): Promise<void>;
    stop(): Promise<void>;
    /**
     * Mimics Config Service schema registration, which should be finished calling before start() is called. Validation is not needed as the Config Service handles that
     *
     * @param path {string} the core ID, plugin ID, or the plugin configPath (if specified)
     * @param schema {Type<unknown>} the schema object defined in config.ts
     */
    setSchema(path: ConfigPath, schema: Type<unknown>): void;
    /**
     * Checks if a certain config already exists
     *
     * @param configIdentifier {ConfigIdentifier} the core ID, plugin ID, or the plugin configPath (if specified)
     */
    hasDefaultConfigs(configIdentifier: ConfigIdentifier): boolean;
}
//# sourceMappingURL=dynamic_config_service.d.ts.map