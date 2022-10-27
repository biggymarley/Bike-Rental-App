import { useCallback, useContext, useState } from "react";
import {
  cancleReserv,
  getUserReservedBikes,
  reserveBike
} from "../../../../firebase/firebase";
import { StatusContext, UserContext } from "../../../../utils/contexts";

export default function useUserReservationHooks(
  availableBikes,
  setAvailableBikes
) {
  const { dispatch } = useContext(StatusContext);
  const { userData } = useContext(UserContext);

  const [userBikesData, setuserBikesData] = useState([]);
  const fetchReservedBikes = useCallback(async () => {
    dispatch({ type: "showLoading", payload: true });
    const bikes = await getUserReservedBikes(userData.uid);
    dispatch({ type: "showLoading", payload: false });
    if (bikes) {
      setuserBikesData([...bikes]);
    }
  }, [userData, dispatch]);

  const CancleReservation = async (rid) => {
    dispatch({ type: "showLoading", payload: true });
    const cancled = await cancleReserv(rid);
    dispatch({ type: "showLoading", payload: false });
    if (cancled) {
      alert("reservation cancled");
      setuserBikesData([...userBikesData.filter((bike) => bike.rid !== rid)]);
    }
  };

  const ReserveBike = async (bikeid, timeData) => {
    if (timeData.startDate.getTime() >= timeData.endDate.getTime()) {
      alert("end date must be greater then start date");
      return;
    }
    dispatch({ type: "showLoading", payload: true });
    const reserved = await reserveBike(
      userData.uid,
      bikeid,
      timeData.startDate.getTime(),
      timeData.endDate.getTime()
    );
    dispatch({ type: "showLoading", payload: false });
    if (reserved) {
      alert("Bike Reserved");
      setAvailableBikes([
        ...availableBikes.filter((bike) => bike.bikeid !== bikeid),
      ]);
    }
  };

  return [userBikesData, fetchReservedBikes, CancleReservation, ReserveBike];
}
