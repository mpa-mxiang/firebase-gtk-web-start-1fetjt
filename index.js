// Import stylesheets
import './style.css';
// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

import * as firebaseui from 'firebaseui';

// Document elements
const startRsvpButton = document.getElementById('startRsvp');
const guestbookContainer = document.getElementById('guestbook-container');

const form = document.getElementById('leave-message');
const input = document.getElementById('message');
const guestbook = document.getElementById('guestbook');
const numberAttending = document.getElementById('number-attending');
const rsvpYes = document.getElementById('rsvp-yes');
const rsvpNo = document.getElementById('rsvp-no');

var rsvpListener = null;
var guestbookListener = null;

// Add Firebase project configuration object here
const firebaseConfig = {
  apiKey: "AIzaSyAdcxXNVTzbiLCQ9YSCu7gRZYSefge1z0A",
  authDomain: "direct-glider-254617.firebaseapp.com",
  databaseURL: "https://direct-glider-254617.firebaseio.com",
  projectId: "direct-glider-254617",
  storageBucket: "direct-glider-254617.appspot.com",
  messagingSenderId: "1025589872377",
  appId: "1:1025589872377:web:82342292c6c01be7830428",
  measurementId: "G-V6S20GH61G"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// var firebaseConfig = {};

// firebase.initializeApp(firebaseConfig);

// FirebaseUI config
const uiConfig = {
  credentialHelper: firebaseui.auth.CredentialHelper.NONE,
  signInOptions: [
    // Email / Password Provider.
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ],
  callbacks: {
    signInSuccessWithAuthResult: function(authResult, redirectUrl){
      // Handle sign-in.
      // Return false to avoid redirect.
      return false;
    }
  }
};
// Initialize the FirebaseUI widget using Firebase
const ui = new firebaseui.auth.AuthUI(firebase.auth());
// Called when the user clicks the RSVP button
startRsvpButton.addEventListener("click",
 () => {
    if (firebase.auth().currentUser) {
      // User is signed in; allows user to sign out
      firebase.auth().signOut();
    } else {
      // No user is signed in; allows user to sign in
      ui.start("#firebaseui-auth-container", uiConfig);
    }
});
// Listen to the current Auth state
firebase.auth().onAuthStateChanged((user)=> {
  if (user) {
    startRsvpButton.textContent = "LOGOUT"
  }
  else {
    startRsvpButton.textContent = "RSVP"
  }
});
// const ui = new firebaseui.auth.AuthUI(firebase.auth());
