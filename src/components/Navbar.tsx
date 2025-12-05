"use client";

import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { icons } from "../assets/icons/icons";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const authenticated = localStorage.getItem("isAuthenticated");
    setIsAuthenticated(authenticated === "true");
  }, []);

  return (
    <Box position="fixed" top={0} left={0} right={0} zIndex={9999}>
      <Box sx={{ maxWidth: "1512px", margin: "0 auto " }}>
        <Box
          bgcolor="#fff"
          display="flex"
          alignItems="center"
          padding={{ xs: "16px", sm: "20px", md: "20px 50px" }}
        >
          <Image src={icons.menu} alt="menu" width="46" height="30" />
          <Box
            flex={1}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Typography
              fontSize={42}
              fontFamily="Cormorant Garamond"
              letterSpacing={"20px"}
              fontWeight={700}
              lineHeight={"100%"}
            >
              PENDO
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" gap="28px">
            <Box display="flex" alignItems="center" gap="20px">
              <Image
                src={icons.search}
                alt="search"
                width="28"
                height="28"
                objectFit="cover"
              />
              <Link href="/wishlist">
                <Image
                  src={icons.wishlist}
                  alt="wishlist"
                  width="28"
                  height="30"
                  objectFit="cover"
                />
              </Link>
              <Link href='/cart'>
                <Image
                  src={icons.cart}
                  alt="cart"
                  width="28"
                  height="28"
                  objectFit="cover"
                />
              </Link>
            </Box>
            {!isAuthenticated && (
              <Link href="/register" style={{ textDecoration: "none" }}>
                <Typography
                  py="8px"
                  px="16px"
                  fontSize={16}
                  fontWeight={600}
                  color="#1A1A1A"
                  fontFamily={"Montserrat"}
                >
                  Sign In
                </Typography>
              </Link>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
