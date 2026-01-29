"use client";

import { icons } from "@/src/assets/icons/icons";
import { useAuth } from "@/src/context/AuthContext";
import { productsEndpoint } from "@/src/lib/endpoints";
import { User } from "@/src/lib/types";
import userEndpoints from "@/src/lib/userServices";
import { Box, CircularProgress, Typography } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const UserTag = () => {
  const { fireAlert, user, setUser, getUser } = useAuth();
  // const [] = useState<any>({});
  const [orders, setOrders] = useState<number>(0);
  const [loading, setLoading] = useState(false);

  const getUserData = async () => {
    setLoading(true);
    try {
      const result: any = await productsEndpoint.getOrders();
      if (result.success) {
        const userOrders = result.data.filter(
          (order: any) => order.recipient.email === user?.email,
        );
        setOrders(userOrders.length);
      }
    } catch (e: any) {
      fireAlert(e.message, "error");
    } finally {
      setLoading(false);
    }
  };

  const uploadImage = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    try {
      const result: any = await userEndpoints.uploadImage(formData);
      console.log(result);
    } catch (e: any) {
      fireAlert(e.message, "error");
    }
  };

  async function uploadToImgBB(file: File) {
    const apiKey = process.env.NEXT_PUBLIC_IMGBB_API_KEY; // ✅ fixed name

    if (!apiKey) {
      throw new Error("ImgBB API key is missing");
    }

    const formData = new FormData();
    formData.append("image", file);

    setLoading(true);

    const response = await fetch(
      `https://api.imgbb.com/1/upload?key=${apiKey}`,
      {
        method: "POST",
        body: formData,
      },
    );

    const text = await response.text();

    if (!text) {
      throw new Error("Empty response from ImgBB");
    }

    let data;
    try {
      data = JSON.parse(text);
    } catch {
      console.error("ImgBB raw response:", text);
      throw new Error("ImgBB did not return JSON");
    }

    if (!response.ok || !data?.data?.display_url) {
      throw new Error(data?.error?.message || "ImgBB upload failed");
    }

    await updateAvatar(data.data.display_url);
    return data.data.display_url;
  }

  const updateAvatar = async (url: string) => {
    const raw =
      typeof window !== "undefined" ? (localStorage.getItem("user") ?? "") : "";
    const thisUser: User = JSON.parse(raw);
    try {
      const result: any = await userEndpoints.updateUser(thisUser?.id, {
        meta_data: [
          {
            key: "simple_local_avatar",
            value: url,
          },
        ],
      });
      if (result?.data.success) {
        console.log(result, "ASDFGHJKL");
        fireAlert("User updated successfully", "success");
        if (typeof window !== "undefined") {
          localStorage.setItem("user", JSON.stringify(result.data.data));
        }
      }
    } catch (e: any) {
      fireAlert(e.message, "error");
    } finally {
      getUser();
      setLoading(false);
    }
  };

  const handleAvatarUpload = async (file: File) => {
    // 1️⃣ Upload to WordPress Media Library
    const avatarUrl = await uploadToImgBB(file);

    // 2️⃣ Update simple_local_avatar meta
    // const updatedUser = await updateAvatar(avatarUrl);

    // console.log("Updated user avatar:", updatedUser);
  };

  useEffect(() => {
    getUserData();
  }, []);
  return (
    <Box
      width={{ xs: "100%", sm: '50%', md: "28%" }}
      height="auto"
      py={{xs: '30px', md: undefined}}
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
              src={
                (user?.meta_data?.find(
                  (x: any) => x.key === "simple_local_avatar",
                )?.value as any) || user?.avatar_url
              }
              alt="avatar"
              width="128"
              height="128"
              style={{
                borderRadius: "100%",
                border: "4px solid #D0950F",
                objectFit: "cover",
              }}
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
            <Box
              width="32px"
              height="32px"
              sx={{ opacity: 0 }}
              position={"absolute"}
              bottom={"8px"}
              right={"8px"}
              bgcolor="red"
              borderRadius={"100%"}
              component={"input"}
              type="file"
              onChange={(e: any) => handleAvatarUpload(e.target.files[0])}
            ></Box>
          </Box>
          <Typography
            mt="22px"
            mb="4px"
            color={"#2D3436"}
            fontSize={{ xs: 18, sm: 24 }}
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
