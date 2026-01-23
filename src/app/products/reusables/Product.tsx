"use client";

import { icons } from "@/src/assets/icons/icons";
import { images } from "@/src/assets/images/images";
import { useAuth } from "@/src/context/AuthContext";
import { productsEndpoint } from "@/src/lib/endpoints";
import {
  formatWoocommercePrice,
  getPriceRange,
} from "@/src/lib/priceFormatter";
import { ProductDetailsType, WooProductDetails } from "@/src/lib/types";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { Activity, useEffect, useState } from "react";

interface ProductProps extends React.ComponentProps<typeof Grid> {
  showPrice?: boolean;
  product: any;
  callback?: () => void;
}

const Product = ({
  showPrice = true,
  product,
  callback,
  ...props
}: ProductProps) => {
  const { fireAlert } = useAuth();
  const router = useRouter();
  const [productDetails, setProductDetails] =
    useState<WooProductDetails | null>(null);
  const [isInWishlist, setIsInWishlist] = useState(false);

  const checkIfIsInWishlist = () => {
    const raw =
      typeof window !== "undefined"
        ? localStorage.getItem("wishlist") || "[]"
        : "[]";
    const wishlist = JSON.parse(raw);

    if (wishlist.find((p: any) => p.id === product.id)) {
      setIsInWishlist(true);
    }
  };

  const addToWishlist = () => {
    const raw =
      typeof window !== "undefined"
        ? localStorage.getItem("wishlist") || "[]"
        : "[]";
    const wishlist = JSON.parse(raw);

    if (!wishlist.find((p: any) => p.id === product.id)) {
      wishlist.push({ ...product, inWishlist: true });
      fireAlert("Item successfully added to wishlist", "success");
      if (typeof window !== "undefined") {
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
      }
      checkIfIsInWishlist();
    } else {
      const updated = wishlist.filter((wish: any) => wish.id !== product.id);
      fireAlert("Item removed from wishlist", "success");
      if (typeof window !== "undefined") {
        localStorage.setItem("wishlist", JSON.stringify(updated));
      }
      setIsInWishlist(false);
    }
    if (callback) callback();
  };

  // const getProductDetails = async () => {
  //   try {
  //     const result: any = await productsEndpoint.getProductDetails(product.id);
  //     if (result.success) {
  //       setProductDetails(result.data);
  //     }
  //   } catch (e: any) {
  //     fireAlert(e.message, "error");
  //   }
  // };

  // useEffect(() => {
  //   getProductDetails();
  // }, []);

  const storeUrl = process.env.NEXT_PUBLIC_WOO_STORE_URL;

  const imgUrl = product?.images?.[0]?.src?.replace(
    new URL(product?.images?.[0]?.src).origin,
    storeUrl!,
  );

  const collection = product?.categories?.find(
    (x: any) =>
      x.slug === "noir-gold-collection" ||
      x.slug === "rhythm-thread-collection" ||
      x.slug === "heritage-alchemy-collection",
  );

  useEffect(() => {
    checkIfIsInWishlist();
  }, []);
  return (
    <Grid
      size={{ xs: 12, sm: 6, md: 4 }}
      borderRadius={"10px"}
      sx={{ cursor: "pointer" }}
      bgcolor="#ffffff"
      boxShadow={"0px 10px 30px 0px rgba(0, 0, 0, 0.1)"}
      {...props}
    >
      <Box
        width="100%"
        p="30px"
        borderRadius={"10px"}
        bgcolor={"#F3EFE9"}
        boxShadow={"10px rgba(162, 162, 162, 0.08)"}
        position="relative"
        display={"flex"}
        flexDirection={"column"}
      >
        <Image
          src={imgUrl}
          alt={product?.images?.[0].name || ""}
          width="350"
          height="350"
          style={{ alignSelf: "center", objectFit: "contain" }}
          onClick={() => router.push(`/${product?.slug}`)}
        />
        <Box
          display="flex"
          alignItems={"center"}
          justifyContent={"space-between"}
          width="100%"
          overflow={"hidden"}
        >
          <Activity mode={showPrice ? "hidden" : "visible"}>
            <Typography
              color="#000"
              fontSize={{ xs: 16, sm: "18px" }}
              fontFamily={"Montserrat"}
              sx={{
                display: "-webkit-box",
                WebkitLineClamp: 1,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {product?.name}
            </Typography>
          </Activity>
          <Box
            display="flex"
            alignItems={"center"}
            justifyContent={"center"}
            gap="8px"
            width={showPrice ? "100%" : "fit-content"}
          >
            {product?.attributes
              ?.find((attr: any) => attr.name === "color")
              ?.terms?.map((color: { name: string }, index: number) => (
                <Box key={index} pb="6px" borderBottom={"1px solid #000"}>
                  <Box
                    key={index}
                    width="14px"
                    height={"14px"}
                    borderRadius={"100%"}
                    bgcolor={color.name}
                  ></Box>
                </Box>
              ))}
          </Box>
        </Box>
        <Image
          src={
            product?.inWishlist || isInWishlist ? icons.wishlisted : icons.star
          }
          alt="star"
          width="32"
          height="32"
          style={{
            position: "absolute",
            top: "22px",
            right: "22px",
            cursor: "pointer",
            zIndex: 60,
          }}
          onClick={addToWishlist}
        />
      </Box>
      <Activity mode={showPrice ? "visible" : "hidden"}>
        <Box
          width="100%"
          mt="12px"
          p="10px"
          onClick={() => router.push(`/${product?.id}`)}
          overflow={"hidden"}
        >
          <Box
            display="flex"
            alignItems={"center"}
            justifyContent={"space-between"}
            mb="8px"
            overflow={"hidden"}
          >
            <Typography
              color="rgba(0, 0, 0, .7)"
              fontSize={{ xs: 14, sm: "18px" }}
              fontFamily={"Montserrat"}
              textTransform={"capitalize"}
              sx={{
                display: "-webkit-box",
                WebkitLineClamp: 1,
                WebkitBoxOrient: "vertical",
                overflow: "ellipsis",
              }}
            >
              {collection?.name}
            </Typography>
            <Typography
              color="#000"
              fontSize={{ xs: 18, sm: "24px" }}
              fontWeight={600}
              fontFamily={"Montserrat"}
              whiteSpace={"nowrap"}
            >
              {product?.prices?.price_range
                ? `${formatWoocommercePrice(
                    product?.prices?.price_range?.min_amount!,
                  )} - ${formatWoocommercePrice(
                    product?.prices?.price_range?.max_amount!,
                  )}`
                : formatWoocommercePrice(product?.prices?.sale_price!)}
            </Typography>
          </Box>
          <Typography
            color="#000"
            fontSize={{ xs: 18, sm: "24px" }}
            fontFamily={"Montserrat"}
            sx={{
              display: "-webkit-box",
              WebkitLineClamp: 1,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {product?.name}
          </Typography>
        </Box>
      </Activity>
    </Grid>
  );
};

export default Product;
