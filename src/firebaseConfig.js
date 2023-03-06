
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyDBqW8AjupKGVUJUsoFUpeddeIDEaV42uQ",
  authDomain: "fir-basics-12f4a.firebaseapp.com",
  projectId: "fir-basics-12f4a",
  storageBucket: "fir-basics-12f4a.appspot.com",
  messagingSenderId: "507109652103",
  appId: "1:507109652103:web:1f2cb512714df6292c2a22"
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app )