// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtxti9a3FS4IsXbthcuzF7XtLs3zS7yfs",
  authDomain: "fir-ddade.firebaseapp.com",
  projectId: "fir-ddade",
  storageBucket: "fir-ddade.appspot.com",
  messagingSenderId: "486613447793",
  appId: "1:486613447793:web:76a3e8345f6e8d8617d7d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

 const db = getFirestore()
 export default app;
 export {db} ;