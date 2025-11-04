import styled from "styled-components";
import { Link } from "react-router-dom";
import { withAlpha } from "$styles/colors";
import { up } from "$constants/breakpoints";

export const NavbarContainer = styled.header<{ $isOpen: boolean }>`
   position: fixed;
   top: 0;
   left: 0;
   right: 0;
   z-index: 50;
   display: flex;
   flex-direction: column;
   align-items: center;
   width: 100%;
   height: fit-content;
   margin: 0 auto;

   isolation: isolate;
   backdrop-filter: saturate(180%) blur(14px);
   -webkit-backdrop-filter: saturate(180%) blur(14px);

   &::before {
      content: "";
      position: absolute;
      inset: 0;
      z-index: -1;
      background: ${({ $isOpen, theme }) =>
         $isOpen
            ? `linear-gradient(to bottom, ${withAlpha(theme.tokens.navBg, 0.1)} 0%, ${withAlpha(
                 theme.tokens.navBg,
                 0.1
              )} 100%)`
            : "transparent"};
      border-bottom: 1px solid ${({ theme }) => withAlpha(theme.palette.STARLIGHT_WHITE, 0.1)};
      transition: background 0.25s ease-in-out, border-color 0.25s ease-in-out;
   }

   box-shadow: ${({ $isOpen }) => ($isOpen ? "0 8px 20px rgba(0, 0, 0, 0.15)" : "none")};

   ${up("MEDIUM")} {
      &::before {
         background: ${({ theme }) =>
            `linear-gradient(to bottom, ${withAlpha(theme.tokens.navBg, 0.08)} 0%, ${withAlpha(
               theme.tokens.navBg,
               0.08
            )} 100%)`};
      }
   }

   transition: box-shadow 0.25s ease-in-out;
`;

export const NavbarContent = styled.nav`
   position: relative;
   z-index: 1;

   display: flex;
   flex-direction: column;
   justify-content: space-between;
   width: 100%;
   padding: 0.5rem 1rem;

   ${up("MEDIUM")} {
      padding: 1rem 2rem;
      flex-direction: row;
   }
`;

export const NavbarHeader = styled.div`
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

   ${Logo}:hover &, ${Logo}:focus-within & {
      color: ${({ theme }) => theme.colors.text};
   }
`;

export const LogoText = styled.span`
   color: ${({ theme }) => theme.colors.text};
   transition: color 0.3s ease-in-out;

   ${Logo}:hover &, ${Logo}:focus-within & {
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

   ${up("MEDIUM")} {
      display: none;
   }

   svg {
      width: 1.875rem;
      height: 1.875rem;
   }
`;

export const NavLinks = styled.div<{ $isOpen: boolean }>`
   display: grid;
   grid-template-rows: ${({ $isOpen }) => ($isOpen ? "1fr" : "0fr")};
   transition: grid-template-rows 0.3s ease-in-out, opacity 0.3s ease-in-out,
      margin-top 0.3s ease-in-out;
   margin-top: ${({ $isOpen }) => ($isOpen ? "1rem" : "0")};
   opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};

   > div {
      overflow: hidden;
   }

   > div > ul {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      width: 100%;
      white-space: nowrap;
      padding: 1rem 0;
      border-top: 1px solid ${({ theme }) => withAlpha(theme.colors.text, 0.3)};
   }

   ${up("MEDIUM")} {
      grid-template-rows: 1fr;
      opacity: 1;
      margin-top: 0;

      > div > ul {
         flex-direction: row;
         justify-content: flex-end;
         align-items: center;
         gap: 2rem;
         width: fit-content;
         border-top: none;
         padding: 0;
      }
   }
`;

export const NavLink = styled(Link)`
   color: ${({ theme }) => theme.colors.text};
   text-decoration: none;
   transition: color 0.3s ease-in-out;
   padding: 0.5rem 0;

   &:hover,
   &:focus-visible {
      color: ${({ theme }) => theme.colors.accent};
   }

   ${up("MEDIUM")} {
      padding: 0;
   }
`;

export const Backdrop = styled.div`
   position: fixed;
   inset: 0;
   z-index: 40;
   background: rgba(0, 0, 0, 0.35);
   backdrop-filter: saturate(150%) blur(1px);
   transition: opacity 0.2s ease-in-out;

   ${up("MEDIUM")} {
      display: none;
   }
`;
