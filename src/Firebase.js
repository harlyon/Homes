import firebase from "firebase";
import firestore from "firebase/firestore";

const config = {
  apiKey: "API_KEY",
  authDomain: "API_AUTHDOMAIN",
  databaseURL: "DATABASE_URL",
  projectId: "PROJECT_ID",
  storageBucket: "STORAGE_BUCKET",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID"
};

firebase.initializeApp(config);
firebase.firestore();
export default firebase;
