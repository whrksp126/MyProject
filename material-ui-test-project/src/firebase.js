import firebase from 'firebase/compat/app'
import 'firebase/compat/database'

const firebaseConfig = {
  apiKey: "AIzaSyDcXPx7MRvxd0ZCLjYBdRh26ulfMpE6Q0s",
  authDomain: "vtgs-34f3d.firebaseapp.com",
  databaseURL: "https://vtgs-34f3d-default-rtdb.firebaseio.com",
  projectId: "vtgs-34f3d",
  storageBucket: "vtgs-34f3d.appspot.com",
  messagingSenderId: "137817684704",
  appId: "1:137817684704:web:5827be9fadcc1861cbee85"
};

const fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref();