import {
    Button
} from "@mui/material";
import React, { useContext } from "react";
import { LoginContext } from "../../../utils/contexts";
import { StyledTextField } from "../../ui/StyledTextField";
import { classes } from "../styles";
export const LoginForm = () => {
    const {
      loginData: { email, password },
      HandleInputChange,
      HandleAuth,
    } = useContext(LoginContext);
    return (
      <>
        <StyledTextField
          label="Email"
          placeholder="exemple@email.com"
          variant="outlined"
          name="email"
          type={"email"}
          value={email}
          onChange={HandleInputChange}
        />
        <StyledTextField
          label="Password"
          type={"password"}
          variant="outlined"
          name="password"
          value={password}
          onChange={HandleInputChange}
        />
        <Button
          variant="contained"
          sx={classes.button}
          onClick={HandleAuth}
          disabled={email === "" || password === ""}
        >
          Login
        </Button>
      </>
    );
  };
  
  
  