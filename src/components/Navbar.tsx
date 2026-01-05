"use client";

import { Box, Icon, MenuItem, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { icons } from "../assets/icons/icons";
import Image from "next/image";
import Link from "next/link";
import { logoutUser } from "../lib/authServices";
import { useAuth } from "../context/AuthContext";
import MenuUI from "./MenuUI";
import { useRouter } from "next/navigation";
import { productsEndpoint } from "../lib/endpoints";

const Navbar = () => {
  const { isAuthenticated, fireAlert } = useAuth();
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [collectionAnchorEl, setCollectionAnchorEl] =
    useState<null | HTMLElement>(null);
  const [hideCollection, setHideCollection] = useState(false);
  const [selectedCollection, setSelectedCollection] = useState("");
  const [user, setUser] = useState<any>(null);

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
    const profile = localStorage.getItem("user") || "null";
    setUser(JSON.parse(profile));
  };

  useEffect(() => {
    getCategories();
    getUser();
  }, []);

  const collections = [
    {
      name: "Collection",
      items: categories
        .filter((x) => x.slug === "noir-gold" || x.slug === "rhythm-thread")
        ?.map((category) => ({
          name: category.name,
          to: `/shop?type=${category.name}&category=${category.slug}`,
        })),
    },
    {
      name: "Products",
      items: categories
        .filter((x) => x.slug !== "noir-gold" && x.slug !== "rhythm-thread")
        ?.map((category) => ({
          name: category.name,
          to: `/collection/${category.slug}?id=${category.id}`,
        })),
    },
  ];
  const items = [
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
    { label: "Logout", icon: icons.logout, action: logoutUser },
  ];
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
            width="46"
            height="30"
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
              fontSize={42}
              fontFamily="Cormorant Garamond"
              letterSpacing={"20px"}
              fontWeight={700}
              lineHeight={"100%"}
              sx={{ transform: "translateX(100px)", cursor: "pointer" }}
              onClick={() => router.push("/")}
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
                style={{ cursor: "pointer" }}
                onClick={() => router.push("/search")}
              />
              <Link href="/profile/wishlist">
                <Image
                  src={icons.wishlist}
                  alt="wishlist"
                  width="28"
                  height="30"
                  objectFit="cover"
                />
              </Link>
              <Link href="/cart">
                <Image
                  src={icons.cart}
                  alt="cart"
                  width="28"
                  height="28"
                  objectFit="cover"
                />
              </Link>
            </Box>
            {!isAuthenticated ? (
              <Link
                href="/register"
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
                  src={user?.avatar_url ? user?.avatar_url : icons.avatar}
                  alt="avatar"
                  width="45"
                  height="45"
                  style={{ borderRadius: "100%" }}
                />
                <Image
                  src={icons.arrowDown}
                  alt="arrow_down"
                  width="17"
                  height="10"
                />
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
              {items.map((item) => (
                <MenuItem>
                  {" "}
                  <Box
                    key={item.label}
                    display="flex"
                    alignItems="center"
                    gap="12px"
                    py="12px"
                    px="16px"
                    fontSize={16}
                    fontWeight={500}
                    color="#404040"
                    fontFamily={"Montserrat"}
                    sx={{ cursor: "pointer" }}
                    onClick={() => {
                      item.action();
                      setAnchorEl(null);
                    }}
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
            <Box py="16px" borderRadius={"20px"} px="8px">
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
                    px="32px"
                    fontSize={24}
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
                          fontSize: 18,
                          px: "32px",
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
