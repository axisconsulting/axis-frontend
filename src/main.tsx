// main.tsx
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { theme } from "./styles/theme";
import App from "./App";
import Home from "./pages/Home";

const router = createBrowserRouter([
   {
      element: <App />, // always rendered
      children: [
         { index: true, element: <Home /> },
         { path: "about/test", element: <h1>About</h1> },
      ],
   },
]);

createRoot(document.getElementById("root")!).render(
   <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
   </ThemeProvider>
);
