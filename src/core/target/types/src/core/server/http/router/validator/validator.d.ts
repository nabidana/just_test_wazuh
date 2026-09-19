import { ObjectType, Type } from '@osd/config-schema';
import { RouteValidationError } from './validator_error';
/**
 * Validation result factory to be used in the custom validation function to return the valid data or validation errors
 *
 * See {@link RouteValidationFunction}.
 *
 * @public
 */
export interface RouteValidationResultFactory {
    ok: <T>(value: T) => {
        value: T;
    };
    badRequest: (error: Error | string, path?: string[]) => {
        error: RouteValidationError;
    };
}
/**
 * The custom validation function if @osd/config-schema is not a valid solution for your specific plugin requirements.
 *
 * @example
 *
 * The validation should look something like:
 * ```typescript
 * interface MyExpectedBody {
 *   bar: string;
 *   baz: number;
 * }
 *
 * const myBodyValidation: RouteValidationFunction<MyExpectedBody> = (data, validationResult) => {
 *   const { ok, badRequest } = validationResult;
 *   const { bar, baz } = data || {};
 *   if (typeof bar === 'string' && typeof baz === 'number') {
 *     return ok({ bar, baz });
 *   } else {
 *     return badRequest('Wrong payload', ['body']);
 *   }
 * }
 * ```
 *
 * @public
 */
export declare type RouteValidationFunction<T> = (data: any, validationResult: RouteValidationResultFactory) => {
    value: T;
    error?: never;
} | {
    value?: never;
    error: RouteValidationError;
};
/**
 * Allowed property validation options: either @osd/config-schema validations or custom validation functions
 *
 * See {@link RouteValidationFunction} for custom validation.
 *
 * @public
 */
export declare type RouteValidationSpec<T> = ObjectType | Type<T> | RouteValidationFunction<T>;
/**
 * The configuration object to the RouteValidator class.
 * Set `params`, `query` and/or `body` to specify the validation logic to follow for that property.
 *
 * @public
 */
export interface RouteValidatorConfig<P, Q, B> {
    /**
     * Validation logic for the URL params
     * @public
     */
    params?: RouteValidationSpec<P>;
    /**
     * Validation logic for the Query params
     * @public
     */
    query?: RouteValidationSpec<Q>;
    /**
     * Validation logic for the body payload
     * @public
     */
    body?: RouteValidationSpec<B>;
}
/**
 * Additional options for the RouteValidator class to modify its default behaviour.
 *
 * @public
 */
export interface RouteValidatorOptions {
    /**
     * Set the `unsafe` config to avoid running some additional internal *safe* validations on top of your custom validation
     * @public
     */
    unsafe?: {
        params?: boolean;
        query?: boolean;
        body?: boolean;
    };
}
/**
 * Route validations config and options merged into one object
 * @public
 */
export declare type RouteValidatorFullConfig<P, Q, B> = RouteValidatorConfig<P, Q, B> & RouteValidatorOptions;
/**
 * Route validator class to define the validation logic for each new route.
 *
 * @internal
 */
export declare class RouteValidator<P = {}, Q = {}, B = {}> {
    private readonly config;
    private readonly options;
    static from<P = {}, Q = {}, B = {}>(opts: RouteValidator<P, Q, B> | RouteValidatorFullConfig<P, Q, B>): RouteValidator<P, Q, B>;
    private static ResultFactory;
    private constructor();
    /**
     * Get validated URL params
     * @internal
     */
    getParams(data: unknown, namespace?: string): Readonly<P>;
    /**
     * Get validated query params
     * @internal
     */
    getQuery(data: unknown, namespace?: string): Readonly<Q>;
    /**
     * Get validated body
     * @internal
     */
    getBody(data: unknown, namespace?: string): Readonly<B>;
    /**
     * Has body validation
     * @internal
     */
    hasBody(): boolean;
    private validate;
    private safetyPrechecks;
    private safetyPostchecks;
    private customValidation;
    private validateFunction;
    private preValidateSchema;
}
//# sourceMappingURL=validator.d.ts.map