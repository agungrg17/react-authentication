// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGqktQBjz5Ow4bmkDO2v2epilGwIrPF40",
  authDomain: "auth-react-a3477.firebaseapp.com",
  projectId: "auth-react-a3477",
  storageBucket: "auth-react-a3477.appspot.com",
  messagingSenderId: "841109424677",
  appId: "1:841109424677:web:d59c818268158556124dcc",
  measurementId: "G-YKPBJ9XBLH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };