// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from "firebase/storage";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD1K99_4YYOmu657gnHHi9VoJFUPdL8AGA",
    authDomain: "disney-clone-3a6d3.firebaseapp.com",
    projectId: "disney-clone-3a6d3",
    storageBucket: "disney-clone-3a6d3.appspot.com",
    messagingSenderId: "102512842337",
    appId: "1:102512842337:web:9a9e7dc928f237a9de3c20",
    measurementId: "G-B1VX8W8WYW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const signIn = signInWithPopup(provider);
const storage = getStorage(app)

export { auth, provider, storage, signIn };
export default db;