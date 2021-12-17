import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
   apiKey: "AIzaSyAcItlnk7Zmk3BiaepOQcehaAtc_TTbLH8",
   authDomain: "sunshine-login-d9e76.firebaseapp.com",
   projectId: "sunshine-login-d9e76",
   storageBucket: "sunshine-login-d9e76.appspot.com",
   messagingSenderId: "793467520009",
   appId: "1:793467520009:web:667cd57fd583d6327224d8"
};

const app = initializeApp(firebaseConfig);

export const authentication=getAuth(app);