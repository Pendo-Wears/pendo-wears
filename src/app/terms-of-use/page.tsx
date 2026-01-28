import { Box, Typography } from "@mui/material";
import React from "react";

export const LinkTo = ({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) => {
  return (
    <a
      href={to}
      target={to.includes("http") ? "_blank" : undefined}
      style={{ textDecoration: "none" }}
    >
      <strong style={{ color: "#D0950F" }}> {children} </strong>
    </a>
  );
};
const TermsOfUse = () => {
  return (
    <Box px={{ xs: "16px", sm: "20px", md: "50px" }}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }} pb={{xs: '40px', sm: '60px'}}>
        <>
          {/* Main title */}
          <Typography
            color={"#23282B"}
            fontSize={{ xs: 24, sm: 32, md: 45 }}
            fontWeight={700}
            fontFamily={"Montserrat"}
            textAlign={"center"}
          >
            Pendo Terms of Use Policy
          </Typography>

          {/* Last updated */}
          <Typography
            fontSize={{ xs: 14, sm: 16 }}
            color={"#23282B"}
            fontWeight={400}
            fontFamily={"Montserrat"}
          >
            <strong> Last updated: 17 January 2026</strong>
          </Typography>

          {/* Intro */}
          <Typography
            fontSize={{ xs: 14, sm: 16 }}
            color={"#23282B"}
            fontWeight={400}
            fontFamily={"Montserrat"}
          >
            These Terms govern your access to and use of the Site, including
            browsing, purchasing products, creating an account (if available),
            participating in promotions, submitting content, and receiving
            communications. By accessing or using the Site, you agree to be
            bound by these Terms and our Privacy Policy (together, the
            “Agreement”). If you do not agree, do not use the Site.
          </Typography>

          <Typography
            fontSize={{ xs: 14, sm: 16 }}
            color={"#23282B"}
            fontWeight={400}
            fontFamily={"Montserrat"}
          >
            We may update these Terms by posting a revised version on the Site.
            Changes are effective when posted. Your continued use after changes
            are posted constitutes acceptance.
          </Typography>

          {/* Section 1 */}
          <Typography
            fontSize={{ xs: 18, sm: 24 }}
            color={"#23282B"}
            fontWeight={600}
            fontFamily={"Montserrat"}
          >
            1. Definitions
          </Typography>

          <Typography
            fontSize={{ xs: 14, sm: 16 }}
            color={"#23282B"}
            fontWeight={400}
            fontFamily={"Montserrat"}
            sx={{
              "&::before": {
                content: '"• "',
              },
            }}
          >
            <strong>“Pendo,” “we,” “us,” “our”</strong> means Pendo Heritage
            Wears Ltd.
          </Typography>

          <Typography
            fontSize={{ xs: 14, sm: 16 }}
            color={"#23282B"}
            fontWeight={400}
            fontFamily={"Montserrat"}
            sx={{
              "&::before": {
                content: '"• "',
              },
            }}
          >
            <strong>“You,” “your”</strong> means the person accessing or using
            the Site.
          </Typography>

          <Typography
            fontSize={{ xs: 14, sm: 16 }}
            color={"#23282B"}
            fontWeight={400}
            fontFamily={"Montserrat"}
            sx={{
              "&::before": {
                content: '"• "',
              },
            }}
          >
            <strong>“Content”</strong> means all materials on the Site
            (including product images, designs, graphics, text, video, software,
            and site layout).
          </Typography>

          <Typography
            fontSize={{ xs: 14, sm: 16 }}
            color={"#23282B"}
            fontWeight={400}
            fontFamily={"Montserrat"}
            sx={{
              "&::before": {
                content: '"• "',
              },
            }}
          >
            <strong>“User Content”</strong> means content you submit (e.g.,
            reviews, photos, comments, questions, messages).
          </Typography>

          <Typography
            fontSize={{ xs: 14, sm: 16 }}
            color={"#23282B"}
            fontWeight={400}
            fontFamily={"Montserrat"}
            sx={{
              "&::before": {
                content: '"• "',
              },
            }}
          >
            <strong>“Products”</strong> means goods offered for sale on the
            Site, including print-on-demand (“<strong>POD</strong>”) items.
          </Typography>

          <Typography
            fontSize={{ xs: 14, sm: 16 }}
            color={"#23282B"}
            fontWeight={400}
            fontFamily={"Montserrat"}
            sx={{
              "&::before": {
                content: '"• "',
              },
            }}
          >
            <strong>“Policies”</strong> means the Privacy Policy, Cookie
            Settings, Returns/Refund Policy (if posted), and any other policies
            referenced on the Site.
          </Typography>

          <Typography
            fontSize={{ xs: 14, sm: 16 }}
            color={"#23282B"}
            fontWeight={400}
            fontFamily={"Montserrat"}
            sx={{
              "&::before": {
                content: '"• "',
              },
            }}
          >
            <strong>“SMS Program”</strong> means any marketing text-message
            program offered by Pendo.
          </Typography>

          {/* Section 2 */}
          <Typography
            fontSize={{ xs: 18, sm: 24 }}
            color={"#23282B"}
            fontWeight={600}
            fontFamily={"Montserrat"}
          >
            2. Scope and eligibility
          </Typography>

          <Typography
            fontSize={{ xs: 14, sm: 16 }}
            color={"#23282B"}
            fontWeight={400}
            fontFamily={"Montserrat"}
          >
            You must be able to form a legally binding contract to use the Site.
            If you are under the age of majority where you live, you may use the
            Site only with the involvement of a parent or legal guardian, and
            that adult is responsible for your activity on the Site.
          </Typography>

          <Typography
            fontSize={{ xs: 14, sm: 16 }}
            color={"#23282B"}
            fontWeight={400}
            fontFamily={"Montserrat"}
          >
            The Site is intended for customers in the{" "}
            <strong>
              United States, United Kingdom, Canada, and Australia
            </strong>
            . Your rights and our obligations may vary by location. Nothing in
            these Terms limits mandatory consumer rights.
          </Typography>

          {/* Section 3 */}
          <Typography
            fontSize={{ xs: 18, sm: 24 }}
            color={"#23282B"}
            fontWeight={600}
            fontFamily={"Montserrat"}
          >
            3. Privacy and cookies
          </Typography>

          <Typography
            fontSize={{ xs: 14, sm: 16 }}
            color={"#23282B"}
            fontWeight={400}
            fontFamily={"Montserrat"}
          >
            Your use of the Site is subject to our{" "}
            <strong>Privacy Policy</strong> and <strong>Cookie Settings</strong>
            , which explain how we collect, use, and share personal information,
            including through cookies and similar technologies. The Privacy
            Policy is incorporated into these Terms by reference.
          </Typography>

          {/* Section 4 */}
          <Typography
            fontSize={{ xs: 18, sm: 24 }}
            color={"#23282B"}
            fontWeight={600}
            fontFamily={"Montserrat"}
          >
            4. Notices and contact
          </Typography>

          <Typography
            fontSize={{ xs: 14, sm: 16 }}
            color={"#23282B"}
            fontWeight={400}
            fontFamily={"Montserrat"}
          >
            For questions, requests, or notices under these Terms:
          </Typography>

          <Box>
            <Typography
              fontSize={{ xs: 14, sm: 16 }}
              color={"#23282B"}
              fontWeight={400}
              fontFamily={"Montserrat"}
              sx={{
                "&::before": {
                  content: '"• "',
                },
              }}
            >
              <strong>General support / orders:</strong>{" "}
              <LinkTo to="mailto:support@pendowears.com">
                support@pendowears.com
              </LinkTo>
            </Typography>

            <Typography
              fontSize={{ xs: 14, sm: 16 }}
              color={"#23282B"}
              fontWeight={400}
              fontFamily={"Montserrat"}
              sx={{
                "&::before": {
                  content: '"• "',
                },
              }}
            >
              <strong>Privacy requests:</strong>{" "}
              <LinkTo to="mailto:privacy@pendowears.com">
                privacy@pendowears.com
              </LinkTo>
              (Subject: “Privacy Request”)
            </Typography>

            <Typography
              fontSize={{ xs: 14, sm: 16 }}
              color={"#23282B"}
              fontWeight={400}
              fontFamily={"Montserrat"}
              sx={{
                "&::before": {
                  content: '"• "',
                },
              }}
            >
              <strong>
                Legal notices (including arbitration opt-out and IP notices):
              </strong>{" "}
              <LinkTo to="mailto:legal@pendowears.com">
                legal@pendowears.com
              </LinkTo>{" "}
              (Subject: “Legal Notice”)
            </Typography>
          </Box>

          <Typography
            fontSize={{ xs: 14, sm: 16 }}
            color={"#23282B"}
            fontWeight={400}
            fontFamily={"Montserrat"}
          >
            You are responsible for keeping your contact details current. We may
            send notices electronically as described in Section 16.
          </Typography>

          {/* Section 5 */}
          <Typography
            fontSize={{ xs: 18, sm: 24 }}
            color={"#23282B"}
            fontWeight={600}
            fontFamily={"Montserrat"}
          >
            5. Site access; accounts; security
          </Typography>

          <Box>
            <Typography
              fontSize={{ xs: 14, sm: 16 }}
              color={"#23282B"}
              fontWeight={400}
              fontFamily={"Montserrat"}
            >
              <strong>Access.</strong> We may modify, suspend, or discontinue
              the Site (or any feature) at any time.
            </Typography>

            <Typography
              fontSize={{ xs: 14, sm: 16 }}
              color={"#23282B"}
              fontWeight={400}
              fontFamily={"Montserrat"}
            >
              <strong>Accounts.</strong> If the Site allows account creation,
              you agree to provide accurate information and keep it updated.
            </Typography>

            <Typography
              fontSize={{ xs: 14, sm: 16 }}
              color={"#23282B"}
              fontWeight={400}
              fontFamily={"Montserrat"}
            >
              <strong>Security.</strong> You are responsible for maintaining the
              confidentiality of your login credentials and for activity under
              your account. Notify us promptly if you believe your account has
              been compromised.
            </Typography>
          </Box>
        </>
        <>
          {/* Section 6 */}
          <Typography
            fontSize={{ xs: 18, sm: 24 }}
            color={"#23282B"}
            fontWeight={600}
            fontFamily={"Montserrat"}
          >
            6. Ownership rights; permitted use
          </Typography>

          <Typography
            fontSize={{ xs: 14, sm: 16 }}
            color={"#23282B"}
            fontWeight={400}
            fontFamily={"Montserrat"}
          >
            All Content is owned by or licensed to Pendo and is protected by
            intellectual property laws.
          </Typography>

          <Box>
            <Typography
              fontSize={{ xs: 14, sm: 16 }}
              color={"#23282B"}
              fontWeight={400}
              fontFamily={"Montserrat"}
            >
              <strong>Permitted use.</strong> You may access and view the Site
              for your personal, non-commercial use.
            </Typography>

            <Typography
              fontSize={{ xs: 14, sm: 16 }}
              color={"#23282B"}
              fontWeight={400}
              fontFamily={"Montserrat"}
            >
              <strong>Prohibited use.</strong> You may not copy, reproduce,
              distribute, modify, create derivative works, scrape, frame,
              mirror, reverse engineer, or exploit any part of the Site or
              Content without prior written consent, except where permitted by
              law.
            </Typography>
          </Box>

          {/* Section 7 */}
          <Typography
            fontSize={{ xs: 18, sm: 24 }}
            color={"#23282B"}
            fontWeight={600}
            fontFamily={"Montserrat"}
          >
            7. Prohibited conduct
          </Typography>

          <Typography
            fontSize={{ xs: 14, sm: 16 }}
            color={"#23282B"}
            fontWeight={400}
            fontFamily={"Montserrat"}
          >
            You agree not to:
          </Typography>

          <Box>
            <Typography
              fontSize={{ xs: 14, sm: 16 }}
              color={"#23282B"}
              fontWeight={400}
              fontFamily={"Montserrat"}
              sx={{
                "&::before": {
                  content: '"• "',
                },
              }}
            >
              use the Site for unlawful, fraudulent, abusive, or harmful
              purposes;
            </Typography>
            <Typography
              fontSize={{ xs: 14, sm: 16 }}
              color={"#23282B"}
              fontWeight={400}
              fontFamily={"Montserrat"}
              sx={{
                "&::before": {
                  content: '"• "',
                },
              }}
            >
              interfere with Site operations or security (including introducing
              malware or using bots);
            </Typography>
            <Typography
              fontSize={{ xs: 14, sm: 16 }}
              color={"#23282B"}
              fontWeight={400}
              fontFamily={"Montserrat"}
              sx={{
                "&::before": {
                  content: '"• "',
                },
              }}
            >
              attempt unauthorized access to systems, accounts, or data;
            </Typography>
            <Typography
              fontSize={{ xs: 14, sm: 16 }}
              color={"#23282B"}
              fontWeight={400}
              fontFamily={"Montserrat"}
              sx={{
                "&::before": {
                  content: '"• "',
                },
              }}
            >
              harvest data from the Site without permission;
            </Typography>
            <Typography
              fontSize={{ xs: 14, sm: 16 }}
              color={"#23282B"}
              fontWeight={400}
              fontFamily={"Montserrat"}
              sx={{
                "&::before": {
                  content: '"• "',
                },
              }}
            >
              impersonate any person or misrepresent affiliation;
            </Typography>
            <Typography
              fontSize={{ xs: 14, sm: 16 }}
              color={"#23282B"}
              fontWeight={400}
              fontFamily={"Montserrat"}
              sx={{
                "&::before": {
                  content: '"• "',
                },
              }}
            >
              submit content that is defamatory, infringing, obscene,
              threatening, or otherwise unlawful;
            </Typography>
            <Typography
              fontSize={{ xs: 14, sm: 16 }}
              color={"#23282B"}
              fontWeight={400}
              fontFamily={"Montserrat"}
              sx={{
                "&::before": {
                  content: '"• "',
                },
              }}
            >
              violate the rights of others, including privacy and intellectual
              property rights.
            </Typography>
          </Box>

          <Typography
            fontSize={{ xs: 14, sm: 16 }}
            color={"#23282B"}
            fontWeight={400}
            fontFamily={"Montserrat"}
          >
            We may investigate and take action (including
            suspension/termination) where we believe you violated these Terms.
          </Typography>

          {/* Section 8 */}
          <Typography
            fontSize={{ xs: 18, sm: 24 }}
            color={"#23282B"}
            fontWeight={600}
            fontFamily={"Montserrat"}
          >
            8. Product information; availability; authenticity
          </Typography>

          <Typography
            fontSize={{ xs: 14, sm: 16 }}
            color={"#23282B"}
            fontWeight={400}
            fontFamily={"Montserrat"}
          >
            We strive to display Products accurately. However:
          </Typography>

          <Box>
            <Typography
              fontSize={{ xs: 14, sm: 16 }}
              color={"#23282B"}
              fontWeight={400}
              fontFamily={"Montserrat"}
              sx={{
                "&::before": {
                  content: '"• "',
                },
              }}
            >
              Colors and appearance may vary by device and lighting.
            </Typography>

            <Typography
              fontSize={{ xs: 14, sm: 16 }}
              color={"#23282B"}
              fontWeight={400}
              fontFamily={"Montserrat"}
              sx={{
                "&::before": {
                  content: '"• "',
                },
              }}
            >
              Product measurements and fit guidance are estimates.
            </Typography>

            <Typography
              fontSize={{ xs: 14, sm: 16 }}
              color={"#23282B"}
              fontWeight={400}
              fontFamily={"Montserrat"}
              sx={{
                "&::before": {
                  content: '"• "',
                },
              }}
            >
              Availability is not guaranteed; Products may be limited,
              discontinued, or out of stock without notice.
            </Typography>
            <Typography
              fontSize={{ xs: 14, sm: 16 }}
              color={"#23282B"}
              fontWeight={400}
              fontFamily={"Montserrat"}
              sx={{
                "&::before": {
                  content: '"• "',
                },
              }}
            >
              We may limit quantities per order or customer and may refuse
              orders that appear to be placed for resale or distribution.
            </Typography>
          </Box>

          {/* Section 9 */}
          <Typography
            fontSize={{ xs: 18, sm: 24 }}
            color={"#23282B"}
            fontWeight={600}
            fontFamily={"Montserrat"}
          >
            9. Promotions and discount codes
          </Typography>

          <Typography
            fontSize={{ xs: 14, sm: 16 }}
            color={"#23282B"}
            fontWeight={400}
            fontFamily={"Montserrat"}
          >
            Promotions and discount codes may be subject to additional terms
            (eligibility, timing, minimum spend, exclusions, and one-time use).
            We may modify or discontinue promotions at any time where permitted
            by law.
          </Typography>

          {/* Section 10 */}
          <Typography
            fontSize={{ xs: 18, sm: 24 }}
            color={"#23282B"}
            fontWeight={600}
            fontFamily={"Montserrat"}
          >
            10. User Content; reviews; endorsements
          </Typography>

          {/* 10.1 */}
          <Typography
            fontSize={{ xs: 14, sm: 16 }}
            color={"#23282B"}
            fontWeight={600}
            fontFamily={"Montserrat"}
          >
            10.1 License to Pendo
          </Typography>

          <Typography
            fontSize={{ xs: 14, sm: 16 }}
            color={"#23282B"}
            fontWeight={400}
            fontFamily={"Montserrat"}
          >
            If you submit User Content, you grant Pendo a worldwide, perpetual,
            irrevocable, transferable, sublicensable, royalty-free license to
            use, reproduce, modify, publish, translate, create derivative works
            from, distribute, publicly display, and otherwise exploit that User
            Content for any lawful purpose, including marketing and promotion,
            in any media now known or later developed.
          </Typography>

          <Typography
            fontSize={{ xs: 14, sm: 16 }}
            color={"#23282B"}
            fontWeight={400}
            fontFamily={"Montserrat"}
          >
            We may edit User Content for clarity, length, formatting, or to
            remove personal/sensitive data, provided we do not materially
            distort its meaning.
          </Typography>

          {/* 10.2 */}
          <Typography
            fontSize={{ xs: 14, sm: 16 }}
            color={"#23282B"}
            fontWeight={600}
            fontFamily={"Montserrat"}
          >
            10.2 Your promises
          </Typography>

          <Typography
            fontSize={{ xs: 14, sm: 16 }}
            color={"#23282B"}
            fontWeight={400}
            fontFamily={"Montserrat"}
          >
            You represent and warrant that:
          </Typography>

          <Box>
            <Typography
              fontSize={{ xs: 14, sm: 16 }}
              color={"#23282B"}
              fontWeight={400}
              fontFamily={"Montserrat"}
              sx={{
                "&::before": {
                  content: '"• "',
                },
              }}
            >
              You represent and warrant that you own or control the rights to
              your User Content;
            </Typography>
            <Typography
              fontSize={{ xs: 14, sm: 16 }}
              color={"#23282B"}
              fontWeight={400}
              fontFamily={"Montserrat"}
              sx={{
                "&::before": {
                  content: '"• "',
                },
              }}
            >
              your User Content reflects your honest opinion/experience (where
              it is a review);
            </Typography>
            <Typography
              fontSize={{ xs: 14, sm: 16 }}
              color={"#23282B"}
              fontWeight={400}
              fontFamily={"Montserrat"}
              sx={{
                "&::before": {
                  content: '"• "',
                },
              }}
            >
              your User Content does not violate any law or third-party rights.
            </Typography>
          </Box>

          {/* 10.3 */}
          <Typography
            fontSize={{ xs: 14, sm: 16 }}
            color={"#23282B"}
            fontWeight={600}
            fontFamily={"Montserrat"}
          >
            10.3 Incentives and required disclosures (FTC-style)
          </Typography>

          <Typography
            fontSize={{ xs: 14, sm: 16 }}
            color={"#23282B"}
            fontWeight={400}
            fontFamily={"Montserrat"}
          >
            If you received any incentive (discount, free product, payment, or
            other benefit) in exchange for your User Content, you agree to
            clearly disclose that relationship as required by law and platform
            rules. We may remove content that appears misleading or
            non-compliant.
          </Typography>

          {/* 10.4 */}
          <Typography
            fontSize={{ xs: 14, sm: 16 }}
            color={"#23282B"}
            fontWeight={600}
            fontFamily={"Montserrat"}
          >
            10.4 No confidentiality
          </Typography>

          <Typography
            fontSize={{ xs: 14, sm: 16 }}
            color={"#23282B"}
            fontWeight={400}
            fontFamily={"Montserrat"}
          >
            User Content is not submitted in confidence. Do not submit ideas or
            materials you expect to be treated as confidential.
          </Typography>
        </>
        <>
          <Typography
            fontSize={{ xs: 14, sm: 16 }}
            color="#23282B"
            fontWeight={600}
            fontFamily="Montserrat"
          >
            11. Third-party links and services
          </Typography>

          <Typography
            fontSize={{ xs: 14, sm: 16 }}
            color="#23282B"
            fontWeight={400}
            fontFamily="Montserrat"
          >
            The Site may link to third-party websites or services (e.g., social
            networks, payment processors, carriers). We do not control and are
            not responsible for third-party services, content, or privacy
            practices. Your use of third-party services is at your own risk and
            subject to their terms.
          </Typography>

          <Typography
            fontSize={{ xs: 18, sm: 24 }}
            color="#23282B"
            fontWeight={600}
            fontFamily="Montserrat"
          >
            12. Disclaimer of warranties
          </Typography>

          <Typography
            fontSize={{ xs: 14, sm: 16 }}
            color="#23282B"
            fontWeight={400}
            fontFamily="Montserrat"
          >
            To the fullest extent permitted by law, the Site and Content are
            provided “as is” and “as available.” We disclaim all warranties,
            express or implied, including implied warranties of merchantability,
            fitness for a particular purpose, non-infringement, and that the
            Site will be uninterrupted, error-free, or free of harmful
            components.
          </Typography>

          <Typography
            fontSize={{ xs: 14, sm: 16 }}
            color="#23282B"
            fontWeight={400}
            fontFamily="Montserrat"
          >
            To the fullest extent permitted by law, the Site and Content are
            provided “as is” and “as available.” We disclaim all warranties,
            express or implied, including implied warranties of merchantability,
            fitness for a particular purpose, non-infringement, and that the
            Site will be uninterrupted, error-free, or free of harmful
            components.
          </Typography>

          <Typography
            fontSize={{ xs: 18, sm: 24 }}
            color="#23282B"
            fontWeight={600}
            fontFamily="Montserrat"
          >
            13. Limitation of liability
          </Typography>

          <Typography
            fontSize={{ xs: 14, sm: 16 }}
            color="#23282B"
            fontWeight={400}
            fontFamily="Montserrat"
          >
            To the fullest extent permitted by law:
          </Typography>
          <Box>
            <Typography
              fontSize={{ xs: 14, sm: 16 }}
              color="#23282B"
              fontWeight={400}
              fontFamily="Montserrat"
              sx={{
                "&::before": {
                  content: '"• "',
                },
              }}
            >
              Pendo and its affiliates, officers, directors, employees, agents,
              and suppliers will not be liable for any indirect, incidental,
              special, consequential, exemplary, or punitive damages arising
              from or related to your use of the Site or purchase/use of
              Products.
            </Typography>

            <Typography
              fontSize={{ xs: 14, sm: 16 }}
              color="#23282B"
              fontWeight={400}
              fontFamily="Montserrat"
              sx={{
                "&::before": {
                  content: '"• "',
                },
              }}
            >
              Pendo’s total liability for any claim arising from or relating to
              the Site or these Terms will not exceed the greater of: (a) the
              amount you paid to Pendo for the Product(s) giving rise to the
              claim, or (b) USD $100.
            </Typography>
          </Box>

          <Typography
            fontSize={{ xs: 14, sm: 16 }}
            color="#23282B"
            fontWeight={400}
            fontFamily="Montserrat"
          >
            <strong>Exceptions</strong>. This limitation does not apply to
            liability that cannot be limited by law (see Section 14).
          </Typography>

          <Typography
            fontSize={{ xs: 18, sm: 24 }}
            color="#23282B"
            fontWeight={600}
            fontFamily="Montserrat"
          >
            14. Mandatory consumer rights
          </Typography>

          <Typography
            fontSize={{ xs: 14, sm: 16 }}
            color="#23282B"
            fontWeight={400}
            fontFamily="Montserrat"
          >
            Nothing in these Terms is intended to exclude or limit your rights
            under mandatory consumer laws, including:
          </Typography>

          <Box>
            <Typography
              fontSize={{ xs: 14, sm: 16 }}
              color="#23282B"
              fontWeight={400}
              fontFamily="Montserrat"
              sx={{
                "&::before": {
                  content: '"• "',
                },
              }}
            >
              United Kingdom: the Consumer Rights Act 2015 and related consumer
              protections. We do not exclude or limit liability for death or
              personal injury caused by negligence, fraud, fraudulent
              misrepresentation, or any other liability that cannot be excluded
              by law.
            </Typography>

            <Typography
              fontSize={{ xs: 14, sm: 16 }}
              color="#23282B"
              fontWeight={400}
              fontFamily="Montserrat"
              sx={{
                "&::before": {
                  content: '"• "',
                },
              }}
            >
              Australia: our goods come with guarantees that cannot be excluded
              under the Australian Consumer Law (ACL). You are entitled to a
              replacement or refund for a major failure and compensation for
              other reasonably foreseeable loss or damage.
            </Typography>

            <Typography
              fontSize={{ xs: 14, sm: 16 }}
              color="#23282B"
              fontWeight={400}
              fontFamily="Montserrat"
              sx={{
                "&::before": {
                  content: '"• "',
                },
              }}
            >
              Canada: you may have non-waivable rights under applicable
              provincial consumer protection statutes.
            </Typography>
          </Box>

          <Typography
            fontSize={{ xs: 14, sm: 16 }}
            color="#23282B"
            fontWeight={400}
            fontFamily="Montserrat"
          >
            Where these laws apply, they prevail over any conflicting provision
            in these Terms to the extent of the conflict.
          </Typography>

          <Typography
            fontSize={{ xs: 18, sm: 24 }}
            color="#23282B"
            fontWeight={600}
            fontFamily="Montserrat"
          >
            15. Electronic communications; records
          </Typography>

          <Typography
            fontSize={{ xs: 14, sm: 16 }}
            color="#23282B"
            fontWeight={400}
            fontFamily="Montserrat"
          >
            You agree that we may provide notices, disclosures, and
            communications electronically, including by email, text (where you
            have opted in), or by posting on the Site. Electronic communications
            satisfy any legal requirement that communications be in writing, to
            the extent permitted by law.
          </Typography>

          <Typography
            fontSize={{ xs: 14, sm: 16 }}
            color="#23282B"
            fontWeight={400}
            fontFamily="Montserrat"
          >
            You agree that records of your interactions with the Site (including
            consent logs and transaction records) may be stored electronically.
          </Typography>
        </>
        <>
          <Typography
            fontSize={{ xs: 18, sm: 24 }}
            color="#23282B"
            fontWeight={600}
            fontFamily="Montserrat"
          >
            16. Suspension; termination; survival
          </Typography>

          <Typography
            fontSize={{ xs: 14, sm: 16 }}
            color="#23282B"
            fontWeight={400}
            fontFamily="Montserrat"
          >
            We may suspend or terminate your access to the Site at any time if
            we believe you have violated these Terms, used the Site unlawfully,
            or posed a security risk.
          </Typography>

          <Typography
            fontSize={{ xs: 14, sm: 16 }}
            color="#23282B"
            fontWeight={400}
            fontFamily="Montserrat"
          >
            Upon termination, your right to use the Site ends immediately.
            Sections relating to ownership/IP, User Content license,
            disclaimers, limitation of liability, indemnity, dispute resolution,
            and any provisions that by their nature should survive will survive
            termination.
          </Typography>

          <Typography
            fontSize={{ xs: 18, sm: 24 }}
            color="#23282B"
            fontWeight={600}
            fontFamily="Montserrat"
          >
            17. Indemnification
          </Typography>

          <Typography
            fontSize={{ xs: 14, sm: 16 }}
            color="#23282B"
            fontWeight={400}
            fontFamily="Montserrat"
          >
            You agree to defend, indemnify, and hold harmless Pendo and its
            affiliates, officers, directors, employees, agents, and suppliers
            from and against claims, liabilities, damages, losses, and expenses
            (including reasonable legal fees) arising out of or relating to: (i)
            your breach of these Terms; (ii) your misuse of the Site; (iii) your
            User Content; or (iv) your violation of any law or third-party
            rights.
          </Typography>

          <Typography
            fontSize={{ xs: 18, sm: 24 }}
            color="#23282B"
            fontWeight={600}
            fontFamily="Montserrat"
          >
            18. Terms of Sale (Online Purchases)
          </Typography>

          <Typography
            fontSize={{ xs: 14, sm: 16 }}
            color="#23282B"
            fontWeight={400}
            fontFamily="Montserrat"
          >
            These <strong>Terms of Sale</strong> apply to purchases made through
            <LinkTo to="https://www.pendowears.com">pendowears.com</LinkTo> and
            supplement the Terms of Use. If there is a conflict, these Terms of
            Sale control for ordering, payment, fulfilment, shipping, returns,
            refunds, duties, and POD-specific policies.
          </Typography>

          <Typography
            fontSize={{ xs: 14, sm: 16 }}
            color="#23282B"
            fontWeight={600}
            fontFamily="Montserrat"
          >
            18.1 Print-on-demand (POD) nature of products
          </Typography>

          <Typography
            fontSize={{ xs: 14, sm: 16 }}
            color="#23282B"
            fontWeight={400}
            fontFamily="Montserrat"
          >
            Many Pendo Products are produced on demand after you place your
            order, often through third-party fulfilment partners. This may
            affect production time, shipping origin, and return eligibility for
            certain items (especially customized or made-to-order goods).
          </Typography>

          <Typography
            fontSize={{ xs: 14, sm: 16 }}
            color="#23282B"
            fontWeight={600}
            fontFamily="Montserrat"
          >
            18.2 Ordering; contract formation
          </Typography>

          <Box>
            <Typography
              fontSize={{ xs: 14, sm: 16 }}
              color="#23282B"
              fontWeight={400}
              fontFamily="Montserrat"
              sx={{
                "&::before": {
                  content: '"• "',
                },
              }}
            >
              Placing an order is an offer to buy.
            </Typography>
            <Typography
              fontSize={{ xs: 14, sm: 16 }}
              color="#23282B"
              fontWeight={400}
              fontFamily="Montserrat"
              sx={{
                "&::before": {
                  content: '"• "',
                },
              }}
            >
              {" "}
              We accept your order when we confirm shipment or otherwise confirm
              acceptance.
            </Typography>
            <Typography
              fontSize={{ xs: 14, sm: 16 }}
              color="#23282B"
              fontWeight={400}
              fontFamily="Montserrat"
              sx={{
                "&::before": {
                  content: '"• "',
                },
              }}
            >
              We may refuse, cancel, or limit orders to the extent permitted by
              law (e.g., suspected fraud, production constraints, pricing
              errors, or misuse of promotions).
            </Typography>
          </Box>

          <Typography
            fontSize={{ xs: 14, sm: 16 }}
            color="#23282B"
            fontWeight={600}
            fontFamily="Montserrat"
          >
            18.3 Product information; colors; sizing
          </Typography>

          <Typography
            fontSize={{ xs: 14, sm: 16 }}
            color="#23282B"
            fontWeight={400}
            fontFamily="Montserrat"
          >
            We aim to present Products accurately, but colors may vary by
            device/lighting and size guides are estimates. Minor variations may
            occur due to POD production methods.
          </Typography>

          <Typography
            fontSize={{ xs: 14, sm: 16 }}
            color="#23282B"
            fontWeight={600}
            fontFamily="Montserrat"
          >
            18.4 Pricing; currency; taxes; errors
          </Typography>

          <Typography
            fontSize={{ xs: 14, sm: 16 }}
            color="#23282B"
            fontWeight={400}
            fontFamily="Montserrat"
          >
            Prices are shown in the currency displayed on the Site/checkout.
            Taxes (VAT/GST/sales tax) may be added or included as shown at
            checkout. If a pricing or listing error occurs, we may cancel
            affected orders and refund amounts paid for cancelled items.
          </Typography>

          <Typography
            fontSize={{ xs: 14, sm: 16 }}
            color="#23282B"
            fontWeight={600}
            fontFamily="Montserrat"
          >
            18.5 Payment; authorization
          </Typography>

          <Typography
            fontSize={{ xs: 14, sm: 16 }}
            color="#23282B"
            fontWeight={400}
            fontFamily="Montserrat"
          >
            Payments are processed by third-party processors. You authorize us
            (and our processors) to charge your payment method for the order
            total and any authorized adjustments (where supported). We generally
            do not store full payment card numbers.
          </Typography>

          <Typography
            fontSize={{ xs: 14, sm: 16 }}
            color="#23282B"
            fontWeight={600}
            fontFamily="Montserrat"
          >
            18.6 Shipping; delivery; address accuracy
          </Typography>

          <Typography
            fontSize={{ xs: 14, sm: 16 }}
            color="#23282B"
            fontWeight={400}
            fontFamily="Montserrat"
          >
            Shipping options and estimated delivery windows are shown at
            checkout. Delivery times are estimates. You are responsible for
            accurate shipping details. If an incorrect address causes
            return-to-sender or loss, you may be responsible for reshipment
            costs and may not be entitled to a refund where the carrier confirms
            delivery to the address provided.
          </Typography>

          <Typography
            fontSize={{ xs: 14, sm: 16 }}
            color="#23282B"
            fontWeight={600}
            fontFamily="Montserrat"
          >
            18.7 Shipping origin; split shipments
          </Typography>

          <Typography
            fontSize={{ xs: 14, sm: 16 }}
            color="#23282B"
            fontWeight={400}
            fontFamily="Montserrat"
          >
            Orders may ship from different fulfilment locations depending on the
            item, production capacity, and destination. We may split shipments.
          </Typography>

          <Typography
            fontSize={{ xs: 14, sm: 16 }}
            color="#23282B"
            fontWeight={600}
            fontFamily="Montserrat"
          >
            18.8 Duties, import taxes, and cross-border charges
          </Typography>

          <Typography
            fontSize={{ xs: 14, sm: 16 }}
            color="#23282B"
            fontWeight={400}
            fontFamily="Montserrat"
          >
            International orders may be subject to customs duties, import taxes,
            brokerage fees, or other charges imposed by your jurisdiction.
            Unless explicitly stated otherwise at checkout, these charges are{" "}
            <strong>your responsibility</strong> and may be collected{" "}
            <strong>at checkout or upon delivery</strong>, depending on
            destination and carrier.
          </Typography>

          <Typography
            fontSize={{ xs: 14, sm: 16 }}
            color="#23282B"
            fontWeight={600}
            fontFamily="Montserrat"
          >
            18.9 Risk of loss; delivery issues
          </Typography>

          <Typography
            fontSize={{ xs: 14, sm: 16 }}
            color="#23282B"
            fontWeight={400}
            fontFamily="Montserrat"
          >
            To the fullest extent permitted by law,{" "}
            <strong>
              risk of loss transfers to you when the goods are delivered to you
            </strong>{" "}
            (or your designated recipient). Nothing in these Terms limits
            mandatory consumer rights. If you report non-delivery or damage, we
            may ask for reasonable supporting information to investigate with
            carriers/fulfilment partners.
          </Typography>

          <Typography
            fontSize={{ xs: 14, sm: 16 }}
            color="#23282B"
            fontWeight={600}
            fontFamily="Montserrat"
          >
            18.10 Cancellations
          </Typography>

          <Typography
            fontSize={{ xs: 14, sm: 16 }}
            color="#23282B"
            fontWeight={400}
            fontFamily="Montserrat"
          >
            Because many items are produced on demand,{" "}
            <strong>
              order cancellation may not be possible once production begins
            </strong>
            . If you request cancellation promptly after ordering, we will
            attempt to stop fulfilment, but we cannot guarantee cancellation
            once production/processing has started. Mandatory consumer rights
            still apply.
          </Typography>

          <Typography
            fontSize={{ xs: 14, sm: 16 }}
            color="#23282B"
            fontWeight={600}
            fontFamily="Montserrat"
          >
            18.11 Returns, exchanges, and refunds
          </Typography>

          <Typography
            fontSize={{ xs: 14, sm: 16 }}
            color="#23282B"
            fontWeight={400}
            fontFamily="Montserrat"
          >
            Returns and refunds are governed by our Returns/Refund Policy (if
            posted). If no Returns/Refund Policy is posted, the following
            baseline applies unless your local law provides stronger rights:
          </Typography>

          <Typography
            fontSize={{ xs: 14, sm: 16 }}
            color="#23282B"
            fontWeight={400}
            fontFamily="Montserrat"
          >
            <strong> A. Defective, damaged, or incorrect items</strong>
          </Typography>

          <Typography
            fontSize={{ xs: 14, sm: 16 }}
            color="#23282B"
            fontWeight={400}
            fontFamily="Montserrat"
          >
            If an item arrives defective, damaged, or materially different from
            what you ordered, contact support within a reasonable time after
            delivery. We may offer a replacement, repair (if applicable), or
            refund depending on the circumstances and applicable law.
          </Typography>

          <Typography
            fontSize={{ xs: 14, sm: 16 }}
            color="#23282B"
            fontWeight={400}
            fontFamily="Montserrat"
          >
            <strong>B. Change-of-mind returns</strong>
          </Typography>
          <Typography
            fontSize={{ xs: 14, sm: 16 }}
            color="#23282B"
            fontWeight={400}
            fontFamily="Montserrat"
          >
            Because many items are made on demand, change-of-mind returns may be
            limited, especially for goods that are made to your specifications
            or clearly personalized. Eligibility and time windows may vary by
            country.
          </Typography>

          <Typography
            fontSize={{ xs: 14, sm: 16 }}
            color="#23282B"
            fontWeight={400}
            fontFamily="Montserrat"
          >
            <strong>C. Refund timing</strong>
          </Typography>
          <Typography
            fontSize={{ xs: 14, sm: 16 }}
            color="#23282B"
            fontWeight={400}
            fontFamily="Montserrat"
          >
            Because many items are made on demand, change-of-mind returns may be
            limited, especially for goods that are made to your specifications
            or clearly personalized. Eligibility and time windows may vary by
            country.
          </Typography>

          <Typography
            fontSize={{ xs: 14, sm: 16 }}
            color="#23282B"
            fontWeight={600}
            fontFamily="Montserrat"
          >
            18.12 Chargebacks and disputes
          </Typography>

          <Typography
            fontSize={{ xs: 14, sm: 16 }}
            color="#23282B"
            fontWeight={400}
            fontFamily="Montserrat"
          >
            We encourage you to contact support before initiating a chargeback
            so we can resolve issues quickly. We may restrict accounts only for
            <strong>fraudulent or abusive</strong> disputes, to the extent
            permitted by law.
          </Typography>

          <Typography
            fontSize={{ xs: 14, sm: 16 }}
            color="#23282B"
            fontWeight={600}
            fontFamily="Montserrat"
          >
            18.13 UK-specific cancellation rights (distance selling)
          </Typography>

          <Typography
            fontSize={{ xs: 14, sm: 16 }}
            color="#23282B"
            fontWeight={400}
            fontFamily="Montserrat"
          >
            If you are a <strong>UK consumer</strong>, you may have a legal
            right to cancel your purchase within <strong>14 days</strong> of
            receiving goods under the Consumer Contracts Regulations,{" "}
            <strong>unless an exception applies</strong>.
          </Typography>
          <Typography
            fontSize={{ xs: 14, sm: 16 }}
            color="#23282B"
            fontWeight={400}
            fontFamily="Montserrat"
          >
            <strong>Exception (relevant to POD)</strong>: the 14-day
            cancellation right typically does not apply to goods that are{" "}
            <strong>made to your specifications or clearly personalized</strong>
            . If a Product is customized (e.g., personalized prints, names, or
            custom selections unique to you), it may fall within this exception.
          </Typography>
          <Typography
            fontSize={{ xs: 14, sm: 16 }}
            color="#23282B"
            fontWeight={400}
            fontFamily="Montserrat"
          >
            Where cancellation applies:
          </Typography>
          <Box>
            <Typography
              fontSize={{ xs: 14, sm: 16 }}
              color="#23282B"
              fontWeight={400}
              fontFamily="Montserrat"
              sx={{
                "&::before": {
                  content: '"• "',
                },
              }}
            >
              you must notify us within 14 days of delivery;
            </Typography>
            <Typography
              fontSize={{ xs: 14, sm: 16 }}
              color="#23282B"
              fontWeight={400}
              fontFamily="Montserrat"
              sx={{
                "&::before": {
                  content: '"• "',
                },
              }}
            >
              you must return goods in accordance with instructions;
            </Typography>
            <Typography
              fontSize={{ xs: 14, sm: 16 }}
              color="#23282B"
              fontWeight={400}
              fontFamily="Montserrat"
              sx={{
                "&::before": {
                  content: '"• "',
                },
              }}
            >
              we may deduct for diminished value caused by handling beyond what
              is necessary to inspect the goods.
            </Typography>
          </Box>
          <Typography
            fontSize={{ xs: 14, sm: 16 }}
            color="#23282B"
            fontWeight={400}
            fontFamily="Montserrat"
          >
            This does not limit other UK statutory rights for faulty goods.
          </Typography>

          <Typography
            fontSize={{ xs: 14, sm: 16 }}
            color="#23282B"
            fontWeight={600}
            fontFamily="Montserrat"
          >
            18.14 Australia consumer guarantees (ACL)
          </Typography>

          <Typography
            fontSize={{ xs: 14, sm: 16 }}
            color="#23282B"
            fontWeight={400}
            fontFamily="Montserrat"
          >
            Our goods come with guarantees that cannot be excluded under the
            ACL. You are entitled to a replacement or refund for a major failure
            and compensation for other reasonably foreseeable loss or damage.
          </Typography>

          <Typography
            fontSize={{ xs: 14, sm: 16 }}
            color="#23282B"
            fontWeight={600}
            fontFamily="Montserrat"
          >
            18.15 Canada consumer rights
          </Typography>

          <Typography
            fontSize={{ xs: 14, sm: 16 }}
            color="#23282B"
            fontWeight={400}
            fontFamily="Montserrat"
          >
            You may have non-waivable rights under applicable provincial
            consumer protection laws. Nothing in these Terms is intended to
            exclude those rights.
          </Typography>

          <Typography
            fontSize={{ xs: 14, sm: 16 }}
            color="#23282B"
            fontWeight={600}
            fontFamily="Montserrat"
          >
            18.16 Export controls and sanctions
          </Typography>

          <Typography
            fontSize={{ xs: 14, sm: 16 }}
            color="#23282B"
            fontWeight={400}
            fontFamily="Montserrat"
          >
            You agree not to purchase or use Products in violation of applicable
            export controls, sanctions, or trade laws. We may refuse or cancel
            orders where fulfilment may violate applicable law.
          </Typography>

          <Typography
            fontSize={{ xs: 14, sm: 16 }}
            color="#23282B"
            fontWeight={600}
            fontFamily="Montserrat"
          >
            18.17 Force majeure
          </Typography>

          <Typography
            fontSize={{ xs: 14, sm: 16 }}
            color="#23282B"
            fontWeight={400}
            fontFamily="Montserrat"
          >
            We are not liable for delays or failure to perform caused by events
            beyond our reasonable control (e.g., carrier disruptions, customs
            delays, strikes, natural disasters). Where such events occur, we
            will take reasonable steps to resume fulfilment.
          </Typography>

          <Typography
            color="#23282B"
            fontSize={24}
            fontWeight={700}
            fontFamily="Montserrat"
          >
            19. SMS Terms Addendum (Marketing Text Messages)
          </Typography>

          <Typography
            fontSize={18}
            color="#23282B"
            fontWeight={400}
            fontFamily="Montserrat"
          >
            These SMS Terms apply if you opt in to receive marketing messages
            from Pendo via SMS/text (and similar mobile messaging where
            offered). They supplement the Terms above and the Privacy Policy.
          </Typography>

          <Typography
            fontSize={18}
            color="#23282B"
            fontWeight={600}
            fontFamily="Montserrat"
          >
            19.1 Program description; sender identification
          </Typography>

          <Typography
            fontSize={18}
            color="#23282B"
            fontWeight={400}
            fontFamily="Montserrat"
          >
            The SMS Program provides marketing messages such as promotions,
            product drops, restock alerts, and cart reminders. Messages will
            identify <strong>Pendo</strong> (or{" "}
            <strong>Pendo Heritage Wears</strong>) as the sender.
          </Typography>

          <Typography
            fontSize={18}
            color="#23282B"
            fontWeight={600}
            fontFamily="Montserrat"
          >
            19.2 Consent; not a condition of purchase
          </Typography>

          <Typography
            fontSize={18}
            color="#23282B"
            fontWeight={400}
            fontFamily="Montserrat"
          >
            By enrolling, you authorize Pendo (and our service providers) to
            send you recurring marketing text messages at the mobile number you
            provide. Consent is not a condition of purchase. Message and data
            rates may apply.
          </Typography>
          <Typography
            fontSize={18}
            color="#23282B"
            fontWeight={400}
            fontFamily="Montserrat"
          >
            Where required by law (including in parts of the United States), you
            agree that messages may be sent using automated technology.
          </Typography>

          <Typography
            fontSize={18}
            color="#23282B"
            fontWeight={600}
            fontFamily="Montserrat"
          >
            19.3 Message frequency
          </Typography>

          <Typography
            fontSize={18}
            color="#23282B"
            fontWeight={400}
            fontFamily="Montserrat"
          >
            Message frequency varies. We may change frequency at any time.
          </Typography>

          <Typography
            fontSize={18}
            color="#23282B"
            fontWeight={600}
            fontFamily="Montserrat"
          >
            19.4 Opt out (unsubscribe)
          </Typography>

          <Typography
            fontSize={18}
            color="#23282B"
            fontWeight={400}
            fontFamily="Montserrat"
          >
            You can opt out at any time by replying <strong>STOP</strong> to any
            marketing message. After you send STOP, you may receive one
            additional message confirming your opt-out.
          </Typography>
          <Typography
            fontSize={18}
            color="#23282B"
            fontWeight={400}
            fontFamily="Montserrat"
          >
            If you have trouble opting out, email{" "}
            <LinkTo to="mailto:privacy@pendowears.com">
              privacy@pendowears.com
            </LinkTo>{" "}
            with your mobile number and the word “STOP” in the subject line.
          </Typography>

          <Typography
            fontSize={18}
            color="#23282B"
            fontWeight={600}
            fontFamily="Montserrat"
          >
            19.5 Help
          </Typography>

          <Typography
            fontSize={18}
            color="#23282B"
            fontWeight={400}
            fontFamily="Montserrat"
          >
            Reply <strong>HELP</strong> for help (where supported), or email
            <LinkTo to="mailto:privacy@pendowears.com">
              privacy@pendowears.com
            </LinkTo>{" "}
            (Subject: “SMS Help”).
          </Typography>

          <Typography
            fontSize={18}
            color="#23282B"
            fontWeight={600}
            fontFamily="Montserrat"
          >
            19.6 Eligibility and number changes
          </Typography>

          <Typography
            fontSize={18}
            color="#23282B"
            fontWeight={400}
            fontFamily="Montserrat"
          >
            You represent that you are the subscriber or authorized user of the
            mobile number you enroll. If your number changes, you should opt out
            of the old number and re-enroll with the new number. We will honor
            opt-out requests promptly in accordance with applicable law.
          </Typography>

          <Typography
            fontSize={18}
            color="#23282B"
            fontWeight={600}
            fontFamily="Montserrat"
          >
            19.7 Carriers; availability
          </Typography>

          <Typography
            fontSize={18}
            color="#23282B"
            fontWeight={400}
            fontFamily="Montserrat"
          >
            Carriers are not liable for delayed or undelivered messages. The SMS
            Program may not be available on all carriers or in all countries.
          </Typography>

          <Typography
            fontSize={18}
            color="#23282B"
            fontWeight={600}
            fontFamily="Montserrat"
          >
            19.8 Anti-spam and marketing rules
          </Typography>

          <Typography
            fontSize={18}
            color="#23282B"
            fontWeight={400}
            fontFamily="Montserrat"
          >
            We send marketing messages only where we have consent or where
            permitted by applicable law, including Canada’s CASL, UK PECR (and
            similar rules), and Australia’s Spam Act requirements for
            identification and unsubscribe functionality.
          </Typography>

          <Typography
            fontSize={18}
            color="#23282B"
            fontWeight={600}
            fontFamily="Montserrat"
          >
            19.9 Electronic records; proof of consent
          </Typography>

          <Typography
            fontSize={18}
            color="#23282B"
            fontWeight={400}
            fontFamily="Montserrat"
          >
            You agree that we may maintain records of your consent,
            opt-in/opt-out status, and message interactions electronically and
            use these records to demonstrate compliance with applicable laws.
          </Typography>

          <Typography
            fontSize={18}
            color="#23282B"
            fontWeight={600}
            fontFamily="Montserrat"
          >
            19.10 Privacy
          </Typography>

          <Typography
            fontSize={18}
            color="#23282B"
            fontWeight={400}
            fontFamily="Montserrat"
          >
            Use of your phone number and SMS interaction data is governed by our
            Privacy Policy.
          </Typography>

          <Typography
            fontSize={18}
            color="#23282B"
            fontWeight={600}
            fontFamily="Montserrat"
          >
            19.11 Changes; termination
          </Typography>

          <Typography
            fontSize={18}
            color="#23282B"
            fontWeight={400}
            fontFamily="Montserrat"
          >
            We may modify or terminate the SMS Program or these SMS Terms at any
            time. Updates will be posted on the Site. Continued enrollment after
            changes are posted constitutes acceptance.
          </Typography>

          <Typography
            fontSize={18}
            color="#23282B"
            fontWeight={600}
            fontFamily="Montserrat"
          >
            19.12 Disputes
          </Typography>

          <Typography
            fontSize={18}
            color="#23282B"
            fontWeight={400}
            fontFamily="Montserrat"
          >
            If you are a <strong>U.S. resident</strong>, disputes relating to
            the SMS Program are subject to Section 20 (Arbitration and Class
            Action Waiver) unless you validly opt out. For non-U.S. residents,
            Section 21 applies, subject to mandatory consumer protections.
          </Typography>

          <Typography
            color="#23282B"
            fontSize={24}
            fontWeight={700}
            fontFamily="Montserrat"
          >
            20. U.S. Agreement to arbitrate disputes; class action waiver (U.S.
            residents only)
          </Typography>

          <Typography
            fontSize={18}
            color="#23282B"
            fontWeight={400}
            fontFamily="Montserrat"
          >
            <strong>
              This Section 20 applies only if you are a resident of the United
              States
            </strong>
            . If you are not a U.S. resident, Section 21 applies instead.
          </Typography>

          <Typography
            fontSize={18}
            color="#23282B"
            fontWeight={600}
            fontFamily="Montserrat"
          >
            20.1 Agreement to arbitrate
          </Typography>

          <Typography
            fontSize={18}
            color="#23282B"
            fontWeight={400}
            fontFamily="Montserrat"
          >
            You and Pendo agree that any dispute, claim, or controversy arising
            out of or relating to these Terms, the Site, the Privacy Policy, the
            Terms of Sale, the SMS Program, or any purchase (“Covered Dispute”)
            will be resolved by <strong>binding arbitration</strong>{" "}
            administered by the{" "}
            <strong>American Arbitration Association (AAA)</strong> under its
            Consumer Arbitration Rules.
          </Typography>
          <Typography
            fontSize={18}
            color="#23282B"
            fontWeight={400}
            fontFamily="Montserrat"
          >
            Arbitration will be conducted by a single neutral arbitrator. The
            arbitration may be conducted by documents, telephone, or video
            conference unless an in-person hearing is required by the rules. The
            arbitrator may award any relief permitted by law on an individual
            basis.
          </Typography>

          <Typography
            fontSize={18}
            color="#23282B"
            fontWeight={600}
            fontFamily="Montserrat"
          >
            20.2 No class actions
          </Typography>

          <Typography
            fontSize={18}
            color="#23282B"
            fontWeight={400}
            fontFamily="Montserrat"
          >
            Arbitration will proceed only on an individual basis. You and Pendo
            waive any right to bring or participate in a class, collective, or
            representative action in arbitration or in court, to the fullest
            extent permitted by law.
          </Typography>
          <Typography
            fontSize={18}
            color="#23282B"
            fontWeight={400}
            fontFamily="Montserrat"
          >
            Where required by law (including in parts of the United States), you
            agree that messages may be sent using automated technology.
          </Typography>

          <Typography
            fontSize={18}
            color="#23282B"
            fontWeight={600}
            fontFamily="Montserrat"
          >
            20.3 Exceptions
          </Typography>

          <Typography
            fontSize={18}
            color="#23282B"
            fontWeight={400}
            fontFamily="Montserrat"
          >
            This arbitration agreement does not prevent either party from:
          </Typography>
          <Box>
            <Typography
              fontSize={18}
              color="#23282B"
              fontWeight={400}
              fontFamily="Montserrat"
              sx={{
                "&::before": {
                  content: '"• "',
                },
              }}
            >
              bringing an individual claim in small claims court (if eligible);
              or
            </Typography>
            <Typography
              fontSize={18}
              color="#23282B"
              fontWeight={400}
              fontFamily="Montserrat"
              sx={{
                "&::before": {
                  content: '"• "',
                },
              }}
            >
              seeking injunctive relief in court for infringement or misuse of
              intellectual property rights.
            </Typography>
          </Box>

          <Typography
            fontSize={18}
            color="#23282B"
            fontWeight={600}
            fontFamily="Montserrat"
          >
            20.4 Opt-out
          </Typography>

          <Typography
            fontSize={18}
            color="#23282B"
            fontWeight={400}
            fontFamily="Montserrat"
          >
            You may opt out of arbitration by emailing{" "}
            <LinkTo to="mailto:legal@pendowears.com">
              legal@pendowears.com
            </LinkTo>
            within 30 days of first accepting these Terms with subject line
            <strong>“Arbitration Opt-Out”</strong> and including: your full
            name, the email used on the Site, your phone number, your order
            number (if any), and a clear statement that you opt out of
            arbitration.
          </Typography>

          <Typography
            fontSize={18}
            color="#23282B"
            fontWeight={600}
            fontFamily="Montserrat"
          >
            20.5 Governing law for arbitration
          </Typography>

          <Typography
            fontSize={18}
            color="#23282B"
            fontWeight={400}
            fontFamily="Montserrat"
          >
            The Federal Arbitration Act governs the interpretation and
            enforcement of this arbitration agreement.
          </Typography>
        </>
        <>
          <Typography
            fontSize={{ xs: 18, sm: 24 }}
            color="#23282B"
            fontWeight={600}
            fontFamily="Montserrat"
          >
            21. Governing law; venue (non-U.S. residents, and U.S. residents who
            opt out)
          </Typography>

          <Typography
            fontSize={{ xs: 14, sm: 16 }}
            color="#23282B"
            fontWeight={400}
            fontFamily="Montserrat"
          >
            Except where mandatory consumer laws require otherwise, disputes not
            subject to arbitration will be resolved in a court of competent
            jurisdiction.
          </Typography>
          <Typography
            fontSize={{ xs: 14, sm: 16 }}
            color="#23282B"
            fontWeight={400}
            fontFamily="Montserrat"
          >
            Because Pendo sells internationally, governing law and venue may
            vary depending on mandatory rules applicable in your location. Where
            such mandatory rules do not apply, the laws of the jurisdiction most
            closely connected to the transaction will apply.
          </Typography>

          <Typography
            fontSize={{ xs: 18, sm: 24 }}
            color="#23282B"
            fontWeight={600}
            fontFamily="Montserrat"
          >
            22. Intellectual property complaints
          </Typography>

          <Typography
            fontSize={{ xs: 14, sm: 16 }}
            color="#23282B"
            fontWeight={400}
            fontFamily="Montserrat"
          >
            If you believe content on the Site infringes your copyright, send a
            notice to{" "}
            <LinkTo to="mailto:legal@pendowears.com">
              legal@pendowears.com
            </LinkTo>{" "}
            with:
          </Typography>
          <Box>
            <Typography
              fontSize={{ xs: 14, sm: 16 }}
              color="#23282B"
              fontWeight={400}
              fontFamily="Montserrat"
              sx={{
                "&::before": {
                  content: '"1• "',
                },
              }}
            >
              identification of the copyrighted work;
            </Typography>
            <Typography
              fontSize={{ xs: 14, sm: 16 }}
              color="#23282B"
              fontWeight={400}
              fontFamily="Montserrat"
              sx={{
                "&::before": {
                  content: '"2• "',
                },
              }}
            >
              identification of the allegedly infringing material and its
              location (URL);
            </Typography>
            <Typography
              fontSize={{ xs: 14, sm: 16 }}
              color="#23282B"
              fontWeight={400}
              fontFamily="Montserrat"
              sx={{
                "&::before": {
                  content: '"3• "',
                },
              }}
            >
              your contact information;
            </Typography>
            <Typography
              fontSize={{ xs: 14, sm: 16 }}
              color="#23282B"
              fontWeight={400}
              fontFamily="Montserrat"
              sx={{
                "&::before": {
                  content: '"4• "',
                },
              }}
            >
              a statement that you have a good-faith belief the use is not
              authorized;
            </Typography>
            <Typography
              fontSize={{ xs: 14, sm: 16 }}
              color="#23282B"
              fontWeight={400}
              fontFamily="Montserrat"
              sx={{
                "&::before": {
                  content: '"5• "',
                },
              }}
            >
              a statement under penalty of perjury that the information is
              accurate and you are the rights owner or authorized agent;
            </Typography>
            <Typography
              fontSize={{ xs: 14, sm: 16 }}
              color="#23282B"
              fontWeight={400}
              fontFamily="Montserrat"
              sx={{
                "&::before": {
                  content: '"6• "',
                },
              }}
            >
              and your physical or electronic signature.
            </Typography>
          </Box>

          <Typography
            fontSize={{ xs: 18, sm: 24 }}
            color="#23282B"
            fontWeight={600}
            fontFamily="Montserrat"
          >
            23. No waiver
          </Typography>

          <Typography
            fontSize={{ xs: 14, sm: 16 }}
            color="#23282B"
            fontWeight={400}
            fontFamily="Montserrat"
          >
            If we do not enforce any provision of these Terms, that does not
            mean we waive our right to enforce it later.
          </Typography>

          <Typography
            fontSize={{ xs: 18, sm: 24 }}
            color="#23282B"
            fontWeight={600}
            fontFamily="Montserrat"
          >
            24. Severability
          </Typography>

          <Typography
            fontSize={{ xs: 14, sm: 16 }}
            color="#23282B"
            fontWeight={400}
            fontFamily="Montserrat"
          >
            If any provision is unlawful, void, or unenforceable, that provision
            will be severed to the extent necessary, and the remaining
            provisions remain in full force and effect.
          </Typography>
          <Typography
            fontSize={{ xs: 14, sm: 16 }}
            color="#23282B"
            fontWeight={400}
            fontFamily="Montserrat"
          >
            Because Pendo sells internationally, governing law and venue may
            vary depending on mandatory rules applicable in your location. Where
            such mandatory rules do not apply, the laws of the jurisdiction most
            closely connected to the transaction will apply.
          </Typography>

          <Typography
            fontSize={{ xs: 18, sm: 24 }}
            color="#23282B"
            fontWeight={600}
            fontFamily="Montserrat"
          >
            25. Entire agreement
          </Typography>

          <Typography
            fontSize={{ xs: 14, sm: 16 }}
            color="#23282B"
            fontWeight={400}
            fontFamily="Montserrat"
          >
            These Terms, together with the Privacy Policy, Cookie Settings, and
            any other Policies referenced on the Site, form the entire agreement
            between you and Pendo regarding the Site and supersede prior
            communications regarding your use of the Site.
          </Typography>
        </>
      </Box>
    </Box>
  );
};

export default TermsOfUse;
