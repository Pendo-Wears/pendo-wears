"use client";

import { images } from "@/src/assets/images/images";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React, { Activity, useState } from "react";
import DetailsModal from "./reusables/DetailsModal";
import Story from "./components/Story";
import Meaning from "./components/Meaning";
import Values from "./components/Values";
import Brand from "./components/Brand";
import Craft from "./components/Craft";
import Lifestyle from "./components/Lifestyle";

const AboutUs = () => {
  const [openStory, setOpenStory] = useState(false);
  const [openMeaning, setOpenMeaning] = useState(false);
  const [openValues, setOpenValues] = useState(false);
  const [openBrand, setOpenBrand] = useState(false);
  const [openCraft, setOpenCraft] = useState(false);
  const [openLifestyle, setOpenLifestyle] = useState(false);
  const pages = [
    {
      label: "Our Story",
      action: () => setOpenStory(true),
    },
    {
      label: "The Meaning of Pendo",
      action: () => setOpenMeaning(true),
    },
    {
      label: "Our Values",
      action: () => setOpenValues(true),
    },
    {
      label: "Meet the Brand",
      action: () => setOpenBrand(true),
    },
    {
      label: "Our Craft",
      action: () => setOpenCraft(true),
    },
    {
      label: "The Pendo Lifestyle",
      action: () => setOpenLifestyle(true),
    },
  ];

  const lock = openStory || openMeaning || openBrand || openCraft || openValues || openLifestyle;
  return (
    <>
      {" "}
      <Box
        px={{ xs: 0, sm: "20px", md: "50px" }}
        pb="45px"
        sx={{ pointerEvents: lock ? "none" : "all" }}
      >
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
        <Box px={'16px'}>
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
            strength, pride, and beauty of African culture — reimagined for
            today's generation.
          </Typography>
        </Box>
        <Grid
          container
          width="100%"
          px="16px"
          spacing="47px"
          maxWidth={"1008px"}
          mx="auto"
        >
          {pages.map((page) => (
            <Grid
              size={{ xs: 12, sm: 6, md: 4 }}
              sx={{ cursor: "pointer" }}
              onClick={page.action}
            >
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
      <Activity mode={openStory ? "visible" : "hidden"}>
        <Story onClose={() => setOpenStory(false)} />
      </Activity>
      <Activity mode={openMeaning ? "visible" : "hidden"}>
        <Meaning onClose={() => setOpenMeaning(false)} />
      </Activity>
      <Activity mode={openValues ? "visible" : "hidden"}>
        <Values onClose={() => setOpenValues(false)} />
      </Activity>
      <Activity mode={openBrand ? "visible" : "hidden"}>
        <Brand onClose={() => setOpenBrand(false)} />
      </Activity>
      <Activity mode={openCraft ? "visible" : "hidden"}>
        <Craft onClose={() => setOpenCraft(false)} />
      </Activity>
      <Activity mode={openLifestyle ? "visible" : "hidden"}>
        <Lifestyle onClose={() => setOpenLifestyle(false)} />
      </Activity>
    </>
  );
};

export default AboutUs;
