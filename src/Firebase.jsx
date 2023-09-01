import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAzsHIfbKxLuUG7tRJWMKt43khYa_1gq-A",
  authDomain: "admin-auth-20d01.firebaseapp.com",
  projectId: "admin-auth-20d01",
  storageBucket: "admin-auth-20d01.appspot.com",
  messagingSenderId: "445415323414",
  appId: "1:445415323414:web:5b84592f1252ea4aed4237",
  measurementId: "G-Y6HCW95BKY"
  

};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);


const auth = getAuth();

export { app, auth };