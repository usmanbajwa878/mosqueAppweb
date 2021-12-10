import firebase from 'firebase';
import 'firebase/storage'






const firebaseConfig = {
  apiKey: "AIzaSyCIhg3etVWnXIp7Ni0OmMcARN8HZNtClTk",
  authDomain: "mosqueapp-63cfb.firebaseapp.com",
  projectId: "mosqueapp-63cfb",
  storageBucket: "mosqueapp-63cfb.appspot.com",
  messagingSenderId: "348482617518",
  appId: "1:348482617518:web:18c951f714446720cb2d3f",
  measurementId: "${config.measurementId}"
};



  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var storage = firebase.storage();
  export default storage;

 