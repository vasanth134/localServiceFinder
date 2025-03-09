import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAwBmEZAlbpXU9zQnAKCU4s8X6LrtB7QrU",
    authDomain: "localservicefinder-bb2b6.firebaseapp.com",
    projectId: "localservicefinder-bb2b6",
    storageBucket: "localservicefinder-bb2b6.firebasestorage.app",
    messagingSenderId: "834935719152",
    appId: "1:834935719152:web:4565d0b328998080606e35",
    measurementId: "G-SFCBL8GNDF"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider, signInWithPopup };
