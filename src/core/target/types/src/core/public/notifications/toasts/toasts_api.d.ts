import { EuiGlobalToastListToast as EuiToast } from '@elastic/eui';
import * as Rx from 'rxjs';
import { MountPoint } from '../../types';
import { IUiSettingsClient } from '../../ui_settings';
import { OverlayStart } from '../../overlays';
import { I18nStart } from '../../i18n';
/**
 * Allowed fields for {@link ToastInput}.
 *
 * @public
 */
export declare type ToastInputFields = Pick<EuiToast, Exclude<keyof EuiToast, 'id' | 'text' | 'title'>> & {
    id?: string;
    title?: string | MountPoint;
    text?: string | MountPoint;
};
export declare type Toast = ToastInputFields & {
    id: string;
};
/**
 * Inputs for {@link IToasts} APIs.
 * @public
 */
export declare type ToastInput = string | ToastInputFields;
/**
 * Options available for {@link IToasts} APIs.
 * @public
 */
export interface ToastOptions {
    /**
     * How long should the toast remain on screen.
     */
    toastLifeTimeMs?: number;
}
/**
 * Options available for {@link IToasts} error APIs.
 * @public
 */
export interface ErrorToastOptions extends ToastOptions {
    /**
     * The title of the toast and the dialog when expanding the message.
     */
    title: string;
    /**
     * The message to be shown in the toast. If this is not specified the error's
     * message will be shown in the toast instead. Overwriting that message can
     * be used to provide more user-friendly toasts. If you specify this, the error
     * message will still be shown in the detailed error modal.
     */
    toastMessage?: string;
    /**
     * The id of the error.
     */
    id?: string;
}
/**
 * Methods for adding and removing global toast messages. See {@link ToastsApi}.
 * @public
 */
export declare type IToasts = Pick<ToastsApi, 'get$' | 'add' | 'remove' | 'addSuccess' | 'addWarning' | 'addDanger' | 'addError' | 'addInfo'>;
/**
 * Methods for adding and removing global toast messages.
 * @public
 */
export declare class ToastsApi implements IToasts {
    private toasts$;
    private idCounter;
    private uiSettings;
    private overlays?;
    private i18n?;
    constructor(deps: {
        uiSettings: IUiSettingsClient;
    });
    /** @internal */
    start({ overlays, i18n }: {
        overlays: OverlayStart;
        i18n: I18nStart;
    }): void;
    /** Observable of the toast messages to show to the user. */
    get$(): Rx.Observable<Toast[]>;
    /**
     * Adds a new toast to current array of toast.
     *
     * @param toastOrTitle - a {@link ToastInput}
     * @returns a {@link Toast}
     */
    add(toastOrTitle: ToastInput): Toast;
    /**
     * Removes a toast from the current array of toasts if present.
     * @param toastOrId - a {@link Toast} returned by {@link ToastsApi.add} or its id
     */
    remove(toastOrId: Toast | string): void;
    /**
     * Adds a new toast pre-configured with the info color and info icon.
     *
     * @param toastOrTitle - a {@link ToastInput}
     * @param options - a {@link ToastOptions}
     * @returns a {@link Toast}
     */
    addInfo(toastOrTitle: ToastInput, options?: ToastOptions): Toast;
    /**
     * Adds a new toast pre-configured with the success color and check icon.
     *
     * @param toastOrTitle - a {@link ToastInput}
     * @param options - a {@link ToastOptions}
     * @returns a {@link Toast}
     */
    addSuccess(toastOrTitle: ToastInput, options?: ToastOptions): Toast;
    /**
     * Adds a new toast pre-configured with the warning color and help icon.
     *
     * @param toastOrTitle - a {@link ToastInput}
     * @param options - a {@link ToastOptions}
     * @returns a {@link Toast}
     */
    addWarning(toastOrTitle: ToastInput, options?: ToastOptions): Toast;
    /**
     * Adds a new toast pre-configured with the danger color and alert icon.
     *
     * @param toastOrTitle - a {@link ToastInput}
     * @param options - a {@link ToastOptions}
     * @returns a {@link Toast}
     */
    addDanger(toastOrTitle: ToastInput, options?: ToastOptions): Toast;
    /**
     * Adds a new toast that displays an exception message with a button to open the full stacktrace in a modal.
     *
     * @param error - an `Error` instance.
     * @param options - {@link ErrorToastOptions}
     * @returns a {@link Toast}
     */
    addError(error: Error, options: ErrorToastOptions): Toast;
    private openModal;
}
//# sourceMappingURL=toasts_api.d.ts.map