import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDOJA4SBSYPR-Lm62LfOIXypq6r-XgHk6s",
  authDomain: "management-site-ebb50.firebaseapp.com",
  projectId: "management-site-ebb50",
  storageBucket: "management-site-ebb50.appspot.com",
  messagingSenderId: "504560876555",
  appId: "1:504560876555:web:15a5c0137e0b7c16a61b0e"
};

//init firebase
firebase.initializeApp(firebaseConfig)

//init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

//timestamp
const timestamp = firebase.firestore.Timestamp

export {projectFirestore, projectAuth, timestamp}