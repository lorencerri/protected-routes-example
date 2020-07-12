import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import { Auth } from "./states/Auth";

ReactDOM.render(
  <BrowserRouter>
    <Auth.Provider>
      <App />
    </Auth.Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
