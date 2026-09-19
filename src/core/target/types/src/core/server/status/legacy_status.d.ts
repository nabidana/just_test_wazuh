import { ServiceStatus, CoreStatus } from './types';
import { PluginName } from '../plugins';
interface Deps {
    overall: ServiceStatus;
    core: CoreStatus;
    plugins: Record<PluginName, ServiceStatus>;
    versionWithoutSnapshot: string;
}
export interface LegacyStatusInfo {
    overall: LegacyStatusOverall;
    statuses: StatusComponentHttp[];
}
interface LegacyStatusOverall {
    state: LegacyStatusState;
    title: string;
    nickname: string;
    uiColor: LegacyStatusUiColor;
    /** ISO-8601 date string w/o timezone */
    since: string;
    icon?: string;
}
declare type LegacyStatusState = 'green' | 'yellow' | 'red';
declare type LegacyStatusUiColor = 'secondary' | 'warning' | 'danger';
export declare const calculateLegacyStatus: ({ core, overall, plugins, versionWithoutSnapshot, }: Deps) => LegacyStatusInfo;
interface StatusComponentHttp {
    id: string;
    state: LegacyStatusState;
    message: string;
    uiColor: LegacyStatusUiColor;
    icon: string;
    since: string;
}
export {};
//# sourceMappingURL=legacy_status.d.ts.map