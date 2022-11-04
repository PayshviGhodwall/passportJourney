import React from "react";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { render } from "react-dom"; // add this

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
