import { IconButton, Tooltip } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useContext } from "react";
import { BikesListScreenContext } from "../../utils/contexts";
import { SEARCHOPTIONS } from "../../utils/macros";
import { SwitchInput } from "./SwitchInput";

export const FilterHandler = () => {
    const { handleSelect, selectedOption } = useContext(BikesListScreenContext);
    return (
      <Stack direction={{ xs: "column", md: "row" }} spacing={4} sx={{ mb: 4 }}>
        <SwitchInput />
        <Stack direction={"row"} spacing={2}>
          {SEARCHOPTIONS.map((option) => (
            <Tooltip key={option.id} title={option.id}>
              <IconButton
                sx={{ px: 2 }}
                color={selectedOption === option.id ? "primary" : "secondary"}
                name={option.id}
                onClick={handleSelect}
              >
                {option.icon}
              </IconButton>
            </Tooltip>
          ))}
        </Stack>
      </Stack>
    );
  };