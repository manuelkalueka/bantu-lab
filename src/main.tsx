import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { GlobalStyle } from "./styles/global-styles.ts";
import { ThemeProvider } from "styled-components";
import { Theme } from "./styles/Theme/index.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
    <GlobalStyle />
    <App />
    </ThemeProvider>
  </React.StrictMode>
);
