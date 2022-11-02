// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDeCvr_01reNde6l4gW1AU6BeT_js3Et0Y",
  authDomain: "sugarbaby-29fb2.firebaseapp.com",
  projectId: "sugarbaby-29fb2",
  storageBucket: "sugarbaby-29fb2.appspot.com",
  messagingSenderId: "80591877123",
  appId: "1:80591877123:web:46cd30869841b6c7738a36",
  measurementId: "G-SFYJCJ2RVP"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
