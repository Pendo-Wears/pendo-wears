"use client";

import React, { useEffect, useState, Activity } from "react";
import { icons } from "@/src/assets/icons/icons";
import { Box, CircularProgress, TextField, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { handleLogin } from "@/src/services/authUsage";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "@/src/context/AuthContext";
import { getCountryData } from "@/src/lib/priceFormatter";
import GoogleLoginButton from "@/src/components/GoogleButton";
import axios from "axios";

const Login = () => {
  const {
    isAuthenticated,
    setIsAuthenticated,
    fireAlert,
    getUser,
    getUserAuth,
  } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());

  async function submitForm() {
    setLoading(true);

    const result = await handleLogin(identifier, password);

    setLoading(false);

    console.log(result, "RESULTTTTT");

    if (!result.success) {
      fireAlert(result.error, "error");
      return;
    }
    fireAlert("Login Successful", "success");
    // getCountryData();
    setIsAuthenticated(true);
    getUserAuth();
    getUser();
    if (typeof window !== "undefined") {
      const path = localStorage.getItem("path") || "";
      const parsedPath = path ? JSON.parse(path) : "";
      if (parsedPath) {
        router.replace(`${parsedPath}`);
        localStorage.removeItem("path");
      } else router.replace("/");
    }
  }
  const [statusUpdate, setStatusUpdate] = useState("");

  const getAccountStatus = async () => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("alg_wc_ev_verify_email");

    if (!token) return;

    fetch(`/api/verify-email?token=${encodeURIComponent(token)}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          router.replace("/login");
          setStatusUpdate(
            "Your account has been successfully activated. Log in to continue",
          );
        } else {
          router.replace("/login");
          setStatusUpdate("Verification failed or link expired");
        }
      })
      .catch(() => {
        router.replace("/login");
        setStatusUpdate("Unable to verify email");
      });

    // if(status === "1"){
    //   return setStatusUpdate("Your account has been successfully activated. Log in to continue")
    // }
    // else if(status === "0"){
    //   return setStatusUpdate("Verification failed or link expired")
    // }
    // else{
    //   return setStatusUpdate("Unable to verify email")
    // }
  };

  useEffect(() => {
    if (isAuthenticated) {
      router.replace("/");
    }

    getAccountStatus();
    //  setTimeout(() => {
    //   params.delete("verified")
    //   router.replace('/login')
    // }, 5000);
  }, []);

  return (
    <Box
      bgcolor="#fff"
      width="100%"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      py={{xs: '45px', sm: "90px"}}
      px="16px"
    >
      <Box width="100%" maxWidth="589px">
        <Activity mode={statusUpdate ? "visible" : "hidden"}>
          <Box
            p="12px 24px"
            borderRadius={"12px"}
            mb="24px"
            bgcolor={"#10851cff"}
          >
            <Typography
              textAlign={"left"}
              color="#fff"
              fontSize={{ xs: 14, sm: 16 }}
              fontWeight={500}
              fontFamily={"Montserrat"}
            >
              {statusUpdate}
            </Typography>
          </Box>
        </Activity>
        <Box mb="54px" alignSelf={"flex-start"}>
          <Typography
            color="#1A1A1A"
            fontSize={{ xs: 18, sm: 24 }}
            fontWeight={900}
            fontFamily={"Montserrat"}
            mb="8px"
          >
            Already have Pendo Account
          </Typography>
          <Typography
            fontSize={{ xs: 14, sm: 16 }}
            fontWeight={500}
            fontFamily={"Montserrat"}
          >
            Login your account to have access to Pendo
          </Typography>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          gap={{ xs: 2, sm: "24px" }}
          mb={{ xs: 5, sm: "76px" }}
        >
          <Box>
            <Typography
              fontSize={{ xs: 16, sm: 18 }}
              color="#586166"
              fontWeight={500}
              fontFamily={"Montserrat"}
              mb="8px"
            >
              Email
            </Typography>
            <TextField
              fullWidth
              type="email"
              variant="outlined"
              required
              placeholder="Enter email address"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              sx={{
                bgcolor: "#f5f5f5",
                borderRadius: "6px",
                height: "54px",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderRadius: "8px",
                    border: "none", // remove border normally
                  },
                  "&:hover fieldset": {
                    border: "1px solid #ccc", // optional: show on hover
                  },
                  "&.Mui-focused fieldset": {
                    border: "1px solid #1976d2", // show border on focus
                  },
                },
                input: {
                  fontFamily: "Montserrat",
                  "&::placeholder": {
                    color: "#8D9396", // placeholder color
                    fontFamily: "Montserrat",
                    fontSize: "16px",
                    opacity: 1, // show placeholder fully
                  },
                },
              }}
            />
          </Box>
          <Box>
            <Typography
              fontSize={{ xs: 16, sm: 18 }}
              color="#586166"
              fontWeight={500}
              fontFamily={"Montserrat"}
              mb="8px"
            >
              Password
            </Typography>
            <TextField
              fullWidth
              variant="outlined"
              required
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                endAdornment: (
                  <Image
                    src={icons.closeEye}
                    alt="toggle password visibility"
                    width="20"
                    height="20"
                    style={{ cursor: "pointer" }}
                    onClick={() => setShowPassword(!showPassword)}
                  />
                ),
              }}
              sx={{
                bgcolor: "#f5f5f5",
                borderRadius: "6px",
                height: "54px",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderRadius: "8px",
                    border: "none", // remove border normally
                  },
                  "&:hover fieldset": {
                    border: "1px solid #ccc", // optional: show on hover
                  },
                  "&.Mui-focused fieldset": {
                    border: "1px solid #1976d2", // show border on focus
                  },
                },
                input: {
                  fontFamily: "Montserrat",
                  "&::placeholder": {
                    color: "#8D9396", // placeholder color
                    fontFamily: "Montserrat",
                    fontSize: "16px",
                    opacity: 1, // show placeholder fully
                  },
                },
              }}
            />
            <Typography
              fontSize={{ xs: 14, sm: 16 }}
              color="#D0950F"
              fontWeight={500}
              fontFamily={"Montserrat"}
              mt="12px"
              textAlign="right"
            >
              Forgot Password?
            </Typography>
          </Box>
        </Box>
        <Box
          width="100%"
          bgcolor="#000"
          height="52px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          borderRadius="6px"
          mb={{ xs: 4, sm: "54px" }}
          sx={{
            cursor: "pointer",
            pointerEvents: loading ? "none" : "auto",
            opacity: loading ? 0.2 : 1,
          }}
          onClick={submitForm}
        >
          <Typography
            fontSize={16}
            fontWeight={500}
            fontFamily={"Montserrat"}
            color="#fff"
          >
            {loading ? <CircularProgress size={18} color="inherit" /> : "Login"}
          </Typography>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent={"center"}
          gap={{ xs: 2, sm: "30px" }}
          mb={{ xs: 2, sm: "50px" }}
        >
          <Box
            width={{ xs: "20%", sm: "168px" }}
            height="1px"
            bgcolor="#C0C0C0"
          ></Box>
          <Typography fontSize={16} color="#707070" fontFamily={"Montserrat"}>
            Or sign in with
          </Typography>
          <Box
            width={{ xs: "20%", sm: "168px" }}
            height="1px"
            bgcolor="#C0C0C0"
          ></Box>
        </Box>

        <GoogleLoginButton />
        <Typography
          textAlign={"center"}
          fontWeight={500}
          fontSize={{ xs: 14, sm: 18 }}
          color="#707070"
          fontFamily={"Montserrat"}
          my={{xs: 3, sm: "40px"}}
        >
          Don’t have an Account?{" "}
          <Link href="/register" style={{ textDecoration: "none" }}>
            <Typography
              component={"span"}
              display="inline"
              fontWeight={700}
              color="#000"
              fontFamily={"Montserrat"}
              fontSize={16}
            >
              Sign up
            </Typography>
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Login;
