// ImageContent.styled.ts
import styled, { css } from "styled-components";
import { up } from "$styles/constants/breakpoints";
import { withAlpha } from "$styles/colors";

export const Wrapper = styled.div`
   border: 1px solid ${({ theme }) => withAlpha(theme.palette.STARDUST_GRAY, 0.2)};
   position: relative;
   height: 50vh;
   overflow: hidden;
   border-radius: 0.375rem;
   text-align: center;
   isolation: isolate;

   ${up("LARGE")} {
      width: 100%;
   }
`;

export const BgImage = styled.img<{ $visible?: boolean }>`
   position: absolute;
   inset: 0;
   width: 100%;
   height: 100%;
   object-fit: cover;
   filter: brightness(0.25);
   transform: scale(1);
   opacity: ${({ $visible }) => ($visible ? 1 : 0)};
   transition: transform 0.5s ease, filter 0.5s ease, opacity 300ms ease;

   ${Wrapper}:hover & {
      transform: scale(1.03);
   }

   @media (prefers-reduced-motion: reduce) {
      transition: opacity 200ms linear;
      transform: none;

      ${Wrapper}:hover & {
         transform: none;
      }
   }
`;

export const Overlay = styled.div`
   position: absolute;
   top: 40%;
   left: 0;
   width: 100%;
   z-index: 2;
`;

export const Inner = styled.div`
   margin: 0 auto;
   width: 100%;
   max-width: 100%;
   display: flex;
   flex-direction: column;
   gap: 3vh;
   padding: 8px;

   ${up("LARGE")} {
      max-width: 33%;
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
   margin-top: 1%;
   font-size: ${({ theme }) => theme.fontSizes.small};

   ${up("LARGE")} {
      margin-top: 1.5%;
      font-size: ${({ theme }) => theme.fontSizes.body};
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
