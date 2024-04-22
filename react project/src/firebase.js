// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcgV6eRS9JudBXghKIU0dl1c1p-6UTjc0",
  authDomain: "test-project-7f21f.firebaseapp.com",
  projectId: "test-project-7f21f",
  storageBucket: "test-project-7f21f.appspot.com",
  messagingSenderId: "785247219915",
  appId: "1:785247219915:web:1fd097d8facd3834396b4e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);


