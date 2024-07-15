import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_KEY,
  authDomain: "kenaz-78e11.firebaseapp.com",
  projectId: "kenaz-78e11",
  storageBucket: "kenaz-78e11.appspot.com",
  messagingSenderId: "1036503594796",
  appId: "1:1036503594796:web:73b661a1697e15e6835e89",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
