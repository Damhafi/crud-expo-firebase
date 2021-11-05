import firebase from "firebase";
import "firebase/firestore";

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDiz9g-AiT1gWz7T3QRbygt65FXFRe0th0",
    authDomain: "crud-expo-firebase-19a04.firebaseapp.com",
    databaseURL: "https://crud-expo-firebase.firebaseio.com",
    projectId: "crud-expo-firebase-19a04",
    storageBucket: "crud-expo-firebase-19a04.appspot.com",
    messagingSenderId: "1041133957005",
    appId: "1:1041133957005:web:5a3589a11c0738656917c4"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//export default firebase;

/*
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  console.log('FNF - firebase.initializeApp(firebaseConfig);')
}else {
  firebase.app(); // if already initialized, use that one
  console.log('FNF - firebase.app();')
}
*/

const db = firebase.firestore();

export default {
  firebase,
  db
};

