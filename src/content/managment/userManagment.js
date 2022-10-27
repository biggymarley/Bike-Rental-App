import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { db, auth } from "../firebase/firebaseConfig";

export const loginUser = async (email, password) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    // after login the user we must get data from fireStore
    //and returning the resault to the app*
    const docRef = doc(db, "users", res.user.uid);
    const user = await getDoc(docRef);
    return user?.data() ?? null;
  } catch (error) {
    alert(
      error?.code?.replace("auth/", "").replaceAll("-", " ") ||
        "error please retry"
    );
    return null;
  }
};

export const createUser = async (email, password, name, role) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    // using firebase firestore to store data with new fields "name, role"
    // and linking it with firebase Authentication database with user uid
    if (res?.user) {
      const user = {
        uid: res.user.uid,
        name: name,
        email: email,
        role: role,
      };
      await setDoc(doc(db, "users", res.user.uid), user);
      return user;
    }
  } catch (error) {
    alert(
      error?.code?.replace("auth/", "").replaceAll("-", " ") ||
        "error please retry"
    );
    return null;
  }
};

export const editUser = async (userdata) => {
  try {
    await setDoc(
      doc(db, "users", userdata.uid),
      { name: userdata.name, role: userdata.role, email: userdata.email },
      { merge: true }
    );
    return userdata;
  } catch (error) {
    alert("error please retry");
    return null;
  }
};

export const deleteUser = async (id) => {
  try {
    await deleteDoc(doc(db, "users", id));
  } catch (error) {
    alert("error please retry");
  }
};

export const getUsers = async (id) => {
  try {
    const docRef = collection(db, "users/");
    const q = query(docRef, where("uid", "!=", id));
    const users = await getDocs(q);
    let usersArray = [];
    users.forEach((doc) => {
      usersArray = [...usersArray, doc.data()];
    });

    return usersArray;
  } catch (error) {
    alert("Server error");
    return null;
  }
};

export const getUserbyId = async (id) => {
  try {
    const docRef = collection(db, "users/");
    const q = query(docRef, where("uid", "==", id));
    const users = await getDocs(q);
    let usersArray = [];
    users.forEach((doc) => {
      usersArray = [...usersArray, doc.data()];
    });
    return usersArray[0];
  } catch (error) {
    alert("Server error");
    return null;
  }
};

export const getUsersByIds = async (idsArray) => {
  try {
    const usersQ = query(
      collection(db, "users/"),
      where("uid", "in", idsArray)
    );
    const users = await getDocs(usersQ);
    let usersArray = [];
    //push reserved users to usersarray
    idsArray.forEach((userid) => {
      users.forEach((doc) => {
        if (doc.data().uid === userid) usersArray.push(doc.data());
      });
    });

    return usersArray;
  } catch (error) {
    console.error("Server error");
    return null;
  }
};

export const getReservationByBikeid = async (bikeid) => {
  try {
    const reservQ = query(
      collection(db, "reservations/"),
      where("bikeid", "==", bikeid)
    );
    const reservations = await getDocs(reservQ);
    let reservationsArray = [];
    let usersArray = [];
    reservations.forEach((doc) => {
      reservationsArray = [...reservationsArray, { id: doc.id, ...doc.data() }];
      usersArray = [...usersArray, doc.data().userId];
    });
    if (usersArray.length > 0) {
      return await GetUsersReservations(reservationsArray, usersArray);
    }
    return null;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const GetUsersReservations = async (reservationsArray, usersArray) => {
  try {
    const users = await getUsersByIds(usersArray);
    const reservUsers = reservationsArray.map((reserv) => {
      return {
        ...reserv,
        ...users.find((user) => user.uid === reserv.userId),
      };
    });
    return reservUsers;
  } catch (error) {
    return null;
  }
};
