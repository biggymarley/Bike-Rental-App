import { useContext, useState } from "react";
import { loginUser } from "../../firebase/firebase";
import { StatusContext, UserContext } from "../../utils/contexts";
const defaultLoginData = {
  email: "",
  password: "",
};
export default function useLoginHooks() {
  const [loginData, setLoginData] = useState(defaultLoginData);
  const { setCookie, setUserData } = useContext(UserContext);
  const { dispatch } = useContext(StatusContext);
  const HandleInputChange = (event) => {
    setLoginData({
      ...loginData,
      [`${event.target.name}`]: event.target.value,
    });
  };

  const HandleAuth = async () => {
    dispatch({ type: "showLoading", payload: true });
    const res = await loginUser(loginData.email, loginData.password);
    dispatch({ type: "showLoading", payload: false });
    if (res) {
      setCookie("logged", true, { path: "/" });
      setCookie("userData", res, { path: "/" });
      setUserData({ ...res });
    }
  };

  return [loginData, HandleInputChange, HandleAuth];
}
