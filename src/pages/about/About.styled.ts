// About.styled.ts
import styled, { css } from "styled-components";
import { up } from "$styles/constants/breakpoints";

export const PageWrapper = styled.div`
   width: 90%;
   max-height: 100%;
   margin: 5% auto 0 auto;
   display: flex;
   flex-direction: column;
   gap: 5rem;

   ${up("LARGE")} {
      width: 70%;
      gap: 10rem;
   }
`;

// About.styled.ts
export const ValuesRow = styled.div`
   display: flex;
   flex-direction: column;
   gap: 1rem;

   /* Make direct children flexible */
   & > * {
      flex: 1 1 100%;
      min-width: 0; /* prevent overflow from long text */
   }

   ${up("LARGE")} {
      flex-direction: row;

      /* three equal columns on large screens */
      & > * {
         flex: 1 1 0;
      }
   }
`;

export const TeamSection = styled.section`
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 3rem;
`;

export const TeamSectionHeaderRow = styled.div`
   width: 100%;
   display: flex;
   justify-content: center;

   h2 {
      font-family: ${({ theme }) => theme.fonts.heading};
      font-size: ${({ theme }) => theme.fontSizes.h2};
      color: ${({ theme }) => theme.tokens.fg};
      margin: 0;
   }
`;

export const TeamRowOuter = styled.div`
   width: 100%;
   display: flex;
`;

export const ScrollContainer = styled.div<{ $center?: boolean }>`
   width: 100%;

   ${({ $center }) =>
      $center
         ? css`
              /* For short rows: no scroll, just normal block flow */
              overflow-x: visible;
           `
         : css`
              /* For long rows: enable horizontal scroll */
              overflow-x: auto;
              -webkit-overflow-scrolling: touch;
           `}

   overscroll-behavior-x: contain;
   scrollbar-width: thin;
   scrollbar-color: ${({ theme }) => theme.tokens.border} transparent;

   &::-webkit-scrollbar {
      height: 6px;
   }

   &::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.tokens.border};
      border-radius: 3px;
   }
`;

export const CardsTrack = styled.div<{ $center?: boolean }>`
   display: flex;
   flex-direction: row;
   gap: 1rem;
   padding-bottom: 1rem;

   ${({ $center }) =>
      $center
         ? css`
              /* Center mode:
                 Let the row take full width of the container
                 and center its children. No "max-content" clamp.
              */
              width: 100%;
              justify-content: center;
              flex-wrap: wrap; /* optional: wrap on really tiny screens */
           `
         : css`
              /* Scroll mode:
                 Shrink-wrap to content so it can overflow horizontally.
              */
              width: max-content;
              justify-content: flex-start;
              flex-wrap: nowrap;
           `}
`;
