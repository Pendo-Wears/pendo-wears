"use client";

import { icons } from "@/src/assets/icons/icons";
import RequireAuth from "@/src/components/RequireAuth";
import { useAuth } from "@/src/context/AuthContext";
import { logoutUser } from "@/src/lib/authServices";
import { changeUserPassword } from "@/src/services/authUsage";
import { Box, CircularProgress, TextField, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const ChangePassword = () => {
  const router = useRouter();
  const { isAuthenticated, setIsAuthenticated, fireAlert } = useAuth();

  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  async function submitForm() {
    const profile =
      typeof window !== "undefined"
        ? localStorage.getItem("user") || "null"
        : "null";
    const userData = JSON.parse(profile);

    setLoading(true);

    const result = await changeUserPassword(password);

    // console.log(result, "RESULTTTTT");

    if (!result.success) {
      fireAlert(result.error, "error");
      return;
    }
    fireAlert("Password Changed Successful", "success");
    setIsAuthenticated(true);
    setLoading(false);
    logoutUser();
  }

  return (
    // <RequireAuth>
    <Box
      bgcolor="#fff"
      width="100%"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      py={{ xs: "45px", sm: "90px" }}
      px={2}
    >
      <Box width="100%" maxWidth="589px">
        <Box mb="54px" alignSelf={"flex-start"}>
          <Typography
            color="#1A1A1A"
            fontSize={{ xs: 18, sm: 24 }}
            fontWeight={900}
            fontFamily={"Montserrat"}
            mb="8px"
          >
            Change your password
          </Typography>
          {/* <Typography fontSize={16} fontWeight={500} fontFamily={"Montserrat"}>
            Login your account to have access to Pendo
          </Typography> */}
        </Box>
        <Box display="flex" flexDirection="column" gap="24px" mb="76px">
          <Box>
            <Typography
              fontSize={{ xs: 16, sm: 18 }}
              color="#586166"
              fontWeight={500}
              fontFamily={"Montserrat"}
              mb="8px"
            >
              New Password
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
            {loading ? (
              <CircularProgress size={18} sx={{ color: "#fff" }} />
            ) : (
              "Change Password"
            )}
          </Typography>
        </Box>
      </Box>
    </Box>
    // </RequireAuth>
  );
};

export default ChangePassword;
