import { Box, Typography } from "@mui/material";
import React from "react";
import DatePickerScreen from "./DatePickerScreen";

export const SelectDateScreen = () => {
    return (
      <>
        <HeadTitle />
        <DatePickerScreen />
      </>
    );
  };
  
  const HeadTitle = () => {
    return (
      <>
        <Box sx={{ mb: 4 }}>
          <Typography sx={classes.headTitle}>
            Make your Trip{" "}
            <Typography
              component="span"
              sx={{
                ...classes.headTitle,
                fontWeight: 900,
                color: "primary.main",
              }}
            >
              Easy
            </Typography>{" "}
            without{" "}
            <Typography
              component="span"
              sx={{
                ...classes.headTitle,
                fontWeight: 900,
                color: "secondary.main",
              }}
            >
              Pollution
            </Typography>
          </Typography>
          <Typography sx={classes.caption}>
            Choose the period of time you want to Ride your bikes and save the
            world
          </Typography>
        </Box>
      </>
    );
  };
  
  const classes = {
    headTitle: {
      fontFamily: "'Open Sans', sans-serif",
      fontSize: "clamp(1rem, 10vw, 4rem)",
      fontWeight: 400,
      color: "#000",
      letterSpacing: "2px",
    },
    caption: {
      fontFamily: "'Open Sans', sans-serif",
      fontWeight: 500,
    },
  };
  