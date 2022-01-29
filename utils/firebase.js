// import { initializeApp } from "firebase/app";
// import { getDatabase } from "firebase/database";
import firebase from "firebase";

const config = {
    apiKey: "AIzaSyByQMXlXqYdL59u2U_9OGTjXgVt5GZx7ww",
    authDomain: "phrasal-charger-339702.firebaseapp.com",
    projectId: "phrasal-charger-339702",
    storageBucket: "phrasal-charger-339702.appspot.com",
    messagingSenderId: "926855892508",
    appId: "1:926855892508:web:d7efb8806bf9f91da499d9",
    measurementId: "G-YGJ6JCQ2L8"
};

if (!firebase.apps.length) {
    const app = initializeApp(firebaseConfig);
}

// // Get a reference to the database service
// const database = getDatabase(app);

export default firebase;