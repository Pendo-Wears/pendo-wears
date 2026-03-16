"use client";

import {
  Box,
  Icon,
  MenuItem,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { Activity, useEffect, useState } from "react";
import { icons } from "../assets/icons/icons";
import Image from "next/image";
import Link from "next/link";
import { logoutUser } from "../lib/authServices";
import { useAuth } from "../context/AuthContext";
import MenuUI from "./MenuUI";
import { useRouter } from "next/navigation";
import { productsEndpoint } from "../lib/endpoints";

const Navbar = () => {
  const { isAuthenticated, fireAlert, user, getUserAuth } = useAuth();
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [collectionAnchorEl, setCollectionAnchorEl] =
    useState<null | HTMLElement>(null);
  const [hideCollection, setHideCollection] = useState(false);
  const [selectedCollection, setSelectedCollection] = useState("");
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  // const [user, setUser] = useState<any>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCollectionOpen = (event: React.MouseEvent<HTMLElement>) => {
    setCollectionAnchorEl(event.currentTarget);
  };

  const [categories, setCategories] = useState<
    {
      name: string;
      slug: string;
      id: number;
    }[]
  >([]);

  const getCategories = async () => {
    try {
      const result: any = await productsEndpoint.getCategories();
      console.log(result);
      if (result.status === 200) {
        setCategories(result.data);
      }
    } catch (e: any) {
      fireAlert(e.message, "error");
    }
  };

  const getUser = () => {
    const profile =
      typeof window !== "undefined"
        ? localStorage.getItem("user") || "null"
        : "null";
    // setUser(JSON.parse(profile));
  };

  useEffect(() => {
    getCategories();
    getUserAuth();
    // getUser();
  }, []);

  const collections = [
    {
      name: "Collection",
      items: categories
        .filter(
          (x) =>
            x.slug === "noir-gold-collection" ||
            x.slug === "rhythm-thread-collection" ||
            x.slug === "heritage-alchemy-collection",
        )
        ?.map((category) => ({
          name: category.name,
          to: `/shop?type=${category.name}&category=${category.slug}`,
        })),
    },
    {
      name: "Products",
      items: categories
        .filter(
          (x) =>
            x.slug !== "noir-gold-collection" &&
            x.slug !== "rhythm-thread-collection" &&
            x.slug !== "heritage-alchemy-collection",
        )
        ?.map((category) => ({
          name: category.name,
          to: `/collection/${category.slug}?id=${category.id}`,
        })),
    },
  ];
  const items = [
    mobile && {
      label: "Cart",
      icon: icons.cart,
      action: () => router.push("/cart"),
    },
    mobile && {
      label: "Wishlist",
      icon: icons.wishlist,
      action: () => router.push("/profile/wishlist"),
    },
    {
      label: "Profile",
      icon: icons.profile,
      action: () => router.push("/profile"),
    },
    {
      label: "Change Password",
      icon: icons.change,
      action: () => router.push("/change-password"),
    },
    mobile && !isAuthenticated
      ? {
          label: "Sign In",
          icon: icons.logout,
          action: () => router.push("/login"),
        }
      : {
          label: "Logout",
          icon: icons.logout,
          action: () => {
            logoutUser();
            getUserAuth();
          },
        },
  ].filter(Boolean);
  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={5500}
      bgcolor="#fff"
      boxShadow={"10px 0px 30px -10px rgba(0, 0, 0, 0.1)"}
    >
      <Box sx={{ maxWidth: "1512px", margin: "0 auto " }}>
        <Box
          bgcolor="#fff"
          display="flex"
          alignItems="center"
          padding={{ xs: "16px", sm: "20px", md: "20px 50px" }}
        >
          <Image
            src={icons.menu}
            alt="menu"
            width={mobile ? "30" : "46"}
            height={mobile ? "20" : "30"}
            onClick={handleCollectionOpen}
            style={{ cursor: "pointer" }}
          />
          <Box
            flex={1}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Typography
              fontSize={{ xs: 32, sm: 42 }}
              fontFamily="Cormorant Garamond"
              letterSpacing={{ xs: "12px", sm: "20px" }}
              fontWeight={700}
              lineHeight={"100%"}
              sx={{
                transform: { xs: "translateX(0px)", md: "translateX(100px)" },
                cursor: "pointer",
              }}
              onClick={() => router.push("/")}
            >
              PENDO
            </Typography>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            gap={{ xs: "14px", sm: "28px" }}
          >
            <Box display="flex" alignItems="center" gap="20px">
              <Image
                src={icons.search}
                alt="search"
                width="28"
                height="28"
                style={{ cursor: "pointer", objectFit: "cover" }}
                onClick={() => router.push("/search")}
              />
              {!mobile && (
                <>
                  {" "}
                  <Link href="/profile/wishlist">
                    <Image
                      src={icons.wishlist}
                      alt="wishlist"
                      width="28"
                      height="30"
                      style={{ objectFit: "cover" }}
                    />
                  </Link>
                  <Link href="/cart">
                    <Image
                      src={icons.cart}
                      alt="cart"
                      width="28"
                      height="28"
                      style={{ objectFit: "cover" }}
                    />
                  </Link>
                </>
              )}
            </Box>
            {!isAuthenticated && !mobile ? (
              <Link
                href="/login"
                style={{
                  textDecoration: "none",
                  display:
                    (typeof window !== "undefined" &&
                      window.location.pathname === "/register") ||
                    (typeof window !== "undefined" &&
                      window.location.pathname === "/login")
                      ? "none"
                      : "block",
                }}
              >
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
            ) : (
              <Box
                display={"flex"}
                alignItems={"center"}
                gap={"12px"}
                sx={{ cursor: "pointer" }}
                onClick={handleMenuOpen}
              >
                <Image
                  src={
                    (user?.meta_data?.find(
                      (x: any) => x.key === "simple_local_avatar",
                    )?.value as any) ||
                    user?.avatar_url ||
                    icons.avatar.src
                  }
                  alt="avatar"
                  width="45"
                  height="45"
                  style={{ borderRadius: "100%", objectFit: "cover" }}
                />
                <Activity mode={mobile ? "hidden" : "visible"}>
                  <Image
                    src={icons.arrowDown}
                    alt="arrow_down"
                    width="17"
                    height="10"
                  />
                </Activity>
              </Box>
            )}
          </Box>
          <MenuUI
            onClose={() => setAnchorEl(null)}
            anchorEl={anchorEl}
            anchor={{
              horizontal: "right",
              vertical: "bottom",
            }}
          >
            <Box py="12px" borderRadius={"20px"}>
              {items.map((item: any) => (
                <MenuItem
                  onClick={() => {
                    item.action();
                    setAnchorEl(null);
                  }}
                  key={item.label}
                  sx={{
                    p: 0,
                  }}
                >
                  {" "}
                  <Box
                    key={item.label}
                    display="flex"
                    alignItems="center"
                    gap="12px"
                    py="12px"
                    px="16px"
                    fontSize={{ xs: 14, sm: 16 }}
                    fontWeight={500}
                    color="#404040"
                    fontFamily={"Montserrat"}
                    sx={{ cursor: "pointer" }}
                  >
                    <Image
                      src={item.icon}
                      alt={item.label}
                      width="20"
                      height="20"
                    />
                    {item.label}
                  </Box>
                </MenuItem>
              ))}
            </Box>
          </MenuUI>
          <MenuUI
            onClose={() => setCollectionAnchorEl(null)}
            anchorEl={collectionAnchorEl}
            style={{ width: "411px", height: "650px", mt: "24px" }}
            anchor={{
              horizontal: "left",
              vertical: "bottom",
            }}
          >
            <Box py="16px" borderRadius={"20px"} px={{ xs: 0, sm: "8px" }}>
              {collections.map((collection, index) => (
                <Box
                  py="24px"
                  borderBottom={`1px solid ${
                    index + 1 === collections.length
                      ? "transparent"
                      : "rgba(0, 0, 0, .1)"
                  }`}
                >
                  <Box
                    key={collection.name}
                    justifyContent={"space-between"}
                    display="flex"
                    alignItems="center"
                    gap="12px"
                    mb="20px"
                    px={{ xs: "16px", sm: "32px" }}
                    fontSize={{ xs: 18, sm: 24 }}
                    fontWeight={600}
                    color="#404040"
                    fontFamily={"Montserrat"}
                    sx={{ cursor: "pointer" }}
                  >
                    {collection.name}
                  </Box>
                  <Box display="flex" flexDirection={"column"} gap="8px">
                    {collection.items.map((item, id) => (
                      <MenuItem
                        key={id}
                        sx={{
                          color: "#404040",
                          fontFamily: "Montserrat",
                          fontSize: { xs: 14, sm: 18 },
                          px: { xs: "20px", sm: "32px" },
                        }}
                        onClick={() => {
                          router.push(item.to);
                          setCollectionAnchorEl(null);
                        }}
                      >
                        {item.name}
                      </MenuItem>
                    ))}
                  </Box>
                </Box>
              ))}
            </Box>
          </MenuUI>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
