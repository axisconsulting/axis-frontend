import type { RouteObject } from "react-router-dom";
import App from "./App";
import ErrorBoundary from "$components/core/ErrorBoundary/ErrorBoundary";
import { ROUTES } from "$constants/routes";

// Direct imports for instant navigation
import Home from "./pages/Home/Home";
import About from "./pages/about/About";
import GetInvolved from "./pages/GetInvolved/GetInvolved";
import Clients from "./pages/Clients/Clients";
import Sponsors from "./pages/Sponsors/Sponsors";
import Resources from "./pages/Resources/Resources";
import NotFound from "./pages/NotFound/NotFound";

// Remove leading slashes from child route paths
function stripLeadingSlash(path: string) {
   return path.startsWith("/") ? path.slice(1) : path;
}

export const routes: RouteObject[] = [
   {
      path: "/",
      element: <App />,
      errorElement: <ErrorBoundary />,
      children: [
         {
            index: true,
            element: <Home />,
         },
         {
            path: stripLeadingSlash(ROUTES.ABOUT),
            element: <About />,
         },
         {
            path: stripLeadingSlash(ROUTES.GET_INVOLVED),
            element: <GetInvolved />,
         },
         {
            path: stripLeadingSlash(ROUTES.CLIENTS),
            element: <Clients />,
         },
         {
            path: stripLeadingSlash(ROUTES.SPONSORS),
            element: <Sponsors />,
         },
         {
            path: stripLeadingSlash(ROUTES.RESOURCES),
            element: <Resources />,
         },
         {
            path: "*",
            element: <NotFound />,
         },
      ],
   },
];
