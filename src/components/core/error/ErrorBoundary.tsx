import { Link, useRouteError } from "react-router-dom";
import { ROUTES } from "$constants/routes";
import { Page } from "./errorBoundary.styled";

export default function ErrorBoundary() {
   const error = useRouteError() as Error;

   console.error("Route Error:", error);

   return (
      <Page>
         <h1>Oops! Something went wrong</h1>
         <p>We're sorry, but something unexpected happened while loading this page.</p>

         {error?.message && (
            <details>
               <summary>Error Details</summary>
               <pre>{error.message}</pre>
            </details>
         )}
         <br />
         <Link to={ROUTES.HOME}>Go Home</Link>
      </Page>
   );
}
