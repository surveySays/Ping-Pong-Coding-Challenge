// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD44ZlqM_knja-nKMldhGcCqHKVSCk4R_s",
  authDomain: "ping-pong-48e76.firebaseapp.com",
  projectId: "ping-pong-48e76",
  storageBucket: "ping-pong-48e76.appspot.com",
  messagingSenderId: "118703507319",
  appId: "1:118703507319:web:c8fb177591f6589f180372",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
