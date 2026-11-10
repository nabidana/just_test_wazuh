import { PluginOpaqueId } from '../../server';
import { IContextContainer, HandlerFunction } from '../../utils/context';
import { CoreContext } from '../core_system';
interface StartDeps {
    pluginDependencies: ReadonlyMap<PluginOpaqueId, PluginOpaqueId[]>;
}
/** @internal */
export declare class ContextService {
    private readonly core;
    constructor(core: CoreContext);
    setup({ pluginDependencies }: StartDeps): ContextSetup;
}
/**
 * {@inheritdoc IContextContainer}
 *
 * @example
 * Say we're creating a plugin for rendering visualizations that allows new rendering methods to be registered. If we
 * want to offer context to these rendering methods, we can leverage the ContextService to manage these contexts.
 * ```ts
 * export interface VizRenderContext {
 *   core: {
 *     i18n: I18nStart;
 *     uiSettings: IUiSettingsClient;
 *   }
 *   [contextName: string]: unknown;
 * }
 *
 * export type VizRenderer = (context: VizRenderContext, domElement: HTMLElement) => () => void;
 * // When a renderer is bound via `contextContainer.createHandler` this is the type that will be returned.
 * type BoundVizRenderer = (domElement: HTMLElement) => () => void;
 *
 * class VizRenderingPlugin {
 *   private readonly contextContainer?: IContextContainer<VizRenderer>;
 *   private readonly vizRenderers = new Map<string, BoundVizRenderer>();
 *
 *   constructor(private readonly initContext: PluginInitializerContext) {}
 *
 *   setup(core) {
 *     this.contextContainer = core.context.createContextContainer();
 *
 *     return {
 *       registerContext: this.contextContainer.registerContext,
 *       registerVizRenderer: (plugin: PluginOpaqueId, renderMethod: string, renderer: VizTypeRenderer) =>
 *         this.vizRenderers.set(renderMethod, this.contextContainer.createHandler(plugin, renderer)),
 *     };
 *   }
 *
 *   start(core) {
 *     // Register the core context available to all renderers. Use the VizRendererContext's opaqueId as the first arg.
 *     this.contextContainer.registerContext(this.initContext.opaqueId, 'core', () => ({
 *       i18n: core.i18n,
 *       uiSettings: core.uiSettings
 *     }));
 *
 *     return {
 *       registerContext: this.contextContainer.registerContext,
 *
 *       renderVizualization: (renderMethod: string, domElement: HTMLElement) => {
 *         if (!this.vizRenderer.has(renderMethod)) {
 *           throw new Error(`Render method '${renderMethod}' has not been registered`);
 *         }
 *
 *         // The handler can now be called directly with only an `HTMLElement` and will automatically
 *         // have a new `context` object created and populated by the context container.
 *         const handler = this.vizRenderers.get(renderMethod)
 *         return handler(domElement);
 *       }
 *     };
 *   }
 * }
 * ```
 *
 * @public
 */
export interface ContextSetup {
    /**
     * Creates a new {@link IContextContainer} for a service owner.
     */
    createContextContainer<THandler extends HandlerFunction<any>>(): IContextContainer<THandler>;
}
export {};
//# sourceMappingURL=context_service.d.ts.map