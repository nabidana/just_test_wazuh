export interface PanelController {
    setWidth: (percent: number) => void;
    getWidth: () => number;
    width: number;
}
export declare class PanelRegistry {
    private panels;
    registerPanel(panel: PanelController): void;
    getPanels(): PanelController[];
}
//# sourceMappingURL=registry.d.ts.map