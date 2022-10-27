import {
    Box, Typography
} from "@mui/material";
import React from "react";
import { classes } from "../styles";
export const Header = () => {
    return (
      <Box>
        <Typography sx={classes.title}>Hi Welcome Back!</Typography>
        <Typography variant="caption">
          Please put your login credentials below to start using the app
        </Typography>
      </Box>
    );
  };
  