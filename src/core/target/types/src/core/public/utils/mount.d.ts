import React from 'react';
import { MountPoint } from '../types';
/**
 * MountWrapper is a react component to mount a {@link MountPoint} inside a react tree.
 */
export declare const MountWrapper: React.FunctionComponent<{
    mount: MountPoint;
    className?: string;
}>;
/**
 * Mount converter for react node.
 *
 * @param node to get a mount for
 */
export declare const mountReactNode: (node: React.ReactNode) => MountPoint;
//# sourceMappingURL=mount.d.ts.map