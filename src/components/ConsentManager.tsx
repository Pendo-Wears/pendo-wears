"use client";

import { useEffect } from "react";
import { config } from "../../public/klaro.config";

export default function ConsentManager() {
  useEffect(() => {
    // Dynamic import to ensure it only loads in the browser
    import("klaro" as any).then((Klaro) => {
      // 1. Assign config to window (Klaro looks for this)
      window.klaroConfig = config;
      // 2. Initialize Klaro
      Klaro.setup(config);
    });
  }, []);

  return null; // This component doesn't render HTML; it spawns the Klaro modal
}
