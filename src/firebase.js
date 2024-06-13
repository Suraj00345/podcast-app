// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1M3zXZ5siQJZCaHXBKQRy13Wz232-AfU",
  authDomain: "podcast-app-react-cedde.firebaseapp.com",
  projectId: "podcast-app-react-cedde",
  storageBucket: "podcast-app-react-cedde.appspot.com",
  messagingSenderId: "236862859384",
  appId: "1:236862859384:web:68cf54243d4c7c2454a58d",
  measurementId: "G-2ELJ7KY83R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);


export {auth, db, storage};