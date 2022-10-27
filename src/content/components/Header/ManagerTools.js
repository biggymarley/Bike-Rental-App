import { PersonRounded } from "@mui/icons-material";
import PedalBikeRoundedIcon from "@mui/icons-material/PedalBikeRounded";
import PowerSettingsNewRoundedIcon from "@mui/icons-material/PowerSettingsNewRounded";
import Button from "@mui/material/Button";
import { Stack } from "@mui/system";
import * as React from "react";
import { useContext } from "react";
import { HeaderContext } from "../../utils/contexts";
import { classes } from "./styles";

export const ManagerTools = () => {
  const { handleClick } = useContext(HeaderContext);
  return (
    <Stack direction={{ xs: "column", md: "row" }} spacing={3}>
      <Button
        onClick={() => handleClick("/dashboard/bikes")}
        sx={classes.headerButton}
        color="secondary"
        startIcon={<PedalBikeRoundedIcon sx={classes.iconsize} />}
      >
        Bikes
      </Button>
      <Button
        onClick={() => handleClick("/dashboard/users")}
        sx={classes.headerButton}
        color="secondary"
        startIcon={<PersonRounded sx={classes.iconsize} />}
      >
        Users
      </Button>
      <Button
        sx={{ ...classes.headerButton, opacity: 0.4 }}
        color="inherit"
        onClick={() => handleClick(null)}
        startIcon={<PowerSettingsNewRoundedIcon sx={classes.iconsize} />}
      >
        Logout
      </Button>
    </Stack>
  );
};
