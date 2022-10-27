import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";


export const getRating = async (bikeid) => {
  try {
    const docRef = collection(db, "rating/");
    const q = query(docRef, where("bikeid", "==", bikeid));
    const ratings = await getDocs(q);
    let ratingsArray = [];
    ratings.forEach((doc) => {
      ratingsArray = [...ratingsArray, { id: doc.id, ...doc.data() }];
    });
    if (ratingsArray.length > 0) {
      let totalRate = 0;
      ratingsArray.forEach((rate) => {
        totalRate += rate.rate;
      });
      return (totalRate / ratingsArray.length).toPrecision(1);
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const postRating = async (userid, bikeid, rate) => {
  try {
    await addDoc(collection(db, "rating"), { userid, bikeid, rate });
    //add total rate to bike collection
    const rating = await getRating(bikeid);
    await setDoc(doc(db, "bikes", bikeid), { rating: rating }, { merge: true });
    return rating;
  } catch (error) {
    console.error(error);
    return false;
  }
};
