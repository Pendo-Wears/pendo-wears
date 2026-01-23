import { icons } from "@/src/assets/icons/icons";
import { Box, Typography, useTheme } from "@mui/material";
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
  const theme = useTheme()
  const mobile = theme.breakpoints.down('sm');
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
        width={{ xs: "100%", sm: "600px", md: "850px" }}
        position="absolute"
        top={0}
        bottom={0}
        right={0}
        bgcolor="#fff"
        py="45px"
        // maxWidth="850px"
      >
        <Box
          display="flex"
          alignItems={"center"}
          px={{ xs: "16px", sm: "20px", md: "50px" }}
          pt={{ xs: "25px", sm: "40px" }}
          position={{xs: "fixed", sm: "relative"}}
          bgcolor="#fff"
          top={0}
          left={0}
          right={0}
          zIndex={5}
        >
          <Typography
            flex={1}
            textAlign={"center"}
            fontSize={{ xs: 18, sm: 24 }}
            fontWeight={700}
            fontFamily={"Montserrat"}
            color="#000"
          >
            {title}
          </Typography>
          <Image
            src={icons.close}
            alt="close"
            width={mobile ? "36" :"40"}
            height={mobile ? "36" :"40"}
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
