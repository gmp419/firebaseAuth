// Import the functions you need from the SDKs you need
import * as firebase from "firebase/compat";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjIvF6iVnpNnbEhGyMs0P-Eqa7MXFV-mI",
  authDomain: "fir-auth-aee26.firebaseapp.com",
  projectId: "fir-auth-aee26",
  storageBucket: "fir-auth-aee26.appspot.com",
  messagingSenderId: "266809752213",
  appId: "1:266809752213:web:a5601e5f2db46f9c9d399c"
};

// Initialize Firebase
let app;
if(firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}

const auth = app.auth();

export {auth};