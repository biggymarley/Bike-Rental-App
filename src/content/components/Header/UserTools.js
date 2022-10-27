import { SearchRounded } from "@mui/icons-material";
import PedalBikeRoundedIcon from "@mui/icons-material/PedalBikeRounded";
import PowerSettingsNewRoundedIcon from "@mui/icons-material/PowerSettingsNewRounded";
import Button from "@mui/material/Button";
import { Stack } from "@mui/system";
import * as React from "react";
import { useContext } from "react";
import { HeaderContext } from "../../utils/contexts";
import { classes } from "./styles";

export const UserTools = () => {
  const { handleClick } = useContext(HeaderContext);

  return (
    <Stack direction={{ xs: "column", md: "row" }} spacing={3}>
      <Button
        onClick={(e) => handleClick("/dashboard")}
        sx={classes.headerButton}
        color="secondary"
        startIcon={<SearchRounded sx={classes.iconsize} />}
      >
        Reserve bikes
      </Button>
      <Button
        onClick={(e) => handleClick("/dashboard/your_bikes")}
        sx={classes.headerButton}
        color="secondary"
        startIcon={<PedalBikeRoundedIcon sx={classes.iconsize} />}
      >
        Your bikes
      </Button>

      <Button
        sx={{ ...classes.headerButton, opacity: 0.4 }}
        color="inherit"
        onClick={(e) => handleClick(null)}
        startIcon={<PowerSettingsNewRoundedIcon sx={classes.iconsize} />}
      >
        Logout
      </Button>
    </Stack>
  );
};
