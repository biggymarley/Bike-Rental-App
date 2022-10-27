import { Add } from "@mui/icons-material";
import { Button } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import UsersTable from "../../../../../components/Tables/UsersTable";
import UserModalManagment from "./userModalManagment";
import UsersReservedBikes from "./UsersReservedBikes";
import { UsersScreenContext } from "../../../../../utils/contexts";
import useUsersHooks from "../../hooks/useUsersHooks";

export default function UsersScreen() {
  const navigate = useNavigate();

  const [
    usersList,
    UpdateUserData,
    fetchUserData,
    handleChange,
    selectedUser,
    handleClose,
    AddUser,
    DeleteUser,
    fetchUsers,
  ] = useUsersHooks();
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <UsersScreenContext.Provider
      value={{
        UpdateUserData,
        fetchUserData,
        handleChange,
        selectedUser,
        handleClose,
        AddUser,
        DeleteUser,
      }}
    >
      <Stack direction={"column"} spacing={4}>
        <Button
          onClick={() => navigate("addUser")}
          sx={classes.addButton}
          endIcon={<Add />}
          color="secondary"
          variant="contained"
        >
          Add User
        </Button>
        <UsersTable users={usersList} />
      </Stack>
      <Routes>
        <Route path=":userid" element={<UserModalManagment />} />
        <Route path="userbikes/:userid" element={<UsersReservedBikes />} />
      </Routes>
    </UsersScreenContext.Provider>
  );
}

const classes = {
  addButton: {
    alignSelf: "flex-start",
    px: 4,
    py: 2,
    borderRadius: "12px",
    fontWeight: 700,
    fontFamily: "'Open Sans', sans-serif",
  },
};
