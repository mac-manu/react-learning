import { initializeApp } from "firebase/app";
​​import {  GoogleAuthProvider,
​​ getAuth,
​​ signInWithPopup,
​​ signInWithEmailAndPassword,
​​ createUserWithEmailAndPassword,
​​  sendPasswordResetEmail,
​​  signOut,
​​} from "firebase/auth";
​​import {
​​  getFirestore,
​​  query,
​​  getDocs,
​​  collection,
​​  where,
​​ addDoc,
} from "firebase/firestore";


const app = ​​initializeApp(firebaseConfig);
​​const auth = getAuth(app);
​​const db = getFirestore(app);