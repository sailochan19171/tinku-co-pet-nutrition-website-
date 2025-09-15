// Firebase initialization and auth utilities
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  updateProfile,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';

// Using the provided Firebase config
const firebaseConfig = {
  apiKey: 'AIzaSyBTVaxuZ2pNY_VDYs7Ey1xRl5vZs_59P90',
  authDomain: 'pet-nutrition-c1673.firebaseapp.com',
  projectId: 'pet-nutrition-c1673',
  storageBucket: 'pet-nutrition-c1673.firebasestorage.app',
  messagingSenderId: '1037877796331',
  appId: '1:1037877796331:web:1397ffd7f380d02b778dae',
  measurementId: 'G-596R5SZXRC',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {
  auth,
  provider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  updateProfile,
  onAuthStateChanged,
  signOut,
};