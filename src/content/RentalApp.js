import React, { useEffect, useReducer, useState } from "react";
import { useCookies } from "react-cookie";
import RoutesHandler from "./screens/Routes";
import UiManagment from "./components/ui/UiManagment";
import { StatusContext, UserContext } from "./utils/contexts";

const defaultUserData = {
  uid: "",
  email: "",
  name: "",
  reservedBikes: [],
  role: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "showLoading":
      return { ...state, loading: action.payload };
    default:
      throw new Error();
  }
};

export default function RentalApp() {
  const [userData, setUserData] = useState(defaultUserData);
  const [cookies, setCookie, removeCookie] = useCookies(["logged"]);

  useEffect(() => {
    if (cookies?.userData) setUserData({ ...cookies?.userData });
    else setUserData(defaultUserData);
    // eslint-disable-next-line
  }, []);

  const [uiState, dispatch] = useReducer(reducer, {
    loading: false,
  });
  return (
    <StatusContext.Provider value={{ dispatch, uiState }}>
      <UserContext.Provider
        value={{ userData, setUserData, cookies, setCookie, removeCookie }}
      >
        <UiManagment />
        <RoutesHandler />
      </UserContext.Provider>
    </StatusContext.Provider>
  );
}
