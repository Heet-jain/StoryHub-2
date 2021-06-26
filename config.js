import * as firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyAGKP2mYSpbvOc6NSBLmiUNB9ol7sRYqhs",
    authDomain: "story-hub-2-fc39e.firebaseapp.com",
    projectId: "story-hub-2-fc39e",
    storageBucket: "story-hub-2-fc39e.appspot.com",
    messagingSenderId: "686237234491",
    appId: "1:686237234491:web:d642777f2231823b15731e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);