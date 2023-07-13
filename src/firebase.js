// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGtmfomNd2aPAv-o8fCAL1rNvTE1liQh0",
  authDomain: "smartchat-febe0.firebaseapp.com",
  projectId: "smartchat-febe0",
  storageBucket: "smartchat-febe0.appspot.com",
  messagingSenderId: "64958834045",
  appId: "1:64958834045:web:ced5a623a37515756ad814"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)