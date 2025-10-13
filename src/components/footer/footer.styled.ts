// footer.styled.ts
import styled from "styled-components";
import { BREAKPOINTS } from "../../constants/breakpoints";

export const TopNav = styled.nav`
   padding-top: 5rem;
   display: flex;
   justify-content: space-between;

   @media (min-width: ${BREAKPOINTS.LARGE}) {
      padding-top: 8px;
   }
`;

export const AddressDesktop = styled.div`
   display: none;

   @media (min-width: ${BREAKPOINTS.LARGE}) {
      display: block;

      h6 {
         font-weight: 700;
         margin: 0;
         color: ${({ theme }) => theme.tokens.fg};
         font-size: ${({ theme }) => theme.fontSizes.small};
      }

      .block {
         display: flex;
         flex-direction: column;
         margin-top: 8px;
         gap: 0.15rem;

         h6 {
            font-weight: 500;
            color: ${({ theme }) => theme.tokens.footerText};
         }
      }
   }
`;

export const RightCols = styled.div`
   display: flex;
   justify-content: space-between;
   width: 100%;
   height: auto;
   gap: 2rem;

   @media (min-width: ${BREAKPOINTS.LARGE}) {
      justify-content: flex-end;
      width: 50%;
      gap: 1.5rem;
   }
`;

export const LinkGroup = styled.div`
   display: flex;
   flex-direction: column;
   gap: 0.5rem;

   h6 {
      font-weight: 700;
      margin: 0 0 0.25rem;
      font-family: ${({ theme }) => theme.fonts.heading};
      font-size: ${({ theme }) => theme.fontSizes.body};
      color: ${({ theme }) => theme.tokens.fg};
   }

   a {
      font-size: ${({ theme }) => theme.fontSizes.small};
      color: ${({ theme }) => theme.tokens.fg};
      transition: color 0.3s ease-in-out;

      &:hover,
      &:focus {
         color: ${({ theme }) => theme.tokens.linkHover};
      }
   }
`;

export const BottomBar = styled.div`
   padding: 1rem 0;
   display: flex;
   flex-direction: column-reverse;
   justify-content: space-between;
   gap: 1rem;

   @media (min-width: ${BREAKPOINTS.LARGE}) {
      flex-direction: row;
      gap: 0;
      align-items: center;
   }

   .left {
      color: ${({ theme }) => theme.tokens.link};
      margin: 0;
      font-weight: 600;
      font-size: ${({ theme }) => theme.fontSizes.small};
   }
`;

export const Socials = styled.div`
   display: flex;
   gap: 1rem;
   width: 100%;
   justify-content: flex-start;

   @media (min-width: ${BREAKPOINTS.LARGE}) {
      gap: 1%;
      width: 50%;
      justify-content: flex-end;
   }
`;

export const SocialLink = styled.a`
   display: inline-flex;
   align-items: center;
   transition: color 0.25s ease-in-out, transform 0.2s ease;
   color: ${({ theme }) => theme.tokens.fg};

   &:hover,
   &:focus {
      color: ${({ theme }) => theme.tokens.linkHover};
      transform: translateY(-1px);
   }

   svg {
      width: 1.15rem;
      height: 1.15rem;
   }
`;

export const AddressMobile = styled.div`
   display: block;

   @media (min-width: ${BREAKPOINTS.LARGE}) {
      display: none;
   }

   .block {
      display: flex;
      flex-direction: column;
      margin-top: 8px;
      gap: 0.15rem;

      h6 {
         color: ${({ theme }) => theme.tokens.footerText};
         margin: 0;
         font-weight: 500;
         font-size: ${({ theme }) => theme.fontSizes.small};
      }
   }
`;
