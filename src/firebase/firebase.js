// Import the functions you need from the SDKs you need
import firebase from 'firebase'
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCIMKcs-TBNNTlwnf3HiEIZcUXOMoTvr_w',
  authDomain: 'adaswitchgame.firebaseapp.com',
  projectId: 'adaswitchgame',
  storageBucket: 'adaswitchgame.appspot.com',
  messagingSenderId: '625048792658',
  appId: '1:625048792658:web:b670cc025959bc323a398b',
  measurementId: 'G-1TC6SBNJ7M',
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
export default firebase.database()
