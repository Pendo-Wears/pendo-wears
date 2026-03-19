export declare global {
  interface Window {
    __gaLoaded?: boolean;
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}