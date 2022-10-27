import {
    Button, Stack,
    Typography
} from "@mui/material";
import React, { useContext } from "react";
import { LoginContext } from "../../../utils/contexts";
export const Footer = () => {
    const { handleopen } = useContext(LoginContext);
    return (
      <Stack
        direction={"row"}
        spacing={1}
        alignSelf={"center"}
        alignItems={"center"}
      >
        <Typography variant="caption">D'ont have account?</Typography>
        <Button
          sx={{ textTransform: "capitalize" }}
          disableElevation
          disableRipple
          onClick={() => handleopen("register")}
        >
          <Typography variant="caption" fontWeight={"bold"} color={"primary"}>
            Sign up
          </Typography>
        </Button>
      </Stack>
    );
  };