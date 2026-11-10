import { IConfigService, Env } from './config';
import { LoggerFactory } from './logging';
import { IDynamicConfigService } from './config/dynamic_config_service';
/** @internal */
export declare type CoreId = symbol;
/**
 * Groups all main OpenSearch Dashboards's core modules/systems/services that are consumed in a
 * variety of places within the core itself.
 * @internal
 */
export interface CoreContext {
    coreId: CoreId;
    env: Env;
    configService: IConfigService;
    logger: LoggerFactory;
    dynamicConfigService: IDynamicConfigService;
}
//# sourceMappingURL=core_context.d.ts.map