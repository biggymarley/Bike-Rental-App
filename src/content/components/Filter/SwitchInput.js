import { Brightness1Rounded } from "@mui/icons-material";
import { MenuItem } from "@mui/material";
import React, { useContext } from "react";
import { BikesListScreenContext } from "../../utils/contexts";
import { BIKESCOLORS } from "../../utils/macros";
import { StyledTextField } from "../ui/StyledTextField";




export const SwitchInput = () => {
  const { HandleChange, searchData, selectedOption } = useContext(
    BikesListScreenContext
  );

  switch (selectedOption) {
    case "color":
    case "rating":
      return (
        <StyledTextField
          sx={{ width: "200px" }}
          select
          label={selectedOption === "color" ? "Color" : "Rating"}
          name={selectedOption}
          onChange={HandleChange}
          value={searchData[selectedOption]}
        >
          {(selectedOption === "color" ? BIKESCOLORS : [1, 2, 3, 4, 5]).map(
            (e) => (
              <MenuItem key={e} value={e}>
                {selectedOption === "color" ? (
                  <Brightness1Rounded sx={{ color: e }} />
                ) : (
                  e
                )}
              </MenuItem>
            )
          )}
        </StyledTextField>
      );
    case "location":
    case "modal":
      return (
        <StyledTextField
          onChange={HandleChange}
          value={searchData[selectedOption]}
          label={selectedOption === "location" ? "Location" : "Model"}
          name={selectedOption}
          color="secondary"
        />
      );

    default:
      return null;
  }
};
