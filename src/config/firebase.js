import firebase from "firebase/app";

var firebaseConfig = {
  apiKey: "AIzaSyD6Z-vFkFUDuI9OfLvhWZHCOs4n5EgQKj0",
  authDomain: "blood-donar-reciever.firebaseapp.com",
  projectId: "blood-donar-reciever",
  storageBucket: "blood-donar-reciever.appspot.com",
  messagingSenderId: "777567035163",
  appId: "1:777567035163:web:a192e10f3c8a4e1f44fdbe",
  measurementId: "G-TJ9BZXWZPM"
};
// Initialize Firebase

// firebase.analytics();

export default firebase.initializeApp(firebaseConfig);;
