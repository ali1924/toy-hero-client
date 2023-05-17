// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey:import.meta.env.VITE_apiKey,
//   authDomain:import.meta.env.VITE_authDomain,
//   projectId:import.meta.env.VITE_projectId,
//   storageBucket:import.meta.env.VITE_storageBucket,
//   messagingSenderId:import.meta.env.VITE_messagingSenderId,
//   appId:import.meta.env.VITE_appId
// };
const firebaseConfig = {
  apiKey: "AIzaSyCcoIHhKQmQ6PzShxB4d33RlNUre9nGRb8",
  authDomain: "toy-hero.firebaseapp.com",
  projectId: "toy-hero",
  storageBucket: "toy-hero.appspot.com",
  messagingSenderId: "764025884660",
  appId: "1:764025884660:web:f6091e0b82df243a4073a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;