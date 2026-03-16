export {};

declare global {
    interface Window {
        klaro?: {
            show: () => void;
            hide: () => void;
            run: (x: any) => void;
            getManager: () => any;
        };
        klaroConfig?: any;
    }
}