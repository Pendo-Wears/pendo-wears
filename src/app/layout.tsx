import { Box } from "@mui/material";
import { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "@fontsource/montserrat";
import "@fontsource/cormorant-garamond";
import { AuthProvider } from "../context/AuthContext";
import AlertUI from "../components/AlertUI";
import "@/src/assets/css/App.css";
import PageTracker from "./PageTracker";
import Script from "next/script";
import ConsentManager, { ConsentProvider } from "./ConsentManager";

export const metadata: Metadata = {
  metadataBase: new URL("https://pendowears.com"),
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
        <AuthProvider>
          <ConsentProvider>
            <div className="main-content">
              <Box
                component="div"
                sx={{ maxWidth: "1512px", margin: "0 auto" }}
              >
                <Navbar />
                <Box mt={{ xs: "100px", sm: "130px" }}>{children}</Box>
                <Footer />
              </Box>
            </div>
            <AlertUI />
          </ConsentProvider>
        </AuthProvider>
        {/* Consent Manager Script */}
        {/* <ThemeRegistry> */}
        <script src="https://accounts.google.com/gsi/client" async defer />

        <PageTracker />
      </body>
      <ConsentManager />
    </html>
  );
}
