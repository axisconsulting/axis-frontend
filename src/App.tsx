import { Outlet } from "react-router-dom";
import styled from "styled-components";

import Navbar from "$components/core/navbar/Navbar";
import Footer from "$components/core/footer/Footer";
import { BREAKPOINTS } from "$styles/constants/breakpoints";
import ScrollToTop from "$components/ScrollToTop";
import { BASE_CDN_URL } from "$constants/image-utils/assets";
import { preconnect } from "react-dom";

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
   display: flex;
   justify-content: center;
   align-items: center;
   padding-top: 6rem;
`;

/*
 * This is the main App component that includes the Navbar, an Outlet for rendering child routes, and the footer
 */
export default function App() {
   preconnect(BASE_CDN_URL); // we will request something

   return (
      <RootWrapper>
         <ScrollToTop />
         <Navbar />
         <ChildWrapper>
            <Outlet />
         </ChildWrapper>
         <Footer />
      </RootWrapper>
   );
}
