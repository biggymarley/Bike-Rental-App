import { Modal } from "@mui/material";
import { Box } from "@mui/system";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getReservationByBikeid } from "../../../../../firebase/firebase";
import ReservationsTable from "../../../../../components/Tables/ReservationsTable";
import { StatusContext } from "../../../../../utils/contexts";

export default function BikesReservations() {
  let { bikeid } = useParams();
  const navigate = useNavigate();
  const [usersReservations, setusersReservations] = useState([]);
  const { dispatch } = useContext(StatusContext);

  const handleClose = useCallback(() => {
    navigate("/dashboard/bikes");
    setusersReservations([]);
  }, [navigate]);
  const fetchReservationsUsers = useCallback(async () => {
    dispatch({ type: "showLoading", payload: true });
    const reservs = await getReservationByBikeid(bikeid);
    dispatch({ type: "showLoading", payload: false });

    if (reservs) setusersReservations([...reservs]);
  }, [bikeid, dispatch]);

  useEffect(() => {
    fetchReservationsUsers(bikeid);
  }, [bikeid, fetchReservationsUsers]);

  return (
    <Modal open={true} onClose={handleClose}>
      <Box sx={classes.root}>
        <ReservationsTable users={usersReservations} />
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
    maxHeight: "90vh",
    overflow: "auto",
    bgcolor: "background.paper",
    boxShadow: 24,
    borderRadius: "12px",
    // p: 4,
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
