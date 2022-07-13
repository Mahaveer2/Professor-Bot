import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
 apiKey: "AIzaSyBa5FEp_ODMfg1JE8Fv5eS_XLMzqfjv07o",
  authDomain: "svelteblog-b6e9d.firebaseapp.com",
  projectId: "svelteblog-b6e9d",
  storageBucket: "svelteblog-b6e9d.appspot.com",
  messagingSenderId: "234249096363",
  appId: "1:234249096363:web:38fa607733b33555e0bbee",
  measurementId: "G-NX8RSZB9PC"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();

export default db;
