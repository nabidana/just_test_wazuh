import React from 'react';
import { MountPoint } from 'opensearch-dashboards/public';
interface MountPointPortalProps {
    setMountPoint: (mountPoint: MountPoint<HTMLElement>) => void;
}
/**
 * Utility component to portal a part of a react application into the provided `MountPoint`.
 */
export declare const MountPointPortal: React.FC<MountPointPortalProps>;
export {};
//# sourceMappingURL=mount_point_portal.d.ts.map