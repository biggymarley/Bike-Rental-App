import { Stack } from "@mui/system";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import React from "react";
import { StyledTextField } from "../ui/StyledTextField";

export const Pickers = ({ timeData, HandleTimeChange }) => {
  return (
    <Stack direction={"column"} spacing={4}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          disablePast
          label="Rental start date"
          value={timeData.startDate}
          onChange={(newValue) => {
            HandleTimeChange(newValue.$d, "startDate");
          }}
          renderInput={(params) => (
            <StyledTextField {...params} fullWidth color="secondary" />
          )}
        />
      </LocalizationProvider>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          disablePast
          label="Rental end date"
          value={timeData.endDate}
          onChange={(newValue) => {
            HandleTimeChange(newValue.$d, "endDate");
          }}
          renderInput={(params) => (
            <StyledTextField {...params} fullWidth color="secondary" />
          )}
        />
      </LocalizationProvider>
    </Stack>
  );
};
