import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import React, { Suspense, useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import NotFoundScreen from "../components/ui/NotFoundScreen";
import { UserContext } from "../utils/contexts";
export default function RoutesHandler() {
  const { cookies } = useContext(UserContext);
  const Home = React.lazy(() => import("./Home/Home"));
  const Dashboard = React.lazy(() => import("./Dashboard/Dashboard"));

  return (
    <Suspense fallback={<LoadingScreen />}>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedHome isLoggedIn={cookies?.logged === "true"}>
              <Home />
            </ProtectedHome>
          }
        />
        <Route
          path="/dashboard/*"
          element={
            <ProtectedDashboard isLoggedIn={cookies?.logged === "true"}>
              <Dashboard />
            </ProtectedDashboard>
          }
        />
          <Route path="*" element={<NotFoundScreen />} />
      </Routes>
    </Suspense>
  );
}

const ProtectedDashboard = ({ isLoggedIn, children }) => {
  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }
  return children;
};

const ProtectedHome = ({ isLoggedIn, children }) => {
  if (isLoggedIn) {
    return <Navigate to="/dashboard" replace />;
  }
  return children;
};

const LoadingScreen = () => {
  return (
    <Box sx={style}>
      <CircularProgress color="secondary" sx={{ fontSize: "5rem" }} />
    </Box>
  );
};

const style = {
  width: "100vw",
  height: "100vh",
  display: "grid",
  placeItems: "center",
};
