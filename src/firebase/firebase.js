import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

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

export { auth };
