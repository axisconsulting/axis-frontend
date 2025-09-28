import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

export default function App() {
   return (
      <div>
         <Navbar />
         <div style={{ paddingTop: "5rem", padding: "5rem 24px 24px 24px" }}>
            <Outlet />
         </div>
      </div>
   );
}
