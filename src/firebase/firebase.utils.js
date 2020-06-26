import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB3HPStPrRF9eIjS4Oh7BavIfMgrIKrKzk",
  authDomain: "hyped-clothing.firebaseapp.com",
  databaseURL: "https://hyped-clothing.firebaseio.com",
  projectId: "hyped-clothing",
  storageBucket: "hyped-clothing.appspot.com",
  messagingSenderId: "403393533832",
  appId: "1:403393533832:web:4f24e10cca6ff06e93cc3d",
  measurementId: "G-GH07TGV6YN",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating a user");
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
