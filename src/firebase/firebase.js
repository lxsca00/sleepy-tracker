import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCnPQVznDwksE2bY2r0ATya0JBmaDTf5-8",
  authDomain: "sleepy-tracker-5ec7b.firebaseapp.com",
  projectId: "sleepy-tracker-5ec7b",
  storageBucket: "sleepy-tracker-5ec7b.appspot.com",
  messagingSenderId: "11688746698",
  appId: "1:11688746698:web:d5911d2b5e8834aad05e33",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const registerUser = (user, firstName, lastName, email) => {
  addDoc(collection(db, "users"), {
    uid: user.uid,
    name: `${firstName} ${lastName}`,
    email
  })
}

const googleProvider = new GoogleAuthProvider()

const addGoogleUser = (user) => {
  addDoc(collection(db, "users"), {
    uid: user.uid,
    name: user.displayName,
    email: user.email
  })
}

export { auth, db, registerUser, googleProvider, addGoogleUser };
