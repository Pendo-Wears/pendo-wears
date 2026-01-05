"use client";
import { Alert, Snackbar } from "@mui/material";
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

const AlertUI = () => {
  const { openAlert, setOpenAlert, alertMessage, alertType } = useAuth();
  return (
    <Snackbar
      open={openAlert || false}
      autoHideDuration={5000}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      onClose={() => setOpenAlert(false)}
    >
      <Alert
        onClose={() => setOpenAlert(false)}
        severity={alertType as "success" | "info" | "warning" | "error"}
        variant="filled"
        sx={{ width: "100%" }}
      >
        {alertMessage}
      </Alert>
    </Snackbar>
  );
};

export default AlertUI;
