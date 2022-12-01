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

const registerWithEmail = (firstName, lastName, email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((res) => {
      const user = res.user;
      addDoc(collection(db, "users"), {
        uid: user.uid,
        name: `${firstName} ${lastName}`,
        email,
      });
    })
    .catch((err) => console.error(err));
};

const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = signInWithPopup(auth, googleProvider)
  .then((res) => {
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = getDocs(q);
    if (docs.docs.length === 0) {
      addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        email: user.email,
      });
    }
  })
  .catch((err) => console.error(err));

const logInWithEmail = (email, password) => {
  signInWithEmailAndPassword(auth, email, password).catch((err) =>
    console.error(err)
  );
};

const logOut = () => signOut(auth);

export { auth, registerWithEmail,logInWithEmail, signInWithGoogle, logOut };
