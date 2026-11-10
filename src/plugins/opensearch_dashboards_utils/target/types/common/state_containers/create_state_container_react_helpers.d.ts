import React from 'react';
import { Comparator, Connect, StateContainer, UnboxState } from './types';
/**
 * React hooks that returns the latest state of a {@link StateContainer}.
 *
 * @param container - {@link StateContainer} which state to track.
 * @returns - latest {@link StateContainer} state
 * @public
 */
export declare const useContainerState: <Container extends StateContainer<any, any, {}>>(container: Container) => UnboxState<Container>;
/**
 * React hook to apply selector to state container to extract only needed information. Will
 * re-render your component only when the section changes.
 *
 * @param container - {@link StateContainer} which state to track.
 * @param selector - Function used to pick parts of state.
 * @param comparator - {@link Comparator} function used to memoize previous result, to not
 *    re-render React component if state did not change. By default uses
 *    `fast-deep-equal` package.
 * @returns - result of a selector(state)
 * @public
 */
export declare const useContainerSelector: <Container extends StateContainer<any, any, {}>, Result>(container: Container, selector: (state: UnboxState<Container>) => Result, comparator?: Comparator<Result>) => Result;
/**
 * Creates helpers for using {@link StateContainer | State Containers} with react
 *
 * TODO Update link
 * Refer to {@link https://github.com/opensearch-project/OpenSearch-Dashboards/blob/main/src/plugins/opensearch_dashboards_utils/docs/state_containers/react.md | guide} for details
 * @public
 */
export declare const createStateContainerReactHelpers: <Container extends StateContainer<any, any, {}>>() => {
    Provider: React.Provider<Container>;
    Consumer: React.Consumer<Container>;
    context: React.Context<Container>;
    useContainer: () => Container;
    useState: () => UnboxState<Container>;
    useTransitions: () => Container["transitions"];
    useSelector: <Result>(selector: (state: UnboxState<Container>) => Result, comparator?: Comparator<Result>) => Result;
    connect: Connect<UnboxState<Container>>;
};
//# sourceMappingURL=create_state_container_react_helpers.d.ts.map