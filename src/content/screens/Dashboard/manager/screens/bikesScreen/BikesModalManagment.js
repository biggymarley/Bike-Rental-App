import Brightness1RoundedIcon from "@mui/icons-material/Brightness1Rounded";
import { Button, Checkbox, MenuItem, Modal, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { StyledTextField } from "../../../../../components/ui/StyledTextField";
import { BikesScreenContext } from "../../../../../utils/contexts";
import { BIKESCOLORS } from "../../../../../utils/macros";

export default function BikesModalManagment() {
  let { bikeid } = useParams();
  const {
    handleImage,
    handleClose,
    handleChange,
    imageUpload,
    selectedBike,
    CreateBike,
    fetchBikeById,
    EditBike,
    bikesList,
    DeleteBike,
  } = useContext(BikesScreenContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (bikeid && bikeid !== "addBike" && bikesList.length > 0)
      fetchBikeById(bikeid);
  }, [bikeid, bikesList, fetchBikeById]);

  return (
    <Modal open={true} onClose={handleClose}>
      <Box sx={classes.root}>
        <Stack direction={"column"} spacing={3}>
          <Typography sx={classes.headTitle} variant="h6" component="h2">
            {bikeid === "addBike" ? "Add bike" : "Manage bike"}
          </Typography>
          <Stack direction={{ xs: "column", lg: "row" }} spacing={4}>
            <ModalTextInputs
              handleChange={handleChange}
              bikeid={bikeid}
              selectedBike={selectedBike}
            />
            <Stack spacing={2} direction="column">
              <StyledTextField
                type="file"
                inputProps={{ accept: "image/*" }}
                accept="image/*"
                onChange={handleImage}
              />
              {imageUpload?.preview || selectedBike.imageUrl ? (
                <img
                  alt={"bikeImage"}
                  src={imageUpload?.preview || selectedBike.imageUrl}
                  style={classes.previwImage}
                />
              ) : null}
            </Stack>
          </Stack>
          <Button
            variant="contained"
            color="secondary"
            disabled={selectedBike.modal === "" || selectedBike.location === ""}
            onClick={bikeid === "addBike" ? CreateBike : EditBike}
          >
            {bikeid === "addBike" ? "Add" : "Edit"}
          </Button>
          {bikeid === "addBike" ? null : (
            <>
              <Button
                variant="contained"
                color="info"
                onClick={() => navigate(`/dashboard/bikes/users/${bikeid}`)}
              >
                See Users Reservations
              </Button>
              <Button
                variant="contained"
                color="error"
                onClick={() => DeleteBike(bikeid, selectedBike.imageUrl)}
              >
                Delete bike
              </Button>
            </>
          )}
        </Stack>
      </Box>
    </Modal>
  );
}

const ModalTextInputs = ({ handleChange, selectedBike, bikeid }) => {
  return (
    <Stack direction={"column"} spacing={3}>
      <StyledTextField
        label="Model"
        name="modal"
        onChange={handleChange}
        value={selectedBike.modal}
      />
      <StyledTextField
        label="Location"
        name="location"
        onChange={handleChange}
        value={selectedBike.location}
      />

      <StyledTextField
        select
        label="Color"
        name="color"
        onChange={handleChange}
        value={selectedBike.color}
      >
        {BIKESCOLORS.map((option, index) => (
          <MenuItem key={option} value={option}>
            <Brightness1RoundedIcon sx={{ width: "40px", color: option }} />
          </MenuItem>
        ))}
      </StyledTextField>
      <Stack direction={"row"} spacing={2} alignItems="center">
        <Typography>Availability: </Typography>
        <Checkbox
          checked={selectedBike.available}
          onChange={handleChange}
          name="available"
        />
      </Stack>
    </Stack>
  );
};

const classes = {
  root: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "auto",
    maxHeight: "90vh",
    overflow: "auto",
    bgcolor: "background.paper",
    boxShadow: 24,
    borderRadius: "12px",
    p: 4,
  },
  headTitle: {
    fontFamily: "'Open Sans', sans-serif",
    fontWeight: 700,
    color: "secondary.main",
  },
  previwImage: {
    width: "250px",
    height: "250px",
    objectFit: "contain",
  },
};
