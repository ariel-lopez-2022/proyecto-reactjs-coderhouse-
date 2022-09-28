
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA0BlnySpQtO6tNYz4jNLQ1yqcN4OfuWCA",
  authDomain: "tienda-libreria.firebaseapp.com",
  projectId: "tienda-libreria",
  storageBucket: "tienda-libreria.appspot.com",
  messagingSenderId: "223767840673",
  appId: "1:223767840673:web:c47168f65dad54c3feede0"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);