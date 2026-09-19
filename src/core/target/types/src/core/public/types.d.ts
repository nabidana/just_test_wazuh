export { UiSettingsParams, PublicUiSettingsParams, UserProvidedValues, UiSettingsType, ImageValidation, StringValidationRegex, } from '../../core/types';
export type { Logos } from '../common/types';
/**
 * A function that should mount DOM content inside the provided container element
 * and return a handler to unmount it.
 *
 * @param element the container element to render into
 * @returns a {@link UnmountCallback} that unmount the element on call.
 *
 * @public
 */
export declare type MountPoint<T extends HTMLElement = HTMLElement> = (element: T) => UnmountCallback;
/**
 * A function that will unmount the element previously mounted by
 * the associated {@link MountPoint}
 *
 * @public
 */
export declare type UnmountCallback = () => void;
/**
 * @deprecated: Use Branding instead
 * @public
 */
export interface ChromeBrand {
    logo?: string;
    smallLogo?: string;
}
//# sourceMappingURL=types.d.ts.map