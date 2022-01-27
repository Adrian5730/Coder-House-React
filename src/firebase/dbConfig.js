// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBW5sLkLzttef3KE6jYREc2ouN9hwhzLq8",
  authDomain: "coderhouse-react-6f60f.firebaseapp.com",
  projectId: "coderhouse-react-6f60f",
  storageBucket: "coderhouse-react-6f60f.appspot.com",
  messagingSenderId: "848669938785",
  appId: "1:848669938785:web:d8af8bc3a49410dee34620"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirestoreApp=()=>{
    return app
}