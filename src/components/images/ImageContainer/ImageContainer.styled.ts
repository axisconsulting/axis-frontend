import styled from "styled-components";
import { up } from "$styles/constants/breakpoints";
import { withAlpha } from "$styles/colors";

export const Wrapper = styled.div`
   border: 1px solid ${({ theme }) => withAlpha(theme.palette.STARDUST_GRAY, 0.2)};
   position: relative;
   width: 100%;
   height: auto;
   overflow: hidden;
   border-radius: 0.25rem;
`;

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
   bottom: 10px; /* fixed unit */
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

export const MediaBox = styled.div`
   position: relative; /* needed for loader overlay */
   height: 20rem;
   border-radius: 0.25rem;
   overflow: hidden;
   width: 100%;

   ${up("LARGE")} {
      min-height: 40rem;
   }
`;

/**
 * Use $visible for fade-in after load while preserving your
 * brightness/scale hover transitions.
 */
export const MediaImg = styled.img<{ $visible: boolean }>`
   width: 100%;
   height: 100%;
   object-fit: cover;

   /* existing effects */
   filter: brightness(0.25);
   transform: scale(1);

   /* fade-in control */
   opacity: ${({ $visible }) => ($visible ? 1 : 0)};

   /* combine transitions (opacity + your existing ones) */
   transition: opacity 240ms ease-in-out, filter 0.5s ease, transform 0.5s ease;

   ${Wrapper}:hover & {
      filter: brightness(0.15);
      transform: scale(1.03);
   }

   ${up("LARGE")} {
      height: 40rem;
   }
`;

/** Full-bleed overlay used for both loading and error states */
export const LoaderLayer = styled.div`
   position: absolute;
   inset: 0;
   z-index: 1;
   pointer-events: none;

   display: flex;
   align-items: center;
   justify-content: center;
`;
