import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";
import { getDoc, doc, setDoc, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAd9nWsztF7ZrFo7SifjPjCjfMX-sfi5CY",
  authDomain: "resig-ba1c0.firebaseapp.com",
  projectId: "resig-ba1c0",
  storageBucket: "resig-ba1c0.firebasestorage.app",
  messagingSenderId: "188882569313",
  appId: "1:188882569313:web:b6e3b4cc908acc3b3b4220",
  measurementId: "G-328ZQT1QMP",
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInAuthUserWithEmailAndPassword = async (email,password) => {
  if(!email || !password) return;
  return await signInWithEmailAndPassword(auth,email,password);
}

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth,additionalDetails={}) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  if(!userSnapshot.exists()){
    const {displayName,email} = userAuth;
    const createdAt = new Date();
  try{
    await setDoc(userDocRef,{
      displayName,
      email,
      createdAt,
      ...additionalDetails
    });
  } catch (error) {
    console.log("error creating the user", error.message);
  }
  }
  return userDocRef;
}


export const createAuthUserWithEmailAndPassword = async (email,password) => {
  if(!email || !password) return;
  return await createUserWithEmailAndPassword(auth,email,password);
} 


export const signOutUser = async () => await signOut(auth);