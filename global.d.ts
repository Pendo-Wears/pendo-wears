export declare global {
  interface Window {
    __gaLoaded?: boolean;
    __fbLoaded?: boolean;
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}