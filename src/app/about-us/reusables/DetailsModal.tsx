import { icons } from "@/src/assets/icons/icons";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const DetailsModal = ({
  title,
  children,
  onClose,
}: {
  title: string;
  children: React.ReactNode;
  onClose: () => void;
}) => {
  return (
    <Box
      position="fixed"
      top={0}
      bottom={0}
      right={0}
      left={0}
      bgcolor="#00000050"
      zIndex={9999}
    >
      <Box
        overflow="auto"
        sx={{
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
        // width="fit-content"
        position="absolute"
        top={0}
        bottom={0}
        right={0}
        bgcolor="#fff"
        // maxWidth="850px"
      >
        <Box display="flex" alignItems={"center"} px="50px" pt="40px">
          <Typography
            flex={1}
            textAlign={"center"}
            fontSize={24}
            fontWeight={700}
            fontFamily={"Montserrat"}
            color="#000"
          >
            {title}
          </Typography>
          <Image
            src={icons.close}
            alt="close"
            width="40"
            height="40"
            style={{ cursor: "pointer" }}
            onClick={onClose}
          />
        </Box>
        {children}
      </Box>
    </Box>
  );
};

export default DetailsModal;
