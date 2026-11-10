import { Capabilities, CapabilitiesProvider, CapabilitiesSwitcher } from './types';
import { CoreContext } from '../core_context';
import { InternalHttpServiceSetup, OpenSearchDashboardsRequest } from '../http';
/**
 * APIs to manage the {@link Capabilities} that will be used by the application.
 *
 * Plugins relying on capabilities to toggle some of their features should register them during the setup phase
 * using the `registerProvider` method.
 *
 * Plugins having the responsibility to restrict capabilities depending on a given context should register
 * their capabilities switcher using the `registerSwitcher` method.
 *
 * Refers to the methods documentation for complete description and examples.
 *
 * @public
 */
export interface CapabilitiesSetup {
    /**
     * Register a {@link CapabilitiesProvider} to be used to provide {@link Capabilities}
     * when resolving them.
     *
     * @example
     * How to register a plugin's capabilities during setup
     * ```ts
     * // my-plugin/server/plugin.ts
     * public setup(core: CoreSetup, deps: {}) {
     *    core.capabilities.registerProvider(() => {
     *      return {
     *        catalogue: {
     *          myPlugin: true,
     *        },
     *        myPlugin: {
     *          someFeature: true,
     *          featureDisabledByDefault: false,
     *        },
     *      }
     *    });
     * }
     * ```
     */
    registerProvider(provider: CapabilitiesProvider): void;
    /**
     * Register a {@link CapabilitiesSwitcher} to be used to change the default state
     * of the {@link Capabilities} entries when resolving them.
     *
     * A capabilities switcher can only change the state of existing capabilities.
     * Capabilities added or removed when invoking the switcher will be ignored.
     *
     * @example
     * How to restrict some capabilities
     * ```ts
     * // my-plugin/server/plugin.ts
     * public setup(core: CoreSetup, deps: {}) {
     *    core.capabilities.registerSwitcher((request, capabilities) => {
     *      if(myPluginApi.shouldRestrictSomePluginBecauseOf(request)) {
     *        return {
     *          somePlugin: {
     *            featureEnabledByDefault: false // `featureEnabledByDefault` will be disabled. All other capabilities will remain unchanged.
     *          }
     *        }
     *      }
     *      return {}; // All capabilities will remain unchanged.
     *    });
     * }
     * ```
     */
    registerSwitcher(switcher: CapabilitiesSwitcher): void;
}
/**
 * APIs to access the application {@link Capabilities}.
 *
 * @public
 */
export interface CapabilitiesStart {
    /**
     * Resolve the {@link Capabilities} to be used for given request
     */
    resolveCapabilities(request: OpenSearchDashboardsRequest): Promise<Capabilities>;
}
interface SetupDeps {
    http: InternalHttpServiceSetup;
}
/** @internal */
export declare class CapabilitiesService {
    private readonly logger;
    private readonly capabilitiesProviders;
    private readonly capabilitiesSwitchers;
    private readonly resolveCapabilities;
    constructor(core: CoreContext);
    setup(setupDeps: SetupDeps): CapabilitiesSetup;
    start(): CapabilitiesStart;
}
export {};
//# sourceMappingURL=capabilities_service.d.ts.map