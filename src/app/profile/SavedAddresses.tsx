"use client";

import { icons } from "@/src/assets/icons/icons";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Address from "./reusables/Address";
import { Billing, User } from "@/src/lib/types";

const SavedAddresses = () => {
  const [user, setUser] = useState<Billing>();

  const getUser = async () => {
    const raw = localStorage.getItem("user") ?? "";
    const thisUser: User = JSON.parse(raw);
    setUser(thisUser.billing);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <Box
      width="28%"
      height="auto"
      maxHeight={"512px"}
      bgcolor="#f5f5f5"
      borderRadius={"16px"}
      px="22px"
      py="32px"
    >
      <Box
        display="flex"
        alignItems={"center"}
        justifyContent={"space-between"}
        mb="22px"
      >
        <Typography
          color={"#2D3436"}
          fontSize={20}
          fontWeight={600}
          fontFamily={"Montserrat"}
        >
          Saved Addresses
        </Typography>
        <Image src={icons.add} alt="add address" width="14" height="24" />
      </Box>
      <Box display="flex" flexDirection={"column"} gap="16px">
        <Address
          isDefault
          location="Home"
          address={`${user?.address_1 || ""}, ${user?.state || ""}, ${
            user?.countryName || ""
          }`}
        />
      </Box>
    </Box>
  );
};

export default SavedAddresses;
