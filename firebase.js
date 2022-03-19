// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRXTIHWCzvbpfNoxb_ZDSV8ODV5qWfuQc",
  authDomain: "petsmart-crescendo.firebaseapp.com",
  projectId: "petsmart-crescendo",
  storageBucket: "petsmart-crescendo.appspot.com",
  messagingSenderId: "415842628991",
  appId: "1:415842628991:web:492dc3efba618a2989164a"
};

// Initialize Firebase
let app;
if(firebase.apps.length === 0)
{
    app = firebase.initializeApp(firebaseConfig);
}
else
{
    app = firebase.app();
}

const auth = firebase.auth();

export {auth};
//const app = initializeApp(firebaseConfig);