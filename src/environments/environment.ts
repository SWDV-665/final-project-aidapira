// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyDivohcpAUQKY1i8oq9QM0Rq0HNDgiwg18",
    authDomain: "persianconnectionapp.firebaseapp.com",
    projectId: "persianconnectionapp",
    storageBucket: "persianconnectionapp.appspot.com",
    messagingSenderId: "836024224814",
    appId: "1:836024224814:web:4fba1deb4d7853b76463bf",
    measurementId: "G-MCBGX38L61"
  }
};

// Initialize Firebase
const app = initializeApp(environment.firebaseConfig);
const analytics = getAnalytics(app);