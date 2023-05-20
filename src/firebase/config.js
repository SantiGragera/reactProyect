// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzMihKtXHa4fohKtFd8KJUfBXQJ6Kzsb0",
  authDomain: "tiendatalleres-db443.firebaseapp.com",
  projectId: "tiendatalleres-db443",
  storageBucket: "tiendatalleres-db443.appspot.com",
  messagingSenderId: "431205126168",
  appId: "1:431205126168:web:51abb32320bd54c1a0b36d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirebase = () => app
