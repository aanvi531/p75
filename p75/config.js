import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
    apiKey: "AIzaSyD766wUJHURqSvl6fLXJ8GA4hO9Lea49Ok",
    authDomain: "e-ride4-229c3.firebaseapp.com",
    projectId: "e-ride4-229c3",
    storageBucket: "e-ride4-229c3.appspot.com",
    messagingSenderId: "231599794414",
    appId: "1:231599794414:web:844125fbb7abf1f40dabff"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
