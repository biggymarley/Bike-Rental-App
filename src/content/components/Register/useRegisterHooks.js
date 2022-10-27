import { useCallback, useContext, useState } from "react";
import { createUser } from "../../firebase/firebase";
import { StatusContext, UserContext } from "../../utils/contexts";
import { ROLES } from "../../utils/macros";
const defaultRegisterData = {
  name: "",
  email: "",
  password: "",
  repeatPassword: "",
};

export default function useRegisterHooks() {
  const [RegisterData, setRegisterData] = useState(defaultRegisterData);
  const [errors, setErrors] = useState({ isError: false, errorMessage: "" });

  const { setCookie, setUserData } = useContext(UserContext);
  const { dispatch } = useContext(StatusContext);

  const handleErrors = useCallback(() => {
    if (
      RegisterData.name === "" ||
      RegisterData.email === "" ||
      RegisterData.password === "" ||
      RegisterData.repeatPassword === ""
    )
      setErrors({ isError: true, errorMessage: "all fields are required" });
    else if (RegisterData.password !== RegisterData.repeatPassword)
      setErrors({ isError: true, errorMessage: "passwords not matching" });
    else setErrors({ isError: false, errorMessage: "" });
  }, [RegisterData]);

  const HandleInputChange = (event) => {
    setRegisterData({
      ...RegisterData,
      [`${event.target.name}`]: event.target.value,
    });
  };

  const HandleRegister = async () => {
    dispatch({ type: "showLoading", payload: true });
    const res = await createUser(
      RegisterData.email,
      RegisterData.password,
      RegisterData.name,
      ROLES.USER
    );
    dispatch({ type: "showLoading", payload: false });
    if (res) {
      setCookie("logged", true, { path: "/" });
      setCookie("userData", res, { path: "/" });
      setUserData({ ...res });
    }
  };

  return [
    RegisterData,
    errors,
    HandleRegister,
    HandleInputChange,
    handleErrors,
  ];
}
