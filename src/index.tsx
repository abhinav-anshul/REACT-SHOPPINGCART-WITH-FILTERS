import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import Context from "./context/Context";

import App from "./App";

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <StrictMode>
    <Context>
      <App />
    </Context>
  </StrictMode>
);
