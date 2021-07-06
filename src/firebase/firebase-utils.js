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

  // async function, because we are making API request
  export const createUserProfileDocument = async (userAuth, additionalData) => {
    // if user doesn't exist (logged out), just return and do not proceed with parsing
    if (!userAuth) return;

    // if user exists
    // queryReference and QuerySnapshot

    //getting query reference with .get method of CRUD operation
    const userRef = firestore.doc(`users/${userAuth.uid}`); 

    // receive snapShot, which is what we actually receive 
    const snapShot = await userRef.get();

    // if there is no data, create user (snapShot) .
    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log("error creating user", error.message); 
        }
    }
    console.log(snapShot);
    return userRef;

  }  

  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }else {
    firebase.app(); // if already initialized, use that one
  }
  //firebase.initializeApp(config);

  export const auth = firebase.auth(); 
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();

  // We want to always trigger google sign in pop up whenever we use this google auth provider
  provider.setCustomParameters({ prompt: "select_account" });

  //
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;

