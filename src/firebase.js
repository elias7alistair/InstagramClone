import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCq_hoaZ2hawTNE76ASDv0DBle-_UF0KrI",
  authDomain: "instagram-clone-d2352.firebaseapp.com",
  projectId: "instagram-clone-d2352",
  storageBucket: "instagram-clone-d2352.appspot.com",
  messagingSenderId: "367107493300",
  appId: "1:367107493300:web:0d1fe565b71cda3dee76e1",
  measurementId: "G-XK41BZJ5H4",
});

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
