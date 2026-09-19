/// <reference types="node" />
import { Socket } from 'net';
import { DetailedPeerCertificate, PeerCertificate } from 'tls';
/**
 * A tiny abstraction for TCP socket.
 * @public
 */
export interface IOpenSearchDashboardsSocket {
    getPeerCertificate(detailed: true): DetailedPeerCertificate | null;
    getPeerCertificate(detailed: false): PeerCertificate | null;
    /**
     * Returns an object representing the peer's certificate.
     * The returned object has some properties corresponding to the field of the certificate.
     * If detailed argument is true the full chain with issuer property will be returned,
     * if false only the top certificate without issuer property.
     * If the peer does not provide a certificate, it returns null.
     * @param detailed - If true; the full chain with issuer property will be returned.
     * @returns An object representing the peer's certificate.
     */
    getPeerCertificate(detailed?: boolean): PeerCertificate | DetailedPeerCertificate | null;
    /**
     * Indicates whether or not the peer certificate was signed by one of the specified CAs. When TLS
     * isn't used the value is `undefined`.
     */
    readonly authorized?: boolean;
    /**
     * The reason why the peer's certificate has not been verified. This property becomes available
     * only when `authorized` is `false`.
     */
    readonly authorizationError?: Error;
}
export declare class OpenSearchDashboardsSocket implements IOpenSearchDashboardsSocket {
    private readonly socket;
    readonly authorized?: boolean;
    readonly authorizationError?: Error;
    constructor(socket: Socket);
    getPeerCertificate(detailed: true): DetailedPeerCertificate | null;
    getPeerCertificate(detailed: false): PeerCertificate | null;
    getPeerCertificate(detailed?: boolean): PeerCertificate | DetailedPeerCertificate | null;
}
//# sourceMappingURL=socket.d.ts.map