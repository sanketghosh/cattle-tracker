import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { CattleContextProvider } from "./context/CattleContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CattleContextProvider>
      <App />
    </CattleContextProvider>
  </React.StrictMode>
);
