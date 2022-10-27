import {
    Button, Typography
} from "@mui/material";
import React, {
    useContext,
    useEffect
} from "react";
import { RegisterContext } from "../../../utils/contexts";
import { StyledTextField } from "../../ui/StyledTextField";
import { classes } from "../styles";
export const RegisterForm = () => {
    const {
      RegisterData: { name, email, password, repeatPassword },
      HandleInputChange,
      HandleRegister,
      handleErrors,
      errors,
    } = useContext(RegisterContext);
    useEffect(() => {
      handleErrors();
    }, [handleErrors]);
  
    return (
      <>
        <StyledTextField
          sx={{ borderRadius: "12px" }}
          name="name"
          value={name}
          onChange={HandleInputChange}
          label="Name"
          placeholder="Ayoub Faragi"
          variant="outlined"
        />
        <StyledTextField
          name="email"
          value={email}
          onChange={HandleInputChange}
          label="Email"
          placeholder="exemple@email.com"
          variant="outlined"
        />
        <StyledTextField
          label="Password"
          type={"password"}
          variant="outlined"
          name="password"
          value={password}
          onChange={HandleInputChange}
        />
        <StyledTextField
          label="Repeat Password"
          type={"password"}
          variant="outlined"
          name="repeatPassword"
          value={repeatPassword}
          onChange={HandleInputChange}
        />
        {errors.isError ? (
          <Typography variant="caption" color="error">
            {errors.errorMessage}
          </Typography>
        ) : null}
        <Button
          variant="contained"
          color="secondary"
          sx={classes.button}
          onClick={HandleRegister}
          disabled={errors.isError}
        >
          Submit
        </Button>
      </>
    );
  };
  