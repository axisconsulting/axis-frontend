import type { RouteObject } from "react-router-dom";
import App from "./App";
import ErrorBoundary from "$components/core/error/ErrorBoundary";
import { ROUTES } from "$constants/routes";

// Direct imports for instant navigation
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import GetInvolved from "./pages/get_involved/GetInvolved";
import Clients from "./pages/clients/Clients";
import Sponsors from "./pages/sponsors/Sponsors";
import Resources from "./pages/resources/Resources";
import NotFound from "./pages/not_found/NotFound";

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
