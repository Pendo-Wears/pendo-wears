"use client";

import { useEffect, useState } from "react";
import { config } from "../../public/klaro.config";

export default function ConsentManager() {
  const [isVisible, setIsVisible] = useState(true);
  const [manager, setManager] = useState<any>(null);
  const [consents, setConsents] = useState<Record<string, boolean>>({});

  useEffect(() => {
    // 1. Attach config to window
    (window as any).klaroConfig = config;

    // 2. Load Klaro Library
    const script = document.createElement("script");
    script.src = "https://cdn.iffresh.com/klaro/v0.7.11/klaro-no-css.js";
    script.async = true;

    script.onload = () => {
      // 3. Initialize Manager after script loads
      const interval = setInterval(() => {
        const k = (window as any).klaro;
        if (k) {
          const m = k.getManager(config);
          setManager(m);
          setConsents(m.consents);
          if (!m.confirmed) setIsVisible(true);
          clearInterval(interval);
        }
      }, 100);
    };

    document.head.appendChild(script);
    return () => {
      if (document.head.contains(script)) document.head.removeChild(script);
    };
  }, []);

  const handleToggle = (name: string) => {
    const newVal = !consents[name];
    setConsents((prev) => ({ ...prev, [name]: newVal }));
    manager.updateConsent(name, newVal);
  };

  const handleSave = () => {
    manager.saveConsents();
    setIsVisible(false);
  };

  const handleAcceptAll = () => {
    manager.changeAll(true);
    manager.saveConsents();
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[99999] p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden animate-in fade-in zoom-in duration-200">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-xl font-bold text-gray-900">Cookie Settings</h2>
          <p className="text-sm text-gray-500">
            Choose which services you allow us to use.
          </p>
        </div>

        <div className="p-6 space-y-4">
          {config.services.map((service: any) => (
            <div
              key={service.name}
              className="flex items-center justify-between"
            >
              <div>
                <h3 className="text-sm font-bold text-gray-800 uppercase tracking-tight">
                  {service.title}
                </h3>
                <p className="text-xs text-gray-500">
                  {service.purposes.join(", ")}
                </p>
              </div>
              <button
                onClick={() => handleToggle(service.name)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  consents[service.name] ? "bg-blue-600" : "bg-gray-200"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    consents[service.name] ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
            </div>
          ))}
        </div>

        <div className="p-6 bg-gray-50 flex flex-col gap-2">
          <button
            onClick={handleAcceptAll}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl"
          >
            Accept All
          </button>
          <button
            onClick={handleSave}
            className="w-full bg-white border border-gray-200 text-gray-700 font-bold py-3 rounded-xl"
          >
            Save Choices
          </button>
        </div>
      </div>
    </div>
  );
}
