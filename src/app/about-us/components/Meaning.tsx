import React from "react";
import DetailsModal from "../reusables/DetailsModal";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { images } from "@/src/assets/images/images";

const Meaning = ({ onClose }: { onClose: () => void }) => {
  return (
    <DetailsModal title="The Meaning of Pendo" onClose={onClose}>
      <Box mt="30px" px="50px" width={"700px"}>
        <Image
          src={images.abt}
          alt="Meaning of PENDO"
          width="612"
          height="400"
          style={{ borderRadius: "16px", objectFit: "cover" }}
        />
        <Box mt="30px">
          <Typography
            mb="2px"
            fontSize={{ xs: 18, sm: 24 }}
            fontWeight={700}
            fontFamily={"Montserrat"}
            color="#000"
          >
            The Meaning of Pendo
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
            'Pendo' means{" "}
            <Typography
              display={"inline"}
              fontSize={16}
              fontWeight={400}
              fontFamily={"Montserrat"}
              color="#D5AC4C"
            >
              love
            </Typography>{" "}
            — a reminder that everything we create is rooted in love for our
            culture, our people, and our craft.
          </Typography>
        </Box>
      </Box>
    </DetailsModal>
  );
};

export default Meaning;
