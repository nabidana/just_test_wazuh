/**
 * In many places in OpenSearch Dashboards we want to be agnostic to frontend view library,
 * i.e. instead of exposing React-specific APIs we want to expose APIs that
 * are orthogonal to any rendering library. This interface represents such UI
 * components. UI component receives a DOM element and `props` through `render()`
 * method, the `render()` method can be called many times.
 *
 * Although Op aims to be library agnostic, OpenSearch Dashboards itself is written in React,
 * thus here we define `UiComponent` which is an abstract unit of UI that can be
 * implemented in any framework, but it maps easily to React components, i.e.
 * `UiComponent<Props>` is like `React.ComponentType<Props>`.
 */
export declare type UiComponent<Props extends object = object> = () => UiComponentInstance<Props>;
/**
 * Instance of an UiComponent, corresponds to React virtual DOM node.
 */
export interface UiComponentInstance<Props extends object = object> {
    /**
     * Call this method on initial render and on all subsequent updates.
     *
     * @param el DOM element.
     * @param props Component props, same as props in React.
     */
    render(el: HTMLElement, props: Props): void;
    /**
     * Un-mount UI component. Call it to remove view from DOM. Implementers of this
     * interface should clear DOM from this UI component and destroy any internal state.
     */
    unmount?(): void;
}
//# sourceMappingURL=ui_component.d.ts.map