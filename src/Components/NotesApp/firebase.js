import firebase from "firebase";
// var firebaseConfig = {
//     apiKey: "AIzaSyDcvAHgm-SHzDl0s1furn7q2sSSPbgBgWc",
//     authDomain: "note-app-fbb7c.firebaseapp.com",
//     projectId: "note-app-fbb7c",
//     storageBucket: "note-app-fbb7c.appspot.com",
//     messagingSenderId: "826716826539",
//     appId: "1:826716826539:web:ee4a11e128b05d5e7900ee"
//   };
// Initialize Firebase
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDcvAHgm-SHzDl0s1furn7q2sSSPbgBgWc",
  authDomain: "note-app-fbb7c.firebaseapp.com",
  projectId: "note-app-fbb7c",
  storageBucket: "note-app-fbb7c.appspot.com",
  messagingSenderId: "826716826539",
  appId: "1:826716826539:web:ee4a11e128b05d5e7900ee",
});

const db = firebaseApp.firestore();

export default db;
