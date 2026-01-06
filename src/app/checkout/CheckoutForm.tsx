"use client";

import { icons } from "@/src/assets/icons/icons";
import { useAuth } from "@/src/context/AuthContext";
import { formatPrice, getCountryData } from "@/src/lib/priceFormatter";
import { Box, Typography } from "@mui/material";
import {
  CardElement,
  useStripe,
  useElements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from "@stripe/react-stripe-js";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { SyncVariant } from "@/src/lib/types";
import { productsEndpoint } from "@/src/lib/endpoints";

interface Props {
  amount: number; // in cents
}

export default function CheckoutForm({ amount }: Props) {
  const router = useRouter();
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [stripeCustomerId, setStripeCustomerId] = useState("");
  const { fireAlert } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const raw =
      typeof window !== "undefined"
        ? localStorage.getItem("cart") || "[]"
        : "[]";
    // const cart: SyncVariant[] = JSON.parse(raw);

    if (!stripe || !elements) {
      fireAlert("Stripe has not loaded yet.", "error");
      setLoading(false);
      return;
    }

    if (!amount) throw new Error("Invalid amount.");

    const profile =
      typeof window !== "undefined"
        ? localStorage.getItem("user") || "null"
        : "null";
    const userData = JSON.parse(profile);

    const allCart = JSON.parse(raw);
    const userCountry = await getCountryData();

    if (!userData.id || allCart.length === 0) return;

    const orderPayload = {
      userId: userData.id,
      recipient: {
        name: `${userData?.first_name || ""} ${userData?.last_name || ""}`,
        address1: userData?.billing?.address_1 || "",
        state_name: userData?.billing?.state || "",
        city: userData?.billing?.state || "",
        country_code: userCountry?.iso2 || "",
        country_name: userCountry?.name || "",
        zip: userData?.billing?.postcode || "",
        phone: userCountry?.phone_code + userData?.billing?.phone || "",
        email: userData?.email || "",
      },
      items: allCart,
    };

    const order: any = await productsEndpoint.createOrder(orderPayload);

    if (order.success) {
      try {
        // 1️⃣ Create PaymentIntent on the server
        const { data } = await axios.post("/api/payment-intent", {
          amount,
          user: {
            email: user?.email!,
            name: `${user?.first_name || ""} ${user?.last_name || ""}`,
            userId: user?.id,
            phone: user?.phone_number,
            country: user?.billing?.countryName,
            stripeCustomerId,
          },
          orderId: `${order.data.id}`,
        });

        if (typeof window !== "undefined") {
          localStorage.setItem(
            "stripeCustomerId",
            JSON.stringify(data.customerId)
          );
        }
        const clientSecret = data.clientSecret;

        if (!clientSecret) throw new Error("No client secret returned.");

        // 2️⃣ Confirm the card payment
        const cardNumber = elements.getElement(CardNumberElement);
        const cardExpiry = elements.getElement(CardExpiryElement);
        const cardCvc = elements.getElement(CardCvcElement);

        if (!cardNumber || !cardExpiry || !cardCvc) {
          throw new Error("One of the card elements is missing");
          return;
        }

        const { error: stripeError, paymentIntent } =
          await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
              card: cardNumber,
              billing_details: {
                email: user.email,
                name: user.name,
              },
            },
          });

        if (stripeError) throw stripeError;

        if (paymentIntent?.status === "succeeded") {
          router.replace(`/order-confirmation?order=${order.data.id}`);
          fireAlert("Payment successful!", "success");
        }
      } catch (err: any) {
        fireAlert(err.message || "Payment failed.", "error");
      } finally {
        setLoading(false);
        if (typeof window !== "undefined") {
          localStorage.removeItem("cart");
        }
      }
    }
  };

  useEffect(() => {
    const storedUser =
      typeof window !== "undefined" ? localStorage.getItem("user") : "";
    const storedStripeCustomerId =
      typeof window !== "undefined"
        ? localStorage.getItem("stripeCustomerId")
        : "";
    if (storedStripeCustomerId) {
      setStripeCustomerId(JSON.parse(storedStripeCustomerId));
    }
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <form onSubmit={handleSubmit} style={{}}>
      <Box
        display="flex"
        flexDirection={"column"}
        gap="20px"
        mb="45px"
        width="100%"
      >
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
          <Box
            border="1px solid #00000010"
            px="18px"
            borderRadius={"100px"}
            height="56px"
            position="relative"
          >
            <CardNumberElement
              options={{
                style: {
                  base: {
                    fontSize: "16px",
                    lineHeight: "56px",

                    color: "#111",
                    fontFamily: "Montserrat",
                    "::placeholder": {
                      color: "#9ca3af",
                      fontFamily: "Montserrat",
                    },
                  },
                  invalid: {
                    color: "#ef4444",
                  },
                },
              }}
            />
            <Image
              src={icons.visa}
              alt="visa"
              width="27"
              height="24"
              style={{
                objectFit: "contain",
                position: "absolute",
                right: "90px",
                top: "50%",
                transform: "translateY(-50%)",
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
                top: "50%",
                transform: "translateY(-50%)",
                right: "66px",
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
                top: "50%",
                transform: "translateY(-50%)",
                right: "42px",
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
                top: "50%",
                transform: "translateY(-50%)",
                right: "18px",
                zIndex: 6,
              }}
            />
          </Box>
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
          <Box
            border="1px solid #00000010"
            px="18px"
            borderRadius={"100px"}
            height="56px"
          >
            <CardExpiryElement
              options={{
                style: {
                  base: {
                    fontSize: "16px",
                    lineHeight: "56px",

                    color: "#111",
                    fontFamily: "Montserrat",
                    "::placeholder": {
                      color: "#9ca3af",
                      fontFamily: "Montserrat",
                    },
                  },
                  invalid: {
                    color: "#ef4444",
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
          <Box display="flex" alignItems={"center"} gap="10px" width="100%">
            <Box
              width="100%"
              border="1px solid #00000010"
              px="18px"
              borderRadius={"100px"}
              height="56px"
            >
              <CardCvcElement
                options={{
                  style: {
                    base: {
                      fontSize: "16px",
                      lineHeight: "56px",

                      color: "#111",
                      fontFamily: "Montserrat",
                      "::placeholder": {
                        color: "#9ca3af",
                        fontFamily: "Montserrat",
                      },
                    },
                    invalid: {
                      color: "#ef4444",
                    },
                  },
                }}
              />
            </Box>
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
        component="button"
        type="submit"
        width="50%"
        height="57px"
        bgcolor="#000"
        borderRadius={"100px"}
        display="flex"
        alignItems={"center"}
        justifyContent={"center"}
        sx={{ cursor: "pointer" }}
      >
        <Typography
          fontSize={16}
          fontFamily={"Montserrat"}
          fontWeight={700}
          color="#FFFFFF"
          width="fit-content"
          sx={{ whiteSpace: "noWrap" }}
        >
          {loading ? "Processing..." : `Pay ${formatPrice(amount)}`}
        </Typography>
      </Box>
      {/* <button
        type="submit"
        disabled={loading || !stripe}
        style={{ marginTop: 20 }}
      >
        {loading ? "Processing..." : "Pay Now"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>Payment successful!</p>} */}
    </form>
  );
}
