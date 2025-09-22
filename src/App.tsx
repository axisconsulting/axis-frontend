import "./App.css";

import { Link, Outlet } from "react-router-dom";

export default function App() {
   return (
      <div style={{ padding: 24 }}>
         <h1>Vite + React + TS (+SWC)</h1>
         <nav style={{ display: "flex", gap: 12 }}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
         </nav>
         <Outlet />
      </div>
   );
}
