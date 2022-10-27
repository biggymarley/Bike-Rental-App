import { useCallback, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  createUser,
  deleteUser,
  editUser,
  getUserbyId,
  getUsers,
} from "../../../../firebase/firebase";
import { ROLES } from "../../../../utils/macros";

import { StatusContext, UserContext } from "../../../../utils/contexts";
const defaultSelectedUser = {
  uid: "",
  name: "",
  email: "",
  password: "",
  role: ROLES.USER,
};
export default function useUsersHooks() {
  const [usersList, setusersList] = useState([]);
  const [selectedUser, setSelectedUser] = useState(defaultSelectedUser);
  const { userData } = useContext(UserContext);
  const { dispatch } = useContext(StatusContext);

  const navigate = useNavigate();

  const fetchUsers = useCallback(async () => {
    dispatch({ type: "showLoading", payload: true });
    const bikes = await getUsers(userData.uid);
    dispatch({ type: "showLoading", payload: false });

    if (bikes) setusersList([...bikes]);
  }, [userData, dispatch]);
  const handleChange = (e) => {
    setSelectedUser({ ...selectedUser, [e.target.name]: e.target.value });
  };
  const handleClose = useCallback(() => {
    navigate("/dashboard/users");
    setSelectedUser(defaultSelectedUser);
  }, [navigate]);

  const fetchUserData = useCallback(
    async (userid) => {
      dispatch({ type: "showLoading", payload: true });
      const user = await getUserbyId(userid);
      dispatch({ type: "showLoading", payload: false });

      if (user) setSelectedUser({ ...user });
      else handleClose();
    },
    [handleClose, dispatch]
  );

  const DeleteUser = async (id) => {
    if (window.confirm("Delete user ?") === true) {
      dispatch({ type: "showLoading", payload: true });
      await deleteUser(id);
      dispatch({ type: "showLoading", payload: false });

      setusersList([...usersList.filter((user) => user.uid !== id)]);
    }
  };

  const AddUser = async () => {
    dispatch({ type: "showLoading", payload: true });
    const newUser = await createUser(
      selectedUser.email,
      selectedUser.password,
      selectedUser.name,
      selectedUser.role
    );
    dispatch({ type: "showLoading", payload: false });

    if (newUser) {
      setusersList([...usersList, newUser]);
      handleClose();
    }
  };

  const UpdateUserData = async () => {
    dispatch({ type: "showLoading", payload: true });
    const editeduser = await editUser(selectedUser);
    dispatch({ type: "showLoading", payload: false });
    // updating usersList without calling database
    if (editeduser) {
      setusersList([
        ...usersList.map((user) => {
          if (user.uid === editeduser.uid) return editeduser;
          else return user;
        }),
      ]);
    }
    handleClose();
  };

  return [
    usersList,
    UpdateUserData,
    fetchUserData,
    handleChange,
    selectedUser,
    handleClose,
    AddUser,
    DeleteUser,
    fetchUsers
  ];
}
