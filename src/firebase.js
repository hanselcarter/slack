import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var config = {
  apiKey: "AIzaS_YOURAPIKEY",
  authDomain: "expens-9353e.firebaseapp.com",
  databaseURL: "https://expens-9353e.firebaseio.com",
  projectId: "expens-9353e",
  storageBucket: "expens-9353e.appspot.com",
  messagingSenderId: "346046868999"
};
firebase.initializeApp(config);

export default firebase;
