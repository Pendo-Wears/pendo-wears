"use client";

import { Box, CircularProgress, Typography } from "@mui/material";
import React, { Activity, useEffect, useState } from "react";
import Order from "./reusables/Order";
import { productsEndpoint } from "@/src/lib/endpoints";
import { useAuth } from "@/src/context/AuthContext";
import { useRouter } from "next/navigation";

const RecentOrders = () => {
  const { fireAlert } = useAuth();
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const getUserOrders = async () => {
    const raw = localStorage.getItem("user") ?? "";
    const thisUser = JSON.parse(raw);
    setLoading(true);
    try {
      const result: any = await productsEndpoint.getOrders();
      if (result.success) {
        const userOrders = result.data.filter(
          (order: any) => order.recipient.email === thisUser?.email
        );
        setOrders(userOrders);
      }
    } catch (e: any) {
      fireAlert(e.message, "error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUserOrders();
  }, []);

  return (
    <Box width="72%" bgcolor="#f5f5f5" borderRadius={"16px"} p="32px">
      <Box
        display="flex"
        alignItems={"center"}
        justifyContent={"space-between"}
        mb="24px"
      >
        <Typography
          color={"#2D3436"}
          fontSize={24}
          fontWeight={700}
          fontFamily={"Montserrat"}
        >
          Recent Orders
        </Typography>
        <Typography
          color={"#D0950F"}
          fontSize={16}
          fontWeight={500}
          fontFamily={"Montserrat"}
          onClick={() => router.push("/profile/orders")}
          sx={{ cursor: "pointer" }}
        >
          View All Orders
        </Typography>
      </Box>
      <Box display="flex" flexDirection={"column"} gap="16px">
        <Activity mode={orders.length > 0 ? "visible" : "hidden"}>
          {orders?.slice(0, 3)?.map((order) => (
            <Order order={order} />
          ))}
        </Activity>
        <Activity mode={loading ? "visible" : "hidden"}>
          <Box
            display="flex"
            flexDirection={"column"}
            width="100%"
            height="400px"
            alignItems={"center"}
            justifyContent={"center"}
            m="auto"
          >
            <CircularProgress sx={{ color: "#000" }} />
          </Box>
        </Activity>
        <Activity
          mode={orders?.length === 0 && !loading ? "visible" : "hidden"}
        >
          <Typography
            textAlign={"center"}
            style={{
              fontSize: 14,
              fontFamily: "Montserrat",
              color: "#656565",
              margin: "10px 0",
            }}
          >
            No items
          </Typography>
        </Activity>
      </Box>
    </Box>
  );
};

export default RecentOrders;
