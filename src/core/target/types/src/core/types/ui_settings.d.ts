import { Type } from '@osd/config-schema';
/**
 * UI element type to represent the settings.
 * @public
 * */
export declare type UiSettingsType = 'undefined' | 'json' | 'markdown' | 'number' | 'select' | 'boolean' | 'string' | 'array' | 'image';
/**
 * UiSettings deprecation field options.
 * @public
 * */
export interface DeprecationSettings {
    /** Deprecation message */
    message: string;
    /** Key to documentation links */
    docLinksKey: string;
}
/**
 * UiSettings scope options.
 * @experimental
 */
export declare enum UiSettingScope {
    GLOBAL = "global",
    USER = "user",
    WORKSPACE = "workspace"
}
/**
 * UiSettings parameters defined by the plugins.
 * @public
 * */
export interface UiSettingsParams<T = unknown> {
    /** title in the UI */
    name?: string;
    /**
     * scope of the setting item
     */
    scope?: UiSettingScope | UiSettingScope[];
    /** default value to fall back to if a user doesn't provide any */
    value?: T;
    /** description provided to a user in UI */
    description?: string;
    /** used to group the configured setting in the UI */
    category?: string[];
    /** array of permitted values for this setting */
    options?: string[];
    /** text labels for 'select' type UI element */
    optionLabels?: Record<string, string>;
    /** a flag indicating whether new value applying requires page reloading */
    requiresPageReload?: boolean;
    /** a flag indicating that value cannot be changed */
    readonly?: boolean;
    /** defines a type of UI element {@link UiSettingsType} */
    type?: UiSettingsType;
    /** optional deprecation information. Used to generate a deprecation warning. */
    deprecation?: DeprecationSettings;
    validation?: ImageValidation | StringValidation;
    schema: Type<T>;
}
/**
 * A sub-set of {@link UiSettingsParams} exposed to the client-side.
 * @public
 * */
export declare type PublicUiSettingsParams = Omit<UiSettingsParams, 'schema'>;
/**
 * Allows regex objects or a regex string
 * @public
 * */
export declare type StringValidation = StringValidationRegex | StringValidationRegexString;
/**
 * StringValidation with regex object
 * @public
 * */
export interface StringValidationRegex {
    regex: RegExp;
    message: string;
}
/**
 * StringValidation as regex string
 * @public
 * */
export interface StringValidationRegexString {
    regexString: string;
    message: string;
}
/**
 * @public
 * */
export interface ImageValidation {
    maxSize: {
        length: number;
        description: string;
    };
}
/**
 * Describes the values explicitly set by user.
 * @public
 * */
export interface UserProvidedValues<T = any> {
    userValue?: T;
    isOverridden?: boolean;
}
//# sourceMappingURL=ui_settings.d.ts.map