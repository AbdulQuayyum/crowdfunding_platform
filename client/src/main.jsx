import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from 'react-router-dom';
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

import { StateContextProvider } from "./Context/Index";
import App from "./App";
import "./Styles/Index.css"

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <ThirdwebProvider desiredChainId={ChainId.Goerli}>
    <Router>
      <StateContextProvider>
        <App />
      </StateContextProvider>
    </Router>
  </ThirdwebProvider>
)