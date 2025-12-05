import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { icons } from "../assets/icons/icons";

const Footer = () => {
  return (
    <Box bgcolor="#000" py="74px">
      <Box
        px={{ xs: "16px", sm: "20px", md: "68px" }}
        display="flex"
        alignItems={"center"}
      >
        <Box flex={1} display="flex" alignItems={"center"} gap="40px">
          <Typography
            fontSize={16}
            color="#9CA3AF"
            fontWeight={500}
            fontFamily={"Montserrat"}
            textTransform={"uppercase"}
          >
            New Arrivals
          </Typography>
          <Typography
            fontSize={16}
            color="#9CA3AF"
            fontWeight={500}
            fontFamily={"Montserrat"}
            textTransform={"uppercase"}
          >
            Hoodies
          </Typography>
          <Typography
            fontSize={16}
            color="#9CA3AF"
            fontWeight={500}
            fontFamily={"Montserrat"}
            textTransform={"uppercase"}
          >
            T-Shirts
          </Typography>
          <Typography
            fontSize={16}
            color="#9CA3AF"
            fontWeight={500}
            fontFamily={"Montserrat"}
            textTransform={"uppercase"}
          >
            Accessories
          </Typography>
        </Box>
        <Box display="flex" alignItems={"center"} gap="16px">
          <Image src={icons.instagram} alt="instagram" width="17" height="28" />
          <Image src={icons.twitter} alt="X" width="20" height="28" />
          <Image src={icons.facebook} alt="facebook" width="20" height="28" />
          <Image src={icons.tiktok} alt="tiktok" width="17" height="28" />
        </Box>
      </Box>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        px={{ xs: "16px", sm: "20px", md: "68px" }}
        sx={{
          borderTop: "1px solid #FFFFFF",
          borderBottom: "1px solid #FFFFFF",
          marginTop: "14px",
          marginBottom: "20px",
        }}
      >
        {["P", "E", "N", "D", "O"].map((letter, index) => (
          <Typography
            key={index}
            color="#D0950F"
            fontSize={200}
            fontFamily="Cormorant Garamond"
            letterSpacing={"10%"}
            fontWeight={700}
            textAlign={"center"}
            lineHeight={"100%"}
          >
            {letter}
          </Typography>
        ))}
      </Box>
      <Box
        px={{ xs: "16px", sm: "20px", md: "68px" }}
        display="flex"
        alignItems={"center"}
        mb="30px"
      >
        <Box flex={1} display="flex" alignItems={"center"} gap="40px">
          <Typography
            fontSize={16}
            color="#9CA3AF"
            fontWeight={500}
            fontFamily={"Montserrat"}
            textTransform={"uppercase"}
          >
            Contact Us
          </Typography>
          <Typography
            fontSize={16}
            color="#9CA3AF"
            fontWeight={500}
            fontFamily={"Montserrat"}
            textTransform={"uppercase"}
          >
            Size Guide
          </Typography>
          <Typography
            fontSize={16}
            color="#9CA3AF"
            fontWeight={500}
            fontFamily={"Montserrat"}
            textTransform={"uppercase"}
          >
            Shipping
          </Typography>
          <Typography
            fontSize={16}
            color="#9CA3AF"
            fontWeight={500}
            fontFamily={"Montserrat"}
            textTransform={"uppercase"}
          >
            Affiliate Marketing
          </Typography>
          <Typography
            fontSize={16}
            color="#9CA3AF"
            fontWeight={500}
            fontFamily={"Montserrat"}
            textTransform={"uppercase"}
          >
            Returns
          </Typography>
        </Box>
        <Box display="flex" alignItems={"center"} gap="40px">
          <Typography
            fontSize={16}
            color="#9CA3AF"
            fontWeight={500}
            fontFamily={"Montserrat"}
            textTransform={"uppercase"}
          >
            Privacy Policy
          </Typography>
          <Typography
            fontSize={16}
            color="#9CA3AF"
            fontWeight={500}
            fontFamily={"Montserrat"}
            textTransform={"uppercase"}
          >
            Terms of service
          </Typography>
        </Box>
      </Box>
      <Box
        width="90%"
        mx="auto"
        textAlign="center"
        borderTop="1px solid #D5AC4C33"
        pt="32px"
      >
        <Typography
          fontSize={16}
          color="#9CA3AF"
          fontWeight={500}
          fontFamily={"Montserrat"}
        >
          © 2024 Pendo. All rights reserved. | Privacy Policy | Terms of Service
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
