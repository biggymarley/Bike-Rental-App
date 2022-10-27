import debounce from "lodash.debounce";
import React, { useContext, useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import BikesList from "../../../../../components/BikesList/BikesList";
import { FilterHandler } from "../../../../../components/Filter/FilterHandler";
import RatingScreen from "../../../../../components/Rating/RatingScreen";
import {
  BikesListScreenContext,
  UserRouteContext,
} from "../../../../../utils/contexts";
import { BIKESCOLORS } from "../../../../../utils/macros";

const debouncedSearch = debounce((handler, query) => handler(query), 500);
export default function BikesListScreen() {
  const { availableBikes } = useContext(UserRouteContext);
  const [selectedOption, setselectedOption] = useState("modal");
  const navigate = useNavigate();

  const defaultSearchData = {
    color: BIKESCOLORS[0],
    modal: "",
    location: "",
    rating: 5,
  };
  const [searchData, setSearchData] = useState(defaultSearchData);
  const [searchResault, setSearchResault] = useState([...availableBikes]);

  const HandleChange = (e) => {
    setSearchData({ ...searchData, [e.target.name]: e.target.value });
  };

  const handleSelect = (e) => {
    setselectedOption(e.target.name);
  };

  const filterByOption = () => {
    const filtredData = availableBikes.filter((bike) =>
      bike[selectedOption].includes(searchData[selectedOption])
    );
    setSearchResault([...filtredData]);
  };

  useEffect(() => {
    if (searchData[selectedOption] !== "")
      debouncedSearch(filterByOption, searchData[selectedOption]);
    else setSearchResault([...availableBikes]);

    return () => debouncedSearch.cancel();
    // eslint-disable-next-line
  }, [searchData, availableBikes, selectedOption]);

  useEffect(() => {
    if (availableBikes.length <= 0) navigate("/dashboard");
  }, [availableBikes, navigate]);
  return (
    <BikesListScreenContext.Provider
      value={{
        HandleChange,
        handleSelect,
        searchData,
        selectedOption,
      }}
    >
      <FilterHandler />
      <BikesList bikes={searchResault} />
      <Routes>
        <Route path="rating/:bikeid" element={<RatingScreen />} />
      </Routes>
    </BikesListScreenContext.Provider>
  );
}
