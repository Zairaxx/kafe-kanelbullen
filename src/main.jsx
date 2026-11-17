import React from "react";
import ReactDOM from "react-dom/client";
// TODO 1: Importera BrowserRouter från "react-router-dom"
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* TODO 1: Lägg <App /> inuti <BrowserRouter> */}
    <App />
  </React.StrictMode>
);
