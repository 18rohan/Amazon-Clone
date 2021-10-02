// Import Firebase packages
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

// import { provider } from "../../firebase/firebaseConfig";
import { db, auth, provider } from "../../firebase/firebaseConfig";
import { doc, setDoc, getDoc, Timestamp } from "firebase/firestore";
import { EmptyCart } from "./CartActions.js";
// Google Login
export const SET_USER = "SET_USER";
// EmailId & Password Registration
export const ADD_USER = "ADD_USER";

export const setUser = (payload) => ({
  type: SET_USER,
  user: payload,
});

export function signInAPI() {
  return async (dispatch) => {
    try {
      const payload = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(payload);
      const token = credential.accessToken;
      console.log(token);
      const user = payload.user;
      // console.log("USER_ID: ", user.uid,"TOKEN: ");

      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        dispatch(setUser(user));
      } else {
        await setDoc(doc(db, "users", user.uid), {
          name: user.displayName,
          cart: [],
          wishlist: [],
          createdAt: Timestamp.now(),
        });
        dispatch(setUser(user));
      }
      // Since the Google Registration and Signin API are same, so the new user document is created everytime we login with Google
    } catch (error) {
      const errorCode = error.code;
      console.log("Error Code: ", errorCode);
      const errorMessage = error.message;
      console.log("Error Message: ", errorMessage);
      // The email of the user's account used.
      const email = error.email;
      console.log("Error Email: ", email);
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log("Credentials: ", credential);
    }

    //     signInWithPopup(auth, provider)
    //       .then((payload) => {
    //         // This gives you a Google Access Token. You can use it to access the Google API.
    //         const credential = GoogleAuthProvider.credentialFromResult(payload);
    //         const token = credential.accessToken;
    //
    //         console.log("Token: ", token);
    //         // The signed-in user info.
    //         const user = payload.user;
    //         console.log("User: ", user);
    //         try {
    //         const docRef = await addDoc(collection(db, "users"), {
    //         first: "Ada",
    //         last: "Lovelace",
    //         born: 1815
    //         });
    //         console.log("Document written with ID: ", docRef.id);
    //         } catch (e) {
    //         console.error("Error adding document: ", e);
    //         }
    //
    //
    //         // ...
    //       })
    //       .catch((error) => {
    //         // Handle Errors here.
    //         const errorCode = error.code;
    //         console.log("Error Code: ", errorCode);
    //         const errorMessage = error.message;
    //         console.log("Error Message: ", errorMessage);
    //         // The email of the user's account used.
    //         const email = error.email;
    //         console.log("Error Email: ", email);
    //         // The AuthCredential type that was used.
    //         const credential = GoogleAuthProvider.credentialFromError(error);
    //         console.log("Credentials: ", credential);
    //         // ...
    //       });
  };
}

//EMAIL-ID & PASSWORD(REGISTRATION & SIGNIN)

// EmailId & Password: REGISTRATION
export const Register = (payload) => {
  const auth = getAuth();

  return async (dispatch) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        payload.email,
        payload.password
      );
      const user = userCredential.user;
      console.log("USER ID: ", user.uid);
      await setDoc(doc(db, "users", user.uid), {
        name: user.email.split("@")[0],
        cart: [],
        wishlist: [],
        createdAt: Timestamp.now(),
      });
      dispatch(setUser(user));
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("ERROR CODE: ", errorCode, "errorMessage: ", errorMessage);
    }
  };
};

// EmailId & Password: Login
export const Login = (payload) => {
  const auth = getAuth();
  return (dispatch) => {
    signInWithEmailAndPassword(auth, payload.email, payload.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch(setUser(user));

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, ":", errorMessage);
      });
  };
};

// STORING USER DATA IN FIRESTORE
// Check Youtube currently opened tab

// Signout API
export const signoutAPI = (payload) => {
  const auth = getAuth();
  return (dispatch) => {
    auth
      .signOut()
      .then(() => {
        dispatch(setUser(null));
      })
      .catch((error) => {
        console.log(error.message);
      });
    dispatch(EmptyCart());
  };
};
