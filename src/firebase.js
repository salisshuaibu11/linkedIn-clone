import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD0Ug2y_osYrxgJ4n1C3yMAHtFKYWqrrzc",
  authDomain: "linkedin-f40eb.firebaseapp.com",
  databaseURL: "https://linkedin-f40eb-default-rtdb.firebaseio.com",
  projectId: "linkedin-f40eb",
  storageBucket: "linkedin-f40eb.appspot.com",
  messagingSenderId: "403143951195",
  appId: "1:403143951195:web:0a149d39c6b8feaad5907e"
};

const firebaseApp = firebase.inializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {
    db, auth
}