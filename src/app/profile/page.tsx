import { icons } from "@/src/assets/icons/icons";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import UserTag from "./UserTag";
import PersonalInformation from "./PersonalInformation";
import SavedAddresses from "./SavedAddresses";
import RecentOrders from "./RecentOrders";

const page = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      gap={"35px"}
      width="100%"
      maxWidth="1296px"
      alignItems={"center"}
      px={{ xs: "16px", sm: "20px", md: "50px" }}
      mx="auto"
      pb="70px"
    >
      <Box
        display={"flex"}
        flexWrap={{ xs: "wrap", md: "nowrap" }}
        justifyContent={{ xs: "center", md: undefined }}
        gap={4}
        width="100%"
        mx="auto"
      >
        <UserTag />
        <PersonalInformation />
      </Box>
      <Box
        display={"flex"}
        flexWrap={{ xs: "wrap", md: "nowrap" }}
        justifyContent={{ xs: "center", md: undefined }}
        gap={4}
        width="100%"
        mx="auto"
      >
        <SavedAddresses />
        <RecentOrders />
      </Box>
    </Box>
  );
};

export default page;
