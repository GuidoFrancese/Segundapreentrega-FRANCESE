import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBCaLelq46ZiP4TqhdL8lwo_3i_e-7UuGA",
  authDomain: "proyectofinalreact-2a170.firebaseapp.com",
  projectId: "proyectofinalreact-2a170",
  storageBucket: "proyectofinalreact-2a170.appspot.com",
  messagingSenderId: "705120246705",
  appId: "1:705120246705:web:d5d324399ea6f8613dbb90"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);