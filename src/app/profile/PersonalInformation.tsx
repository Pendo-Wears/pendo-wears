"use client";

import { icons } from "@/src/assets/icons/icons";
import { useAuth } from "@/src/context/AuthContext";
import { User } from "@/src/lib/types";
import userEndpoints from "@/src/lib/userServices";
import { Box, TextField, Typography } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const PersonalInformation = () => {
  const { fireAlert, user: thisUser, setUser, getUser } = useAuth();
  // const [user, setUser] = useState<User | null>(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [dob, setDob] = useState<
    string | undefined | number | Record<string, unknown>
  >("");
  const [gender, setGender] = useState<
    string | undefined | number | Record<string, unknown>
  >("");
  const [isEditMode, setIsEditMode] = useState(false);
  const [loading, setLoading] = useState(false);

  const getUserData = async () => {
    setFirstName(thisUser?.first_name!);
    setLastName(thisUser?.last_name!);
    setEmail(thisUser?.email!);
    setPhoneNumber(thisUser?.billing.phone!);
    const date = thisUser?.meta_data.find((x) => x.key === "dateOfBirth");
    const userGender = thisUser?.meta_data.find((x) => x.key === "gender");
    setDob(date?.value);
    setGender(userGender?.value);
  };

  const updateUser = async () => {
    if (!isEditMode) {
      setIsEditMode(true);
      return;
    }

    if (loading) {
      return;
    }

    try {
      setLoading(true);
      const updateBody = {
        first_name: firstName,
        last_name: lastName,
        billing: {
          phone: phoneNumber,
        },
        meta_data: [
          {
            id: 946,
            key: "gender",
            value: gender,
          },
          {
            id: 948,
            key: "dateOfBirth",
            value: dob,
          },
        ],
      };

      if (thisUser && thisUser.id) {
        const updateUser: any = await userEndpoints.updateUser(
          thisUser?.id,
          updateBody,
        );
        if (updateUser?.data.success) {
          setIsEditMode(false);
          getUser();
          fireAlert("User updated successfully", "success");
          if (typeof window !== "undefined") {
            localStorage.setItem(
              "user",
              JSON.stringify({
                ...updateUser.data.data,
                billing: {
                  ...updateUser.data.data.billing,
                  countryName: thisUser?.billing.countryName,
                },
              }),
            );
          }
        }
      }
    } catch (error) {
      console.error("Error updating user:", error);
      fireAlert("Failed to update user", "error");
    } finally {
      getUser();
      setLoading(false);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);
  return (
    <Box width={{xs: '100%', md: "72%"}} bgcolor="#f5f5f5" borderRadius={"16px"} p={{xs: '16px', sm: '20px', md: "32px"}}>
      <Box display="flex" justifyContent={"space-between"} alignItems="center">
        <Typography
          color={"#2D3436"}
          fontSize={{ xs: 18, sm: 24 }}
          fontWeight={700}
          fontFamily={"Montserrat"}
        >
          Personal Information
        </Typography>
        <Box
          width="100px"
          height="40px"
          bgcolor={"#D0950F"}
          borderRadius="8px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap="8px"
          sx={{ cursor: "pointer" }}
          onClick={updateUser}
        >
          {loading ? (
            <Typography
              fontSize={16}
              fontWeight={500}
              color="#fff"
              fontFamily={"Montserrat"}
            >
              loading...
            </Typography>
          ) : isEditMode ? (
            <Typography
              fontSize={16}
              fontWeight={500}
              color="#fff"
              fontFamily={"Montserrat"}
            >
              Update
            </Typography>
          ) : (
            <>
              <Image src={icons.edit} alt="edit" width="16" height="20" />
              <Typography
                fontSize={16}
                fontWeight={500}
                color="#fff"
                fontFamily={"Montserrat"}
              >
                Edit
              </Typography>
            </>
          )}
        </Box>
      </Box>
      <Box display={"flex"} flexDirection={"column"} gap="24px" mt="24px">
        <Box
          display="flex"
          alignItems={"center"}
          justifyContent={"space-between"}
          gap="24px"
        >
          <Box width="100%">
            <Typography
              fontSize={{xs: 16, sm: 18}}
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
              placeholder="Enter first name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              InputProps={{
                readOnly: !isEditMode,
              }}
              sx={{
                bgcolor: "#F9FAFB",
                borderRadius: "6px",
                height: "54px",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderRadius: "8px",
                    border: "1px solid #D1D5DB", // remove border normally
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
          <Box width="100%">
            <Typography
              fontSize={{xs: 16, sm: 18}}
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
              InputProps={{
                readOnly: !isEditMode,
              }}
              sx={{
                bgcolor: "#F9FAFB",
                borderRadius: "6px",
                height: "54px",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderRadius: "8px",
                    border: "1px solid #D1D5DB", // remove border normally
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
          display="flex"
          alignItems={"center"}
          justifyContent={"space-between"}
          gap="24px"
        >
          <Box width="100%">
            <Typography
              fontSize={{xs: 16, sm: 18}}
              color="#586166"
              fontWeight={500}
              fontFamily={"Montserrat"}
              mb="8px"
            >
              Email Address
            </Typography>
            <TextField
              fullWidth
              variant="outlined"
              required
              placeholder="Enter email address"
              InputProps={{
                readOnly: true,
              }}
              value={email}
              sx={{
                bgcolor: "#F9FAFB",
                borderRadius: "6px",
                height: "54px",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderRadius: "8px",
                    border: "1px solid #D1D5DB", // remove border normally
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
          <Box width="100%">
            <Typography
              fontSize={{xs: 16, sm: 18}}
              color="#586166"
              fontWeight={500}
              fontFamily={"Montserrat"}
              mb="8px"
            >
              Phone Number
            </Typography>
            <TextField
              fullWidth
              variant="outlined"
              required
              placeholder="Enter phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              InputProps={{
                readOnly: !isEditMode,
              }}
              sx={{
                bgcolor: "#F9FAFB",
                borderRadius: "6px",
                height: "54px",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderRadius: "8px",
                    border: "1px solid #D1D5DB", // remove border normally
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
          display="flex"
          alignItems={"center"}
          justifyContent={"space-between"}
          gap="24px"
        >
          <Box width="100%">
            <Typography
              fontSize={{xs: 16, sm: 18}}
              color="#586166"
              fontWeight={500}
              fontFamily={"Montserrat"}
              mb="8px"
            >
              Date Of Birth
            </Typography>
            <TextField
              fullWidth
              variant="outlined"
              required
              placeholder="Enter DOB"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              InputProps={{
                readOnly: !isEditMode,
              }}
              sx={{
                bgcolor: "#F9FAFB",
                borderRadius: "6px",
                height: "54px",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderRadius: "8px",
                    border: "1px solid #D1D5DB", // remove border normally
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
          <Box width="100%">
            <Typography
              fontSize={{xs: 16, sm: 18}}
              color="#586166"
              fontWeight={500}
              fontFamily={"Montserrat"}
              mb="8px"
            >
              Gender
            </Typography>
            <TextField
              fullWidth
              variant="outlined"
              required
              placeholder="Enter gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              InputProps={{
                readOnly: !isEditMode,
              }}
              sx={{
                bgcolor: "#F9FAFB",
                borderRadius: "6px",
                height: "54px",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderRadius: "8px",
                    border: "1px solid #D1D5DB", // remove border normally
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
      </Box>
    </Box>
  );
};

export default PersonalInformation;
