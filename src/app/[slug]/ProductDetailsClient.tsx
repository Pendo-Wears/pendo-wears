"use client";

import { images } from "@/src/assets/images/images";
import {
  Box,
  CircularProgress,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import React, { Activity, use, useEffect, useState } from "react";
import Product from "../products/reusables/Product";
import { productsEndpoint } from "@/src/lib/endpoints";
import { useAuth } from "@/src/context/AuthContext";
import {
  formatPrice,
  formatWoocommercePrice,
  getPriceRange,
} from "@/src/lib/priceFormatter";
import {
  ProductDetailsType,
  SyncProduct,
  SyncVariant,
  WooProductDetails,
} from "@/src/lib/types";

const ProductDetailsClient = ({
  params,
}: {
  params: Promise<{ slug: string | number }>;
}) => {
    const { slug } = use(params);
  const { fireAlert } = useAuth();
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [productDetails, setProductDetails] =
    useState<ProductDetailsType | null>(null);
  const [wooproductDetails, setWooProductDetails] =
    useState<WooProductDetails | null>(null);
  const [selectedVariant, setSelectedVariant] = useState<SyncVariant | null>(
    null,
  );
  const [wooDesc, setWooDesc] = useState("");
  const [products, setProducts] = useState<any[]>([]);
  const [ShowFullDescription, setShowFullDescription] = useState(false);
  const [recentlyViewed, setRecentlyViewed] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");

  const saveRecentlyViewed = (data: any) => {
    let recents = [];
    const raw =
      typeof window !== "undefined"
        ? localStorage.getItem("recent") || "[]"
        : "[]";
    recents = JSON.parse(raw);
    setRecentlyViewed(
      recents.filter(
        (recent: SyncProduct) =>
          recent?.name?.split(" ").join("-").toLowerCase() !== slug,
      ),
    );

    const details = recents.find(
      (recent: SyncProduct) =>
        recent?.name?.split(" ").join("-").toLowerCase() === slug,
    );
    if (recents.length === 6) recents.pop();
    if (!details?.name) {
      recents = [data, ...recents];
      console.log(productDetails, "jjjjjjjj");
    }

    if (typeof window !== "undefined") {
      localStorage.setItem("recent", JSON.stringify(recents));
    }
  };

  const getProductDetails = async () => {
    // setLoading(true);
    // try {
    //   const result: any = await productsEndpoint.getProductDetails(slug);
    //   if (result.success) {
    //     setProductDetails(result.data);
    //     saveRecentlyViewed(result.data.sync_product);
    try {
      const wooResult: any = await productsEndpoint.getWooProductDetails(slug);

      if (wooResult.success) {
        setWooProductDetails(wooResult.data);
        setWooDesc(wooResult.data.description);
        saveRecentlyViewed(wooResult.data);
      }
    } catch (e: any) {
      fireAlert(e.message, "error");
    } finally {
      // setLoading(false);
    }
    //   }
    // } catch (e: any) {
    //   fireAlert(e.message, "error");
    // }
  };

  const getProducts = async () => {
    try {
      const details: any = await productsEndpoint.getProductDetails(
        wooproductDetails?.id!,
      );
      if (details.success && details.data.cross_sell_ids?.length > 0) {
        try {
          const result: any = await productsEndpoint.getWooProducts(
            `include=${details.data.cross_sell_ids.join(",")}`,
          );
          if (result.success) {
            setProducts(result.data);
          }
        } catch (e: any) {
          fireAlert(e.message, "error");
        }
      }
    } catch (e: any) {
      fireAlert(e.message, "error");
    }
  };
  // const [printfulProducts, setPrintfulProducts] = useState<SyncVariant>();
  const getPrintfulProducts = async () => {
    setLoading(true);
    try {
      const details: any = await productsEndpoint.getProducts();
      console.log(details.data);
      if (details.success) {
        const thisProduct = details.data.find(
          (x: SyncVariant) =>
            x.name.split(" ").join("-").toLowerCase() === slug,
        );
        try {
          const res: any = await productsEndpoint.getPrintfulProductDetails(
            thisProduct.id,
          );

          if (res.success) {
            setProductDetails(res.data);
          }
        } catch (e: any) {
          fireAlert(e.message, "error");
        } finally {
          setLoading(false);
        }
      }
    } catch (e: any) {
      fireAlert(e.message, "error");
    } finally {
      setLoading(false);
    }
  };

  // const addToCart = async () => {
  //   try {
  //     const result: any = await productsEndpoint.addToCart(
  //       productDetails?.id,
  //       1,
  //       [
  //         { attribute: "color", value: color },
  //         { attribute: "size", value: size },
  //       ]
  //     );
  //     console.log(result, "Added to cart");
  //     if (result.status === 200) {
  //       // setProducts(result.data);
  //     }
  //   } catch (e: any) {
  //     fireAlert(e.message, "error");
  //   }
  // };

  const isSameVariant = (a: any, b: any) =>
    a.id === b.id && a.color === b.color && a.size === b.size;

  const addToCart = (item: any) => {
    const raw =
      typeof window !== "undefined"
        ? localStorage.getItem("cart") || "[]"
        : "[]";
    const cart = JSON.parse(raw);

    const existing = cart.find((p: any) => isSameVariant(p, item));

    if (existing) {
      existing.quantity += item.quantity;
    } else {
      cart.push(item);
    }

    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
    fireAlert("Item successfully added to cart", "success");
  };

  useEffect(() => {
    if (slug) {
      getProductDetails();
      getPrintfulProducts();
    }
    localStorage.removeItem("orderId");
    if (wooproductDetails?.id) {
      getProducts();
    }
  }, []);

  const collection = wooproductDetails?.categories?.find(
    (x) =>
      x.slug === "noir-gold-collection" ||
      x.slug === "rhythm-thread-collection" ||
      x.slug === "heritage-alchemy-collection",
  );

  if (loading)
    return (
      <Box
        width="100%"
        height="100%"
        display="flex"
        alignItems={"center"}
        justifyContent={"center"}
        my="200px"
      >
        <CircularProgress size={24} sx={{ color: "#000" }} />
      </Box>
    );

  return (
    <Box px={{ xs: "16px", sm: "20px", md: "50px" }}>
      <Box
        display={"flex"}
        alignItems={"flex-start"}
        gap="60px"
        mb="90px"
        flexDirection={{ xs: "column", md: "row" }}
      >
        <Box
          width="100%"
          maxWidth="654px"
          height={{ xs: "500px", sm: "650px", md: "752px" }}
          borderRadius={"15px"}
          bgcolor="#F3EFE9"
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          sx={{
            backgroundImage: `url(${
              selectedVariant?.size
                ? selectedVariant?.product?.image
                : productDetails?.sync_product?.thumbnail_url || ""
            })`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
        >
          {/* <Image
            src={
              selectedVariant?.size
                ? selectedVariant?.product?.image
                : productDetails?.sync_product?.thumbnail_url || ""
            }
            alt={productDetails?.sync_product?.name || ""}
            width={mobile ? 300 : 500}
            height={mobile ? 400 : 600}
            style={{ objectFit: "contain" }}
          /> */}
        </Box>
        <Box width="100%" maxWidth="582px">
          <Box pb="25px" borderBottom={"1px solid #00000010"}>
            <Typography
              fontSize={{ xs: 14, sm: 16 }}
              fontFamily={"Montserrat"}
              color="#2D2D2D"
            >
              {collection?.name}
            </Typography>
            <Typography
              fontSize={{ xs: 24, sm: 32 }}
              fontFamily={"Montserrat"}
              color="#000"
              fontWeight={700}
              my="12px"
              textTransform={"uppercase"}
            >
              {productDetails?.sync_product?.name}
            </Typography>
            <Typography
              fontSize={{ xs: 18, sm: 24 }}
              fontFamily={"Montserrat"}
              color="#000"
              fontWeight={700}
            >
              {selectedVariant?.size
                ? formatPrice(Number(selectedVariant?.retail_price))
                : getPriceRange(productDetails?.sync_variants)}
            </Typography>
          </Box>
          {/* <Box py={{xs: '12px', sm: "25px"}} borderBottom={"1px solid #00000010"}>
            <Typography
              fontSize={16}
              fontFamily={"Montserrat"}
              color="#000"
              fontWeight={600}
              mb="10px"
            >
              Variants
            </Typography>
            <Box
              display="flex"
              alignItems={"center"}
              gap="26px"
              flexWrap={"wrap"}
            >
              {[
                ...new Set(
                  [
                    ...new Map(
                      productDetails?.sync_variants.map((item) => [
                        item.color,
                        item,
                      ])
                    ).values(),
                  ]
                    .filter((item) => !size || item.size === size)
                    .map((item) => item)
                ),
              ]?.map((variant: any) => (
                <Box
                  key={variant.name}
                  width="60px"
                  height={"60px"}
                  borderRadius={"2px"}
                  border={`1px solid ${
                    selectedVariant?.color === variant.color
                      ? "#D9D9D9"
                      : "transparent"
                  }`}
                  p="5px"
                  display="flex"
                  alignItems={"flex-start"}
                  justifyContent={"center"}
                  onClick={() =>
                    setSelectedVariant((prev: any) => ({
                      ...prev,
                      ...variant,
                      size: prev?.size ? prev?.size : "",
                      name: productDetails?.sync_product?.name,
                    }))
                  }
                >
                  <Image
                    src={variant?.product?.image || ""}
                    alt={variant?.product?.name || ""}
                    width={60}
                    height={60}
                    style={{ objectFit: "cover" }}
                  />
                </Box>
              ))}
            </Box>
          </Box>
          <Box py={{xs: '12px', sm: "25px"}} borderBottom={"1px solid #00000010"}>
            <Typography
              fontSize={16}
              fontFamily={"Montserrat"}
              color="#000"
              fontWeight={600}
              mb="10px"
            >
              Select Sizes
            </Typography>
            <Box
              display="flex"
              alignItems={"center"}
              flexWrap={"wrap"}
              gap="20px"
            >
              {[
                ...new Set(
                  [
                    ...new Map(
                      productDetails?.sync_variants.map((item) => [
                        item.size,
                        item,
                      ])
                    ).values(),
                  ]
                    .filter((item) => !color || item.color === color)
                    .map((item) => item)
                ),
              ]?.map((variant: SyncVariant) => (
                <Box
                  key={variant.id}
                  width="80px"
                  height={"40px"}
                  borderRadius={"2px"}
                  bgcolor={
                    selectedVariant?.size === variant.size ? "#000" : "#F1F3F4"
                  }
                  p="8px"
                  display="flex"
                  alignItems={"center"}
                  justifyContent={"center"}
                  sx={{ cursor: "pointer" }}
                  onClick={() =>
                    setSelectedVariant((prev: any) => ({
                      ...prev,
                      ...variant,
                      color: prev?.color ? prev?.color : "",
                      name: productDetails?.sync_product?.name,
                      product: { ...prev?.product },
                    }))
                  }
                >
                  <Typography
                    fontSize={20}
                    fontFamily={"Montserrat"}
                    color={
                      selectedVariant?.size === variant.size ? "#fff" : "#000"
                    }
                  >
                    {variant.size}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box> */}
          <Box
            py={{ xs: "12px", sm: "25px" }}
            borderBottom={"1px solid #00000010"}
          >
            <Typography
              fontSize={16}
              fontFamily={"Montserrat"}
              color="#000"
              fontWeight={600}
              mb="10px"
            >
              Variants
            </Typography>
            <Box
              display="flex"
              alignItems={"center"}
              gap="26px"
              flexWrap={"wrap"}
            >
              {productDetails?.sync_variants?.map((variant: any) => (
                <Box
                  key={variant.name}
                  width="60px"
                  height={"60px"}
                  borderRadius={"2px"}
                  border={`1px solid ${
                    selectedVariant?.name === variant.name
                      ? "#D9D9D9"
                      : "transparent"
                  }`}
                  p="5px"
                  display="flex"
                  alignItems={"flex-start"}
                  justifyContent={"center"}
                  onClick={() => setSelectedVariant(variant)}
                >
                  <Image
                    src={variant?.product?.image || ""}
                    alt={variant?.product?.name || ""}
                    width={60}
                    height={60}
                    style={{ objectFit: "cover" }}
                  />
                  <Typography
                    fontSize={14}
                    fontFamily={"Montserrat"}
                    color={"#000"}
                  >
                    /{variant.size}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
          <Box
            py={{ xs: "12px", sm: "25px" }}
            borderBottom={"1px solid #00000010"}
          >
            <Typography
              fontSize={16}
              fontFamily={"Montserrat"}
              color="#000"
              fontWeight={600}
              mb="10px"
            >
              Select Sizes
            </Typography>
            <Box
              display="flex"
              alignItems={"center"}
              flexWrap={"wrap"}
              gap="20px"
            >
              {productDetails?.sync_variants?.map((variant: SyncVariant) => (
                <Box
                  key={variant.id}
                  width="80px"
                  height={"40px"}
                  borderRadius={"2px"}
                  bgcolor={
                    selectedVariant?.size === variant.size ? "#000" : "#F1F3F4"
                  }
                  p="8px"
                  display="flex"
                  alignItems={"center"}
                  justifyContent={"center"}
                  sx={{ cursor: "pointer" }}
                  onClick={() => setSelectedVariant(variant)}
                >
                  <Typography
                    fontSize={20}
                    fontFamily={"Montserrat"}
                    color={
                      selectedVariant?.size === variant.size ? "#fff" : "#000"
                    }
                  >
                    {variant.size}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
          <Box
            py={{ xs: "12px", sm: "25px" }}
            borderBottom={"1px solid #00000010"}
          >
            <Typography
              fontSize={16}
              fontFamily={"Montserrat"}
              color="#000"
              fontWeight={600}
            >
              Description
            </Typography>
            <div
              style={{
                fontSize: 14,
                fontFamily: "Montserrat",
                color: "#656565",
                margin: "10px 0",
              }}
              dangerouslySetInnerHTML={{
                __html:
                  wooDesc?.length > 257 && !ShowFullDescription
                    ? wooDesc?.slice(0, 257) + "..."
                    : wooDesc,
              }}
            />
            <Activity mode={wooDesc?.length > 257 ? "visible" : "hidden"}>
              <Typography
                fontSize={12}
                fontFamily={"Montserrat"}
                color="#000"
                fontWeight={600}
                pb="5px"
                borderBottom={"1px solid black"}
                display={"inline"}
                onClick={() => setShowFullDescription(!ShowFullDescription)}
              >
                {ShowFullDescription ? "Read less" : "Read more"}
              </Typography>
            </Activity>
          </Box>
          <Box
            mt="30px"
            width="100%"
            height="57px"
            bgcolor="#000"
            borderRadius={"100px"}
            display="flex"
            alignItems={"center"}
            justifyContent={"center"}
            sx={{
              cursor: "pointer",
              opacity: 1,
              pointerEvents: "all",
            }}
            onClick={() => {
              if (!selectedVariant?.id) {
                fireAlert("Select a variant, [Color | Size]", "warning");
                return;
              }
              addToCart({
                ...selectedVariant,
                quantity: 1,
                product: {
                  ...selectedVariant?.product,
                  name: productDetails?.sync_product.name,
                },
              });
            }}
          >
            <Typography
              fontSize={16}
              fontFamily={"Montserrat"}
              fontWeight={500}
              color="#FFFFFF"
              width="fit-content"
              sx={{ whiteSpace: "noWrap" }}
            >
              Add to cart
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box mb="70px">
        <Typography
          fontSize={{ xs: 24, sm: 32 }}
          fontFamily={"Montserrat"}
          color="#000"
          fontWeight={700}
          mb="20px"
        >
          Cross sale
        </Typography>
        <Activity mode={products?.length > 0 ? "visible" : "hidden"}>
          <Grid container spacing="30px">
            {products.map((product, index) => (
              <Product product={product} key={index} />
            ))}
          </Grid>
        </Activity>
        <Activity mode={products?.length === 0 ? "visible" : "hidden"}>
          <Typography
            textAlign={"center"}
            style={{
              fontSize: 14,
              fontFamily: "Montserrat",
              color: "#656565",
              margin: "10px 0",
            }}
          >
            No items
          </Typography>
        </Activity>
      </Box>
      <Box>
        <Typography
          fontSize={{ xs: 24, sm: 32 }}
          fontFamily={"Montserrat"}
          color="#000"
          fontWeight={700}
          mb="20px"
        >
          Recently viewed
        </Typography>
        <Activity mode={recentlyViewed?.length > 0 ? "visible" : "hidden"}>
          <Box
            pb="70px"
            bgcolor="#fff"
            display="flex"
            gap="30px"
            flexWrap={"nowrap"}
            sx={{
              overflow: "auto",
              "&::-webkit-scrollbar": {
                display: "none",
              },
            }}
          >
            {recentlyViewed?.map((product, index) => (
              <Product
                product={product}
                key={index}
                maxWidth={"424px"}
                minWidth={"424px"}
                flex={1}
              />
            ))}
          </Box>
        </Activity>
        <Activity mode={recentlyViewed?.length === 0 ? "visible" : "hidden"}>
          <Typography
            textAlign={"center"}
            style={{
              fontSize: 14,
              fontFamily: "Montserrat",
              color: "#656565",
              margin: "10px 0",
            }}
          >
            No recently viewed items
          </Typography>
        </Activity>
      </Box>
    </Box>
  );
};

export default ProductDetailsClient;
