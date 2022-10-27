import { Backdrop, CircularProgress } from "@mui/material";
import React, { useContext } from "react";
import { StatusContext } from "../../utils/contexts";

export default function UiManagment() {
  const { uiState } = useContext(StatusContext);

  return (
    <>
      <Backdrop
        sx={{
          color: "primary.main",
          backdropFilter: "blur(3px)",
          zIndex: 1444,
        }}
        open={uiState.loading}
      >
        <CircularProgress color={"inherit"} />
      </Backdrop>
    </>
  );
}
