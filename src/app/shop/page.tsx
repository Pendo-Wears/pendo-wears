"use client";

import { icons } from "@/src/assets/icons/icons";
import { images } from "@/src/assets/images/images";
import {
  Box,
  CircularProgress,
  Grid,
  MenuItem,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import React, { Activity, useEffect, useState } from "react";
import Product from "../products/reusables/Product";
import MenuUI from "@/src/components/MenuUI";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { productsEndpoint } from "@/src/lib/endpoints";
import { useAuth } from "@/src/context/AuthContext";

const Shop = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { fireAlert } = useAuth();
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [products, setProducts] = useState<any[]>([]);
  const [openGallery, setOpenGallery] = useState(false);
  const [categories, setCategories] = useState<
    {
      name: string;
      slug: string;
      id: number;
    }[]
  >([]);
  const searchParams = useSearchParams();
  const param = new URLSearchParams(searchParams.toString());

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const getCategories = async () => {
    try {
      const result: any = await productsEndpoint.getCategories();
      // console.log(result);
      if (result.status === 200) {
        setCategories(result.data);
      }
    } catch (e: any) {
      fireAlert(e.message, "error");
    }
  };

  const items = categories
    .filter(
      (x) =>
        x.slug === "noir-gold-collection" ||
        x.slug === "rhythm-thread-collection" ||
        x.slug === "heritage-alchemy-collection",
    )
    ?.map((category) => ({
      label: category.name,
      action: () => {
        param.set("category", category.slug);
        param.set("type", category.name);
        router.replace(`${pathname}?${param.toString()}`);
        getProducts();
      },
    }));

  const [loading, setLoading] = useState(false);

  const getProducts = async () => {
    setLoading(true);
    try {
      const result: any = await productsEndpoint.getWooProducts(
        param.size === 0 ? "" : `category=${param.get("category")}`,
      );
      if (result.success) {
        setProducts(result.data);
      }
    } catch (e: any) {
      fireAlert(e.message, "error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);
  return (
    <Box px={{ xs: 0, sm: "20px", md: "50px" }} pb="200px">
      <Box
        width="100%"
        display="flex"
        alignItems={"center"}
        gap="10px"
        justifyContent={"space-between"}
        flexDirection={{ xs: "column", sm: "row" }}
        mb="30px"
        px={{ xs: 2, sm: 0 }}
      >
        <Box
          p="8px"
          display="flex"
          alignItems={"center"}
          gap="10px"
          onClick={handleMenuOpen}
          sx={{ cursor: "pointer" }}
        >
          <Typography
            color="#1A1A1A"
            fontSize={"20px"}
            fontWeight={600}
            fontFamily={"Montserrat"}
          >
            {param.get("type")}
          </Typography>
          <Image
            src={icons.arrowDown}
            alt="arrow_down"
            width="18"
            height="10"
          />
        </Box>
        <Box display="flex" alignItems={"center"} gap="6px">
          <Typography
            p="8px"
            color={openGallery ? "#000" : "#656565"}
            fontSize={"20px"}
            fontWeight={openGallery ? 700 : 500}
            fontFamily={"Montserrat"}
            sx={{
              cursor: "pointer",
              "&:hover": {
                color: "#000",
                fontWeight: 700,
                transition: "color .8s ease",
              },
            }}
            onClick={() => setOpenGallery(true)}
          >
            Look
          </Typography>
          <Typography
            p="8px"
            color={!openGallery ? "#000" : "#656565"}
            fontSize={"20px"}
            fontWeight={!openGallery ? 700 : 500}
            fontFamily={"Montserrat"}
            sx={{
              cursor: "pointer",
              "&:hover": {
                color: "#000",
                fontWeight: 700,
                transition: "color .8s ease",
              },
            }}
            onClick={() => setOpenGallery(false)}
          >
            Products
          </Typography>
        </Box>
      </Box>
      <Box
        display="flex"
        gap="37px"
        flexDirection={{ xs: "column", sm: "row" }}
        px={{ xs: 2, sm: 0 }}
      >
        <Box
          display="flex"
          flexDirection={{ xs: "row", sm: "column" }}
          overflow={"auto"}
          gap="23px"
        >
          <Box p="10px" border="2px solid #D0950F" borderRadius={"15px"}>
            <Image src={images.gold1} alt="col" width="140" height="140" />
          </Box>
          <Box p="10px" border="1px solid #00000080" borderRadius={"15px"}>
            <Image src={images.gold2} alt="col" width="140" height="140" />
          </Box>
          <Box p="10px" border="1px solid #00000080" borderRadius={"15px"}>
            <Image src={images.gold1} alt="col" width="140" height="140" />
          </Box>
          <Box p="10px" border="1px solid #00000080" borderRadius={"15px"}>
            <Image src={images.gold1} alt="col" width="140" height="140" />
          </Box>
          <Box p="10px" border="1px solid #00000080" borderRadius={"15px"}>
            <Image src={images.gold1} alt="col" width="140" height="140" />
          </Box>
        </Box>
        <Box
          width="100%"
          maxWidth={"1300px"}
          height={{ xs: "500px", sm: "auto" }}
          flex={{ xs: undefined, sm: 1 }}
          bgcolor="#F3EFE9"
          // display="flex"
          // alignItems={"flex-end"}
          // justifyContent={"center"}
          sx={{
            backgroundImage: `url(${images.cloth.src})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
        >
          {/* <Image src={images.cloth} alt="col" fill /> */}
        </Box>
      </Box>
      <Box py="60px" px={{ xs: 2, sm: 0 }}>
        <Typography
          color="#1A1A1A"
          fontSize={"16px"}
          fontFamily={"Montserrat"}
          textAlign={"center"}
          maxWidth="985px"
          mx="auto"
        >
          The defining line of Pendo. Each piece combines Ghanaian Adinkra
          symbolism, Mudcloth geometry, and Kente precision into a cohesive
          grid. Executed in matte black cotton with metallic gold highlights.
          Designed for cultural connoisseurs who value subtle heritage in modern
          form.
        </Typography>
      </Box>
      <Box px={{ xs: 2, sm: 0 }}>
        <Activity mode={openGallery ? "hidden" : "visible"}>
          {loading ? (
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
          ) : (
            <Grid container spacing="30px">
              {products.map((product, index) => (
                <Product product={product} showPrice={false} key={index} />
              ))}
            </Grid>
          )}
        </Activity>
        <Activity mode={openGallery ? "visible" : "hidden"}>
          <Box
            width="100%"
            height={{ xs: "fit-content", md: "788px" }}
            display="flex"
            flexWrap={{ xs: "wrap", md: "nowrap" }}
            alignItems={"center"}
            gap="40px"
            mt="60px"
          >
            <Box
              width={{ xs: "100%", md: "40%" }}
              bgcolor="#F3EFE9"
              height={{ xs: "400px", md: "100%" }}
              sx={{
                backgroundImage: `url(${images.gallery3.src})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
              }}
            ></Box>
            <Box
              width={{ xs: "100%", md: "60%" }}
              bgcolor="#F3EFE9"
              height={{ xs: "400px", md: "100%" }}
              sx={{
                backgroundImage: `url(${images.gallery1.src})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
              }}
            ></Box>
          </Box>
        </Activity>
        <Activity mode={openGallery ? "visible" : "hidden"}>
          <Box
            width="100%"
            height={{ xs: "fit-content", md: "788px" }}
            display="flex"
            flexWrap={{ xs: "wrap", md: "nowrap" }}
            alignItems={"center"}
            gap="40px"
            mt="60px"
          >
            <Box
              width={{ xs: "100%", md: "60%" }}
              bgcolor="#F3EFE9"
              height={{ xs: "400px", md: "100%" }}
              sx={{
                backgroundImage: `url(${images.gallery6.src})`,
                backgroundPosition: "center bottom",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
              }}
            ></Box>
            <Box
              width={{ xs: "100%", md: "40%" }}
              bgcolor="#F3EFE9"
              height={{ xs: "400px", md: "100%" }}
              sx={{
                backgroundImage: `url(${images.gallery5.src})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
              }}
            ></Box>
          </Box>
        </Activity>
      </Box>
      <Box
        my="60px"
        width="100%"
        height="717px"
        sx={{
          backgroundImage: `url(${images.woman1.src})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></Box>
      <Box px={{ xs: 2, sm: 0 }}>
        <Activity mode={openGallery ? "hidden" : "visible"}>
          {loading ? (
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
          ) : (
            <Grid container spacing="30px">
              {products.map((product, index) => (
                <Product product={product} showPrice={false} key={index} />
              ))}
            </Grid>
          )}
        </Activity>
        <Activity mode={openGallery ? "visible" : "hidden"}>
          <Box
            width="100%"
            height={{ xs: "fit-content", md: "788px" }}
            display="flex"
            flexWrap={{ xs: "wrap", md: "nowrap" }}
            alignItems={"center"}
            gap="40px"
            mt="60px"
          >
            <Box
              width={{ xs: "100%", md: "40%" }}
              bgcolor="#F3EFE9"
              height={{ xs: "400px", md: "100%" }}
              sx={{
                backgroundImage: `url(${images.gallery2.src})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
              }}
            ></Box>
            <Box
              width={{ xs: "100%", md: "60%" }}
              bgcolor="#F3EFE9"
              height={{ xs: "400px", md: "100%" }}
              sx={{
                backgroundImage: `url(${images.gallery4.src})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
              }}
            ></Box>
          </Box>
        </Activity>
      </Box>
      <MenuUI
        onClose={() => setAnchorEl(null)}
        anchorEl={anchorEl}
        anchor={{
          horizontal: "left",
          vertical: "bottom",
        }}
        style={{ height: "fit-content", width: "fit-content" }}
      >
        <Box py="12px" borderRadius={"20px"}>
          {items.map((item) => (
            <MenuItem
              onClick={() => {
                item.action();
                setAnchorEl(null);
              }}
            >
              <Box
                key={item.label}
                display="flex"
                alignItems="center"
                gap="12px"
                py="12px"
                px="16px"
                fontSize={18}
                color="#000"
                fontFamily={"Montserrat"}
                sx={{ cursor: "pointer" }}
              >
                {item.label}
              </Box>
            </MenuItem>
          ))}
        </Box>
      </MenuUI>
    </Box>
  );
};

export default Shop;
