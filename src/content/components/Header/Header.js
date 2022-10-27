import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { HeaderContext } from "../../utils/contexts";
import { ROLES } from "../../utils/macros";
import HeaderMenu from "./HeaderMenu";
import { ManagerTools } from "./ManagerTools";
import { classes } from "./styles";
import { UserTools } from "./UserTools";

export default function Header({ name, role, Logout }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();
  const open = Boolean(anchorEl);
  const handleClick = (path) => {
    handleClose();
      if (path) navigate(path);
      else Logout();
  };
  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <HeaderContext.Provider
      value={{ anchorEl, open, handleClick, handleClose, Logout, handleOpen }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <AppBar component="nav" sx={classes.header} elevation={1}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={classes.headerText}>
              Hi {name} <Typography variant="caption">{role}</Typography>
            </Typography>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              {role === ROLES.MANAGER ? <ManagerTools /> : <UserTools />}
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <HeaderMenu>
                {role === ROLES.MANAGER ? <ManagerTools /> : <UserTools />}
              </HeaderMenu>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </HeaderContext.Provider>
  );
}
