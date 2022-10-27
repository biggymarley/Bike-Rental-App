import { Button } from "@mui/material";
import React, { useContext } from "react";
import { useMatch, useNavigate } from "react-router-dom";
import { UserRouteContext } from "../../utils/contexts";

export const BikeCardUserButtons = ({ bikeid, rid }) => {
    const navigate = useNavigate();
    let match = useMatch("/dashboard/your_bikes");
    const { ReserveBike, CancleReservation, timeData } = useContext(UserRouteContext);
    return match ? (
      <Button
        variant="contained"
        color="error"
        onClick={() => CancleReservation(rid)}
      >
        Cancel Reservation
      </Button>
    ) : (
      <>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => ReserveBike(bikeid, timeData)}
        >
          Reserve
        </Button>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => navigate(`rating/${bikeid}`)}
        >
          rate
        </Button>
      </>
    );
  };