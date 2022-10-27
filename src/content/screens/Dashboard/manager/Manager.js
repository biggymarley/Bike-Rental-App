import { Toolbar } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import BikesScreen from "./screens/bikesScreen/BikesScreen";
import UsersScreen from "./screens/usersScreen/UsersScreen";

export default function Manager() {
  return (
    <Container>
      <Toolbar />
      <Toolbar />
      <Routes>
        <Route path="bikes/*" element={<BikesScreen />} />
        <Route path="users/*" element={<UsersScreen />} />
        <Route path="*" element={<Navigate to='bikes/' />} />
      </Routes>
    </Container>
  );
}
