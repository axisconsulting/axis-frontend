import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { IoMenu } from "react-icons/io5";
import { ROUTES } from "../constants/routes";

const NavbarContainer = styled.div<{ $isOpen: boolean }>`
   position: fixed;
   top: 0;
   left: 0;
   right: 0;
   z-index: 50;
   display: flex;
   flex-direction: column;
   align-items: center;
   margin: 0 auto;
   height: fit-content;
   width: 100%;
   background: ${({ $isOpen, theme }) => ($isOpen ? theme.tokens.navBg : "transparent")};
   box-shadow: ${({ $isOpen }) => ($isOpen ? "0 10px 15px -3px rgba(0, 0, 0, 0.1)" : "none")};
   border-radius: ${({ $isOpen }) => ($isOpen ? "0" : "1rem")};
   transition: all 0.2s ease-in-out;

   @media (min-width: 1024px) {
      background: transparent;
      box-shadow: none;
      border-radius: 0;
   }
`;

const NavbarContent = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   padding: 0 5%;
   background: transparent;
   width: 100%;
   margin: 1rem 0;

   @media (min-width: 1024px) {
      flex-direction: row;
      padding: 1% 5%;
      margin: 0;
   }
`;

const NavbarHeader = styled.div`
   width: 100%;
   display: flex;
   flex-direction: row;
   justify-content: space-between;
`;

const Logo = styled.h6`
   display: flex;
   flex-direction: column;
   justify-content: center;
   margin: 0;

   a {
      color: ${({ theme }) => theme.colors.text};
      text-decoration: none;
      transition: color 0.3s ease-in-out;
      font-weight: bold;

      &:hover {
         color: ${({ theme }) => theme.colors.accent};
      }
   }
`;

const LogoAccent = styled.span`
   color: ${({ theme }) => theme.colors.accent};
`;

const MobileMenuButton = styled.button`
   width: fit-content;
   display: block;
   background: transparent;
   border: none;
   color: ${({ theme }) => theme.colors.text};
   font-size: 1.5rem;
   cursor: pointer;
   padding: 0.5rem;

   @media (min-width: 1024px) {
      display: none;
   }

   svg {
      width: 1.875rem;
      height: 1.875rem;
   }
`;

const NavLinks = styled.div<{ $isOpen: boolean }>`
   display: flex;
   flex-direction: column;
   gap: 1rem;
   width: 100%;
   white-space: nowrap;
   border-top: 1px solid ${({ theme }) => theme.colors.text};
   padding-top: 1rem;
   margin-top: ${({ $isOpen }) => ($isOpen ? "1rem" : "-25rem")};
   opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
   transition: all 0.3s ease-in-out;

   @media (min-width: 1024px) {
      flex-direction: row;
      justify-content: flex-end;
      gap: 2rem;
      width: fit-content;
      border-top: none;
      padding-top: 0;
      margin-top: 0;
      opacity: 1;
   }
`;

const NavLink = styled(Link)`
   color: ${({ theme }) => theme.colors.text};
   text-decoration: none;
   transition: color 0.3s ease-in-out;
   padding: 0.5rem 0;

   &:hover {
      color: ${({ theme }) => theme.colors.accent};
   }

   @media (min-width: 1024px) {
      padding: 0;
   }
`;

function Navbar() {
   const [isOpen, setIsOpen] = useState(false);

   const toggleNavbar = () => {
      setIsOpen(!isOpen);
   };

   return (
      <NavbarContainer $isOpen={isOpen}>
         <NavbarContent>
            <NavbarHeader>
               <Logo>
                  <Link to={ROUTES.HOME}>
                     <LogoAccent>Axis</LogoAccent> Consulting
                  </Link>
               </Logo>
               <MobileMenuButton onClick={toggleNavbar}>
                  {isOpen ? "✕" : <IoMenu />}
               </MobileMenuButton>
            </NavbarHeader>
            <NavLinks $isOpen={isOpen}>
               <NavLink to={ROUTES.RESOURCES}>Resources</NavLink>
               <NavLink to={ROUTES.ABOUT}>About</NavLink>
               <NavLink to={ROUTES.CLIENTS}>Our Clients</NavLink>
               <NavLink to={ROUTES.SPONSORS}>Our Sponsors</NavLink>
               <NavLink to={ROUTES.GET_INVOLVED}>Get Involved</NavLink>
            </NavLinks>
         </NavbarContent>
      </NavbarContainer>
   );
}

export default Navbar;
