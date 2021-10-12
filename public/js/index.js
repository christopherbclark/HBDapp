// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = {
  apiKey: 'AIzaSyDhA1gm_nyiZPJdrLahBSEAOeGKbfp4gCo',
  authDomain: 'hbdapp-a635b.firebaseapp.com',
  projectId: 'hbdapp-a635b',
  storageBucket: 'hbdapp-a635b.appspot.com',
  messagingSenderId: '451660110962',
  appId: '1:451660110962:web:8b639fb3e143fa7d0176eb',
  measurementId: 'G-6Y15RKJ44Q',
};

// Initialize Firebase
const app = initializeApp(firebaseApp);
const analytics = getAnalytics(app);

//Auth
const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
  if (user != null) {
    console.log('Logged in!');
  } else {
    console.log('No user');
  }
});
