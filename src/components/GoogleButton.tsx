import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { publicApi } from "../lib/woocommerce";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { icons } from "../assets/icons/icons";

export default function GoogleLoginButton() {
  const handleGoogleLogin = () => {
    // @ts-ignore
    const client = window.google.accounts.oauth2.initCodeClient({
      client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
      scope: "email profile",
      ux_mode: "popup",
      redirect_uri:
        "https://darkgray-heron-136669.hostingersite.com/my-account",
      callback: async (response: any) => {
        try {
          const res = await axios.post(
            `${process.env.NEXT_PUBLIC_WOO_STORE_URL}/wp-json`,
            null,
            {
              params: {
                rest_route: "/auth/v1/oauth/token",
                provider: "google",
                code: response.code,
                // redirect_uri:
                //   "https://darkgray-heron-136669.hostingersite.com/?rest_route=/auth/v1/oauth/token&provider=google",
              },
            },
          );

          const jwt = res.data?.data?.jwt;

          if (!jwt) {
            throw new Error("JWT not returned");
          }

          console.log(res.data.data, "ASDFGHJK");

          // ✅ Store token
          localStorage.setItem("token", jwt);

          console.log("Login successful");
        } catch (err: any) {
          console.error("Google login failed:", err);
        }
      },
    });

    client.requestCode();
  };

  return (
    <Box
      width="100%"
      bgcolor="#fff"
      height="52px"
      display="flex"
      justifyContent="center"
      alignItems="center"
      borderRadius="6px"
      gap="14px"
      mb="50px"
      sx={{ cursor: "pointer" }}
      border="1px solid #C0C0C0"
      onClick={handleGoogleLogin}
    >
      <Image src={icons.google} alt="google" width="32" height="32" />
      <Typography
        fontSize={{ xs: 18, sm: 24 }}
        fontWeight={500}
        fontFamily={"Montserrat"}
        color="#000"
      >
        Google
      </Typography>
    </Box>
  );
}
