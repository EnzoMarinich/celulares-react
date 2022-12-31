// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCd22pbspPuS0iNhz3MFns19OprIQyNH_s",
  authDomain: "ecommerce-celulares-512ef.firebaseapp.com",
  projectId: "ecommerce-celulares-512ef",
  storageBucket: "ecommerce-celulares-512ef.appspot.com",
  messagingSenderId: "615069274033",
  appId: "1:615069274033:web:702db98f56c45577583790"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirestoreApp = ()=>{
    return app
}