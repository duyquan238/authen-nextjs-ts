import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnxucKIWGg3OpJ9yBPvEnGLsWRV8g1Rz4",
  authDomain: "authen-nextjs.firebaseapp.com",
  databaseURL: "https://authen-nextjs-default-rtdb.firebaseio.com",
  projectId: "authen-nextjs",
  storageBucket: "authen-nextjs.appspot.com",
  messagingSenderId: "353123257745",
  appId: "1:353123257745:web:b8c5a706b4635e9a141e30",
  measurementId: "G-MMH9CPHMNM",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { auth };
export default db;
