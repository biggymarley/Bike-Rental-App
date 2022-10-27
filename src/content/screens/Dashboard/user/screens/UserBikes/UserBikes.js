import { Box } from "@mui/system";
import React, { useContext, useEffect } from "react";
import BikesList from "../../../../../components/BikesList/BikesList";
import { UserRouteContext } from "../../../../../utils/contexts";

export default function UserBikes() {
  const { userBikesData, fetchReservedBikes } = useContext(UserRouteContext);
  useEffect(() => {
    fetchReservedBikes();
  }, [fetchReservedBikes]);

  return (
    <Box>
      <BikesList bikes={userBikesData} withTime={true} />
    </Box>
  );
}
