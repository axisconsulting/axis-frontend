import styled, { css } from "styled-components";
import { up } from "$constants/breakpoints";

export const Wrapper = styled.div`
   position: relative;
   height: 50vh; /* was h-[50vh] on small */
   overflow: hidden;
   border-radius: 0.375rem; /* rounded-md */
   text-align: center;

   ${up("LARGE")} {
      width: 100%; /* lg:w-[100%] */
      height: auto; /* lg:h-fit */
   }
`;

export const BgImage = styled.img`
   width: 100%;
   height: 100%;
   object-fit: cover;

   /* Tailwind: brightness-[0.25] + group-hover:scale-[1.03] */
   filter: brightness(0.25);
   transform: scale(1);
   transition: transform 0.5s ease, filter 0.5s ease;

   ${Wrapper}:hover & {
      transform: scale(1.03);
      /* brightness stays at 0.25 in your original; keep it unless you want darker on hover */
   }
`;

export const Overlay = styled.div`
   position: absolute;
   top: 40%; /* top-[40%] */
   left: 0;
   width: 100%;
`;

export const Inner = styled.div`
   margin: 0 auto;
   width: 100%;
   max-width: 100%;
   display: flex;
   flex-direction: column;
   gap: 3vh; /* Tailwind used 3lvh; using 3vh for broad support */

   ${up("LARGE")} {
      max-width: 33%; /* lg:max-w-[33%] */
   }
`;

export const Heading = styled.h2`
   margin: 0;
   ${({ theme }) => css`
      font-family: ${theme?.fonts?.heading};
      color: ${theme?.tokens?.fg};
   `}
`;

export const BodyText = styled.p`
   margin: 0;
   transition: margin-top 0.5s ease;

   /* small: mt-[1%]; lg:mt-[1.5%]; hover → 0% */
   margin-top: 1%;
   ${up("LARGE")} {
      margin-top: 1.5%;
   }

   ${Wrapper}:hover & {
      margin-top: 0%;
   }

   ${({ theme }) => css`
      color: ${theme?.tokens?.fg};
   `}
`;

export const CTABox = styled.div`
   position: relative;
   transition: margin-top 0.65s ease, opacity 0.65s ease;

   /* small: visible; lg: hidden until hover */
   opacity: 1;
   margin-top: 2%;

   ${Wrapper}:hover & {
      margin-top: 0%;
   }

   ${up("LARGE")} {
      opacity: 0;
      ${Wrapper}:hover & {
         opacity: 1;
      }
   }

   a {
      text-decoration: none;
   }
`;
