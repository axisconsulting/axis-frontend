import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.div<{ $isOpen: boolean }>`
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

export const NavbarContent = styled.div`
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

export const NavbarHeader = styled.div`
   width: 100%;
   display: flex;
   flex-direction: row;
   justify-content: space-between;
`;

export const Logo = styled.h6`
   display: flex;
   flex-direction: column;
   justify-content: center;
   margin: 0;
   font-size: ${({ theme }) => theme.fontSizes.h3};

   a {
      text-decoration: none;
      font-weight: bold;
      display: flex;
   }
`;

export const LogoAccent = styled.span`
   color: ${({ theme }) => theme.colors.accent};
   transition: color 0.3s ease-in-out;

   ${Logo}:hover & {
      color: ${({ theme }) => theme.colors.text};
   }
`;

export const LogoText = styled.span`
   color: ${({ theme }) => theme.colors.text};
   transition: color 0.3s ease-in-out;

   ${Logo}:hover & {
      color: ${({ theme }) => theme.colors.accent};
   }
`;

export const MobileMenuButton = styled.button`
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

export const NavLinks = styled.div<{ $isOpen: boolean }>`
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

export const NavLink = styled(Link)`
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
