import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";
import { IconButton, Paper, Stack } from "@mui/material";
import React from "react";
import {
  RegisterContext
} from "../../utils/contexts";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { RegisterForm } from "./components/RegisterForm";
import { classes } from "./styles";
import useRegisterHooks from "./useRegisterHooks";

export default function Register({ handleclose, handleopen }) {
  const [
    RegisterData,
    errors,
    HandleRegister,
    HandleInputChange,
    handleErrors,
  ] = useRegisterHooks();
  return (
    <RegisterContext.Provider
      value={{
        RegisterData,
        HandleInputChange,
        HandleRegister,
        handleErrors,
        errors,
        handleopen,
      }}
    >
      <Paper sx={classes.paperGlass}>
        <IconButton
          onClick={() => handleclose("register")}
          sx={classes.closeIcon}
        >
          <HighlightOffRoundedIcon />
        </IconButton>
        <Stack
          direction={"column"}
          spacing={4}
          width={"100%"}
          sx={{ marginTop: "auto", marginBottom: "auto" }}
        >
          <Header />
          <RegisterForm />
          <Footer />
        </Stack>
      </Paper>
    </RegisterContext.Provider>
  );
}
