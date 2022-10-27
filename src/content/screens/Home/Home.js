import { Button } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React, { useState } from "react";
import { HeaderText } from "./HeaderText";
import { ScreenDrawers } from "./ScreenDrawers";
import { classes } from "./styles";

const defaultScreens = {
  login: false,
  register: false,
};

export default function Home() {

  const [screen, setScreen] = useState(defaultScreens);

  const handleopen = (name) => {
    setScreen({ ...screen, [`${name}`]: true });
  };

  const handleclose = (name) => {
    setScreen({ ...screen, [`${name}`]: false });
  };

  return (
    <Box sx={classes.notLoggedRoot}>
      <Stack width={"100%"} sx={{ px: { xs: 1, sm: 2, md: 3, lg: 5 } }}>
        <HeaderText />
        <Buttons handleopen={handleopen} />
      </Stack>
      <ScreenDrawers
        handleclose={handleclose}
        screen={screen}
        handleopen={handleopen}
      />
    </Box>
  );
}

const Buttons = ({ handleopen }) => {
  return (
    <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mt: 5 }}>
      <Button
        sx={classes.button}
        variant="contained"
        color="secondary"
        onClick={() => handleopen("register")}
      >
        Register
      </Button>
      <Button
        sx={classes.button}
        variant={"outlined"}
        onClick={() => handleopen("login")}
      >
        Login
      </Button>
    </Stack>
  );
};

