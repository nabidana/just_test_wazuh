/**
 * State containers are Redux-store-like objects meant to help you manage state in your services or apps.
 * TODO: Update link
 * Refer to {@link https://github.com/opensearch-project/OpenSearch-Dashboards/tree/main/src/plugins/opensearch_dashboards_utils/docs/state_containers | guides and examples} for more info
 *
 * @packageDocumentation
 */
export { BaseState, BaseStateContainer, TransitionDescription, StateContainer, ReduxLikeStateContainer, Dispatch, Middleware, Selector, Comparator, MapStateToProps, Connect, Reducer, UnboxState, PureSelectorToSelector, PureSelectorsToSelectors, EnsurePureSelector, PureTransitionsToTransitions, PureTransitionToTransition, EnsurePureTransition, PureSelector, PureTransition, Transition, } from './types';
export { createStateContainer, CreateStateContainerOptions } from './create_state_container';
export { createStateContainerReactHelpers, useContainerSelector, useContainerState, } from './create_state_container_react_helpers';
//# sourceMappingURL=index.d.ts.map