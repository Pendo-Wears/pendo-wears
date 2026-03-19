"use client";
import { useState, useEffect, useRef } from "react";
import { useAuth } from "../context/AuthContext";

interface ConsentState {
  strictly_necessary: boolean;
  preferences: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
}

const ConsentManager = () => {
  const CONSENT_KEY = "portfolio-consent-v1";

  // State for banner, modal, and toast visibility
  const { showModal, setShowModal } = useAuth();
  const [showBanner, setShowBanner] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [pageBlocker, setPageBlocker] = useState(false);

  // Consent state
  const [consent, setConsent] = useState<ConsentState>({
    strictly_necessary: true,
    preferences: false,
    analytics: false,
    marketing: false,
    timestamp: new Date().toISOString(),
  });

  // Track initial consent for modal changes
  const initialConsentRef = useRef<ConsentState>(consent);

  // Get stored consent or defaults
  const getStoredConsent = (): ConsentState => {
    try {
      const stored = localStorage.getItem(CONSENT_KEY);
      if (stored) return JSON.parse(stored);
    } catch (e) {
      console.error("Error reading consent from localStorage:", e);
    }

    return {
      strictly_necessary: true,
      preferences: false,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString(),
    };
  };

  // Check if user has already given consent
  const hasConsent = (): boolean => {
    return localStorage.getItem(CONSENT_KEY) !== null;
  };

  // Save consent to localStorage
  const saveConsentToStorage = (consentData: ConsentState) => {
    try {
      localStorage.setItem(CONSENT_KEY, JSON.stringify(consentData));
    } catch (e) {
      console.error("Error saving consent to localStorage:", e);
    }
  };

  // Load external scripts based on consent
  const loadScripts = (consentData: ConsentState) => {
    // Load Google Analytics
    if (consentData.analytics && !window.__gaLoaded) {
      (window as any).__gaLoaded = true;

      const gaScript = document.createElement("script");
      gaScript.async = true;
      gaScript.src = "https://www.googletagmanager.com/gtag/js?id=G-Y8YN12RW15";
      document.head.appendChild(gaScript);

      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).gtag = function () {
        (window as any).dataLayer.push(arguments);
      };

      (window as any).gtag("js", new Date());
      (window as any).gtag("config", "G-Y8YN12RW15", {
        anonymize_ip: true,
      });

      // Fire initial page view
      if ((window as any).gtag) {
        (window as any).gtag("event", "page_view", {
          page_path: window.location.pathname,
          page_location: window.location.href,
          page_title: document.title,
        });
      }
    }

    // Load Meta Pixel
    if (consentData.marketing && !window.__fbLoaded) {
      (window as any).__fbLoaded = true;

      const metaScript = document.createElement("script");
      metaScript.innerHTML = `
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', 'PIXEL_ID');
        fbq('track', 'PageView');
      `;
      document.head.appendChild(metaScript);
    }
  };

  // Initialize on mount
  useEffect(() => {
    const storedConsent = getStoredConsent();
    setConsent(storedConsent);
    initialConsentRef.current = storedConsent;

    // Show banner only if no consent given
    if (!hasConsent()) {
      setShowBanner(true);
      setPageBlocker(true);
    } else {
      // Load scripts if consent already given
      loadScripts(storedConsent);
    }
  }, []);

  // Handle Accept All
  const handleAcceptAll = () => {
    const newConsent: ConsentState = {
      strictly_necessary: true,
      preferences: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString(),
    };
    setConsent(newConsent);
    saveConsentToStorage(newConsent);
    loadScripts(newConsent);
    setShowBanner(false);
    setPageBlocker(false);
    showToastNotification();
  };

  // Handle Reject Optional
  const handleRejectOptional = () => {
    const newConsent: ConsentState = {
      strictly_necessary: true,
      preferences: false,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString(),
    };
    setConsent(newConsent);
    saveConsentToStorage(newConsent);
    setShowBanner(false);
    setPageBlocker(false);
    showToastNotification();
  };

  // Handle Manage Cookies
  const handleManageCookies = () => {
    initialConsentRef.current = { ...consent };
    setShowModal(true);
  };

  // Handle Modal Close
  const handleModalClose = () => {
    setShowModal(false);
    // Show banner again if no changes made
    if (JSON.stringify(consent) === JSON.stringify(initialConsentRef.current)) {
      if (!hasConsent()) {
        setShowBanner(true);
      }
    }
  };

  // Handle Modal Reject Optional
  const handleModalRejectOptional = () => {
    const newConsent: ConsentState = {
      strictly_necessary: true,
      preferences: false,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString(),
    };
    setConsent(newConsent);
    saveConsentToStorage(newConsent);
    setShowModal(false);
    setShowBanner(false);
    setPageBlocker(false);
    showToastNotification();
  };

  // Handle Modal Accept All
  const handleModalAcceptAll = () => {
    const newConsent: ConsentState = {
      strictly_necessary: true,
      preferences: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString(),
    };
    setConsent(newConsent);
    saveConsentToStorage(newConsent);
    loadScripts(newConsent);
    setShowModal(false);
    setShowBanner(false);
    setPageBlocker(false);
    showToastNotification();
  };

  // Handle Modal Save Choices
  const handleModalSaveChoices = () => {
    saveConsentToStorage(consent);
    loadScripts(consent);
    setShowModal(false);
    setShowBanner(false);
    setPageBlocker(false);
    showToastNotification();
  };

  // Show toast notification
  const showToastNotification = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 4000);
  };

  // Toggle individual cookie categories
  const toggleCategory = (
    category: keyof Omit<ConsentState, "strictly_necessary" | "timestamp">,
  ) => {
    setConsent((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  // Handle modal overlay click
  const handleModalOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleModalClose();
    }
  };

  const styles = `
    * {
      box-sizing: border-box;
    }

    .consent-banner {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: rgba(0, 0, 0, 0.98);
      border-top: 1px solid #1e293b;
      padding: 1.5rem;
      z-index: 9998;
      backdrop-filter: blur(10px);
      animation: slideUp 0.3s ease-out;
      font-family: Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    }

    @keyframes slideUp {
      from {
        transform: translateY(100%);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }

    .consent-container {
      max-width: 1024px;
      margin: 0 auto;
    }

    .consent-header {
      font-size: 1.25rem;
      font-weight: 700;
      color: #e6eef8;
      margin-bottom: 0.75rem;
    }

    .consent-body {
      color: #94a3b8;
      font-size: 0.875rem;
      line-height: 1.6;
      margin-bottom: 1rem;
    }

    .consent-footer {
      color: #64748b;
      font-size: 0.75rem;
      line-height: 1.5;
      margin-bottom: 1rem;
    }

    .consent-footer a {
      color: #D0950F;
      text-decoration: none;
    }

    .consent-footer a:hover {
      text-decoration: underline;
    }

    .consent-buttons {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
      justify-content: flex-start;
      margin-bottom: 12px;
    }

    .consent-btn {
      padding: 0.625rem 1.25rem;
      border-radius: 0.375rem;
      border: none;
      cursor: pointer;
      font-weight: 600;
      font-size: 0.875rem;
      transition: all 0.2s;
      font-family: Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    }

    .consent-btn-primary {
      background-color: #D0950F;
      color: white;
    }

    .consent-btn-primary:hover {
      background-color: #D0950F80;
    }

    .consent-btn-secondary {
      background-color: transparent;
      color: #e6eef8;
      border: 1px solid #334155;
    }

    .consent-btn-secondary:hover {
      background-color: #1e293b;
      border-color: #475569;
    }

    .consent-btn-tertiary {
      background-color: transparent;
      color: #D0950F;
      border: 1px solid #D0950F;
    }

    .consent-btn-tertiary:hover {
      background-color: rgba(99, 102, 241, 0.1);
    }

    .consent-modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 9999;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1rem;
      animation: fadeIn 0.2s ease-out;
      font-family: Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    .consent-modal {
      background-color: #000;
      border: 1px solid #FFFFFF20;
      border-radius: 0.75rem;
      max-width: 600px;
      width: 100%;
      max-height: 90vh;
      overflow-y: auto;
      padding: 2rem;
      animation: slideDown 0.3s ease-out;
      position: relative;
    }

    @keyframes slideDown {
      from {
        transform: translateY(-50px);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }

    .consent-modal-title {
      font-size: 1.5rem;
      font-weight: 700;
      color: #e6eef8;
      margin-bottom: 0.5rem;
    }

    .consent-modal-intro {
      color: #94a3b8;
      font-size: 0.875rem;
      line-height: 1.6;
      margin-bottom: 1.5rem;
    }

    .consent-category {
      margin-bottom: 1.5rem;
      padding-bottom: 1.5rem;
      border-bottom: 1px solid #1e293b;
    }

    .consent-category:last-child {
      border-bottom: none;
    }

    .consent-category-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.75rem;
    }

    .consent-category-label {
      font-weight: 600;
      color: #e6eef8;
      font-size: 0.95rem;
    }

    .consent-category-badge {
      font-size: 0.75rem;
      padding: 0.25rem 0.5rem;
      border-radius: 0.25rem;
      background-color: #334155;
      color: #94a3b8;
      margin-top: 12px;
    }

    .consent-toggle {
      width: 44px;
      height: 24px;
      background-color: #1e293b;
      border: none;
      border-radius: 12px;
      cursor: pointer;
      position: relative;
      transition: background-color 0.2s;
    }

    .consent-toggle.active {
      background-color: #D0950F;
    }

    .consent-toggle:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }

    .consent-toggle-knob {
      position: absolute;
      top: 2px;
      left: 2px;
      width: 20px;
      height: 20px;
      background-color: white;
      border-radius: 50%;
      transition: left 0.2s;
    }

    .consent-toggle.active .consent-toggle-knob {
      left: 22px;
    }

    .consent-category-description {
      color: #94a3b8;
      font-size: 0.875rem;
      line-height: 1.5;
      margin-top: 0.5rem;
    }

    .consent-modal-buttons {
      display: flex;
      gap: 1rem;
      margin-top: 2rem;
      flex-wrap: wrap;
    }

    .consent-modal-buttons button {
      flex: 1;
      min-width: 120px;
    }

    .consent-modal-close {
      position: absolute;
      top: 1.5rem;
      right: 1.5rem;
      background: none;
      border: none;
      color: #94a3b8;
      cursor: pointer;
      font-size: 1.5rem;
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: color 0.2s;
    }

    .consent-modal-close:hover {
      color: #e6eef8;
    }

    .consent-toast {
      position: fixed;
      bottom: 2rem;
      left: 50%;
      transform: translateX(-50%);
      background-color: #1e293b;
      color: #e6eef8;
      padding: 1rem 1.5rem;
      border-radius: 0.375rem;
      border: 1px solid #334155;
      z-index: 10000;
      animation: toastIn 0.3s ease-out;
    }

    @keyframes toastIn {
      from {
        opacity: 0;
        transform: translateX(-50%) translateY(10px);
      }
      to {
        opacity: 1;
        transform: translateX(-50%) translateY(0);
      }
    }

    .consent-page-blocker {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: transparent;
      z-index: 9997;
      cursor: not-allowed;
    }

    @media (max-width: 640px) {
      .consent-banner {
        padding: 1rem;
      }

      .consent-modal {
        padding: 1.5rem;
      }

      .consent-buttons {
        flex-direction: column;
      }

      .consent-btn {
        width: 100%;
      }

      .consent-modal-buttons {
        flex-direction: column;
      }

      .consent-modal-buttons button {
        width: 100%;
      }
    }
  `;

  return (
    <>
      <style>{styles}</style>

      {/* Page Blocker */}
      {pageBlocker && <div className="consent-page-blocker"></div>}

      {/* Consent Banner */}
      {showBanner && (
        <div className="consent-banner">
          <div className="consent-container">
            <div className="consent-header">Your privacy choices</div>
            <div className="consent-body">
              We use cookies and similar technologies to make this site work,
              keep it secure, measure performance, and—if you choose—help us
              personalize ads.
              <br />
              <br />
              Strictly necessary cookies are always on. You can accept all,
              reject optional cookies, or manage your choices. You can change
              your settings at any time.
            </div>
            <div className="consent-buttons">
              <button
                className="consent-btn consent-btn-primary"
                onClick={handleAcceptAll}
              >
                Accept all
              </button>
              <button
                className="consent-btn consent-btn-secondary"
                onClick={handleRejectOptional}
              >
                Reject optional
              </button>
              <button
                className="consent-btn consent-btn-tertiary"
                onClick={handleManageCookies}
              >
                Manage cookies
              </button>
            </div>
            <div className="consent-footer">
              By selecting "Accept all," you agree to our use of optional
              cookies. See our <a href="/privacy-policy">Privacy Policy</a> and{" "}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleManageCookies();
                }}
              >
                Cookie Settings
              </a>{" "}
              for more information.
            </div>
          </div>
        </div>
      )}

      {/* Consent Modal */}
      {showModal && (
        <div
          className="consent-modal-overlay"
          onClick={handleModalOverlayClick}
        >
          <div className="consent-modal">
            <button
              className="consent-modal-close"
              onClick={handleModalClose}
              aria-label="Close cookie settings"
            >
              ✕
            </button>
            <div className="consent-modal-title">Cookie settings</div>
            <div className="consent-modal-intro">
              Choose which cookies we can use. Strictly necessary cookies are
              required for the site to function and can't be switched off. Your
              choices apply to this browser/device and can be changed at any
              time.
            </div>

            {/* Strictly Necessary */}
            <div className="consent-category">
              <div className="consent-category-header">
                <div>
                  <div className="consent-category-label">
                    Strictly necessary
                  </div>
                  <div className="consent-category-badge">Always on</div>
                </div>
              </div>
              <div className="consent-category-description">
                These cookies are required to run the website and checkout, keep
                the site secure, prevent fraud, and remember items in your cart.
                You can block them in your browser, but parts of the site may
                not work.
              </div>
            </div>

            {/* Preferences / Functional */}
            <div className="consent-category">
              <div className="consent-category-header">
                <div className="consent-category-label">
                  Preferences / Functional
                </div>
                <button
                  className={`consent-toggle ${consent.preferences ? "active" : ""}`}
                  onClick={() => toggleCategory("preferences")}
                  aria-label="Toggle preferences cookies"
                >
                  <div className="consent-toggle-knob"></div>
                </button>
              </div>
              <div className="consent-category-description">
                These cookies remember your choices (such as language or region)
                and provide enhanced features to improve your experience.
              </div>
            </div>

            {/* Analytics */}
            <div className="consent-category">
              <div className="consent-category-header">
                <div className="consent-category-label">Analytics</div>
                <button
                  className={`consent-toggle ${consent.analytics ? "active" : ""}`}
                  onClick={() => toggleCategory("analytics")}
                  aria-label="Toggle analytics cookies"
                >
                  <div className="consent-toggle-knob"></div>
                </button>
              </div>
              <div className="consent-category-description">
                These cookies help us understand how visitors use the site (for
                example, page views and clicks) so we can improve performance
                and shopping experience. We use analytics reports in aggregated
                form.
              </div>
            </div>

            {/* Marketing / Advertising */}
            <div className="consent-category">
              <div className="consent-category-header">
                <div className="consent-category-label">
                  Marketing / Advertising
                </div>
                <button
                  className={`consent-toggle ${consent.marketing ? "active" : ""}`}
                  onClick={() => toggleCategory("marketing")}
                  aria-label="Toggle marketing cookies"
                >
                  <div className="consent-toggle-knob"></div>
                </button>
              </div>
              <div className="consent-category-description">
                These cookies help us measure our ads and show more relevant
                offers on other websites and social platforms. They may share
                information about your visit and purchases with advertising
                partners.
              </div>
            </div>

            {/* Small Print */}
            <div
              style={{
                color: "#64748b",
                fontSize: "0.75rem",
                marginTop: "1rem",
              }}
            >
              If you reject optional cookies, you may still see ads, but they
              may be less relevant.
            </div>

            {/* Modal Buttons */}
            <div className="consent-modal-buttons">
              <button
                className="consent-btn consent-btn-secondary"
                onClick={handleModalRejectOptional}
              >
                Reject optional
              </button>
              <button
                className="consent-btn consent-btn-primary"
                onClick={handleModalAcceptAll}
              >
                Accept all
              </button>
              <button
                className="consent-btn consent-btn-tertiary"
                onClick={handleModalSaveChoices}
              >
                Save choices
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toast Notification */}
      {showToast && (
        <div className="consent-toast">
          Cookie settings saved. You can change your choices anytime in{" "}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleManageCookies();
            }}
            style={{ color: "#D0950F", textDecoration: "none" }}
          >
            Cookie Settings
          </a>
          .
        </div>
      )}
    </>
  );
};

export default ConsentManager;
