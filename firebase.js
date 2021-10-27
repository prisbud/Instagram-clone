// Import the functions you need from the SDKs you need
import { initializeApp , getApps , getApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDp5dpFZvz3Z1Sj5y4qpBlS71iGrb77F2M",
  authDomain: "my-insta-11023.firebaseapp.com",
  projectId: "my-insta-11023",
  storageBucket: "my-insta-11023.appspot.com",
  messagingSenderId: "948723934131",
  appId: "1:948723934131:web:5af203fecd26ce1a89a1c6"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export {app , db , storage};