import { Box } from "@mui/material";
import { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "@fontsource/montserrat";
import "@fontsource/cormorant-garamond";
import { AuthProvider } from "../context/AuthContext";
import AlertUI from "../components/AlertUI";
import "@/src/assets/css/App.css";
import PageTracker from "./PageTracker";

export const metadata: Metadata = {
  metadataBase: new URL("https://pendowears.com"),
  title: {
    default: "Pendo Wears",
    template: "%s | Pendo Wears",
  },
  description: "Pendo Wears",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        
        <style>{`
          * {
            box-sizing: border-box;
          }

          /* Banner Styles */
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
            display: none;
            font-family: Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          }

          .consent-banner.show {
            display: block;
            animation: slideUp 0.3s ease-out;
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

          /* Modal Styles */
          .consent-modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.5);
            z-index: 9999;
            display: none;
            animation: fadeIn 0.2s ease-out;
            font-family: Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          }

          .consent-modal-overlay.show {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 1rem;
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

          .consent-modal {
            position: relative;
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
            display: none;
            animation: toastIn 0.3s ease-out;
          }

          .consent-toast.show {
            display: block;
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

          /* Page blocker overlay */
          .consent-page-blocker {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: transparent;
            z-index: 9997;
            display: none;
            cursor: not-allowed;
          }

          .consent-page-blocker.active {
            display: block;
          }
        `}</style>
      </head>
      <body suppressHydrationWarning style={{ background: "#fff" }}>
        <div id="consent-page-blocker" className="consent-page-blocker"></div>

        {/* Consent Banner */}
        <div id="consent-banner" className="consent-banner">
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
                id="consent-accept-all"
              >
                Accept all
              </button>
              <button
                className="consent-btn consent-btn-secondary"
                id="consent-reject-optional"
              >
                Reject optional
              </button>
              <button
                className="consent-btn consent-btn-tertiary"
                id="consent-manage"
              >
                Manage cookies
              </button>
            </div>
            <div className="consent-footer">
              By selecting "Accept all," you agree to our use of optional
              cookies. See our <a href="/privacy-policy">Privacy Policy</a> and{" "}
              <a href="#" id="cookie-settings-footer-link">
                Cookie Settings
              </a>{" "}
              for more information.
            </div>
          </div>
        </div>

        {/* Consent Modal Overlay */}
        <div id="consent-modal-overlay" className="consent-modal-overlay">
          <div className="consent-modal">
            <button
              className="consent-modal-close"
              id="modal-close-btn"
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
                  className="consent-toggle"
                  id="toggle-preferences"
                  data-category="preferences"
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
                  className="consent-toggle"
                  id="toggle-analytics"
                  data-category="analytics"
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
                  className="consent-toggle"
                  id="toggle-marketing"
                  data-category="marketing"
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
                id="modal-reject-optional"
              >
                Reject optional
              </button>
              <button
                className="consent-btn consent-btn-primary"
                id="modal-accept-all"
              >
                Accept all
              </button>
              <button
                className="consent-btn consent-btn-tertiary"
                id="modal-save"
              >
                Save choices
              </button>
            </div>
          </div>
        </div>

        {/* Toast Notification */}
        <div id="consent-toast" className="consent-toast">
          Cookie settings saved. You can change your choices anytime in{" "}
          <a
            href="#"
            id="cookie-settings-toast-link"
            style={{ color: "#D0950F", textDecoration: "none" }}
          >
            Cookie Settings
          </a>
          .
        </div>
        <AuthProvider>
          <div className="main-content">
            <Box component="div" sx={{ maxWidth: "1512px", margin: "0 auto" }}>
              <Navbar />
              <Box mt={{ xs: "100px", sm: "130px" }}>{children}</Box>
              <Footer />
            </Box>
          </div>
          <AlertUI />
        </AuthProvider>
        {/* Consent Manager Script */}
        <script>{`
          (function() {
            const CONSENT_KEY = 'portfolio-consent-v1';
            const COOKIE_SETTINGS_ID = 'cookie-settings-modal';
              

              // clg('Initializing consent manager with GA Measurement ID:', G-Y8YN12RW15);
            
            // Detect region (simplified - in production, use proper geolocation)
            function getRegion() {
              const tzName = Intl.DateTimeFormat().resolvedOptions().timeZone;
              if (tzName.includes('Europe/London') || tzName.includes('GB')) return 'UK';
              if (tzName.includes('America') || tzName.includes('Canada')) return 'US';
              if (tzName.includes('Australia')) return 'AU';
              return 'OTHER';
            }

            const region = getRegion();
            const defaultOptionalOff = ['UK', 'US', 'AU'].includes(region);

            // Get stored consent or defaults
            function getConsent() {
              const stored = localStorage.getItem(CONSENT_KEY);
              if (stored) return JSON.parse(stored);
              
              return {
                strictly_necessary: true,
                preferences: false,
                analytics: defaultOptionalOff ? false : false,
                marketing: defaultOptionalOff ? false : false,
                timestamp: new Date().toISOString()
              };
            }

            function saveConsent(consent) {
              localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));
            }

            function hasConsent() {
              return localStorage.getItem(CONSENT_KEY) !== null;
            }

            // DOM elements
            const banner = document.getElementById('consent-banner');
            const modalOverlay = document.getElementById('consent-modal-overlay');
            const toast = document.getElementById('consent-toast');
            const pageBlocker = document.getElementById('consent-page-blocker');

            // Banner buttons
            const acceptAllBtn = document.getElementById('consent-accept-all');
            const rejectOptionalBtn = document.getElementById('consent-reject-optional');
            const manageBtn = document.getElementById('consent-manage');

            // Modal buttons
            const modalRejectBtn = document.getElementById('modal-reject-optional');
            const modalAcceptBtn = document.getElementById('modal-accept-all');
            const modalSaveBtn = document.getElementById('modal-save');

            // Cookie settings links
            const cookieSettingsFooterLink = document.getElementById('cookie-settings-footer-link');
            const cookieSettingsToastLink = document.getElementById('cookie-settings-toast-link');

            // Toggles
            const preferencesToggle = document.getElementById('toggle-preferences');
            const analyticsToggle = document.getElementById('toggle-analytics');
            const marketingToggle = document.getElementById('toggle-marketing');
            const modalCloseBtn = document.getElementById('modal-close-btn');

            let currentConsent = getConsent();
            let initialConsent = JSON.parse(JSON.stringify(currentConsent)); // Deep copy for comparison

            function updateToggles() {
              preferencesToggle.classList.toggle('active', currentConsent.preferences);
              analyticsToggle.classList.toggle('active', currentConsent.analytics);
              marketingToggle.classList.toggle('active', currentConsent.marketing);
            }

            function showBanner() {
              if (!hasConsent()) {
                banner.classList.add('show');
                pageBlocker.classList.add('active');
              }
            }

            function hideBanner() {
              banner.classList.remove('show');
              pageBlocker.classList.remove('active');
            }

            function showModal() {
              updateToggles();
              initialConsent = JSON.parse(JSON.stringify(currentConsent)); // Save state when opening
              modalOverlay.classList.add('show');
            }

            function hideModal() {
              modalOverlay.classList.remove('show');
            }

            function hasConsentChanged() {
              return JSON.stringify(currentConsent) !== JSON.stringify(initialConsent);
            }

            function showToast() {
              toast.classList.add('show');
              setTimeout(() => {
                toast.classList.remove('show');
              }, 4000);
            }

            function loadScripts() {
              if (currentConsent.preferences) {
                // console.log('Preferences/Functional consent given');
                // Example: Load font preferences, theme persistence, or regional settings
                // const script = document.createElement('script');
                // script.src = 'https://cdn.example.com/preferences.js';
                // document.head.appendChild(script);
              }
              if (currentConsent.analytics) {
              if (window.__gaLoaded) return;

              // console.log('Analytics consent given - loading analytics service');

              window.__gaLoaded = true;

              const gaScript = document.createElement('script');
              gaScript.async = true;
              gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-Y8YN12RW15';
              document.head.appendChild(gaScript);

              window.dataLayer = window.dataLayer || [];
              window.gtag = function () {
                window.dataLayer.push(arguments);
              };

              window.gtag('js', new Date());
              window.gtag('config', 'G-Y8YN12RW15', {
                anonymize_ip: true,
              });
            }
              if (currentConsent.marketing) {
                // console.log('Marketing/Advertising consent given - loading marketing pixels');
                // Example: load Meta Pixel (Facebook)
                const metaScript = document.createElement('script');
                metaScript.innerHTML = \`
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
                \`;
                document.head.appendChild(metaScript);
                
                // Example: Google Ads conversion tracking
                // const gadsScript = document.createElement('script');
                // gadsScript.async = true;
                // gadsScript.src = 'https://www.googletagmanager.com/gtag/js?id=AW-CONVERSION_ID';
                // document.head.appendChild(gadsScript);
                
                // Example: LinkedIn Pixel
                // const liScript = document.createElement('script');
                // liScript.innerHTML = \`_linkedin_partner_id = "PARTNER_ID"; window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || []; window._linkedin_data_partner_ids.push(_linkedin_partner_id);\`;
                // document.head.appendChild(liScript);
              }
            }

            // Banner button handlers
            acceptAllBtn.addEventListener('click', function() {
              currentConsent = {
                strictly_necessary: true,
                preferences: true,
                analytics: true,
                marketing: true,
                timestamp: new Date().toISOString()
              };
              saveConsent(currentConsent);
              loadScripts();
              hideBanner();
              showToast();
            });

            rejectOptionalBtn.addEventListener('click', function() {
              currentConsent = {
                strictly_necessary: true,
                preferences: false,
                analytics: false,
                marketing: false,
                timestamp: new Date().toISOString()
              };
              saveConsent(currentConsent);
              hideBanner();
              showToast();
            });

            manageBtn.addEventListener('click', showModal);
            cookieSettingsFooterLink.addEventListener('click', function(e) {
              e.preventDefault();
              showModal();
            });
            cookieSettingsToastLink.addEventListener('click', function(e) {
              e.preventDefault();
              showModal();
            });

            // Modal close button handler
            modalCloseBtn.addEventListener('click', function(e) {
              e.preventDefault();
              hideModal();
              // If no changes were made, reopen the banner
              if (!hasConsentChanged()) {
                showBanner();
              }
            });

            // Modal toggle handlers
            preferencesToggle.addEventListener('click', function() {
              currentConsent.preferences = !currentConsent.preferences;
              updateToggles();
            });

            analyticsToggle.addEventListener('click', function() {
              currentConsent.analytics = !currentConsent.analytics;
              updateToggles();
            });

            marketingToggle.addEventListener('click', function() {
              currentConsent.marketing = !currentConsent.marketing;
              updateToggles();
            });

            // Modal button handlers
            modalRejectBtn.addEventListener('click', function() {
              currentConsent = {
                strictly_necessary: true,
                preferences: false,
                analytics: false,
                marketing: false,
                timestamp: new Date().toISOString()
              };
              saveConsent(currentConsent);
              hideModal();
              hideBanner(); // Explicitly hide banner after any choice
              showToast();
            });

            modalAcceptBtn.addEventListener('click', function() {
              currentConsent = {
                strictly_necessary: true,
                preferences: true,
                analytics: true,
                marketing: true,
                timestamp: new Date().toISOString()
              };
              saveConsent(currentConsent);
              loadScripts();
              hideModal();
              hideBanner();
              showToast();
            });

            modalSaveBtn.addEventListener('click', function() {
              saveConsent(currentConsent);
              hideModal();
              hideBanner(); // Hide banner after saving choices
              showToast();
            });

            // Close modal on overlay click
            modalOverlay.addEventListener('click', function(e) {
              if (e.target === modalOverlay) {
                hideModal();
              }
            });

            // Initialize
            loadScripts();
            showBanner();
          })();
        `}</script>
        {/* <ThemeRegistry> */}
        <script src="https://accounts.google.com/gsi/client" async defer />

        <PageTracker />
      </body>
    </html>
  );
}
