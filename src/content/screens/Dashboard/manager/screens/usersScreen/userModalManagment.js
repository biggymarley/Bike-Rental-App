import { MenuItem } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/system";
import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { StyledTextField } from "../../../../../components/ui/StyledTextField";
import { UsersScreenContext } from "../../../../../utils/contexts";
import { ROLES } from "../../../../../utils/macros";

export default function UserModalManagment() {
  let { userid } = useParams();
  const {
    UpdateUserData,
    fetchUserData,
    handleChange,
    selectedUser,
    handleClose,
    AddUser,
  } = useContext(UsersScreenContext);

  useEffect(() => {
    if (userid !== "addUser") fetchUserData(userid);
  }, [userid, fetchUserData]);

  if (userid !== "addUser" && selectedUser.uid === "") return null;
  return (
    <div>
      <Modal open={true} onClose={handleClose}>
        <Box sx={classes.root}>
          <Stack direction={"column"} spacing={3} p={3}>
            <Typography sx={classes.headTitle} variant="h6" component="h2">
              {userid === "addUser" ? "Add User" : "Edit User"}
            </Typography>
            <ModalTextInputs
              handleChange={handleChange}
              selectedUser={selectedUser}
              userid={userid}
            />
            <Button
              variant="contained"
              color="secondary"
              disabled={
                selectedUser.name === "" ||
                selectedUser.email === "" ||
                (userid === "addUser" && selectedUser.password === "")
              }
              onClick={userid === "addUser" ? AddUser : UpdateUserData}
            >
              {userid === "addUser" ? "Add" : "Edit"}
            </Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}

const ModalTextInputs = ({ handleChange, selectedUser, userid }) => {
  return (
    <>
      <StyledTextField
        label="Name"
        name="name"
        onChange={handleChange}
        value={selectedUser.name}
      />
      <StyledTextField
        label="Email"
        name="email"
        onChange={handleChange}
        value={selectedUser.email}
      />
      <StyledTextField
        select
        label="Role"
        name="role"
        onChange={handleChange}
        value={selectedUser.role}
      >
        {[ROLES.USER, ROLES.MANAGER].map((option, index) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </StyledTextField>
      {userid === "addUser" ? (
        <StyledTextField
          label="Password"
          name="password"
          onChange={handleChange}
          value={selectedUser.password}
        />
      ) : null}
    </>
  );
};

const classes = {
  root: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: { xs: "90%", md: "auto" },
    bgcolor: "background.paper",
    boxShadow: 24,
    borderRadius: "12px",
  },
  headTitle: {
    fontFamily: "'Open Sans', sans-serif",
    fontWeight: 700,
    color: "secondary.main",
  },
};
