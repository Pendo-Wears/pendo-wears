"use client";

import { icons } from "@/src/assets/icons/icons";
import { Box, Grid, Radio, TextField, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import React, { Activity, useEffect, useState } from "react";
import Product from "../products/reusables/Product";
import MenuUI from "@/src/components/MenuUI";
import { productsEndpoint } from "@/src/lib/endpoints";
import { useAuth } from "@/src/context/AuthContext";
import { formatPrice, formatWoocommercePrice } from "@/src/lib/priceFormatter";

const Search = () => {
  const { fireAlert } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [collectionData, setCollectionData] = useState<any>({});
  const params = new URLSearchParams(searchParams.toString());
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
        params.set("attributes[0][slug]", filterOptions.attribute);
      }

      if (filterOptions.category) {
        params.set("category", filterOptions.category);
      }

      if (filterOptions.price[0]) {
        params.set("min_price", String(Number(filterOptions.price[0]) * 100));
      }

      if (filterOptions.price[1]) {
        params.set("max_price", String(Number(filterOptions.price[1]) * 100));
      }

      if (filterOptions.tag) {
        params.set("tag", filterOptions.tag);
      }

      router.replace(`/search?${params.toString()}`);
      const result: any = await productsEndpoint.getWooProducts(params.toString());
      if (result.status === 200) {
        setSearchResults(result.data);
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
    params.delete(`attributes[0][slug]`);
    params.delete(`category`);
    params.delete(`tag`);
    params.delete(`min_price`);
    params.delete(`max_price`);

    router.replace(`/search?${params.toString()}`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }

    setSearch(value);

    router.replace(`/search?${params.toString()}`);

    getProducts(params.toString());
  };

  const getProducts = async (query: any) => {
    try {
      const result: any = await productsEndpoint.searchProducts(query);
      if (result.status === 200) {
        setSearchResults(result.data);
      }
    } catch (e: any) {
      fireAlert(e.message, "error");
    }
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

  useEffect(() => {
    console.log(collectionData, "tttt");
    if (search.length === 0) {
      setSearchResults([]);
      setFilterOptions({
        category: "",
        tag: "",
        attribute: "",
        price: ["", ""],
      });
    } else getProducts(params.toString());
  }, [search, filterOptions]);
  return (
    <Box px={{ xs: "16px", sm: "20px", md: "50px" }} pb="139px">
      <Box width="100%" display="flex" justifyContent={"center"}>
        <TextField
          fullWidth
          autoFocus={true}
          variant="outlined"
          type={"text"}
          placeholder="Search for Pendo Wears"
          defaultValue={searchParams.get("search") || ""}
          onChange={handleChange}
          InputProps={{
            endAdornment: (
              <Activity mode={search.length ? "visible" : "hidden"}>
                <Box
                  display="flex"
                  alignItems={"center"}
                  justifyContent={"center"}
                  minWidth="45px"
                  maxWidth="45px"
                  minHeight="45px"
                  maxHeight="45px"
                  borderRadius={"100%"}
                  border="1px solid #000"
                >
                  {" "}
                  <Image
                    src={icons.filter}
                    alt="toggle filter"
                    width="20"
                    height="20"
                    style={{ cursor: "pointer" }}
                    onClick={handleMenuFilter}
                  />
                </Box>
              </Activity>
            ),
          }}
          sx={{
            bgcolor: "#fff",
            borderRadius: "100px",
            maxWidth: "1000px",
            mx: "auto",
            mb: "72px",
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                border: "1px solid #00000020",
                borderRadius: "100px", // remove border normally
              },
              "&:hover fieldset": {
                borderRadius: "100px",
                border: "1px solid 00000020", // optional: show on hover
              },
              "&.Mui-focused fieldset": {
                borderRadius: "100px",
                border: "1px solid 00000020", // show border on focus
              },
            },
            input: {
              fontFamily: "Montserrat",
              pl: "40px",
              py: "23px",
              pr: "12px",
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
      <Activity mode={searchResults?.length > 0 ? "visible" : "hidden"}>
        <Grid container spacing="30px">
          {searchResults.map((product, index) => (
            <Product product={product} key={index} />
          ))}
        </Grid>
      </Activity>
      <Activity mode={searchResults?.length === 0 ? "visible" : "hidden"}>
        <Typography
          textAlign={"center"}
          style={{
            fontSize: 18,
            fontFamily: "Montserrat",
            color: "#656565",
            margin: "10px 0",
          }}
        >
          {search?.length === 0 ? "Type to search" : `No result for ${search}`}
        </Typography>
      </Activity>
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
                setFilterOptions((prev) => ({ ...prev, category: "noir-gold" }))
              }
            >
              <Typography
                fontSize={18}
                fontFamily={"Montserrat"}
                width="fit-content"
                sx={{ whiteSpace: "noWrap" }}
                color="#1A1A1A"
              >
                Noir Gold
              </Typography>
              <Radio checked={filterOptions.category === "noir-gold"} />
            </Box>
            <Box
              display="flex"
              alignItems={"center"}
              justifyContent={"space-between"}
              onClick={() =>
                setFilterOptions((prev) => ({
                  ...prev,
                  category: "rhythm-thread",
                }))
              }
            >
              <Typography
                fontSize={18}
                fontFamily={"Montserrat"}
                width="fit-content"
                sx={{ whiteSpace: "noWrap" }}
                color="#1A1A1A"
              >
                Rhythm & Thread Collection
              </Typography>
              <Radio checked={filterOptions.category === "rhythm-thread"} />
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
                fontSize={18}
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
                fontSize={18}
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
                fontSize={18}
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
              fontSize={24}
              fontFamily={"Montserrat"}
              fontWeight={600}
              color="#1B1B1B"
              width="fit-content"
              sx={{ whiteSpace: "noWrap" }}
            >
              Price Range
            </Typography>
            <Typography
              fontSize={16}
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
            height="57px"
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
            height="57px"
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

export default Search;
