import { Grid } from "@mui/material";
import React from "react";
import { BikeCard } from "./BikeCard";
export default function BikesList({
  bikes,
  withTime,
  gridSizing,
  editBike,
}) {
  return (
    <Grid container >
      {bikes.map((bike, index) => (
        <BikeCard
          bike={bike}
          key={index}
          withTime={withTime}
          gridSizing={gridSizing}
          editBike={editBike}
        />
      ))}
    </Grid>
  );
}









