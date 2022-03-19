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
const firestore = firebase.firestore();
const createUserDocument = async (user,additionalData) => {
  if(!user) return;

  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();

  if(!snapshot.exists){
    try{
      userRef.set(additionalData);
    }
    catch(error){
      console.log(error);
    }
  }
}

export {auth};
export {firestore};
export {createUserDocument};
export {app};
//const app = initializeApp(firebaseConfig);