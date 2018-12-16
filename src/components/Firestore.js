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

export default firebase;
