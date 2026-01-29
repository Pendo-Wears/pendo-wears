import React from "react";
import DetailsModal from "../reusables/DetailsModal";
import { Box, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import { images } from "@/src/assets/images/images";

const Meaning = ({ onClose }: { onClose: () => void }) => {
  const theme = useTheme();
  const mobile = theme.breakpoints.down('sm');
  return (
    <DetailsModal title="The Meaning of Pendo" onClose={onClose}>
      <Box
        mt="30px"
        px={{ xs: "16px", sm: "20px", md: "50px" }}
        // width={{ xs: "100%", sm: "700px" }}
        maxWidth={'700px'}
      >
        <Box height="400px" position="relative" width="100%">
          <Image
            src={images.abt}
            alt="Meaning of PENDO"
            fill
            sizes="(max-width: 600px) 100%,"
            style={{
              borderRadius: "16px",
              objectFit: "cover",
              objectPosition: mobile ? "center right" : "center",
            }}
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
