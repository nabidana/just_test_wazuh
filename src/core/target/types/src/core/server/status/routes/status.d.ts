import { Observable } from 'rxjs';
import { IRouter } from '../../http';
import { MetricsServiceSetup } from '../../metrics';
import { ServiceStatus, CoreStatus } from '../types';
import { PluginName } from '../../plugins';
import { PackageInfo } from '../../config';
interface Deps {
    router: IRouter;
    config: {
        allowAnonymous: boolean;
        packageInfo: PackageInfo;
        serverName: string;
        uuid: string;
    };
    metrics: MetricsServiceSetup;
    status: {
        overall$: Observable<ServiceStatus>;
        core$: Observable<CoreStatus>;
        plugins$: Observable<Record<PluginName, ServiceStatus>>;
    };
}
export declare const registerStatusRoute: ({ router, config, metrics, status }: Deps) => void;
export {};
//# sourceMappingURL=status.d.ts.map