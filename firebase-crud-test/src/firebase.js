import firebase from 'firebase/compat/app';
import "firebase/compat/database"
import 'firebase/compat/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDQLuFKh1gbXpZqfVUtxnp0N55OCT12AzE",
  authDomain: "fir-crud-test-d95ec.firebaseapp.com",
  projectId: "fir-crud-test-d95ec",
  storageBucket: "fir-crud-test-d95ec.appspot.com",
  messagingSenderId: "739284238596",
  appId: "1:739284238596:web:4a570d6fd492c7c1e5d051"
};

const fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref();

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

export {auth, googleAuthProvider, facebookAuthProvider};