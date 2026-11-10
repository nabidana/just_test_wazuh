import * as Rx from 'rxjs';
/**
 * Just like the [`shareReplay()`](https://rxjs-dev.firebaseapp.com/api/operators/shareReplay) operator from
 * RxJS except for a few key differences:
 *
 * - If all downstream subscribers unsubscribe the source subscription will be unsubscribed.
 *
 * - Replay-ability is only maintained while the source is active, if it completes or errors
 *   then complete/error is sent to the current subscribers and the replay buffer is cleared.
 *
 * - Any subscription after the source completes or errors will create a new subscription
 *   to the source observable.
 *
 * @param bufferSize Optional, default is `Number.POSITIVE_INFINITY`
 */
export declare function shareWeakReplay<T>(bufferSize?: number): Rx.MonoTypeOperatorFunction<T>;
//# sourceMappingURL=share_weak_replay.d.ts.map