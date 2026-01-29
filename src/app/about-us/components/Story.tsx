import React from "react";
import DetailsModal from "../reusables/DetailsModal";
import { Box, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import { images } from "@/src/assets/images/images";

const Story = ({ onClose }: { onClose: () => void }) => {
  const theme = useTheme()
  const mobile = theme.breakpoints.down('sm');
  return (
    <DetailsModal title="Our Story" onClose={onClose}>
      <Box mt="30px" px={{ xs: "16px", sm: "20px", md: "50px" }} maxWidth={'700px'}>
        <Box height='400px' position="relative" width="100%">
          <Image
            src={images.abt}
            alt="Our Story"
            fill
            sizes="(max-width: 600px) 100%,"
            style={{ borderRadius: "16px", objectFit: "cover", objectPosition: mobile ? "center right" : "center" }}
          />
        </Box>
        <Box mt="30px">
          <Typography
            mb="2px"
            fontSize={{ xs: 18, sm: 24 }}
            fontWeight={700}
            fontFamily={"Montserrat"}
            color="#000"
          >
            Our Story
          </Typography>
          <Box bgcolor="#D0950F" width={"64px"} height="4px"></Box>
        </Box>
        <Box mt="35px">
          <Typography
            mb="14px"
            fontSize={16}
            fontWeight={400}
            fontFamily={"Montserrat"}
            color="#00000080"
          >
            Born from a vision to bridge culture and couture, Pendo represents
            Africa's evolution in fashion. We draw inspiration from timeless
            patterns, textures, and stories that have defined our people —
            transforming them into wearable art for the modern world.
          </Typography>
          <Typography
            fontSize={16}
            fontWeight={400}
            fontFamily={"Montserrat"}
            color="#00000080"
          >
            Every thread tells a story. Every design honors a tradition. Every
            piece celebrates the rich tapestry of African heritage while
            embracing contemporary luxury.
          </Typography>
        </Box>
      </Box>
    </DetailsModal>
  );
};

export default Story;
