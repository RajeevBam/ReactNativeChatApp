import { initializeApp, getApp } from "firebase/app";
import { initializeFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCg44RS805ZAjPwLdSt1UB3WffMH2xPOqs",
  authDomain: "react-native-chat-app-7051e.firebaseapp.com",
  projectId: "react-native-chat-app-7051e",
  storageBucket: "react-native-chat-app-7051e.appspot.com",
  messagingSenderId: "94333572635",
  appId: "1:94333572635:web:77dd4ee11bd1f890ad4abe",
  measurementId: "G-G1S1Z0T3S7",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = initializeFirestore(app, { experimentalForceLongPolling: true });

export { db, auth };
