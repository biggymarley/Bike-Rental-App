import { Toolbar } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { UserRouteContext } from "../../../utils/contexts";
import useSearchBikesbyTime from "./hooks/useSearchBikesbyTime";
import useUserReservationHooks from "./hooks/useUserReservationHooks";
import BikesListScreen from "./screens/bikesListScreen/BikesListScreen";
import { SelectDateScreen } from "./screens/selectDateScreen/SelectDateScreen";
import UserBikes from "./screens/UserBikes/UserBikes";

export default function User() {
  const [
    timeData,
    availableBikes,
    setAvailableBikes,
    SearchBikesByTime,
    HandleTimeChange,
  ] = useSearchBikesbyTime();

  const [userBikesData, fetchReservedBikes, CancleReservation, ReserveBike] =
    useUserReservationHooks(availableBikes, setAvailableBikes);

  return (
    <UserRouteContext.Provider
      value={{
        HandleTimeChange,
        timeData,
        SearchBikesByTime,
        availableBikes,
        ReserveBike,
        CancleReservation,
        fetchReservedBikes,
        userBikesData,
        setAvailableBikes,
      }}
    >
      <Container>
        <Toolbar />
        <Toolbar />
        <Routes>
          <Route index element={<SelectDateScreen />} />
          <Route path="available_bikes/*" element={<BikesListScreen />} />
          <Route path="your_bikes" element={<UserBikes />} />
        </Routes>
      </Container>
    </UserRouteContext.Provider>
  );
}
