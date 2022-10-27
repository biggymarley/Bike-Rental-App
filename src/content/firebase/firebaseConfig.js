import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDNIOHYH_PvU2zFuWiHfnmrMp-i6IVbou0",
  authDomain: "bikes-72fb1.firebaseapp.com",
  projectId: "bikes-72fb1",
  storageBucket: "bikes-72fb1.appspot.com",
  messagingSenderId: "603001099662",
  appId: "1:603001099662:web:3fac7de6b089544cb8c0df",
  measurementId: "G-9XJG5FF4NT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
