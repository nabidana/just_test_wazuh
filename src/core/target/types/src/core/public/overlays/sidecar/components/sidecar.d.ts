import React from 'react';
import { BehaviorSubject } from 'rxjs';
import { I18nStart } from '../../../i18n';
import { MountPoint } from '../../../types';
import './sidecar.scss';
import { ISidecarConfig, OverlaySidecarOpenOptions } from '../sidecar_service';
export interface Props {
    sidecarConfig$: BehaviorSubject<ISidecarConfig | undefined>;
    options: OverlaySidecarOpenOptions;
    setSidecarConfig: (config: Partial<ISidecarConfig>) => void;
    i18n: I18nStart;
    mount: MountPoint;
}
export declare const Sidecar: ({ sidecarConfig$, options, setSidecarConfig, i18n, mount }: Props) => React.JSX.Element;
//# sourceMappingURL=sidecar.d.ts.map