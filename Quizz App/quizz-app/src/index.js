import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import InteractiveGrid from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAnFdBMvHE72iApKnwjGv2wSJB6Jty-a9I",
    authDomain: "shahzaib-com-app1.firebaseapp.com",
    databaseURL: "https://shahzaib-com-app1.firebaseio.com",
    projectId: "shahzaib-com-app1",
    storageBucket: "shahzaib-com-app1.appspot.com",
    messagingSenderId: "568367662586"
  };
  firebase.initializeApp(config);
  // Get a reference to the storage service, which is used to create references in your storage bucket
var storage = firebase.storage();

// Create a storage reference from our storage service
 var storageRef = storage.ref();
 export default storageRef

ReactDOM.render(<InteractiveGrid />, document.getElementById('root'));
registerServiceWorker();
