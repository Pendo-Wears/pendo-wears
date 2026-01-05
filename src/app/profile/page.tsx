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
     
      mx="auto"
      pb='70px'
    >
      <Box display={"flex"} gap={4} width="100%" mx="auto">
        <UserTag />
        <PersonalInformation />
      </Box>
      <Box display={"flex"} gap={4} width="100%" mx="auto">
        <SavedAddresses />
        <RecentOrders />
      </Box>
    </Box>
  );
};

export default page;
