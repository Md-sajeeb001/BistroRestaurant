// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  // apiKey: import.meta.env.VITE_apiKey,
  // authDomain: import.meta.env.authDomain,
  // projectId: import.meta.env.projectId,
  // storageBucket: import.meta.env.storageBucket,
  // messagingSenderId: import.meta.env.VITE_messagingSenderId,
  // appId: import.meta.env.VITE_appId,
  // measurementId: import.meta.env.VITE_measurementId,

  apiKey: "AIzaSyDeN1gWV0ip0CPEwPPB3ziJaD_Osm73Iuo",
  authDomain: "bistro-boss-291ce.firebaseapp.com",
  projectId: "bistro-boss-291ce",
  storageBucket: "bistro-boss-291ce.firebasestorage.app",
  messagingSenderId: "626349259711",
  appId: "1:626349259711:web:e1c98d244caa2484083f0a",
  measurementId: "G-2S3B5LGLYP",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
