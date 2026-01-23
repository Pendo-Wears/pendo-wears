import { images } from "@/src/assets/images/images";
import React from "react";
import DetailsModal from "../reusables/DetailsModal";
import { Box } from "@mui/material";
import Image from "next/image";

const Lifestyle = ({ onClose }: { onClose: () => void }) => {
  const gallery = [
    images.abt1,
    images.abt2,
    images.abt3,
    images.abt4,
    images.abt5,
    images.abt6,
  ];
  return (
    <DetailsModal title="The Pendo Lifestyle" onClose={onClose}>
      <Box
        px={{ xs: "16px", sm: "20px", md: "50px" }}
        mt="60px"
        // width={{ xs: "100%", sm: "700px" }}
        maxWidth={"850px"}
        display="flex"
        alignItems={"center"}
        justifyContent={"center"}
        gap="16px"
        flexWrap={"wrap"}
      >
        {gallery.map((image) => (
          <Box
            key={image.src}
            height={{xs: '350px', sm: "215px"}}
            width={{ xs: `100%`, sm: `${90 / 2}%`, md: `${90 / 3}%` }}
            position="relative"
          >
            <Image
              src={image.src}
              alt={"gallery"}
              sizes="100%,"
              fill
              style={{ borderRadius: "16px", objectFit: "cover", objectPosition: "center top" }}
            />
          </Box>
        ))}
      </Box>
    </DetailsModal>
  );
};

export default Lifestyle;
