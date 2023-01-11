import { initializeApp } from "firebase/app";
import {getAuth } from "firebase/auth";
import {getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
    apiKey: "AIzaSyBp7irH9Lkebuqltn0yqRfeH3qOaUpFAwE",
    authDomain: "netflix-clone-ee002.firebaseapp.com",
    projectId: "netflix-clone-ee002",
    storageBucket: "netflix-clone-ee002.appspot.com",
    messagingSenderId: "219456031708",
    appId: "1:219456031708:web:7893734ea8707f2ddadd19"
  };

const firebaseapp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseapp);


const auth = getAuth(firebaseapp)

export {auth};
export default db;
