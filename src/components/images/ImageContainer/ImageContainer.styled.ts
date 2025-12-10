// ImageContainer.styled.ts
import styled from "styled-components";
import { up } from "$styles/constants/breakpoints";
import { withAlpha } from "$styles/colors";

export const Wrapper = styled.div`
   border: 1px solid ${({ theme }) => withAlpha(theme.palette.STARDUST_GRAY, 0.2)};
   position: relative;
   width: 100%;
   height: 100%; /* allow wrapper to fill its grid cell */
   overflow: hidden;
   border-radius: 0.25rem;

   display: flex;
   flex-direction: column;
`;

// Overlay stays the same
export const Overlay = styled.div`
   position: absolute;
   bottom: 0;
   inset-inline: 0;
   z-index: 10;

   display: flex;
   flex-direction: column;
   gap: 1rem;
   width: 100%;

   padding: 2rem;
   padding-bottom: 3.5rem;
   color: ${({ theme }) => theme.tokens.fg};
   text-align: left;
   transition: padding-bottom 0.5s ease;

   ${Wrapper}:hover & {
      padding-bottom: 4rem;
   }
`;

export const Heading = styled.h2`
   margin: 0;
   font-family: ${({ theme }) => theme.fonts?.heading};
   color: ${({ theme }) => theme.tokens.fg};
`;

export const BodyText = styled.p`
   margin: 0;
   color: ${({ theme }) => theme.tokens.fg};
`;

export const CTAInline = styled.div`
   position: absolute;
   bottom: 10px;
   display: flex;
   align-items: center;
   margin-bottom: 1rem;
   transition: margin-bottom 0.65s ease, opacity 0.65s ease, color 0.65s ease;
   opacity: 1;

   ${up("LARGE")} {
      opacity: 0;
      ${Wrapper}:hover & {
         opacity: 1;
      }
   }

   ${Wrapper}:hover & {
      margin-bottom: 2rem;
   }

   span {
      color: ${({ theme }) => theme.tokens.link};
      transition: color 0.65s ease;

      &:hover {
         color: ${({ theme }) => theme.tokens.linkHover ?? theme.tokens.link};
      }
   }
`;

export const CTAArrow = styled.div`
   display: inline-flex;
   align-items: center;
   margin-left: 0.25rem;
   color: ${({ theme }) => theme.tokens.link};
   transition: color 0.65s ease;

   ${Wrapper}:hover & {
      color: ${({ theme }) => theme.tokens.linkHover ?? theme.tokens.link};
   }

   svg {
      display: block;
   }
`;

// ✅ Key change: let the grid cell control height
export const MediaBox = styled.div`
   position: relative;
   width: 100%;
   flex: 1 1 auto; /* take available vertical space in Wrapper */
   min-height: 16rem; /* reasonable minimum so it’s not tiny */

   border-radius: 0.25rem;
   overflow: hidden;

   ${up("LARGE")} {
      min-height: 18rem; /* slightly taller on desktop, but not forced 40rem */
   }
`;

/**
 * Background image fills whatever height the MediaBox/grid cell decides.
 */
export const MediaImg = styled.img<{ $visible: boolean }>`
   width: 100%;
   height: 100%;
   object-fit: cover;

   filter: brightness(0.25);
   transform: scale(1);

   opacity: ${({ $visible }) => ($visible ? 1 : 0)};
   transition: opacity 240ms ease-in-out, filter 0.5s ease, transform 0.5s ease;

   ${Wrapper}:hover & {
      filter: brightness(0.15);
      transform: scale(1.03);
   }
`;

/** Optional: if you still use this for overlays */
export const LoaderLayer = styled.div`
   position: absolute;
   inset: 0;
   z-index: 1;
   pointer-events: none;

   display: flex;
   align-items: center;
   justify-content: center;
`;
