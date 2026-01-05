"use client";

import { icons } from "@/src/assets/icons/icons";
import { images } from "@/src/assets/images/images";
import RequireAuth from "@/src/components/RequireAuth";
import { useAuth } from "@/src/context/AuthContext";
import {
  formatPrice,
  formatWoocommercePrice,
  getCountryData,
} from "@/src/lib/priceFormatter";
import { ProductDetailsType, SyncVariant } from "@/src/lib/types";
import userEndpoints from "@/src/lib/userServices";
import { Box, MenuItem, TextField, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { Activity, useEffect, useState } from "react";
import { GetCountries, GetState } from "react-country-state-city";

export const getCart = () => {
  if (typeof window === "undefined") return [];
  const items = localStorage.getItem("cart") || "[]";
  return JSON.parse(items);
};

const Cart = () => {
  const router = useRouter();
  const { fireAlert, setAmount } = useAuth();
  const [cartItems, setCartItems] = useState([]);
  const [tax, setTax] = useState(0);
  const [shippingFee, setShippingFee] = useState(0);
  const [country, setCountry] = useState<any>(null);
  const [state, setState] = useState<any>(null);
  const [zipCode, setZipCode] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [states, setStates] = useState<any[]>([]);
  const [countries, setCountries] = useState<any[]>([]);
  const [user, setUser] = useState<any>(null);

  const fetchCountryData = async () => {
    const countryData = await getCountryData();
    setCountry(countryData);
  };

  const fetchCountries = async () => {
    const res = await GetCountries();
    setCountries(res);
  };

  const fetchStates = async () => {
    const res = await GetState(parseInt(country?.id));
    setStates(res);
  };

  const getAllCart = () => {
    if (typeof window === "undefined") return [];
    const result = getCart();
    setCartItems(result);
  };

  const getCartTotal = () => {
    return getCart().reduce(
      (sum: number, item: any) => sum + item.retail_price * item.quantity,
      0
    );
  };

  const getCartTotalQuantity = () => {
    return getCart().reduce((sum: number, item: any) => sum + item.quantity, 0);
  };

  const clearCart = () => {
    localStorage.removeItem("cart");
    fireAlert("Cart cleared successfully", "success");
    getAllCart();
  };

  const updateShippingAddress = async () => {
    try {
      const updateBody = {
        billing: {
          state: state?.name || "",
          country: country?.iso2 || "",
          postcode: zipCode,
          address_1: address,
          phone: phone,
        },
      };

      if (user && user.id) {
        const updateUser: any = await userEndpoints.updateUser(
          user?.id,
          updateBody
        );
        if (updateUser?.data.success) {
          fireAlert("Shipping address updated successfully", "success");
          localStorage.setItem(
            "user",
            JSON.stringify({
              ...updateUser.data.data,
              billing: {
                ...updateUser.data.data.billing,
                countryName: country?.name,
              },
            })
          );
        }
      }
    } catch (error) {
      console.error("Error updating shipping address:", error);
      fireAlert("Failed to update shipping address", "error");
    }
  };

  const getUser = () => {
    const profile = localStorage.getItem("user") || "null";
    setUser(JSON.parse(profile));
  };

  useEffect(() => {
    getAllCart();
    fetchCountryData();
    fetchCountries();
    getUser();
  }, []);

  useEffect(() => {
    fetchStates();
  }, [country]);

  useEffect(() => {
    setAddress(user?.billing?.address_1 || "");
    setPhone(user?.billing?.phone || "");
    setZipCode(user?.billing?.postcode || "");
    setState({ name: user?.billing?.state || "" });
  }, [user]);
  return (
    <RequireAuth>
      <Box px={{ xs: "16px", sm: "20px", md: "50px" }} pb="70px">
        <Typography
          fontSize={32}
          fontFamily={"Montserrat"}
          color="#000"
          fontWeight={700}
          my="12px"
          textTransform={"uppercase"}
        >
          Shopping cart
        </Typography>
        <Typography fontSize={16} fontFamily={"Montserrat"} color="#4B5563">
          {getCartTotalQuantity()} items in your cart
        </Typography>
        <Box
          mb="45px"
          mt="40px"
          px={{ xs: "16px", sm: "20px", md: "50px" }}
          display="flex"
          alignItems={"flex-start"}
          gap="65px"
        >
          <Box
            flex={1}
            bgcolor={"#F9FAFB"}
            borderRadius={"15px"}
            py="45px"
            px="30px"
            border="1px solid #00000010"
          >
            <Box
              display="flex"
              alignItems={"center"}
              justifyContent={"space-between"}
              pb="25px"
              borderBottom="1px solid #00000010"
            >
              <Typography
                fontSize={24}
                fontFamily={"Montserrat"}
                color="#000"
                fontWeight={700}
              >
                Your items
              </Typography>
              <Box
                display="flex"
                alignItems={"center"}
                sx={{ cursor: "pointer" }}
                gap="4px"
                onClick={clearCart}
              >
                <Image src={icons.bin} alt="clear" width="14" height="20" />
                <Typography
                  fontSize={16}
                  fontFamily={"Montserrat"}
                  color="#6B7280"
                >
                  Clear All
                </Typography>
              </Box>
            </Box>
            <Activity mode={cartItems?.length > 0 ? "visible" : "hidden"}>
              {cartItems.map((cart) => (
                <CartItem cart={cart} key={cart} getAllCart={getAllCart} />
              ))}
            </Activity>
            <Activity mode={cartItems?.length === 0 ? "visible" : "hidden"}>
              <Typography
                textAlign={"center"}
                style={{
                  fontSize: 18,
                  fontFamily: "Montserrat",
                  color: "#656565",
                  margin: "100px 0",
                }}
              >
                No items in cart
              </Typography>
              <Box
                width={"fit-content"}
                py="15px"
                pl="35px"
                pr="26px"
                border="1px solid #D1D5DB"
                borderRadius={"8px"}
                display="flex"
                alignItems={"center"}
                alignSelf={"flex-start"}
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
                  Start Shopping
                </Typography>
              </Box>
            </Activity>
          </Box>
          <Box
            width="403px"
            bgcolor={"#F9FAFB"}
            borderRadius={"15px"}
            py="30px"
            px="18px"
            border="1px solid #00000010"
          >
            <Box pb="30px" borderBottom={"1px solid #1A1A1A"}>
              <Typography
                fontSize={24}
                fontFamily={"Montserrat"}
                color="#000"
                fontWeight={700}
                mb="24px"
              >
                Calculated Shipping
              </Typography>
              <Box display={"flex"} flexDirection={"column"} gap="20px">
                <TextField
                  fullWidth
                  variant="outlined"
                  select
                  type={"text"}
                  placeholder="Country"
                  value={country?.name || ""} // controlled value
                  onChange={(e) => {
                    const selected = countries.find(
                      (c) => c.name === e.target.value
                    );
                    setCountry(selected);
                    fetchStates();
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
                >
                  {countries.map((country) => (
                    <MenuItem
                      key={country.iso2}
                      value={country.name} // must match the value in TextField
                      style={{
                        fontSize: 16,
                        fontFamily: "Montserrat",
                        padding: "16px",
                        cursor: "pointer",
                      }}
                    >
                      {country.name}
                    </MenuItem>
                  ))}
                </TextField>
                <Box display="flex" alignItems={"center"} gap="20px">
                  <TextField
                    fullWidth
                    variant="outlined"
                    select
                    type={"text"}
                    placeholder="State/City"
                    value={state?.name || ""} // controlled value
                    onChange={(e) => {
                      const selected = states.find(
                        (c) => c.name === e.target.value
                      );
                      setState(selected);
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
                  >
                    {states.map((state, id) => (
                      <MenuItem
                        key={id}
                        value={state.name} // must match the value in TextField
                        style={{
                          fontSize: 16,
                          fontFamily: "Montserrat",
                          padding: "16px",
                          cursor: "pointer",
                        }}
                      >
                        {state.name}
                      </MenuItem>
                    ))}
                  </TextField>
                  <TextField
                    fullWidth
                    variant="outlined"
                    type={"text"}
                    placeholder="Zip code"
                    value={zipCode || ""}
                    onChange={(e) => setZipCode(e.target.value)}
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
                <TextField
                  fullWidth
                  variant="outlined"
                  type={"text"}
                  placeholder="House address"
                  value={address || ""}
                  onChange={(e) => setAddress(e.target.value)}
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
                  placeholder="Phone number"
                  value={phone} // only store user-typed part
                  onChange={(e) => setPhone(e.target.value)}
                  InputProps={{
                    startAdornment: country?.phone_code ? (
                      <span style={{ marginRight: 8 }}>
                        {country.phone_code}
                      </span>
                    ) : null,
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
              <Box px="28px" mt="30px">
                <Box
                  width="100%"
                  height="57px"
                  bgcolor="#000"
                  borderRadius={"100px"}
                  display="flex"
                  alignItems={"center"}
                  justifyContent={"center"}
                  sx={{ cursor: "pointer" }}
                  onClick={updateShippingAddress}
                >
                  <Typography
                    fontSize={16}
                    fontFamily={"Montserrat"}
                    fontWeight={500}
                    color="#FFFFFF"
                    width="fit-content"
                    sx={{ whiteSpace: "noWrap" }}
                  >
                    Update
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box mt="37px">
              <Typography
                fontSize={24}
                fontFamily={"Montserrat"}
                color="#1A1A1A"
                fontWeight={500}
                mb="10px"
              >
                Coupon Code
              </Typography>
              <Typography
                fontSize={16}
                fontFamily={"Montserrat"}
                color="#2E3033"
                fontWeight={500}
                mb="20px"
              >
                Premium cotton blend with authentic African-inspired patterns.
                Each
              </Typography>
              <TextField
                fullWidth
                variant="outlined"
                type={"text"}
                placeholder="Coupon code "
                defaultValue={""}
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
              <Box px="28px" mt="30px">
                <Box
                  width="100%"
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
                    fontWeight={500}
                    color="#FFFFFF"
                    width="fit-content"
                    sx={{ whiteSpace: "noWrap" }}
                  >
                    Apply
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box
              my="37px"
              borderRadius={"10px"}
              bgcolor="#E6E6E6"
              width="100%"
              py="26px"
              px="30px"
            >
              <Typography
                fontSize={24}
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
                  fontSize={16}
                  fontFamily={"Montserrat"}
                  color="#1A1A1A"
                  fontWeight={500}
                >
                  Subtotal
                </Typography>
                <Typography
                  fontSize={16}
                  fontFamily={"Montserrat"}
                  color="#1A1A1A"
                  fontWeight={700}
                >
                  {formatPrice(Number(getCartTotal()))}
                </Typography>
              </Box>
              <Box
                display="flex"
                alignItems={"center"}
                justifyContent={"space-between"}
                mb="18px"
              >
                <Typography
                  fontSize={16}
                  fontFamily={"Montserrat"}
                  color="#1A1A1A"
                  fontWeight={500}
                >
                  Shipping
                </Typography>
                <Typography
                  fontSize={16}
                  fontFamily={"Montserrat"}
                  color="#16A34A"
                  fontWeight={700}
                >
                  {shippingFee === 0 ? "Free" : formatPrice(shippingFee)}
                </Typography>
              </Box>
              <Box
                display="flex"
                alignItems={"center"}
                justifyContent={"space-between"}
                pb="18px"
                mb="18px"
                borderBottom={"1px solid #00000010"}
              >
                <Typography
                  fontSize={16}
                  fontFamily={"Montserrat"}
                  color="#1A1A1A"
                  fontWeight={500}
                >
                  Tax
                </Typography>
                <Typography
                  fontSize={16}
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
                mb="40px"
              >
                <Typography
                  fontSize={18}
                  fontFamily={"Montserrat"}
                  color="#1A1A1A"
                  fontWeight={700}
                >
                  Total
                </Typography>
                <Typography
                  fontSize={18}
                  fontFamily={"Montserrat"}
                  color="#1A1A1A"
                  fontWeight={700}
                >
                  {formatPrice(Number(getCartTotal() + tax + shippingFee))}
                </Typography>
              </Box>
              <Box
                width="100%"
                height="57px"
                bgcolor="#000"
                borderRadius={"100px"}
                display="flex"
                alignItems={"center"}
                justifyContent={"center"}
                sx={{ cursor: "pointer" }}
                onClick={() => {
                  if (cartItems.length === 0) {
                    fireAlert("Your cart is currently empty", "warning");
                    return;
                  }
                  setAmount(Number(getCartTotal() + tax + shippingFee));
                  router.push("/checkout");
                }}
              >
                <Typography
                  fontSize={16}
                  fontFamily={"Montserrat"}
                  fontWeight={700}
                  color="#FFFFFF"
                  width="fit-content"
                  sx={{ whiteSpace: "noWrap" }}
                >
                  Proceed to Checkout
                </Typography>
              </Box>
            </Box>
            <Box px="28px">
              <Box pt="30px" borderTop={"1px solid #00000010"}>
                <Typography
                  fontSize={16}
                  fontFamily={"Montserrat"}
                  fontWeight={600}
                  color="#1A1A1A"
                  mb="16px"
                >
                  We Accept
                </Typography>
                <Box display="flex" alignItems={"center"} gap="12px">
                  <Image src={icons.visa} alt="visa" width="27" height="24" />
                  <Image
                    src={icons.master}
                    alt="master"
                    width="27"
                    height="24"
                  />
                  <Image
                    src={icons.express}
                    alt="express"
                    width="27"
                    height="24"
                  />
                  <Image
                    src={icons.paypal}
                    alt="paypal"
                    width="27"
                    height="24"
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          px={{ xs: "16px", sm: "20px", md: "50px" }}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Box
            p="20px"
            border={"1px solid #0000001A"}
            borderRadius={"15px"}
            display="flex"
            alignItems={"center"}
            gap="20px"
            maxWidth="353px"
          >
            <Box
              width="92px"
              minWidth="92px"
              height="89px"
              bgcolor="#F3F3F3"
              borderRadius={"8px"}
              display="flex"
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Image src={icons.contact} alt="contact" width="40" height="40" />
            </Box>
            <Box>
              <Typography
                fontSize={24}
                fontFamily={"Cormorant Garamond"}
                color="#000"
                fontWeight={700}
                mb="3px"
              >
                Contact us anytime
              </Typography>
              <Typography
                fontSize={14}
                fontFamily={"Montserrat"}
                color="#656565"
                fontWeight={500}
                mb="3px"
              >
                Pendo@gmail.com
              </Typography>
              <Typography
                fontSize={14}
                fontFamily={"Montserrat"}
                color="#656565"
                fontWeight={500}
              >
                +234 706 4878 263
              </Typography>
            </Box>
          </Box>
          <Box
            p="20px"
            border={"1px solid #0000001A"}
            borderRadius={"15px"}
            display="flex"
            alignItems={"center"}
            gap="20px"
            maxWidth="353px"
          >
            <Box
              width="92px"
              minWidth="92px"
              height="89px"
              bgcolor="#F3F3F3"
              borderRadius={"8px"}
              display="flex"
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Image src={icons.gift} alt="contact" width="40" height="40" />
            </Box>
            <Box>
              <Typography
                fontSize={24}
                fontFamily={"Cormorant Garamond"}
                color="#000"
                fontWeight={700}
                mb="3px"
              >
                Gifting
              </Typography>
              <Typography
                fontSize={14}
                fontFamily={"Montserrat"}
                color="#656565"
                fontWeight={500}
              >
                Gift your loved once any of Pendo brand
              </Typography>
            </Box>
          </Box>
          <Box
            p="20px"
            border={"1px solid #0000001A"}
            borderRadius={"15px"}
            display="flex"
            alignItems={"center"}
            gap="20px"
            maxWidth="353px"
          >
            <Box
              width="92px"
              minWidth="92px"
              height="89px"
              bgcolor="#F3F3F3"
              borderRadius={"8px"}
              display="flex"
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Image src={icons.truck} alt="contact" width="40" height="40" />
            </Box>
            <Box>
              <Typography
                fontSize={24}
                fontFamily={"Cormorant Garamond"}
                color="#000"
                fontWeight={700}
                mb="3px"
              >
                Free Shipping
              </Typography>
              <Typography
                fontSize={14}
                fontFamily={"Montserrat"}
                color="#656565"
                fontWeight={500}
              >
                Free shipping when you spend $2,000+
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </RequireAuth>
  );
};

interface CartItemProps extends SyncVariant {
  quantity: number;
}

export const CartItem = ({
  cart,
  getAllCart,
  isCheckout = false,
  isConfirmed = false,
}: {
  cart: CartItemProps;
  getAllCart: () => void;
  isCheckout?: boolean;
  isConfirmed?: boolean;
}) => {
  const { fireAlert } = useAuth();

  const removeFromCart = (key: number) => {
    const cart = getCart().filter((item: any) => item.id !== key);
    localStorage.setItem("cart", JSON.stringify(cart));
    getAllCart();
    fireAlert("Item successfully removed from cart", "success");
  };

  const updateCart = (key: number, quantity: number) => {
    const cart = getCart();

    if (quantity < 1) {
      removeFromCart(key);
      return;
    }
    const updated = cart
      .map((item: any) => (item.id === key ? { ...item, quantity } : item))
      .filter((item: any) => item.quantity > 0);

    localStorage.setItem("cart", JSON.stringify(updated));
    fireAlert("Item successfully updated", "success");
  };
  return (
    <Box
      py={isCheckout || isConfirmed ? "13px" : "30px"}
      px={isCheckout || isConfirmed ? "10px" : 0}
      borderBottom={"1px solid #00000010"}
      bgcolor={isCheckout ? "#fff" : "transparent"}
      display="flex"
      alignItems={"center"}
      gap="24px"
    >
      <Box
        width={isConfirmed ? "64px" : "128px"}
        height={isConfirmed ? "64px" : isCheckout ? "152px" : "128px"}
        borderRadius={"8px"}
        bgcolor={"#F3F4F6"}
        p="8px"
        display="flex"
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Image
          src={cart.product.image || ""}
          alt={cart.product.name || ""}
          style={{ objectFit: "contain" }}
          width={isConfirmed ? "64" : "103"}
          height={isConfirmed ? "64" : "103"}
        />
      </Box>
      <Box flex={1}>
        <Typography
          fontSize={isConfirmed ? 20 : isCheckout ? 18 : 24}
          fontFamily={"Montserrat"}
          color="#1A1A1A"
          fontWeight={500}
          mb={isCheckout || isConfirmed ? 0 : "10px"}
        >
          {cart.product.name}
        </Typography>
        <Activity mode={isCheckout ? "visible" : "hidden"}>
          <Typography
            fontSize={isCheckout ? 16 : 18}
            fontFamily={"Montserrat"}
            color="#1A1A1A"
            fontWeight={700}
            mb="8px"
          >
            {formatPrice(Number(cart.retail_price) * cart.quantity)}
          </Typography>
        </Activity>
        <Activity mode={isConfirmed ? "hidden" : "visible"}>
          <Typography
            fontSize={isCheckout ? 14 : 16}
            fontFamily={"Montserrat"}
            color={isCheckout ? "#1A1A1A" : "#656565"}
            fontWeight={500}
            mb="0px"
            textTransform={"capitalize"}
          >
            Color: {cart.color}
          </Typography>

          <Typography
            fontSize={isCheckout ? 14 : 16}
            fontFamily={"Montserrat"}
            color={isCheckout ? "#1A1A1A" : "#656565"}
            fontWeight={500}
            mb="0px"
            textTransform={"capitalize"}
          >
            Size: {cart.size}
          </Typography>
        </Activity>
        <Typography
          fontSize={14}
          fontFamily={"Montserrat"}
          color={isCheckout ? "#1A1A1A" : "#656565"}
          fontWeight={500}
          mb="0px"
        >
          Quantity:{" "}
          <Activity mode={isCheckout || isConfirmed ? "visible" : "hidden"}>
            <Typography
              fontSize={isCheckout ? 14 : 16}
              fontFamily={"Montserrat"}
              color="#1A1A1A"
              fontWeight={500}
              display={"inline"}
            >
              {cart.quantity}
            </Typography>
          </Activity>
          <Activity mode={isCheckout || isConfirmed ? "hidden" : "visible"}>
            <Box display="inline-flex" alignItems={"center"}>
              <Box
                width="34px"
                height="32px"
                border="1px solid #E5E7EB"
                display="flex"
                alignItems={"center"}
                justifyContent={"center"}
                onClick={() => updateCart(cart.id, (cart.quantity -= 1))}
                sx={{
                  opacity: cart.quantity === 1 ? 0.5 : 1,
                  pointerEvents: cart.quantity === 1 ? "none" : "all",
                }}
              >
                <Typography
                  fontSize={16}
                  fontFamily={"Montserrat"}
                  color="#1A1A1A"
                  fontWeight={400}
                >
                  -
                </Typography>
              </Box>
              <Box
                width="40px"
                height="32px"
                border="1px solid #E5E7EB"
                display="flex"
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Typography
                  fontSize={16}
                  fontFamily={"Montserrat"}
                  color="#1A1A1A"
                  fontWeight={500}
                >
                  {cart.quantity}
                </Typography>
              </Box>
              <Box
                width="34px"
                height="32px"
                border="1px solid #E5E7EB"
                display="flex"
                alignItems={"center"}
                justifyContent={"center"}
                onClick={() => updateCart(cart.id, (cart.quantity += 1))}
              >
                <Typography
                  fontSize={16}
                  fontFamily={"Montserrat"}
                  color="#1A1A1A"
                >
                  +
                </Typography>
              </Box>
            </Box>
          </Activity>
        </Typography>
      </Box>
      <Activity mode={isCheckout ? "hidden" : "visible"}>
        <Box
          display="flex"
          alignItems={"flex-end"}
          flexDirection={"column"}
          gap="18px"
        >
          <Typography
            fontSize={18}
            fontFamily={"Montserrat"}
            color="#1A1A1A"
            fontWeight={700}
          >
            {formatPrice(Number(cart.retail_price) * cart.quantity)}
          </Typography>

          <Activity mode={isConfirmed ? "hidden" : "visible"}>
            <Image
              src={icons.redBin}
              alt="delete"
              style={{ objectFit: "contain" }}
              width="14"
              height="20"
              onClick={() => removeFromCart(cart.id)}
            />
          </Activity>
        </Box>
      </Activity>
    </Box>
  );
};

export default Cart;
