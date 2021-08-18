import React from "react";
import ReactDOM from "react-dom";
import App from "./app";

import { ChakraProvider } from "@chakra-ui/react";

import "./index.css";

ReactDOM.render(
  <ChakraProvider>
    <App />
  </ChakraProvider>,

  document.getElementById("root")
);
