import { Button, MenuItem, Modal, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { postRating } from "../../firebase/firebase";
import { StyledTextField } from "../ui/StyledTextField";
import { StatusContext, UserContext,UserRouteContext } from "../../utils/contexts";

export default function RatingScreen() {
  const navigate = useNavigate();
  let { bikeid } = useParams();
  const [rating, setRating] = useState(1);
  const { userData } = useContext(UserContext);
  const { availableBikes, setAvailableBikes } = useContext(UserRouteContext);
  const { dispatch } = useContext(StatusContext);

  const RateBike = async () => {
    dispatch({ type: "showLoading", payload: true });
    const RateTotal = await postRating(userData.uid, bikeid, rating);
    dispatch({ type: "showLoading", payload: false });

    if (RateTotal !== null) {
      const mergedData = availableBikes.map((bike) =>
        bike.bikeid === bikeid ? { ...bike, rating: RateTotal } : bike
      );
      setAvailableBikes([...mergedData]);
      Handleclose();
      alert("Rate Score Submited");
    }
  };

  const handleChange = (e) => {
    setRating(e.target.value);
  };

  const Handleclose = () => {
    navigate("/dashboard/available_bikes/");
  };
  return (
    <Modal open={true} onClose={Handleclose}>
      <Box sx={classes.root}>
        <Stack spacing={2}>
          <Typography sx={classes.headTitle}>Rate Bike</Typography>
          <StyledTextField
            sx={{ width: "200px" }}
            select
            label="Rate Score"
            name="rate"
            onChange={handleChange}
            value={rating}
          >
            {[1, 2, 3, 4, 5].map((option, index) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </StyledTextField>
          <Button variant="contained" color="secondary" onClick={RateBike}>
            Rate
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
}

const classes = {
  root: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "auto",
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
};
