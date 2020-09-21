import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHON4BJaULhXxoH36_mC28Y8CnH1RH0jA",
  authDomain: "todo-app-mp.firebaseapp.com",
  databaseURL: "https://todo-app-mp.firebaseio.com",
  projectId: "todo-app-mp",
  storageBucket: "todo-app-mp.appspot.com",
  messagingSenderId: "649958949959",
  appId: "1:649958949959:web:412447b8aef384b8659d62",
  measurementId: "G-TMJLF6L1R8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
