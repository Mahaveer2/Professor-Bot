import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
 
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();

export default db;
