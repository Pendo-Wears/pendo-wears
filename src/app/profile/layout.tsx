import MultilinkUI from "@/src/components/MultilinkUI";
import RequireAuth from "@/src/components/RequireAuth";
import { Box } from "@mui/material";
import React from "react";

const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
  const links = [
    { name: "My Profile", to: "/profile" },
    { name: "My orders", to: "/profile/orders" },
    { name: "wishlist", to: "/profile/wishlist" },
    { name: "settings", to: "/profile/settings" },
  ];
  return (
    <RequireAuth>
      <MultilinkUI links={links} />
      <Box mt='30px'>{children}</Box>
    </RequireAuth>
  );
};

export default ProfileLayout;
