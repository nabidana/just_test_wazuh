import { EuiConfirmModalProps, EuiModalProps } from '@elastic/eui';
import { I18nStart } from '../../i18n';
import { MountPoint } from '../../types';
import { OverlayRef } from '../types';
/**
 * @public
 */
export interface OverlayModalConfirmOptions {
    title?: string;
    cancelButtonText?: string;
    confirmButtonText?: string;
    className?: string;
    closeButtonAriaLabel?: string;
    'data-test-subj'?: string;
    defaultFocusedButton?: EuiConfirmModalProps['defaultFocusedButton'];
    buttonColor?: EuiConfirmModalProps['buttonColor'];
}
/**
 * APIs to open and manage modal dialogs.
 *
 * @public
 */
export interface OverlayModalStart {
    /**
     * Opens a modal panel with the given mount point inside. You can use
     * `close()` on the returned OverlayRef to close the modal.
     *
     * @param mount {@link MountPoint} - Mounts the children inside the modal
     * @param options {@link OverlayModalOpenOptions} - options for the modal
     * @return {@link OverlayRef} A reference to the opened modal.
     */
    open(mount: MountPoint, options?: OverlayModalOpenOptions): OverlayRef;
    /**
     * Opens a confirmation modal with the given text or mountpoint as a message.
     * Returns a Promise resolving to `true` if user confirmed or `false` otherwise.
     *
     * @param message {@link MountPoint} - string or mountpoint to be used a the confirm message body
     * @param options {@link OverlayModalConfirmOptions} - options for the confirm modal
     */
    openConfirm(message: MountPoint | string, options?: OverlayModalConfirmOptions): Promise<boolean>;
}
/**
 * @public
 */
export interface OverlayModalOpenOptions extends Pick<EuiModalProps, 'maxWidth'> {
    className?: string;
    closeButtonAriaLabel?: string;
    'data-test-subj'?: string;
}
interface StartDeps {
    i18n: I18nStart;
    targetDomElement: Element;
}
/** @internal */
export declare class ModalService {
    private activeModal;
    private targetDomElement;
    start({ i18n, targetDomElement }: StartDeps): OverlayModalStart;
    /**
     * Using React.Render to re-render into a target DOM element will replace
     * the content of the target but won't call unmountComponent on any
     * components inside the target or any of their children. So we properly
     * cleanup the DOM here to prevent subtle bugs in child components which
     * depend on unmounting for cleanup behaviour.
     */
    private cleanupDom;
}
export {};
//# sourceMappingURL=modal_service.d.ts.map