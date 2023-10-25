// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBozQ1XBUOf26ej63Vsnp0CbcRk45KD2iU",
  authDomain: "appreact-78e95.firebaseapp.com",
  projectId: "appreact-78e95",
  storageBucket: "appreact-78e95.appspot.com",
  messagingSenderId: "107892462427",
  appId: "1:107892462427:web:ca0911ed4c6f3d004c807e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);


