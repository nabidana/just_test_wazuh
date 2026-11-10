/**
 * Produce a simple FatalErrorInfo object from some error and optional source, used for
 * displaying error information on the fatal error screen
 */
export declare function getErrorInfo(error: any, source?: string): FatalErrorInfo;
/**
 * Represents the `message` and `stack` of a fatal Error
 *
 * @public
 * */
export interface FatalErrorInfo {
    message: string;
    stack: string | undefined;
}
//# sourceMappingURL=get_error_info.d.ts.map