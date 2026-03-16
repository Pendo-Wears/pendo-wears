export const config: any = {
  storageName: "klaro", // The name of the cookie/localStorage key
  privacyPolicy: "/privacy-policy",
  // embedded: true,
  translations: {
    en: {
      consentNotice: {
        description: "We use cookies to optimize your experience.",
      },
      googleAnalytics: {
        description: "Collection of visitor statistics.",
      },
    },
  },
  // noAutoLoad: true, // Prevents the default notice from showing
  // testing: false,
  services: [
    {
      name: "googleAnalytics",
      title: "Google Analytics",
      purposes: ["statistics"],
      cookies: [["_ga", "/", "yourdomain.com"]],
    },
  ],
};
