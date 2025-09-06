import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { initializeApp } from "firebase/app";
import AppConfiguration from "./configuration/mainconfiguration";
import "hover.css/css/hover.css";


const appconfig = new AppConfiguration();
const app = initializeApp(appconfig.firebaseHostConfig);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
