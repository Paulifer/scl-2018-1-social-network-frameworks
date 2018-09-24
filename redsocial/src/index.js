import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';

import './index.css';
import App from './Components/PrimeraPantalla/App';
import registerServiceWorker from './registerServiceWorker';

firebase.initializeApp({
    apiKey: "AIzaSyDQN-oRt1cBUErsVaKvBSQIwjdInoTXjRg",
    authDomain: "redsocial2-b859e.firebaseapp.com",
    databaseURL: "https://redsocial2-b859e.firebaseio.com",
    projectId: "redsocial2-b859e",
    storageBucket: "redsocial2-b859e.appspot.com",
    messagingSenderId: "564097347611"
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
