import { Box, createTheme, ThemeProvider } from "@mui/material";
import { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "@fontsource/montserrat"
import "@fontsource/cormorant-garamond";

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
      <body suppressHydrationWarning>
        <Box component={'div'} sx={{ maxWidth: "1512px", margin: "0 auto " }}>
          <Navbar />
          <Box mt='100px'>{children}</Box>
          <Footer />
        </Box>
      </body>
    </html>
  );
}
