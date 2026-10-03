import "@feynman/design-system/tokens.css";
import "@feynman/design-system/FeynmanButton.css";
import React from "react";
import {createRoot} from "react-dom/client";
import {App} from "./App.js";
import "./styles.css";

const root=document.getElementById("root");
if(!root)throw new Error("Application root is missing");

createRoot(root).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);