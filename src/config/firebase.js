import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCMJP8LA5FXRh4irn4Nq69rcl1q6dCXxU4",
  authDomain: "medicine-flashcard.firebaseapp.com",
  databaseURL: "https://medicine-flashcard.firebaseio.com",
  projectId: "medicine-flashcard",
  storageBucket: "medicine-flashcard.appspot.com",
  messagingSenderId: "1077351538947",
  appId: "1:1077351538947:web:d533552d5bb70ed9b50936",
  measurementId: "G-30X95L36P4",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
const db = firebase.firestore();
const auth = firebase.auth();
const timestamp = firebase.firestore.FieldValue.serverTimestamp();

export { storage, db, auth, timestamp };
