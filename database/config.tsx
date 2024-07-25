import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBHISb4hG9kTxfYvCNqKmcjSG6zIJV9A9w",
    authDomain: "info6132-b79b2.firebaseapp.com",
    projectId: "info6132-b79b2",
    storageBucket: "info6132-b79b2.appspot.com",
    messagingSenderId: "728824690448",
    appId: "1:728824690448:web:fec9c7a774b7e274669795"
};

const app = initializeApp(firebaseConfig);
export const firebaseDB = getFirestore(app);