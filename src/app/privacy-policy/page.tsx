import { Box, Typography } from "@mui/material";
import React from "react";

const PrivacyPolicy = () => {
  const tableHead = [
    "Category",
    "Typical retention rationale",
    "Typical period",
  ];
  const tableRows = [
    {
      row: [
        "Order records, invoices, payment confirmations",
        "Tax/accounting, customer service, disputes",
        <strong>6–7 years</strong>,
      ],
    },
    {
      row: [
        "Returns/exchanges and support tickets",
        "Service quality, dispute resolution",
        <strong>2–3 years</strong>,
      ],
    },
    {
      row: [
        "Fraud/security logs and risk signals",
        "Security, prevention, investigations",
        <p>
          <strong>12–24 months</strong> (longer if needed for
          investigations/claims)
        </p>,
      ],
    },
    {
      row: [
        "Marketing subscription records",
        "Consent management, compliance",
        <p>
          While subscribed + <strong>up to 2 years</strong> for
          suppression/records
        </p>,
      ],
    },
    {
      row: [
        "Website analytics logs",
        "Performance and security",
        <p>
          <strong>Up to 14 months</strong> (or shorter if configured)
        </p>,
      ],
    },
    {
      row: [
        "Cookie consent records (where applicable)",
        "Demonstrate consent compliance",
        <p>
          <strong>Up to 6 years</strong> (UK-style compliance recordkeeping)
        </p>,
      ],
    },
  ];
  return (
    <Box px={{ xs: "16px", sm: "20px", md: "50px" }}>
      <Box
        sx={{ display: "flex", flexDirection: "column", gap: "20px" }}
        pb={{ xs: "40px", sm: "60px" }}
      >
        <>
          {/* Main title */}
          <Typography
            color={"#23282B"}
            fontSize={{ xs: 24, sm: 32, md: 45 }}
            fontWeight={700}
            fontFamily={"Montserrat"}
            textAlign={"center"}
          >
            Pendo Privacy Policy
          </Typography>

          {/* Last updated */}
          <Typography
            fontSize={{ xs: 14, sm: 16 }}
            color={"#23282B"}
            fontWeight={400}
            fontFamily={"Montserrat"}
          >
            <strong> Effective Date: 17 January 2026</strong>
          </Typography>

          {/* Intro */}
          <Typography
            fontSize={{ xs: 14, sm: 16 }}
            color={"#23282B"}
            fontWeight={400}
            fontFamily={"Montserrat"}
          >
            This Privacy Policy ( "Policy" ) explains how  Pendo Heritage Wears
            Ltd., which does business as “PENDO”, collects, uses, shares and
            processes your personal information when you access this website, or
            use any of our services, including any written or electronic, and
            oral communications, online and offline, purchases performed and any
            other related services we provide (collectively, the "Services"
            ).The Policy also describes your rights regarding your personal
            information and explains how you can contact us to learn more about
            our data practices or to exercise your rights.
          </Typography>
          <>
            <Typography
              fontSize={{ xs: 18, sm: 24 }}
              color={"#23282B"}
              fontWeight={700}
              fontFamily={"Montserrat"}
            >
              {" "}
              1. Key definitions
            </Typography>
            <Typography
              fontSize={{ xs: 14, sm: 16 }}
              color={"#23282B"}
              fontWeight={400}
              fontFamily={"Montserrat"}
            >
              {" "}
              <strong>Personal information / personal data</strong>: information
              that identifies you or can reasonably be linked to you (directly
              or indirectly).
            </Typography>
            <Typography
              fontSize={{ xs: 14, sm: 16 }}
              color={"#23282B"}
              fontWeight={400}
              fontFamily={"Montserrat"}
            >
              {" "}
              <strong>Sensitive data</strong>: categories treated as sensitive
              (e.g., precise geolocation, government IDs, certain financial
              credentials, health data).{" "}
            </Typography>
            <Typography
              fontSize={{ xs: 14, sm: 16 }}
              color={"#23282B"}
              fontWeight={400}
              fontFamily={"Montserrat"}
            >
              <strong>Processing</strong>: anything we do with personal
              information (collect, store, use, disclose, delete).
            </Typography>
            <Typography
              fontSize={{ xs: 14, sm: 16 }}
              color={"#23282B"}
              fontWeight={400}
              fontFamily={"Montserrat"}
            >
              <strong>Controller (UK)</strong>: the entity that determines why
              and how personal data is processed. Pendo is the controller for
              personal data processed through the Services.
            </Typography>
            <Typography
              fontSize={{ xs: 18, sm: 24 }}
              color={"#23282B"}
              fontWeight={700}
              fontFamily={"Montserrat"}
            >
              2. Scope
            </Typography>
            <Typography
              fontSize={{ xs: 14, sm: 16 }}
              color={"#23282B"}
              fontWeight={400}
              fontFamily={"Montserrat"}
            >
              This Policy applies when you:
            </Typography>
            <Box ml={1}>
              <Typography
                fontSize={{ xs: 14, sm: 16 }}
                color={"#23282B"}
                fontWeight={400}
                fontFamily={"Montserrat"}
                sx={{
                  "&::before": { content: '"• "' },
                }}
              >
                browse or shop on pendowears.com;
              </Typography>
              <Typography
                fontSize={{ xs: 14, sm: 16 }}
                color={"#23282B"}
                fontWeight={400}
                fontFamily={"Montserrat"}
                sx={{
                  "&::before": { content: '"• "' },
                }}
              >
                place an order, request a return/exchange, or contact support;
              </Typography>
              <Typography
                fontSize={{ xs: 14, sm: 16 }}
                color={"#23282B"}
                fontWeight={400}
                fontFamily={"Montserrat"}
                sx={{
                  "&::before": { content: '"• "' },
                }}
              >
                subscribe to marketing communications;
              </Typography>
              <Typography
                fontSize={{ xs: 14, sm: 16 }}
                color={"#23282B"}
                fontWeight={400}
                fontFamily={"Montserrat"}
                sx={{
                  "&::before": { content: '"• "' },
                }}
              >
                engage with our ads or social pages where those interactions
                link back to this Policy.
              </Typography>
            </Box>
            <Typography
              fontSize={{ xs: 14, sm: 16 }}
              color={"#23282B"}
              fontWeight={400}
              fontFamily={"Montserrat"}
            >
              This Policy does not apply to third-party websites or services
              (e.g., payment providers, couriers, social networks) that you
              access through links or integrations. Those parties operate under
              their own privacy policies.
            </Typography>
            <Typography
              fontSize={{ xs: 18, sm: 24 }}
              color={"#23282B"}
              fontWeight={700}
              fontFamily={"Montserrat"}
            >
              3. Personal information we collect
            </Typography>
            <Typography
              fontSize={{ xs: 14, sm: 16 }}
              color={"#23282B"}
              fontWeight={400}
              fontFamily={"Montserrat"}
            >
              {" "}
              We collect personal information in three ways: (A) from you, (B)
              automatically, and (C) from third parties.
            </Typography>
            <Typography
              fontSize={{ xs: 14, sm: 16 }}
              color={"#23282B"}
              fontWeight={600}
              fontFamily={"Montserrat"}
            >
              {" "}
              A. Information you provide
            </Typography>
            <Box>
              <Typography
                fontSize={{ xs: 14, sm: 16 }}
                color={"#23282B"}
                fontWeight={400}
                fontFamily={"Montserrat"}
              >
                <strong>Identity and contact</strong>: name, email, phone
                number, shipping and billing address.
              </Typography>
              <Typography
                fontSize={{ xs: 14, sm: 16 }}
                color={"#23282B"}
                fontWeight={400}
                fontFamily={"Montserrat"}
              >
                <strong>Order and transaction</strong>: items purchased, order
                history, returns/exchanges, discount codes, communications about
                your order.
              </Typography>
              <Typography
                fontSize={{ xs: 14, sm: 16 }}
                color={"#23282B"}
                fontWeight={400}
                fontFamily={"Montserrat"}
              >
                <strong>Customer support</strong>: messages, request details,
                and any files you provide (e.g., photos of damaged items).
              </Typography>
              <Typography
                fontSize={{ xs: 14, sm: 16 }}
                color={"#23282B"}
                fontWeight={400}
                fontFamily={"Montserrat"}
              >
                <strong>Account data (if available)</strong>: login credentials,
                saved addresses, wishlists, preferences.
              </Typography>
              <Typography
                fontSize={{ xs: 14, sm: 16 }}
                color={"#23282B"}
                fontWeight={400}
                fontFamily={"Montserrat"}
              >
                {" "}
                <strong>Marketing preferences</strong>: subscription status,
                channel preferences (email/SMS/other where offered).
              </Typography>
            </Box>
            <Typography
              fontSize={{ xs: 14, sm: 16 }}
              color={"#23282B"}
              fontWeight={600}
              fontFamily={"Montserrat"}
            >
              B. Information collected automatically (website/app-like tracking)
            </Typography>
            <Box>
              <Typography
                fontSize={{ xs: 14, sm: 16 }}
                color={"#23282B"}
                fontWeight={400}
                fontFamily={"Montserrat"}
              >
                <strong>Device and technical data</strong>: IP address, browser
                type, device type, OS, time zone, approximate location inferred
                from IP.
              </Typography>
              <Typography
                fontSize={{ xs: 14, sm: 16 }}
                color={"#23282B"}
                fontWeight={400}
                fontFamily={"Montserrat"}
              >
                <strong>Usage data</strong>: pages viewed, clicks, cart actions,
                checkout events, referring URLs, session duration.
              </Typography>
              <Typography
                fontSize={{ xs: 14, sm: 16 }}
                color={"#23282B"}
                fontWeight={400}
                fontFamily={"Montserrat"}
              >
                <strong>Cookies and similar tech</strong>: cookies, pixels, SDKs
                and similar tools (see Section 12).
              </Typography>
            </Box>
            <Typography
              fontSize={{ xs: 14, sm: 16 }}
              color={"#23282B"}
              fontWeight={600}
              fontFamily={"Montserrat"}
            >
              C. Information from third parties
            </Typography>
            <Box>
              <Typography
                fontSize={{ xs: 14, sm: 16 }}
                color={"#23282B"}
                fontWeight={400}
                fontFamily={"Montserrat"}
              >
                <strong>Payment and fraud signals</strong>: payment status,
                payment method type, chargeback/failed payment indicators,
                fraud/risk signals from processors or fraud-prevention vendors.
                (We generally do not receive your full card number.)
              </Typography>
              <Typography
                fontSize={{ xs: 14, sm: 16 }}
                color={"#23282B"}
                fontWeight={400}
                fontFamily={"Montserrat"}
              >
                <strong>Shipping and delivery</strong>: delivery updates and
                exceptions from logistics partners.
              </Typography>
              <Typography
                fontSize={{ xs: 14, sm: 16 }}
                color={"#23282B"}
                fontWeight={400}
                fontFamily={"Montserrat"}
              >
                <strong>Advertising and analytics partners</strong>: campaign
                performance data and, depending on settings and consents,
                identifiers and event data used to measure or personalize ads.
              </Typography>
              <Typography
                fontSize={{ xs: 14, sm: 16 }}
                color={"#23282B"}
                fontWeight={400}
                fontFamily={"Montserrat"}
              >
                <strong>E-commerce/hosting platforms</strong>: data processed
                through the platform that powers our storefront and checkout.
              </Typography>
            </Box>
            <Typography
              fontSize={{ xs: 18, sm: 24 }}
              color={"#23282B"}
              fontWeight={700}
              fontFamily={"Montserrat"}
            >
              4. What we do not intentionally collect
            </Typography>
            <Typography
              fontSize={{ xs: 14, sm: 16 }}
              color={"#23282B"}
              fontWeight={400}
              fontFamily={"Montserrat"}
            >
              We do not intentionally collect:
            </Typography>
            <Box ml={1}>
              <Typography
                fontSize={{ xs: 14, sm: 16 }}
                color={"#23282B"}
                fontWeight={400}
                fontFamily={"Montserrat"}
                sx={{
                  "&::before": { content: '"• "' },
                }}
              >
                precise GPS geolocation (as a rule, we rely on approximate
                location inferred from IP);
              </Typography>
              <Typography
                fontSize={{ xs: 14, sm: 16 }}
                color={"#23282B"}
                fontWeight={400}
                fontFamily={"Montserrat"}
                sx={{
                  "&::before": { content: '"• "' },
                }}
              >
                health or biometric data;
              </Typography>
              <Typography
                fontSize={{ xs: 14, sm: 16 }}
                color={"#23282B"}
                fontWeight={400}
                fontFamily={"Montserrat"}
                sx={{
                  "&::before": { content: '"• "' },
                }}
              >
                government ID numbers unless you voluntarily provide them for a
                specific support or fraud-resolution purpose (not typical for
                apparel e-commerce).
              </Typography>
            </Box>
            <Typography
              fontSize={{ xs: 14, sm: 16 }}
              color={"#23282B"}
              fontWeight={400}
              fontFamily={"Montserrat"}
            >
              {" "}
              If you submit sensitive information to us in a support message,
              you do so voluntarily. Please avoid sharing sensitive data unless
              necessary.
            </Typography>
            <Typography
              fontSize={{ xs: 18, sm: 24 }}
              color={"#23282B"}
              fontWeight={700}
              fontFamily={"Montserrat"}
            >
              5. Why we use your information (purposes)
            </Typography>
            <Typography
              fontSize={{ xs: 14, sm: 16 }}
              color={"#23282B"}
              fontWeight={400}
              fontFamily={"Montserrat"}
            >
              {" "}
              We process personal information for the following purposes:
            </Typography>
            <Typography
              fontSize={{ xs: 14, sm: 16 }}
              color={"#23282B"}
              fontWeight={600}
              fontFamily={"Montserrat"}
            >
              a. Provide the Services and fulfil orders
            </Typography>
            <Box ml={1}>
              <Typography
                fontSize={{ xs: 14, sm: 16 }}
                color={"#23282B"}
                fontWeight={400}
                fontFamily={"Montserrat"}
                sx={{
                  "&::before": { content: '"• "' },
                }}
              >
                process checkout, payment confirmation, shipping, delivery,
                returns/exchanges;
              </Typography>
              <Typography
                fontSize={{ xs: 14, sm: 16 }}
                color={"#23282B"}
                fontWeight={400}
                fontFamily={"Montserrat"}
                sx={{
                  "&::before": { content: '"• "' },
                }}
              >
                send transactional communications (order confirmations, shipping
                updates, return status).
              </Typography>
            </Box>
            <Typography
              fontSize={{ xs: 14, sm: 16 }}
              color={"#23282B"}
              fontWeight={600}
              fontFamily={"Montserrat"}
            >
              b. Customer support and account management
            </Typography>
            <Typography
              fontSize={{ xs: 14, sm: 16 }}
              color={"#23282B"}
              fontWeight={400}
              fontFamily={"Montserrat"}
              sx={{
                "&::before": { content: '"• "', ml: 1 },
              }}
            >
              respond to inquiries, troubleshoot, process refunds/returns,
              maintain account settings.
            </Typography>
            <Typography
              fontSize={{ xs: 14, sm: 16 }}
              color={"#23282B"}
              fontWeight={600}
              fontFamily={"Montserrat"}
            >
              c. Security and fraud prevention
            </Typography>
            <Box ml={1}>
              <Typography
                fontSize={{ xs: 14, sm: 16 }}
                color={"#23282B"}
                fontWeight={400}
                fontFamily={"Montserrat"}
                sx={{
                  "&::before": { content: '"• "' },
                }}
              >
                protect customers and the business from fraud, abuse, account
                takeover, and suspicious transactions;
              </Typography>
              <Typography
                fontSize={{ xs: 14, sm: 16 }}
                color={"#23282B"}
                fontWeight={400}
                fontFamily={"Montserrat"}
                sx={{
                  "&::before": { content: '"• "' },
                }}
              >
                investigate disputes, chargebacks, and suspected policy
                violations.
              </Typography>
            </Box>
            <Typography
              fontSize={{ xs: 14, sm: 16 }}
              color={"#23282B"}
              fontWeight={600}
              fontFamily={"Montserrat"}
            >
              d. Site operations and improvement
            </Typography>
            <Typography
              fontSize={{ xs: 14, sm: 16 }}
              color={"#23282B"}
              fontWeight={400}
              fontFamily={"Montserrat"}
              sx={{
                "&::before": { content: '"• "', ml: 1 },
              }}
            >
              performance analytics, debugging, quality assurance, inventory and
              demand insights, improving user experience.
            </Typography>
            <Typography
              fontSize={{ xs: 14, sm: 16 }}
              color={"#23282B"}
              fontWeight={600}
              fontFamily={"Montserrat"}
            >
              e. Marketing and advertising (where allowed)
            </Typography>
            <Box ml={1}>
              <Typography
                fontSize={{ xs: 14, sm: 16 }}
                color={"#23282B"}
                fontWeight={400}
                fontFamily={"Montserrat"}
                sx={{
                  "&::before": { content: '"• "' },
                }}
              >
                send marketing communications you opt into (or where permitted
                by law);
              </Typography>
              <Typography
                fontSize={{ xs: 14, sm: 16 }}
                color={"#23282B"}
                fontWeight={400}
                fontFamily={"Montserrat"}
                sx={{
                  "&::before": { content: '"• "' },
                }}
              >
                {" "}
                measure ad effectiveness;
              </Typography>
              <Typography
                fontSize={{ xs: 14, sm: 16 }}
                color={"#23282B"}
                fontWeight={400}
                fontFamily={"Montserrat"}
                sx={{
                  "&::before": { content: '"• "' },
                }}
              >
                show ads that may be more relevant to you (subject to
                cookie/advertising choices).
              </Typography>
            </Box>
            <Typography
              fontSize={{ xs: 14, sm: 16 }}
              color={"#23282B"}
              fontWeight={600}
              fontFamily={"Montserrat"}
            >
              f. Legal and compliance
            </Typography>
            <Typography
              fontSize={{ xs: 14, sm: 16 }}
              color={"#23282B"}
              fontWeight={400}
              fontFamily={"Montserrat"}
              sx={{
                "&::before": { content: '"• "', ml: 1 },
              }}
            >
              tax, accounting, audits; responding to lawful requests; enforcing
              our terms and defending legal claims.
            </Typography>
            <Typography
              fontSize={{ xs: 14, sm: 16 }}
              color={"#23282B"}
              fontWeight={600}
              fontFamily={"Montserrat"}
            >
              g. Business transactions
            </Typography>
            <Typography
              fontSize={{ xs: 14, sm: 16 }}
              color={"#23282B"}
              fontWeight={400}
              fontFamily={"Montserrat"}
              sx={{
                "&::before": { content: '"• "', ml: 1 },
              }}
            >
              {" "}
              mergers, acquisitions, restructuring, financing, or sale of assets
              (see Section 9).{" "}
            </Typography>
            <>
              <Typography
                fontSize={{ xs: 18, sm: 24 }}
                fontWeight={700}
                fontFamily="Montserrat"
                color="#23282B"
              >
                6. UK lawful bases for processing
              </Typography>

              <Typography
                fontSize={{ xs: 14, sm: 16 }}
                fontWeight={400}
                fontFamily="Montserrat"
                color="#23282B"
              >
                If you are in the UK, we rely on the following lawful bases (as
                applicable):
              </Typography>

              <Box ml={1}>
                <Typography
                  fontSize={{ xs: 14, sm: 16 }}
                  fontWeight={400}
                  fontFamily="Montserrat"
                  color="#23282B"
                  sx={{
                    "&::before": { content: '"• "' },
                  }}
                >
                  <strong>Contract</strong>: to process orders, deliver
                  products, handle returns/refunds, provide customer support
                  tied to your purchase.
                </Typography>

                <Typography
                  fontSize={{ xs: 14, sm: 16 }}
                  fontWeight={400}
                  fontFamily="Montserrat"
                  color="#23282B"
                  sx={{
                    "&::before": { content: '"• "' },
                  }}
                >
                  <strong>Legitimate interests</strong>: to run and improve our
                  business, secure the Services, prevent fraud, measure
                  performance, and conduct limited marketing where permitted.
                </Typography>

                <Typography
                  fontSize={{ xs: 14, sm: 16 }}
                  fontWeight={400}
                  fontFamily="Montserrat"
                  color="#23282B"
                  sx={{
                    "&::before": { content: '"• "' },
                  }}
                >
                  <strong>Consent</strong>: for non-essential cookies/marketing
                  technologies and certain marketing communications (especially
                  where required).
                </Typography>

                <Typography
                  fontSize={{ xs: 14, sm: 16 }}
                  fontWeight={400}
                  fontFamily="Montserrat"
                  color="#23282B"
                  sx={{
                    "&::before": { content: '"• "' },
                  }}
                >
                  <strong>Legal obligation</strong>: to keep records required by
                  tax/accounting laws and respond to lawful requests.
                </Typography>
              </Box>

              <Typography
                fontSize={{ xs: 14, sm: 16 }}
                fontWeight={400}
                fontFamily="Montserrat"
                color="#23282B"
              >
                <strong>Legitimate interests we pursue</strong> include:
                preventing fraud, securing transactions, improving website
                performance, understanding product demand, and communicating
                with customers about service-related matters.
              </Typography>

              <Typography
                fontSize={{ xs: 18, sm: 24 }}
                fontWeight={700}
                fontFamily="Montserrat"
                color="#23282B"
              >
                7. If you choose not to provide information
              </Typography>

              <Typography
                fontSize={{ xs: 14, sm: 16 }}
                fontWeight={400}
                fontFamily="Montserrat"
                color="#23282B"
              >
                Some information is required to complete a purchase (e.g., name,
                shipping address, payment confirmation). If you do not provide
                required information:
              </Typography>

              <Box ml={1}>
                <Typography
                  fontSize={{ xs: 14, sm: 16 }}
                  fontWeight={400}
                  fontFamily="Montserrat"
                  color="#23282B"
                  sx={{
                    "&::before": { content: '"• "' },
                  }}
                >
                  we may be unable to process your order or deliver items;
                </Typography>

                <Typography
                  fontSize={{ xs: 14, sm: 16 }}
                  fontWeight={400}
                  fontFamily="Montserrat"
                  color="#23282B"
                  sx={{
                    "&::before": { content: '"• "' },
                  }}
                >
                  we may be unable to support returns, refunds, or warranty-like
                  issues.
                </Typography>
              </Box>

              <Typography
                fontSize={{ xs: 14, sm: 16 }}
                fontWeight={400}
                fontFamily="Montserrat"
                color="#23282B"
              >
                Marketing communications are optional.
              </Typography>

              <Typography
                fontSize={{ xs: 18, sm: 24 }}
                fontWeight={700}
                fontFamily="Montserrat"
                color="#23282B"
              >
                8. Automated decision-making and profiling
              </Typography>

              <Typography
                fontSize={{ xs: 14, sm: 16 }}
                fontWeight={400}
                fontFamily="Montserrat"
                color="#23282B"
              >
                We may use automated tools for:
              </Typography>

              <Box ml={1}>
                <Typography
                  fontSize={{ xs: 14, sm: 16 }}
                  fontWeight={400}
                  fontFamily="Montserrat"
                  color="#23282B"
                  sx={{
                    "&::before": { content: '"• "' },
                  }}
                >
                  <strong>fraud detection and transaction security</strong>,
                  which may flag or block a transaction or require additional
                  review; and
                </Typography>

                <Typography
                  fontSize={{ xs: 14, sm: 16 }}
                  fontWeight={400}
                  fontFamily="Montserrat"
                  color="#23282B"
                  sx={{
                    "&::before": { content: '"• "' },
                  }}
                >
                  <strong>marketing segmentation</strong> (e.g., grouping
                  customers by purchase history or browsing behavior) where
                  permitted and subject to your cookie/advertising choices.
                </Typography>
              </Box>

              <Typography
                fontSize={{ xs: 14, sm: 16 }}
                fontWeight={400}
                fontFamily="Montserrat"
                color="#23282B"
              >
                Where a decision has a significant effect (e.g., an order is
                cancelled due to suspected fraud), we take reasonable steps to
                allow review through customer support.
              </Typography>
            </>
            <>
              <Typography
                fontSize={{ xs: 18, sm: 24 }}
                fontWeight={700}
                fontFamily="Montserrat"
                color="#23282B"
              >
                9. How we disclose personal information
              </Typography>

              <Typography
                fontSize={{ xs: 14, sm: 16 }}
                fontWeight={400}
                fontFamily="Montserrat"
                color="#23282B"
              >
                We disclose personal information to third parties only as needed
                for the purposes in this Policy, including:
              </Typography>

              <Typography
                fontSize={{ xs: 14, sm: 16 }}
                fontWeight={600}
                fontFamily="Montserrat"
                color="#23282B"
              >
                a. Service providers (processors)
              </Typography>

              <Typography
                fontSize={{ xs: 14, sm: 16 }}
                fontWeight={400}
                fontFamily="Montserrat"
                color="#23282B"
              >
                Examples include providers that support:
              </Typography>
              <Box ml={1}>
                <Typography
                  fontSize={{ xs: 14, sm: 16 }}
                  fontWeight={400}
                  fontFamily="Montserrat"
                  color="#23282B"
                  sx={{
                    "&::before": { content: '"• "' },
                  }}
                >
                  storefront hosting and technical infrastructure;
                </Typography>

                <Typography
                  fontSize={{ xs: 14, sm: 16 }}
                  fontWeight={400}
                  fontFamily="Montserrat"
                  color="#23282B"
                  sx={{
                    "&::before": { content: '"• "' },
                  }}
                >
                  payment processing;
                </Typography>
                <Typography
                  fontSize={{ xs: 14, sm: 16 }}
                  fontWeight={400}
                  fontFamily="Montserrat"
                  color="#23282B"
                  sx={{
                    "&::before": { content: '"• "' },
                  }}
                >
                  shipping/logistics and delivery tracking;
                </Typography>
                <Typography
                  fontSize={{ xs: 14, sm: 16 }}
                  fontWeight={400}
                  fontFamily="Montserrat"
                  color="#23282B"
                  sx={{
                    "&::before": { content: '"• "' },
                  }}
                >
                  customer support tooling;
                </Typography>
                <Typography
                  fontSize={{ xs: 14, sm: 16 }}
                  fontWeight={400}
                  fontFamily="Montserrat"
                  color="#23282B"
                  sx={{
                    "&::before": { content: '"• "' },
                  }}
                >
                  fraud prevention and security monitoring;
                </Typography>
                <Typography
                  fontSize={{ xs: 14, sm: 16 }}
                  fontWeight={400}
                  fontFamily="Montserrat"
                  color="#23282B"
                  sx={{
                    "&::before": { content: '"• "' },
                  }}
                >
                  analytics and marketing tooling (subject to your choices).
                </Typography>
              </Box>

              <Typography
                fontSize={{ xs: 14, sm: 16 }}
                fontWeight={400}
                fontFamily="Montserrat"
                color="#23282B"
              >
                These providers are authorised to process personal information
                on our behalf, under contractual terms designed to protect it.
              </Typography>

              <Typography
                fontSize={{ xs: 14, sm: 16 }}
                fontWeight={600}
                fontFamily="Montserrat"
                color="#23282B"
              >
                b. Professional advisors
              </Typography>

              <Typography
                fontSize={{ xs: 14, sm: 16 }}
                fontWeight={400}
                fontFamily="Montserrat"
                color="#23282B"
              >
                Lawyers, auditors, banks, insurers, and consultants where
                necessary for business operations or claims.
              </Typography>

              <Typography
                fontSize={{ xs: 14, sm: 16 }}
                fontWeight={600}
                fontFamily="Montserrat"
                color="#23282B"
              >
                c. Legal and safety disclosures
              </Typography>

              <Typography
                fontSize={{ xs: 14, sm: 16 }}
                fontWeight={400}
                fontFamily="Montserrat"
                color="#23282B"
              >
                We may disclose information to regulators, law enforcement,
                courts, or other parties where required by law or necessary to
                protect rights, safety, and security.
              </Typography>

              <Typography
                fontSize={{ xs: 14, sm: 16 }}
                fontWeight={600}
                fontFamily="Montserrat"
                color="#23282B"
              >
                d. Business transfers
              </Typography>

              <Typography
                fontSize={{ xs: 14, sm: 16 }}
                fontWeight={400}
                fontFamily="Montserrat"
                color="#23282B"
              >
                If we enter into or plan a transaction (merger, acquisition,
                restructuring, sale of assets, financing), we may share
                information with relevant counterparties and advisors subject to
                confidentiality and appropriate safeguards. If the transaction
                closes, information may transfer to the successor.
              </Typography>

              <Typography
                fontSize={{ xs: 14, sm: 16 }}
                fontWeight={600}
                fontFamily="Montserrat"
                color="#23282B"
              >
                e. Advertising-related disclosures
              </Typography>

              <Typography
                fontSize={{ xs: 14, sm: 16 }}
                fontWeight={400}
                fontFamily="Montserrat"
                color="#23282B"
              >
                Where enabled and lawful (and subject to consent where
                required), we may share identifiers and event data with
                advertising partners to measure and personalize ads. Some U.S.
                laws treat this as “sharing” for cross-context behavioral
                advertising. See{" "}
                <strong>
                  Section 12 (Cookies & ads) and Section 15 (U.S. State Privacy
                  Notice) for opt-out options
                </strong>
                .
              </Typography>

              <Typography
                fontSize={{ xs: 14, sm: 16 }}
                fontWeight={600}
                fontFamily="Montserrat"
                color="#23282B"
              >
                We do not sell personal information for money.
              </Typography>

              <Typography
                fontSize={{ xs: 14, sm: 16 }}
                fontWeight={600}
                fontFamily="Montserrat"
                color="#23282B"
              >
                f. Legal and compliance
              </Typography>

              <Typography
                fontSize={{ xs: 14, sm: 16 }}
                fontWeight={400}
                fontFamily="Montserrat"
                color="#23282B"
                sx={{
                  "&::before": { content: '"• "', ml: 1 },
                }}
              >
                tax, accounting, audits; responding to lawful requests;
                enforcing our terms and defending legal claims.
              </Typography>

              <Typography
                fontSize={{ xs: 14, sm: 16 }}
                fontWeight={600}
                fontFamily="Montserrat"
                color="#23282B"
              >
                g. Business transactions
              </Typography>

              <Typography
                fontSize={{ xs: 14, sm: 16 }}
                fontWeight={400}
                fontFamily="Montserrat"
                color="#23282B"
                sx={{
                  "&::before": { content: '"• "', ml: 1 },
                }}
              >
                mergers, acquisitions, restructuring, financing, or sale of
                assets (see Section 9).
              </Typography>

              <Typography
                fontSize={{ xs: 18, sm: 24 }}
                fontWeight={700}
                fontFamily="Montserrat"
                color="#23282B"
              >
                10. Data retention (how long we keep information)
              </Typography>

              <Typography
                fontSize={{ xs: 14, sm: 16 }}
                fontWeight={400}
                fontFamily="Montserrat"
                color="#23282B"
              >
                We retain personal information only as long as necessary for the
                purposes described, including legal, tax, and dispute
                requirements. Typical retention periods (may vary by
                jurisdiction and circumstances):
              </Typography>

              <Box overflow={"auto"}>
                <Box width="fit-content" sx={{ border: `1px solid #656565` }}>
                  <Box display="flex" alignItems={"center"}>
                    {tableHead.map((head) => (
                      <Typography
                        sx={{
                          fontSize: { xs: 14, sm: 16 },
                          color: "#000",
                          lineHeight: "22.4px",
                          fontWeight: 600,
                          fontFamily: "Montserrat",
                          px: "12px",
                          border: `1px solid #656565`,
                          minWidth: { xs: "250px", sm: "400px" },
                          maxWidth: { xs: "250px", sm: "400px" },
                          height: "100px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {head}
                      </Typography>
                    ))}
                  </Box>
                  {tableRows.map((row) => (
                    <Box display="flex" alignItems={"center"}>
                      {row.row.map((row) => (
                        <Typography
                          sx={{
                            fontSize: { xs: 14, sm: 16 },
                            color: "#000",
                            lineHeight: "22.4px",
                            fontWeight: 400,
                            fontFamily: "Montserrat",
                            px: "12px",
                            border: `1px solid #656565`,
                            minWidth: { xs: "250px", sm: "400px" },
                            maxWidth: { xs: "250px", sm: "400px" },
                            height: "100px",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          {row}
                        </Typography>
                      ))}
                    </Box>
                  ))}
                </Box>
              </Box>

              <Typography
                fontSize={{ xs: 18, sm: 24 }}
                fontWeight={700}
                fontFamily="Montserrat"
                color="#23282B"
              >
                11. Your rights and choices (USA, UK, Canada, Australia)
              </Typography>

              <Typography
                fontSize={{ xs: 14, sm: 16 }}
                fontWeight={600}
                fontFamily="Montserrat"
                color="#23282B"
              >
                a. Universal controls (all regions)
              </Typography>

              <Box ml={1}>
                <Typography
                  fontSize={{ xs: 14, sm: 16 }}
                  fontWeight={400}
                  fontFamily="Montserrat"
                  color="#23282B"
                  sx={{
                    "&::before": { content: '"• "' },
                  }}
                >
                  process checkout, payment confirmation, shipping, delivery,
                  returns/exchanges;
                </Typography>
                <Typography
                  fontSize={{ xs: 14, sm: 16 }}
                  fontWeight={400}
                  fontFamily="Montserrat"
                  color="#23282B"
                  sx={{
                    "&::before": { content: '"• "' },
                  }}
                >
                  send transactional communications (order confirmations,
                  shipping updates, return status).
                </Typography>
              </Box>

              <Typography
                fontSize={{ xs: 14, sm: 16 }}
                fontWeight={600}
                fontFamily="Montserrat"
                color="#23282B"
              >
                b. United Kingdom (UK GDPR / Data Protection Act 2018)
              </Typography>

              <Typography
                fontSize={{ xs: 14, sm: 16 }}
                fontWeight={400}
                fontFamily="Montserrat"
                color="#23282B"
              >
                You may have the right to:
              </Typography>
              <Box mb={1}>
                <Typography
                  fontSize={{ xs: 14, sm: 16 }}
                  fontWeight={400}
                  fontFamily="Montserrat"
                  color="#23282B"
                  sx={{
                    "&::before": { content: '"• "' },
                  }}
                >
                  {" "}
                  access, correct, delete;
                </Typography>
                <Typography
                  fontSize={{ xs: 14, sm: 16 }}
                  fontWeight={400}
                  fontFamily="Montserrat"
                  color="#23282B"
                  sx={{
                    "&::before": { content: '"• "' },
                  }}
                >
                  {" "}
                  restrict processing;
                </Typography>
                <Typography
                  fontSize={{ xs: 14, sm: 16 }}
                  fontWeight={400}
                  fontFamily="Montserrat"
                  color="#23282B"
                  sx={{
                    "&::before": { content: '"• "' },
                  }}
                >
                  object to processing (especially where we rely on legitimate
                  interests);
                </Typography>
                <Typography
                  fontSize={{ xs: 14, sm: 16 }}
                  fontWeight={400}
                  fontFamily="Montserrat"
                  color="#23282B"
                  sx={{
                    "&::before": { content: '"• "' },
                  }}
                >
                  data portability (in certain cases);
                </Typography>
                <Typography
                  fontSize={{ xs: 14, sm: 16 }}
                  fontWeight={400}
                  fontFamily="Montserrat"
                  color="#23282B"
                  sx={{
                    "&::before": { content: '"• "' },
                  }}
                >
                  withdraw consent (where processing is based on consent);
                </Typography>
                <Typography
                  fontSize={{ xs: 14, sm: 16 }}
                  fontWeight={400}
                  fontFamily="Montserrat"
                  color="#23282B"
                  sx={{
                    "&::before": { content: '"• "' },
                  }}
                >
                  lodge a complaint with the Information Commissioner’s Office
                  (ICO).
                </Typography>
              </Box>

              <Typography
                fontSize={{ xs: 14, sm: 16 }}
                fontWeight={600}
                fontFamily="Montserrat"
                color="#23282B"
              >
                c. Canada (PIPEDA and applicable provincial laws)
              </Typography>

              <Typography
                fontSize={{ xs: 14, sm: 16 }}
                fontWeight={400}
                fontFamily="Montserrat"
                color="#23282B"
              >
                You may have the right to:
              </Typography>

              <Box mb={1}>
                <Typography
                  fontSize={{ xs: 14, sm: 16 }}
                  fontWeight={400}
                  fontFamily="Montserrat"
                  color="#23282B"
                  sx={{
                    "&::before": { content: '"• "' },
                  }}
                >
                  access and correct your personal information;
                </Typography>
                <Typography
                  fontSize={{ xs: 14, sm: 16 }}
                  fontWeight={400}
                  fontFamily="Montserrat"
                  color="#23282B"
                  sx={{
                    "&::before": { content: '"• "' },
                  }}
                >
                  withdraw consent (subject to legal/contract limits);
                </Typography>
                <Typography
                  fontSize={{ xs: 14, sm: 16 }}
                  fontWeight={400}
                  fontFamily="Montserrat"
                  color="#23282B"
                  sx={{
                    "&::before": { content: '"• "' },
                  }}
                >
                  complain to the Office of the Privacy Commissioner of Canada
                  (OPC) if unresolved.
                </Typography>
              </Box>

              <Typography
                fontSize={{ xs: 14, sm: 16 }}
                fontWeight={600}
                fontFamily="Montserrat"
                color="#23282B"
              >
                d. Australia (Privacy Act 1988 and APPs)
              </Typography>

              <Typography
                fontSize={{ xs: 14, sm: 16 }}
                fontWeight={400}
                fontFamily="Montserrat"
                color="#23282B"
              >
                You may have the right to:
              </Typography>

              <Box mb={1}>
                <Typography
                  fontSize={{ xs: 14, sm: 16 }}
                  fontWeight={400}
                  fontFamily="Montserrat"
                  color="#23282B"
                  sx={{
                    "&::before": { content: '"• "' },
                  }}
                >
                  request access and correction;
                </Typography>
                <Typography
                  fontSize={{ xs: 14, sm: 16 }}
                  fontWeight={400}
                  fontFamily="Montserrat"
                  color="#23282B"
                  sx={{
                    "&::before": { content: '"• "' },
                  }}
                >
                  make a complaint to us and, if unresolved, to the Office of
                  the Australian Information Commissioner (OAIC).
                </Typography>
              </Box>

              <Typography
                fontSize={{ xs: 14, sm: 16 }}
                fontWeight={600}
                fontFamily="Montserrat"
                color="#23282B"
              >
                e. United States (state privacy laws, where applicable)
              </Typography>

              <Typography
                fontSize={{ xs: 14, sm: 16 }}
                fontWeight={400}
                fontFamily="Montserrat"
                color="#23282B"
              >
                Depending on your state, you may have rights to:
              </Typography>

              <Box mb={1}>
                <Typography
                  fontSize={{ xs: 14, sm: 16 }}
                  fontWeight={400}
                  fontFamily="Montserrat"
                  color="#23282B"
                  sx={{
                    "&::before": { content: '"• "' },
                  }}
                >
                  know/access, correct, delete, and obtain a copy (portability);
                </Typography>
                <Typography
                  fontSize={{ xs: 14, sm: 16 }}
                  fontWeight={400}
                  fontFamily="Montserrat"
                  color="#23282B"
                  sx={{
                    "&::before": { content: '"• "' },
                  }}
                >
                  opt out of targeted advertising and certain disclosures
                  treated as “sharing/sale”;
                </Typography>
                <Typography
                  fontSize={{ xs: 14, sm: 16 }}
                  fontWeight={400}
                  fontFamily="Montserrat"
                  color="#23282B"
                  sx={{
                    "&::before": { content: '"• "' },
                  }}
                >
                  limit certain processing of sensitive personal information (if
                  applicable); non-discrimination for exercising rights.
                </Typography>
              </Box>

              <Typography
                fontSize={{ xs: 14, sm: 16 }}
                fontWeight={400}
                fontFamily="Montserrat"
                color="#23282B"
              >
                <strong>Appeals</strong>: Where required, if we deny your
                request, you may appeal by replying to our denial response with
                the subject line “Appeal – Privacy Request.”
              </Typography>
            </>
            <>
              <Typography
                fontSize={{ xs: 18, sm: 24 }}
                fontWeight={700}
                fontFamily="Montserrat"
                color="#23282B"
              >
                12. Cookies, pixels, and similar technologies
              </Typography>

              <Typography
                fontSize={{ xs: 14, sm: 16 }}
                fontWeight={400}
                fontFamily="Montserrat"
                color="#23282B"
              >
                We use cookies and similar technologies (such as pixels, tags,
                SDKs, and local storage) on pendowears.com to operate the site,
                keep it secure, measure performance, and (if you allow) help us
                market our products more effectively.
              </Typography>

              <Typography
                fontSize={18}
                fontWeight={700}
                fontFamily="Montserrat"
                color="#23282B"
              >
                12.1 Categories of technologies we use
              </Typography>

              <Typography
                fontSize={{ xs: 14, sm: 16 }}
                fontWeight={400}
                fontFamily="Montserrat"
                color="#23282B"
              >
                Our site uses the following categories. Your choices may be
                presented via a cookie banner or settings tool (where
                available).
              </Typography>

              <Typography
                fontSize={{ xs: 14, sm: 16 }}
                fontWeight={600}
                fontFamily="Montserrat"
                color="#23282B"
              >
                a. Strictly necessary (always on)
              </Typography>

              <Typography
                fontSize={{ xs: 14, sm: 16 }}
                fontWeight={400}
                fontFamily="Montserrat"
                color="#23282B"
              >
                These technologies are required for the site to function and
                cannot be switched off in our systems. They are used for:
              </Typography>

              <Box ml={1}>
                <Typography
                  fontSize={{ xs: 14, sm: 16 }}
                  fontWeight={400}
                  fontFamily="Montserrat"
                  color="#23282B"
                  sx={{
                    "&::before": { content: '"• "' },
                  }}
                >
                  {" "}
                  page navigation and basic site operations;
                </Typography>
                <Typography
                  fontSize={{ xs: 14, sm: 16 }}
                  fontWeight={400}
                  fontFamily="Montserrat"
                  color="#23282B"
                  sx={{
                    "&::before": { content: '"• "' },
                  }}
                >
                  {" "}
                  cart and checkout functionality;
                </Typography>
                <Typography
                  fontSize={{ xs: 14, sm: 16 }}
                  fontWeight={400}
                  fontFamily="Montserrat"
                  color="#23282B"
                  sx={{
                    "&::before": { content: '"• "' },
                  }}
                >
                  {" "}
                  fraud prevention and security controls;
                </Typography>
                <Typography
                  fontSize={{ xs: 14, sm: 16 }}
                  fontWeight={400}
                  fontFamily="Montserrat"
                  color="#23282B"
                  sx={{
                    "&::before": { content: '"• "' },
                  }}
                >
                  {" "}
                  load balancing and preventing abuse.
                </Typography>
              </Box>

              <Typography
                fontSize={{ xs: 14, sm: 16 }}
                fontWeight={400}
                fontFamily="Montserrat"
                color="#23282B"
              >
                If you block these in your browser, parts of the site may not
                work (including checkout).
              </Typography>

              <Typography
                fontSize={{ xs: 14, sm: 16 }}
                fontWeight={600}
                fontFamily="Montserrat"
                color="#23282B"
              >
                b. Preferences / functional (optional)
              </Typography>

              <Typography
                fontSize={{ xs: 14, sm: 16 }}
                fontWeight={400}
                fontFamily="Montserrat"
                color="#23282B"
              >
                These help the site remember your choices and provide enhanced
                features, such as:
              </Typography>

              <Box mb={1}>
                <Typography
                  fontSize={{ xs: 14, sm: 16 }}
                  fontWeight={400}
                  fontFamily="Montserrat"
                  color="#23282B"
                  sx={{ "&::before": { content: '"• "' } }}
                >
                  language, region, and display preferences;
                </Typography>
                <Typography
                  fontSize={{ xs: 14, sm: 16 }}
                  fontWeight={400}
                  fontFamily="Montserrat"
                  color="#23282B"
                  sx={{ "&::before": { content: '"• "' } }}
                >
                  remembering items like saved settings where applicable.
                </Typography>
              </Box>

              <Typography
                fontSize={{ xs: 14, sm: 16 }}
                fontWeight={600}
                fontFamily="Montserrat"
                color="#23282B"
              >
                c. Analytics (optional)
              </Typography>

              <Typography
                fontSize={{ xs: 14, sm: 16 }}
                fontWeight={400}
                fontFamily="Montserrat"
                color="#23282B"
              >
                These help us understand how visitors use the site so we can
                improve performance and user experience. Analytics typically
                collect:
              </Typography>

              <Box mb={1}>
                <Typography
                  fontSize={{ xs: 14, sm: 16 }}
                  fontWeight={400}
                  fontFamily="Montserrat"
                  color="#23282B"
                  sx={{ "&::before": { content: '"• "' } }}
                >
                  device and browser data, approximate location (from IP), and
                  on-site events (e.g., page views, add-to-cart, checkout
                  steps);
                </Typography>
                <Typography
                  fontSize={{ xs: 14, sm: 16 }}
                  fontWeight={400}
                  fontFamily="Montserrat"
                  color="#23282B"
                  sx={{ "&::before": { content: '"• "' } }}
                >
                  aggregated reporting about traffic sources and site usage.
                </Typography>
              </Box>

              <Typography
                fontSize={{ xs: 14, sm: 16 }}
                fontWeight={400}
                fontFamily="Montserrat"
                color="#23282B"
              >
                Where required by law (including in the UK), analytics cookies
                are used only if you consent.
              </Typography>

              <Typography
                fontSize={{ xs: 14, sm: 16 }}
                fontWeight={600}
                fontFamily="Montserrat"
                color="#23282B"
              >
                d. Marketing / advertising (optional)
              </Typography>

              <Typography
                fontSize={{ xs: 14, sm: 16 }}
                fontWeight={400}
                fontFamily="Montserrat"
                color="#23282B"
              >
                These technologies help us:
              </Typography>

              <Box mb={1}>
                <Typography
                  fontSize={{ xs: 14, sm: 16 }}
                  fontWeight={400}
                  fontFamily="Montserrat"
                  color="#23282B"
                  sx={{ "&::before": { content: '"• "' } }}
                >
                  measure the effectiveness of ads and campaigns;
                </Typography>
                <Typography
                  fontSize={{ xs: 14, sm: 16 }}
                  fontWeight={400}
                  fontFamily="Montserrat"
                  color="#23282B"
                  sx={{ "&::before": { content: '"• "' } }}
                >
                  limit how often you see an ad (frequency capping);
                </Typography>
                <Typography
                  fontSize={{ xs: 14, sm: 16 }}
                  fontWeight={400}
                  fontFamily="Montserrat"
                  color="#23282B"
                  sx={{ "&::before": { content: '"• "' } }}
                >
                  show ads that may be more relevant to you on third-party
                  platforms.
                </Typography>
              </Box>

              <Typography
                fontSize={{ xs: 14, sm: 16 }}
                fontWeight={400}
                fontFamily="Montserrat"
                color="#23282B"
              >
                Marketing technologies may involve sharing identifiers and event
                data (such as page views, product views, and purchase events)
                with advertising partners. In some jurisdictions, this may be
                considered “targeted advertising” or “sharing” for cross-context
                behavioral advertising.
              </Typography>

              <Typography
                fontSize={{ xs: 14, sm: 16 }}
                fontWeight={400}
                fontFamily="Montserrat"
                color="#23282B"
              >
                Where required by law (including in the UK), marketing cookies
                are used only if you consent.
              </Typography>

              <Typography
                fontSize={18}
                fontWeight={700}
                fontFamily="Montserrat"
                color="#23282B"
              >
                12.2 Third parties that may set or read cookies
              </Typography>

              <Typography
                fontSize={{ xs: 14, sm: 16 }}
                fontWeight={400}
                fontFamily="Montserrat"
                color="#23282B"
              >
                Some cookies and similar technologies are provided by third
                parties that support our analytics, advertising, fraud
                prevention, and site operations. Depending on configuration,
                these may include:
              </Typography>

              <Box mb={1}>
                <Typography
                  fontSize={{ xs: 14, sm: 16 }}
                  fontWeight={400}
                  fontFamily="Montserrat"
                  color="#23282B"
                  sx={{
                    "&::before": { content: '"• "' },
                  }}
                >
                  analytics providers (e.g., Google Analytics or similar tools);
                </Typography>
                <Typography
                  fontSize={{ xs: 14, sm: 16 }}
                  fontWeight={400}
                  fontFamily="Montserrat"
                  color="#23282B"
                  sx={{
                    "&::before": { content: '"• "' },
                  }}
                >
                  advertising partners (e.g., Meta, Google, or similar
                  networks);
                </Typography>
                <Typography
                  fontSize={{ xs: 14, sm: 16 }}
                  fontWeight={400}
                  fontFamily="Montserrat"
                  color="#23282B"
                  sx={{
                    "&::before": { content: '"• "' },
                  }}
                >
                  ecommerce and fraud/security providers that support checkout
                  integrity.
                </Typography>
              </Box>

              <Typography
                fontSize={{ xs: 14, sm: 16 }}
                fontWeight={400}
                fontFamily="Montserrat"
                color="#23282B"
              >
                These third parties may process data in accordance with their
                own privacy policies and, where applicable, as our service
                providers under contract.
              </Typography>

              <Typography
                fontSize={18}
                fontWeight={700}
                fontFamily="Montserrat"
                color="#23282B"
              >
                12.3 How to manage your cookie choices
              </Typography>

              <Typography
                fontSize={{ xs: 14, sm: 16 }}
                fontWeight={400}
                fontFamily="Montserrat"
                color="#23282B"
              >
                You can control cookies in several ways:
              </Typography>

              <Box>
                <Typography
                  fontSize={18}
                  fontWeight={600}
                  fontFamily="Montserrat"
                  color="#23282B"
                >
                  1. Cookie banner / settings tool (preferred)
                </Typography>

                <Typography
                  fontSize={{ xs: 14, sm: 16 }}
                  fontWeight={400}
                  fontFamily="Montserrat"
                  color="#23282B"
                >
                  If we present a cookie banner or preference tool, you can
                  accept or reject optional categories (Preferences, Analytics,
                  Marketing) and change your choices later through the same
                  tool.
                </Typography>

                <Typography
                  fontSize={18}
                  fontWeight={600}
                  fontFamily="Montserrat"
                  color="#23282B"
                >
                  2. Browser controls
                </Typography>

                <Typography
                  fontSize={{ xs: 14, sm: 16 }}
                  fontWeight={400}
                  fontFamily="Montserrat"
                  color="#23282B"
                >
                  Most browsers allow you to block or delete cookies and to
                  control cookies on a site-by-site basis. If you disable
                  cookies, some site features may not function properly.
                </Typography>

                <Typography
                  fontSize={18}
                  fontWeight={600}
                  fontFamily="Montserrat"
                  color="#23282B"
                >
                  3. Device-level advertising settings
                </Typography>

                <Typography
                  fontSize={{ xs: 14, sm: 16 }}
                  fontWeight={400}
                  fontFamily="Montserrat"
                  color="#23282B"
                >
                  Mobile operating systems often provide controls to limit ad
                  tracking (these are device-level controls and may not affect
                  all browser cookies).
                </Typography>
              </Box>

              <Typography
                fontSize={18}
                fontWeight={700}
                fontFamily="Montserrat"
                color="#23282B"
              >
                12.4 Targeted advertising opt-out (where applicable)
              </Typography>

              <Typography
                fontSize={{ xs: 14, sm: 16 }}
                fontWeight={400}
                fontFamily="Montserrat"
                color="#23282B"
              >
                Where applicable under U.S. state privacy laws, you may opt out
                of targeted advertising / “sharing” by:
              </Typography>

              <Box mb={1}>
                <Typography
                  fontSize={{ xs: 14, sm: 16 }}
                  fontWeight={400}
                  fontFamily="Montserrat"
                  color="#23282B"
                  sx={{
                    "&::before": { content: '"• "' },
                  }}
                >
                  rejecting Marketing cookies via our cookie settings (where
                  available);
                </Typography>
                <Typography
                  fontSize={{ xs: 14, sm: 16 }}
                  fontWeight={400}
                  fontFamily="Montserrat"
                  color="#23282B"
                  sx={{
                    "&::before": { content: '"• "' },
                  }}
                >
                  and/or using browser/device privacy controls;
                </Typography>
                <Typography
                  fontSize={{ xs: 14, sm: 16 }}
                  fontWeight={400}
                  fontFamily="Montserrat"
                  color="#23282B"
                  sx={{
                    "&::before": { content: '"• "' },
                  }}
                >
                  and/or contacting us to apply an opt-out where feasible (for
                  example, at an account or customer-record level).
                </Typography>
              </Box>

              <Typography
                fontSize={18}
                fontWeight={700}
                fontFamily="Montserrat"
                color="#23282B"
              >
                Global Privacy Control (GPC)
              </Typography>

              <Typography
                fontSize={{ xs: 14, sm: 16 }}
                fontWeight={400}
                fontFamily="Montserrat"
                color="#23282B"
              >
                Where required by applicable U.S. state law and where our
                systems can detect it, we will treat a valid Global Privacy
                Control signal as a request to opt out of targeted
                advertising/sharing for that browser/device.
              </Typography>

              <Typography
                fontSize={18}
                fontWeight={700}
                fontFamily="Montserrat"
                color="#23282B"
              >
                12.5 Do Not Track
              </Typography>

              <Typography
                fontSize={{ xs: 14, sm: 16 }}
                fontWeight={400}
                fontFamily="Montserrat"
                color="#23282B"
              >
                Some browsers offer a “Do Not Track” (DNT) signal. There is no
                uniform industry standard for responding to DNT signals. We do
                not respond to DNT signals as a substitute for the controls
                described above.
              </Typography>

              <Typography
                fontSize={18}
                fontWeight={700}
                fontFamily="Montserrat"
                color="#23282B"
              >
                12.6 Cookie retention (high-level)
              </Typography>

              <Typography
                fontSize={{ xs: 14, sm: 16 }}
                fontWeight={400}
                fontFamily="Montserrat"
                color="#23282B"
              >
                Cookies and similar technologies may last for different periods:
              </Typography>

              <Box mb={1}>
                <Typography
                  fontSize={{ xs: 14, sm: 16 }}
                  fontWeight={400}
                  fontFamily="Montserrat"
                  color="#23282B"
                  sx={{
                    "&::before": { content: '"• "' },
                  }}
                >
                  Session technologies expire when you close your browser.
                </Typography>
                <Typography
                  fontSize={{ xs: 14, sm: 16 }}
                  fontWeight={400}
                  fontFamily="Montserrat"
                  color="#23282B"
                  sx={{
                    "&::before": { content: '"• "' },
                  }}
                >
                  Persistent technologies remain until they expire or you delete
                  them.
                </Typography>
              </Box>

              <Typography
                fontSize={{ xs: 14, sm: 16 }}
                fontWeight={400}
                fontFamily="Montserrat"
                color="#23282B"
              >
                Where we use analytics/marketing technologies, retention periods
                are typically set by the relevant tools and can be configured.
                You can also delete cookies through your browser settings at any
                time.
              </Typography>

              <Typography
                fontSize={18}
                fontWeight={700}
                fontFamily="Montserrat"
                color="#23282B"
              >
                Global Privacy Control (GPC)
              </Typography>

              <Typography
                fontSize={{ xs: 14, sm: 16 }}
                fontWeight={400}
                fontFamily="Montserrat"
                color="#23282B"
              >
                Where required by applicable U.S. state law and where our
                systems can detect it, we will treat a valid Global Privacy
                Control signal as a request to opt out of targeted
                advertising/sharing for that browser/device.
              </Typography>
            </>
            <>
              <Typography
                fontSize={{ xs: 18, sm: 24 }}
                fontWeight={700}
                fontFamily="Montserrat"
                color="#23282B"
              >
                13. Children
              </Typography>

              <Typography
                fontSize={{ xs: 14, sm: 16 }}
                fontWeight={400}
                fontFamily="Montserrat"
                color="#23282B"
              >
                Our Services are not directed to, and we do not knowingly
                collect personal information from, children under the age of 16
                or minors (as defined by applicable national laws). If you are a
                minor, please do not attempt to fill out our forms or send any
                personal information about yourself to us. If a minor has
                provided us with personal information without parental or
                guardian consent, the parent or guardian should contact us (See
                Section 11) immediately to remove the relevant personal
                information and unsubscribe the minor.
              </Typography>

              <Typography
                fontSize={{ xs: 14, sm: 16 }}
                fontWeight={400}
                fontFamily="Montserrat"
                color="#23282B"
              >
                If we become aware that a minor has provided us with personal
                information, we will take steps to promptly delete such
                information from our files. As described further in our Terms
                and Conditions, please do not upload photographs showing other
                people, in particular if they are minors.
              </Typography>

              <Typography
                fontSize={{ xs: 18, sm: 24 }}
                fontWeight={700}
                fontFamily="Montserrat"
                color="#23282B"
              >
                14. International data transfers
              </Typography>

              <Typography
                fontSize={{ xs: 14, sm: 16 }}
                fontWeight={400}
                fontFamily="Montserrat"
                color="#23282B"
              >
                Because we operate online and use global service providers, your
                personal information may be processed in countries outside your
                home country (including the United States and other locations
                where vendors operate).
              </Typography>

              <Typography
                fontSize={{ xs: 14, sm: 16 }}
                fontWeight={400}
                fontFamily="Montserrat"
                color="#23282B"
              >
                Where required, we use appropriate safeguards designed to
                protect cross-border transfers, which may include:
              </Typography>

              <Box mb={1}>
                <Typography
                  fontSize={{ xs: 14, sm: 16 }}
                  fontWeight={400}
                  fontFamily="Montserrat"
                  color="#23282B"
                  sx={{
                    "&::before": { content: '"• "' },
                  }}
                >
                  contractual protections (such as standard contractual clauses
                  and UK transfer addenda or equivalent instruments); and
                </Typography>
                <Typography
                  fontSize={{ xs: 14, sm: 16 }}
                  fontWeight={400}
                  fontFamily="Montserrat"
                  color="#23282B"
                  sx={{
                    "&::before": { content: '"• "' },
                  }}
                >
                  {" "}
                  vendor due diligence and security controls.
                </Typography>
              </Box>

              <Typography
                fontSize={{ xs: 14, sm: 16 }}
                fontWeight={400}
                fontFamily="Montserrat"
                color="#23282B"
              >
                You can contact us to request additional information about the
                safeguards relevant to your data.
              </Typography>
            </>
          </>
          <>
            <Typography
              fontSize={{ xs: 18, sm: 24 }}
              fontWeight={700}
              fontFamily="Montserrat"
              color="#23282B"
            >
              15. Security
            </Typography>

            <Typography
              fontSize={{ xs: 14, sm: 16 }}
              fontWeight={400}
              fontFamily="Montserrat"
              color="#23282B"
            >
              We maintain reasonable administrative, technical, and
              organisational safeguards designed to protect personal
              information, including access controls and security monitoring. No
              system is perfectly secure; we cannot guarantee absolute security.
            </Typography>

            <Typography
              fontSize={{ xs: 18, sm: 24 }}
              fontWeight={700}
              fontFamily="Montserrat"
              color="#23282B"
            >
              16. U.S. State Privacy Notice (supplement)
            </Typography>

            <Typography
              fontSize={{ xs: 14, sm: 16 }}
              fontWeight={400}
              fontFamily="Montserrat"
              color="#23282B"
            >
              This section supplements the Policy for residents of U.S. states
              with privacy laws (e.g., California, Colorado, Connecticut, Utah,
              Virginia, and others).
            </Typography>

            <Typography
              fontSize={{ xs: 14, sm: 16 }}
              fontWeight={600}
              fontFamily="Montserrat"
              color="#23282B"
            >
              Categories of personal information collected
            </Typography>

            <Typography
              fontSize={{ xs: 14, sm: 16 }}
              fontWeight={400}
              fontFamily="Montserrat"
              color="#23282B"
            >
              We may collect:
            </Typography>

            <Box ml={1}>
              <Typography
                fontSize={{ xs: 14, sm: 16 }}
                fontWeight={400}
                fontFamily="Montserrat"
                color="#23282B"
                sx={{
                  "&::before": { content: '"• "' },
                }}
              >
                identifiers (name, email, phone, IP address);
              </Typography>

              <Typography
                fontSize={{ xs: 14, sm: 16 }}
                fontWeight={400}
                fontFamily="Montserrat"
                color="#23282B"
                sx={{
                  "&::before": { content: '"• "' },
                }}
              >
                commercial information (purchases, returns);
              </Typography>

              <Typography
                fontSize={{ xs: 14, sm: 16 }}
                fontWeight={400}
                fontFamily="Montserrat"
                color="#23282B"
                sx={{
                  "&::before": { content: '"• "' },
                }}
              >
                internet/electronic activity (site interactions);
              </Typography>

              <Typography
                fontSize={{ xs: 14, sm: 16 }}
                fontWeight={400}
                fontFamily="Montserrat"
                color="#23282B"
                sx={{
                  "&::before": { content: '"• "' },
                }}
              >
                approximate geolocation (from IP);
              </Typography>

              <Typography
                fontSize={{ xs: 14, sm: 16 }}
                fontWeight={400}
                fontFamily="Montserrat"
                color="#23282B"
                sx={{
                  "&::before": { content: '"• "' },
                }}
              >
                inferences (preferences, likely interests based on
                interactions);
              </Typography>

              <Typography
                fontSize={{ xs: 14, sm: 16 }}
                fontWeight={400}
                fontFamily="Montserrat"
                color="#23282B"
                sx={{
                  "&::before": { content: '"• "' },
                }}
              >
                sensitive personal information only in limited cases (e.g.,
                certain account credentials or payment security data) and
                typically not beyond what is necessary to complete transactions
                and prevent fraud.
              </Typography>
            </Box>
          </>
          <>
            <Typography
              fontSize={{ xs: 14, sm: 16 }}
              fontWeight={600}
              fontFamily="Montserrat"
              color="#23282B"
            >
              Purposes
            </Typography>
            <Typography
              fontSize={{ xs: 14, sm: 16 }}
              fontWeight={400}
              fontFamily="Montserrat"
              color="#23282B"
            >
              See Section 5.
            </Typography>
            <Typography
              fontSize={{ xs: 14, sm: 16 }}
              fontWeight={600}
              fontFamily="Montserrat"
              color="#23282B"
            >
              Categories of recipients
            </Typography>
            <Typography
              fontSize={{ xs: 14, sm: 16 }}
              fontWeight={400}
              fontFamily="Montserrat"
              color="#23282B"
            >
              See Section 9.
            </Typography>
            <Typography
              fontSize={{ xs: 14, sm: 16 }}
              fontWeight={600}
              fontFamily="Montserrat"
              color="#23282B"
            >
              “Sale” / “Sharing” / targeted advertising
            </Typography>
            <Typography
              fontSize={{ xs: 14, sm: 16 }}
              fontWeight={400}
              fontFamily="Montserrat"
              color="#23282B"
            >
              We do not sell personal information for money. We may share
              certain information with advertising partners for targeted
              advertising (subject to your choices), which may be treated as
              “sharing” under some laws.
            </Typography>
            <Typography
              fontSize={{ xs: 14, sm: 16 }}
              fontWeight={600}
              fontFamily="Montserrat"
              color="#23282B"
            >
              Your U.S. rights
            </Typography>
            <Typography
              fontSize={{ xs: 14, sm: 16 }}
              fontWeight={400}
              fontFamily="Montserrat"
              color="#23282B"
            >
              Where applicable: access/know, delete, correct, portability,
              opt-out of targeted advertising/sharing, non-discrimination, and
              appeal (see Section 11E).
            </Typography>
            <Typography
              fontSize={{ xs: 18, sm: 24 }}
              fontWeight={700}
              fontFamily="Montserrat"
              color="#23282B"
            >
              17. Changes to this Policy
            </Typography>
            <Typography
              fontSize={{ xs: 14, sm: 16 }}
              fontWeight={400}
              fontFamily="Montserrat"
              color="#23282B"
            >
              We may update this Policy from time to time. We will post the
              updated version on pendowears.com and update the “Last updated”
              date. If changes materially affect how we process personal
              information, we will provide additional notice where required.
            </Typography>
            <Typography
              fontSize={{ xs: 18, sm: 24 }}
              fontWeight={700}
              fontFamily="Montserrat"
              color="#23282B"
            >
              Contact (privacy requests, questions, complaints)
            </Typography>
            <Typography
              fontSize={{ xs: 14, sm: 16 }}
              fontWeight={400}
              fontFamily="Montserrat"
              color="#23282B"
            >
              If you have questions or concerns regarding your personal
              information or any information in this Privacy Policy, please
              contact us at our dedicated Privacy Center. Our Data Protection
              Officer (DPO) / Privacy Office can be contacted via the email -
              privacy@pendowears.com
            </Typography>
          </>
        </>
      </Box>
    </Box>
  );
};

export default PrivacyPolicy;
