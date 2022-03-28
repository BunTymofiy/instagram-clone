// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "@firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "@firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-Spfre6REa8rBF0g7x2QlDePgBqtT6Ew",
  authDomain: "instagram-clone-85cbb.firebaseapp.com",
  projectId: "instagram-clone-85cbb",
  storageBucket: "instagram-clone-85cbb.appspot.com",
  messagingSenderId: "39346395872",
  appId: "1:39346395872:web:d6dbe7346a3802f3930e85"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp(); 
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };