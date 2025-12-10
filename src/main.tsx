// main.tsx
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "./styles/global";
import { theme } from "./styles/theme";
import { routes } from "./router";

const router = createBrowserRouter(routes);

/*
 * This is the entry point of the React application. It sets up the React DOM rendering,
 * applies global styles, and provides the theme to the entire app using ThemeProvider.
 */
createRoot(document.getElementById("root")!).render(
   <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
   </ThemeProvider>
);
