import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAgWcTSjCt1YrQe6jhKM-hlbx07-CQgQ5Y",
  authDomain: "choiceapp-dev.firebaseapp.com",
  projectId: "choiceapp-dev",
  storageBucket: "choiceapp-dev.appspot.com",
  messagingSenderId: "984764905982",
  appId: "1:984764905982:web:acb69be2619edd67af68af",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default { app, auth };
