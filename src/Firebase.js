import firebase from "firebase";
import firestore from "firebase/firestore";

const config = {
  apiKey: "AIzaSyBpcjyo069ozfQ5Gp16r4MYyslsWkg92c0",
  authDomain: "fir-2f626.firebaseapp.com",
  databaseURL: "https://fir-2f626.firebaseio.com",
  projectId: "fir-2f626",
  storageBucket: "fir-2f626.appspot.com",
  messagingSenderId: "256077442324",
  appId: "1:256077442324:web:acf2793925b98e40"
};

firebase.initializeApp(config);
firebase.firestore();
export default firebase;
