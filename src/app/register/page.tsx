"use client";
import { icons } from "@/src/assets/icons/icons";
import { useAuth } from "@/src/context/AuthContext";
import userEndpoints from "@/src/lib/userServices";
import { handleSignup } from "@/src/services/authUsage";
import {
  Box,
  CircularProgress,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { GetCountries } from "react-country-state-city";
import { Country } from "react-country-state-city/dist/esm/types";

const Register = () => {
  const { isAuthenticated, fireAlert } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("");
  const [avatar, setAvatar] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [success, setSuccess] = useState(false);

  const [countriesList, setCountriesList] = useState<Country[]>([]);
  useEffect(() => {
    GetCountries().then((result) => {
      setCountriesList(result);
    });
  }, []);

  console.log(firstName, email, password, country, avatar);

  async function submitForm() {
    setLoading(true);

    const result = await handleSignup({
      firstName,
      lastName,
      email,
      password,
      country,
      avatar,
    });

    setLoading(false);

    console.log(result, "RESULTTTTT");

    if (!result.success) {
      fireAlert(result.error, "error");
      return;
    }

    fireAlert("Account created successfully", "success");
    setSuccess(true);
    setLastName("");
    setFirstName("");
    setEmail("");
    setPassword("");
    setCountry("");
    setAvatar("");
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
   }
  }

  useEffect(() => {
    if (isAuthenticated) {
      router.replace("/");
    }
  });

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

  // const updateAvatar = async (url: string) => {
  //   try {
  //     const result: any = await userEndpoints.updateAvatar(51, url);
  //     console.log(result);
  //   } catch (e: any) {
  //     fireAlert(e.message, "error");
  //   }
  // };

  const handleAvatarUpload = async (file: File) => {
    // 1️⃣ Upload to WordPress Media Library
    const avatarUrl = await uploadImage(file);

    // 2️⃣ Update simple_local_avatar meta
    // const updatedUser = await updateAvatar(avatarUrl);

    // console.log("Updated user avatar:", updatedUser);
  };

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
      <Box textAlign={"center"} mb="54px">
        {success && (
          <Box
            width="90%"
            maxWidth="858px"
            p="12px 24px"
            borderRadius={"12px"}
            mb="24px"
            bgcolor={"#10851cff"}
          >
            <Typography
              textAlign={"left"}
              color="#fff"
              fontSize={16}
              fontWeight={500}
              fontFamily={"Montserrat"}
            >
              Your account was created successfully. We’ve sent you an
              activation email — please open it and click the verification link
              to activate your account. After verifying, you’ll need to return
              and log in to continue.
            </Typography>
          </Box>
        )}
        <Typography
          color="#1A1A1A"
          fontSize={56}
          fontWeight={900}
          fontFamily={"Montserrat"}
        >
          Register Now!
        </Typography>
        <Typography fontSize={18} fontWeight={500} fontFamily={"Montserrat"}>
          Create your account to have access to a personalized experience.
        </Typography>
      </Box>
      <Box
        width="100%"
        maxWidth="858px"
        display="flex"
        flexDirection="column"
        gap="24px"
        mb="76px"
      >
        <Box>
          <Typography
            fontSize={18}
            color="#586166"
            fontWeight={500}
            fontFamily={"Montserrat"}
            mb="8px"
          >
            First Name
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            required
            placeholder="Enter user name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
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
            Last Name
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            required
            placeholder="Enter last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
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
            Email
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            required
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
        </Box>
        <Box>
          <Typography
            fontSize={18}
            color="#586166"
            fontWeight={500}
            fontFamily={"Montserrat"}
            mb="8px"
          >
            Country
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            required
            placeholder="Please select your country"
            select
            value={country || "Select country"}
            children={countriesList.map((country) => (
              <MenuItem
                style={{
                  fontSize: 16,
                  fontFamily: "Montserrat",
                  padding: "16px",
                  cursor: "pointer",
                }}
                value={country.iso2}
                key={country.id}
                onClick={() => setCountry(country.iso2)}
              >
                {country.name}
              </MenuItem>
            ))}
            sx={{
              bgcolor: "#f5f5f5",
              borderRadius: "6px",
              height: "54px",
              fontFamily: "Montserrat",
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
        {/* <Box display="flex" gap="24px" alignItems={"center"} width="100%">
          <Box position={"relative"}>
            <Box
              width="100%"
              height="100%"
              position={'absolute'}
              borderRadius={"100%"}
              component={"input"}
              type="file"
              onChange={(e: any) => handleAvatarUpload(e.target.files[0])}
            ></Box>
            <Image
              src={icons.avatar}
              alt="avatar"
              width="84"
              height="84"
              style={{ borderRadius: "100%" }}
            />
            <Image
              src={icons.upload}
              alt="upload"
              width="22"
              height="18"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />
          </Box>
          <Box width="100%">
            <Typography
              fontSize={18}
              color="#586166"
              fontWeight={500}
              fontFamily={"Montserrat"}
              mb="8px"
            >
              Upload Photo
            </Typography>
            <TextField
              fullWidth
              variant="outlined"
              required
              value={avatar}
              onChange={(e) => setAvatar(e.target.value)}
              placeholder="Select photo"
              sx={{
                bgcolor: "#f5f5f5",
                borderRadius: "6px",
                height: "54px",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
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
        </Box> */}
      </Box>
      <Typography
        textAlign={"center"}
        fontSize={20}
        color="#707070"
        fontFamily={"Montserrat"}
        mb="40px"
      >
        By creating the account you accept the Terms and Conditions.
      </Typography>
      <Box
        width="90%"
        maxWidth="852px"
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
        onClick={loading ? () => {} : submitForm}
      >
        <Typography
          fontSize={16}
          fontWeight={500}
          fontFamily={"Montserrat"}
          color="#fff"
        >
          {loading ? <CircularProgress size={18} color="inherit" /> : "Sign up"}
        </Typography>
      </Box>
      <Typography
        textAlign={"center"}
        fontWeight={500}
        fontSize={18}
        color="#707070"
        fontFamily={"Montserrat"}
        mb="40px"
      >
        Already have an Account?{" "}
        <Link href="/login" style={{ textDecoration: "none" }}>
          <Typography
            component={"span"}
            display="inline"
            fontWeight={700}
            color="#000"
            fontFamily={"Montserrat"}
          >
            Sign in
          </Typography>
        </Link>
      </Typography>
    </Box>
  );
};

export default Register;
