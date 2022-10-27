import {
    Button, Stack,
    Typography
} from "@mui/material";
import React, {
    useContext
} from "react";
import { RegisterContext } from "../../../utils/contexts";
export const Footer = () => {
    const { handleopen } = useContext(RegisterContext);
  
    return (
      <Stack
        direction={"row"}
        spacing={1}
        alignSelf={"center"}
        alignItems={"center"}
      >
        <Typography variant="caption">Already have account?</Typography>
        <Button
          sx={{ textTransform: "capitalize" }}
          disableElevation
          disableRipple
          onClick={() => handleopen("login")}
        >
          <Typography variant="caption" fontWeight={"bold"} color={"primary"}>
            Sign in
          </Typography>
        </Button>
      </Stack>
    );
  };
  