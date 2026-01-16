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
        px="50px"
              mt="60px"
              width='700px'
        display="flex"
        alignItems={"center"}
        gap="16px"
        flexWrap={"wrap"}
      >
        {gallery.map((image) => (
          <Box>
            <Image
              src={image.src}
              alt={"gallery"}
              width="186"
              height="215"
              style={{ borderRadius: "16px", objectFit: "cover" }}
            />
          </Box>
        ))}
      </Box>
    </DetailsModal>
  );
};

export default Lifestyle;
