// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCP_ZzBJJwLYPZuomn_msQGKOnZuPqam88",
  authDomain: "pruebacoder-firebase.firebaseapp.com",
  projectId: "pruebacoder-firebase",
  storageBucket: "pruebacoder-firebase.appspot.com",
  messagingSenderId: "216781651359",
  appId: "1:216781651359:web:350984d4e2170e0ef251aa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);