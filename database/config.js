import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyADRWtdWReG8Z8Jyi6wZF-Dp-YvgfxTyCA",
    authDomain: "info6129-lab.firebaseapp.com",
    databaseURL: "https://info6129-lab-default-rtdb.firebaseio.com",
    projectId: "info6129-lab",
    storageBucket: "info6129-lab.appspot.com",
    messagingSenderId: "964043126758",
    appId: "1:964043126758:web:90f66d5f3896d0535bc827",
    measurementId: "G-W3MC81937P"
};

const app = initializeApp(firebaseConfig);
export const firebaseDB = getFirestore(app);