import { OnPostAuthHandler } from './lifecycle/on_post_auth';
import { OnPreResponseHandler } from './lifecycle/on_pre_response';
import { HttpConfig } from './http_config';
import { Env } from '../config';
import { LifecycleRegistrar } from './http_server';
export declare const createXsrfPostAuthHandler: (config: HttpConfig) => OnPostAuthHandler;
export declare const createVersionCheckPostAuthHandler: (opensearchDashboardsVersion: string) => OnPostAuthHandler;
export declare const createCustomHeadersPreResponseHandler: (config: HttpConfig) => OnPreResponseHandler;
export declare const registerCoreHandlers: (registrar: LifecycleRegistrar, config: HttpConfig, env: Env) => void;
//# sourceMappingURL=lifecycle_handlers.d.ts.map