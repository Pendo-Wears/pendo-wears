"use client";

import { icons } from "@/src/assets/icons/icons";
import { images } from "@/src/assets/images/images";
import { Box, Grid, MenuItem, Typography } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Product from "../products/reusables/Product";
import MenuUI from "@/src/components/MenuUI";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { productsEndpoint } from "@/src/lib/endpoints";
import { useAuth } from "@/src/context/AuthContext";

const Shop = () => {
  const router = useRouter();
  const pathname = usePathname()
  const { fireAlert } = useAuth();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [products, setProducts] = useState<any[]>([]);
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
        console.log(result);
        if (result.status === 200) {
          setCategories(result.data);
        }
      } catch (e: any) {
        fireAlert(e.message, "error");
      }
    };

  const items = categories
    .filter((x) => x.slug === "noir-gold" || x.slug === "rhythm-thread")
    ?.map((category) => ({
      label: category.name,
      action: () => {
        param.set("category", category.slug)
        param.set("type", category.name)
        router.replace(`${pathname}?${param.toString()}`);
        getProducts();
      },
    }));

  const getProducts = async () => {
    try {
      const result: any = await productsEndpoint.getWooProducts(
        `category=${param.get("category")}`
      );
      if (result.success) {
        setProducts(result.data);
      }
    } catch (e: any) {
      fireAlert(e.message, "error");
    }
  };

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);
  return (
    <Box px={{ xs: "16px", sm: "20px", md: "50px" }} pb="200px">
      <Box
        width="100%"
        display="flex"
        alignItems={"center"}
        gap="10px"
        justifyContent={"space-between"}
        mb="30px"
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
            color="#656565"
            fontSize={"20px"}
            fontWeight={500}
            fontFamily={"Montserrat"}
          >
            Look
          </Typography>
          <Typography
            p="8px"
            color="#656565"
            fontSize={"20px"}
            fontWeight={500}
            fontFamily={"Montserrat"}
          >
            Products
          </Typography>
        </Box>
      </Box>
      <Box display="flex" gap="37px">
        <Box display="flex" flexDirection={"column"} gap="23px">
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
          height="auto"
          flex={1}
          bgcolor="#F3EFE9"
          display="flex"
          alignItems={"flex-end"}
          justifyContent={"center"}
        >
          <Image src={images.cloth} alt="col" width={900} height="900" />
        </Box>
      </Box>
      <Box py="60px">
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
      <Grid container spacing="30px">
        {products.map((product, index) => (
          <Product product={product} showPrice={false} key={index} />
        ))}
      </Grid>
      <Box width="100%" py="60px" display="flex">
        <Image
          src={images.woman1}
          alt="col"
          style={{ objectFit: "cover", maxWidth: "1512" }}
          height="717"
        />
      </Box>
      <Grid container spacing="30px">
        {products.map((product, index) => (
          <Product product={product} showPrice={false} key={index} />
        ))}
      </Grid>
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
