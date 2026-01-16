"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { User } from "../lib/types";

interface AuthContextType {
  isAuthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;
  alertMessage?: string;
  setAlertMessage?: (message: string) => void;
  alertType?: "success" | "info" | "warning" | "error";
  setAlertType?: (type: "success" | "info" | "warning" | "error") => void;
  openAlert: boolean;
  setOpenAlert: (open: boolean) => void;
  fireAlert: (
    message: string,
    type: "success" | "info" | "warning" | "error"
  ) => void;
  amount: number;
  setAmount: (x: number) => void;
  user: User | undefined;
  setUser: (x: User) => void;
  getUser: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [alertMessage, setAlertMessage] = useState<string>("");
  const [alertType, setAlertType] = useState<
    "success" | "info" | "warning" | "error"
  >("success");
  const [openAlert, setOpenAlert] = useState<boolean>(false);
  const [amount, setAmount] = useState(0);
  const [user, setUser] = useState<User>();

  const getUserAuth = () => {
    if (typeof window !== "undefined") {
      const raw = localStorage.getItem("isAuthenticated") === "true";
      setIsAuthenticated(raw);
    }
  };

  const getUser = () => {
    const raw =
      typeof window !== "undefined" ? localStorage.getItem("user") ?? "" : "";
    const thisUser = JSON.parse(raw);
    setUser(thisUser);
  };

  useEffect(() => {
    getUserAuth();
    getUser();
  }, []);

  const fireAlert = (
    message: string,
    type: "success" | "info" | "warning" | "error"
  ) => {
    setOpenAlert(true);
    setAlertMessage(message);
    setAlertType(type);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        alertMessage,
        setAlertMessage,
        alertType,
        setAlertType,
        openAlert,
        setOpenAlert,
        fireAlert,
        amount,
        setAmount,
        user,
        setUser,
        getUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used inside an AuthProvider");
  }
  return context;
}
