import { icons } from "@/src/assets/icons/icons";
import { Box, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import React from "react";
import DetailsModal from "../reusables/DetailsModal";

const Values = ({ onClose }: { onClose: () => void }) => {
  const theme = useTheme()
  const mobile = theme.breakpoints.down('sm');
  const items = [
    {
      icon: icons.crown,
      title: "Heritage",
      subtitle:
        "We honor African artistry and tradition, preserving the stories that define us.",
    },
    {
      icon: icons.gem,
      title: "Luxury",
      subtitle:
        "We design for quality, not quantity, creating pieces that last generations.",
    },
    {
      icon: icons.bulb,
      title: "Innovation",
      subtitle:
        "We merge culture with technology, creating the future of African fashion.",
    },
  ];
  return (
    <DetailsModal title="Our Values" onClose={onClose}>
      <Box
        // width={{ xs: "100%", md: "750px" }}
        mt={{ xs: "60px", md: 0 }}
        px="16px"
        display="flex"
        alignItems={"center"}
        justifyContent={"center"}
        flexWrap={"wrap"}
        gap="30px"
        height="70%"
      >
        {items.map((item) => (
          <Box
            width={"100%"}
            maxWidth={"320px"}
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
              width={mobile ? "54px" : "80px"}
              height={mobile ? "54px" : "80px"}
              bgcolor={"#D5AC4C33"}
            >
              <Image
                src={item.icon.src}
                alt={item.title}
                width={mobile ? "25" : "30"}
                height={mobile ? "31" : "36"}
              />
            </Box>
            <Typography
              fontSize={{ xs: 16, sm: 20 }}
              fontWeight={500}
              fontFamily={"Montserrat"}
              color="#000"
              mb="20px"
              textAlign={"center"}
            >
              {item.title}
            </Typography>
            <Typography
              fontSize={{ xs: 14, sm: 16 }}
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
    </DetailsModal>
  );
};

export default Values;
