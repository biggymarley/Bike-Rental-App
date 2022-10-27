import { MenuRounded } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import Menu from "@mui/material/Menu";
import * as React from "react";
import { useContext } from "react";
import { HeaderContext } from "../../utils/contexts";

export default function HeaderMenu({ children }) {
  const { anchorEl, open, handleOpen, handleClose } = useContext(HeaderContext);

  return (
    <div>
      <IconButton
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleOpen}
      >
        <MenuRounded />
      </IconButton>
      {anchorEl && (
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {children}
        </Menu>
      )}
    </div>
  );
}
