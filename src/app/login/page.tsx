"use client";

import React, { useEffect, useState } from "react";
import { icons } from "@/src/assets/icons/icons";
import { Box, CircularProgress, TextField, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { handleLogin } from "@/src/services/authUsage";
import { useRouter } from "next/navigation";
import { useAuth } from "@/src/context/AuthContext";
import { getCountryData } from "@/src/lib/priceFormatter";
import GoogleLoginButton from "@/src/components/GoogleButton";

const Login = () => {
  const { isAuthenticated, setIsAuthenticated, fireAlert, getUser } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

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
    getCountryData();
    setIsAuthenticated(true);
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

  useEffect(() => {
    if (isAuthenticated) {
      router.replace("/");
    }
  }, []);

  return (
    <Box
      bgcolor="#fff"
      width="100%"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      py={"90px"}
    >
      <Box width="100%" maxWidth="589px">
        <Box mb="54px" alignSelf={"flex-start"}>
          <Typography
            color="#1A1A1A"
            fontSize={24}
            fontWeight={900}
            fontFamily={"Montserrat"}
            mb="8px"
          >
            Already have Pendo Account
          </Typography>
          <Typography fontSize={16} fontWeight={500} fontFamily={"Montserrat"}>
            Login your account to have access to Pendo
          </Typography>
        </Box>
        <Box display="flex" flexDirection="column" gap="24px" mb="76px">
          <Box>
            <Typography
              fontSize={18}
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
              fontSize={18}
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
              fontSize={16}
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
          mb="54px"
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
          gap="30px"
          mb="50px"
        >
          <Box width="168px" height="1px" bgcolor="#C0C0C0"></Box>
          <Typography fontSize={16} color="#707070" fontFamily={"Montserrat"}>
            Or sign in with
          </Typography>
          <Box width="168px" height="1px" bgcolor="#C0C0C0"></Box>
        </Box>

        <GoogleLoginButton />
        <Typography
          textAlign={"center"}
          fontWeight={500}
          fontSize={18}
          color="#707070"
          fontFamily={"Montserrat"}
          my="40px"
        >
          Don’t have an Account?{" "}
          <Link href="/register" style={{ textDecoration: "none" }}>
            <Typography
              component={"span"}
              display="inline"
              fontWeight={700}
              color="#000"
              fontFamily={"Montserrat"}
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
