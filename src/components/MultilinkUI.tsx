"use client";

import { Box, Typography } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const MultilinkUI = ({ links }: { links: { name: string; to: string }[] }) => {
  const router = useRouter();
  const pathname = usePathname();

  // useEffect(() => {
  //   setTimeout(() => {
  //     setCurrentPath(window.location.pathname);
  //   }, 1000);
  // }, []);
  return (
    <Box
      width="100%"
      display="flex"
      gap="20px"
      px="16px"
      justifyContent="center"
      alignItems="center"
    >
      {links.map((link, index) => (
        <Typography
          key={index}
          onClick={() => {
            router.push(link.to);
            // setCurrentPath(link.to);
          }}
          sx={{
            cursor: "pointer",
            borderBottom:
              pathname === link.to
                ? "2px solid #000000"
                : "2px solid transparent",
            paddingBottom: "4px",
            transition: "border-bottom 0.3s ease-in-out",
          }}
          color={"#1A1A1A"}
          fontWeight={pathname === link.to ? 600 : 400}
          fontSize={18}
          textTransform={"capitalize"}
          fontFamily={"Montserrat"}
        >
          {link.name}
        </Typography>
      ))}
    </Box>
  );
};

export default MultilinkUI;
