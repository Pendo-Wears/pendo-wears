import { icons } from "@/src/assets/icons/icons";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React, { Activity } from "react";

const Address = ({
  isDefault = false,
  location,
  address,
}: {
  isDefault?: boolean;
  location: string;
  address: string;
}) => {
  return (
    <Box
      p="16px"
      border="1px solid #E5E7EB"
      borderRadius={"8px"}
      bgcolor={"#fff"}
    >
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={isDefault ? "space-between" : "flex-end"}
        mb="4px"
      >
        <Activity mode={isDefault ? "visible" : "hidden"}>
          <Typography
            fontSize={12}
            fontWeight={600}
            color="#2D3436"
            fontFamily={"Montserrat"}
            px="8px"
            borderRadius={"100px"}
            bgcolor="#D0950F"
          >
            Default
          </Typography>
        </Activity>
        <Image src={icons.more} alt="more" width="4" height="24" />
      </Box>
      <Typography
        fontSize={16}
        fontWeight={500}
        color="#2D3436"
        fontFamily={"Montserrat"}
        mb="4px"
      >
        {location}
      </Typography>
      <Typography
        fontSize={14}
        fontWeight={500}
        color="#4B5563"
        fontFamily={"Montserrat"}
      >
        {address}
      </Typography>
    </Box>
  );
};

export default Address;
