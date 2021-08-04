import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { PlacesProvider } from "./context/PlacesContext";
import { SlidingHeaderProvider } from "./context/SlidingHeaderContext";

ReactDOM.render(
  <PlacesProvider>
    <SlidingHeaderProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </SlidingHeaderProvider>
  </PlacesProvider>,
  document.getElementById("root")
);
