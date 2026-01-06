"use client";

import { Box, Grid, Typography } from "@mui/material";
import React, { Activity, useEffect, useState } from "react";
import Product from "../../products/reusables/Product";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState<any[]>([]);

  const getWishlist = () => {
    const raw = typeof window !== "undefined" ? localStorage.getItem("wishlist") || "[]" : "[]";
    const list = JSON.parse(raw);
    setWishlist(list);
  };

  useEffect(() => {
    getWishlist();
  }, []);
  return (
    <>
      <Activity mode={wishlist?.length === 0 ? "visible" : "hidden"}>
        <Typography
          textAlign={"center"}
          style={{
            fontSize: 20,
            fontFamily: "Montserrat",
            color: "#656565",
            margin: "110px 0",
          }}
        >
          No items in wishlist
        </Typography>
      </Activity>
      <Activity mode={wishlist?.length > 0 ? "visible" : "hidden"}>
        <Grid
          container
          spacing="30px"
          mb="70px"
          px={{ xs: "16px", sm: "20px", md: "50px" }}
        >
          {wishlist?.map((product, index) => (
            <Product product={product} showPrice={false} key={index} />
          ))}
        </Grid>
      </Activity>
    </>
  );
};

export default Wishlist;
