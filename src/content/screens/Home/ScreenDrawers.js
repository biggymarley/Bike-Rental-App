import { Drawer } from "@mui/material";
import React from "react";
import Login from "../../components/login/Login";
import Register from "../../components/Register/Register";

export const ScreenDrawers = ({ handleclose, screen, handleopen }) => {
    return (
      <>
        <Drawer
          anchor="right"
          open={screen.login}
          PaperProps={{
            sx: {
              width: { xs: "100%", sm: "400px" },
            },
          }}
          onClose={() => handleclose("login")}
        >
          <Login handleclose={handleclose} handleopen={handleopen} />
        </Drawer>
        <Drawer
          PaperProps={{
            sx: {
              width: { xs: "100%", sm: "400px" },
            },
          }}
          anchor="right"
          open={screen.register}
          onClose={() => handleclose("register")}
        >
          <Register handleclose={handleclose} handleopen={handleopen} />
        </Drawer>
      </>
    );
  };