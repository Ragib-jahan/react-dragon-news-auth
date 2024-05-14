// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6y0-kJYNdvtdcGijwhut4s2xLLtJhxsU",
  authDomain: "react-dragon-news-auth-116a9.firebaseapp.com",
  projectId: "react-dragon-news-auth-116a9",
  storageBucket: "react-dragon-news-auth-116a9.appspot.com",
  messagingSenderId: "1001618346532",
  appId: "1:1001618346532:web:0448664dfb4cf70d43beb1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;