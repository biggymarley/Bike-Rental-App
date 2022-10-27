import { Star } from "@mui/icons-material";
import Brightness1RoundedIcon from "@mui/icons-material/Brightness1Rounded";
import { Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { Stack } from "@mui/system";
import React from "react";
import { classes } from "./styles";

export const BikeCardInfos = ({ bike, rating }) => {
    return (
      <>
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Stack direction={"column"}>
            <Typography sx={{ ...classes.modalName, fontWeight: 400 }}>
              Model:
            </Typography>
            <Typography sx={classes.modalName}>{bike.modal}</Typography>
          </Stack>
          <Stack direction={"column"}>
            <Typography sx={{ ...classes.modalName, fontWeight: 400 }}>
              Color:
            </Typography>
  
            <Brightness1RoundedIcon sx={{ width: "40px", color: bike.color }} />
          </Stack>
        </Stack>
        <Stack
          direction={"row"}
          spacing={2}
          // justifyContent="space-between"
          alignItems={"center"}
        >
          <Typography sx={{ ...classes.modalName, fontWeight: 400 }}>
            Availability:
          </Typography>
          <Checkbox checked={bike.available} disabled />
        </Stack>
        <Stack direction={"row"} spacing={2}>
          <Typography sx={{ ...classes.modalName, fontWeight: 400 }}>
            Location:
          </Typography>
          <Typography sx={classes.modalName}>{bike.location}</Typography>
        </Stack>
        <Stack direction={"row"} spacing={2}>
          <Typography sx={{ ...classes.modalName, fontWeight: 400 }}>
            Rating:
          </Typography>
          <StarsHandler rating={rating} />
        </Stack>
      </>
    );
  };

  const StarsHandler = ({ rating }) => {
    return (
      <Stack direction={"row"} spacing={0.5}>
        {[...Array(parseInt(rating)).keys()].map((value, index) => (
          <Star key={index} sx={{ color: "#FFC600" }} />
        ))}
      </Stack>
    );
  };