"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function PageTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const tractPages = () => {
    const CONSENT_KEY = "portfolio-consent-v1";
    const stored = localStorage.getItem(CONSENT_KEY);
    if (stored) {
      let currentConsent = JSON.parse(stored);
      if (currentConsent.analytics) {
        const url =
          pathname + (searchParams?.toString() ? `?${searchParams}` : "");

        window.gtag("event", "page_view", {
          page_path: url,
          page_title: document.title,
          page_location: window.location.href,
        });
      }
    }
  };

  useEffect(() => {
    tractPages();
  }, [pathname, searchParams]);

  return null;
}
