// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyChxsgbe9OpcujSMSGuE0imJq55jpb0BcE",
  authDomain: "work-f881d.firebaseapp.com",
  projectId: "work-f881d",
  storageBucket: "work-f881d.appspot.com",
  messagingSenderId: "329195225733",
  appId: "1:329195225733:web:17707df605336c0b51dfec",
  measurementId: "G-DPDRCT59Q4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db,auth};