"use client";

import React, { useEffect, useRef, useState } from "react";
import { CartItem } from "../cart/page";
import { formatPrice, getCountryData } from "@/src/lib/priceFormatter";
import { productsEndpoint } from "@/src/lib/endpoints";
import { useAuth } from "@/src/context/AuthContext";
import { useRouter, useSearchParams } from "next/navigation";
import { Box, CircularProgress, Typography } from "@mui/material";
import RequireAuth from "@/src/components/RequireAuth";
import Image from "next/image";
import { icons } from "@/src/assets/icons/icons";

const OrderConfirmation = () => {
  const { fireAlert, user } = useAuth();
  const router = useRouter();

  const searchParams = useSearchParams();
  const [responseData, setResponseData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [orderDetails, setOrderDetails] = useState<any | null>(null);

  const getAllCart = () => {
    if (typeof window === "undefined") return [];
    const raw =
      typeof window !== "undefined"
        ? localStorage.getItem("cart") || "[]"
        : "[]";
    const result = JSON.parse(raw);
    setCartItems(result);
  };

  const createOrder = async () => {
    if (loading) return;

    let data;

    const encoded = searchParams.get("response");
    if (encoded) {
      try {
        const decoded = decodeURIComponent(encoded);
        data = JSON.parse(decoded);
        setResponseData(data);
        //  if (data.status === "successful" && data.txRef) {
        //    getOrderDetails(data.txRef.split("-")[1]);
        //  }
        console.log(data, "ORDER CONFIRMATION DATA");
      } catch (error) {
        console.error("Failed to parse response param:", error);
      }
    }

    console.log(data.txRef);

    // const profile =
    //   typeof window !== "undefined"
    //     ? localStorage.getItem("user") || "null"
    //     : "null";
    // const userData = JSON.parse(profile);
    const raw =
      typeof window !== "undefined"
        ? localStorage.getItem("cart") || "[]"
        : "[]";
    const allCart = JSON.parse(raw);
    const userCountry = await getCountryData(user?.billing?.country!);
    if (!user?.id || allCart.length === 0) return;

    try {
      setLoading(true);
      const orderPayload = {
        userId: user?.id,
        txRef: data?.txRef,
        paymentMethod:
          userCountry?.region === "Africa"
            ? "CARD | FLUTTERWAVE"
            : "CARD | STRIPE",
        recipient: {
          name: `${user?.first_name || ""} ${user?.last_name || ""}`,
          address1: user?.billing?.address_1 || "",
          state_name: user?.billing?.state || "",
          city: user?.billing?.state || "",
          country_code: userCountry?.iso2 || "",
          country_name: userCountry?.name || "",
          zip: user?.billing?.postcode || "",
          phone: userCountry?.phone_code! + user?.billing?.phone || "",
          email: user?.email || "",
        },
        items: allCart,
      };

      const order: any = await productsEndpoint.createOrder(orderPayload);
      console.log("Order created successfully:", order);
      if (order.success) {
        fireAlert(order.message, "success");
        setOrderDetails(order.data);
        localStorage.removeItem("cart");
        localStorage.setItem("orderId", order.data.id);
      }
    } catch (error: any) {
      console.error("Error creating order:", error);
      fireAlert(error.message, "error");
    } finally {
      setLoading(false);
    }
  };

  const getOrderDetails = async (id: string) => {
    if (loading) return;
    setLoading(true);
    try {
      const result: any = await productsEndpoint.getOrderDetails(id);
      if (result.success) {
        setOrderDetails(result.data);
      }
    } catch (e: any) {
      fireAlert(e.message, "error");
    } finally {
      setLoading(false);
    }
  };

  const onLoad = () => {
    const raw = localStorage.getItem("orderId");
    const id = raw ? JSON.parse(raw) : null;
    console.log(id, "ZXCVBNM");

    if (id === null) createOrder();
    else getOrderDetails(id);
  };

  const hasFetched = useRef(false);

  useEffect(() => {
    if (hasFetched.current) return;
    hasFetched.current = true;
    onLoad();
    getAllCart();
  }, []);
  return (
    <RequireAuth>
      {loading ? (
        <Box
          width="100%"
          height="100%"
          display="flex"
          alignItems={"center"}
          justifyContent={"center"}
          my="200px"
        >
          <CircularProgress />
        </Box>
      ) : (
        <Box px={{ xs: "16px", sm: "20px", md: "50px" }} pb="70px">
          <Box maxWidth={"1200px"} mx="auto">
            <Box
              width="100%"
              display="flex"
              flexDirection={"column"}
              alignItems={"center"}
            >
              <Image
                src={icons.success}
                alt="card image"
                width="80"
                height="80"
              />
              <Typography
                textAlign={"center"}
                fontSize={32}
                fontFamily={"Montserrat"}
                color="#1a1a1a"
                fontWeight={700}
                mt="40px"
                mb="12px"
                onClick={onLoad}
              >
                Order Confirmed!
              </Typography>
              <Typography
                textAlign={"center"}
                fontSize={20}
                fontFamily={"Montserrat"}
                color="#656565"
                fontWeight={400}
                mb="8px"
              >
                Thank you for your purchase,{" "}
                {orderDetails?.recipient?.name.split(" ")[0]}
              </Typography>
              <Typography
                textAlign={"center"}
                fontSize={16}
                fontFamily={"Montserrat"}
                color="#656565"
                fontWeight={500}
                mb="48px"
              >
                Your order has been successfully processed and is being prepared
                for shipment.
              </Typography>
            </Box>
            <Box
              mb={{ xs: 2, sm: "48px" }}
              //   px={{ xs: "16px", sm: "20px", md: "50px" }}
              display="flex"
              alignItems={"flex-start"}
              gap={{ xs: 2, sm: "32px" }}
              flexWrap={"wrap"}
            >
              <Box flex={1}>
                <Box
                  width="100%"
                  bgcolor={"#F9FAFB"}
                  borderRadius={"15px"}
                  py={{ xs: "16px", sm: "30px" }}
                  px={{ xs: "16px", sm: "30px" }}
                  border="1px solid #00000010"
                  mb={{ xs: "16px", sm: "24px" }}
                >
                  <Box
                    mb={{ xs: 2, sm: "24px" }}
                    display="flex"
                    alignItems={"center"}
                    justifyContent={"space-between"}
                  >
                    <Typography
                      fontSize={{ xs: 18, sm: 24 }}
                      fontFamily={"Montserrat"}
                      color="#000"
                      fontWeight={700}
                    >
                      Order Details
                    </Typography>
                    <Typography
                      fontSize={{ xs: 12, sm: 14 }}
                      fontFamily={"Montserrat"}
                      color="#5C5C5C"
                    >
                      Order #PF{orderDetails?.id}
                    </Typography>
                  </Box>
                  <Box display={"flex"} flexDirection={"column"} gap={"24px"}>
                    {orderDetails?.items.map((cart: any, id: number) => (
                      <Box key={id}>
                        <CartItem cart={cart} isConfirmed />
                      </Box>
                    ))}
                  </Box>
                </Box>
                <Box
                  flex={1}
                  bgcolor={"#F9FAFB"}
                  borderRadius={"15px"}
                  py={{ xs: "16px", sm: "30px" }}
                  px={{ xs: "16px", sm: "30px" }}
                  border="1px solid #00000010"
                >
                  <Box mb="10px">
                    <Typography
                      fontSize={{ xs: 18, sm: 24 }}
                      fontFamily={"Montserrat"}
                      color="#000"
                      fontWeight={600}
                    >
                      Shipping Information
                    </Typography>
                  </Box>
                  <Box
                    display={"flex"}
                    alignItems={"flex-start"}
                    justifyContent={"space-between"}
                    gap="8px"
                  >
                    <Box>
                      <Typography
                        fontSize={{ xs: 14, sm: 16 }}
                        fontWeight={500}
                        fontFamily={"Montserrat"}
                        color="#1A1A1A"
                        mb="12px"
                      >
                        Delivery Address
                      </Typography>
                      <Typography
                        fontSize={12}
                        fontWeight={400}
                        fontFamily={"Montserrat"}
                        color="#1A1A1A"
                        mb="8px"
                      >
                        {orderDetails?.recipient?.name}
                      </Typography>
                      <Typography
                        fontSize={12}
                        fontWeight={400}
                        fontFamily={"Montserrat"}
                        color="#1A1A1A"
                        mb="8px"
                      >
                        {orderDetails?.recipient?.address1}
                      </Typography>
                      <Typography
                        fontSize={12}
                        fontWeight={400}
                        fontFamily={"Montserrat"}
                        color="#1A1A1A"
                        mb="8px"
                      >
                        {orderDetails?.recipient?.city}
                      </Typography>
                      <Typography
                        fontSize={12}
                        fontWeight={400}
                        fontFamily={"Montserrat"}
                        color="#1A1A1A"
                        mb="8px"
                      >
                        {orderDetails?.recipient?.country_name}
                      </Typography>
                    </Box>
                    <Box
                      display={"flex"}
                      flexDirection={"column"}
                      alignItems={"flex-end"}
                      textAlign={"right"}
                    >
                      <Typography
                        fontSize={{ xs: 14, sm: 16 }}
                        fontWeight={500}
                        fontFamily={"Montserrat"}
                        color="#1A1A1A"
                        mb="12px"
                      >
                        Estimated Delivery
                      </Typography>
                      <Typography
                        fontSize={12}
                        fontWeight={400}
                        fontFamily={"Montserrat"}
                        color="#1A1A1A"
                        mb="8px"
                        textAlign={"right"}
                      >
                        {orderDetails?.shipping_service_name}
                      </Typography>
                      <Typography
                        fontSize={12}
                        fontWeight={400}
                        fontFamily={"Montserrat"}
                        color="#1A1A1A"
                        mb="8px"
                      >
                        {orderDetails?.shipping} Shipping
                      </Typography>
                      <Typography
                        fontSize={12}
                        fontWeight={400}
                        fontFamily={"Montserrat"}
                        color="#1A1A1A"
                        mb="8px"
                      >
                        Tracking will be provided via email
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box width={{ xs: "100%", md: "270px" }}>
                <Box
                  width="100%"
                  bgcolor={"#F9FAFB"}
                  borderRadius={"15px"}
                  py={{ xs: 2, sm: "30px" }}
                  px={{ xs: 2, sm: "18px" }}
                  border="1px solid #00000010"
                  mb={{ xs: 2, sm: "24px" }}
                >
                  <Typography
                    fontSize={{ xs: 18, sm: 24 }}
                    fontFamily={"Montserrat"}
                    color="#1A1A1A"
                    fontWeight={700}
                    mb={{ xs: 2, sm: "24px" }}
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
                      {formatPrice(orderDetails?.retail_costs?.subtotal)}
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
                      color="#1a1a1a"
                      fontWeight={700}
                    >
                      {formatPrice(orderDetails?.retail_costs?.shipping)}
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
                      {orderDetails?.retail_costs?.tax ?? 0}
                    </Typography>
                  </Box>
                  <Box
                    display="flex"
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    pb="42px"
                    mb="18px"
                    borderBottom={"1px solid #00000010"}
                  >
                    <Typography
                      fontSize={{ xs: 14, sm: 16 }}
                      fontFamily={"Montserrat"}
                      color="#16A34A"
                      fontWeight={500}
                    >
                      Discount
                    </Typography>
                    <Typography
                      fontSize={{ xs: 14, sm: 16 }}
                      fontFamily={"Montserrat"}
                      color="#16A34A"
                      fontWeight={700}
                    >
                      {formatPrice(orderDetails?.retail_costs?.discount)}
                    </Typography>
                  </Box>
                  <Box
                    display="flex"
                    alignItems={"center"}
                    justifyContent={"space-between"}
                  >
                    <Typography
                      fontSize={{ xs: 16, sm: 18 }}
                      fontFamily={"Montserrat"}
                      color="#1A1A1A"
                      fontWeight={700}
                    >
                      Total
                    </Typography>
                    <Typography
                      fontSize={{ xs: 16, sm: 18 }}
                      fontFamily={"Montserrat"}
                      color="#1A1A1A"
                      fontWeight={700}
                    >
                      {formatPrice(orderDetails?.retail_costs?.total)}
                    </Typography>
                  </Box>
                </Box>
                <Box
                  width="100%"
                  bgcolor={"#F9FAFB"}
                  borderRadius={"15px"}
                  py={{ xs: 2, sm: "30px" }}
                  px={{ xs: 2, sm: "18px" }}
                  border="1px solid #00000010"
                  mb={{ xs: 2, sm: "24px" }}
                >
                  <Typography
                    fontSize={{ xs: 18, sm: 24 }}
                    fontFamily={"Montserrat"}
                    color="#1A1A1A"
                    fontWeight={500}
                    mb={{ xs: 2, sm: "24px" }}
                  >
                    Payment Method
                  </Typography>
                  <Box display="flex" alignItems={"center"} gap="12px">
                    <Image
                      src={icons.visa}
                      alt="card image"
                      width="40"
                      height="24"
                    />
                    <Box>
                      <Typography
                        fontSize={{ xs: 12, sm: 16 }}
                        fontFamily={"Montserrat"}
                        color="#1A1A1A"
                        fontWeight={700}
                        mb="4px"
                      >
                        •••• •••• •••• 4532
                      </Typography>
                      <Typography
                        fontSize={12}
                        fontFamily={"Montserrat"}
                        color="#656565"
                        fontWeight={500}
                      >
                        Expires 12/27
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Box
                  width="100%"
                  bgcolor={"#D5AC4C1A"}
                  borderRadius={"15px"}
                  py={{ xs: 2, sm: "30px" }}
                  px={{ xs: 2, sm: "18px" }}
                  border="1px solid #D5AC4C33"
                  mb={{ xs: 2, sm: "24px" }}
                >
                  <Typography
                    fontSize={{ xs: 18, sm: 24 }}
                    fontFamily={"Montserrat"}
                    color="#1A1A1A"
                    fontWeight={500}
                    mb={{ xs: 2, sm: "24px" }}
                  >
                    What's Next?
                  </Typography>
                  <Box
                    display="flex"
                    alignItems={"center"}
                    gap="12px"
                    mb="12px"
                  >
                    <Image
                      src={icons.confirm}
                      alt="card image"
                      width="17"
                      height="24"
                    />
                    <Typography
                      fontSize={14}
                      fontFamily={"Montserrat"}
                      color="#656565"
                      fontWeight={400}
                    >
                      Order confirmation sent to your email
                    </Typography>
                  </Box>
                  <Box
                    display="flex"
                    alignItems={"center"}
                    gap="12px"
                    mb="12px"
                  >
                    <Image
                      src={icons.ship}
                      alt="card image"
                      width="17"
                      height="24"
                    />
                    <Typography
                      fontSize={14}
                      fontFamily={"Montserrat"}
                      color="#656565"
                      fontWeight={400}
                    >
                      Items being prepared for shipment
                    </Typography>
                  </Box>
                  <Box display="flex" alignItems={"center"} gap="12px">
                    <Image
                      src={icons.truckWhite}
                      alt="card image"
                      width="17"
                      height="24"
                    />
                    <Typography
                      fontSize={14}
                      fontFamily={"Montserrat"}
                      color="#656565"
                      fontWeight={400}
                    >
                      Tracking info will be sent within 24 hours
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box
              display="flex"
              alignItems={"center"}
              justifyContent={"center"}
              flexWrap={"wrap"}
              gap="16px"
              mb="48px"
            >
              <Box
                py="15px"
                pl="35px"
                pr="26px"
                bgcolor="#000"
                borderRadius={"8px"}
                display="flex"
                alignItems={"center"}
                gap="15px"
                sx={{ cursor: "pointer" }}
              >
                <Image
                  src={icons.download}
                  alt="card image"
                  width="16"
                  height="20"
                />
                <Typography
                  fontSize={16}
                  fontFamily={"Montserrat"}
                  fontWeight={600}
                  color="#FFFFFF"
                  width="fit-content"
                  sx={{ whiteSpace: "noWrap" }}
                >
                  Download Receipt
                </Typography>
              </Box>
              <Box
                py="15px"
                pl="35px"
                pr="26px"
                border="1px solid #D1D5DB"
                borderRadius={"8px"}
                display="flex"
                alignItems={"center"}
                gap="15px"
                sx={{ cursor: "pointer" }}
              >
                <Image
                  src={icons.truckFilled}
                  alt="card image"
                  width="20"
                  height="20"
                />
                <Typography
                  fontSize={16}
                  fontFamily={"Montserrat"}
                  fontWeight={600}
                  color="#1a1a1a"
                  width="fit-content"
                  sx={{ whiteSpace: "noWrap" }}
                >
                  Track Order
                </Typography>
              </Box>
              <Box
                py="15px"
                pl="35px"
                pr="26px"
                border="1px solid #D1D5DB"
                borderRadius={"8px"}
                display="flex"
                alignItems={"center"}
                gap="15px"
                sx={{ cursor: "pointer" }}
                onClick={() => router.push("/")}
              >
                <Image
                  src={icons.cartYellow}
                  alt="card image"
                  width="14"
                  height="20"
                />
                <Typography
                  fontSize={16}
                  fontFamily={"Montserrat"}
                  fontWeight={600}
                  color="#1a1a1a"
                  width="fit-content"
                  sx={{ whiteSpace: "noWrap" }}
                >
                  Continue Shopping
                </Typography>
              </Box>
            </Box>
            <Box
              display="flex"
              alignItems={"center"}
              flexDirection={"column"}
              gap="16px"
              p="25px"
              border="1px solid #E5E7EB"
            >
              <Typography
                textAlign={"center"}
                fontSize={{ xs: 16, sm: 18 }}
                fontFamily={"Montserrat"}
                color="#1a1a1a"
                fontWeight={700}
              >
                Need Help?
              </Typography>
              <Typography
                textAlign={"center"}
                fontSize={16}
                fontFamily={"Montserrat"}
                color="#656565"
                fontWeight={500}
              >
                Our customer support team is here to help with any questions
                about your order.
              </Typography>
              <Box
                width="100%"
                display="flex"
                alignItems={"center"}
                  justifyContent={"center"}
                  flexWrap={'wrap'}
                gap="16px"
              >
                <Box
                  display="flex"
                  alignItems={"center"}
                  gap="15px"
                  sx={{ cursor: "pointer" }}
                >
                  <Image
                    src={icons.email}
                    alt="card image"
                    width="16"
                    height="20"
                  />
                  <Typography
                    fontSize={16}
                    fontFamily={"Montserrat"}
                    fontWeight={500}
                    color="#D0950F"
                    width="fit-content"
                    sx={{ whiteSpace: "noWrap" }}
                  >
                    Email Support
                  </Typography>
                </Box>
                <Box
                  display="flex"
                  alignItems={"center"}
                  gap="15px"
                  sx={{ cursor: "pointer" }}
                >
                  <Image
                    src={icons.phone}
                    alt="card image"
                    width="16"
                    height="20"
                  />
                  <Typography
                    fontSize={16}
                    fontFamily={"Montserrat"}
                    fontWeight={500}
                    color="#D0950F"
                    width="fit-content"
                    sx={{ whiteSpace: "noWrap" }}
                  >
                    Call Us
                  </Typography>
                </Box>
                <Box
                  display="flex"
                  alignItems={"center"}
                  gap="15px"
                  sx={{ cursor: "pointer" }}
                >
                  <Image
                    src={icons.chat}
                    alt="card image"
                    width="16"
                    height="20"
                  />
                  <Typography
                    fontSize={16}
                    fontFamily={"Montserrat"}
                    fontWeight={500}
                    color="#D0950F"
                    width="fit-content"
                    sx={{ whiteSpace: "noWrap" }}
                  >
                    Live Chat
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </RequireAuth>
  );
};

export default OrderConfirmation;
