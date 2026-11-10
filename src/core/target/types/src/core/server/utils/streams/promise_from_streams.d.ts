/// <reference types="node" />
/**
 *  Take an array of streams, pipe the output
 *  from each one into the next, listening for
 *  errors from any of the streams, and then resolve
 *  the promise once the final stream has finished
 *  writing/reading.
 *
 *  If the last stream is readable, it's final value
 *  will be provided as the promise value.
 *
 *  Errors emitted from any stream will cause
 *  the promise to be rejected with that error.
 *
 *  @param  {Array<Stream>} streams
 *  @return {Promise<any>}
 */
import { Writable, Readable } from 'stream';
export declare function createPromiseFromStreams<T>(streams: [Readable, ...Writable[]]): Promise<T>;
//# sourceMappingURL=promise_from_streams.d.ts.map