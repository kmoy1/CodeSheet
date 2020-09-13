import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBqgPUXin9kwiZCmpWVcYecTGoTvYmfULY",
  authDomain: "satyrn-notebook.firebaseapp.com",
  databaseURL: "https://satyrn-notebook.firebaseio.com",
  projectId: "satyrn-notebook",
  storageBucket: "satyrn-notebook.appspot.com",
  messagingSenderId: "661406196852",
  appId: "1:661406196852:web:ea379dbd67fba114e75d21",
  measurementId: "G-EX75SV7DY3",
};
firebase.initializeApp(firebaseConfig);

export default firebase;
