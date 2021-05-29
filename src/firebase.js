import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC0cE7mVnF6vIvhRYzqGXIG1uhKmxx_7Lo",
    authDomain: "tp-ecommerce.firebaseapp.com",
    projectId: "tp-ecommerce",
    storageBucket: "tp-ecommerce.appspot.com",
    messagingSenderId: "917346746890",
    appId: "1:917346746890:web:83d8b8dea2fdb99a7d95f3"

});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth};