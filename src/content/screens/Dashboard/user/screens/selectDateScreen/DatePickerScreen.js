import { SearchOutlined } from "@mui/icons-material";
import { Grid, IconButton } from "@mui/material";
import React, { useContext } from "react";
import { Pickers } from "../../../../../components/DatePicker/Pickers";
import { UserRouteContext } from "../../../../../utils/contexts";

export default function DatePickerScreen() {
  const { timeData, HandleTimeChange, SearchBikesByTime } =
    useContext(UserRouteContext);

  return (
    <Grid container spacing={8}>
      <Grid item xs={12} sm={7} md={8}>
        <Pickers timeData={timeData} HandleTimeChange={HandleTimeChange} />
      </Grid>
      <Grid item xs={12} sm={5} md={4}>
        <IconButton
          sx={classes.iconButton}
          color="secondary"
          onClick={SearchBikesByTime}
        >
          <SearchOutlined sx={{ color: "#fff", fontSize: "3rem" }} />
        </IconButton>
      </Grid>
    </Grid>
  );
}


const classes = {
  iconButton: {
    width: "100%",
    height: "100%",
    borderRadius: "12px",
    backgroundColor: "secondary.light",
    "&:hover, &.Mui-focusVisible": { backgroundColor: "secondary.main" },
  },
};
