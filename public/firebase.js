import { initializeApp } from "firebase/app";
import "firebase/auth";
import 'Firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyCOGd5oFoMfMYSQeHe6e7taiEs6XeIqK70",
    authDomain: "niblet-91.firebaseapp.com",
    projectId: "niblet-91",
    storageBucket: "niblet-91.appspot.com",
    messagingSenderId: "302628823676",
    appId: "1:302628823676:web:d6f100a76c993d67b39ff9",
    measurementId: "G-DHXE2D4D6G"
};

// if a Firebase instance doesn't exist, create one
export default app = initializeApp(firebaseConfig)
