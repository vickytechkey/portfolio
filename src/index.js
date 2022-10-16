import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { initializeApp } from "firebase/app";
import 'hover.css/css/hover.css';

const firebaseConfig = {
  apiKey: "AIzaSyBD7MBF1tvdy0t5yIQLNStbrer5vp6qXPI",
  authDomain: "vigneshcoinhosting.firebaseapp.com",
  projectId: "vigneshcoinhosting",
  storageBucket: "vigneshcoinhosting.appspot.com",
  messagingSenderId: "830481915833",
  appId: "1:830481915833:web:6f9377961efbc163b72068",
  measurementId: "G-MQSGJXKNHT"
};

const app = initializeApp(firebaseConfig);

ReactDOM.render(

  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
