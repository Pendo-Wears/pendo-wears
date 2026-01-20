import { Box, createTheme, ThemeProvider } from "@mui/material";
import { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "@fontsource/montserrat";
import "@fontsource/cormorant-garamond";
import { AuthProvider } from "../context/AuthContext";
import AlertUI from "../components/AlertUI";
import "@/src/assets/css/App.css";
import ThemeRegistry from "../ThemeRegistry";

export const metadata: Metadata = {
  title: {
    default: "Pendo Wears",
    template: "%s | Pendo Wears",
  },
  description: "Pendo Wears",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning style={{ background: "#fff" }}>
        {/* <ThemeRegistry> */}
        <script src="https://accounts.google.com/gsi/client" async defer />
        <AuthProvider>
          <Box sx={{ maxWidth: "1512px", margin: "0 auto " }}>
            <Navbar />
            <Box mt="130px">{children}</Box>
            <Footer />
          </Box>
          <AlertUI />
        </AuthProvider>
        {/* </ThemeRegistry> */}
      </body>
    </html>
  );
}
