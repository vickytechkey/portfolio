import React from "react";
import firebase from "firebase/app";
import "firebase/firestore";
function Projects() {
  const firebaseConfig = {
    apiKey: "AIzaSyCbNRhYBErmJq_Yxl7uaV8Wd3ViGJaYcaM",
    authDomain: "vigneshexplorations.firebaseapp.com",
    projectId: "vigneshexplorations",
    storageBucket: "vigneshexplorations.appspot.com",
    messagingSenderId: "1061942842544",
    appId: "1:1061942842544:web:cc0a41c1a4a58e9abb9775",
    measurementId: "G-1JG82313DL",
  };

  if (!firebase.default.initializeApp.length) {
    firebase.initializeApp(firebaseConfig);
  }
  return (
    <React.Fragment>
      <h1> Projects </h1>
    </React.Fragment>
  );
}

export default Projects;
