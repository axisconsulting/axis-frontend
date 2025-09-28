// main.tsx
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { theme } from "./styles/theme";
import { routes } from "./router";

const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")!).render(
   <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
   </ThemeProvider>
);
