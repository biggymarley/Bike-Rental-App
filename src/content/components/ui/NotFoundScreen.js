import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import bg from "../../../assets/bg/homeBackground.jpg";
export default function NotFoundScreen() {
  const navigate = useNavigate();
  return (
    <Box sx={classes.notfound}>
      <Typography sx={classes.title}>Page Not Found</Typography>
      <IconButton
        color="secondary"
        sx={classes.button}
        onClick={() => navigate(-1)}
      >
        <ArrowBackRoundedIcon sx={{ width: "20vw", height: "20vw" }} />
      </IconButton>
    </Box>
  );
}

const classes = {
  notfound: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100vw",
    background: `linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8) ), url(${bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    display: "grid",
    placeItems: "center",
  },
  title: {
    fontFamily: "'Open Sans', sans-serif",
    fontSize: "clamp(1rem, 10vw, 5rem)",
    fontWeight: 700,
    textTransform: "uppercase",
    color: "#fff",
    letterSpacing: "2px",
  },
};
