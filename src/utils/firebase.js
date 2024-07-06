
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyB6a - OlfkEQipBuqJE1PEl24KO1SdpymPU",
    authDomain: "netflix-embedded-with-gpt.firebaseapp.com",
    projectId: "netflix-embedded-with-gpt",
    storageBucket: "netflix-embedded-with-gpt.appspot.com",
    messagingSenderId: "908256366521",
    appId: "1:908256366521:web:35abb7df7b035f142d7068",
    measurementId: "G-Z03VVBTMZ2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();