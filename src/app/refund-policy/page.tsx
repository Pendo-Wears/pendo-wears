import { Box, Typography } from "@mui/material";
import React from "react";
import { LinkTo } from "../terms-of-use/page";

const RefundPolicy = () => {
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
            Pendo Returns & Refund Policy 
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
            This Returns & Refund Policy explains how returns, replacements, and
            refunds work for Products purchased from pendowears.com, including
            print-on-demand (“POD”) items. This Policy is part of our Terms and
            is intended to align with our Terms of Use and Terms of Sale. If
            there is a conflict, mandatory consumer laws apply and the Terms of
            Sale control for purchase mechanics (ordering, shipping, duties,
            risk of loss, etc.).
          </Typography>

          <Typography
            fontSize={{ xs: 14, sm: 16 }}
            color={"#23282B"}
            fontWeight={400}
            fontFamily={"Montserrat"}
          >
            Nothing in this Policy limits your non-waivable rights under
            applicable consumer laws (including UK Consumer Rights Act 2015,
            Australian Consumer Law, and applicable Canadian provincial consumer
            protection rules).
          </Typography>
        </>
        <>
          <Typography
            fontSize={{xs: 18, sm: 24}}
            fontWeight={700}
            fontFamily="Montserrat"
            color="#23282B"
          >
            1. Key POD terms used in this Policy
          </Typography>

          <Typography
            fontSize={{xs: 14, sm: 16}}
            fontWeight={400}
            fontFamily="Montserrat"
            color="#23282B"
          >
            To avoid ambiguity, we use the following definitions:
          </Typography>

          <Typography
            fontSize={{xs: 14, sm: 16}}
            fontWeight={600}
            fontFamily="Montserrat"
            color="#23282B"
          >
            a. “Made-to-order (POD)”
          </Typography>

          <Typography
            fontSize={{xs: 14, sm: 16}}
            fontWeight={400}
            fontFamily="Montserrat"
            color="#23282B"
          >
            Items printed/produced after you place an order, using standard
            catalogue options (e.g., selecting a standard size and color).
          </Typography>

          <Typography
            fontSize={{xs: 14, sm: 16}}
            fontWeight={600}
            fontFamily="Montserrat"
            color="#23282B"
          >
            b. “Custom / Personalised / Made-to-spec”
          </Typography>

          <Typography
            fontSize={{xs: 14, sm: 16}}
            fontWeight={400}
            fontFamily="Montserrat"
            color="#23282B"
          >
            Items made to your specifications or clearly personalised (e.g.,
            name/initials, custom text, custom placement/unique design choices
            you select, bespoke personalization). These items are typically not
            suitable for resale.
          </Typography>

          <Typography
            fontSize={{xs: 14, sm: 16}}
            fontWeight={400}
            fontFamily="Montserrat"
            color="#23282B"
          >
            <strong> Important:</strong> A product being “made-to-order” does
            <strong> not automatically</strong> mean it is
            “made-to-spec/personalised.” The distinction matters most for{" "}
            <strong>UK cancellation rights</strong>.
          </Typography>

          <Typography
            fontSize={{xs: 18, sm: 24}}
            fontWeight={700}
            fontFamily="Montserrat"
            color="#23282B"
          >
            2. How to request help (return, replacement, refund)
          </Typography>

          <Typography
            fontSize={{xs: 14, sm: 16}}
            fontWeight={400}
            fontFamily="Montserrat"
            color="#23282B"
          >
            Start a request using the{" "}
            <strong>support channel on pendowears.com</strong>.
          </Typography>

          <Typography
            fontSize={{xs: 14, sm: 16}}
            fontWeight={400}
            fontFamily="Montserrat"
            color="#23282B"
          >
            When you contact us, include:
          </Typography>

          <Box ml={1}>
            <Typography
              fontSize={{xs: 14, sm: 16}}
              fontWeight={400}
              fontFamily="Montserrat"
              color="#23282B"
              sx={{
                "&::before": { content: '"1. "' },
              }}
            >
              Order number
            </Typography>

            <Typography
              fontSize={{xs: 14, sm: 16}}
              fontWeight={400}
              fontFamily="Montserrat"
              color="#23282B"
              sx={{
                "&::before": { content: '"2. "' },
              }}
            >
              Your full name and email used at checkout
            </Typography>

            <Typography
              fontSize={{xs: 14, sm: 16}}
              fontWeight={400}
              fontFamily="Montserrat"
              color="#23282B"
              sx={{
                "&::before": { content: '"3. "' },
              }}
            >
              The item(s) and the issue (e.g., damaged, wrong item, print issue)
            </Typography>

            <Typography
              fontSize={{xs: 14, sm: 16}}
              fontWeight={400}
              fontFamily="Montserrat"
              color="#23282B"
              sx={{
                "&::before": { content: '"4. "' },
              }}
            >
              Evidence where reasonably necessary to verify the issue (see
              Section 5)
            </Typography>
          </Box>

          <Typography
            fontSize={{xs: 14, sm: 16}}
            fontWeight={400}
            fontFamily="Montserrat"
            color="#23282B"
          >
            We may ask follow-up questions so we can resolve your request
            quickly and fairly.
          </Typography>

          <Typography
            fontSize={{xs: 18, sm: 24}}
            fontWeight={700}
            fontFamily="Montserrat"
            color="#23282B"
          >
            3. What remedies we offer
          </Typography>

          <Typography
            fontSize={{xs: 14, sm: 16}}
            fontWeight={400}
            fontFamily="Montserrat"
            color="#23282B"
          >
            Depending on the situation and applicable law, we may offer one or
            more of the following:
          </Typography>

          <Box ml={1}>
            <Typography
              fontSize={{xs: 14, sm: 16}}
              fontWeight={400}
              fontFamily="Montserrat"
              color="#23282B"
              sx={{
                "&::before": { content: '"• "' },
              }}
            >
              <strong>Replacement</strong> (reprint/remake and resend)
            </Typography>

            <Typography
              fontSize={{xs: 14, sm: 16}}
              fontWeight={400}
              fontFamily="Montserrat"
              color="#23282B"
              sx={{
                "&::before": { content: '"• "' },
              }}
            >
              <strong>Refund</strong> to the original payment method
            </Typography>

            <Typography
              fontSize={{xs: 14, sm: 16}}
              fontWeight={400}
              fontFamily="Montserrat"
              color="#23282B"
              sx={{
                "&::before": { content: '"• "' },
              }}
            >
              <strong>Partial refund</strong> (for minor issues where you keep
              the item)
            </Typography>

            <Typography
              fontSize={{xs: 14, sm: 16}}
              fontWeight={400}
              fontFamily="Montserrat"
              color="#23282B"
              sx={{
                "&::before": { content: '"• "' },
              }}
            >
              <strong>Store credit</strong> (only if you agree, and where
              permitted by law)
            </Typography>
          </Box>

          <Typography
            fontSize={{xs: 14, sm: 16}}
            fontWeight={400}
            fontFamily="Montserrat"
            color="#23282B"
          >
            Where mandatory law provides a specific remedy framework (e.g.,
            Australian Consumer Law), we will comply.
          </Typography>

          <Typography
            fontSize={{xs: 18, sm: 24}}
            fontWeight={700}
            fontFamily="Montserrat"
            color="#23282B"
          >
            4. Reporting windows (when to contact us)
          </Typography>

          <Typography
            fontSize={{xs: 14, sm: 16}}
            fontWeight={400}
            fontFamily="Montserrat"
            color="#23282B"
          >
            These windows help us investigate with carriers and fulfilment
            partners. If you miss a window, contact us anyway—we will still
            consider requests where required by law or where it is reasonable to
            do so.
          </Typography>

          <Typography
            fontSize={{xs: 14, sm: 16}}
            fontWeight={600}
            fontFamily="Montserrat"
            color="#23282B"
          >
            4.1 Damaged, defective, or incorrect items
          </Typography>

          <Typography
            fontSize={{xs: 14, sm: 16}}
            fontWeight={400}
            fontFamily="Montserrat"
            color="#23282B"
          >
            Please contact us <strong>within 14 days of delivery</strong>, or{" "}
            <strong>as soon as reasonably possible</strong> after you notice the
            issue.
          </Typography>

          <Typography
            fontSize={{xs: 14, sm: 16}}
            fontWeight={600}
            fontFamily="Montserrat"
            color="#23282B"
          >
            4.2 Missing items / short shipments
          </Typography>

          <Typography
            fontSize={{xs: 14, sm: 16}}
            fontWeight={400}
            fontFamily="Montserrat"
            color="#23282B"
          >
            Please contact us <strong>within 14 days of delivery</strong> (or
            within 14 days of the last package delivery if shipped in multiple
            parcels).
          </Typography>

          <Typography
            fontSize={{xs: 14, sm: 16}}
            fontWeight={600}
            fontFamily="Montserrat"
            color="#23282B"
          >
            4.3 Lost in transit / not delivered
          </Typography>

          <Typography
            fontSize={{xs: 14, sm: 16}}
            fontWeight={400}
            fontFamily="Montserrat"
            color="#23282B"
          >
            Please contact us{" "}
            <strong>within 30 days after the estimated delivery date</strong>
            shown in your shipping confirmation.
          </Typography>

          <Typography
            fontSize={{xs: 14, sm: 16}}
            fontWeight={600}
            fontFamily="Montserrat"
            color="#23282B"
          >
            4.4 “Delivered” but not received (porch piracy / misdelivery)
          </Typography>

          <Typography
            fontSize={{xs: 14, sm: 16}}
            fontWeight={400}
            fontFamily="Montserrat"
            color="#23282B"
          >
            If tracking shows “delivered” but you did not receive the package,
            contact us <strong>within 7 days of the delivery scan</strong> so we
            can open a carrier investigation promptly.
          </Typography>

          <Typography
            fontSize={{xs: 18, sm: 24}}
            fontWeight={700}
            fontFamily="Montserrat"
            color="#23282B"
          >
            5. Evidence and verification (reasonable, not punitive)
          </Typography>

          <Typography
            fontSize={{xs: 14, sm: 16}}
            fontWeight={400}
            fontFamily="Montserrat"
            color="#23282B"
          >
            To investigate efficiently, we may request reasonable evidence, such
            as photos or delivery details.
          </Typography>

          <Box ml={1}>
            <Typography
              fontSize={{xs: 14, sm: 16}}
              fontWeight={400}
              fontFamily="Montserrat"
              color="#23282B"
              sx={{
                "&::before": { content: '"• "' },
              }}
            >
              For damage/defect/wrong item/print issues, photos are strongly
              recommended and may be required where reasonably necessary to
              verify the issue.
            </Typography>

            <Typography
              fontSize={{xs: 14, sm: 16}}
              fontWeight={400}
              fontFamily="Montserrat"
              color="#23282B"
              sx={{
                "&::before": { content: '"• "' },
              }}
            >
              If you cannot provide photos, tell us and we will consider
              alternative verification (e.g., additional descriptions, carrier
              notes, or other reasonable evidence).
            </Typography>
          </Box>

          <Typography
            fontSize={{xs: 14, sm: 16}}
            fontWeight={400}
            fontFamily="Montserrat"
            color="#23282B"
          >
            Recommended photos (where applicable):
          </Typography>

          <Box ml={1}>
            <Typography
              fontSize={{xs: 14, sm: 16}}
              fontWeight={400}
              fontFamily="Montserrat"
              color="#23282B"
              sx={{
                "&::before": { content: '"• "' },
              }}
            >
              clear photo of the full item
            </Typography>

            <Typography
              fontSize={{xs: 14, sm: 16}}
              fontWeight={400}
              fontFamily="Montserrat"
              color="#23282B"
              sx={{
                "&::before": { content: '"• "' },
              }}
            >
              close-up of the issue
            </Typography>

            <Typography
              fontSize={{xs: 14, sm: 16}}
              fontWeight={400}
              fontFamily="Montserrat"
              color="#23282B"
              sx={{
                "&::before": { content: '"• "' },
              }}
            >
              packaging label (if available)
            </Typography>
          </Box>
        </>
        <>
          <Typography
            fontSize={{xs: 18, sm: 24}}
            fontWeight={700}
            fontFamily="Montserrat"
            color="#23282B"
          >
            6. What is eligible
          </Typography>

          <Typography
            fontSize={{xs: 14, sm: 16}}
            fontWeight={600}
            fontFamily="Montserrat"
            color="#23282B"
          >
            6.1 Always eligible: faulty, damaged, incorrect, or not as described
          </Typography>

          <Typography
            fontSize={{xs: 14, sm: 16}}
            fontWeight={400}
            fontFamily="Montserrat"
            color="#23282B"
          >
            Please contact us <strong>within 14 days of delivery</strong>, or{" "}
            <strong>as soon as reasonably possible</strong> after you notice the
            issue.
          </Typography>

          <Box ml={1}>
            <Typography
              fontSize={{xs: 14, sm: 16}}
              fontWeight={400}
              fontFamily="Montserrat"
              color="#23282B"
              sx={{
                "&::before": { content: '"• "' },
              }}
            >
              <strong>damaged</strong> on arrival;
            </Typography>

            <Typography
              fontSize={18}
              fontWeight={600}
              fontFamily="Montserrat"
              color="#23282B"
              sx={{
                "&::before": { content: '"• "' },
              }}
            >
              defective/faulty;
            </Typography>

            <Typography
              fontSize={{xs: 14, sm: 16}}
              fontWeight={400}
              fontFamily="Montserrat"
              color="#23282B"
              sx={{
                "&::before": { content: '"• "' },
              }}
            >
              <strong>materially different</strong> from what you ordered (wrong
              item/design/size/color sent); or
            </Typography>

            <Typography
              fontSize={18}
              fontWeight={600}
              fontFamily="Montserrat"
              color="#23282B"
              sx={{
                "&::before": { content: '"• "' },
              }}
            >
              not as described.
            </Typography>
          </Box>

          <Typography
            fontSize={{xs: 14, sm: 16}}
            fontWeight={600}
            fontFamily="Montserrat"
            color="#23282B"
          >
            6.2 Manufacturing defects discovered later
          </Typography>

          <Typography
            fontSize={{xs: 14, sm: 16}}
            fontWeight={400}
            fontFamily="Montserrat"
            color="#23282B"
          >
            If a manufacturing defect becomes apparent after reasonable initial
            use (e.g., a seam failure attributable to manufacturing), contact us
            as soon as reasonably possible. Your rights may extend beyond the
            “reporting windows” depending on the law in your country.
          </Typography>

          <Typography
            fontSize={{xs: 18, sm: 24}}
            fontWeight={700}
            fontFamily="Montserrat"
            color="#23282B"
          >
            7. Change-of-mind returns (and POD limitations)
          </Typography>

          <Typography
            fontSize={{xs: 14, sm: 16}}
            fontWeight={400}
            fontFamily="Montserrat"
            color="#23282B"
          >
            Because many Products are produced after purchase, we do not
            generally accept returns or refunds for{" "}
            <strong>change-of-mind</strong> reasons, including:
          </Typography>

          <Box ml={1}>
            <Typography
              fontSize={{xs: 14, sm: 16}}
              fontWeight={400}
              fontFamily="Montserrat"
              color="#23282B"
              sx={{
                "&::before": { content: '"• "' },
              }}
            >
              you changed your mind after ordering;
            </Typography>

            <Typography
              fontSize={{xs: 14, sm: 16}}
              fontWeight={400}
              fontFamily="Montserrat"
              color="#23282B"
              sx={{
                "&::before": { content: '"• "' },
              }}
            >
              you ordered the wrong size;
            </Typography>

            <Typography
              fontSize={{xs: 14, sm: 16}}
              fontWeight={400}
              fontFamily="Montserrat"
              color="#23282B"
              sx={{
                "&::before": { content: '"• "' },
              }}
            >
              you prefer a different color/fit; or
            </Typography>

            <Typography
              fontSize={{xs: 14, sm: 16}}
              fontWeight={400}
              fontFamily="Montserrat"
              color="#23282B"
              sx={{
                "&::before": { content: '"• "' },
              }}
            >
              the item meets the description but isn’t to your taste.
            </Typography>
          </Box>

          <Typography
            fontSize={{xs: 14, sm: 16}}
            fontWeight={400}
            fontFamily="Montserrat"
            color="#23282B"
          >
            <strong>Exception</strong>: If we explicitly state on the product
            page or at checkout that a particular Product/category is eligible
            for change-of-mind returns, then those stated eligibility rules
            apply.
          </Typography>

          <Typography
            fontSize={{xs: 14, sm: 16}}
            fontWeight={400}
            fontFamily="Montserrat"
            color="#23282B"
          >
            This section does not limit mandatory consumer rights (see Sections
            12–14).
          </Typography>
        </>
        <>
          <Typography
            fontSize={{xs: 18, sm: 24}}
            fontWeight={700}
            fontFamily="Montserrat"
            color="#23282B"
          >
            8. What is not considered a defect (POD tolerances)
          </Typography>

          <Typography
            fontSize={{xs: 14, sm: 16}}
            fontWeight={400}
            fontFamily="Montserrat"
            color="#23282B"
          >
            POD production can involve minor variations. The following are
            generally not defects:
          </Typography>

          <Box ml={1}>
            <Typography
              fontSize={{xs: 14, sm: 16}}
              fontWeight={400}
              fontFamily="Montserrat"
              color="#23282B"
              sx={{
                "&::before": { content: '"• "' },
              }}
            >
              slight color differences due to screen settings, lighting, or
              normal print batch variation;
            </Typography>

            <Typography
              fontSize={{xs: 14, sm: 16}}
              fontWeight={400}
              fontFamily="Montserrat"
              color="#23282B"
              sx={{
                "&::before": { content: '"• "' },
              }}
            >
              minor alignment differences that do not materially affect the
              overall design;
            </Typography>

            <Typography
              fontSize={{xs: 14, sm: 16}}
              fontWeight={400}
              fontFamily="Montserrat"
              color="#23282B"
              sx={{
                "&::before": { content: '"• "' },
              }}
            >
              minor size variance within standard manufacturing tolerances;
            </Typography>

            <Typography
              fontSize={{xs: 14, sm: 16}}
              fontWeight={400}
              fontFamily="Montserrat"
              color="#23282B"
              sx={{
                "&::before": { content: '"• "' },
              }}
            >
              hand-feel differences between fabric batches of the same listed
              material.
            </Typography>
          </Box>

          <Typography
            fontSize={{xs: 14, sm: 16}}
            fontWeight={400}
            fontFamily="Montserrat"
            color="#23282B"
          >
            If a print is materially misaligned, clearly misprinted, mislabeled,
            or materially different from what was ordered, it may qualify under
            Section 6.1.
          </Typography>

          <Typography
            fontSize={{xs: 18, sm: 24}}
            fontWeight={700}
            fontFamily="Montserrat"
            color="#23282B"
          >
            9. Wrong item, wrong size, wrong address — specific rules
          </Typography>

          <Typography
            fontSize={{xs: 14, sm: 16}}
            fontWeight={400}
            fontFamily="Montserrat"
            color="#23282B"
          >
            These windows help us investigate with carriers and fulfilment
            partners. If you miss a window, contact us anyway—we will still
            consider requests where required by law or where it is reasonable to
            do so.
          </Typography>

          <Typography
            fontSize={{xs: 14, sm: 16}}
            fontWeight={600}
            fontFamily="Montserrat"
            color="#23282B"
          >
            9.1 If we shipped the wrong item
          </Typography>

          <Typography
            fontSize={{xs: 14, sm: 16}}
            fontWeight={400}
            fontFamily="Montserrat"
            color="#23282B"
          >
            If we sent the wrong Product compared to your order confirmation, we
            will provide a replacement at no cost and/or a refund, as
            appropriate.
          </Typography>

          <Typography
            fontSize={{xs: 14, sm: 16}}
            fontWeight={600}
            fontFamily="Montserrat"
            color="#23282B"
          >
            9.2 If you selected the wrong size
          </Typography>

          <Typography
            fontSize={{xs: 14, sm: 16}}
            fontWeight={400}
            fontFamily="Montserrat"
            color="#23282B"
          >
            Wrong size selection is generally <strong>not eligible</strong> for
            return/refund for POD Products unless we explicitly offered size
            exchanges for that Product/category at checkout or on the product
            page.
          </Typography>

          <Typography
            fontSize={{xs: 14, sm: 16}}
            fontWeight={600}
            fontFamily="Montserrat"
            color="#23282B"
          >
            9.3 If the shipping address was wrong or incomplete
          </Typography>

          <Typography
            fontSize={{xs: 14, sm: 16}}
            fontWeight={400}
            fontFamily="Montserrat"
            color="#23282B"
          >
            You are responsible for entering the correct shipping address. If an
            order is returned to sender, undeliverable, or delivered incorrectly
            due to the address you provided:
          </Typography>

          <Box ml={1}>
            <Typography
              fontSize={{xs: 14, sm: 16}}
              fontWeight={400}
              fontFamily="Montserrat"
              color="#23282B"
              sx={{
                "&::before": { content: '"• "' },
              }}
            >
              reshipment may be possible, but{" "}
              <strong>reshipment fees may apply</strong>; and
            </Typography>

            <Typography
              fontSize={{xs: 14, sm: 16}}
              fontWeight={400}
              fontFamily="Montserrat"
              color="#23282B"
              sx={{
                "&::before": { content: '"• "' },
              }}
            >
              refunds may not be available if the item cannot be recovered.
            </Typography>
          </Box>

          <Typography
            fontSize={{xs: 18, sm: 24}}
            fontWeight={700}
            fontFamily="Montserrat"
            color="#23282B"
          >
            10. Wrong item, wrong size, wrong address — specific rules
          </Typography>

          <Typography
            fontSize={{xs: 14, sm: 16}}
            fontWeight={400}
            fontFamily="Montserrat"
            color="#23282B"
          >
            We take delivery issues seriously and follow a consistent process:
          </Typography>

          <Typography
            fontSize={{xs: 14, sm: 16}}
            fontWeight={600}
            fontFamily="Montserrat"
            color="#23282B"
          >
            10.1 Lost in transit (no delivery scan)
          </Typography>

          <Box ml={1}>
            <Typography
              fontSize={{xs: 14, sm: 16}}
              fontWeight={400}
              fontFamily="Montserrat"
              color="#23282B"
              sx={{
                "&::before": { content: '"• "' },
              }}
            >
              We will review tracking and may open a carrier investigation.
            </Typography>

            <Typography
              fontSize={{xs: 14, sm: 16}}
              fontWeight={400}
              fontFamily="Montserrat"
              color="#23282B"
              sx={{
                "&::before": { content: '"• "' },
              }}
            >
              If the carrier confirms loss (or the investigation supports loss),
              we will offer a replacement or refund as appropriate.
            </Typography>
          </Box>

          <Typography
            fontSize={{xs: 14, sm: 16}}
            fontWeight={600}
            fontFamily="Montserrat"
            color="#23282B"
          >
            10.2 Delivered but not received
          </Typography>

          <Typography
            fontSize={{xs: 14, sm: 16}}
            fontWeight={400}
            fontFamily="Montserrat"
            color="#23282B"
          >
            If tracking shows “delivered,” we may:
          </Typography>

          <Box ml={1}>
            <Typography
              fontSize={{xs: 14, sm: 16}}
              fontWeight={400}
              fontFamily="Montserrat"
              color="#23282B"
              sx={{
                "&::before": { content: '"• "' },
              }}
            >
              confirm the delivery address;
            </Typography>

            <Typography
              fontSize={{xs: 14, sm: 16}}
              fontWeight={400}
              fontFamily="Montserrat"
              color="#23282B"
              sx={{
                "&::before": { content: '"• "' },
              }}
            >
              ask you to check with household members/neighbours/building
              management;
            </Typography>

            <Typography
              fontSize={{xs: 14, sm: 16}}
              fontWeight={400}
              fontFamily="Montserrat"
              color="#23282B"
              sx={{
                "&::before": { content: '"• "' },
              }}
            >
              request any available delivery details; and
            </Typography>

            <Typography
              fontSize={{xs: 14, sm: 16}}
              fontWeight={400}
              fontFamily="Montserrat"
              color="#23282B"
              sx={{
                "&::before": { content: '"• "' },
              }}
            >
              open a carrier investigation where appropriate.
            </Typography>
          </Box>

          <Typography
            fontSize={{xs: 14, sm: 16}}
            fontWeight={400}
            fontFamily="Montserrat"
            color="#23282B"
          >
            Outcomes depend on the investigation results, carrier policies, and
            applicable law. Where we reasonably confirm misdelivery or loss, we
            will offer a replacement or refund as appropriate.
          </Typography>

          <Typography
            fontSize={{xs: 14, sm: 16}}
            fontWeight={400}
            fontFamily="Montserrat"
            color="#23282B"
          >
            <strong>Note</strong>: Risk of loss generally transfers upon
            delivery to you (see Terms of Sale), subject to mandatory consumer
            rights.
          </Typography>
        </>
        <>
          <Typography
            fontSize={{xs: 18, sm: 24}}
            fontWeight={700}
            fontFamily="Montserrat"
            color="#23282B"
          >
            11. Returns shipping and whether you must send the item back
          </Typography>

          <Typography
            fontSize={{xs: 14, sm: 16}}
            fontWeight={400}
            fontFamily="Montserrat"
            color="#23282B"
          >
            Whether you must return an item depends on the issue and legal
            requirements.
          </Typography>

          <Typography
            fontSize={{xs: 14, sm: 16}}
            fontWeight={600}
            fontFamily="Montserrat"
            color="#23282B"
          >
            11.1 Faulty/damaged/wrong item (our error)
          </Typography>

          <Box ml={1}>
            <Typography
              fontSize={{xs: 14, sm: 16}}
              fontWeight={400}
              fontFamily="Montserrat"
              color="#23282B"
              sx={{
                "&::before": { content: '"• "' },
              }}
            >
              We may not require a return and may resolve the claim based on
              evidence.
            </Typography>

            <Typography
              fontSize={{xs: 14, sm: 16}}
              fontWeight={400}
              fontFamily="Montserrat"
              color="#23282B"
              sx={{
                "&::before": { content: '"• "' },
              }}
            >
              If a return is required, we will provide instructions. Where
              permitted by law, we will cover reasonable return shipping costs
              or provide a prepaid method for verified faults or wrong items.
            </Typography>
          </Box>

          <Typography
            fontSize={{xs: 14, sm: 16}}
            fontWeight={600}
            fontFamily="Montserrat"
            color="#23282B"
          >
            11.2 Change-of-mind returns (only if offered)
          </Typography>

          <Typography
            fontSize={{xs: 14, sm: 16}}
            fontWeight={400}
            fontFamily="Montserrat"
            color="#23282B"
          >
            If a change-of-mind return is offered for a specific
            Product/category, return shipping responsibilities will be stated at
            the point of offer. Unless stated otherwise, you are responsible for
            return shipping.
          </Typography>

          <Typography
            fontSize={{xs: 14, sm: 16}}
            fontWeight={600}
            fontFamily="Montserrat"
            color="#23282B"
          >
            11.3 No unauthorized returns
          </Typography>

          <Typography
            fontSize={{xs: 14, sm: 16}}
            fontWeight={400}
            fontFamily="Montserrat"
            color="#23282B"
          >
            Do not send items back unless we provide return instructions.
            Unauthorised returns may be lost and may not be processed.
          </Typography>

          <Typography
            fontSize={{xs: 18, sm: 24}}
            fontWeight={700}
            fontFamily="Montserrat"
            color="#23282B"
          >
            12. Refunds: method and timing
          </Typography>

          <Typography
            fontSize={{xs: 14, sm: 16}}
            fontWeight={400}
            fontFamily="Montserrat"
            color="#23282B"
          >
            Refunds: method and timing
          </Typography>

          <Box ml={1}>
            <Typography
              fontSize={{xs: 14, sm: 16}}
              fontWeight={400}
              fontFamily="Montserrat"
              color="#23282B"
              sx={{
                "&::before": { content: '"• "' },
              }}
            >
              refunds are issued to the original payment method unless required
              otherwise by law;
            </Typography>

            <Typography
              fontSize={{xs: 14, sm: 16}}
              fontWeight={400}
              fontFamily="Montserrat"
              color="#23282B"
              sx={{
                "&::before": { content: '"• "' },
              }}
            >
              processing times vary by provider and may take 5–10 business days
              (sometimes longer).
            </Typography>
          </Box>

          <Typography
            fontSize={{xs: 14, sm: 16}}
            fontWeight={400}
            fontFamily="Montserrat"
            color="#23282B"
          >
            <strong>Shipping fees</strong>: shipping charges are generally
            non-refundable unless required by law or the refund is due to our
            error or a verified fault.
          </Typography>
        </>
        <>
          <Typography
            fontSize={{xs: 18, sm: 24}}
            fontWeight={700}
            fontFamily="Montserrat"
            color="#23282B"
          >
            13. United Kingdom — cancellation rights and POD mechanics (Consumer
            Contracts Regulations)
          </Typography>

          <Typography
            fontSize={{xs: 14, sm: 16}}
            fontWeight={400}
            fontFamily="Montserrat"
            color="#23282B"
          >
            If you are a <strong>UK consumer</strong>, you may have a legal
            right to cancel your purchase within <strong>14 days</strong> of
            receiving the goods (the “cooling-off period”) under the Consumer
            Contracts Regulations, <strong>unless an exception applies</strong>.
          </Typography>

          <Typography
            fontSize={{xs: 14, sm: 16}}
            fontWeight={600}
            fontFamily="Montserrat"
            color="#23282B"
          >
            13.1 When the UK cancellation right does not apply (Custom /
            Personalised / Made-to-spec)
          </Typography>

          <Typography
            fontSize={{xs: 14, sm: 16}}
            fontWeight={400}
            fontFamily="Montserrat"
            color="#23282B"
          >
            The 14-day cancellation right typically does <strong>not</strong>{" "}
            apply to goods that are{" "}
            <strong>made to your specifications or clearly personalised</strong>
            .
          </Typography>

          <Typography
            fontSize={{xs: 14, sm: 16}}
            fontWeight={400}
            fontFamily="Montserrat"
            color="#23282B"
          >
            Examples include Products that contain your custom text,
            personalisation, or other bespoke configurations you selected.
          </Typography>

          <Typography
            fontSize={{xs: 14, sm: 16}}
            fontWeight={600}
            fontFamily="Montserrat"
            color="#23282B"
          >
            13.2 When the UK cancellation right may apply (non-personalised
            goods)
          </Typography>

          <Typography
            fontSize={{xs: 14, sm: 16}}
            fontWeight={400}
            fontFamily="Montserrat"
            color="#23282B"
          >
            If the Product is not custom/personalised/made-to-spec, the
            cancellation right may apply.
          </Typography>

          <Typography
            fontSize={{xs: 14, sm: 16}}
            fontWeight={400}
            fontFamily="Montserrat"
            color="#23282B"
          >
            If you cancel under the cooling-off period:
          </Typography>

          <Box ml={1}>
            <Typography
              fontSize={{xs: 14, sm: 16}}
              fontWeight={400}
              fontFamily="Montserrat"
              color="#23282B"
              sx={{
                "&::before": { content: '"• "' },
              }}
            >
              You must notify us within <strong>14 days of delivery</strong>{" "}
              using the support channel.
            </Typography>

            <Typography
              fontSize={{xs: 14, sm: 16}}
              fontWeight={400}
              fontFamily="Montserrat"
              color="#23282B"
              sx={{
                "&::before": { content: '"• "' },
              }}
            >
              You must return the goods within <strong>14 days</strong> of
              notifying us of cancellation.
            </Typography>

            <Typography
              fontSize={{xs: 14, sm: 16}}
              fontWeight={400}
              fontFamily="Montserrat"
              color="#23282B"
              sx={{
                "&::before": { content: '"• "' },
              }}
            >
              Unless we state otherwise, you are responsible for the{" "}
              <strong>cost of return shipping</strong>.
            </Typography>

            <Typography
              fontSize={{xs: 14, sm: 16}}
              fontWeight={400}
              fontFamily="Montserrat"
              color="#23282B"
              sx={{
                "&::before": { content: '"• "' },
              }}
            >
              We may reduce your refund if the goods show handling beyond what
              is necessary to inspect them.
            </Typography>
          </Box>

          <Typography
            fontSize={{xs: 14, sm: 16}}
            fontWeight={600}
            fontFamily="Montserrat"
            color="#23282B"
          >
            13.3 UK refund timing for cancellations
          </Typography>

          <Typography
            fontSize={{xs: 14, sm: 16}}
            fontWeight={400}
            fontFamily="Montserrat"
            color="#23282B"
          >
            Where the cancellation right applies, we will process the refund
            <strong>within 14 days</strong> of receiving the returned goods or
            evidence that you have sent them back (whichever is earlier), in
            line with legal requirements.
          </Typography>

          <Typography
            fontSize={{xs: 14, sm: 16}}
            fontWeight={400}
            fontFamily="Montserrat"
            color="#23282B"
          >
            If you chose expedited delivery, we refund only the standard
            delivery cost (where required by law).
          </Typography>

          <Typography
            fontSize={{xs: 14, sm: 16}}
            fontWeight={600}
            fontFamily="Montserrat"
            color="#23282B"
          >
            13.4 Faulty goods remain covered
          </Typography>

          <Typography
            fontSize={{xs: 14, sm: 16}}
            fontWeight={400}
            fontFamily="Montserrat"
            color="#23282B"
          >
            Even if cancellation does not apply (e.g., custom/personalised
            items), you still have UK statutory rights if goods are{" "}
            <strong>faulty</strong> or <strong>not as described</strong>.
          </Typography>

          <Typography
            fontSize={{xs: 18, sm: 24}}
            fontWeight={700}
            fontFamily="Montserrat"
            color="#23282B"
          >
            14. Australia — consumer guarantees (ACL)
          </Typography>

          <Typography
            fontSize={{xs: 14, sm: 16}}
            fontWeight={400}
            fontFamily="Montserrat"
            color="#23282B"
          >
            Our goods come with guarantees that cannot be excluded under the
            <strong>Australian Consumer Law</strong>. You are entitled to:
          </Typography>

          <Box ml={1}>
            <Typography
              fontSize={{xs: 14, sm: 16}}
              fontWeight={400}
              fontFamily="Montserrat"
              color="#23282B"
              sx={{
                "&::before": { content: '"• "' },
              }}
            >
              a replacement or refund for a <strong>major failure</strong>, and
              compensation for other reasonably foreseeable loss or damage; and
            </Typography>

            <Typography
              fontSize={{xs: 14, sm: 16}}
              fontWeight={400}
              fontFamily="Montserrat"
              color="#23282B"
              sx={{
                "&::before": { content: '"• "' },
              }}
            >
              repair or replacement within a reasonable time if the failure is
              not major.
            </Typography>
          </Box>

          <Typography
            fontSize={{xs: 14, sm: 16}}
            fontWeight={400}
            fontFamily="Montserrat"
            color="#23282B"
          >
            This Policy does not limit your ACL rights.
          </Typography>
        </>
        <>
          <Typography
            fontSize={{xs: 18, sm: 24}}
            fontWeight={700}
            fontFamily="Montserrat"
            color="#23282B"
          >
            15. Canada — consumer rights
          </Typography>

          <Typography
            fontSize={{xs: 14, sm: 16}}
            fontWeight={400}
            fontFamily="Montserrat"
            color="#23282B"
          >
            You may have non-waivable rights under applicable provincial
            consumer protection laws. This Policy does not limit those rights.
          </Typography>

          <Typography
            fontSize={{xs: 18, sm: 24}}
            fontWeight={700}
            fontFamily="Montserrat"
            color="#23282B"
          >
            16. Customs duties, import taxes, and cross-border fees
          </Typography>

          <Typography
            fontSize={{xs: 14, sm: 16}}
            fontWeight={400}
            fontFamily="Montserrat"
            color="#23282B"
          >
            International orders may be subject to customs duties, import taxes,
            brokerage fees, or other charges imposed by your jurisdiction.
            Unless explicitly stated otherwise at checkout, these charges are
            your responsibility and are generally non-refundable, except where
            the carrier or tax authority refunds them or where required by law.
          </Typography>

          <Typography
            fontSize={{xs: 18, sm: 24}}
            fontWeight={700}
            fontFamily="Montserrat"
            color="#23282B"
          >
            17. Fraud, abuse, and bad-faith claims
          </Typography>

          <Typography
            fontSize={{xs: 14, sm: 16}}
            fontWeight={400}
            fontFamily="Montserrat"
            color="#23282B"
          >
            We may refuse or limit remedies where we reasonably believe there is
            fraud or misuse, such as repeated claims inconsistent with evidence,
            intentional damage, or bad-faith dispute behavior, to the extent
            permitted by law. This does not limit your statutory rights.
          </Typography>

          <Typography
            fontSize={{xs: 18, sm: 24}}
            fontWeight={700}
            fontFamily="Montserrat"
            color="#23282B"
          >
            18. Contact
          </Typography>

          <Box>
            <Typography
              fontSize={{xs: 14, sm: 16}}
              fontWeight={400}
              fontFamily="Montserrat"
              color="#23282B"
            >
              To start a return/refund request or ask questions, use the{" "}
              <strong>support channel on pendowears.com</strong>.
            </Typography>

            <Typography
              fontSize={{xs: 14, sm: 16}}
              fontWeight={400}
              fontFamily="Montserrat"
              color="#23282B"
            >
              For privacy requests:{" "}
              <LinkTo to="mailto:privacy@pendowears.com">
                privacy@pendowears.com
              </LinkTo>
            </Typography>

            <Typography
              fontSize={{xs: 14, sm: 16}}
              fontWeight={400}
              fontFamily="Montserrat"
              color="#23282B"
            >
              For legal notices:{" "}
              <LinkTo to="mailto:legal@pendowears.com">
                legal@pendowears.com
              </LinkTo>
            </Typography>
          </Box>

          <Typography
            fontSize={{xs: 18, sm: 24}}
            fontWeight={700}
            fontFamily="Montserrat"
            color="#23282B"
          >
            19. Security
          </Typography>

          <Typography
            fontSize={{xs: 14, sm: 16}}
            fontWeight={400}
            fontFamily="Montserrat"
            color="#23282B"
          >
            We maintain reasonable administrative, technical, and organisational
            safeguards designed to protect personal information, including
            access controls and security monitoring. No system is perfectly
            secure; we cannot guarantee absolute security.
          </Typography>

          <Typography
            fontSize={{xs: 18, sm: 24}}
            fontWeight={700}
            fontFamily="Montserrat"
            color="#23282B"
          >
            20. U.S. State Privacy Notice (supplement)
          </Typography>

          <Typography
            fontSize={{xs: 14, sm: 16}}
            fontWeight={400}
            fontFamily="Montserrat"
            color="#23282B"
          >
            This section supplements the Policy for residents of U.S. states
            with privacy laws (e.g., California, Colorado, Connecticut, Utah,
            Virginia, and others).
          </Typography>

          <Typography
            fontSize={{xs: 14, sm: 16}}
            fontWeight={600}
            fontFamily="Montserrat"
            color="#23282B"
          >
            Categories of personal information collected
          </Typography>

          <Typography
            fontSize={{xs: 14, sm: 16}}
            fontWeight={400}
            fontFamily="Montserrat"
            color="#23282B"
          >
            We may collect:
          </Typography>

          <Box ml={1}>
            <Typography
              fontSize={{xs: 14, sm: 16}}
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
              fontSize={{xs: 14, sm: 16}}
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
              fontSize={{xs: 14, sm: 16}}
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
              fontSize={{xs: 14, sm: 16}}
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
              fontSize={{xs: 14, sm: 16}}
              fontWeight={400}
              fontFamily="Montserrat"
              color="#23282B"
              sx={{
                "&::before": { content: '"• "' },
              }}
            >
              inferences (preferences, likely interests based on interactions);
            </Typography>

            <Typography
              fontSize={{xs: 14, sm: 16}}
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
            fontSize={{xs: 14, sm: 16}}
            fontWeight={600}
            fontFamily="Montserrat"
            color="#23282B"
          >
            Purposes
          </Typography>
          <Typography
            fontSize={{xs: 14, sm: 16}}
            fontWeight={400}
            fontFamily="Montserrat"
            color="#23282B"
          >
            See Section 5.
          </Typography>
          <Typography
            fontSize={{xs: 14, sm: 16}}
            fontWeight={600}
            fontFamily="Montserrat"
            color="#23282B"
          >
            Categories of recipients
          </Typography>
          <Typography
            fontSize={{xs: 14, sm: 16}}
            fontWeight={400}
            fontFamily="Montserrat"
            color="#23282B"
          >
            See Section 9.
          </Typography>
          <Typography
            fontSize={{xs: 14, sm: 16}}
            fontWeight={600}
            fontFamily="Montserrat"
            color="#23282B"
          >
            “Sale” / “Sharing” / targeted advertising
          </Typography>
          <Typography
            fontSize={{xs: 14, sm: 16}}
            fontWeight={400}
            fontFamily="Montserrat"
            color="#23282B"
          >
            We do not sell personal information for money. We may share certain
            information with advertising partners for targeted advertising
            (subject to your choices), which may be treated as “sharing” under
            some laws.
          </Typography>
          <Typography
            fontSize={{xs: 14, sm: 16}}
            fontWeight={600}
            fontFamily="Montserrat"
            color="#23282B"
          >
            Your U.S. rights
          </Typography>
          <Typography
            fontSize={{xs: 14, sm: 16}}
            fontWeight={400}
            fontFamily="Montserrat"
            color="#23282B"
          >
            Where applicable: access/know, delete, correct, portability, opt-out
            of targeted advertising/sharing, non-discrimination, and appeal (see
            Section 11E).
          </Typography>
          <Typography
            fontSize={{xs: 18, sm: 24}}
            fontWeight={700}
            fontFamily="Montserrat"
            color="#23282B"
          >
            21. Changes to this Policy
          </Typography>
          <Typography
            fontSize={{xs: 14, sm: 16}}
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
            fontSize={{xs: 18, sm: 24}}
            fontWeight={700}
            fontFamily="Montserrat"
            color="#23282B"
          >
            Contact (privacy requests, questions, complaints)
          </Typography>
          <Typography
            fontSize={{xs: 14, sm: 16}}
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
      </Box>
    </Box>
  );
};

export default RefundPolicy;
