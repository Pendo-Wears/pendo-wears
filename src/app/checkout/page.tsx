"use client";

import { Box, TextField, Typography } from "@mui/material";
import React, { Activity, useEffect, useState } from "react";
import StripeWrapper from "./StripeWrapper";
import RequireAuth from "@/src/components/RequireAuth";
import { useAuth } from "@/src/context/AuthContext";
import { formatPrice, getCountryData } from "@/src/lib/priceFormatter";
import FlutterwavePayButton from "./FlutterWavePayment";
import { redirect, useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
import { CartItem } from "../cart/page";
import { productsEndpoint } from "@/src/lib/endpoints";
import Image from "next/image";
import { icons } from "@/src/assets/icons/icons";
import { SyncVariant } from "@/src/lib/types";

const Checkout = () => {
  const router = useRouter();
  const params = useSearchParams();
  const { amount, fireAlert, user, setUser, shipping } = useAuth();
  const [country, setCountry] = useState<any>(null);

  const [cartItems, setCartItems] = useState<SyncVariant[]>([]);
  const [tax, setTax] = useState(0);
  const [shippingFee, setShippingFee] = useState(0);

  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryMonth, setExpiryMonth] = useState("");
  const [expiryYear, setExpiryYear] = useState("");
  const [cvc, setCvc] = useState("");
  const [loading, setLoading] = useState(false);

  const pay = async () => {
    setLoading(true);
    try {
      const response = await payWithFlutterwave();
      // console.log(response, "RESPONSEEEEE");
    } catch (err: any) {
      // console.log(err);
      fireAlert(
        err.response.data.error || err.message || "Payment failed",
        "error",
      );
    } finally {
      setLoading(false);
    }
  };

  const tractCheckout = () => {
    const CONSENT_KEY = "portfolio-consent-v1";
    const stored = localStorage.getItem(CONSENT_KEY);
    if (stored) {
      let currentConsent = JSON.parse(stored);
      if (currentConsent.analytics) {
        window.gtag("event", "begin_checkout", {
          currency: "USD",
          value: amount,
        });
      }
    }
  };

  // const payWithStripe = async () => {
  //   const paymentMethodId = "pm_card_visa"; // test ID

  //   const response = await axios.post("/api/payment-intent", {
  //     paymentMethodId,
  //     amount,
  //     currency: country?.country?.currency.toLowerCase(),
  //     redirect: `${window.location.origin}/order-confirmation`,
  //     receipt_email: user.email,
  //   });

  // console.log(response);
  // };

  // const createOrder = async () => {
  //   const allCart = getCart();
  //   const userCountry = await getCountryData();

  //   if (!userData.id || allCart.length === 0) return;

  //   try {
  //     setLoading(true);
  //     const orderPayload = {
  //       userId: userData.id,
  //       recipient: {
  //         name: `${userData?.first_name || ""} ${userData?.last_name || ""}`,
  //         address1: userData?.billing?.address_1 || "",
  //         state_name: userData?.billing?.state || "",
  //         city: userData?.billing?.state || "",
  //         country_code: usercountry?.country?.iso2 || "",
  //         country_name: usercountry?.country?.name || "",
  //         zip: userData?.billing?.postcode || "",
  //         phone: usercountry?.country?.phone_code + userData?.billing?.phone || "",
  //         email: userData?.email || "",
  //       },
  //       items: allCart,
  //     };

  //     const order: any = await productsEndpoint.createOrder(orderPayload);
  // console.log("Order created successfully:", order);
  //     if (order.success) {
  //       fireAlert(order.message, "success");
  //       localStorage.removeItem("cart");
  //     }
  //   } catch (error) {
  //     console.error("Error creating order:", error);
  //     fireAlert("Failed to create order", "error");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const payWithFlutterwave = async () => {
    const profile =
      typeof window !== "undefined"
        ? localStorage.getItem("user") || "null"
        : "null";
    const userData = JSON.parse(profile);

    const raw =
      typeof window !== "undefined"
        ? localStorage.getItem("cart") || "[]"
        : "[]";
    const allCart = JSON.parse(raw);

    if (!userData?.id) return;

    if (!amount) {
      fireAlert("Cannot perform transaction with 0 amount", "error");
      return;
    }

    try {
      const response = await axios.post("/api/flutterwave/pay", {
        tx_ref: `${crypto.randomUUID()}`,
        amount: amount,
        currency: "NGN",
        email: user?.email || "",
        name: `${user?.first_name || ""} ${user?.last_name || ""}`,
        redirect_url:
          typeof window !== "undefined"
            ? `${window.location.origin}/order-confirmation`
            : "",
      });

      // console.log("response:", response);

      // ✅ NEW: Redirect user to Flutterwave checkout page
      const paymentLink = response.data?.link;

      if (paymentLink && typeof window !== "undefined") {
        window.location.href = paymentLink;
      } else {
        fireAlert("Unable to initialize payment", "error");
      }
    } catch (error: any) {
      console.error("Payment error:", error);
      fireAlert(
        error?.response?.data?.message || "Payment initialization failed",
        "error",
      );
    }
  };

  const getAllCart = () => {
    if (typeof window === "undefined") return [];
    const raw =
      typeof window !== "undefined"
        ? localStorage.getItem("cart") || "[]"
        : "[]";
    const result = JSON.parse(raw);
    setCartItems(result);
  };

  const [total, setTotal] = useState(0);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    const raw =
      typeof window !== "undefined"
        ? localStorage.getItem("cart") || "[]"
        : "[]";
    const cart = JSON.parse(raw);
    setCartItems(cart);

    const totalPrice = cart.reduce(
      (sum: number, item: any) => sum + item.retail_price * item.quantity,
      0,
    );

    const totalQty = cart.reduce(
      (sum: number, item: any) => sum + item.quantity,
      0,
    );

    setTotal(totalPrice);
    setQuantity(totalQty);
  }, []);

  const fetchCountryData = async () => {
    const countryData = await getCountryData(user?.billing?.country!);
    setCountry(countryData);
  };

  const handleVerify = async (flwRef: string, otp: string) => {
    try {
      const res = await axios.post("/api/flutterwave/verify", {
        flw_ref: flwRef,
        otp,
      });
      // console.log("OTP Verification response:", res.data);
    } catch (err: any) {
      console.error(
        "OTP Verification error:",
        err.response?.data || err.message,
      );
      fireAlert(err.response?.data || err.message, "error");
    }
  };
  // useEffect(() => {
  //   getAllCart();
  //   fetchCountryData();
  //   veriFyTransaction();
  //   createOrder();
  // }, [params]);

  const getUser = () => {
    const profile =
      typeof window !== "undefined"
        ? localStorage.getItem("user") || "null"
        : "null";
    setUser(JSON.parse(profile));
  };

  useEffect(() => {
    getUser();
    fetchCountryData();
    getAllCart();
  }, []);
  return (
    <RequireAuth>
      <Box px={{ xs: "16px", sm: "20px", md: "50px" }} pb="70px">
        <Box
          mb="45px"
          mt="40px"
          px={{ xs: 0, sm: "20px", md: "50px" }}
          display="flex"
          alignItems={"flex-start"}
          flexWrap={"wrap"}
          gap={{ xs: "30px", sm: "65px" }}
        >
          <Box
            flex={1}
            bgcolor={"#F9FAFB"}
            borderRadius={"15px"}
            py={{ xs: "25px", sm: "30px" }}
            px={{ xs: "16px", sm: "30px" }}
            border="1px solid #00000010"
          >
            {/* {country?.country?.region === "Africa" ? (
              <FlutterwavePayButton
                name={`${user?.first_name || ""} ${user?.last_name || ""}`}
                email={user?.email || ""}
                amount={amount}
              />
            ) : (
              <StripeWrapper amount={amount} />
            )} */}
            <Typography
              fontSize={{ xs: 18, sm: 24 }}
              fontFamily={"Montserrat"}
              color="#000"
              fontWeight={600}
              mb="45px"
            >
              Payment Information
            </Typography>

            {/* <Activity
              mode={
                country?.country?.region === "Africa" ? "hidden" : "visible"
              }
            >
              <StripeWrapper amount={amount} />
            </Activity> */}
            {/* <Activity
              mode={
                country?.country?.region === "Africa" ? "visible" : "hidden"
              }
            > */}
            <Box display="flex" flexDirection={"column"} gap="20px" mb="45px">
              {/* <Box width="100%">
                  <Typography
                    fontSize={16}
                    fontFamily={"Montserrat"}
                    color="#000"
                    fontWeight={500}
                    mb="10px"
                  >
                    Cardholder Name
                  </Typography>
                  <TextField
                    fullWidth
                    variant="outlined"
                    type={"text"}
                    placeholder="Card Name"
                    value={cardName || ""}
                    onChange={(e) => setCardName(e.target.value)}
                    sx={{
                      bgcolor: "transparent",
                      borderRadius: "100px",
                      border: "1px solid #00000010",
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderRadius: "8px",
                          border: "none", // remove border normally
                        },
                        "&:hover fieldset": {
                          borderRadius: "100px",
                          border: "1px solid transparent", // optional: show on hover
                        },
                        "&.Mui-focused fieldset": {
                          borderRadius: "100px",
                          border: "1px solid transparent", // show border on focus
                        },
                      },
                      input: {
                        fontFamily: "Montserrat",
                        px: "18px",
                        py: "18px",
                        borderRadius: "100px",
                        "&::placeholder": {
                          color: "#656565", // placeholder color
                          fontFamily: "Montserrat",
                          fontSize: "16px",
                          alignSelf: "center",
                          opacity: 1, // show placeholder fully
                        },
                      },
                    }}
                  />
                </Box> */}
              <Box width="100%">
                <Typography
                  fontSize={16}
                  fontFamily={"Montserrat"}
                  color="#000"
                  fontWeight={500}
                  mb="10px"
                >
                  Card Number
                </Typography>
                <TextField
                  fullWidth
                  variant="outlined"
                  type={"text"}
                  placeholder="Card Number"
                  value={cardNumber || ""}
                  onChange={(e) => setCardNumber(e.target.value)}
                  InputProps={{
                    endAdornment: (
                      <Box
                        display={{ xs: "none", sm: "flex" }}
                        alignItems={"center"}
                        gap="12px"
                        position="relative"
                      >
                        <Image
                          src={icons.visa}
                          alt="visa"
                          width="27"
                          height="24"
                          style={{
                            objectFit: "contain",
                            position: "absolute",
                            right: "72px",
                            zIndex: 3,
                          }}
                        />
                        <Image
                          src={icons.master}
                          alt="master"
                          width="27"
                          height="24"
                          style={{
                            objectFit: "contain",
                            position: "absolute",
                            right: "48px",
                            zIndex: 4,
                          }}
                        />
                        <Image
                          src={icons.express}
                          alt="express"
                          width="27"
                          height="24"
                          style={{
                            objectFit: "contain",
                            position: "absolute",
                            right: "24px",
                            zIndex: 5,
                          }}
                        />
                        <Image
                          src={icons.paypal}
                          alt="paypal"
                          width="27"
                          height="24"
                          style={{
                            objectFit: "contain",
                            position: "absolute",
                            right: 0,
                            zIndex: 6,
                          }}
                        />
                      </Box>
                    ),
                  }}
                  sx={{
                    bgcolor: "transparent",
                    borderRadius: "100px",
                    border: "1px solid #00000010",
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderRadius: "8px",
                        border: "none", // remove border normally
                      },
                      "&:hover fieldset": {
                        borderRadius: "100px",
                        border: "1px solid transparent", // optional: show on hover
                      },
                      "&.Mui-focused fieldset": {
                        borderRadius: "100px",
                        border: "1px solid transparent", // show border on focus
                      },
                    },
                    input: {
                      fontFamily: "Montserrat",
                      px: "18px",
                      py: "18px",
                      borderRadius: "100px",
                      "&::placeholder": {
                        color: "#656565", // placeholder color
                        fontFamily: "Montserrat",
                        fontSize: "16px",
                        alignSelf: "center",
                        opacity: 1, // show placeholder fully
                      },
                    },
                  }}
                />
              </Box>
              <Box width="100%">
                <Typography
                  fontSize={16}
                  fontFamily={"Montserrat"}
                  color="#000"
                  fontWeight={500}
                  mb="10px"
                >
                  Expiry Date
                </Typography>
                <Box display="flex" alignItems={"center"} gap="25px">
                  <TextField
                    fullWidth
                    variant="outlined"
                    type={"text"}
                    placeholder="MM"
                    value={expiryMonth || ""}
                    onChange={(e) => setExpiryMonth(e.target.value)}
                    sx={{
                      bgcolor: "transparent",
                      borderRadius: "100px",
                      border: "1px solid #00000010",
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderRadius: "8px",
                          border: "none", // remove border normally
                        },
                        "&:hover fieldset": {
                          borderRadius: "100px",
                          border: "1px solid transparent", // optional: show on hover
                        },
                        "&.Mui-focused fieldset": {
                          borderRadius: "100px",
                          border: "1px solid transparent", // show border on focus
                        },
                      },
                      input: {
                        fontFamily: "Montserrat",
                        px: "18px",
                        py: "18px",
                        borderRadius: "100px",
                        "&::placeholder": {
                          color: "#656565", // placeholder color
                          fontFamily: "Montserrat",
                          fontSize: "16px",
                          alignSelf: "center",
                          opacity: 1, // show placeholder fully
                        },
                      },
                    }}
                  />
                  <TextField
                    fullWidth
                    variant="outlined"
                    type={"text"}
                    placeholder="YY"
                    value={expiryYear || ""}
                    onChange={(e) => setExpiryYear(e.target.value)}
                    sx={{
                      bgcolor: "transparent",
                      borderRadius: "100px",
                      border: "1px solid #00000010",
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderRadius: "8px",
                          border: "none", // remove border normally
                        },
                        "&:hover fieldset": {
                          borderRadius: "100px",
                          border: "1px solid transparent", // optional: show on hover
                        },
                        "&.Mui-focused fieldset": {
                          borderRadius: "100px",
                          border: "1px solid transparent", // show border on focus
                        },
                      },
                      input: {
                        fontFamily: "Montserrat",
                        px: "18px",
                        py: "18px",
                        borderRadius: "100px",
                        "&::placeholder": {
                          color: "#656565", // placeholder color
                          fontFamily: "Montserrat",
                          fontSize: "16px",
                          alignSelf: "center",
                          opacity: 1, // show placeholder fully
                        },
                      },
                    }}
                  />
                </Box>
              </Box>
              <Box width={"50%"}>
                <Typography
                  fontSize={16}
                  fontFamily={"Montserrat"}
                  color="#000"
                  fontWeight={500}
                  mb="10px"
                >
                  CVV
                </Typography>
                <Box display="flex" alignItems={"center"} gap="10px">
                  <TextField
                    fullWidth
                    variant="outlined"
                    type={"text"}
                    placeholder="CVV"
                    value={cvc || ""}
                    onChange={(e) => setCvc(e.target.value)}
                    sx={{
                      bgcolor: "transparent",
                      borderRadius: "100px",
                      border: "1px solid #00000010",
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderRadius: "8px",
                          border: "none", // remove border normally
                        },
                        "&:hover fieldset": {
                          borderRadius: "100px",
                          border: "1px solid transparent", // optional: show on hover
                        },
                        "&.Mui-focused fieldset": {
                          borderRadius: "100px",
                          border: "1px solid transparent", // show border on focus
                        },
                      },
                      input: {
                        fontFamily: "Montserrat",
                        px: "18px",
                        py: "18px",
                        borderRadius: "100px",
                        "&::placeholder": {
                          color: "#656565", // placeholder color
                          fontFamily: "Montserrat",
                          fontSize: "16px",
                          alignSelf: "center",
                          opacity: 1, // show placeholder fully
                        },
                      },
                    }}
                  />
                  <Image
                    src={icons.info}
                    alt="info"
                    style={{ objectFit: "contain" }}
                    width="22"
                    height="22"
                  />
                </Box>
              </Box>
            </Box>
            <Box
              width="100%"
              maxWidth="300px"
              height="57px"
              bgcolor="#000"
              borderRadius={"100px"}
              display="flex"
              alignItems={"center"}
              justifyContent={"center"}
              sx={{
                cursor: "pointer",
                pointerEvents: loading ? "none" : "auto",
                opacity: loading ? 0.2 : 1,
              }}
              onClick={pay}
            >
              <Typography
                fontSize={16}
                fontFamily={"Montserrat"}
                fontWeight={700}
                color="#FFFFFF"
                width="fit-content"
                sx={{ whiteSpace: "noWrap" }}
              >
                Pay {loading ? "..." : formatPrice(amount)}
              </Typography>
            </Box>
            {/* </Activity> */}
          </Box>
          <Box
            width="403px"
            bgcolor={"#F9FAFB"}
            borderRadius={"15px"}
            py={{ xs: "25px", sm: "30px" }}
            px={{ xs: "16px", sm: "18px" }}
            border="1px solid #00000010"
          >
            <Box
              pb="24px"
              mb="24px"
              borderBottom="1px solid #00000010"
              display="flex"
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Typography
                fontSize={{ xs: 18, sm: 24 }}
                fontFamily={"Montserrat"}
                color="#000"
                fontWeight={600}
              >
                Summary
              </Typography>
              <Typography
                fontSize={14}
                fontFamily={"Montserrat"}
                color="#5C5C5C"
              >
                {quantity} Item in your bags
              </Typography>
            </Box>
            <Box display={"flex"} flexDirection={"column"} gap={"24px"}>
              {cartItems.map((cart, id) => (
                <Box key={id} pb="24px" borderBottom="1px solid #00000010">
                  <CartItem cart={cart} isCheckout />
                </Box>
              ))}
            </Box>
            <Box
              my={{ xs: "16px", sm: "37px" }}
              borderRadius={"10px"}
              // bgcolor="#E6E6E6"
              width="100%"
              // py="26px"
              // px={{xs: '16px', sm: "30px"}}
            >
              <Typography
                fontSize={{ xs: 18, sm: 24 }}
                fontFamily={"Montserrat"}
                color="#1A1A1A"
                fontWeight={500}
                mb="24px"
              >
                Order Summary
              </Typography>
              <Box
                display="flex"
                alignItems={"center"}
                justifyContent={"space-between"}
                mb="18px"
              >
                <Typography
                  fontSize={{ xs: 14, sm: 16 }}
                  fontFamily={"Montserrat"}
                  color="#1A1A1A"
                  fontWeight={500}
                >
                  Subtotal
                </Typography>
                <Typography
                  fontSize={{ xs: 14, sm: 16 }}
                  fontFamily={"Montserrat"}
                  color="#1A1A1A"
                  fontWeight={700}
                >
                  {formatPrice(Number(total))}
                </Typography>
              </Box>
              <Box
                display="flex"
                alignItems={"center"}
                justifyContent={"space-between"}
                mb="18px"
              >
                <Typography
                  fontSize={{ xs: 14, sm: 16 }}
                  fontFamily={"Montserrat"}
                  color="#1A1A1A"
                  fontWeight={500}
                >
                  Shipping
                </Typography>
                <Typography
                  fontSize={{ xs: 14, sm: 16 }}
                  fontFamily={"Montserrat"}
                  color="#16A34A"
                  fontWeight={700}
                >
                  {shipping === 0 ? "Free" : formatPrice(shipping)}
                </Typography>
              </Box>
              <Box
                display="flex"
                alignItems={"center"}
                justifyContent={"space-between"}
                mb="18px"
              >
                <Typography
                  fontSize={{ xs: 14, sm: 16 }}
                  fontFamily={"Montserrat"}
                  color="#1A1A1A"
                  fontWeight={500}
                >
                  Tax
                </Typography>
                <Typography
                  fontSize={{ xs: 14, sm: 16 }}
                  fontFamily={"Montserrat"}
                  color="#1A1A1A"
                  fontWeight={700}
                >
                  {formatPrice(tax)}
                </Typography>
              </Box>
              <Box
                display="flex"
                alignItems={"center"}
                justifyContent={"space-between"}
                mb="20px"
                pb={{ xs: "16px", sm: "37px" }}
                borderBottom={"1px solid #00000010"}
              >
                <Typography
                  fontSize={{ xs: 18, sm: 24 }}
                  fontFamily={"Montserrat"}
                  color="#1A1A1A"
                  fontWeight={700}
                >
                  Total
                </Typography>
                <Typography
                  fontSize={{ xs: 18, sm: 20 }}
                  fontFamily={"Montserrat"}
                  color="#1A1A1A"
                  fontWeight={700}
                >
                  {formatPrice(Number(total + tax + shippingFee))}
                </Typography>
              </Box>
              <Box
                display="flex"
                flexDirection={"column"}
                px={{ xs: 0, sm: "18px" }}
                mb={{ xs: 0, sm: "18px" }}
              >
                <Typography
                  fontSize={{ xs: 18, sm: 20 }}
                  fontFamily={"Montserrat"}
                  color="#000"
                  fontWeight={500}
                >
                  Shipping Address
                </Typography>
                <Typography
                  fontSize={16}
                  fontFamily={"Montserrat"}
                  color="#2E3033"
                >
                  {`${user?.billing?.address_1 || ""} ${
                    user?.billing?.state || ""
                  }, ${country?.country?.name || ""}`}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </RequireAuth>
  );
};

export default Checkout;
