import { Outlet } from "react-router-dom";
import styled from "styled-components";

import Navbar from "$components/core/Navbar/Navbar";
import Footer from "$components/core/Footer/Footer";
import { BREAKPOINTS } from "$constants/breakpoints";

const RootWrapper = styled.div`
   margin: 0 1rem;

   @media (min-width: ${BREAKPOINTS.MEDIUM}) {
      margin: 0 1.5rem;
   }

   @media (min-width: ${BREAKPOINTS.LARGE}) {
      margin: 0 2rem;
   }
`;

const ChildWrapper = styled.div`
   padding-top: 6rem;
`;

/*
 * This is the main App component that includes the Navbar, an Outlet for rendering child routes, and the footer
 */
export default function App() {
   return (
      <RootWrapper>
         <Navbar />
         <ChildWrapper>
            <Outlet />
         </ChildWrapper>
         <Footer />
      </RootWrapper>
   );
}
