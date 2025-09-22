import { Link, Outlet } from "react-router-dom";

export default function App() {
   return (
      <div style={{ padding: 24 }}>
         {/* NAVBAR WILL GO HERE */}
         <nav style={{ display: "flex", gap: 12 }}>
            <Link to="/">Home</Link>
            <Link to="/about/test">About</Link>
         </nav>
         <Outlet />
      </div>
   );
}
