import { PureTransition } from '../../common/state_containers';
export interface TodoItem {
    text: string;
    completed: boolean;
    id: number;
}
export interface TodoState {
    todos: TodoItem[];
}
export declare const defaultState: TodoState;
export interface TodoActions {
    add: PureTransition<TodoState, [TodoItem]>;
    edit: PureTransition<TodoState, [TodoItem]>;
    delete: PureTransition<TodoState, [number]>;
    complete: PureTransition<TodoState, [number]>;
    completeAll: PureTransition<TodoState, []>;
    clearCompleted: PureTransition<TodoState, []>;
}
export interface TodosSelectors {
    todos: (state: TodoState) => () => TodoItem[];
    todo: (state: TodoState) => (id: number) => TodoItem | null;
}
export declare const pureTransitions: TodoActions;
export declare const pureSelectors: TodosSelectors;
export declare const result: TodoItem[];
//# sourceMappingURL=todomvc.d.ts.map