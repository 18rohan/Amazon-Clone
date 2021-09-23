// Import Firebase packages
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// import { provider } from "../../firebase/firebaseConfig";
import { db, auth, storage, provider } from "../../firebase/firebaseConfig";

export const SET_USER = "SET_USER";

export const setUser = (payload) => ({
  type: SET_USER,
  user: payload,
});

export function signInAPI() {
  return (dispatch) => {
    signInWithPopup(auth, provider)
      .then((payload) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(payload);
        const token = credential.accessToken;
        console.log("Token: ", token);
        // The signed-in user info.
        const user = payload.user;
        console.log("User: ", user);
        dispatch(setUser(payload.user));

        // ...
      })
      .catch((error) => {
        // Handle Errors here.
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
        // ...
      });
  };
}

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
  };
};
