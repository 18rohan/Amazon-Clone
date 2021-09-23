// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvU9ltZHKvynQ02DK-ICOuWPteI5hOvZ0",
  authDomain: "clone-b5ece.firebaseapp.com",
  projectId: "clone-b5ece",
  storageBucket: "clone-b5ece.appspot.com",
  messagingSenderId: "614644126578",
  appId: "1:614644126578:web:fb86926d6ffbdda233c3eb",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

const auth = getAuth(firebaseApp);

const provider = new GoogleAuthProvider();

const storage = getStorage(firebaseApp);

export { auth, db, provider, storage };
