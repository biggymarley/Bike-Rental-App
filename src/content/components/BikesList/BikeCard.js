import { Grid, Paper, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import dayjs from "dayjs";
import React, { useContext } from "react";
import noImageSource from "../../../assets/noImageSource.jpg";
import { UserContext } from "../../utils/contexts";
import { ROLES } from "../../utils/macros";
import { BikeCardInfos } from "./BikeCardInfos";
import { classes } from "./styles";
import { BikeCardUserButtons } from "./UserButtons";

export const BikeCard = ({ bike, withTime, gridSizing, editBike }) => {
    const { userData } = useContext(UserContext);
  
    return (
      <Grid
        item
        xs={gridSizing?.xs ?? 12}
        sm={gridSizing?.sm ?? 6}
        md={gridSizing?.md ?? 4}
        lg={gridSizing?.lg ?? 3}
      >
        <Paper
          sx={{ ...classes.paper, ...(editBike && classes.hover) }}
          onClick={editBike ? () => editBike(bike.bikeid) : () => {}}
        >
          <Stack direction={"column"} spacing={2}>
            <img src={bike?.imageUrl ?? noImageSource} style={classes.image} alt={"bikeImage"}/>
            <BikeCardInfos bike={bike} rating={bike.rating} />
            <TimePeriodHandler withTime={withTime} bike={bike} />
            {userData.role === ROLES.USER ? (
              <BikeCardUserButtons bikeid={bike.bikeid} rid={bike.rid} />
            ) : null}
          </Stack>
        </Paper>
      </Grid>
    );
  };

  const TimePeriodHandler = ({ withTime, bike }) => {
    return withTime ? (
      <>
        <Stack direction={"column"}>
          <Typography sx={{ ...classes.modalName, fontWeight: 400 }}>
            Rental start date:
          </Typography>
          <Typography sx={classes.modalName}>
            {dayjs(bike.startDate).format("DD-MMM-YYYY")}
          </Typography>
        </Stack>
        <Stack direction={"column"}>
          <Typography sx={{ ...classes.modalName, fontWeight: 400 }}>
            Rental end date:
          </Typography>
          <Typography sx={classes.modalName}>
            {dayjs(bike.endDate).format("DD-MMM-YYYY")}
          </Typography>
        </Stack>
      </>
    ) : null;
  };