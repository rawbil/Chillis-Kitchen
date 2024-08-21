import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ProviderFunction from "./Components/Context/AppContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProviderFunction>
        <App />
      </ProviderFunction>
    </BrowserRouter>
  </React.StrictMode>
);
