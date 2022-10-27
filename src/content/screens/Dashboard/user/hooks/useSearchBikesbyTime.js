import { useCallback, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAvailableBikesbyTime } from "../../../../firebase/firebase";
import { StatusContext } from "../../../../utils/contexts";

export default function useSearchBikesbyTime() {
  const navigate = useNavigate();
  const [availableBikes, setAvailableBikes] = useState([]);
  const [timeData, setTimeData] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });
  const { dispatch } = useContext(StatusContext);
  const HandleTimeChange = (value, name) => {
    setTimeData({ ...timeData, [name]: value });
  };
  const SearchBikesByTime = useCallback(async () => {
    if (timeData.startDate.getTime() >= timeData.endDate.getTime()) {
      alert("end date must be greater then start date");
      return;
    }
    dispatch({ type: "showLoading", payload: true });
    const bikes = await getAvailableBikesbyTime(
      timeData.startDate.getTime(),
      timeData.endDate.getTime()
    );
    dispatch({ type: "showLoading", payload: false });

    if (bikes?.length > 0) {
      setAvailableBikes([...bikes.filter((bike) => bike.available === true)]);
      navigate("available_bikes");
    }
  }, [timeData, navigate, dispatch]);

  return [
    timeData,
    availableBikes,
    setAvailableBikes,
    SearchBikesByTime,
    HandleTimeChange,
  ];
}
