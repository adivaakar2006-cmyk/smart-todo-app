import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCrCxXCNr5Q_oaeJW0rZR0HLKO-eGhmdIg",
  authDomain: "smart-todo-app-ca8b0.firebaseapp.com",
  projectId: "smart-todo-app-ca8b0",
  storageBucket: "smart-todo-app-ca8b0.firebasestorage.app",
  messagingSenderId: "560415697556",
  appId: "1:560415697556:web:f12d204d19a6aa4e12a281",
  measurementId: "G-57L7F1CHJ2"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
