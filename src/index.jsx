import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProviderWrapper } from "./context/auth.context";
import { ThemeProviderWraper } from "./context/theme.context";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Router>
      <ThemeProviderWraper>
          <AuthProviderWrapper>
              <App />
          </AuthProviderWrapper>
      </ThemeProviderWraper>
  </Router>
);
