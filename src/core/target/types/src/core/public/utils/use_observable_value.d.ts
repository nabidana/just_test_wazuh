import { Observable } from 'rxjs';
/**
 * A custom hook for subscribing to an Observable which value is a function.
 *
 * The `useObservable` hook from the `react-use` library doesn't support subscribing to an Observable
 * which value is a function. This hook addresses that limitation by mapping the Observable value
 * into a plain object so that `useObservable` can correctly emit the value
 *
 */
export declare const useObservableValue: <T>(observableValue$: Observable<T>, initialValue?: T | undefined) => T | undefined;
//# sourceMappingURL=use_observable_value.d.ts.map