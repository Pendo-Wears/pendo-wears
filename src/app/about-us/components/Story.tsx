import React from "react";
import DetailsModal from "../reusables/DetailsModal";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { images } from "@/src/assets/images/images";

const Story = ({ onClose }: { onClose: () => void }) => {
  return (
    <DetailsModal title="Our Story" onClose={onClose}>
      <Box mt="30px" px="50px" width='700px'>
        <Image
          src={images.abt}
          alt="Our Story"
          width="612"
          height="400"
          style={{ borderRadius: "16px", objectFit: "cover" }}
        />
        <Box mt="30px">
          <Typography
            mb="2px"
            fontSize={24}
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
