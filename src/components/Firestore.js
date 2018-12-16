import firebase from 'firebase';

// Initialize Firebase
  const config = {
    apiKey: "AIzaSyC8Di4KXt3NwBqpypxV6SsgTxdByoSiXYY",
    authDomain: "lending-database-cfb7a.firebaseapp.com",
    databaseURL: "https://lending-database-cfb7a.firebaseio.com",
    projectId: "lending-database-cfb7a",
    storageBucket: "lending-database-cfb7a.appspot.com",
    messagingSenderId: "1054718092735"
  };
  firebase.initializeApp(config);

  // I'm not sure if this const is necessary here, as it is in "User.js" as well.
  const db = firebase.firestore();

export default firebase;
