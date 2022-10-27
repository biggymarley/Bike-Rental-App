import { Add } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import BikesList from "../../../../../components/BikesList/BikesList";
import {
  BikesScreenContext
} from "../../../../../utils/contexts";
import useBikesHooks from "../../hooks/useBikesHooks";
import BikesModalManagment from "./BikesModalManagment";
import BikesReservations from "./BikesReservations";

export default function BikesScreen() {
  const navigate = useNavigate();

  const [
    CreateBike,
    handleClose,
    handleChange,
    handleImage,
    selectedBike,
    imageUpload,
    fetchBikeById,
    EditBike,
    bikesList,
    setbikesList,
    DeleteBike,
    fetchBikes,
    HandleEditBike,
  ] = useBikesHooks();

  useEffect(() => {
    fetchBikes();
  }, [fetchBikes]);

  return (
    <BikesScreenContext.Provider
      value={{
        CreateBike,
        handleClose,
        handleChange,
        handleImage,
        selectedBike,
        imageUpload,
        fetchBikeById,
        EditBike,
        bikesList,
        setbikesList,
        DeleteBike,
      }}
    >
      <Box>
        <Button
          onClick={() => navigate("/dashboard/bikes/addBike")}
          sx={classes.addButton}
          endIcon={<Add />}
          color="secondary"
          variant="contained"
        >
          Add Bike
        </Button>
        <BikesList bikes={bikesList} editBike={HandleEditBike} />
        <Routes>
          <Route path=":bikeid" element={<BikesModalManagment />} />
          <Route path="users/:bikeid" element={<BikesReservations />} />
        </Routes>
      </Box>
    </BikesScreenContext.Provider>
  );
}

const classes = {
  addButton: {
    alignSelf: "flex-start",
    px: 4,
    py: 2,
    borderRadius: "12px",
    fontWeight: 700,
    fontFamily: "'Open Sans', sans-serif",
    mb: 4,
  },
};
