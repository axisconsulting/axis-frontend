import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

/*
 * This is the main App component that includes the Navbar, an Outlet for rendering child routes, and the footer
 */
export default function App() {
   return (
      <div>
         <Navbar />
         <div style={{ paddingTop: "5rem", padding: "5rem 24px 24px 24px" }}>
            <Outlet />
         </div>
         <Footer />
      </div>
   );
}
