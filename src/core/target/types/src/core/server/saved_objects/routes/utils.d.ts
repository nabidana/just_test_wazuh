/// <reference types="node" />
import { Readable } from 'stream';
export declare function createSavedObjectsStreamFromNdJson(ndJsonStream: Readable): Promise<Readable>;
export declare function validateTypes(types: string[], supportedTypes: string[]): string | undefined;
export declare function validateObjects(objects: Array<{
    id: string;
    type: string;
}>, supportedTypes: string[]): string | undefined;
//# sourceMappingURL=utils.d.ts.map