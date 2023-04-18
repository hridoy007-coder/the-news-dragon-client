// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCk-ocrEQQ3NU-L2G_dbXeC8cmZTwa0c0k",
  authDomain: "the-news-dragon-client-8e891.firebaseapp.com",
  projectId: "the-news-dragon-client-8e891",
  storageBucket: "the-news-dragon-client-8e891.appspot.com",
  messagingSenderId: "61453099377",
  appId: "1:61453099377:web:1568f3d9e78421c0d8d6d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;