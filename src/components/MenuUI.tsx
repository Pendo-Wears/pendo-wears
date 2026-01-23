import { Menu, PopoverOrigin, SxProps, Theme } from "@mui/material";
import { CSSProperties } from "react";

const MenuUI = ({
  onClose,
  anchorEl,
  children,
  style,
  anchor,
}: {
  onClose: () => void;
  anchorEl: null | HTMLElement;
  children: any;
  style?: CSSProperties | SxProps<Theme>;
  anchor: {
    horizontal: number | "center" | "right" | "left";
    vertical: number | "center" | "bottom" | "top";
  };
}) => {
  const open = Boolean(anchorEl);
  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      anchorReference="anchorEl"
      anchorOrigin={anchor as PopoverOrigin}
      onClose={onClose}
      sx={{ zIndex: 5600 }}
      slotProps={{
        paper: {
          sx: {
            width: { xs: "200px", sm: "260px" },
            borderRadius: "12px",
            zIndex: 9999,
            "&::-webkit-scrollbar": {
              display: "none",
            },
            ...style,
          },
        },
      }}
      disableScrollLock
    >
      {children}
    </Menu>
  );
};

export default MenuUI;
