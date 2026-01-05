import { images } from "@/src/assets/images/images";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const AboutUs = () => {
  const pages = [
    {
      label: "Our Story",
    },
    {
      label: "The Meaning of Pendo",
    },
    {
      label: "Our Values",
    },
    {
      label: "Meet the Brand",
    },
    {
      label: "Our Craft",
    },
    {
      label: "The Pendo Lifestyle",
    },
  ];
  return (
    <Box px={{ xs: "16px", sm: "20px", md: "50px" }} pb="45px">
      <Box
        width="100%"
        height="344px"
        sx={{
          background: `url(${images.about.src})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        mb="60px"
      ></Box>
      <Typography
        color="#1A1A1A"
        fontSize={32}
        fontWeight={500}
        fontFamily={"Montserrat"}
        textAlign={"center"}
        mx="auto"
      >
        Redefining African Luxury.
      </Typography>
      <Typography
        my="30px"
        color="#000000CC"
        fontSize={16}
        fontFamily={"Montserrat"}
        textAlign={"center"}
        maxWidth={"1097px"}
        mx="auto"
      >
        Pendo is a luxury African-inspired streetwear brand that celebrates
        heritage through modern design. Each piece is crafted to reflect the
        strength, pride, and beauty of African culture — reimagined for today's
        generation.
      </Typography>
      <Grid
        container
        width="100%"
        px="16px"
        spacing="47px"
        maxWidth={"1008px"}
        mx="auto"
      >
        {pages.map((page) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Typography
              color="#000"
              fontSize={20}
              fontWeight={500}
              fontFamily={"Montserrat"}
              py="12px"
            >
              {page.label}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AboutUs;
