import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => (
   <div>
      <h1>404</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/">Go back to Home</Link>
   </div>
);

export default NotFound;
