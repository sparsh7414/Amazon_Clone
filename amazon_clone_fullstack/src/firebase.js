import * as firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCie-GlqvQlUua2RqJ2xXd7repsu39cy8g",
    authDomain: "clone-9ad8d.firebaseapp.com",
    projectId: "clone-9ad8d",
    storageBucket: "clone-9ad8d.appspot.com",
    messagingSenderId: "591411421721",
    appId: "1:591411421721:web:0bcab36e2eddd6cbcb4088",
    measurementId: "G-TTGN0QFEMK"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();

export {db,auth};