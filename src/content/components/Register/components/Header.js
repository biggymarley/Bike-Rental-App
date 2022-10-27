import {
    Box, Typography
} from "@mui/material";
import React from "react";
import { classes } from "../styles";
export const Header = () => {
    return (
      <Box>
        <Typography sx={classes.title}>Create account</Typography>
        <Typography variant="caption">
          Get access to RentalApp by creating an account
        </Typography>
      </Box>
    );
  };
  
  