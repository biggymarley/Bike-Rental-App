import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { classes } from "./styles";
export const HeaderText = () => {
    return (
      <>
        <Stack direction={"row"} spacing={1} alignItems="center" width={"100%"}>
          <Typography variant="h1" sx={classes.headTitle}>
            Save the
          </Typography>
          <Typography
            variant="h1"
            sx={{ ...classes.headTitle, ...classes.boldText, color:'secondary.main' }}
          >
            Earth,
          </Typography>
        </Stack>
        <Stack width={"100%"} direction={"row"} spacing={1} alignItems="center">
          <Typography
            variant="h1"
            sx={{ ...classes.headTitle, ...classes.boldText }}
          >
            Ride
          </Typography>
          <Typography variant="h1" sx={classes.headTitle}>
            in style.
          </Typography>
        </Stack>
      </>
    );
  };
  