import React from "react";
import DetailsModal from "../reusables/DetailsModal";
import { Box, Typography } from "@mui/material";
import { icons } from "@/src/assets/icons/icons";
import Image from "next/image";

const Craft = ({ onClose }: { onClose: () => void }) => {
  const items = [
    {
      icon: icons.hand,
      title: "Ethically Made",
      subtitle: "Sustainable practices meet luxury craftsmanship.",
    },
    {
      icon: icons.globe,
      title: "Globally Inspired",
      subtitle: "African heritage for the global community.",
    },
    {
      icon: icons.hand,
      title: "Culturally Rooted",
      subtitle: "Every design honors our ancestral artistry.",
    },
  ];
  return (
    <DetailsModal title="Our Craft" onClose={onClose}>
      <Box mt="60px" width="850px" px='50px'>
              <Typography
                  maxWidth={'612px'}
                  mx='auto'
          fontSize={16}
          fontWeight={400}
          fontFamily={"Montserrat"}
          color="#00000070"
          textAlign={"center"}
        >
          Each garment is made using sustainable Print-on-Demand technology,
          ensuring zero waste while maintaining luxury quality. We focus on
          detail, comfort, and storytelling — not mass production.
        </Typography>
        <Box
          mt="100px"
          px="16px"
          display="flex"
          alignItems={"center"}
          justifyContent={"center"}
          flexWrap={"wrap"}
          gap="45px"
        >
          {items.map((item) => (
            <Box
              width={"100%"}
              maxWidth={"196px"}
              display="flex"
              flexDirection={"column"}
              alignItems={"center"}
            >
              <Box
                mb="20px"
                display="flex"
                alignItems={"center"}
                justifyContent={"center"}
                borderRadius={"100px"}
                width="60px"
                height={"60px"}
                bgcolor={"#D5AC4C33"}
              >
                <Image
                  src={item.icon.src}
                  alt={item.title}
                  width={"30"}
                  height="30"
                />
              </Box>
              <Typography
                fontSize={20}
                fontWeight={500}
                fontFamily={"Montserrat"}
                color="#000"
                mb="20px"
                textAlign={"center"}
              >
                {item.title}
              </Typography>
              <Typography
                fontSize={14}
                fontWeight={400}
                fontFamily={"Montserrat"}
                color="#00000070"
                textAlign={"center"}
              >
                {item.subtitle}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </DetailsModal>
  );
};

export default Craft;
