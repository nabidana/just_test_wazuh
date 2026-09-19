import { InternalCoreSetup } from '../internal_types';
import { CoreContext } from '../core_context';
/** @internal */
export declare class CoreApp {
    private readonly logger;
    constructor(core: CoreContext);
    setup(coreSetup: InternalCoreSetup): void;
    private registerDefaultRoutes;
    private registerStaticDirs;
}
//# sourceMappingURL=core_app.d.ts.map