"use client";

import { icons } from "@/src/assets/icons/icons";
import { images } from "@/src/assets/images/images";
import MultilinkUI from "@/src/components/MultilinkUI";
import {
  Box,
  CircularProgress,
  Grid,
  Radio,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React, { Activity, use, useEffect, useState } from "react";
import Product from "../../products/reusables/Product";
import MenuUI from "@/src/components/MenuUI";
import { useAuth } from "@/src/context/AuthContext";
import { productsEndpoint } from "@/src/lib/endpoints";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { formatWoocommercePrice } from "@/src/lib/priceFormatter";

const Collections = ({ params }: { params: Promise<{ slug: string }> }) => {
  const router = useRouter();
  const pathname = usePathname();
  const { slug } = use(params);
  const { fireAlert } = useAuth();
  const [products, setProducts] = useState<any[]>([]);
  const [categories, setCategories] = useState<
    {
      name: string;
      slug: string;
      id: number;
    }[]
  >([]);
  const [category, setCategory] = useState<{
    name: string;
    slug: string;
    image: {
      src: string;
      alt: string;
    };
  } | null>(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [collectionData, setCollectionData] = useState<any>({});
  const searchParams = useSearchParams();
  const param = new URLSearchParams(searchParams.toString());
  const [filterOptions, setFilterOptions] = useState({
    category: "",
    tag: "",
    attribute: "",
    price: ["", ""],
  });

  const handleMenuFilter = (event: React.MouseEvent<HTMLElement>) => {
    getCollectionData();
    setAnchorEl(event.currentTarget);
  };

  const handleFilter = async () => {
    try {
      if (filterOptions.attribute) {
        param.set("attributes[0][slug]", filterOptions.attribute);
      }

      if (filterOptions.category) {
        param.set("category", filterOptions.category);
      }

      if (filterOptions.price[0]) {
        param.set("min_price", String(Number(filterOptions.price[0]) * 100));
      }

      if (filterOptions.price[1]) {
        param.set("max_price", String(Number(filterOptions.price[1]) * 100));
      }

      if (filterOptions.tag) {
        param.set("tag", filterOptions.tag);
      }

      router.replace(`${pathname}?${param.toString()}`);
      const result: any = await productsEndpoint.getWooProducts(
        param.toString().includes("category")
          ? param.toString()
          : `category=${param.get("id")}`,
      );
      if (result.success) {
        setProducts(result.data);
      }
    } catch (e: any) {
      fireAlert(e.message, "error");
    } finally {
      setAnchorEl(null);
    }
  };

  const handleResetFilter = () => {
    setFilterOptions({
      category: "",
      tag: "",
      attribute: "",
      price: ["", ""],
    });
    param.delete(`attributes[0][slug]`);
    param.delete(`category`);
    param.delete(`tag`);
    param.delete(`min_price`);
    param.delete(`max_price`);

    router.replace(`${pathname}?${param.toString()}`);
  };

  const getCollectionData = async () => {
    try {
      const result: any = await productsEndpoint.getCollectionData();
      if (result.status === 200) {
        setCollectionData(result.data);
      }
    } catch (e: any) {
      fireAlert(e.message, "error");
    }
  };

  const getCategories = async () => {
    try {
      const result: any = await productsEndpoint.getCategories();
      if (result.status === 200) {
        setCategories(result.data);
      }
    } catch (e: any) {
      fireAlert(e.message, "error");
    }
  };

  const getCategory = async () => {
    try {
      const result: any = await productsEndpoint.getCategory(
        searchParams.get("id") || "",
      );
      if (result.status === 200) {
        setCategory(result.data);
        getProducts();
      }
    } catch (e: any) {
      fireAlert(e.message, "error");
    }
  };

  const [loading, setLoading] = useState(false);

  const getProducts = async () => {
    setLoading(true);
    try {
      const result: any = await productsEndpoint.getWooProducts(
        `category=${param.get("id")}`,
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
    getCategories();
    getCategory();
    setFilterOptions((prev) => ({
      ...prev,
      category: slug,
    }));
  }, []);

  const storeUrl = process.env.NEXT_PUBLIC_WOO_STORE_URL;

  const imgUrl = category?.image?.src?.replace(
    new URL(category?.image?.src).origin,
    storeUrl!,
  );

  // console.log(imgUrl, "ASDFGHJKL");
  return (
    <Box pb="46px">
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        width="100%"
        mb="30px"
        flexWrap={{ xs: "wrap", sm: "nowrap" }}
        px={{ xs: "16px", sm: "20px", md: "50px" }}
        gap={{ xs: 2 }}
      >
        <Typography
          fontSize={{ xs: 18, sm: 24 }}
          fontFamily={"Montserrat"}
          width="fit-content"
          sx={{ whiteSpace: "noWrap" }}
        >
          {products?.length || 0} Results
        </Typography>
        <MultilinkUI
          links={categories
            .filter(
              (x) =>
                x.slug !== "noir-gold-collection" &&
                x.slug !== "rhythm-thread-collection" &&
                x.slug !== "heritage-alchemy-collection",
            )
            .map((category) => ({
              name: category.name,
              to: `/collection/${category.slug}?id=${category.id}`,
            }))}
        />
        <Box
          display="flex"
          alignItems={"center"}
          ml="auto"
          justifyContent={"space-around"}
          minWidth="114px"
          minHeight="45px"
          border={"1px solid #000"}
          borderRadius={"100px"}
          sx={{ cursor: "pointer" }}
          onClick={handleMenuFilter}
        >
          <Typography fontSize={14} fontFamily={"Montserrat"}>
            Filter
          </Typography>
          <Image src={icons.filter} alt="filter" width="24" height="24" />
        </Box>
      </Box>
      <Box
        width="100%"
        height="527px"
        bgcolor="#F3EFE9"
        display="flex"
        alignItems={"flex-end"}
        justifyContent={"center"}
        mb="34px"
      >
        <Box
          width="100%"
          height="527px"
          position="relative"
          overflow={"hidden"}
        >
          <Activity mode={category?.name && imgUrl ? "visible" : "hidden"}>
            <Image
              src={imgUrl!}
              alt={category?.image?.alt!}
              fill
              style={{ objectFit: "contain" }}
              loading="eager"
            />
          </Activity>
        </Box>
      </Box>
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
        <Grid
          container
          spacing="30px"
          px={{ xs: "16px", sm: "20px", md: "50px" }}
        >
          {products.map((product, index) => (
            <Product product={product} key={index} />
          ))}
        </Grid>
      )}
      <MenuUI
        onClose={() => setAnchorEl(null)}
        anchorEl={anchorEl}
        style={{ width: "632px", height: "fit-content", mt: "24px" }}
        anchor={{
          horizontal: "left",
          vertical: "bottom",
        }}
      >
        <Box pb="30px" borderRadius={"20px"} px="48px">
          <Box
            py="48px"
            display="flex"
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Typography
              fontSize={20}
              fontFamily={"Montserrat"}
              width="fit-content"
              sx={{ whiteSpace: "noWrap" }}
            >
              Show filter
            </Typography>
            <Image
              src={icons.close}
              alt="close"
              width="20"
              height="20"
              onClick={() => setAnchorEl(null)}
            />
          </Box>
          <Box
            display={"flex"}
            flexDirection={"column"}
            gap="30px"
            pb="30px"
            borderBottom={"1px solid #00000010"}
            mb="19px"
          >
            <Box
              display="flex"
              alignItems={"center"}
              justifyContent={"space-between"}
              onClick={() =>
                setFilterOptions((prev) => ({
                  ...prev,
                  category: "heritage-alchemy-collection",
                }))
              }
            >
              <Typography
                fontSize={{ xs: 14, sm: 18 }}
                fontFamily={"Montserrat"}
                width="fit-content"
                sx={{ whiteSpace: "noWrap" }}
                color="#1A1A1A"
              >
                Heritage Alchemy
              </Typography>
              <Radio
                checked={
                  filterOptions.category === "heritage-alchemy-collection"
                }
              />
            </Box>
            <Box
              display="flex"
              alignItems={"center"}
              justifyContent={"space-between"}
              onClick={() =>
                setFilterOptions((prev) => ({
                  ...prev,
                  category: "noir-gold-collection",
                }))
              }
            >
              <Typography
                fontSize={{ xs: 14, sm: 18 }}
                fontFamily={"Montserrat"}
                width="fit-content"
                sx={{ whiteSpace: "noWrap" }}
                color="#1A1A1A"
              >
                Noir Gold
              </Typography>
              <Radio
                checked={filterOptions.category === "noir-gold-collection"}
              />
            </Box>
            <Box
              display="flex"
              alignItems={"center"}
              justifyContent={"space-between"}
              onClick={() =>
                setFilterOptions((prev) => ({
                  ...prev,
                  category: "rhythm-thread-collection",
                }))
              }
            >
              <Typography
                fontSize={{ xs: 14, sm: 18 }}
                fontFamily={"Montserrat"}
                width="fit-content"
                sx={{ whiteSpace: "noWrap" }}
                color="#1A1A1A"
              >
                Rhythm & Thread Collection
              </Typography>
              <Radio
                checked={filterOptions.category === "rhythm-thread-collection"}
              />
            </Box>
          </Box>
          <Box
            display={"flex"}
            flexDirection={"column"}
            gap="30px"
            pb="30px"
            borderBottom={"1px solid #00000010"}
            mb="19px"
          >
            <Box
              display="flex"
              alignItems={"center"}
              justifyContent={"space-between"}
              onClick={() =>
                setFilterOptions((prev) => ({ ...prev, tag: "men" }))
              }
            >
              <Typography
                fontSize={{ xs: 14, sm: 18 }}
                fontFamily={"Montserrat"}
                width="fit-content"
                sx={{ whiteSpace: "noWrap" }}
                color="#1A1A1A"
              >
                Men
              </Typography>
              <Radio checked={filterOptions.tag === "men"} />
            </Box>
            <Box
              display="flex"
              alignItems={"center"}
              justifyContent={"space-between"}
              onClick={() =>
                setFilterOptions((prev) => ({ ...prev, tag: "women" }))
              }
            >
              <Typography
                fontSize={{ xs: 14, sm: 18 }}
                fontFamily={"Montserrat"}
                width="fit-content"
                sx={{ whiteSpace: "noWrap" }}
                color="#1A1A1A"
              >
                Women
              </Typography>
              <Radio checked={filterOptions.tag === "women"} />
            </Box>
            <Box
              display="flex"
              alignItems={"center"}
              justifyContent={"space-between"}
              onClick={() =>
                setFilterOptions((prev) => ({ ...prev, tag: "kids" }))
              }
            >
              <Typography
                fontSize={{ xs: 14, sm: 18 }}
                fontFamily={"Montserrat"}
                width="fit-content"
                sx={{ whiteSpace: "noWrap" }}
                color="#1A1A1A"
              >
                Kids
              </Typography>
              <Radio checked={filterOptions.tag === "kids"} />
            </Box>
          </Box>
          <Box
            mt="19px"
            display="flex"
            alignItems={"center"}
            gap="27px"
            pb="30px"
            borderBottom={"1px solid #00000010"}
            mb="19px"
          >
            {["red", "white", "yellow", "orange", "grey"].map((color) => (
              <Box
                key={color}
                border={`2px solid ${
                  filterOptions.attribute === color ? "#000000" : "transparent"
                }`}
                borderRadius={"5px"}
                p={"2px"}
              >
                <Box
                  width="40px"
                  height="40px"
                  borderRadius={"5px"}
                  bgcolor={color}
                  onClick={() => {
                    setFilterOptions((prev) => ({
                      ...prev,
                      attribute: color,
                    }));
                  }}
                ></Box>
              </Box>
            ))}
          </Box>
          <Box
            mt="13px"
            display="flex"
            alignItems={"center"}
            justifyContent={"space-between"}
            mb="12px"
          >
            <Typography
              fontSize={{ xs: 18, sm: 24 }}
              fontFamily={"Montserrat"}
              fontWeight={600}
              color="#1B1B1B"
              width="fit-content"
              sx={{ whiteSpace: "noWrap" }}
            >
              Price Range
            </Typography>
            <Typography
              fontSize={{ xs: 14, sm: 16 }}
              fontFamily={"Montserrat"}
              fontWeight={600}
              color="#1B1B1B"
              width="fit-content"
              sx={{ whiteSpace: "noWrap" }}
            >
              {formatWoocommercePrice(collectionData?.price_range?.min_price)} -{" "}
              {formatWoocommercePrice(collectionData?.price_range?.max_price)}
            </Typography>
          </Box>
          <Box display="flex" alignItems={"center"} mb="30px" gap="16px">
            <TextField
              fullWidth
              variant="outlined"
              type={"text"}
              placeholder="Min price"
              value={filterOptions.price[0]}
              onChange={(e) => {
                setFilterOptions((prev) => ({
                  ...prev,
                  price: [e.target.value, prev.price[1]],
                }));
              }}
              sx={{
                bgcolor: "#fff",
                borderRadius: "10px",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    border: "1px solid #00000020",
                    borderRadius: "10px", // remove border normally
                  },
                  "&:hover fieldset": {
                    borderRadius: "10px",
                    border: "1px solid 00000020", // optional: show on hover
                  },
                  "&.Mui-focused fieldset": {
                    borderRadius: "10px",
                    border: "1px solid 00000020", // show border on focus
                  },
                },
                input: {
                  fontFamily: "Montserrat",
                  p: "12px",
                  borderRadius: "10px",
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
              placeholder="Max price"
              value={filterOptions.price[1]}
              onChange={(e) => {
                setFilterOptions((prev) => ({
                  ...prev,
                  price: [prev.price[0], e.target.value],
                }));
              }}
              sx={{
                bgcolor: "#fff",
                borderRadius: "10px",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    border: "1px solid #00000020",
                    borderRadius: "10px", // remove border normally
                  },
                  "&:hover fieldset": {
                    borderRadius: "10px",
                    border: "1px solid 00000020", // optional: show on hover
                  },
                  "&.Mui-focused fieldset": {
                    borderRadius: "10px",
                    border: "1px solid 00000020", // show border on focus
                  },
                },
                input: {
                  fontFamily: "Montserrat",
                  p: "12px",
                  borderRadius: "10px",
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
          <Box
            mt="30px"
            width="150px"
            height={{ xs: "48px", sm: "57px" }}
            border={"1px solid #00000080"}
            borderRadius={"100px"}
            display="flex"
            alignItems={"center"}
            justifyContent={"center"}
            sx={{ cursor: "pointer", ml: "auto" }}
            onClick={handleResetFilter}
          >
            <Typography
              fontSize={16}
              fontFamily={"Montserrat"}
              fontWeight={500}
              color="#000"
              width="fit-content"
              sx={{ whiteSpace: "noWrap" }}
            >
              Reset filter
            </Typography>
          </Box>
          <Box
            mt="30px"
            width="100%"
            height={{ xs: "48px", sm: "57px" }}
            bgcolor="#000"
            borderRadius={"100px"}
            display="flex"
            alignItems={"center"}
            justifyContent={"center"}
            sx={{ cursor: "pointer" }}
            onClick={handleFilter}
          >
            <Typography
              fontSize={16}
              fontFamily={"Montserrat"}
              fontWeight={500}
              color="#FFFFFF"
              width="fit-content"
              sx={{ whiteSpace: "noWrap" }}
            >
              Okay
            </Typography>
          </Box>
        </Box>
      </MenuUI>
    </Box>
  );
};

export default Collections;
