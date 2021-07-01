import firebase from "firebase/app"; 
import "firebase/auth";
import "firebase/firestore";

const config = {
    apiKey: "AIzaSyAhP3w4ZufM6rYCCooVew89MpjPSZqgOzA",
    authDomain: "crwn-db-d9c0a.firebaseapp.com",
    projectId: "crwn-db-d9c0a",
    storageBucket: "crwn-db-d9c0a.appspot.com",
    messagingSenderId: "933682565118",
    appId: "1:933682565118:web:99026a85c613d477ad7aaf",
    measurementId: "G-QD0X7D3FBL"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth(); 
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();

  // We want to always trigger google sign in pop up whenever we use this google auth provider
  provider.setCustomParameters({ prompt: "select_account" });

  //
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;

