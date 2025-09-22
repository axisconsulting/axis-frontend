// import { StrictMode } from "react"; // Uncomment to enable StrictMode
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import App from "./App.tsx";

const router = createBrowserRouter([
   { path: "/", element: <App /> },
   { path: "/about", element: <h1>About</h1> },
]);

createRoot(document.getElementById("root")!).render(<RouterProvider router={router} />);
