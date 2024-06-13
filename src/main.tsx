import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyle } from "./styles/global-styles.ts";
import { ThemeProvider } from "styled-components";
import { Theme } from "./styles/Theme/index.ts";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login/index.tsx";
import Signup from "./pages/Signup/index.tsx";
import ErrorPage from "./pages/error-page.tsx";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />,
   
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
