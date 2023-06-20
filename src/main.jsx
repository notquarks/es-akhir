import React from "react";
import { ChakraProvider, ColorModeScript, extendTheme } from "@chakra-ui/react";
// import { extendTheme } from '@chakra-ui/react';
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { radioTheme } from "./theme/Radio.js";

const configChakra = {
  useSystemColorMode: true,
  initialColorMode: "dark",
  components: {
    Radio: radioTheme,
  },
};

const theme = extendTheme(configChakra);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
