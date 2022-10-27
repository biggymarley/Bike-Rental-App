import styled from "@emotion/styled";
import { TextField } from "@mui/material";

export const StyledTextField = styled(TextField)({
    "& .MuiOutlinedInput-root": {
      fontFamily: "'Open Sans', sans-serif",
      fontWeight:600,
      "& fieldset": {
        borderRadius: "12px",
      },
    },
  });