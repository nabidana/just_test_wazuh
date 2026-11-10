import { SchemaTypeError } from '@osd/config-schema';
/**
 * Error to return when the validation is not successful.
 * @public
 */
export declare class RouteValidationError extends SchemaTypeError {
    constructor(error: Error | string, path?: string[]);
}
//# sourceMappingURL=validator_error.d.ts.map