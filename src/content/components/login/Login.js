import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";
import { IconButton, Paper, Stack } from "@mui/material";
import React from "react";
import { LoginContext } from "../../utils/contexts";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { LoginForm } from "./components/LoginForm";
import { classes } from "./styles";
import useLoginHooks from "./useLoginHooks";

export default function Login({ handleclose, handleopen }) {
  const [loginData, HandleInputChange, HandleAuth] =
    useLoginHooks();
  return (
    <LoginContext.Provider
      value={{ loginData, HandleInputChange, HandleAuth, handleopen }}
    >
      <Paper sx={classes.paper}>
        <IconButton onClick={() => handleclose("login")} sx={classes.closeIcon}>
          <HighlightOffRoundedIcon />
        </IconButton>
        <Stack
          direction={"column"}
          spacing={4}
          width={"100%"}
          sx={{ marginTop: "auto", marginBottom: "auto" }}
        >
          <Header />
          <LoginForm />
          <Footer />
        </Stack>
      </Paper>
    </LoginContext.Provider>
  );
}
