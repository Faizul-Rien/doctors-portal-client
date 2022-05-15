// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBo3lnpO9crDhLWaCR3XPBXeiX4fSxbN2k",
  authDomain: "doctors-portal-b53b1.firebaseapp.com",
  projectId: "doctors-portal-b53b1",
  storageBucket: "doctors-portal-b53b1.appspot.com",
  messagingSenderId: "866221178517",
  appId: "1:866221178517:web:15f82471b1522a3443259c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;