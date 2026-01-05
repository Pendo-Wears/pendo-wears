"use client";

import { icons } from "@/src/assets/icons/icons";
import { useAuth } from "@/src/context/AuthContext";
import { productsEndpoint } from "@/src/lib/endpoints";
import { Box, CircularProgress, Typography } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const UserTag = () => {
  const { fireAlert } = useAuth();
  const [user, setUser] = useState<any>({});
  const [orders, setOrders] = useState<number>(0);
  const [loading, setLoading] = useState(false);

  const getUserData = async () => {
    const thisUser = JSON.parse(localStorage.getItem("user") ?? "");
    setUser(thisUser);
    setLoading(true);
    try {
      const result: any = await productsEndpoint.getOrders();
      if (result.success) {
        const userOrders = result.data.filter(
          (order: any) => order.recipient.email === thisUser?.email
        );
        setOrders(userOrders.length);
      }
    } catch (e: any) {
      fireAlert(e.message, "error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);
  return (
    <Box
      width="28%"
      height="auto"
      bgcolor="#f5f5f5"
      borderRadius={"16px"}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent={"center"}
    >
      {loading ? (
        <CircularProgress sx={{ color: "#000" }} />
      ) : (
        <>
          <Box position="relative">
            <Image
              src={user?.avatar_url}
              alt="avatar"
              width="128"
              height="128"
              style={{ borderRadius: "100%", border: "4px solid #D0950F" }}
            />
            <Image
              src={icons.camera}
              alt="camera"
              width="32"
              height="32"
              style={{
                position: "absolute",
                bottom: "8px",
                right: "8px",
                cursor: "pointer",
              }}
            />
          </Box>
          <Typography
            mt="22px"
            mb="4px"
            color={"#2D3436"}
            fontSize={24}
            fontWeight={700}
            fontFamily={"Montserrat"}
          >
            {user?.first_name} {user?.last_name}
          </Typography>
          <Typography
            color={"#6B7280"}
            fontSize={16}
            fontWeight={500}
            fontFamily={"Montserrat"}
            mb="16px"
          >
            {user?.email}
          </Typography>
          <Box display="flex" alignItems={"center"}>
            <Box px="14px" borderRight={"1px solid #E5E7EB"}>
              <Typography
                color={"#2D3436"}
                fontSize={18}
                fontWeight={700}
                fontFamily={"Montserrat"}
                textAlign={"center"}
              >
                {orders ?? 0}
              </Typography>
              <Typography
                color={"#6B7280"}
                fontSize={14}
                fontFamily={"Montserrat"}
              >
                Orders
              </Typography>
            </Box>
            <Box px="14px" borderRight={"1px solid #E5E7EB"}>
              <Typography
                color={"#2D3436"}
                fontSize={18}
                fontWeight={700}
                fontFamily={"Montserrat"}
                textAlign={"center"}
              >
                0
              </Typography>
              <Typography
                color={"#6B7280"}
                fontSize={14}
                fontFamily={"Montserrat"}
              >
                Reviews
              </Typography>
            </Box>
            <Box px="14px">
              <Typography
                color={"#2D3436"}
                fontSize={18}
                fontWeight={700}
                fontFamily={"Montserrat"}
                textAlign={"center"}
              >
                0
              </Typography>
              <Typography
                color={"#6B7280"}
                fontSize={14}
                fontFamily={"Montserrat"}
              >
                Points
              </Typography>
            </Box>
          </Box>
        </>
      )}
    </Box>
  );
};

export default UserTag;
