import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../constants/routes";

const NotFound: React.FC = () => (
   <div>
      <h1>404 Page not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to={ROUTES.HOME}>Go back to Home</Link>
   </div>
);

export default NotFound;
