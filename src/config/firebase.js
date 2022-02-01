import firebase from 'firebase'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyB6TMkWWPG41QXWXxU8hZeg3ZZZ7GQ4MnY",
  authDomain: "pdm-crud.firebaseapp.com",
  projectId: "pdm-crud",
  storageBucket: "pdm-crud.appspot.com",
  messagingSenderId: "237260348793",
  appId: "1:237260348793:web:1095d40318a9ef1774e3a8"
  
};

firebase.initializeApp(firebaseConfig)

export default firebase

