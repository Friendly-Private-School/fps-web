import { initializeApp } from "firebase/app";
import 'firebase/compat/storage';
import 'firebase/compat/firestore'
import firebase from 'firebase/compat/app'

import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "fps-web-d15e7.firebaseapp.com",
  projectId: "fps-web-d15e7",
  storageBucket: "fps-web-d15e7.appspot.com",
  messagingSenderId: "540833264935",
  appId: "1:540833264935:web:f3fafbe2de88d1728ae502",
  measurementId: "G-45XRC47BR6"
  };
  
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {projectStorage, projectFirestore, timestamp}

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);