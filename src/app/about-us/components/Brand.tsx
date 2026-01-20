import React from "react";
import DetailsModal from "../reusables/DetailsModal";
import { images } from "@/src/assets/images/images";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

const Brand = ({ onClose }: { onClose: () => void }) => {
  const items = [
    {
      image: images.usr1,
      name: "Timothy – Creative Director",
      title: `"Design inspired by stories untold."`,
    },
  ];
  return (
    <DetailsModal title="Meet the Brand" onClose={onClose}>
          <Box
        width="700px"
        mt="45px"
        px="16px"
        display="flex"
        flexDirection={"column"}
        alignItems={"center"}
        gap="30px"
      >
        {items.map((item) => (
          <Box
            width="100%"
            maxWidth="370px"
            display="flex"
            flexDirection={"column"}
            alignItems={"center"}
            gap="24px"
          >
            <Box width="100%">
              <Image
                src={item.image.src}
                alt={item.name}
                width="370"
                height="320"
                style={{ borderRadius: "16px", objectFit: 'cover' }}
              />
            </Box>
            <Typography
              py="2px"
              px="10px"
              bgcolor="#D0950F"
              borderRadius={"100px"}
              fontSize={16}
              fontWeight={500}
              fontFamily={"Montserrat"}
              color="#000"
              textAlign={"center"}
            >
              {item.name}
            </Typography>
            <Typography
              fontSize={16}
              fontWeight={400}
              fontFamily={"Montserrat"}
              color="#00000070"
              textAlign={"center"}
            >
              {item.title}
            </Typography>
          </Box>
        ))}
      </Box>
    </DetailsModal>
  );
};

export default Brand;
