/* eslint-disable */
import React from "react";
import ReactDOM from "react-dom/client";
import MainPage from "./MainPage";
import GlobalStyle from "./GlobalStyle";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <MainPage />
  </React.StrictMode>
);
