// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    // apiKey: process.env.REACT_APP_apiKey,
    // authDomain: process.env.REACT_APP_authDomain,
    // projectId: process.env.REACT_APP_projectId,
    // storageBucket: process.env.REACT_APP_storageBucket,
    // messagingSenderId: process.env.REACT_APP_messagingSenderId,
    // appId: process.env.REACT_APP_appId,
    apiKey: "AIzaSyBYM11PbREPkb3zSojk7WRPJr8CzpCSKnU",
    authDomain: "toolsnestbd.firebaseapp.com",
    projectId: "toolsnestbd",
    storageBucket: "toolsnestbd.appspot.com",
    messagingSenderId: "181225575482",
    appId: "1:181225575482:web:fa966f5924ba2c5f599103"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;