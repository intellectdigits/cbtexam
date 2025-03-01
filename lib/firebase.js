// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfigs = {
  apiKey: "AIzaSyAhLRdUt-aw5J-L0YikA6gjGS4feRYR9ak",
  authDomain: "edukia-b6c25.firebaseapp.com",
  databaseURL: "edukia-b6c25.firebaseapp.com",
  projectId: "edukia-b6c25",
  storageBucket: "edukia-b6c25.appspot.com",
  messagingSenderId: "905244805503",
  appId: "1:905244805503:web:827edfa5b6f5e627f0b24a",
  measurementId: "G-P6E79RC6C9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfigs);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
